import { ApiClient } from '../apiClient';

export interface Customer {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  notes?: string;
  squareId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerListResponse {
  data: Customer[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
}

export interface CreateCustomerRequest {
  name: string;
  email?: string;
  phone?: string;
  notes?: string;
}

export interface UpdateCustomerRequest {
  name?: string;
  email?: string;
  phone?: string;
  notes?: string;
}

export class CustomerService {
  constructor(private apiClient: ApiClient) {}

  async getCustomers(params?: {
    page?: number;
    limit?: number;
    search?: string;
  }): Promise<CustomerListResponse> {
    const queryParams = new URLSearchParams();
    
    if (params?.page) {
      queryParams.append('page', params.page.toString());
    }
    if (params?.limit) {
      queryParams.append('limit', params.limit.toString());
    }
    if (params?.search) {
      queryParams.append('search', params.search);
    }
    
    const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';
    const response = await this.apiClient.get<CustomerListResponse>(`/customers${queryString}`);
    return response;
  }

  async getCustomer(id: string): Promise<Customer> {
    const response = await this.apiClient.get<Customer>(`/customers/${id}`);
    return response;
  }

  async createCustomer(data: CreateCustomerRequest): Promise<Customer> {
    const response = await this.apiClient.post<Customer>('/customers', data);
    return response;
  }

  async updateCustomer(id: string, data: UpdateCustomerRequest): Promise<Customer> {
    const response = await this.apiClient.put<Customer>(`/customers/${id}`, data);
    return response;
  }

  async deleteCustomer(id: string): Promise<void> {
    await this.apiClient.delete(`/customers/${id}`);
  }

  async searchCustomers(searchTerm: string): Promise<CustomerListResponse> {
    return this.getCustomers({ search: searchTerm, limit: 50 });
  }
} 
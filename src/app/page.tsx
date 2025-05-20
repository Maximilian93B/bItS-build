import { DynamicGallery } from "./components/gallery/dynamic-Gallery";
import { ParallaxSections } from "./components/ui/parallax-section";
import { TattooHero } from "./components/ui/Hero";
import { HorizontalSplitParallax } from "./components/ui/horizontal-split";
import { ArtistShowcase } from "./components/ui/ArtistShowcase";
import { CtaSection } from "./components/ui/CtaSection";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <TattooHero />
      <HorizontalSplitParallax />
      <ArtistShowcase />
      <ParallaxSections /> 
      <DynamicGallery />
      <CtaSection />
    </div>
  );
}
          
import { siteData } from "../src/data/site-data";
import { AboutSection } from "../src/components/sections/AboutSection";
import { ContactSection } from "../src/components/sections/ContactSection";
import { DetailingSection } from "../src/components/sections/DetailingSection";
import { GallerySection } from "../src/components/sections/GallerySection";
import { HomeSection } from "../src/components/sections/HomeSection";
import { RentalSection } from "../src/components/sections/RentalSection";
import { SiteHeader } from "../src/components/sections/SiteHeader";

export default function Home() {
  return (
    <main>
      <SiteHeader brand={siteData.brand} navigation={siteData.navigation} />
      <HomeSection home={siteData.home} />
      <RentalSection rental={siteData.rental} />
      <DetailingSection detailing={siteData.detailing} />
      <GallerySection gallery={siteData.gallery} />
      <AboutSection about={siteData.about} />
      <ContactSection contact={siteData.contact} />
    </main>
  );
}

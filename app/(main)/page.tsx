import React from "react";
import { HomeCarousel } from "./Home-Page/HomeCarousel";
import { NewsUpdates } from "./Home-Page/NewsUpdates";
import { AboutSection } from "./Home-Page/AboutSection";

export default function Home() {
  return (
    <div className="w-full">
      <section className="py-2 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="pt-8 px-0 pb-6 relative z-10 overflow-visible">
            <HomeCarousel />
            <NewsUpdates />
            <AboutSection />
          </div>
        </div>
      </section>
    </div>
  );
}

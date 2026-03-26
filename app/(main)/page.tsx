import { HomeCarousel } from "./Home-Page/HomeCarousel";
import { AboutSection } from "./Home-Page/AboutSection";

export default function Home() {
  return (
    <div className="w-full bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-32 mb-32">
        {/* Hero / Carousel Section */}
        <section className="relative z-10">
          <HomeCarousel />
        </section>

        {/* About & Institutional Media Section */}
        <section>
          <AboutSection />
        </section>
      </div>
    </div>
  );
}




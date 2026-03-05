"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// removed unused Image import

export default function Home() {
  // carousel removed; using static banners

  // About cards configuration (convert paragraphs into colored cards)
  const aboutSections = [
    {
      title: "Overview",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            The City Schools Division of Imus was established pursuant to Deped
            Order No. 50 s. 2002, when the City Government of Imus was created
            with the promulgation of RA 10161.
          </p>
          <p className="leading-relaxed mb-4">
            A memorandum of Agreement (MOA) was signed by the Secretary of the
            Department of Education, Bro. Armin A. Luistro FSC and the City
            Mayor of Imus, Hon. Emmanuel L. Maliksi, who then worked
            collaboratively for the realization of this goal. Likewise, Dr.
            Lualhati O. Cadavedo was appointed as its first OIC Division
            Superintendent on January 12, 2013.
          </p>
          <p className="leading-relaxed">
            Three Districts were created to ensure the effective and efficient
            delivery of Education services to it’s clientele.
          </p>
        </>
      ),
    },
    {
      title: "Vision",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            We dream of Filipinos who passionately love their country and whose
            values and competencies enable them to realize their full potential
            and contribute meaningfully to building the nation.
          </p>
          <p className="leading-relaxed">
            As a learner-centered public institution, the Department of
            Education continuously improves itself to better serve its
            stakeholders.
          </p>
        </>
      ),
    },
    {
      title: "Mission",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            To protect and promote the right of every Filipino to quality,
            equitable, culture-based, and complete basic education where:
          </p>
          <ul className="space-y-2 ml-6 list-disc">
            <li>
              Students learn in a child-friendly, gender-sensitive, safe, and
              motivating environment
            </li>
            <li>
              Teachers facilitate learning and constantly nurture every learner
            </li>
            <li>
              Administrators and staff, as stewards of the institution, ensure
              an enabling and supportive environment for effective learning to
              happen
            </li>
            <li>
              Family, community, and other stakeholders are actively engaged and
              share responsibility for developing life-long learners
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Mandate",
      content: (
        <p className="leading-relaxed">
          The Department of Education was established through the Education
          Decree of 1863 as the Superior Commission of Primary Instruction under
          a Chairman. The Education agency underwent many reorganization efforts
          in the 20th century in order to better define its purpose vis a vis
          the changing administrations and charters. The present day Department
          of Education was eventually mandated through Republic Act 9155,
          otherwise known as the Governance of Basic Education act of 2001 which
          establishes the mandate of this agency.
        </p>
      ),
    },
    {
      title: "Quality Policy",
      content: (
        <p className="leading-relaxed">
          Schools Division Office of Imus City commits to delivering quality
          services responsive to the needs of its clientele in accordance with
          mandated standards, principles of transparent, ethical and accountable
          governance, and continous improvement process towards the holistic
          development of "BIDAng" Imusenyo.
        </p>
      ),
    },
  ];
  // cleaned: removed unused `cardColors` and `cardClass`
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 3, 4]);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const slides = [
    {
      id: 1,
      title: "EARLY REGISTRATION NG SY 2026-2027",
      subtitle: "Makipag-ugnayan sa papasukang paaralan",
      date: "January 31 - February 27, 2026",
      description:
        "Open to incoming Kindergarten, Grades 1, 7, and 11 learners.",
      image: "/images/carousel/Early-Reg-2026.png",
    },
    {
      id: 2,
      title: "LEARNING RESOURCES PORTAL",
      subtitle: "Search, download and use quality learning resources",
      date: "Available online",
      description:
        "Access curated teaching and professional development materials.",
      image: "/images/carousel/LRMDS.jpg",
    },
    {
      id: 3,
      title: "SCHOOLS DIVISION OF IMUS CITY",
      subtitle: "Announcements & Events",
      date: "2026",
      description:
        "Updates and highlights from the Schools Division of Imus City.",
      image: "/images/carousel/Schools%20Division%20of%20Imus%20City.png",
    },
    // user's attached banner (place file at public/images/carousel/attached-banner.png)
    {
      id: 4,
      title: "ATTACHED BANNER",
      subtitle: "",
      date: "",
      description: "",
      image: "/images/carousel/QPSslider.jpg",
    },
  ];

  // Carousel state and controls
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // carousel uses a single uniform display for all slides

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // static banners — no auto-rotate or controls

  return (
    <div className="w-full">
      {/* Carousel Section */}
      <section className="relative w-full bg-white">
        <div className="relative w-full h-[420px] md:h-[560px] bg-gray-50 flex items-center group">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 flex items-center justify-center px-0 transition-opacity duration-700 ease-in-out ${
                idx === currentSlide ? "opacity-100 z-10" : "opacity-0"
              }`}
            >
              <div className="w-full flex items-center justify-center">
                <div className="w-full h-[420px] md:h-[560px] overflow-hidden relative flex items-center justify-center">
                  <div className="w-full h-[420px] md:h-[560px] flex items-center justify-center bg-gray-50 overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Prev / Next controls */}
          <button
            onClick={prevSlide}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 z-30 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 z-30 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">News & Updates</h2>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              View all
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                date: "Feb 28, 2026",
                title: "Division Announces Early Registration Schedule",
                excerpt:
                  "The Schools Division Office of Imus City announces early registration dates for incoming learners for SY 2024-2025.",
              },
              {
                id: 2,
                date: "Jan 15, 2026",
                title: "Learner Support Program Expanded",
                excerpt:
                  "New support initiatives were launched to assist learners with distance and blended learning modalities.",
              },
              {
                id: 3,
                date: "Dec 10, 2025",
                title: "Division Awards Exemplary Teachers",
                excerpt:
                  "Outstanding teachers from elementary and secondary levels were recognized during the division awards ceremony.",
              },
            ].map((n) => (
              <article
                key={n.id}
                className="bg-white border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <p className="text-sm text-gray-500 mb-2">{n.date}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {n.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4">{n.excerpt}</p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline text-sm"
                >
                  Read more
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-2 bg-white">
        <div className="max-w-7xl mx-auto px-4 relative overflow-visible">
          <div className="border border-gray-200 rounded-lg pt-8 px-6 pb-6 relative z-10 overflow-visible">
            <div className="absolute left-0 top-0 -translate-y-1/2 z-40 w-full pointer-events-none">
              <div
                className="relative z-50 pointer-events-none"
                aria-hidden="true"
                style={{ marginTop: -20 }}
              >
                <span className="absolute left-6 top-0 -translate-y-1/2 bg-[#032977] text-white text-lg md:text-2xl lg:text-3xl font-bold whitespace-nowrap px-6 py-2 rounded-md pointer-events-none">
                  Schools Division Office of Imus City
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <div className="mb-8" />

                <div className="space-y-8 text-gray-700">
                  <div className="space-y-4">
                    {aboutSections.map((sec, idx) => {
                      return (
                        <div key={idx} className="mb-6">
                          <h3 className="text-3xl font-bold text-white inline-block px-4 py-2 rounded bg-gradient-to-r bg-blue-600 from-blue-500 to-blue-700 mb-2">
                            {sec.title}
                          </h3>
                          <div className="mt-3 mb-4 h-[2px] bg-gray-200 w-24 rounded" />
                          <div className="text-sm leading-relaxed text-gray-700">
                            {sec.content}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">
                      IMUS HYMN
                    </h3>
                    {playingVideo === "aDD7lM0iO5Q" ? (
                      <div className="relative rounded-lg overflow-hidden shadow-lg h-48">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/aDD7lM0iO5Q?autoplay=1&rel=0&modestbranding=1`}
                          title="Imus Hymn"
                          allow="autoplay; encrypted-media; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setPlayingVideo("aDD7lM0iO5Q")}
                        aria-label="Play Imus Hymn"
                        className="block w-full text-left"
                      >
                        <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-48">
                          <img
                            src={`https://img.youtube.com/vi/aDD7lM0iO5Q/hqdefault.jpg`}
                            alt="Imus Hymn thumbnail"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-red-600 rounded-full p-4 transition-transform">
                              <svg
                                className="w-8 h-8 text-white fill-current ml-1"
                                viewBox="0 0 24 24"
                              >
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </button>
                    )}
                    <p className="text-sm text-gray-700 mt-3">
                      <span className="font-semibold">
                        Composed & Lyrics by:
                      </span>{" "}
                      Engr. Aurello P. Bautista
                      <br />
                      <span className="font-semibold">Sung by:</span> Christian
                      M. Bautista
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">
                      NATIONAL ANTHEM V5
                    </h3>
                    {playingVideo === "ACKqYOV2Urk" ? (
                      <div className="relative rounded-lg overflow-hidden shadow-lg h-48">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/ACKqYOV2Urk?autoplay=1&rel=0&modestbranding=1`}
                          title="National Anthem"
                          allow="autoplay; encrypted-media; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setPlayingVideo("ACKqYOV2Urk")}
                        aria-label="Play National Anthem"
                        className="block w-full text-left"
                      >
                        <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-48">
                          <img
                            src={`https://img.youtube.com/vi/ACKqYOV2Urk/hqdefault.jpg`}
                            alt="National Anthem thumbnail"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-red-600 rounded-full p-4 transition-transform">
                              <svg
                                className="w-8 h-8 text-white fill-current ml-1"
                                viewBox="0 0 24 24"
                              >
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </button>
                    )}
                    <p className="text-sm text-gray-700 mt-3">
                      <span className="font-semibold">Directed by:</span> Jaime
                      G. Caro Jr. and Bob C. Belacura Jr.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

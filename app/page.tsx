"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
  const cardColors = [
    { bg: "bg-blue-100", border: "border-blue-200" },
    { bg: "bg-green-100", border: "border-green-200" },
    { bg: "bg-yellow-100", border: "border-yellow-200" },
    { bg: "bg-indigo-100", border: "border-indigo-200" },
    { bg: "bg-pink-100", border: "border-pink-200" },
  ];
  const cardClass = (idx: number) => {
    const c = cardColors[idx % cardColors.length];
    return `${c.bg} ${c.border}`;
  };
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 3, 4]);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const slides = [
    {
      id: 1,
      title: "EARLY REGISTRATION",
      subtitle: "for SY 2021-2022",
      date: "March 26 to April 30, 2021",
      description:
        "Open to all incoming Kindergarten, Grades 1, 7, and 11 learners",
      image: "/carousel-1.jpg",
    },
    {
      id: 2,
      title: "WELCOME TO DepEd",
      subtitle: "Imus City Schools Division",
      date: "Academic Year 2024-2025",
      description: "Quality Education for All",
      image: "/carousel-2.jpg",
    },
    {
      id: 3,
      title: "EXCELLENCE IN EDUCATION",
      subtitle: "Building Future Leaders",
      date: "Learn More",
      description: "Join us in our mission for educational excellence",
      image: "/carousel-3.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full">
      {/* Carousel Section */}
      <section className="relative w-full bg-white overflow-hidden">
        {/* Carousel Container */}
        <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-50">
          {/* Slide Background */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center px-4 md:px-16 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Blue Border Frame */}
              <div className="w-full max-w-5xl bg-white border-8 border-blue-600 rounded-lg shadow-2xl p-12 md:p-16">
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
                      {slide.title}
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                      {slide.subtitle}
                    </h3>
                    <p className="text-2xl md:text-3xl font-bold text-yellow-600 mb-6">
                      {slide.date}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
                    <p className="text-lg md:text-xl text-gray-800 text-center leading-relaxed">
                      {slide.description}
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-blue-600 rounded-lg p-6 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      <div>
                        <p className="font-bold text-yellow-300 mb-2">
                          Landline
                        </p>
                        <p className="text-sm">(046) 419-8450 local 204</p>
                        <p className="text-sm">local 227</p>
                      </div>
                      <div>
                        <p className="font-bold text-yellow-300 mb-2">Mobile</p>
                        <p className="text-sm">0917-504-1518</p>
                      </div>
                      <div>
                        <p className="font-bold text-yellow-300 mb-2">Email</p>
                        <p className="text-sm">sgod.imus@deped.gov.ph</p>
                        <p className="text-sm">planning.imus@deped.gov.ph</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons - Positioned on carousel content */}
          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-200 rounded-full p-3 transition-colors shadow-xl border-2 border-blue-600 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={40} className="text-blue-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-200 rounded-full p-3 transition-colors shadow-xl border-2 border-blue-600 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={40} className="text-blue-600" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-colors ${
                  index === currentSlide
                    ? "bg-blue-600"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Left Column - About Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Schools Division Office of Imus City
              </h2>

              <div className="space-y-8 text-gray-700">
                <div className="space-y-4">
                  {aboutSections.map((sec, idx) => {
                    const nonDropdown = [0, 3, 4];
                    const classes = `border rounded-lg overflow-hidden ${cardClass(idx)}`;
                    if (nonDropdown.includes(idx)) {
                      return (
                        <div key={idx} className={classes}>
                          <div className="px-4 py-3 bg-gray-50">
                            <span className="text-lg font-semibold">
                              {sec.title}
                            </span>
                          </div>
                          <div className="px-4 py-4 text-sm leading-relaxed">
                            {sec.content}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div key={idx} className={classes}>
                        <button
                          aria-expanded={openIndexes.includes(idx)}
                          onClick={() =>
                            setOpenIndexes((prev) =>
                              prev.includes(idx)
                                ? prev.filter((i) => i !== idx)
                                : [...prev, idx],
                            )
                          }
                          className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100"
                        >
                          <span className="text-lg font-semibold">
                            {sec.title}
                          </span>
                          <span className="text-gray-600">
                            {openIndexes.includes(idx) ? "−" : "+"}
                          </span>
                        </button>
                        <div className="px-4 py-2">
                          <p className="text-sm text-gray-600">{sec.summary}</p>
                        </div>
                        {openIndexes.includes(idx) && (
                          <div className="px-4 py-4 text-sm leading-relaxed">
                            {sec.content}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Video Boxes */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Video Box 1 - Imus Hymn */}
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
                    <span className="font-semibold">Composed & Lyrics by:</span>{" "}
                    Engr. Aurello P. Bautista
                    <br />
                    <span className="font-semibold">Sung by:</span> Christian M.
                    Bautista
                  </p>
                </div>

                {/* Video Box 2 - National Anthem */}
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
                    <span className="font-semibold">Directed by:</span> Jaime G.
                    Caro Jr. and Bob C. Belacura Jr.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

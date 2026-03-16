"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HomeCarousel() {
  const slides = [
    {
      id: 1,
      title: "EARLY REGISTRATION NG SY 2026-2027",
      subtitle: "Makipag-ugnayan sa papasukang paaralan",
      date: "January 31 - February 27, 2026",
      description:
        "Open to incoming Kindergarten, Grades 1, 7, and 11 learners.",
      image: "/images/carousel/1.jpg",
    },
    {
      id: 2,
      title: "LEARNING RESOURCES PORTAL",
      subtitle: "Search, download and use quality learning resources",
      date: "Available online",
      description:
        "Access curated teaching and professional development materials.",
      image: "/images/carousel/2.jpg",
    },
    {
      id: 3,
      title: "SCHOOLS DIVISION OF IMUS CITY",
      subtitle: "Announcements & Events",
      date: "2026",
      description:
        "Updates and highlights from the Schools Division of Imus City.",
      image: "/images/carousel/3.jpg",
    },
    {
      id: 4,
      title: "ATTACHED BANNER",
      subtitle: "",
      date: "",
      description: "",
      image: "/images/carousel/4.jpg",
    },
    {
      id: 5,
      title: "ADDITIONAL SLIDE",
      subtitle: "",
      date: "",
      description: "",
      image: "/images/carousel/5.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[420px] md:h-[560px] bg-red-50 border-4 border-red-500 flex items-center group mb-12 rounded-2xl shadow-xl overflow-hidden p-2">
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
  );
}

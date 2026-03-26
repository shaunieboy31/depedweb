"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HomeCarousel() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slides = [
    {
      id: "1",
      title: "LEARNING RESOURCES PORTAL",
      image: "/images/carousel/1.jpg",
    },
    {
      id: "2",
      title: "SCHOOLS DIVISION OF IMUS CITY",
      image: "/images/carousel/2.jpg",
    },
    {
      id: "3",
      title: "Early Registration SY 2026-2027",
      image: "/images/carousel/3.jpg",
    },
  ];

  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full bg-white mb-16">
      {/* Main Carousel Container */}
      <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden group">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0"
            }`}
          >
            {/* Image Layer - Clean, no overlays */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority={idx === 0}
              />
            </div>
          </div>
        ))}

        {/* Minimal Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-slate-800 rounded-full transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-slate-800 rounded-full transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Centered Pagination Dots Below */}
      <div className="flex justify-center gap-3 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === currentSlide ? "w-8 bg-[#4279D2]" : "w-2.5 bg-slate-200 hover:bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}



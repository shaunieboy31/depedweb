'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'EARLY REGISTRATION',
      subtitle: 'for SY 2021-2022',
      date: 'March 26 to April 30, 2021',
      description: 'Open to all incoming Kindergarten, Grades 1, 7, and 11 learners',
      image: '/carousel-1.jpg',
    },
    {
      id: 2,
      title: 'WELCOME TO DepEd',
      subtitle: 'Imus City Schools Division',
      date: 'Academic Year 2024-2025',
      description: 'Quality Education for All',
      image: '/carousel-2.jpg',
    },
    {
      id: 3,
      title: 'EXCELLENCE IN EDUCATION',
      subtitle: 'Building Future Leaders',
      date: 'Learn More',
      description: 'Join us in our mission for educational excellence',
      image: '/carousel-3.jpg',
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
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Blue Border Frame */}
              <div className="w-full max-w-5xl bg-white border-8 border-blue-600 rounded-lg shadow-2xl p-12 md:p-16">
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">{slide.title}</h2>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">{slide.subtitle}</h3>
                    <p className="text-2xl md:text-3xl font-bold text-yellow-600 mb-6">{slide.date}</p>
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
                        <p className="font-bold text-yellow-300 mb-2">Landline</p>
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
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-400 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white bg-blue-600 px-6 py-3 inline-block mb-8">FEATURED PROGRAMS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Talakayan at Panayam para sa Angat at Tapat na Aksyong Napapanaho",
                description: "Layong mas makapaghatid ng de-kalidad na serbisyong alinsunod sa mandato ng Departamento, isasagawa ng Schools Division Office of Imus City...",
                link: "#"
              },
              {
                title: "Imus National High School (INHS)",
                description: "As a fruitful result, INHS was named by the Region as Best Brigada Eskwela Implementer (Mega School Category) in two consecutive years and was awarded as a National Implementer in Puerto Princesa, Palawan (2017) and Dipolog, Zamboanga del Norte (2018).",
                link: "#"
              },
              {
                title: "Inspiring Messages From Mr. Homer N. Mendoza",
                description: "\"Leadership is the ability to translate vision into reality\"",
                link: "#"
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-300 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-gradient-to-b from-gray-300 to-gray-400"></div>
                <div className="p-6">
                  <a href={program.link} className="text-lg font-semibold text-blue-600 hover:text-blue-800 mb-3 block hover:underline">{program.title}</a>
                  <p className="text-gray-700 text-sm leading-relaxed">{program.description}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium mt-4 inline-block text-sm">
                    read more...
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - About Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Schools Division Office of Imus City</h2>
              
              <div className="space-y-8 text-gray-700">
                {/* History */}
                <div>
                  <p className="leading-relaxed mb-4">
                    The City Schools Division of Imus was established pursuant to Deped Order No. 50 s. 2002, when the City Government of Imus was created with the promulgation of RA 10161.
                  </p>
                  <p className="leading-relaxed mb-4">
                    A memorandum of Agreement (MOA) was signed by the Secretary of the Department of Education, Bro. Armin A. Luistro FSC and the City Mayor of Imus, Hon. Emmanuel L. Maliksi, who then worked collaboratively for the realization of this goal. Likewise, Dr. Lualhati O. Cadavedo was appointed as its first OIC Division Superintendent on January 12, 2013.
                  </p>
                  <p className="leading-relaxed">
                    Three Districts were created to ensure the effective and efficient delivery of Education services to its clientele.
                  </p>
                </div>

                {/* Vision */}
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">VISION</h3>
                  <p className="leading-relaxed mb-4">
                    We dream of Filipinos who passionately love their country and whose values and competencies enable them to realize their full potential and contribute meaningfully to building the nation.
                  </p>
                  <p className="leading-relaxed">
                    As a learner-centered public institution, the Department of Education continuously improves itself to better serve its stakeholders.
                  </p>
                </div>

                {/* Mission */}
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">MISSION</h3>
                  <p className="leading-relaxed mb-4">
                    To protect and promote the right of every Filipino to quality, equitable, culture-based, and complete basic education where:
                  </p>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Students learn in a child-friendly, gender-sensitive, safe, and motivating environment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Teachers facilitate learning and constantly nurture every learner</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Administrators and staff, as stewards of the institution, ensure an enabling and supportive environment for effective learning to happen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Family, community, and other stakeholders are actively engaged and share responsibility for developing life-long learners</span>
                    </li>
                  </ul>
                </div>

                {/* Mandate */}
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">MANDATE</h3>
                  <p className="leading-relaxed">
                    The Department of Education was established through the Education Decree of 1863 as the Superior Commission of Primary Instruction under a Chairman. The Education agency underwent many reorganization efforts in the 20th century in order to better define its purpose vis a vis the changing administrations and charters. The present day Department of Education was eventually mandated through Republic Act 9155, otherwise known as the Governance of Basic Education act of 2001 which establishes the mandate of this agency.
                  </p>
                </div>

                {/* Quality Policy */}
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">QUALITY POLICY</h3>
                  <p className="leading-relaxed">
                    Schools Division Office of Imus City Commits to delivering quality services responsive to the needs of its clientele in accordance with mandated standards, principles of transparent, ethical and accountable governance, and continuous improvement process towards the holistic development of "BIDAng" Imusenyo.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Video Boxes */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Video Box 1 - Imus Hymn */}
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">IMUS HYMN</h3>
                  <a href="#" className="block">
                    <div className="bg-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-48 flex items-center justify-center group">
                      <div className="absolute flex items-center justify-center">
                        <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                  <p className="text-sm text-gray-700 mt-3">
                    <span className="font-semibold">Composed & Lyrics by:</span> Engr. Aurello P. Bautista<br/>
                    <span className="font-semibold">Sung by:</span> Christian M. Bautista
                  </p>
                </div>

                {/* Video Box 2 - National Anthem */}
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">NATIONAL ANTHEM V5</h3>
                  <a href="#" className="block">
                    <div className="bg-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-48 flex items-center justify-center group">
                      <div className="absolute flex items-center justify-center">
                        <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                  <p className="text-sm text-gray-700 mt-3">
                    <span className="font-semibold">Directed by:</span> Jaime G. Caro Jr. and Bob C. Belacura Jr.
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

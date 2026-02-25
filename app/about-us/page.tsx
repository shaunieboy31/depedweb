'use client';

import React from 'react';
import { PlayCircle } from 'lucide-react';
import Link from 'next/link';

export default function AboutUs() {
  const programs = [
    {
      id: 1,
      title: 'Talakayan at Panayam para sa Angat at Tapat na Aksyong Napapanahon',
      description: 'Lavong mas makapagahalid ng de-kalidad na serbisyong alinsunod sa mandato ng Departamento, isasagawa ng Schools Division Office of Imus City...',
      image: '/programs-1.jpg',
      readMore: '/programs/talakayan-panayam'
    },
    {
      id: 2,
      title: 'Imus National High School (INHS)',
      description: 'As a fruitful result, INHS was named by the Region as Best Brigada Eskwela Implementer (Mega School Category) in two consecutive years and was awarded as a National Implementer in Puerto Princesa, Palawan (2017) and Dipolog, Zamboanga del Norte (2018).',
      image: '/programs-2.jpg',
      readMore: '/schools/inhs'
    },
    {
      id: 3,
      title: 'Inspiring Messages From Mr. Homer N. Mendoza',
      description: '"Leadership is the ability to translate vision into reality."',
      image: '/programs-3.jpg',
      readMore: '/about-us/learning-leaders'
    },
  ];

  return (
    <div className="w-full">
      {/* Featured Programs Section */}
      <section className="px-4 lg:px-16 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center text-sm font-semibold">Image Placeholder</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">{program.title}</h3>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{program.description}</p>
                  <Link href={program.readMore} className="text-blue-600 text-sm font-semibold hover:text-blue-800">
                    read more...
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Content Section */}
      <section className="px-4 lg:px-16 py-16 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Schools Division Office of Imus City</h2>
            
            <p className="text-gray-700 mb-4">
              The City Schools Division of Imus was established pursuant to Deped Order No. 50 s. 2002, when the City Government of Imus was created with the promulgation of RA 10161.
            </p>

            <p className="text-gray-700 mb-4">
              A memorandum of Agreement (MOA) was signed by the Secretary of the Department of Education, Bro. Armin A. Luistro FSC and the City Mayor of Imus, Hon. Emmanuel L. Maliksi, who then worked collaboratively for the realization of this goal. Likewise, Dr. Lualhati O. Cadavedo was appointed as its first OIC Division Superintendent on January12, 2013.
            </p>

            <p className="text-gray-700 mb-8">
              Three Districts were created to ensure the effective and efficient delivery of Education services to it's clientele.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">VISION</h3>
              <p className="text-gray-700">
                We dream of Filipinos who passionately love their country and whose values and competencies enable them to realize their full potential and contribute meaningfully to building the nation.
              </p>
              <p className="text-gray-700 mt-4">
                As a learner-centered public institution, the Department of Education continuously improves itself to better serve its stakeholders.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">MISSION</h3>
              <p className="text-gray-700 mb-4">
                To protect and promote the right of every Filipino to quality, equitable, culture-based, and complete basic education where:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Students learn in a child-friendly, gender-sensitive, safe, and motivating environment</li>
                <li>Teachers facilitate learning and constantly nurture every learner</li>
                <li>Administrators and staff, as stewards of the institution, ensure an enabling and supportive environment for effective learning to happen</li>
                <li>Family, community, and other stakeholders are actively engaged and share responsibility for developing life-long learners</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* IMUS Hymn Video */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">IMUS HYMN</h3>
              <div className="bg-gray-900 rounded-lg overflow-hidden h-64 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-70"></div>
                <PlayCircle size={64} className="text-white relative z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-sm text-center">Imus Hymn Version 5</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mt-3">
                <span className="font-semibold">Composed & Lyrics by:</span> Engr. Aurelio P. Bautista<br/>
                <span className="font-semibold">Sung by:</span> Christian M. Bautista
              </p>
            </div>

            {/* National Anthem Video */}
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-6">NATIONAL ANTHEM V5</h3>
              <div className="bg-gray-900 rounded-lg overflow-hidden h-64 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-70"></div>
                <PlayCircle size={64} className="text-white relative z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-sm text-center">National Anthem v5</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mt-3">
                <span className="font-semibold">Directed by:</span> Jaime G. Caro Jr. and Bob C. Belacura Jr.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mandate and Quality Policy Section */}
      <section className="px-4 lg:px-16 py-16">
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-6">MANDATE</h3>
          <p className="text-gray-700 mb-8">
            The Department of Education was established through the Education Decree of 1863 as the Superior Commission of Primary Instruction under a Chaiman. The Education agency underwent many reorganization efforts in the 20th century in order to better define its purpose vis a vis the changing administrations and charters. The present day Department of Education was eventually mandated through Republic Act 9155, otherwise known as the Governance of Basic Education act of 2001 which establishes the mandate of this agency.
          </p>

          <h3 className="text-2xl font-bold text-blue-600 mb-6">QUALITY POLICY</h3>
          <p className="text-gray-700">
            Schools Division Office of Imus City Commits to delivering quality services responsive to the needs of its clientele in accordance with mandated standards, principles of transparent, ethical and accountable governance, and continous improvement process towards the holistic development of "BIDAng" Imusenyo.
          </p>
        </div>
      </section>

      {/* Government Seals Section */}
      <section className="px-4 lg:px-16 py-16 bg-gray-50">
        <div className="flex justify-center gap-16 mb-12 flex-wrap">
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <div className="text-yellow-700 font-bold text-xs text-center">PHILIPPINE<br/>SEAL</div>
            </div>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
              <div className="text-blue-800 font-bold text-xs text-center">FREEDOM OF<br/>INFORMATION</div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Links Section */}
      <section className="px-4 lg:px-16 py-16 bg-gray-900 text-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-white font-bold mb-4">REPUBLIC OF THE PHILIPPINES</h4>
            <p className="text-sm mb-4">
              All content is in the public domain unless otherwise stated.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">ABOUT GOVPH</h4>
            <p className="text-sm mb-4">
              Learn more about the Philippine government, its structure, how government works and the people behind it.
            </p>
            <div className="space-y-2 text-sm">
              <p><a href="#" className="hover:text-white">GOV.PH</a></p>
              <p><a href="#" className="hover:text-white">Open Data Portal</a></p>
              <p><a href="#" className="hover:text-white">Official Gazette</a></p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">GOVERNMENT LINKS</h4>
            <div className="space-y-2 text-sm">
              <p><a href="#" className="hover:text-white">Office of the President</a></p>
              <p><a href="#" className="hover:text-white">Office of the Vice President</a></p>
              <p><a href="#" className="hover:text-white">Senate of the Philippines</a></p>
              <p><a href="#" className="hover:text-white">House of Representatives</a></p>
              <p><a href="#" className="hover:text-white">Supreme Court</a></p>
              <p><a href="#" className="hover:text-white">Court of Appeals</a></p>
              <p><a href="#" className="hover:text-white">Sandiganbayan</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

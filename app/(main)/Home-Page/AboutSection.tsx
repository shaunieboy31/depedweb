"use client";

import Image from "next/image";
import React, { useState } from "react";

export function AboutSection() {
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

  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-emerald-50/50 border-4 border-emerald-400 rounded-2xl p-8 shadow-xl">
      <div className="lg:col-span-2">
        <div className="mb-8" />
        <div className="space-y-8 text-gray-700">
          <div className="grid grid-cols-1 gap-6">
            {aboutSections.map((sec, idx) => {
              const bgColors = [
                "bg-gradient-to-br from-blue-50/80 to-blue-100/50 border-blue-100",
                "bg-gradient-to-br from-indigo-50/80 to-purple-100/50 border-indigo-100",
                "bg-gradient-to-br from-emerald-50/80 to-teal-100/50 border-emerald-100",
                "bg-gradient-to-br from-orange-50/80 to-red-100/50 border-orange-100",
                "bg-gradient-to-br from-pink-50/80 to-rose-100/50 border-pink-100",
              ];

              const headerColors = [
                "from-blue-500 to-blue-700 shadow-blue-500/30",
                "from-indigo-500 to-purple-600 shadow-indigo-500/30",
                "from-emerald-500 to-teal-600 shadow-emerald-500/30",
                "from-orange-500 to-red-600 shadow-orange-500/30",
                "from-pink-500 to-rose-600 shadow-pink-500/30",
              ];

              const dividerColors = [
                "bg-blue-300",
                "bg-indigo-300",
                "bg-emerald-300",
                "bg-orange-300",
                "bg-pink-300",
              ];

              return (
                <div
                  key={idx}
                  className={`rounded-xl border p-6 shadow-sm hover:shadow-md transition-all duration-300 ${bgColors[idx % bgColors.length]}`}
                >
                  {idx === 0 && (
                    <div className="mb-6">
                      <span className="inline-block bg-[#032977] text-white text-lg md:text-2xl lg:text-3xl font-bold px-6 py-3 rounded-lg shadow-md">
                        Schools Division Office of Imus City
                      </span>
                    </div>
                  )}

                  <h3
                    className={`text-2xl md:text-3xl font-bold text-white inline-block px-5 py-2.5 rounded-lg bg-gradient-to-r shadow-lg mb-3 ${headerColors[idx % headerColors.length]}`}
                  >
                    {sec.title}
                  </h3>
                  <div
                    className={`mt-2 mb-4 h-[3px] w-24 rounded-full ${dividerColors[idx % dividerColors.length]}`}
                  />
                  <div className="text-[15px] leading-relaxed text-gray-800 font-medium">
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
            <h3 className="text-2xl font-bold text-blue-600 mb-4">IMUS HYMN</h3>
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
                  <Image
                    src={`https://img.youtube.com/vi/aDD7lM0iO5Q/hqdefault.jpg`}
                    alt="Imus Hymn thumbnail"
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
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
              <span className="font-semibold">Composed & Lyrics by:</span> Engr.
              Aurello P. Bautista
              <br />
              <span className="font-semibold">Sung by:</span> Christian M.
              Bautista
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
                  <Image
                    src={`https://img.youtube.com/vi/ACKqYOV2Urk/hqdefault.jpg`}
                    alt="National Anthem thumbnail"
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
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
              <span className="font-semibold">Directed by:</span> Jaime G. Caro
              Jr. and Bob C. Belacura Jr.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

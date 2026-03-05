"use client";

import React from "react";

export default function History() {
  const [openIndexes, setOpenIndexes] = React.useState<number[]>([0, 3, 5]);
  const sections = [
    {
      title: "Overview",
      summary:
        "Brief history and establishment of the Schools Division of Imus City.",
      content: (
        <div className="relative rounded-lg overflow-hidden h-[420px] md:h-[560px]">
          <div
            className="absolute inset-0 bg-cover bg-center brightness-75"
            style={{ backgroundImage: "url('/images/newbuilding.webp')" }}
            aria-hidden
          />

          <div className="relative z-10 px-4 py-8 h-full flex items-center">
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-sky-600/30 text-white rounded-lg p-6 shadow backdrop-blur-sm border border-sky-500/20 transform transition hover:-translate-y-1">
                <p className="text-lg leading-relaxed">
                  The City Schools Division of Imus was established pursuant to
                  Deped Order No. 50 s. 2002, when the City Government of Imus
                  was created with the promulgation of RA 10161.
                </p>
              </div>

              <div className="bg-emerald-600/30 text-white rounded-lg p-6 shadow backdrop-blur-sm border border-emerald-500/20 transform transition hover:-translate-y-1">
                <p className="text-lg leading-relaxed">
                  A memorandum of Agreement (MOA) was signed by the Secretary of
                  the Department of Education, Bro. Armin A. Luistro FSC and the
                  City Mayor of Imus, Hon. Emmanuel L. Maliksi, who then worked
                  collaboratively for the realization of this goal. Likewise,
                  Dr. Lualhati O. Cadavedo was appointed as its first OIC
                  Division Superintendent on January 12, 2013.
                </p>
              </div>

              <div className="bg-amber-500/30 text-white rounded-lg p-6 shadow backdrop-blur-sm border border-amber-400/20 transform transition hover:-translate-y-1">
                <p className="text-lg leading-relaxed">
                  Three Districts were created to ensure the effective and
                  efficient delivery of Education services to its clientele.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Vision",
      summary: "Short statement of the division's vision.",
      content: (
        <>
          <p className="leading-relaxed">
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
      summary:
        "Highlights of the division's mission and learner-centered goals.",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            To protect and promote the right of every Filipino to quality,
            equitable, culture-based, and complete basic education where:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Students learn in a child-friendly, gender-sensitive, safe, and
                motivating environment
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Teachers facilitate learning and constantly nurture every
                learner
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Administrators and staff, as stewards of the institution, ensure
                an enabling and supportive environment for effective learning to
                happen
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Family, community, and other stakeholders are actively engaged
                and share responsibility for developing life-long learners
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Mandate",
      summary:
        "Legal basis and scope of responsibilities for DepEd and the division.",
      content: (
        <div className="relative rounded-lg overflow-hidden h-[420px] md:h-[560px]">
          <div
            className="absolute inset-0 bg-cover bg-center brightness-75"
            style={{
              backgroundImage: "url('/images/deped-division-office-imus.webp')",
            }}
            aria-hidden
          />
          <div className="relative z-10 px-4 py-8 h-full flex items-center">
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-indigo-600/30 text-white rounded-lg p-6 shadow backdrop-blur-sm border border-indigo-500/20  transform transition hover:-translate-y-1">
                <p className="text-lg leading-relaxed">
                  The Department of Education was established through the
                  Education Decree of 1863 as the Superior Commission of Primary
                  Instruction under a Chairman. The Education agency underwent
                  many reorganization efforts in the 20th century in order to
                  better define its purpose vis a vis the changing
                  administrations and charters. The present day Department of
                  Education was eventually mandated through Republic Act 9155,
                  otherwise known as the Governance of Basic Education act of
                  2001 which establishes the mandate of this agency.
                </p>
              </div>

              <div className="bg-pink-600/30 text-white rounded-lg p-6 shadow backdrop-blur-sm border border-pink-500/20  transform transition hover:-translate-y-1">
                <p className="text-lg leading-relaxed">
                  The Department of Education (DepEd) formulates, implements,
                  and coordinates policies, plans, programs and projects in the
                  areas of formal and non-formal basic education. It supervises
                  all elementary and secondary education institutions, including
                  alternative learning systems, both public and private, and
                  provides for the establishment and maintenance of a complete,
                  adequate, and integrated system of basic education relevant to
                  the goals of national development.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Core Values",
      summary: "The four core values that guide the division's conduct.",
      content: (
        <ul className="space-y-2 ml-6">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>Maka-Diyos</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>Maka-tao</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>Makalikasan</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>Makabansa</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Quality Policy & Objectives",
      summary:
        "Policy focus and measurable quality objectives for the division.",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            "The <strong>Department of Education</strong> is committed to
            provide learners with quality Basic Education that is accessible,
            inclusive, and liberating through:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>Proactive Leadership</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>Shared Governance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>Evidence-Based policies, Standards, and Programs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>Responsive and Relevant Curricula</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Highly Competent and Committed Officials, and Teaching, and
                Non-Teaching Personnel
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>An Enabling Learning Environment</span>
            </li>
          </ul>
          <p className="leading-relaxed mt-4">
            The Department upholds the highest standards of conduct and
            performance to fulfill stakeholders' needs and expectations by
            adhering to constitutional mandates, statutory, and regulatory
            requirements, and sustains client satisfaction through continuous
            improvement of the <strong>Quality Management System</strong>.
          </p>
        </>
      ),
    },
  ];
  // replaced colored cards with uniform bordered panels (home-style)
  return (
    <div className="w-full bg-white">
      <section className="px-4 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Schools Division of Imus City
          </h1>
          <div className="border-b border-gray-300 mb-8 pb-4"></div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {/* Left Column - Collapsible Content to reduce scrolling */}
            <div className="lg:col-span-1 text-gray-700">
              <div className="space-y-4">
                {sections.map((sec, idx) => {
                  const nonDropdown = [0, 3, 5];

                  const isOpen = openIndexes.includes(idx);

                  return (
                    <div key={idx} className="">
                      <div className="border border-gray-200 rounded-lg pt-8 px-6 pb-6 relative overflow-visible">
                        <div className="absolute left-0 top-0 -translate-y-1/2 z-40 w-full pointer-events-none">
                          <div
                            className="relative z-50 pointer-events-none"
                            aria-hidden
                          >
                            <span className="absolute left-6 top-0 -translate-y-1/2 bg-[#032977] text-white text-lg font-bold whitespace-nowrap px-6 py-2 rounded-md pointer-events-none">
                              {sec.title}
                            </span>
                          </div>
                        </div>

                        <div className="pt-6">
                          {nonDropdown.includes(idx) ? (
                            <div className="text-sm leading-relaxed">
                              {sec.content}
                            </div>
                          ) : (
                            <>
                              <div className="w-full flex items-center justify-between px-0 py-2">
                                <p className="text-sm text-gray-600">
                                  {sec.summary}
                                </p>
                                <button
                                  onClick={() =>
                                    setOpenIndexes((prev) =>
                                      prev.includes(idx)
                                        ? prev.filter((i) => i !== idx)
                                        : [...prev, idx],
                                    )
                                  }
                                  aria-expanded={isOpen}
                                  className="text-gray-600 ml-4"
                                >
                                  {isOpen ? "−" : "+"}
                                </button>
                              </div>

                              {isOpen && (
                                <div className="mt-4 text-sm leading-relaxed">
                                  {sec.content}
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

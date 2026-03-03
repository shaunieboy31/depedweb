"use client";

import Image from "next/image";
import React from "react";

export default function History() {
  const [previewSrc, setPreviewSrc] = React.useState<string | null>(null);
  const [openIndexes, setOpenIndexes] = React.useState<number[]>([0, 3, 5]);
  const sections = [
    {
      title: "Overview",
      summary:
        "Brief history and establishment of the Schools Division of Imus City.",
      content: (
        <>
          <p className="leading-relaxed">
            The City Schools Division of Imus was established pursuant to Deped
            Order No. 50 s. 2002, when the City Government of Imus was created
            with the promulgation of RA 10161.
          </p>

          <p className="leading-relaxed">
            A memorandum of Agreement (MOA) was signed by the Secretary of the
            Department of Education, Bro. Armin A. Luistro FSC and the City
            Mayor of Imus, Hon. Emmanuel L. Malikski, who then worked
            collaboratively for the realization of this goal. Likewise, Dr.
            Lualhati O. Cadavedo was appointed as its first OIC Division
            Superintendent on January 12, 2013.
          </p>

          <p className="leading-relaxed">
            Three Districts were created to ensure the effective and efficient
            delivery of Education services to it's clientele.
          </p>
        </>
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
        <>
          <p className="leading-relaxed mb-4">
            The Department of Education was established through the Education
            Decree of 1863 as the Superior Commission of Primary Instruction
            under a Chairman. The Education agency underwent many reorganization
            efforts in the 20th century in order to better define its purpose
            vis a vis the changing administrations and charters. The present day
            Department of Education was eventually mandated through Republic Act
            9155, otherwise known as the Governance of Basic Education act of
            2001 which establishes the mandate of this agency.
          </p>
          <p className="leading-relaxed">
            The Department of Education (DepEd) formulates, implements, and
            coordinates policies, plans, programs and projects in the areas of
            formal and non-formal basic education. It supervises all elementary
            and secondary education institutions, including alternative learning
            systems, both public and private, and provides for the establishment
            and maintenance of a complete, adequate, and integrated system of
            basic education relevant to the goals of national development.
          </p>
        </>
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
  const cardColors = [
    { bg: "bg-blue-50", border: "border-blue-200" },
    { bg: "bg-green-50", border: "border-green-200" },
    { bg: "bg-yellow-50", border: "border-yellow-200" },
    { bg: "bg-indigo-50", border: "border-indigo-200" },
    { bg: "bg-pink-50", border: "border-pink-200" },
    { bg: "bg-amber-50", border: "border-amber-200" },
  ];
  const cardClass = (idx: number) => {
    const c = cardColors[idx % cardColors.length];
    return `${c.bg} ${c.border}`;
  };
  return (
    <div className="w-full bg-white">
      <section className="px-4 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Schools Division of Imus City
          </h1>
          <div className="border-b border-gray-300 mb-8 pb-4"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Collapsible Content to reduce scrolling */}
            <div className="lg:col-span-2 text-gray-700">
              <div className="space-y-4">
                {sections.map((sec, idx) => {
                  const nonDropdown = [0, 3, 5];
                  if (nonDropdown.includes(idx)) {
                    return (
                      <div
                        key={idx}
                        className={`border rounded-lg overflow-hidden ${cardClass(idx)}`}
                      >
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
                    <div
                      key={idx}
                      className={`border rounded-lg overflow-hidden ${cardClass(idx)}`}
                    >
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

            {/* Right Column - large preview image beside paragraphs */}
            <div className="lg:col-span-1 self-start">
              <div className="rounded-lg overflow-hidden shadow-lg h-96">
                <Image
                  src="/images/newbuilding.webp"
                  alt="School Building"
                  width={1600}
                  height={960}
                  className="w-full h-96 object-cover cursor-pointer"
                  onClick={() => setPreviewSrc("/images/newbuilding.webp")}
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg h-64 mt-100">
                <Image
                  src="/images/deped-division-office-imus.webp"
                  alt="Division Office Building"
                  width={1200}
                  height={720}
                  className="w-full h-64 object-cover cursor-pointer"
                  onClick={() =>
                    setPreviewSrc("/images/deped-division-office-imus.webp")
                  }
                />
              </div>
            </div>
          </div>
          {previewSrc && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
              onClick={() => setPreviewSrc(null)}
            >
              <div className="max-w-6xl w-full">
                <Image
                  src={previewSrc}
                  alt="Preview"
                  width={1600}
                  height={900}
                  className="w-full h-auto object-contain rounded"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

"use client";

import React from "react";

export default function History() {
  const sections = [
    {
      title: "Overview",
      id: "overview",
      colorTheme: {
        bg: "bg-gradient-to-br from-blue-50/80 to-blue-100/50",
        border: "border-blue-400",
        headerBg: "from-blue-500 to-blue-700 shadow-blue-500/30",
        divider: "bg-blue-300",
      },
      content: (
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 space-y-4">
            <p className="text-gray-700 leading-relaxed text-lg">
              The City Schools Division of Imus was established pursuant to
              Deped Order No. 50 s. 2002, when the City Government of Imus was
              created with the promulgation of RA 10161.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              A memorandum of Agreement (MOA) was signed by the Secretary of the
              Department of Education, Bro. Armin A. Luistro FSC and the City
              Mayor of Imus, Hon. Emmanuel L. Maliksi, who then worked
              collaboratively for the realization of this goal. Likewise, Dr.
              Lualhati O. Cadavedo was appointed as its first OIC Division
              Superintendent on January 12, 2013.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg font-medium">
              Three Districts were created to ensure the effective and efficient
              delivery of Education services to its clientele.
            </p>
          </div>
          <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-lg border-2 border-white">
            <img
              src="/images/newbuilding.webp"
              alt="SDO Imus Building"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Vision",
      id: "vision",
      colorTheme: {
        bg: "bg-gradient-to-br from-indigo-50/80 to-purple-100/50",
        border: "border-indigo-400",
        headerBg: "from-indigo-500 to-purple-600 shadow-indigo-500/30",
        divider: "bg-indigo-300",
      },
      content: (
        <div className="space-y-4 text-center py-6">
          <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed italic max-w-4xl mx-auto">
            "We dream of Filipinos who passionately love their country and whose
            values and competencies enable them to realize their full potential
            and contribute meaningfully to building the nation."
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As a learner-centered public institution, the Department of
            Education continuously improves itself to better serve its
            stakeholders.
          </p>
        </div>
      ),
    },
    {
      title: "Mission",
      id: "mission",
      colorTheme: {
        bg: "bg-gradient-to-br from-emerald-50/80 to-teal-100/50",
        border: "border-emerald-400",
        headerBg: "from-emerald-500 to-teal-600 shadow-emerald-500/30",
        divider: "bg-emerald-300",
      },
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-800 font-medium">
            To protect and promote the right of every Filipino to quality,
            equitable, culture-based, and complete basic education where:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/60 p-5 rounded-lg border border-emerald-100/50 shadow-sm hover:shadow-md transition flex gap-4 items-start">
              <span className="text-3xl text-emerald-500">🎓</span>
              <span className="text-gray-700 text-lg">
                Students learn in a child-friendly, gender-sensitive, safe, and
                motivating environment
              </span>
            </div>
            <div className="bg-white/60 p-5 rounded-lg border border-emerald-100/50 shadow-sm hover:shadow-md transition flex gap-4 items-start">
              <span className="text-3xl text-emerald-500">👩‍🏫</span>
              <span className="text-gray-700 text-lg">
                Teachers facilitate learning and constantly nurture every
                learner
              </span>
            </div>
            <div className="bg-white/60 p-5 rounded-lg border border-emerald-100/50 shadow-sm hover:shadow-md transition flex gap-4 items-start">
              <span className="text-3xl text-emerald-500">🏢</span>
              <span className="text-gray-700 text-lg">
                Administrators and staff, as stewards of the institution, ensure
                an enabling and supportive environment for effective learning to
                happen
              </span>
            </div>
            <div className="bg-white/60 p-5 rounded-lg border border-emerald-100/50 shadow-sm hover:shadow-md transition flex gap-4 items-start">
              <span className="text-3xl text-emerald-500">🤝</span>
              <span className="text-gray-700 text-lg">
                Family, community, and other stakeholders are actively engaged
                and share responsibility for developing life-long learners
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Mandate",
      id: "mandate",
      colorTheme: {
        bg: "bg-gradient-to-br from-amber-50/80 to-orange-100/50",
        border: "border-amber-400",
        headerBg: "from-amber-500 to-orange-600 shadow-amber-500/30",
        divider: "bg-amber-300",
      },
      content: (
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-lg border-2 border-white">
            <img
              src="/images/deped-division-office-imus.webp"
              alt="Historical DepEd Context"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex-1 space-y-4">
            <p className="text-gray-700 leading-relaxed text-lg">
              The Department of Education was established through the Education
              Decree of 1863 as the Superior Commission of Primary Instruction
              under a Chairman. The Education agency underwent many
              reorganization efforts in the 20th century in order to better
              define its purpose vis a vis the changing administrations and
              charters.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              The present day Department of Education was eventually mandated
              through Republic Act 9155, otherwise known as the Governance of
              Basic Education act of 2001 which establishes the mandate of this
              agency.
            </p>
            <p className="text-gray-800 font-medium leading-relaxed bg-white/50 p-4 rounded-lg border border-amber-200">
              The Department of Education (DepEd) formulates, implements, and
              coordinates policies, plans, programs and projects in the areas of
              formal and non-formal basic education.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Core Values",
      id: "core-values",
      colorTheme: {
        bg: "bg-gradient-to-br from-pink-50/80 to-rose-100/50",
        border: "border-pink-400",
        headerBg: "from-pink-500 to-rose-600 shadow-pink-500/30",
        divider: "bg-pink-300",
      },
      content: (
        <div className="flex flex-wrap justify-center gap-6 py-4">
          {["Maka-Diyos", "Maka-tao", "Makalikasan", "Makabansa"].map(
            (value, i) => (
              <div
                key={i}
                className="bg-white/80 px-8 py-6 rounded-2xl shadow-sm border border-pink-200 text-center hover:-translate-y-1 transition-transform duration-300 min-w-[200px]"
              >
                <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {i + 1}
                </div>
                <span className="text-xl font-bold text-gray-800">{value}</span>
              </div>
            ),
          )}
        </div>
      ),
    },
    {
      title: "Quality Policy & Objectives",
      id: "quality-policy",
      colorTheme: {
        bg: "bg-gradient-to-br from-cyan-50/80 to-sky-100/50",
        border: "border-cyan-400",
        headerBg: "from-cyan-500 to-blue-600 shadow-cyan-500/30",
        divider: "bg-cyan-300",
      },
      content: (
        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-center text-gray-800 font-bold mb-8">
            "The Department of Education is committed to provide learners with
            quality Basic Education that is accessible, inclusive, and
            liberating through:"
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Proactive Leadership",
              "Shared Governance",
              "Evidence-Based policies, Standards, and Programs",
              "Responsive and Relevant Curricula",
              "Highly Competent and Committed Officials, and Teaching, and Non-Teaching Personnel",
              "An Enabling Learning Environment",
            ].map((obj, i) => (
              <div
                key={i}
                className="bg-white/60 p-4 rounded-lg flex items-center gap-3 border border-cyan-100 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="min-w-6 w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center text-sm font-bold">
                  ✓
                </div>
                <span className="text-gray-700 font-medium text-sm md:text-base">
                  {obj}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white/70 p-6 rounded-xl border border-cyan-200/50 shadow-inner">
            <p className="text-gray-700 leading-relaxed text-center italic font-medium">
              The Department upholds the highest standards of conduct and
              performance to fulfill stakeholders' needs and expectations by
              adhering to constitutional mandates, statutory, and regulatory
              requirements, and sustains client satisfaction through continuous
              improvement of the <strong>Quality Management System</strong>.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-white pb-24">
      {/* Modern Hero Header */}
      <section className="relative overflow-hidden bg-[#032977] text-white py-16 lg:py-24 px-4 lg:px-8 shadow-2xl mb-12 rounded-b-[3rem]">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-[#032977] to-cyan-800 opacity-90"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium tracking-wider uppercase mb-4 shadow-sm border border-white/30">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-md">
            Schools Division of Imus City
          </h1>
          <p className="content-center text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            Discover the rich history, mandate, and guiding principles that fuel
            our passion for quality education.
          </p>
        </div>
      </section>

      {/* Vibrant Grid Content */}
      <section className="px-4 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {sections.map((sec, idx) => (
            <div
              key={sec.id}
              id={sec.id}
              className={`rounded-2xl border-l-[6px] md:border-l-8 ${sec.colorTheme.border} p-6 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 ${sec.colorTheme.bg}`}
            >
              <div className="mb-6 md:mb-8">
                <h2
                  className={`text-2xl md:text-4xl font-bold text-white inline-block px-6 py-3 rounded-xl bg-gradient-to-r shadow-lg ${sec.colorTheme.headerBg}`}
                >
                  {sec.title}
                </h2>
                <div
                  className={`mt-4 h-1.5 w-24 md:w-32 rounded-full shadow-sm ${sec.colorTheme.divider}`}
                />
              </div>
              <div className="pt-2">{sec.content}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

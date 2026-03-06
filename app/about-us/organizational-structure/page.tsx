"use client";

import React, { useState } from "react";

export default function OrganizationalStructure() {
  const [openIds, setOpenIds] = useState<string[]>([]);
  const departments = [
    {
      id: "admin",
      title: "Office of the Schools Division Superintendent",
      head: { name: "Division Superintendent", role: "Executive Head" },
      roles: [
        "Assistant Schools Division Superintendent",
        "Executive Assistant",
      ],
    },
    {
      id: "cmdd",
      title: "Curriculum Management and Development Division (CMDD)",
      head: { name: "CMDD Head", role: "Division Head" },
      roles: ["Curriculum Specialist", "Monitoring Officer", "Assessment Lead"],
    },
    {
      id: "hrmd",
      title: "Human Resource Management Division (HRMD)",
      head: { name: "HRMD Head", role: "Division Head" },
      roles: ["HR Officer I", "HR Officer II", "Recruitment & Records"],
    },
    {
      id: "finance",
      title: "Finance Division",
      head: { name: "Finance Head", role: "Division Head" },
      roles: ["Budget Officer", "Accountant", "Cashier"],
    },
    {
      id: "adminDiv",
      title: "Administrative Division",
      head: { name: "Admin Head", role: "Division Head" },
      roles: ["Records Officer", "Procurement", "Logistics"],
    },
    {
      id: "prd",
      title: "Planning and Research Division (PRD)",
      head: { name: "PRD Head", role: "Division Head" },
      roles: ["Planner", "Research Analyst"],
    },
    {
      id: "assistant",
      title: "Office of the Assistant Schools Division Superintendent",
      head: { name: "Assistant Superintendent", role: "Assistant Head" },
      roles: ["Executive Assistant", "Support Staff"],
    },
    {
      id: "legal",
      title: "Legal Services",
      head: { name: "Legal Head", role: "Division Head" },
      roles: ["Legal Officer", "Paralegal"],
    },
    {
      id: "ict",
      title: "Information and Communications Technology",
      head: { name: "ICT Head", role: "Division Head" },
      roles: ["IT Officer", "Systems Admin", "Support"],
    },
    {
      id: "curriculum_impl",
      title: "Curriculum Implementation Division",
      head: { name: "CID Head", role: "Division Head" },
      roles: ["Implementation Officer", "Trainers"],
    },
    {
      id: "school_gov",
      title: "School Governance and Operations Division",
      head: { name: "SGOD Head", role: "Division Head" },
      roles: ["Operations Officer", "Field Supervisors"],
    },
    {
      id: "supply",
      title: "Supply Unit",
      head: { name: "Supply Head", role: "Unit Head" },
      roles: ["Supply Clerk", "Inventory Officer"],
    },
    {
      id: "records",
      title: "Records Unit",
      head: { name: "Records Head", role: "Unit Head" },
      roles: ["Records Officer", "Archivist"],
    },
    {
      id: "health",
      title: "School Health and Nutrition",
      head: { name: "Health Head", role: "Unit Head" },
      roles: ["Nurse", "Health Coordinator"],
    },
    {
      id: "facilities",
      title: "Physical Facilities",
      head: { name: "Facilities Head", role: "Unit Head" },
      roles: ["Facilities Officer", "Maintenance Team"],
    },
  ];

  const styles = [
    {
      bgHeader: "bg-blue-50",
      border: "border-blue-200",
      titleText: "text-blue-600",
      btn: "bg-blue-600 text-white border-blue-600",
      linkHover: "hover:text-blue-700",
    },
    {
      bgHeader: "bg-green-50",
      border: "border-green-200",
      titleText: "text-green-600",
      btn: "bg-green-600 text-white border-green-600",
      linkHover: "hover:text-green-700",
    },
    {
      bgHeader: "bg-yellow-50",
      border: "border-yellow-200",
      titleText: "text-yellow-600",
      btn: "bg-yellow-600 text-white border-yellow-600",
      linkHover: "hover:text-yellow-700",
    },
    {
      bgHeader: "bg-red-50",
      border: "border-red-200",
      titleText: "text-red-600",
      btn: "bg-red-600 text-white border-red-600",
      linkHover: "hover:text-red-700",
    },
    {
      bgHeader: "bg-purple-50",
      border: "border-purple-200",
      titleText: "text-purple-600",
      btn: "bg-purple-600 text-white border-purple-600",
      linkHover: "hover:text-purple-700",
    },
  ];

  function OrgChart({ head, roles }: { head: any; roles: string[] }) {
    return (
      <div className="w-full">
        <div className="flex justify-center">
          <div className="bg-white border border-gray-200 rounded shadow-sm px-4 py-3 text-center">
            <p className="font-semibold text-gray-800">{head.name}</p>
            <p className="text-sm text-gray-500">{head.role}</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-px bg-gray-200 h-6 my-2" />
        </div>

        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {roles.map((r) => (
            <div
              key={r}
              className="bg-white border border-gray-200 rounded p-3 text-center"
            >
              <p className="font-medium text-gray-800">{r}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Organizational Structure
          </h1>

          <p className="text-gray-700 mb-8">
            The Schools Division Office of Imus City operates under a structured
            organizational framework designed to efficiently deliver educational
            services to all learners and stakeholders. Click each department to
            view its simple org chart.
          </p>

          {/* quick links / header list (bulleted, reduced gap) */}
          <nav className="mb-4">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {departments.map((d, idx) => {
                const s = styles[idx % styles.length];
                return (
                  <li key={d.id}>
                    <a
                      href={`#${d.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        // expand the section if it's closed
                        setOpenIds((prev) =>
                          prev.includes(d.id) ? prev : [...prev, d.id],
                        );
                        // smooth scroll into view after a tick so the element is expanded
                        setTimeout(() => {
                          const el = document.getElementById(d.id);
                          if (el)
                            el.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                        }, 60);
                      }}
                      className={`text-blue-600 hover:underline ${s.linkHover}`}
                    >
                      {d.title}
                      <span className="text-xs text-gray-400 ml-2">
                        ({d.id})
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex flex-col gap-8">
            {departments.map((d, idx) => {
              const s = styles[idx % styles.length];
              const isOpen = openIds.includes(d.id);
              return (
                <section
                  key={d.id}
                  id={d.id}
                  className={`bg-white rounded-lg shadow-sm border ${s.border}`}
                >
                  <div
                    className={`p-4 md:p-6 flex items-start justify-between ${s.bgHeader}`}
                  >
                    <div className="flex-1">
                      <h2
                        className={`text-lg md:text-xl font-semibold ${s.titleText}`}
                      >
                        {d.title}
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        {d.head?.role}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        aria-expanded={isOpen}
                        onClick={() =>
                          setOpenIds((prev) =>
                            prev.includes(d.id)
                              ? prev.filter((x) => x !== d.id)
                              : [...prev, d.id],
                          )
                        }
                        className={`${s.btn} px-3 py-1 rounded-md shadow-sm border`}
                      >
                        {isOpen ? "−" : "+"}
                      </button>
                    </div>
                  </div>

                  <div
                    className={`px-4 pb-6 transition-[max-height] duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[2000px]" : "max-h-0"
                    }`}
                  >
                    <div className="pt-2">
                      <OrgChart head={d.head} roles={d.roles} />
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

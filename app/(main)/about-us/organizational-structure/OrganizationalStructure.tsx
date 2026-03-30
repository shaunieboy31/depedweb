"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Users, 
  ChevronDown, 
  Building2, 
  Award,
  Layers,
  MapPin,
  Target
} from "lucide-react";

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

  const toggleExpand = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  function OrgChart({ head, roles }: { head: any; roles: string[] }) {
    return (
      <div className="w-full py-6">
        <div className="flex justify-center mb-8">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500" />
            <div className="relative bg-white border border-slate-100 rounded-2xl shadow-md px-8 py-5 text-center min-w-[240px]">
              <div className="p-2 bg-blue-50 rounded-xl text-blue-600 w-fit mx-auto mb-3">
                <Users size={20} />
              </div>
              <p className="font-black text-slate-900 text-lg tracking-tight">{head.name}</p>
              <p className="text-sm text-blue-600 font-bold uppercase tracking-wider mt-1">{head.role}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center relative">
          <div className="w-px bg-slate-200 h-10 -mt-8" />
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((r, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-slate-400 mb-3 mx-auto shadow-sm group-hover:text-blue-500 transition-colors">
                <Award size={16} />
              </div>
              <p className="font-bold text-slate-800 tracking-tight leading-tight">{r}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 pb-32">
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/newbuilding.webp"
            alt="SDO Imus Building"
            fill
            className="object-cover object-center brightness-[0.4]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#032977] via-transparent to-transparent opacity-60" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-300 uppercase bg-blue-950/40 backdrop-blur-md rounded-full border border-blue-400/30">
            About Us
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
            Organizational <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Structure
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
            A structured framework designed to efficiently deliver educational excellence to every <span className="italic font-black text-white">BIDAng</span> Imusenyo.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#4279D2] rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
                <Layers size={14} />
                <span>Quick Navigation</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Our Framework</h2>
              <div className="h-1.5 w-20 bg-[#4279D2]" />
            </div>
            
            <nav className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <ul className="space-y-3">
                {departments.map((d) => (
                  <li key={d.id} className="group">
                    <a
                      href={`#${d.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (!openIds.includes(d.id)) setOpenIds((prev) => [...prev, d.id]);
                        setTimeout(() => {
                          const el = document.getElementById(d.id);
                          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }, 100);
                      }}
                      className="flex items-center gap-3 text-sm font-bold text-slate-500 hover:text-[#4279D2] transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#4279D2] transition-colors" />
                      {d.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-10 pt-16 lg:pt-0">
            {departments.map((d) => {
              const isOpen = openIds.includes(d.id);
              return (
                <section
                  key={d.id}
                  id={d.id}
                  className={`group bg-white rounded-[2.5rem] border border-slate-200 transition-all duration-500 overflow-hidden ${
                    isOpen ? 'shadow-2xl ring-2 ring-blue-100' : 'shadow-sm hover:shadow-xl'
                  }`}
                >
                  <button
                    onClick={() => toggleExpand(d.id)}
                    className={`w-full p-8 md:p-10 flex items-center justify-between text-left transition-colors ${
                      isOpen ? 'bg-blue-50/50' : 'hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="space-y-1">
                      <h3 className={`text-xl md:text-2xl font-black transition-colors ${
                        isOpen ? 'text-[#4279D2]' : 'text-slate-900'
                      }`}>
                        {d.title}
                      </h3>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                        {d.head?.role}
                      </p>
                    </div>
                    <div className={`p-4 rounded-2xl transition-all ${
                      isOpen ? 'bg-[#4279D2] text-white rotate-180' : 'bg-slate-100 text-slate-400'
                    }`}>
                      <ChevronDown size={24} />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out px-8 md:px-10 overflow-hidden ${
                      isOpen ? "max-h-[1200px] pb-12" : "max-h-0"
                    }`}
                  >
                    <div className="pt-8 border-t border-slate-100">
                      <OrgChart head={d.head} roles={d.roles} />
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>

        {/* Closing Contact Card */}
        <div className="bg-gradient-to-br from-[#032977] to-blue-700 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden mt-32">
          <div className="absolute top-0 left-0 p-12 opacity-10">
             <Building2 size={300} strokeWidth={0.5} />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">Institutional Capacity</h2>
            <p className="text-xl text-blue-100 font-medium leading-relaxed">
              Our organizational structure ensures that mandated roles and responsibilities are carried out with 
              <span className="text-white font-black"> efficiency, transparency, and heart</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
               <div className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <Target size={24} className="text-blue-300" />
                  <span className="font-bold uppercase tracking-widest text-sm">Outcome Oriented</span>
               </div>
               <div className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <MapPin size={24} className="text-blue-300" />
                  <span className="font-bold uppercase tracking-widest text-sm">Community Engaged</span>
               </div>
            </div>
          </div>
        </div>

      </div>
      
      {/* Footer Decoration */}
      <div className="w-full h-24 bg-gradient-to-t from-slate-200/50 to-transparent" />
    </div>
  );
}

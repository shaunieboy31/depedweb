"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Search, 
  ChevronRight, 
  GraduationCap, 
  School,
  Sparkles,
  Trophy,
  Info
} from "lucide-react";

export default function SchoolDirectory() {
  const [searchTerm, setSearchTerm] = useState("");

  const schools = [
    { name: 'Imus National High School', type: 'Secondary', level: 'Junior / Senior High', district: 'District I', contact: '(046) 111-2222', email: 'inhs@deped.gov.ph', color: 'blue' },
    { name: 'Imus Central Elementary School', type: 'Primary', level: 'Elementary', district: 'District I', contact: '(046) 111-3333', email: 'ices@deped.gov.ph', color: 'blue' },
    { name: 'Imus East National High School', type: 'Secondary', level: 'Junior / Senior High', district: 'District II', contact: '(046) 111-4444', email: 'iens@deped.gov.ph', color: 'amber' },
    { name: 'Imus West Elementary School', type: 'Primary', level: 'Elementary', district: 'District III', contact: '(046) 111-5555', email: 'iwes@deped.gov.ph', color: 'emerald' },
    { name: 'Imus North High School', type: 'Secondary', level: 'Junior / Senior High', district: 'District I', contact: '(046) 111-6666', email: 'inhs@deped.gov.ph', color: 'blue' },
    { name: 'Imus South Elementary School', type: 'Primary', level: 'Elementary', district: 'District II', contact: '(046) 111-7777', email: 'ises@deped.gov.ph', color: 'amber' },
  ];

  const filteredSchools = schools.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.district.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 pb-32">
      
      {/* Sub-Page Hero */}
      <section className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/newbuilding.webp"
            alt="School Directory"
            fill
            className="object-cover object-center brightness-[0.3]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#032977]/90 via-[#032977]/70 to-[#f8fafc]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[9px] font-black tracking-[0.3em] text-blue-200 uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Building2 size={12} />
            <span>Institutional Records</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">
             School <span className="text-blue-400">Directory</span>
          </h1>
          <p className="text-slate-300 font-medium italic text-sm md:text-base max-w-xl mx-auto">
             A complete registry of public learning centers under the Schools Division Office of Imus City.
          </p>
        </div>
      </section>

      {/* Main Directory Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-12 relative z-20">
        
        {/* Search & Stats Bar */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-4 md:p-6 mb-12 flex flex-col md:flex-row items-center gap-6 ring-1 ring-black/5">
           <div className="relative flex-1 w-full group">
              <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Search school name or district..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold placeholder:text-slate-400 outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all"
              />
           </div>
           <div className="flex items-center gap-4 px-6 border-l border-slate-100 hidden md:flex">
              <div className="text-right">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Found</p>
                 <p className="text-lg font-black text-blue-600">{filteredSchools.length} <span className="text-[10px] text-slate-400">Schools</span></p>
              </div>
           </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredSchools.length > 0 ? (
              filteredSchools.map((school, idx) => (
                <div key={idx} className="group bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-blue-100 transition-all duration-500 overflow-hidden flex flex-col p-8 pt-10">
                   {/* District Tag */}
                   <div className="flex items-center justify-between mb-8">
                      <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                         school.color === 'blue' ? 'bg-blue-50 text-blue-600 border-blue-100' : 
                         school.color === 'amber' ? 'bg-amber-50 text-amber-600 border-amber-100' : 
                         'bg-emerald-50 text-emerald-600 border-emerald-100'
                      }`}>
                         {school.district}
                      </div>
                      <div className="p-2.5 bg-slate-50 text-slate-400 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                         <School size={18} />
                      </div>
                   </div>

                   {/* School Info */}
                   <div className="flex-1 space-y-4">
                      <h3 className="text-xl font-black text-slate-900 leading-tight uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                         {school.name}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                         <GraduationCap size={14} className="text-blue-500" />
                         <span>{school.level}</span>
                      </div>
                   </div>

                   {/* Quick Contacts */}
                   <div className="mt-10 pt-8 border-t border-slate-50 space-y-4">
                      <div className="flex items-center gap-4 group/contact">
                         <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 group-hover/contact:bg-blue-50 group-hover/contact:text-blue-600 transition-colors">
                            <Phone size={14} />
                         </div>
                         <p className="text-xs font-bold text-slate-600 tracking-tight">{school.contact}</p>
                      </div>
                      <div className="flex items-center gap-4 group/contact">
                         <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 group-hover/contact:bg-blue-50 group-hover/contact:text-blue-600 transition-colors">
                            <Mail size={14} />
                         </div>
                         <p className="text-xs font-bold text-slate-600 tracking-tight lowercase line-clamp-1">{school.email}</p>
                      </div>
                   </div>

                   <button className="mt-8 w-full py-4 bg-slate-50 text-slate-400 rounded-2xl text-[9px] font-black uppercase tracking-widest group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 flex items-center justify-center gap-2">
                      <span>Inquire More</span>
                      <ChevronRight size={12} />
                   </button>
                </div>
              ))
           ) : (
              <div className="col-span-full py-32 text-center space-y-6 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
                 <Search size={64} className="mx-auto text-slate-200" strokeWidth={1} />
                 <div className="space-y-2">
                    <p className="text-lg font-black text-slate-900 uppercase">No Schools Found</p>
                    <p className="text-slate-400 font-medium text-sm">Try refining your search term or district filter.</p>
                 </div>
              </div>
           )}
        </div>

        {/* Support Section */}
        <div className="mt-24 p-12 md:p-16 bg-blue-900 rounded-[3.5rem] relative overflow-hidden group shadow-2xl">
           <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-125 transition-transform duration-1000">
              <Info size={180} className="text-white" />
           </div>
           
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <Sparkles className="text-blue-400" size={40} />
                 <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">Need assistance <br /> finding a school?</h2>
                 <p className="text-blue-200 font-medium max-w-md">
                    Our School Governance and Operations Division is ready to assist you with specific inquiries regarding school admissions and facilities.
                 </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 space-y-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                       <Phone size={24} />
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] font-black uppercase tracking-widest text-blue-300">Hotline</p>
                       <p className="text-white font-bold">(046) 419-8450</p>
                    </div>
                 </div>
                 <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 space-y-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                       <Mail size={24} />
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] font-black uppercase tracking-widest text-blue-300">Email Support</p>
                       <p className="text-white font-bold">sgod.imus@deped</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}

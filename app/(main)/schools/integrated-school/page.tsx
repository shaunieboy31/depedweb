"use client";

import React from "react";
import Image from "next/image";
import { 
  Building2, 
  MapPin, 
  Phone, 
  ChevronRight, 
  Sparkles,
  Award,
  BookOpen,
  Users,
  CheckCircle2,
  GraduationCap
} from "lucide-react";

export default function IntegratedSchools() {
  const schools = [
    { id: 1, name: 'Imus City Integrated School', district: 'District III', contact: '(046) 111-5555', color: 'blue' },
  ];

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 pb-32">
      
      {/* Institutional Hero */}
      <section className="relative h-[350px] md:h-[450px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/newbuilding.webp"
            alt="Integrated Schools"
            fill
            className="object-cover object-center brightness-[0.35]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-[#032977]/80 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[9px] font-black tracking-[0.3em] text-blue-300 uppercase bg-blue-950/40 backdrop-blur-md rounded-full border border-blue-400/30">
            <Building2 size={12} className="text-blue-400" />
            <span>Unified K-12 Centers</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-4 drop-shadow-2xl">
             Integrated <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Schools</span>
          </h1>
          <p className="text-slate-300 font-medium italic text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
             "Streamlining the educational journey from Kindergarten to Grade 12 within a single, unified campus structure."
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-12 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Schools List (Spans 8) */}
          <div className="lg:col-span-8 space-y-6">
             <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-200 p-8 md:p-12 mb-8">
                <div className="flex items-center justify-between mb-10 border-b border-slate-50 pb-6">
                   <div className="space-y-1">
                      <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Public Integrated Registry</h2>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">K-12 Unified Institutions Directory</p>
                   </div>
                   <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                      <GraduationCap size={24} />
                   </div>
                </div>

                <div className="space-y-4">
                   {schools.map((school) => (
                      <div key={school.id} className="group bg-slate-50/50 p-6 rounded-2xl border border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-xl transition-all duration-300">
                         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="space-y-2">
                               <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{school.name}</h3>
                               <div className="flex items-center gap-4">
                                  <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                     <MapPin size={12} className="text-blue-500" />
                                     <span>{school.district}</span>
                                  </div>
                                  <div className="w-1 h-1 bg-slate-200 rounded-full" />
                                  <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                     <Phone size={12} className="text-blue-500" />
                                     <span>{school.contact}</span>
                                  </div>
                               </div>
                            </div>
                            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-100 rounded-xl text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                               <span>School Profile</span>
                               <ChevronRight size={14} />
                            </button>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Program Spotlight (Spans 4) */}
          <div className="lg:col-span-4 space-y-8">
             <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-125 transition-transform duration-1000">
                   <Sparkles size={120} />
                </div>
                <div className="relative z-10 space-y-8">
                   <div className="space-y-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl border border-blue-400/30">
                         <Award size={24} />
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-tight">Integrated Excellence</h3>
                   </div>
                   
                   <p className="text-slate-400 text-sm font-medium leading-relaxed">
                      Integrated Schools offer a complete K-12 path, ensuring:
                   </p>
                   
                   <ul className="space-y-4">
                      {[
                        "Academic Continuity",
                        "Seamless Level Transitions",
                        "Unified Administrative Support",
                        "Long-term Learner Tracking"
                      ].map((item, i) => (
                         <li key={i} className="flex items-center gap-3">
                            <div className="p-1 bg-blue-500/20 rounded-lg text-blue-400">
                               <CheckCircle2 size={14} />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-blue-50">{item}</span>
                         </li>
                      ))}
                   </ul>

                   <div className="pt-8 border-t border-white/10">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Holistic Tracking</p>
                      <p className="text-sm font-bold opacity-60 italic">From Entry to Graduation</p>
                   </div>
                </div>
             </div>

             <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm space-y-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Campus Capacity</p>
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600">
                      <Users size={32} />
                   </div>
                   <div>
                      <p className="text-3xl font-black text-slate-900 leading-none">2K+</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Unified Learners</p>
                   </div>
                </div>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}

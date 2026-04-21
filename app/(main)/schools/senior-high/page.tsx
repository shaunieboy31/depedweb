"use client";

import React, { useState, useEffect } from "react";
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
  Trophy,
  RefreshCcw,
  School as SchoolIcon,
  GraduationCap
} from "lucide-react";
import { getSchoolsByCategoryAction } from "@/app/actions/schools";

type School = {
   id: number;
   name: string;
   logo: string | null;
   banner: string | null;
   location: string;
   category: string;
   cluster: string | null;
   contact: string | null;
   type: string;
};

export default function SeniorHighSchools() {
  const [schools, setSchools] = useState<School[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadSchools() {
      const result = await getSchoolsByCategoryAction("SHS");
      if (result.success && result.data) {
        setSchools(result.data);
      }
      setIsLoading(false);
    }
    loadSchools();
  }, []);

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 pb-32">
      
      {/* Institutional Hero */}
      <section className="relative h-[350px] md:h-[450px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/newbuilding.webp"
            alt="Senior High Schools"
            fill
            className="object-cover object-center brightness-[0.35]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-[#032977]/80 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[9px] font-black tracking-[0.3em] text-blue-300 uppercase bg-blue-950/40 backdrop-blur-md rounded-full border border-blue-400/30">
            <Layers size={12} className="text-blue-400" />
            <span>Specialized Education</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-4 drop-shadow-2xl">
             SENIOR HIGH <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">SCHOOL</span>
          </h1>
          <p className="text-slate-300 font-medium italic text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
             "Equipping Grades 11–12 learners with specialized skills for higher education, entrepreneurship, or employment."
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-12 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-6">
             <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-200 p-8 md:p-12 mb-8">
                <div className="flex items-center justify-between mb-10 border-b border-slate-50 pb-6">
                   <div className="space-y-1">
                      <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">PUBLIC SHS REGISTRY</h2>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Grades 11 to 12 Specialized Directory</p>
                   </div>
                   <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                      <Trophy size={24} />
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {isLoading ? (
                      <div className="col-span-full py-20 text-center space-y-4">
                         <RefreshCcw size={40} className="mx-auto text-blue-600 animate-spin" />
                         <p className="text-slate-400 font-black uppercase tracking-widest text-[9px]">Refreshing Registry...</p>
                      </div>
                   ) : schools.length === 0 ? (
                      <div className="col-span-full py-20 text-center space-y-4 border-2 border-dashed border-slate-100 rounded-3xl">
                         <MapPin size={48} className="mx-auto text-slate-200" strokeWidth={1} />
                         <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">No registered senior high schools found</p>
                      </div>
                   ) : (
                      schools.map((school) => (
                        <div key={school.id} className="group bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 overflow-hidden flex flex-col">
                           {/* Banner Section */}
                           <div className="h-32 relative overflow-hidden">
                              <img 
                                src={school.banner || "/images/newbuilding.webp"} 
                                alt={school.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute top-3 left-3">
                                 <div className="px-2 py-0.5 bg-blue-600/90 text-[7px] font-black text-white uppercase tracking-widest rounded-full border border-white/20 backdrop-blur-sm">
                                    {school.type}
                                 </div>
                              </div>
                           </div>

                           <div className="p-5 pt-0 flex-1 flex flex-col relative">
                              {/* Overlapping Institutional Logo */}
                              <div className="relative -mt-8 ml-3 mb-4 z-10">
                                 <div className="w-16 h-16 rounded-full bg-white shadow-2xl border border-slate-100 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                    <img src={school.logo || "/images/leader-placeholder.webp"} alt="" className="w-full h-full object-cover rounded-full" />
                                 </div>
                              </div>

                              <div className="flex-1 space-y-3">
                                 <div className="flex items-center justify-between">
                                    <span className="text-[7px] font-black text-slate-400 uppercase tracking-[0.2em]">{school.cluster || 'Division Hub'}</span>
                                    <SchoolIcon size={12} className="text-blue-500 opacity-20" />
                                 </div>
                                 <h3 className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight line-clamp-2 leading-tight">
                                    {school.name}
                                 </h3>
                                 <div className="flex items-start gap-1.5 text-[8px] font-bold text-slate-400 uppercase tracking-widest italic">
                                    <MapPin size={10} className="text-blue-400 shrink-0" />
                                    <span className="line-clamp-1">{school.location}</span>
                                 </div>
                              </div>

                              <div className="mt-5 pt-4 border-t border-slate-50 flex items-center justify-between">
                                 <div className="flex items-center gap-2 text-slate-500">
                                    <Phone size={10} className="text-blue-500" />
                                    <span className="text-[8px] font-black uppercase tracking-widest">{school.contact || 'N/A'}</span>
                                 </div>
                                 <button className="flex items-center gap-1.5 text-[7px] font-black uppercase tracking-widest text-blue-600 group-hover:translate-x-1 transition-transform">
                                    <span>Profile</span>
                                    <ChevronRight size={10} />
                                 </button>
                              </div>
                           </div>
                        </div>
                      ))
                   )}
                </div>
             </div>
          </div>

          {/* Program Spotlight (Spans 4) */}
          <div className="lg:col-span-4 space-y-8">
             <div className="bg-blue-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-125 transition-transform duration-1000">
                   <Sparkles size={120} />
                </div>
                <div className="relative z-10 space-y-8">
                   <div className="space-y-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl border border-blue-400/30">
                         <Award size={24} />
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-tight">SHS Specialized Tracks</h3>
                   </div>
                   
                   <p className="text-blue-200 text-sm font-medium leading-relaxed">
                      Our Senior High Schools offer diverse strands designed for global competitiveness:
                   </p>
                   
                   <div className="grid grid-cols-1 gap-4">
                      {[
                        { title: "STEM", desc: "Science, Tech, Engineering, & Math" },
                        { title: "GAS", desc: "General Academic Strand" },
                        { title: "ABM", desc: "Accountancy, Business, & Management" },
                        { title: "HE", desc: "Home Economics" }
                      ].map((track, i) => (
                         <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-default">
                            <div className="p-1 px-2.5 bg-blue-600 rounded text-blue-100 text-[10px] font-black">
                               {track.title}
                            </div>
                            <div className="space-y-0.5">
                               <p className="text-[11px] font-bold text-white tracking-tight uppercase leading-none">{track.title}</p>
                               <p className="text-[9px] text-blue-300 italic opacity-80 leading-none">{track.desc}</p>
                            </div>
                         </div>
                      ))}
                   </div>

                   <div className="pt-8 border-t border-white/10">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Career Readiness</p>
                      <p className="text-sm font-bold opacity-60 italic">Bridging Education to Industry</p>
                   </div>
                </div>
             </div>

             <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm space-y-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Enrollment</p>
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600">
                      <Users size={32} />
                   </div>
                   <div>
                      <p className="text-3xl font-black text-slate-900 leading-none">8K+</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">SHS Learners</p>
                   </div>
                </div>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}


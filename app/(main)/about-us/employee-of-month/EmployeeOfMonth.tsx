"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  ChevronDown,
  Award,
  Star,
  Sparkles,
  Search,
  Users
} from "lucide-react";
import { getEmployeeHonorsAction } from "@/app/actions/employee";

export default function EmployeeOfMonth() {
  const [honors, setHonors] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [openIds, setOpenIds] = useState<number[]>([]);

  useEffect(() => {
    async function loadHonors() {
      const result = await getEmployeeHonorsAction();
      if (result.success && result.data) {
        // Sort by id desc as a proxy for date, or by year/month if needed
        setHonors(result.data);
      }
      setLoading(false);
    }
    loadHonors();
  }, []);

  const featured = honors[activeIndex];

  const toggleAccordion = (id: number) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-12 animate-pulse">
        <div className="h-10 w-64 bg-slate-100 rounded-lg" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square bg-slate-50 rounded-[3rem]" />
          <div className="space-y-6">
            <div className="h-6 w-32 bg-slate-100 rounded-md" />
            <div className="h-12 w-full bg-slate-100 rounded-xl" />
            <div className="space-y-3 pt-8">
              <div className="h-4 w-full bg-slate-100 rounded-md" />
              <div className="h-4 w-full bg-slate-100 rounded-md" />
              <div className="h-4 w-2/3 bg-slate-100 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (honors.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-32 text-center space-y-8">
        <div className="p-8 bg-blue-50 w-fit mx-auto rounded-full text-blue-100">
           <Trophy size={80} strokeWidth={0.5} />
        </div>
        <div className="space-y-2">
           <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Hall of Excellence</h2>
           <p className="text-slate-500 font-medium">The Division is currently selecting the next outstanding employee. Check back soon!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 right-0 p-20"><Trophy size={400} /></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center space-y-6">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest animate-bounce">
              <Star size={14} fill="currentColor" />
              Featured Recognition
           </div>
           <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Hall of <span className="text-blue-500">Excellence</span>
           </h1>
           <p className="max-w-2xl text-slate-400 font-medium text-lg leading-relaxed">
              Recognizing the outstanding dedication, innovative spirit, and exceptional service 
              of SDO Imus City personnel who go above and beyond the call of duty.
           </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Featured Content (Lef Side - spans 7) */}
          <div className="lg:col-span-7 space-y-16">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-50 rounded-full -z-10 blur-3xl opacity-50" />
              
              <article className="space-y-10">
                {/* Photo & Badge */}
                <div className="relative group">
                   <div className="aspect-[4/5] relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group-hover:rotate-1 transition-transform duration-700">
                      <Image 
                        src={featured.image || "/images/leader-placeholder.webp"} 
                        alt={featured.name} 
                        fill 
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>
                   
                   {/* Month Badge Overlay */}
                   <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-[2rem] shadow-2xl space-y-1 group-hover:scale-110 transition-transform">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80">Cycle Winner</p>
                      <h4 className="text-xl font-black uppercase leading-none">{featured.month} {featured.year}</h4>
                   </div>
                </div>

                {/* Details */}
                <div className="space-y-8">
                   <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-4 text-blue-600">
                         <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                            <MapPin size={14} /> {featured.school || "Division Office"}
                         </span>
                         <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 text-slate-500">
                            <Users size={14} /> {featured.position || "Staff"}
                         </span>
                      </div>
                      <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-tight italic">
                         {featured.name}
                      </h2>
                   </div>

                   <div className="p-8 md:p-12 bg-slate-50 rounded-[3rem] border border-slate-100 relative group/cite">
                      <div className="absolute top-8 left-8 p-3 bg-white text-blue-600 rounded-2xl shadow-sm -rotate-12">
                         <Award size={24} />
                      </div>
                      <div className="space-y-6 pl-4 border-l-4 border-blue-600">
                         <p className="text-lg md:text-xl text-slate-700 font-bold leading-relaxed italic">
                           "{featured.achievement}"
                         </p>
                      </div>
                   </div>
                </div>
              </article>
            </div>
          </div>

          {/* Sidebar / Hall of History (Right Side - spans 5) */}
          <div className="lg:col-span-5 space-y-12">
             <div className="space-y-4">
                <div className="inline-flex items-center gap-3 text-blue-600">
                   <div className="w-10 h-10 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-100">
                      <Sparkles size={20} />
                   </div>
                   <h3 className="text-xl font-black uppercase tracking-tight">Hall of History</h3>
                </div>
                <p className="text-slate-500 font-medium text-sm">
                   Explore our archive of excellence and the educators who shape the future of Imus City.
                </p>
             </div>

             <div className="space-y-4">
                {honors.map((h, idx) => (
                  <div key={h.id} className="group">
                    <button 
                      onClick={() => toggleAccordion(h.id)}
                      className={`w-full flex items-center justify-between p-6 rounded-[1.5rem] border transition-all text-left ${
                         openIds.includes(h.id) 
                           ? "bg-slate-900 border-slate-900 text-white shadow-2xl translate-y-[-4px]" 
                           : "bg-white border-slate-100 text-slate-800 hover:border-blue-200"
                      }`}
                    >
                       <div className="flex items-center gap-4">
                          <span className={`text-[10px] font-black uppercase tracking-widest py-1 px-3 rounded-full ${
                             openIds.includes(h.id) ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                          }`}>
                            {h.month} {h.year}
                          </span>
                          <span className="font-black text-sm uppercase truncate max-w-[150px]">{h.name}</span>
                       </div>
                       <ChevronDown size={18} className={`transition-transform duration-300 ${openIds.includes(h.id) ? "rotate-180" : ""}`} />
                    </button>

                    {openIds.includes(h.id) && (
                      <div className="mt-4 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 animate-in slide-in-from-top-4 duration-300 space-y-6">
                         <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 bg-white">
                               <Image src={h.image || "/images/leader-placeholder.webp"} alt="" width={80} height={80} className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-1">
                               <h5 className="font-black text-slate-900">{h.name}</h5>
                               <p className="text-[10px] font-black uppercase text-blue-600 tracking-widest">{h.position}</p>
                            </div>
                         </div>
                         <p className="text-sm text-slate-600 leading-relaxed font-medium line-clamp-3">
                            {h.achievement}
                         </p>
                         <button 
                           onClick={() => {
                             setActiveIndex(idx);
                             window.scrollTo({ top: 0, behavior: 'smooth' });
                           }}
                           className="w-full py-4 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all shadow-sm"
                         >
                            View Spotlight
                         </button>
                      </div>
                    )}
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

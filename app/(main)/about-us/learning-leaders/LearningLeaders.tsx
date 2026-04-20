"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Users, 
  Award, 
  ChevronDown, 
  Target,
  ShieldCheck,
  Star,
  Maximize2,
  X
} from 'lucide-react';

export default function LearningLeaders({ initialLeaders = [] }: { initialLeaders?: any[] }) {
  const leaders = initialLeaders;
  const [selectedLeader, setSelectedLeader] = useState<any | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedLeader(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

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
            Institutional Archive
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
            Learning <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Leaders & Visionaries
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto drop-shadow-lg font-medium">
            Meet the architects of excellence who shaped the Schools Division Office of Imus City.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        
        {/* Intro Section */}
        <div className="flex flex-col items-center text-center mb-28 px-4">
           <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Our Guiding Lights</h2>
           <div className="h-1.5 w-20 bg-[#4279D2] mx-auto mb-6" />
           <p className="text-slate-500 max-w-2xl font-medium text-lg">
             Honoring the visionary leaders who continue to inspire the <span className="text-blue-600 italic">BIDAng</span> Imusenyo spirit in every educator and student.
           </p>
        </div>

        {/* Leaders Grid - Portrait Cards (Important People Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-40">
          {leaders.length === 0 ? (
            <div className="col-span-full py-20 text-center bg-white rounded-[3rem] border border-slate-100 shadow-sm">
               <Users size={64} className="mx-auto text-slate-200 mb-4" strokeWidth={1} />
               <p className="text-slate-400 font-bold uppercase tracking-widest text-xs italic">Leadership Archive is currently being updated...</p>
            </div>
          ) : (
            leaders.map((leader) => (
              <div
                key={leader.id}
                className="group relative bg-white rounded-[3rem] border border-slate-200 pb-12 text-center transition-all duration-700 hover:shadow-2xl hover:border-blue-200 hover:-translate-y-4"
              >
                {/* Vertical Portrait Frame */}
                <div 
                  className="relative aspect-[3/4] w-full rounded-[3rem] overflow-hidden mb-8 cursor-zoom-in"
                  onClick={() => setSelectedLeader(leader)}
                >
                  <Image
                    src={leader.image || '/images/leader-placeholder.webp'}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-2">
                     <div className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30 scale-50 group-hover:scale-100 transition-transform duration-500">
                        <Maximize2 size={24} />
                     </div>
                     <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                        Preview Portrait
                     </span>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="space-y-4 px-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-[9px] font-black uppercase tracking-widest border border-blue-100">
                    <Award size={12} className="text-blue-500" />
                    <span>Archived Leader</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-slate-900 tracking-tighter leading-none group-hover:text-blue-600 transition-colors uppercase">
                    {leader.name}
                  </h3>
                  <p className="text-sm md:text-base text-blue-600/60 font-black italic tracking-tight uppercase leading-tight">
                    {leader.position}
                  </p>
                  
                  {leader.startYear && (
                    <div className="pt-4 flex items-center justify-center">
                       <span className="w-1.5 h-1.5 bg-blue-100 rounded-full mr-4" />
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                         S.Y. {leader.startYear} — {leader.endYear || 'Present'}
                       </p>
                       <span className="w-1.5 h-1.5 bg-blue-100 rounded-full ml-4" />
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Leadership Philosophy Section - High Impact Box */}
        <section className="relative rounded-[4rem] overflow-hidden bg-[#032977] text-white p-12 md:p-24 shadow-2xl transition-all duration-700 hover:shadow-blue-200">
          <div className="absolute top-0 right-0 p-12 opacity-10">
             <Target size={300} strokeWidth={0.5} />
          </div>
          <div className="relative z-10 max-w-4xl space-y-12">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-blue-300 uppercase bg-blue-950/40 backdrop-blur-md rounded-full border border-blue-400/30">
                Governance & Vision
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none uppercase">
                Our Leadership <br />
                <span className="text-blue-300">Philosophy</span>
              </h2>
              <div className="h-2 w-24 bg-blue-400" />
            </div>
            
            <p className="text-xl md:text-2xl text-blue-100/80 font-medium leading-relaxed max-w-2xl">
              Our learning leaders embody the vision of the Department of Education through their commitment to the <span className="italic font-black text-white">BIDAng</span> Imusenyo standards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {[
                { title: "Student-Centered", icon: <Users size={18} />, desc: "Focus on holistic learner development" },
                { title: "Equitable Access", icon: <Target size={18} />, desc: "Quality education for every citizen" },
                { title: "Shared Governance", icon: <ShieldCheck size={18} />, desc: "Collaborative and transparent leadership" },
                { title: "Innovation", icon: <Star size={18} />, desc: "Continuous improvement and creativity" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-5 p-8 bg-blue-800/40 backdrop-blur-md rounded-[2rem] border border-blue-400/20 hover:bg-white/10 hover:border-blue-400/40 transition-all duration-500 group">
                  <div className="p-4 bg-blue-500/30 rounded-2xl text-blue-300 group-hover:bg-blue-400 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-white text-xl tracking-tight uppercase">{item.title}</h4>
                    <p className="text-blue-200/60 text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* LIGHTBOX PREVIEW MODAL */}
      {selectedLeader && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 animate-in fade-in duration-300">
          <div 
            onClick={() => setSelectedLeader(null)} 
            className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl" 
          />
          
          <div className="relative w-full max-w-4xl max-h-full flex flex-col items-center gap-10 animate-in zoom-in-95 duration-500">
             <button 
               onClick={() => setSelectedLeader(null)}
               className="absolute -top-4 md:-top-16 right-0 md:-right-16 p-4 bg-white/10 hover:bg-rose-500 text-white rounded-full transition-all border border-white/20 group"
             >
               <X size={24} className="group-hover:rotate-90 transition-transform" />
             </button>

             {/* Immersive Image Display */}
             <div className="w-full bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/20 relative group/preview">
                <div className="relative aspect-[3/4] w-full max-h-[80vh]">
                   <Image 
                     src={selectedLeader.image || '/images/leader-placeholder.webp'} 
                     alt={selectedLeader.name} 
                     fill
                     className="object-contain"
                   />
                </div>
                
                {/* Information Overlay in Modal */}
                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                   <div className="max-w-2xl mx-auto text-center space-y-2">
                       <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                         {selectedLeader.name}
                       </h3>
                       <p className="text-blue-400 text-sm md:text-lg font-black italic uppercase tracking-widest">
                         {selectedLeader.position}
                       </p>
                       {selectedLeader.startYear && (
                          <p className="text-[10px] text-white/50 font-black uppercase tracking-[0.4em] pt-4 border-t border-white/10 mt-6 md:inline-block md:px-10">
                            Service Period: {selectedLeader.startYear} — {selectedLeader.endYear || 'Present'}
                          </p>
                       )}
                   </div>
                </div>
             </div>
          </div>
        </div>
      )}

      {/* Footer Decoration */}
      <div className="w-full h-24 bg-gradient-to-t from-slate-200/50 to-transparent" />
    </div>
  );
}

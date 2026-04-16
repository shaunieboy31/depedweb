"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Users, 
  Award, 
  Quote, 
  ChevronDown, 
  History as HistoryIcon,
  Target,
  ShieldCheck,
  Star
} from 'lucide-react';

export default function LearningLeaders({ initialLeaders = [] }: { initialLeaders?: any[] }) {
  const leaders = initialLeaders;

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      
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
            Learning <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Leaders & Visionaries
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
            Meet the architects of excellence who shaped the Schools Division Office of Imus City.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        
        {/* Intro Section */}
        <div className="flex flex-col items-center text-center mb-20 px-4">
           <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Our Guiding Lights</h2>
           <div className="h-1.5 w-20 bg-[#4279D2] mx-auto mb-6" />
           <p className="text-slate-500 max-w-2xl font-medium text-lg">
             The visionary leaders who continue to inspire the <span className="text-blue-600 italic">BIDAng</span> Imusenyo spirit in every educator and student.
           </p>
        </div>

        {/* Leaders Grid - Simplified Clean Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {leaders.length === 0 ? (
            <div className="col-span-full py-20 text-center bg-white rounded-[3rem] border border-slate-100 shadow-sm">
               <Users size={64} className="mx-auto text-slate-200 mb-4" strokeWidth={1} />
               <p className="text-slate-400 font-bold uppercase tracking-widest text-xs italic">Leadership Archive is currently being updated...</p>
            </div>
          ) : (
            leaders.map((leader) => (
              <div
                key={leader.id}
                className="group relative bg-white rounded-[3rem] border border-slate-200 p-8 pt-12 text-center transition-all duration-500 hover:shadow-2xl hover:border-blue-100 hover:-translate-y-2"
              >
                {/* Profile Picture */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8">
                  <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                  <div className="relative h-full w-full rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-50">
                    <Image
                      src={leader.image || '/images/leader-placeholder.webp'}
                      alt={leader.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Name & Title */}
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-blue-100">
                    <Award size={12} />
                    <span>Learning Leader</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors uppercase">
                    {leader.name}
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 font-black italic tracking-tight uppercase px-4 leading-tight">
                    {leader.position}
                  </p>
                  {leader.startYear && (
                    <div className="pt-2">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] bg-slate-50 inline-block px-3 py-1 rounded-lg border border-slate-100">
                         Tenure: {leader.startYear} — {leader.endYear || 'Present'}
                       </p>
                    </div>
                  )}
                </div>

                {/* Decorative Bottom Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))
          )}
        </div>

        {/* Leadership Philosophy Section - High Impact Box */}
        <section className="relative rounded-[3rem] overflow-hidden bg-[#032977] text-white p-12 md:p-20 shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-10">
             <Target size={300} strokeWidth={0.5} />
          </div>
          <div className="relative z-10 max-w-4xl space-y-10">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-blue-300 uppercase bg-blue-950/40 backdrop-blur-md rounded-full border border-blue-400/30">
                Governance & Vision
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Our Leadership <br />
                <span className="text-blue-300">Philosophy</span>
              </h2>
              <div className="h-1.5 w-20 bg-blue-400" />
            </div>
            
            <p className="text-xl md:text-2xl text-blue-50 font-medium leading-relaxed max-w-2xl">
              Our learning leaders embody the vision of the Department of Education through their commitment to the <span className="italic font-black text-white">BIDAng</span> Imusenyo standards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {[
                { title: "Student-Centered", icon: <Users size={18} />, desc: "Focus on holistic learner development" },
                { title: "Equitable Access", icon: <Target size={18} />, desc: "Quality education for every citizen" },
                { title: "Shared Governance", icon: <ShieldCheck size={18} />, desc: "Collaborative and transparent leadership" },
                { title: "Innovation", icon: <Star size={18} />, desc: "Continuous improvement and creativity" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-blue-800/40 backdrop-blur-sm rounded-2xl border border-blue-400/20 hover:bg-white/10 transition-colors group">
                  <div className="p-3 bg-blue-500/30 rounded-xl text-blue-300 group-hover:bg-blue-400 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-white text-lg tracking-tight uppercase">{item.title}</h4>
                    <p className="text-blue-200 text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* Footer Decoration */}
      <div className="w-full h-24 bg-gradient-to-t from-slate-200/50 to-transparent" />
    </div>
  );
}

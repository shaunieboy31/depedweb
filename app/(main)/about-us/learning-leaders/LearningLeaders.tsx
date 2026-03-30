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

export default function LearningLeaders() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const leaders = [
    {
      id: 1,
      name: 'Dr. Lualhati O. Cadavedo',
      position: 'Former OIC Division Superintendent',
      image: '/images/leader-placeholder.webp', // Generic placeholder for user to replace
      bio: 'Founding leader of the Schools Division Office of Imus City, serving from 2013 with exceptional dedication to educational excellence. Her visionary leadership laid the foundation for the division\'s success.',
      quote: 'Leadership is about empowering others to achieve their full potential.',
      quote_author: 'Dr. Lualhati O. Cadavedo'
    },
    {
      id: 2,
      name: 'Mr. Homer N. Mendoza',
      position: 'Educational Administrator',
      image: '/images/leader-placeholder.webp',
      bio: 'A visionary leader focused on innovation and excellence in educational service delivery. Known for his commitment to transforming vision into reality through strategic planning and collaborative action.',
      quote: 'Leadership is the ability to translate vision into reality.',
      quote_author: 'Mr. Homer N. Mendoza'
    },
    {
      id: 3,
      name: 'Bro. Armin A. Luistro FSC',
      position: 'Former Secretary, Department of Education',
      image: '/images/leader-placeholder.webp',
      bio: 'A key figure in establishing the City Schools Division of Imus. His collaborative governance and strategic partnerships were instrumental in building the division\'s institutional capacity.',
      quote: 'Education is the cornerstone of nation-building.',
      quote_author: 'Bro. Armin A. Luistro FSC'
    },
    {
      id: 4,
      name: 'Hon. Emmanuel L. Maliksi',
      position: 'Former Mayor of Imus City',
      image: '/images/leader-placeholder.webp',
      bio: 'Instrumental in the creation of Imus City and a strong advocate for quality education. His support for the Schools Division Office has been a catalyst for educational development in the city.',
      quote: 'A well-educated community builds a better future for all.',
      quote_author: 'Hon. Emmanuel L. Maliksi'
    },
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

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

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className={`group relative h-full bg-white rounded-[2.5rem] border border-slate-200 transition-all duration-500 overflow-hidden ${
                expandedId === leader.id ? 'shadow-2xl ring-2 ring-blue-100' : 'shadow-sm hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {/* Leader Header */}
              <button
                onClick={() => toggleExpand(leader.id)}
                className="w-full p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8 transition-colors"
                aria-expanded={expandedId === leader.id}
              >
                {/* Profile Picture Container */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
                  <div className="relative h-full w-full rounded-full border-4 border-white shadow-lg overflow-hidden bg-slate-100">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                    {/* Placeholder Overlay when image is missing */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-50 text-slate-300">
                      <Users size={48} strokeWidth={1} />
                    </div>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="flex-1 space-y-3 pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#4279D2] rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
                    <Award size={12} />
                    <span>Learning Leader</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-[#4279D2] transition-colors line-clamp-2">
                    {leader.name}
                  </h3>
                  <p className="text-lg text-[#4279D2] font-bold italic tracking-tight">{leader.position}</p>
                  
                  <div className={`flex items-center justify-center sm:justify-start gap-2 pt-2 text-[#4279D2] font-bold text-xs uppercase tracking-widest transition-opacity ${expandedId === leader.id ? 'opacity-0' : 'opacity-100'}`}>
                    <span>View Bio</span>
                    <ChevronDown size={14} className="animate-bounce" />
                  </div>
                </div>
              </button>

              {/* Bio & Quote Section (Accordion Body) */}
              <div 
                className={`transition-all duration-500 ease-in-out px-8 md:px-10 pb-8 md:pb-12 ${
                  expandedId === leader.id ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'
                }`}
              >
                <div className="space-y-8 pt-6 border-t border-slate-100">
                  {/* Biography */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-900 font-black uppercase tracking-tighter text-sm">
                      <Star size={16} className="text-blue-500 fill-blue-500" />
                      <span>Biography</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed font-medium text-lg">
                      {leader.bio}
                    </p>
                  </div>

                  {/* Quote Box */}
                  <div className="group/quote relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-10 group-hover/quote:opacity-20 transition duration-500" />
                    <div className="relative p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col space-y-4">
                      <Quote size={32} className="text-[#4279D2] opacity-30" />
                      <p className="text-xl md:text-2xl font-black text-slate-800 leading-tight italic tracking-tight">
                        "{leader.quote}"
                      </p>
                      <p className="text-[#4279D2] font-black text-sm uppercase tracking-widest">— {leader.quote_author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

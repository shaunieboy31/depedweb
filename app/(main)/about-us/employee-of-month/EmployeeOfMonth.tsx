"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  Trophy, 
  Star, 
  Users, 
  Award,
  Calendar,
  Sparkles
} from "lucide-react";

export default function EmployeeOfMonth() {
  const months = [
    "January 2024",
    "February 2024",
    "March 2024",
    "April 2024",
  ];

  const [loading, setLoading] = useState(false);
  const [employeeData, setEmployeeData] = useState<any[]>([
    {
      month: 'January',
      year: '2024',
      name: 'Maria Santos',
      position: 'Teacher I',
      school: 'Imus National High School',
      achievement: 'Outstanding performance in student mentoring and curriculum development',
      image_url: '/employee-1.jpg'
    },
    // ... other defaults
  ]);

  // Sync with Admin Dashboard (Removed)
  useEffect(() => {
    // Persistence removed for database-less mode
  }, []);

  const [openIds, setOpenIds] = useState<string[]>([]);

  // selected month key (use month string)
  const [selectedKey, setSelectedKey] = useState<string>(() => months[0]);

  // derive index and navigation helpers from months
  const currentIndex = Math.max(
    0,
    months.findIndex((m) => m === selectedKey),
  );

  const nextMonth = () => {
    const next = (currentIndex + 1) % months.length;
    setSelectedKey(months[next]);
  };

  const prevMonth = () => {
    const prev = (currentIndex - 1 + months.length) % months.length;
    setSelectedKey(months[prev]);
  };

  const currentMonthName = months[currentIndex] || months[0];
  const currentId = currentMonthName.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
  
  const currentDataItem = employeeData.find(d => `${d.month} ${d.year}` === currentMonthName);
  const currentImageSrc = currentDataItem?.image_url || "/images/leader-placeholder.webp";

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
            Employee <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              of the Month
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
            Celebrating the <span className="italic font-black text-white">BIDAng</span> Imusenyo spirit through excellence, dedication, and service.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        
        {/* Featured Section */}
        <div className="flex flex-col items-center text-center mb-16 px-4">
           <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Our Monthly Stars</h2>
           <div className="h-1.5 w-20 bg-[#4279D2] mx-auto mb-6" />
           <p className="text-slate-500 max-w-2xl font-medium text-lg">
             Honoring the individuals whose commitment to public service sets the standard for our division.
           </p>
        </div>

        {/* Featured Employee Card */}
        <div className="group relative max-w-5xl mx-auto mb-24">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition duration-500" />
          <div className="relative bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-[400px] lg:h-full min-h-[400px] overflow-hidden bg-slate-100">
                <Image
                  src={currentImageSrc}
                  alt={currentMonthName}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 flex gap-2">
                   <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-xs font-black uppercase tracking-widest">
                      <Sparkles size={14} className="inline mr-2" />
                      Featured
                   </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10 md:p-14 flex flex-col justify-center space-y-8 bg-gradient-to-br from-white to-slate-50">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#4279D2] rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 mb-4">
                    <Calendar size={14} />
                    <span>{currentMonthName}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4 group-hover:text-[#4279D2] transition-colors">
                    {currentDataItem?.name || "Ready for Recognition"}
                  </h2>
                  <div className="h-1 w-16 bg-[#4279D2] mb-6" />
                  <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
                    "Recognized for exceptional performance, unwavering dedication, and significant contributions to the Schools Division Office of Imus City."
                  </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-4 pt-4">
                  <button
                    onClick={prevMonth}
                    className="p-4 bg-slate-100 hover:bg-[#4279D2] text-slate-400 hover:text-white rounded-2xl transition-all shadow-sm"
                    aria-label="Previous Month"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextMonth}
                    className="p-4 bg-slate-100 hover:bg-[#4279D2] text-slate-400 hover:text-white rounded-2xl transition-all shadow-sm"
                    aria-label="Next Month"
                  >
                    <ChevronRight size={24} />
                  </button>
                  <p className="ml-4 text-xs font-black text-slate-400 uppercase tracking-widest">Navigation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* List Section */}
        <div className="max-w-5xl mx-auto space-y-12">
           <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Hall of Excellence</h2>
              <Trophy size={28} className="text-blue-500 opacity-20" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {months.map((month) => {
               const id = month.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
               const isOpen = openIds.includes(id);
               const itemData = employeeData.find(d => `${d.month} ${d.year}` === month);
               const imageSrc = itemData?.image_url || "/images/leader-placeholder.webp";
               
               return (
                 <section
                   key={id}
                   id={id}
                   className={`group bg-white rounded-3xl border border-slate-200 transition-all duration-500 overflow-hidden ${
                     isOpen ? 'shadow-2xl ring-2 ring-blue-100' : 'shadow-sm hover:shadow-xl'
                   }`}
                 >
                   <button
                     onClick={() => setOpenIds(prev => isOpen ? prev.filter(x => x !== id) : [...prev, id])}
                     className="w-full p-6 flex items-center justify-between text-left"
                   >
                     <div className="flex items-center gap-5">
                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-md group-hover:scale-105 transition-transform">
                           <Image src={imageSrc} alt={month} fill className="object-cover" />
                        </div>
                        <div>
                           <h3 className="text-lg font-black text-slate-900">{month}</h3>
                           <p className="text-sm font-bold text-[#4279D2] italic">{itemData?.name || "To be announced"}</p>
                        </div>
                     </div>
                     <div className={`p-2 rounded-xl transition-all ${
                       isOpen ? 'bg-[#4279D2] text-white rotate-180' : 'bg-slate-50 text-slate-400'
                     }`}>
                       <ChevronDown size={20} />
                     </div>
                   </button>

                   <div
                     className={`transition-all duration-500 ease-in-out px-6 overflow-hidden ${
                       isOpen ? "max-h-[800px] mb-6" : "max-h-0"
                     }`}
                   >
                     <div className="pt-6 border-t border-slate-100 space-y-4">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-inner bg-slate-50">
                           <Image src={imageSrc} alt={month} fill className="object-cover opacity-80" />
                        </div>
                        <p className="text-sm text-slate-500 font-medium italic p-4 bg-slate-50 rounded-xl border border-slate-100">
                           {itemData?.name ? `Proudly recognized as the Employee of the Month for ${month}.` : "The recipient of this award demonstrates excellence in all areas of service."}
                        </p>
                     </div>
                   </div>
                 </section>
               );
             })}
           </div>
        </div>

        {/* Recognition Policy Box */}
        <div className="bg-[#032977] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl mt-32 max-w-5xl mx-auto">
          <div className="absolute top-0 right-0 p-12 opacity-10">
             <Trophy size={300} strokeWidth={0.5} />
          </div>
          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950/40 rounded-full border border-emerald-400/20">
                Institutional Awards
              </span>
              <h2 className="text-4xl font-black tracking-tight leading-tight">Reward & Recognition</h2>
              <div className="h-1.5 w-20 bg-emerald-400" />
            </div>
            
            <p className="text-xl text-blue-100 font-medium leading-relaxed max-w-2xl italic">
              "The Employee of the Month award is given to individuals who exemplify the core values of DepEd Imus City through proactive leadership and exceptional service delivery."
            </p>

            <div className="flex flex-wrap gap-8 pt-4">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-blue-300">
                     <Award size={20} />
                  </div>
                  <span className="font-bold uppercase tracking-widest text-xs">Excellence Driven</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-emerald-300">
                     <Star size={20} />
                  </div>
                  <span className="font-bold uppercase tracking-widest text-xs">Service Integrity</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-amber-300">
                     <Sparkles size={20} />
                  </div>
                  <span className="font-bold uppercase tracking-widest text-xs">Continuous Growth</span>
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

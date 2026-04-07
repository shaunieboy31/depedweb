"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  ChevronDown, 
  Layers, 
  FileImage,
  Sparkles
} from "lucide-react";
import { getOrgChartsAction } from "@/app/actions/org-chart";

type Department = {
  id: string | number;
  department: string;
  image: string | null;
};

export default function OrganizationalStructure() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [openIds, setOpenIds] = useState<(string | number)[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const res = await getOrgChartsAction();
      if (res.success && res.data) {
        setDepartments(res.data);
      }
      setLoading(false);
    }
    loadData();
  }, []);

  const toggleExpand = (id: string | number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  if (loading) {
    return (
      <div className="w-full bg-[#f8fafc] min-h-screen flex items-center justify-center">
         <div className="flex flex-col items-center gap-4 animate-pulse">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
               <Layers size={24} className="animate-spin" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Loading Organizational Framework...</p>
         </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 pb-32">
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 text-white">
          <Image
            src="/images/newbuilding.webp"
            alt="SDO Imus Building"
            fill
            className="object-cover object-center brightness-[0.4]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#032977] via-transparent to-transparent opacity-70" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-300 uppercase bg-blue-950/40 backdrop-blur-md rounded-full border border-blue-400/30">
            Institutional Directory
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
            S.D.O. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Charts
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto drop-shadow-lg font-medium">
             Comprehensive organizational hierarchy and functional structures of the Imus City Schools Division.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        
        {departments.length === 0 ? (
          <div className="py-32 text-center space-y-8 bg-white rounded-[3rem] border border-slate-200 shadow-sm">
             <div className="p-8 bg-slate-50 w-fit mx-auto rounded-full text-slate-200">
                <FileImage size={80} strokeWidth={0.5} />
             </div>
             <div className="space-y-2">
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Directory Under Construction</h2>
                <p className="text-slate-500 font-medium max-w-md mx-auto italic lowercase">The division is currently updating the departmental organizational charts. Please check back later.</p>
             </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
            
            {/* Quick Nav Sidebar */}
            <div className="lg:col-span-4 space-y-8 sticky top-24">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#4279D2] rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 shadow-sm">
                  <Layers size={14} />
                  <span>Quick Navigation</span>
                </div>
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Our Framework</h2>
                <div className="h-1.5 w-20 bg-[#4279D2]" />
              </div>
              
              <nav className="bg-white rounded-[2.5rem] p-8 shadow-md border border-slate-100">
                <ul className="space-y-4">
                  {departments.map((d) => (
                    <li key={d.id} className="group">
                      <button
                        onClick={() => {
                          if (!openIds.includes(d.id)) setOpenIds((prev) => [...prev, d.id]);
                          setTimeout(() => {
                            const el = document.getElementById(d.id.toString());
                            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                          }, 200);
                        }}
                        className="flex items-center gap-4 text-[11px] font-black text-slate-500 hover:text-[#4279D2] transition-colors w-full text-left uppercase tracking-widest"
                      >
                        <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-[#4279D2] transition-colors shrink-0" />
                        <span className="leading-tight">{d.department}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Chart Sections */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              {departments.map((d) => {
                const isOpen = openIds.includes(d.id);
                return (
                  <section
                    key={d.id}
                    id={d.id.toString()}
                    className={`group bg-white rounded-[3rem] border border-slate-200 transition-all duration-700 overflow-hidden relative shadow-sm ${
                      isOpen ? 'shadow-2xl ring-2 ring-blue-100' : 'hover:shadow-xl'
                    }`}
                  >
                    <button
                      onClick={() => toggleExpand(d.id)}
                      className={`w-full p-8 md:p-12 flex items-center justify-between text-left transition-colors ${
                        isOpen ? 'bg-blue-50/50' : 'hover:bg-slate-50/50'
                      }`}
                    >
                      <div className="space-y-2">
                        <h3 className={`text-xl md:text-2xl font-black transition-colors leading-tight uppercase tracking-tight ${
                          isOpen ? 'text-[#4279D2]' : 'text-slate-900'
                        }`}>
                          {d.department}
                        </h3>
                        <div className="flex items-center gap-2">
                           <div className={`w-2 h-2 rounded-full ${d.image ? 'bg-green-500' : 'bg-slate-300'}`} />
                           <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">
                             {d.image ? 'Chart Updated' : 'Chart Pending'}
                           </span>
                        </div>
                      </div>
                      <div className={`p-4 rounded-full transition-all shrink-0 ml-4 ${
                        isOpen ? 'bg-[#4279D2] text-white rotate-180 shadow-lg shadow-blue-200' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                      }`}>
                        <ChevronDown size={28} />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] px-8 md:px-12 ${
                        isOpen ? "grid-rows-[1fr] border-t border-slate-100 pb-16 opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-12">
                         {/* Image Display */}
                         <div className="relative group/chart">
                            {d.image ? (
                              <div className="rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-inner group/img relative">
                                 <img 
                                   src={d.image} 
                                   alt={d.department} 
                                   className="w-full h-auto object-contain transition-all duration-700 group-hover/img:scale-[1.02]" 
                                 />
                                 <div className="absolute inset-0 bg-blue-900/0 group-hover/img:bg-blue-900/10 pointer-events-none transition-all duration-500" />
                              </div>
                            ) : (
                               <div className="rounded-[2.5rem] aspect-[16/10] bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center space-y-6 text-slate-400 py-24">
                                  <FileImage size={100} strokeWidth={0.5} className="opacity-40 animate-pulse" />
                                  <div className="space-y-2 text-center">
                                     <p className="font-black uppercase tracking-widest text-[10px]">No Chart Available</p>
                                     <p className="text-xs font-medium italic px-6">Detailed organizational hierarchy for this unit is currently being processed.</p>
                                  </div>
                               </div>
                            )}
                         </div>
                       </div>
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* Footer Decoration */}
      <div className="w-full h-24 bg-gradient-to-t from-slate-200/50 to-transparent" />
    </div>
  );
}

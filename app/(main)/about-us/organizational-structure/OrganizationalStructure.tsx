"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { 
  Building2, 
  ChevronDown, 
  Layers, 
  MapPin, 
  Target,
  Upload,
  RefreshCcw,
  Download,
  X,
  FileImage,
  ImageIcon,
  AlertTriangle
} from "lucide-react";

type Department = {
  id: string;
  title: string;
  chartImage: string | null;
};

const INITIAL_DEPARTMENTS: Department[] = [
  { id: "admin", title: "Office of the Schools Division Superintendent", chartImage: null },
  { id: "assistant", title: "Office of the Assistant Schools Division Superintendent", chartImage: null },
  { id: "cmdd", title: "Curriculum Management and Development Division (CMDD)", chartImage: null },
  { id: "hrmd", title: "Human Resource Management Division (HRMD)", chartImage: null },
  { id: "finance", title: "Finance Division", chartImage: null },
  { id: "adminDiv", title: "Administrative Division", chartImage: null },
  { id: "prd", title: "Planning and Research Division (PRD)", chartImage: null },
  { id: "legal", title: "Legal Services", chartImage: null },
  { id: "ict", title: "Information and Communications Technology", chartImage: null },
  { id: "cid", title: "Curriculum Implementation Division", chartImage: null },
  { id: "sgod", title: "School Governance and Operations Division", chartImage: null },
  { id: "supply", title: "Supply Unit", chartImage: null },
  { id: "records", title: "Records Unit", chartImage: null },
  { id: "health", title: "School Health and Nutrition", chartImage: null },
  { id: "facilities", title: "Physical Facilities", chartImage: null },
];

export default function OrganizationalStructure() {
  const [departments, setDepartments] = useState<Department[]>(INITIAL_DEPARTMENTS);
  const [openIds, setOpenIds] = useState<string[]>([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [currentUploadId, setCurrentUploadId] = useState<string | null>(null);

  // Load from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem("deped_org_chart_images");
    if (saved) {
      try {
        setDepartments(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load org chart from storage");
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === "e") setIsEditMode((prev) => !prev);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const saveToStorage = (data: Department[]) => {
    localStorage.setItem("deped_org_chart_images", JSON.stringify(data));
    setDepartments(data);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
         alert("Image size too large! Please choose an image under 2MB to ensure it saves correctly in your browser.");
         return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const next = departments.map(d => d.id === id ? { ...d, chartImage: base64String } : d);
        saveToStorage(next);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = (id: string) => {
    setCurrentUploadId(id);
    fileInputRef.current?.click();
  };

  const factoryReset = () => {
    if (confirm("Clear all uploaded charts and revert to default?")) {
      localStorage.removeItem("deped_org_chart_images");
      setDepartments(INITIAL_DEPARTMENTS);
    }
  };

  const downloadConfig = () => {
    const blob = new Blob([JSON.stringify(departments, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "org-structure-images-config.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleExpand = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 pb-32">
      
      {/* Admin Toolbar */}
      {isEditMode && (
        <div className="fixed top-0 left-0 right-0 z-[100] bg-slate-900 text-white p-3 flex items-center justify-between shadow-2xl border-b border-white/10 animate-in slide-in-from-top duration-500">
           <div className="flex items-center gap-4 px-4">
              <div className="px-2 py-1 bg-blue-600 rounded-md text-[10px] font-black uppercase tracking-widest text-white">Manager Mode</div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] hidden md:block">Update Organization Charts</span>
           </div>
           <div className="flex items-center gap-2 pr-4">
              <button 
                onClick={downloadConfig}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
              >
                 <Download size={14} />
                 <span>Export JSON</span>
              </button>
              <button 
                onClick={factoryReset}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/40 text-red-300 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-red-500/10"
              >
                 <RefreshCcw size={14} />
                 <span>Reset Charts</span>
              </button>
              <button onClick={() => setIsEditMode(false)} className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all">
                 <X size={18} />
              </button>
           </div>
        </div>
      )}

      {/* Hidden File Input */}
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept="image/*"
        onChange={(e) => currentUploadId && handleFileUpload(e, currentUploadId)}
      />

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
                           const el = document.getElementById(d.id);
                           if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                        }, 200);
                      }}
                      className="flex items-center gap-4 text-[11px] font-black text-slate-500 hover:text-[#4279D2] transition-colors w-full text-left uppercase tracking-widest"
                    >
                      <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-[#4279D2] transition-colors shrink-0" />
                      <span className="leading-tight">{d.title}</span>
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
                  id={d.id}
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
                        {d.title}
                      </h3>
                      <div className="flex items-center gap-2">
                         <div className={`w-2 h-2 rounded-full ${d.chartImage ? 'bg-green-500' : 'bg-slate-300'}`} />
                         <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">
                           {d.chartImage ? 'Chart Updated' : 'Chart Pending'}
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
                    className={`transition-all duration-700 ease-in-out px-8 md:px-12 overflow-hidden ${
                      isOpen ? "max-h-[2500px] border-t border-slate-100 pb-16" : "max-h-0"
                    }`}
                  >
                    <div className="pt-12 space-y-10">
                       
                       {/* Manager Mode Controls */}
                       {isEditMode && (
                         <div className="bg-slate-50 p-6 rounded-[2rem] border border-dashed border-slate-300 flex flex-col items-center gap-6 text-center animate-in zoom-in-95 duration-500">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-400 shadow-sm">
                               <Upload size={32} />
                            </div>
                            <div className="space-y-2">
                               <p className="font-black text-slate-900 uppercase tracking-tight">Upload Functional Chart</p>
                               <p className="text-xs text-slate-500 font-medium italic">Max size: 2MB. Recommendation: High resolution JPG or PNG.</p>
                            </div>
                            <button 
                               onClick={() => triggerUpload(d.id)}
                               className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-700 transition-all flex items-center gap-3 shadow-xl shadow-blue-200"
                            >
                               {d.chartImage ? <RefreshCcw size={16} /> : <Upload size={16} />}
                               <span>{d.chartImage ? 'Update Chart' : 'Choose File'}</span>
                            </button>
                         </div>
                       )}

                       {/* Image Display */}
                       <div className="relative group/chart">
                          {d.chartImage ? (
                            <div className="rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-inner group/img relative">
                               <img 
                                 src={d.chartImage} 
                                 alt={d.title} 
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
                </section>
              );
            })}
          </div>
        </div>

      </div>

      {/* Footer Decoration */}
      <div className="w-full h-24 bg-gradient-to-t from-slate-200/50 to-transparent" />
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  ChevronRight, 
  Users, 
  Trophy, 
  Newspaper, 
  Upload, 
  Save, 
  RefreshCcw, 
  Calendar,
  Image as ImageIcon,
  CheckCircle2,
  Trash2,
  PlusCircle,
  Building2
} from "lucide-react";
import Link from "next/link";

// Types
type EmployeeWinner = {
  name: string;
  month: string;
  year: string;
  achievement: string;
  image: string | null;
};

type NewsItem = {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string | null;
};

export default function AdminDashboard() {
  // --- STATE MANAGEMENT ---
  const [employee, setEmployee] = useState<EmployeeWinner>({
    name: "Maria Santos",
    month: "April",
    year: "2024",
    achievement: "Outstanding performance in student mentoring and curriculum development",
    image: null
  });

  const [news, setNews] = useState<NewsItem[]>([
    { id: "1", title: "Division Announces Early Registration", category: "ANNOUNCEMENT", date: "Feb 28, 2026", excerpt: "SDO Imus City announces early registration dates...", image: null },
    { id: "2", title: "Learner Support Program Expanded", category: "PROGRAMS", date: "Jan 15, 2026", excerpt: "New support initiatives were launched...", image: null },
    { id: "3", title: "Division Awards Exemplary Teachers", category: "AWARDS", date: "Dec 10, 2025", excerpt: "Outstanding teachers recognized...", image: null },
  ]);

  const [activeTab, setActiveTab] = useState<"overview" | "employee" | "news">("overview");
  const [isSaved, setIsSaved] = useState(false);

  // --- REFS FOR FILE UPLOADS ---
  const employeeFileRef = useRef<HTMLInputElement>(null);
  const newsFileRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  // --- LOAD & SAVE (Removed local persistence) ---
  useEffect(() => {
    // Data is now static/mock for this session
  }, []);

  const persistData = (type: "employee" | "news", data: any) => {
    // Persistence removed
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  // --- HANDLERS ---
  const handleImageUpload = (file: File, callback: (base64: string) => void) => {
    if (file.size > 2 * 1024 * 1024) return alert("File too large (>2MB)");
    const reader = new FileReader();
    reader.onloadend = () => callback(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-700">
      
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
         <div className="space-y-1">
            <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Admin Command Center</h1>
            <p className="text-slate-500 font-medium">Manage institutional content across the division web portal.</p>
         </div>
         {isSaved && (
           <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100 animate-in zoom-in-95">
              <CheckCircle2 size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Changes Synced</span>
           </div>
         )}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar Nav */}
        <div className="lg:col-span-3 space-y-4">
           {[
             { id: "overview", label: "Overview", icon: Building2 },
             { id: "employee", label: "Employee Honors", icon: Trophy },
             { id: "news", label: "News Desk", icon: Newspaper }
           ].map(tab => (
             <button
               key={tab.id}
               onClick={() => setActiveTab(tab.id as any)}
               className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold transition-all text-sm ${
                 activeTab === tab.id ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-white text-slate-500 hover:bg-slate-50"
               }`}
             >
               <tab.icon size={20} />
               <span>{tab.label}</span>
             </button>
           ))}

           <div className="pt-8 border-t border-slate-100">
              <Link 
                href="/about-us/organizational-structure" 
                className="w-full flex items-center justify-between p-4 bg-amber-50 text-amber-700 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-amber-100 transition-all border border-amber-100"
              >
                 <div className="flex items-center gap-3">
                    <Users size={16} />
                    <span>Org Charts</span>
                 </div>
                 <ChevronRight size={14} />
              </Link>
           </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="lg:col-span-9">
           
           {/* 1. OVERVIEW */}
           {activeTab === "overview" && (
             <div className="space-y-8 animate-in slide-in-from-right-10 duration-500">
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-10 opacity-[0.03]">
                      <Building2 size={200} />
                   </div>
                   <div className="relative z-10 space-y-6">
                      <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">System Status</h3>
                      <p className="text-slate-500 leading-relaxed font-medium">
                        You are currently in the **Mock Dashboard**. All updates made here are temporary for this session and will not be saved.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                         <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                            <span className="block text-2xl font-black text-blue-700">15</span>
                            <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest">Org Charts</span>
                         </div>
                         <div className="p-5 bg-amber-50 rounded-2xl border border-amber-100">
                            <span className="block text-2xl font-black text-amber-700">1</span>
                            <span className="text-[10px] font-black uppercase text-amber-600 tracking-widest">Honor Roll</span>
                         </div>
                         <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                            <span className="block text-2xl font-black text-emerald-700">3</span>
                            <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">News Items</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
           )}

           {/* 2. EMPLOYEE MANAGER */}
           {activeTab === "employee" && (
             <div className="space-y-8 animate-in slide-in-from-right-10 duration-500">
                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-10">
                   <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Monthly Honor Roll</h3>
                      <Trophy size={32} className="text-[#4279D2]" />
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {/* Form Details */}
                      <div className="space-y-6">
                         <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Month</label>
                               <input className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold" value={employee.month} onChange={e => setEmployee({...employee, month: e.target.value})} />
                            </div>
                            <div className="space-y-2">
                               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Year</label>
                               <input className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold" value={employee.year} onChange={e => setEmployee({...employee, year: e.target.value})} />
                            </div>
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Winner Name</label>
                            <input className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold" value={employee.name} onChange={e => setEmployee({...employee, name: e.target.value})} />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Achievement Description</label>
                            <textarea className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-medium h-32" value={employee.achievement} onChange={e => setEmployee({...employee, achievement: e.target.value})} />
                         </div>
                      </div>

                      {/* Photo Upload */}
                      <div className="space-y-6">
                         <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Official Recognition Photo</label>
                         <div className="relative aspect-[4/5] bg-slate-50 rounded-[2.5rem] overflow-hidden border-2 border-dashed border-slate-200 group">
                            {employee.image ? (
                              <img src={employee.image} alt="Preview" className="w-full h-full object-cover" />
                            ) : (
                              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 gap-4">
                                 <ImageIcon size={64} strokeWidth={0.5} />
                                 <span className="text-xs font-bold uppercase tracking-widest">No Image Selected</span>
                              </div>
                            )}
                            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col gap-4">
                               <button 
                                 onClick={() => employeeFileRef.current?.click()}
                                 className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-2"
                               >
                                  <Upload size={14} /> <span>Choose Photo</span>
                               </button>
                               <input type="file" ref={employeeFileRef} className="hidden" accept="image/*" onChange={e => e.target.files?.[0] && handleImageUpload(e.target.files[0], b => setEmployee({...employee, image: b}))} />
                            </div>
                         </div>
                      </div>
                   </div>

                   <button 
                     className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-200"
                   >
                      <Save size={20} />
                      <span>Preview Changes</span>
                   </button>
                </div>
             </div>
           )}

           {/* 3. NEWS MANAGER */}
           {activeTab === "news" && (
             <div className="space-y-8 animate-in slide-in-from-right-10 duration-500">
                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-10">
                   <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Home Page News Desk</h3>
                      <Newspaper size={32} className="text-[#4279D2]" />
                   </div>

                   <div className="space-y-12">
                      {news.map((item, index) => (
                        <div key={item.id} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-8 relative group">
                           <div className="flex flex-col md:flex-row gap-8">
                              {/* News Image */}
                              <div className="w-full md:w-1/3 aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 relative group/newsimg">
                                 {item.image ? (
                                   <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                 ) : (
                                   <div className="absolute inset-0 flex items-center justify-center text-slate-300"><ImageIcon size={40} /></div>
                                 )}
                                 <button 
                                   onClick={() => newsFileRefs.current[item.id]?.click()}
                                   className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover/newsimg:opacity-100 flex items-center justify-center transition-opacity"
                                 >
                                    <div className="p-3 bg-white rounded-full text-slate-900"><PlusCircle size={20} /></div>
                                 </button>
                                 <input type="file" ref={el => { newsFileRefs.current[item.id] = el; }} className="hidden" accept="image/*" onChange={e => {
                                    const file = e.target.files?.[0];
                                    if (file) handleImageUpload(file, b => {
                                       const next = [...news];
                                       next[index].image = b;
                                       setNews(next);
                                    });
                                 }} />
                              </div>

                              {/* News Details */}
                              <div className="flex-1 space-y-4">
                                 <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                       <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Category</label>
                                       <input className="w-full p-3 bg-white rounded-lg border border-slate-100 text-xs font-bold" value={item.category} onChange={e => {
                                          const next = [...news];
                                          next[index].category = e.target.value;
                                          setNews(next);
                                       }} />
                                    </div>
                                    <div className="space-y-1">
                                       <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Date</label>
                                       <input className="w-full p-3 bg-white rounded-lg border border-slate-100 text-xs font-bold" value={item.date} onChange={e => {
                                          const next = [...news];
                                          next[index].date = e.target.value;
                                          setNews(next);
                                       }} />
                                    </div>
                                 </div>
                                 <div className="space-y-1">
                                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Headline</label>
                                    <input className="w-full p-3 bg-white rounded-lg border border-slate-100 text-sm font-bold" value={item.title} onChange={e => {
                                       const next = [...news];
                                       next[index].title = e.target.value;
                                       setNews(next);
                                    }} />
                                 </div>
                                 <div className="space-y-1">
                                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Excerpt</label>
                                    <textarea className="w-full p-3 bg-white rounded-lg border border-slate-100 text-xs font-medium h-20" value={item.excerpt} onChange={e => {
                                       const next = [...news];
                                       next[index].excerpt = e.target.value;
                                       setNews(next);
                                    }} />
                                 </div>
                              </div>
                           </div>
                        </div>
                      ))}
                   </div>

                   <button 
                     className="w-full py-5 bg-emerald-600 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-200"
                   >
                      <Save size={20} />
                      <span>Preview Home Feed</span>
                   </button>
                </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}


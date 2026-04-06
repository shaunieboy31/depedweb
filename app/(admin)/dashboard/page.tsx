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
import { getNewsAction, updateNewsAction, deleteNewsAction } from "@/app/actions/news";

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

  const [news, setNews] = useState<NewsItem[]>([]);

  const [activeTab, setActiveTab] = useState<"overview" | "employee" | "news">("overview");
  const [isSaved, setIsSaved] = useState(false);

  // --- REFS FOR FILE UPLOADS ---
  const employeeFileRef = useRef<HTMLInputElement>(null);
  const newsFileRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  // --- LOAD & SAVE ---
  async function loadData() {
    const result = await getNewsAction();
    if (result.success && result.data) {
      const mappedNews = result.data.map((n: any) => ({
        id: n.id.toString(),
        title: n.title,
        category: n.category,
        date: n.date,
        excerpt: n.excerpt,
        image: n.image
      }));
      setNews(mappedNews);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  const [newsFiles, setNewsFiles] = useState<{ [key: string]: File }>({});

  const handleImageChange = (id: string, file: File, index: number) => {
    if (file.size > 2 * 1024 * 1024) return alert("File too large (>2MB)");
    
    // Preview locally
    const reader = new FileReader();
    reader.onloadend = () => {
      const next = [...news];
      next[index].image = reader.result as string;
      setNews(next);
    };
    reader.readAsDataURL(file);

    // Store actual file for upload
    setNewsFiles(prev => ({ ...prev, [id]: file }));
  };

  const [isUpdating, setIsUpdating] = useState(false);
  const [editingItem, setEditingItem] = useState<NewsItem | null>(null);

  const handleSaveNews = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    setIsUpdating(true);
    const id = editingItem.id;
    const file = newsFiles[id];

    const formData = new FormData();
    // If it's a new item, ID will be "new" or empty
    if (id !== "new") {
      formData.append("id", id);
    }
    
    formData.append("title", editingItem.title);
    formData.append("excerpt", editingItem.excerpt);
    formData.append("category", editingItem.category);
    formData.append("date", editingItem.date);
    formData.append("oldImagePath", editingItem.image || "");
    
    if (file) {
      formData.append("image", file);
    }

    const result = await updateNewsAction(formData);
    setIsUpdating(false);

    if (result.success) {
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
      setEditingItem(null);
      loadData(); // Refresh list
    } else {
      alert("Failed to save: " + result.error);
    }
  };

  const handleDeleteNews = async (id: string) => {
    if (!confirm("Are you sure you want to remove this announcement?")) return;
    
    const result = await deleteNewsAction(parseInt(id));
    if (result.success) {
      loadData();
    } else {
      alert("Failed to delete: " + result.error);
    }
  };

  // Keep original helper for employee section until refactored
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
                         The dashboard is successfully connected to your local **MySQL Database**. Updates to news and honors will appear live on the website.
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
                
                {/* News List / List of Announcements */}
                {!editingItem ? (
                  <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-8">
                     <div className="flex items-center justify-between">
                        <div className="space-y-1">
                           <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">News & Announcements</h3>
                           <p className="text-slate-400 text-xs font-bold uppercase tracking-widest italic">Live Content Management</p>
                        </div>
                        <button 
                          onClick={() => setEditingItem({ id: "new", title: "", category: "ANNOUNCEMENT", date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), excerpt: "", image: null })}
                          className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all"
                        >
                           <PlusCircle size={16} />
                           <span>Add News</span>
                        </button>
                     </div>

                     <div className="space-y-4">
                        {news.length === 0 ? (
                          <div className="p-20 text-center space-y-4 border-2 border-dashed border-slate-100 rounded-[2rem]">
                             <div className="p-6 bg-slate-50 w-fit mx-auto rounded-full text-slate-300">
                                <Newspaper size={48} strokeWidth={1} />
                             </div>
                             <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">No announcements found in database</p>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 gap-4">
                             {news.map(item => (
                               <div key={item.id} className="group flex items-center gap-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all">
                                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-white border border-slate-100">
                                     {item.image ? (
                                       <img src={item.image} alt="" className="w-full h-full object-cover" />
                                     ) : (
                                       <div className="w-full h-full flex items-center justify-center text-slate-200"><ImageIcon size={24} /></div>
                                     )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                     <div className="flex items-center gap-3 mb-1">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-blue-600 px-2 py-0.5 bg-blue-50 rounded-md">{item.category}</span>
                                        <span className="text-[9px] font-bold text-slate-400 uppercase">{item.date}</span>
                                     </div>
                                     <h4 className="font-bold text-slate-800 truncate pr-4">{item.title}</h4>
                                  </div>
                                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity pr-2">
                                     <button 
                                       onClick={() => setEditingItem(item)}
                                       className="p-3 bg-white text-blue-600 rounded-xl border border-blue-50 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                     >
                                        <Save size={16} />
                                     </button>
                                     <button 
                                       onClick={() => handleDeleteNews(item.id)}
                                       className="p-3 bg-white text-rose-500 rounded-xl border border-rose-50 hover:bg-rose-500 hover:text-white transition-all shadow-sm"
                                     >
                                        <Trash2 size={16} />
                                     </button>
                                  </div>
                               </div>
                             ))}
                          </div>
                        )}
                     </div>
                  </div>
                ) : (
                  /* Editor Form */
                  <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-10">
                     <div className="flex items-center justify-between">
                        <button onClick={() => setEditingItem(null)} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2">
                           <ChevronRight size={14} className="rotate-180" /> Back to List
                        </button>
                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                           {editingItem.id === "new" ? "New Announcement" : "Edit Details"}
                        </h3>
                     </div>

                     <form onSubmit={handleSaveNews} className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                           <div className="space-y-6">
                              <div className="grid grid-cols-2 gap-4">
                                 <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</label>
                                    <input required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold" value={editingItem.category} onChange={e => setEditingItem({...editingItem, category: e.target.value})} />
                                 </div>
                                 <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</label>
                                    <input required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold" value={editingItem.date} onChange={e => setEditingItem({...editingItem, date: e.target.value})} />
                                 </div>
                              </div>
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Headline Title</label>
                                 <input required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-black" value={editingItem.title} onChange={e => setEditingItem({...editingItem, title: e.target.value})} />
                              </div>
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Short Excerpt</label>
                                 <textarea required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-medium h-32" value={editingItem.excerpt} onChange={e => setEditingItem({...editingItem, excerpt: e.target.value})} />
                              </div>
                           </div>

                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Announcement Image</label>
                              <div className="relative aspect-[4/3] bg-slate-50 rounded-[2.5rem] overflow-hidden border-2 border-dashed border-slate-200 group">
                                 {editingItem.image ? (
                                   <img src={editingItem.image} alt="Preview" className="w-full h-full object-cover" />
                                 ) : (
                                   <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 gap-4">
                                      <ImageIcon size={64} strokeWidth={0.5} />
                                      <span className="text-xs font-bold uppercase tracking-widest text-center px-6">Upload a photo to engage more readers</span>
                                   </div>
                                 )}
                                 <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button 
                                      type="button"
                                      onClick={() => newsFileRefs.current[editingItem.id]?.click()}
                                      className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-2"
                                    >
                                       <Upload size={14} /> <span>{editingItem.image ? "Change Image" : "Choose Image"}</span>
                                    </button>
                                 </div>
                                 <input type="file" ref={el => { newsFileRefs.current[editingItem.id] = el; }} className="hidden" accept="image/*" onChange={e => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                       // Simple temporary state for the "new" item ID ref
                                       const actualId = editingItem.id === "new" ? "new" : editingItem.id;
                                       
                                       // Preview
                                       const reader = new FileReader();
                                       reader.onloadend = () => {
                                          setEditingItem({...editingItem, image: reader.result as string});
                                       };
                                       reader.readAsDataURL(file);
                                       
                                       // Store file object
                                       setNewsFiles(prev => ({ ...prev, [actualId]: file }));
                                    }
                                 }} />
                              </div>
                           </div>
                        </div>

                        <div className="flex items-center gap-4">
                           <button 
                             type="submit"
                             disabled={isUpdating}
                             className="flex-1 py-5 bg-blue-600 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-200 disabled:opacity-50"
                           >
                              {isUpdating ? <RefreshCcw size={20} className="animate-spin" /> : <Save size={20} />}
                              <span>{editingItem.id === "new" ? "Post Announcement" : "Save Changes"}</span>
                           </button>
                           <button 
                             type="button"
                             onClick={() => setEditingItem(null)}
                             className="px-10 py-5 bg-slate-50 text-slate-400 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-slate-100 hover:text-slate-600 transition-all border border-slate-100"
                           >
                              Cancel
                           </button>
                        </div>
                     </form>
                  </div>
                )}
             </div>
           )}
        </div>
      </div>
    </div>
  );
}


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
import { getCarouselSlidesAction, createCarouselSlideAction, deleteCarouselSlideAction } from "@/app/actions/carousel";
import { getEmployeeHonorsAction, updateEmployeeHonorAction, deleteEmployeeHonorAction } from "@/app/actions/employee";

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
   const [news, setNews] = useState<NewsItem[]>([]);
   const [honors, setHonors] = useState<any[]>([]);
   const [carousel, setCarousel] = useState<any[]>([]);

   const [activeTab, setActiveTab] = useState<"overview" | "employee" | "news" | "carousel">("overview");
   const [isSaved, setIsSaved] = useState(false);

   // --- REFS FOR FILE UPLOADS ---
   const employeeFileRef = useRef<HTMLInputElement>(null);
   const newsFileRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

   // --- LOAD & SAVE ---
   async function loadData() {
      // 1. News
      const newsResult = await getNewsAction();
      if (newsResult.success && newsResult.data) {
         setNews(newsResult.data.map((n: any) => ({
            id: n.id.toString(),
            title: n.title,
            category: n.category,
            date: n.date,
            excerpt: n.excerpt,
            image: n.image
         })));
      }

      // 2. Honors
      const honorsResult = await getEmployeeHonorsAction();
      if (honorsResult.success && honorsResult.data) {
         setHonors(honorsResult.data);
      }

      // 3. Carousel
      const carouselResult = await getCarouselSlidesAction();
      if (carouselResult.success && carouselResult.data) {
         setCarousel(carouselResult.data);
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

   // --- EMPLOYEE HONORS ACTIONS ---
   const [editingHonor, setEditingHonor] = useState<any | null>(null);
   const [honorFiles, setHonorFiles] = useState<{ [key: string]: File }>({});

   const handleSaveHonor = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!editingHonor) return;
      setIsUpdating(true);

      const formData = new FormData();
      if (editingHonor.id && editingHonor.id !== "new") {
         formData.append("id", editingHonor.id.toString());
      }
      formData.append("name", editingHonor.name);
      formData.append("month", editingHonor.month);
      formData.append("year", editingHonor.year);
      formData.append("position", editingHonor.position || "");
      formData.append("school", editingHonor.school || "");
      formData.append("achievement", editingHonor.achievement);
      formData.append("oldImagePath", editingHonor.image || "");

      const file = honorFiles[editingHonor.id || "new"];
      if (file) formData.append("image", file);

      const result = await updateEmployeeHonorAction(formData);
      setIsUpdating(false);

      if (result.success) {
         setIsSaved(true);
         setTimeout(() => setIsSaved(false), 2000);
         setEditingHonor(null);
         loadData();
      } else {
         alert("Failed: " + result.error);
      }
   };

   const handleDeleteHonor = async (id: number) => {
      if (!confirm("Are you sure?")) return;
      const result = await deleteEmployeeHonorAction(id);
      if (result.success) loadData();
      else alert("Failed deletion");
   };

   // --- CAROUSEL ACTIONS ---
   const [isUploadingCarousel, setIsUploadingCarousel] = useState(false);

   const handleUploadCarousel = async (file: File) => {
      setIsUploadingCarousel(true);
      const formData = new FormData();
      formData.append("image", file);

      const result = await createCarouselSlideAction(formData);
      setIsUploadingCarousel(false);

      if (result.success) {
         setIsSaved(true);
         setTimeout(() => setIsSaved(false), 2000);
         loadData();
      } else {
         alert("Upload failed: " + result.error);
      }
   };

   const handleDeleteCarousel = async (id: number) => {
      if (!confirm("Remove this slide?")) return;
      const result = await deleteCarouselSlideAction(id);
      if (result.success) loadData();
      else alert("Delete failed");
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
                  { id: "carousel", label: "Hero Slider", icon: ImageIcon as any },
                  { id: "news", label: "News & Updates", icon: Newspaper },
                  { id: "employee", label: "Hall of Fame", icon: Trophy }
               ].map(tab => (
                  <button
                     key={tab.id}
                     onClick={() => setActiveTab(tab.id as any)}
                     className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold transition-all text-sm ${activeTab === tab.id ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-white text-slate-500 hover:bg-slate-50"
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
                              Welcome to the Admin Dashboard. Use this tool to manage the content of the Schools Division of Imus City website.
                           </p>
                           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                              <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                                 <span className="block text-2xl font-black text-blue-700">{carousel.length}</span>
                                 <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest">Main Slides</span>
                              </div>
                              <div className="p-5 bg-amber-50 rounded-2xl border border-amber-100 text-center">
                                 <span className="block text-2xl font-black text-amber-700">{honors.length}</span>
                                 <span className="text-[10px] font-black uppercase text-amber-600 tracking-widest">Honorees</span>
                              </div>
                              <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
                                 <span className="block text-2xl font-black text-emerald-700">{news.length}</span>
                                 <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">Articles</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               )}

               {/* 2. CAROUSEL MANAGER */}
               {activeTab === "carousel" && (
                  <div className="space-y-8 animate-in slide-in-from-right-10 duration-500">
                     <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-10">
                        <div className="flex items-center justify-between">
                           <div className="space-y-1">
                              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Main Hero Slider</h3>
                              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest italic">Home Page Visuals</p>
                           </div>
                           <button
                              onClick={() => {
                                 const input = document.createElement('input');
                                 input.type = 'file';
                                 input.accept = 'image/*';
                                 input.onchange = (e: any) => {
                                    const file = e.target.files?.[0];
                                    if (file) handleUploadCarousel(file);
                                 };
                                 input.click();
                              }}
                              disabled={isUploadingCarousel}
                              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 shadow-lg hover:bg-blue-700 transition-all"
                           >
                              {isUploadingCarousel ? <RefreshCcw size={14} className="animate-spin" /> : <PlusCircle size={14} />}
                              <span>Add New Slide</span>
                           </button>
                        </div>

                        {carousel.length === 0 ? (
                           <div className="p-20 text-center space-y-4 border-2 border-dashed border-slate-100 rounded-[2rem]">
                              <ImageIcon size={48} className="mx-auto text-slate-200" strokeWidth={1} />
                              <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">No slides uploaded (5-6 recommended)</p>
                           </div>
                        ) : (
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {carousel.map(slide => (
                                 <div key={slide.id} className="relative aspect-video rounded-2xl overflow-hidden group shadow-lg border border-slate-100">
                                    <img src={slide.image} className="w-full h-full object-cover" alt="" />
                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                                       <button
                                          onClick={() => handleDeleteCarousel(slide.id)}
                                          className="p-4 bg-white text-rose-500 rounded-full hover:bg-rose-500 hover:text-white transition-all shadow-xl"
                                       >
                                          <Trash2 size={20} />
                                       </button>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        )}
                     </div>
                  </div>
               )}

               {/* 3. EMPLOYEE MANAGER */}
               {activeTab === "employee" && (
                  <div className="space-y-8 animate-in slide-in-from-right-10 duration-500">
                     {!editingHonor ? (
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-8">
                           <div className="flex items-center justify-between">
                              <div className="space-y-1">
                                 <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Hall of Excellence</h3>
                                 <p className="text-slate-400 text-xs font-bold uppercase tracking-widest italic">Monthly Award Winners</p>
                              </div>
                              <button
                                 onClick={() => setEditingHonor({ id: "new", name: "", month: "", year: "2024", position: "", school: "", achievement: "", image: null })}
                                 className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-all"
                              >
                                 <PlusCircle size={16} />
                                 <span>Award Winner</span>
                              </button>
                           </div>

                           <div className="space-y-4">
                              {honors.length === 0 ? (
                                 <div className="p-20 text-center space-y-4 border-2 border-dashed border-slate-100 rounded-[2rem]">
                                    <Trophy size={48} className="mx-auto text-slate-200" strokeWidth={1} />
                                    <p className="text-slate-400 text-xs font-bold uppercase">No records found</p>
                                 </div>
                              ) : (
                                 <div className="grid grid-cols-1 gap-4">
                                    {honors.map(h => (
                                       <div key={h.id} className="group flex items-center gap-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all">
                                          <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-slate-100">
                                             <img src={h.image || "/images/leader-placeholder.webp"} className="w-full h-full object-cover" alt="" />
                                          </div>
                                          <div className="flex-1">
                                             <div className="flex items-center gap-2 mb-1">
                                                <span className="text-[10px] font-black text-blue-600 px-2 py-0.5 bg-blue-50 rounded-md uppercase tracking-widest">{h.month} {h.year}</span>
                                             </div>
                                             <h4 className="font-bold text-slate-800">{h.name}</h4>
                                          </div>
                                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                             <button onClick={() => setEditingHonor(h)} className="p-3 bg-white text-blue-600 rounded-xl border border-blue-50 hover:bg-blue-600 hover:text-white transition-all shadow-sm"><Save size={16} /></button>
                                             <button onClick={() => handleDeleteHonor(h.id)} className="p-3 bg-white text-rose-500 rounded-xl border border-rose-50 hover:bg-rose-500 hover:text-white transition-all shadow-sm"><Trash2 size={16} /></button>
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                              )}
                           </div>
                        </div>
                     ) : (
                        /* Honor Form */
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-10">
                           <div className="flex items-center justify-between">
                              <button onClick={() => setEditingHonor(null)} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2">
                                 <ChevronRight size={14} className="rotate-180" /> Back to History
                              </button>
                              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Winner Recognition</h3>
                           </div>

                           <form onSubmit={handleSaveHonor} className="space-y-10">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                 <div className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                       <div className="space-y-2">
                                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Award Month</label>
                                          <input required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold" value={editingHonor.month} onChange={e => setEditingHonor({ ...editingHonor, month: e.target.value })} />
                                       </div>
                                       <div className="space-y-2">
                                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Year</label>
                                          <input required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold" value={editingHonor.year} onChange={e => setEditingHonor({ ...editingHonor, year: e.target.value })} />
                                       </div>
                                    </div>
                                    <div className="space-y-2">
                                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Recipient Full Name</label>
                                       <input required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-black" value={editingHonor.name} onChange={e => setEditingHonor({ ...editingHonor, name: e.target.value })} />
                                    </div>
                                    <div className="space-y-2">
                                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Achievement Highlight</label>
                                       <textarea required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-medium h-32" value={editingHonor.achievement} onChange={e => setEditingHonor({ ...editingHonor, achievement: e.target.value })} />
                                    </div>
                                 </div>

                                 <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Awardee Profile Photo</label>
                                    <div className="relative aspect-[4/5] bg-slate-50 rounded-[2.5rem] overflow-hidden border-2 border-dashed border-slate-200 group">
                                       {editingHonor.image ? <img src={editingHonor.image} className="w-full h-full object-cover" alt="" /> : <div className="absolute inset-0 flex items-center justify-center text-slate-300"><ImageIcon size={64} /></div>}
                                       <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                          <button
                                             type="button"
                                             onClick={() => employeeFileRef.current?.click()}
                                             className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-2"
                                          >
                                             <Upload size={14} /> <span>Upload Photo</span>
                                          </button>
                                       </div>
                                       <input type="file" ref={employeeFileRef} className="hidden" onChange={e => {
                                          const file = e.target.files?.[0];
                                          if (file) {
                                             const reader = new FileReader();
                                             reader.onloadend = () => setEditingHonor({ ...editingHonor, image: reader.result as string });
                                             reader.readAsDataURL(file);
                                             setHonorFiles(p => ({ ...p, [editingHonor.id || "new"]: file }));
                                          }
                                       }} />
                                    </div>
                                 </div>
                              </div>

                              <button
                                 type="submit"
                                 disabled={isUpdating}
                                 className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl disabled:opacity-50"
                              >
                                 {isUpdating ? <RefreshCcw className="animate-spin" /> : <Save size={20} />}
                                 <span>Officially Recognize Awardee</span>
                              </button>
                           </form>
                        </div>
                     )}
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
                                          <input required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold" value={editingItem.category} onChange={e => setEditingItem({ ...editingItem, category: e.target.value })} />
                                       </div>
                                       <div className="space-y-2">
                                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</label>
                                          <input required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold" value={editingItem.date} onChange={e => setEditingItem({ ...editingItem, date: e.target.value })} />
                                       </div>
                                    </div>
                                    <div className="space-y-2">
                                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Headline Title</label>
                                       <input required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-black" value={editingItem.title} onChange={e => setEditingItem({ ...editingItem, title: e.target.value })} />
                                    </div>
                                    <div className="space-y-2">
                                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Short Excerpt</label>
                                       <textarea required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-medium h-32" value={editingItem.excerpt} onChange={e => setEditingItem({ ...editingItem, excerpt: e.target.value })} />
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
                                                setEditingItem({ ...editingItem, image: reader.result as string });
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

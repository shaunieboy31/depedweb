"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
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
   Building2,
   Layers,
   FileText,
   FileImage
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getNewsAction, updateNewsAction, deleteNewsAction } from "@/app/actions/news";
import { getCarouselSlidesAction, createCarouselSlideAction, deleteCarouselSlideAction } from "@/app/actions/carousel";
import { getEmployeeHonorsAction, updateEmployeeHonorAction, deleteEmployeeHonorAction } from "@/app/actions/employee";
import { getOrgChartsAction, updateOrgChartAction, deleteOrgChartAction } from "@/app/actions/org-chart";

// Types
type EmployeeWinner = {
   id: string | number;
   month: string;
   year: string;
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

type OrgChartItem = {
   id: string | number;
   department: string;
   image: string | null;
   sortOrder: number;
};

type CarouselSlide = {
   id: number;
   image: string;
};

function DashboardContent() {
   const searchParams = useSearchParams();
   const activeTab = (searchParams.get("tab") || "overview") as "overview" | "employee" | "news" | "carousel" | "org";

   const [news, setNews] = useState<NewsItem[]>([]);
   const [honors, setHonors] = useState<EmployeeWinner[]>([]);
   const [carousel, setCarousel] = useState<CarouselSlide[]>([]);
   const [orgCharts, setOrgCharts] = useState<OrgChartItem[]>([]);

   const [isSaved, setIsSaved] = useState(false);
   const [isUpdating, setIsUpdating] = useState(false);

   // --- REFS FOR FILE UPLOADS ---
   const employeeFileRef = useRef<HTMLInputElement>(null);
   const orgFileRef = useRef<HTMLInputElement>(null);
   const newsFileRef = useRef<HTMLInputElement>(null);

   // --- LOAD & SAVE ---
   async function loadData() {
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

      const honorsResult = await getEmployeeHonorsAction();
      if (honorsResult.success && honorsResult.data) {
         setHonors(honorsResult.data);
      }

      const carouselResult = await getCarouselSlidesAction();
      if (carouselResult.success && carouselResult.data) {
         setCarousel(carouselResult.data);
      }

      const orgResult = await getOrgChartsAction();
      if (orgResult.success && orgResult.data) {
         setOrgCharts(orgResult.data);
      }
   }

   useEffect(() => {
      loadData();
   }, []);

   // --- NEWS ACTIONS ---
   const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
   const [newsUploadFile, setNewsUploadFile] = useState<File | null>(null);

   const handleSaveNews = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!editingNews) return;
      setIsUpdating(true);

      const formData = new FormData();
      if (editingNews.id !== "new") {
         formData.append("id", editingNews.id);
      }
      formData.append("title", editingNews.title);
      formData.append("category", editingNews.category);
      formData.append("date", editingNews.date);
      formData.append("excerpt", editingNews.excerpt);
      formData.append("oldImagePath", editingNews.image || "");

      if (newsUploadFile) formData.append("image", newsUploadFile);

      const result = await updateNewsAction(formData);
      setIsUpdating(false);

      if (result.success) {
         setIsSaved(true);
         setTimeout(() => setIsSaved(false), 2000);
         setEditingNews(null);
         setNewsUploadFile(null);
         loadData();
      } else {
         alert("Failed: " + result.error);
      }
   };

   const handleDeleteNews = async (id: string) => {
      if (!confirm("Are you sure?")) return;
      const result = await deleteNewsAction(parseInt(id));
      if (result.success) loadData();
   };

   // --- EMPLOYEE HONORS ACTIONS ---
   const [editingHonor, setEditingHonor] = useState<EmployeeWinner | null>(null);
   const [honorFiles, setHonorFiles] = useState<{ [key: string]: File }>({});

   const handleSaveHonor = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!editingHonor) return;
      setIsUpdating(true);

      const formData = new FormData();
      if (editingHonor.id && editingHonor.id !== "new") {
         formData.append("id", editingHonor.id.toString());
      }
      formData.append("month", editingHonor.month);
      formData.append("year", editingHonor.year);
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

   // --- ORG CHART ACTIONS ---
   const [editingOrgItem, setEditingOrgItem] = useState<OrgChartItem | null>(null);
   const [orgFile, setOrgFile] = useState<File | null>(null);

   const handleSaveOrgChart = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!editingOrgItem) return;
      setIsUpdating(true);

      const formData = new FormData();
      if (editingOrgItem.id && editingOrgItem.id !== "new") {
         formData.append("id", editingOrgItem.id.toString());
      }
      formData.append("department", editingOrgItem.department);
      formData.append("sortOrder", editingOrgItem.sortOrder.toString());
      
      const isPath = editingOrgItem.image && editingOrgItem.image.startsWith("/uploads");
      formData.append("oldImagePath", isPath && editingOrgItem.image ? (editingOrgItem.image as string) : "");

      if (orgFile) formData.append("image", orgFile);

      const res = await updateOrgChartAction(formData);
      setIsUpdating(false);
      if (res.success) {
         setEditingOrgItem(null);
         setOrgFile(null);
         loadData();
      } else {
         alert(res.error);
      }
   };

   const handleDeleteOrgChart = async (id: number) => {
      if (!confirm("Delete this chart?")) return;
      const res = await deleteOrgChartAction(id);
      if (res.success) loadData();
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
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-1">
               <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
                  {activeTab === 'overview' && "Dashboard Overview"}
                  {activeTab === 'carousel' && "Carousel Manager"}
                  {activeTab === 'news' && "News Manager"}
                  {activeTab === 'employee' && "Hall of Excellence"}
                  {activeTab === 'org' && "Org Chart Manager"}
               </h1>
               <p className="text-slate-500 font-medium lowercase italic opacity-80">
                  {activeTab === 'overview' && "System health and quick statistics."}
                  {activeTab === 'carousel' && "Manage images for the homepage hero slider."}
                  {activeTab === 'news' && "Publish and archive institutional news updates."}
                  {activeTab === 'employee' && "Recognize division monthly award winners."}
                  {activeTab === 'org' && "Update departmental functional structures."}
               </p>
            </div>
            {isSaved && (
               <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100 animate-in zoom-in-95">
                  <CheckCircle2 size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">Changes Synced</span>
               </div>
            )}
         </div>

         <div className="w-full">
            {/* OVERVIEW */}
            {activeTab === "overview" && (
               <div className="space-y-8 animate-in slide-in-from-right-10 duration-500">
                  <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-10 opacity-[0.03]">
                        <Building2 size={200} />
                     </div>
                     <div className="relative z-10 space-y-10">
                        <div className="space-y-4 max-w-2xl">
                           <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Division Console Status</h3>
                           <p className="text-slate-500 leading-relaxed font-medium">
                              Welcome to the central command center. All updates performed here are synchronized in real-time across the division's public web portal.
                           </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                           <div className="p-8 bg-blue-50 rounded-[2rem] border border-blue-100 text-center space-y-2">
                              <span className="block text-4xl font-black text-blue-700">{carousel.length}</span>
                              <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest">Main Slides</span>
                           </div>
                           <div className="p-8 bg-amber-50 rounded-[2rem] border border-amber-100 text-center space-y-2">
                              <span className="block text-4xl font-black text-amber-700">{honors.length}</span>
                              <span className="text-[10px] font-black uppercase text-amber-600 tracking-widest">Honorees</span>
                           </div>
                           <div className="p-8 bg-emerald-50 rounded-[2rem] border border-emerald-100 text-center space-y-2">
                              <span className="block text-4xl font-black text-emerald-700">{news.length}</span>
                              <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">Articles</span>
                           </div>
                           <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-200 text-center space-y-2">
                              <span className="block text-4xl font-black text-slate-700">{orgCharts.length}</span>
                              <span className="text-[10px] font-black uppercase text-slate-600 tracking-widest">Org Charts</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            )}

            {/* CAROUSEL MANAGER */}
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

            {/* EMPLOYEE MANAGER */}
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
                              onClick={() => setEditingHonor({ id: "new", month: "", year: "2024", image: null })}
                              className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-all"
                           >
                              <PlusCircle size={16} />
                              <span>Add Honoree</span>
                           </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                           {honors.length === 0 ? (
                              <div className="col-span-full p-20 text-center space-y-4 border-2 border-dashed border-slate-100 rounded-[2rem]">
                                 <Trophy size={48} className="mx-auto text-slate-200" strokeWidth={1} />
                                 <p className="text-slate-400 text-xs font-bold uppercase">No records found</p>
                              </div>
                           ) : (
                              honors.map(winner => (
                                 <div key={winner.id} className="group relative bg-slate-50 p-6 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-xl transition-all h-[360px] flex flex-col">
                                    <div className="relative flex-1 rounded-2xl overflow-hidden mb-6 bg-white border border-slate-200 shadow-inner">
                                       <img src={winner.image || "/images/leader-placeholder.webp"} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="" />
                                    </div>
                                    <div className="space-y-1">
                                       <h4 className="font-black text-slate-900 uppercase tracking-tight text-lg">{winner.month}</h4>
                                       <p className="text-xs font-black text-blue-600 uppercase tracking-widest">{winner.year}</p>
                                    </div>
                                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                                       <button onClick={() => setEditingHonor(winner)} className="p-3 bg-white text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-xl"><Save size={16} /></button>
                                       <button onClick={() => handleDeleteHonor(winner.id as number)} className="p-3 bg-white text-rose-500 rounded-xl hover:bg-rose-500 hover:text-white transition-all shadow-xl"><Trash2 size={16} /></button>
                                    </div>
                                 </div>
                              ))
                           )}
                        </div>
                     </div>
                  ) : (
                     <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-10">
                        <div className="flex items-center justify-between">
                           <button onClick={() => setEditingHonor(null)} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2">
                              <ChevronRight size={14} className="rotate-180" /> Back to List
                           </button>
                           <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Record Award Winner</h3>
                        </div>

                        <form onSubmit={handleSaveHonor} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                           <div className="space-y-6">
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Award Month</label>
                                 <input required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-black" value={editingHonor.month} onChange={e => setEditingHonor({ ...editingHonor, month: e.target.value })} placeholder="e.g. JANUARY" />
                              </div>
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Award Year</label>
                                 <input required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold" value={editingHonor.year} onChange={e => setEditingHonor({ ...editingHonor, year: e.target.value })} />
                              </div>
                              <button type="submit" disabled={isUpdating} className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all disabled:opacity-50 flex items-center justify-center gap-3">
                                 {isUpdating ? <RefreshCcw className="animate-spin" /> : <Save size={18} />} Deploy Record
                              </button>
                           </div>

                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Honoree Photo</label>
                              <div className="relative aspect-square md:aspect-auto md:h-full bg-slate-50 rounded-[2.5rem] overflow-hidden border-2 border-dashed border-slate-200 group">
                                 {editingHonor.image ? <img src={editingHonor.image} className="w-full h-full object-cover" alt="" /> : <div className="absolute inset-0 flex items-center justify-center text-slate-300"><ImageIcon size={64} /></div>}
                                 <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button type="button" onClick={() => employeeFileRef.current?.click()} className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-2"><Upload size={14} /> Upload Image</button>
                                 </div>
                                 <input type="file" ref={employeeFileRef} className="hidden" onChange={e => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                       setEditingHonor({ ...editingHonor, image: URL.createObjectURL(file) });
                                       setHonorFiles({ ...honorFiles, [editingHonor.id || 'new']: file });
                                    }
                                 }} />
                              </div>
                           </div>
                        </form>
                     </div>
                  )}
               </div>
            )}

            {/* NEWS MANAGER */}
            {activeTab === "news" && (
               <div className="space-y-8 animate-in slide-in-from-right-10 duration-500">
                  {!editingNews ? (
                     <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-10">
                        <div className="flex items-center justify-between">
                           <div className="space-y-1">
                              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Institutional News</h3>
                              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest italic">Division Updates & Articles</p>
                           </div>
                           <button
                              onClick={() => setEditingNews({ id: "new", title: "", category: "GENERAL NEWS", date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), excerpt: "", image: null })}
                              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 shadow-lg hover:bg-blue-700 transition-all"
                           >
                              <PlusCircle size={16} />
                              <span>Create Story</span>
                           </button>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                           {news.length === 0 ? (
                              <div className="p-20 text-center space-y-4 border-2 border-dashed border-slate-100 rounded-[2rem]">
                                 <Newspaper size={48} className="mx-auto text-slate-200" strokeWidth={1} />
                                 <p className="text-slate-400 text-xs font-bold uppercase">No articles drafted</p>
                              </div>
                           ) : (
                              news.map(item => (
                                 <div key={item.id} className="group flex items-center gap-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-blue-100 transition-all">
                                    <div className="w-20 h-14 rounded-lg overflow-hidden bg-white border border-slate-100">
                                       <img src={item.image || "/images/news-placeholder.jpg"} className="w-full h-full object-cover" alt="" />
                                    </div>
                                    <div className="flex-1">
                                       <h4 className="font-bold text-slate-800 uppercase tracking-tight text-sm line-clamp-1">{item.title}</h4>
                                       <div className="flex items-center gap-3">
                                          <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest">{item.category}</span>
                                          <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{item.date}</span>
                                       </div>
                                    </div>
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                       <button onClick={() => setEditingNews(item)} className="p-3 bg-white text-blue-600 rounded-xl border border-blue-50 hover:bg-blue-600 hover:text-white transition-all shadow-sm"><Save size={16} /></button>
                                       <button onClick={() => handleDeleteNews(item.id)} className="p-3 bg-white text-rose-500 rounded-xl border border-rose-50 hover:bg-rose-500 hover:text-white transition-all shadow-sm"><Trash2 size={16} /></button>
                                    </div>
                                 </div>
                              ))
                           )}
                        </div>
                     </div>
                  ) : (
                     <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-10">
                        <div className="flex items-center justify-between">
                           <button onClick={() => setEditingNews(null)} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2">
                              <ChevronRight size={14} className="rotate-180" /> Back to Catalog
                           </button>
                           <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Article Editor</h3>
                        </div>

                        <form onSubmit={handleSaveNews} className="space-y-10">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                              <div className="space-y-6">
                                 <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Headline</label>
                                    <input required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-black" value={editingNews.title} onChange={e => setEditingNews({ ...editingNews, title: e.target.value })} />
                                 </div>
                                 <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Category Tag</label>
                                       <input required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-[10px] font-black uppercase" value={editingNews.category} onChange={e => setEditingNews({ ...editingNews, category: e.target.value.toUpperCase() })} />
                                    </div>
                                    <div className="space-y-2">
                                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Publish Date</label>
                                       <input required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-[10px] font-black uppercase" value={editingNews.date} onChange={e => setEditingNews({ ...editingNews, date: e.target.value })} />
                                    </div>
                                 </div>
                              </div>

                              <div className="space-y-2">
                                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Feature Illustration</label>
                                 <div className="relative aspect-video bg-slate-50 rounded-[2rem] overflow-hidden border-2 border-dashed border-slate-200 group">
                                    {editingNews.image ? <img src={editingNews.image} className="w-full h-full object-cover" alt="" /> : <div className="absolute inset-0 flex items-center justify-center text-slate-300"><ImageIcon size={64} /></div>}
                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                       <button type="button" onClick={() => newsFileRef.current?.click()} className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-2"><Upload size={14} /> Replace Image</button>
                                    </div>
                                    <input type="file" ref={newsFileRef} className="hidden" onChange={e => {
                                       const file = e.target.files?.[0];
                                       if (file) {
                                          setEditingNews({ ...editingNews, image: URL.createObjectURL(file) });
                                          setNewsUploadFile(file);
                                       }
                                    }} />
                                 </div>
                              </div>
                           </div>

                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Story Excerpt (Lead)</label>
                              <textarea required rows={4} className="w-full p-6 bg-slate-50 rounded-3xl border border-slate-100 text-sm font-medium leading-relaxed" value={editingNews.excerpt} onChange={e => setEditingNews({ ...editingNews, excerpt: e.target.value })} />
                           </div>

                           <button type="submit" disabled={isUpdating} className="w-full py-5 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-black transition-all flex items-center justify-center gap-3 shadow-xl disabled:opacity-50">
                              {isUpdating ? <RefreshCcw className="animate-spin" /> : <PlusCircle size={20} />} Sync to Live Server
                           </button>
                        </form>
                     </div>
                  )}
               </div>
            )}

            {/* ORG CHART MANAGER */}
            {activeTab === "org" && (
               <div className="space-y-8 animate-in slide-in-from-right-10 duration-500">
                  {!editingOrgItem ? (
                     <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-10">
                        <div className="flex items-center justify-between">
                           <div className="space-y-1">
                              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Organizational Hierarchy</h3>
                              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest italic">Departmental Functional Charts</p>
                           </div>
                           <button
                              onClick={() => setEditingOrgItem({ id: "new", department: "", sortOrder: 0, image: null })}
                              className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-all"
                           >
                              <PlusCircle size={16} />
                              <span>New Department</span>
                           </button>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                           {orgCharts.length === 0 ? (
                              <div className="p-20 text-center space-y-4 border-2 border-dashed border-slate-100 rounded-[2rem]">
                                 <Users size={48} className="mx-auto text-slate-200" strokeWidth={1} />
                                 <p className="text-slate-400 text-xs font-bold uppercase">No departments listed</p>
                              </div>
                           ) : (
                              orgCharts.map(ch => (
                                 <div key={ch.id} className="group flex items-center gap-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-blue-100 transition-all">
                                    <div className="w-16 h-12 rounded-lg overflow-hidden bg-white border border-slate-100">
                                       <img src={ch.image || "/images/leader-placeholder.webp"} className="w-full h-full object-cover" alt="" />
                                    </div>
                                    <div className="flex-1">
                                       <h4 className="font-bold text-slate-800 uppercase tracking-tight text-sm">{ch.department}</h4>
                                       <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Order: {ch.sortOrder}</p>
                                    </div>
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                       <button onClick={() => setEditingOrgItem(ch)} className="p-3 bg-white text-blue-600 rounded-xl border border-blue-50 hover:bg-blue-600 hover:text-white transition-all shadow-sm"><Save size={16} /></button>
                                       <button onClick={() => handleDeleteOrgChart(ch.id as number)} className="p-3 bg-white text-rose-500 rounded-xl border border-rose-50 hover:bg-rose-500 hover:text-white transition-all shadow-sm"><Trash2 size={16} /></button>
                                    </div>
                                 </div>
                              ))
                           )}
                        </div>
                     </div>
                  ) : (
                     <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-10">
                        <div className="flex items-center justify-between">
                           <button onClick={() => setEditingOrgItem(null)} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2">
                              <ChevronRight size={14} className="rotate-180" /> Back to List
                           </button>
                           <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Functional Chart Update</h3>
                        </div>

                        <form onSubmit={handleSaveOrgChart} className="space-y-10">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                              <div className="space-y-6">
                                 <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Department Name</label>
                                    <input required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-black" value={editingOrgItem.department} onChange={e => setEditingOrgItem({ ...editingOrgItem, department: e.target.value })} />
                                 </div>
                                 <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Display Order</label>
                                    <input type="number" required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold" value={editingOrgItem.sortOrder} onChange={e => setEditingOrgItem({ ...editingOrgItem, sortOrder: parseInt(e.target.value) })} />
                                 </div>
                              </div>

                              <div className="space-y-2">
                                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Functional Chart Image</label>
                                 <div className="relative aspect-video bg-slate-50 rounded-[2.5rem] overflow-hidden border-2 border-dashed border-slate-200 group">
                                    {editingOrgItem.image ? <img src={editingOrgItem.image} className="w-full h-full object-contain bg-white" alt="" /> : <div className="absolute inset-0 flex items-center justify-center text-slate-300"><ImageIcon size={64} /></div>}
                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                       <button type="button" onClick={() => orgFileRef.current?.click()} className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-2"><Upload size={14} /> Upload Chart</button>
                                    </div>
                                    <input type="file" ref={orgFileRef} className="hidden" onChange={e => {
                                       const file = e.target.files?.[0];
                                       if (file) {
                                          setEditingOrgItem({ ...editingOrgItem, image: URL.createObjectURL(file) });
                                          setOrgFile(file);
                                       }
                                    }} />
                                 </div>
                              </div>
                           </div>

                           <button type="submit" disabled={isUpdating} className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl disabled:opacity-50">
                              {isUpdating ? <RefreshCcw className="animate-spin" /> : <Save size={20} />} <span>Deploy Functional Chart</span>
                           </button>
                        </form>
                     </div>
                  )}
               </div>
            )}
         </div>
      </div>
   );
}

export default function AdminDashboard() {
   return (
      <Suspense fallback={
         <div className="w-full h-screen flex items-center justify-center bg-slate-50 rounded-[3rem]">
            <RefreshCcw className="animate-spin text-blue-600" size={40} />
         </div>
      }>
         <DashboardContent />
      </Suspense>
   );
}

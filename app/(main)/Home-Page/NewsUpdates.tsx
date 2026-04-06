"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, Calendar, X, ChevronLeft, ArrowRight } from "lucide-react";
import { getNewsAction } from "@/app/actions/news";

export function NewsUpdates() {
  const [news, setNews] = useState<{
    id: string;
    date: string;
    category: string;
    title: string;
    excerpt: string;
    image: string | null;
  }[]>([]);
  
  const [selectedNews, setSelectedNews] = useState<any | null>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // Sync with Database
  useEffect(() => {
    async function loadNews() {
      const result = await getNewsAction();
      if (result.success && result.data && result.data.length > 0) {
        setNews(result.data.map((n: any) => ({
          id: n.id.toString(),
          date: n.date,
          category: n.category,
          title: n.title,
          excerpt: n.excerpt,
          image: n.image,
        })));
      }
    }
    loadNews();
  }, []);

  return (
    <div className="py-12 bg-white relative group">
      {/* Header with tight spacing */}
      <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-black text-[#4279D2] tracking-tight uppercase">Announcements</h2>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest italic">Live from SDO News Desk</p>
        </div>
        <a href="/news" className="text-[10px] font-black text-[#4279D2] uppercase tracking-[0.2em] flex items-center gap-2 group/all">
          View all updates <ChevronRight size={14} className="group-hover/all:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        {news.length > 3 && (
          <>
            <button 
              onClick={() => scroll('left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border border-slate-100 rounded-full shadow-lg text-slate-400 hover:text-blue-600 transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border border-slate-100 rounded-full shadow-lg text-slate-400 hover:text-blue-600 transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {news.length > 0 ? (
            news.map((n) => (
              <article 
                key={n.id} 
                className="flex-shrink-0 w-[350px] group/card snap-start"
              >
                {/* Image Container with Label */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 shadow-sm border border-slate-100">
                  <Image
                    src={n.image || "/images/news-placeholder.webp"}
                    alt={n.title}
                    fill
                    className="object-cover group-hover/card:scale-105 transition duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#4279D2] text-white text-[9px] font-black px-4 py-1.5 tracking-widest uppercase rounded-full shadow-lg">
                    {n.category}
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="space-y-3 pr-4">
                  <p className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <Calendar size={12} strokeWidth={3} />
                    {n.date}
                  </p>
                  <h3 className="text-lg font-black text-slate-800 leading-[1.3] group-hover/card:text-[#4279D2] transition-colors line-clamp-2">
                    {n.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 font-medium">
                    {n.excerpt}
                  </p>
                  <button 
                    onClick={() => setSelectedNews(n)}
                    className="flex items-center gap-2 text-[10px] font-black text-[#4279D2] hover:gap-4 transition-all uppercase tracking-widest pt-2"
                  >
                    Read Details <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="w-full py-16 text-center space-y-4 bg-slate-50 border border-slate-100 rounded-[2.5rem]">
               <div className="p-4 bg-white w-fit mx-auto rounded-full text-slate-200">
                  <Calendar size={48} strokeWidth={1} />
               </div>
               <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">No active announcements</p>
            </div>
          )}
        </div>
      </div>

      {/* READ MORE MODAL */}
      {selectedNews && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div onClick={() => setSelectedNews(null)} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 flex flex-col">
            
            {/* Modal Image Area */}
            <div className="relative h-64 md:h-96 w-full flex-shrink-0">
               <Image 
                 src={selectedNews.image || "/images/news-placeholder.webp"} 
                 alt="" 
                 fill 
                 className="object-cover" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
               <button 
                 onClick={() => setSelectedNews(null)}
                 className="absolute top-8 right-8 p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-slate-900 transition-all border border-white/30"
               >
                 <X size={20} />
               </button>
               <div className="absolute bottom-8 left-10">
                  <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {selectedNews.category}
                  </span>
               </div>
            </div>

            {/* Modal Content Area */}
            <div className="p-10 md:p-14 overflow-y-auto space-y-8 custom-scrollbar">
               <div className="space-y-4">
                  <p className="flex items-center gap-2 text-xs font-bold text-blue-500/60 uppercase tracking-widest">
                    <Calendar size={14} strokeWidth={3} />
                    {selectedNews.date}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                    {selectedNews.title}
                  </h2>
               </div>
               <div className="h-1.5 w-20 bg-blue-600" />
               <div className="space-y-6">
                  <p className="text-lg text-slate-600 leading-relaxed font-bold italic">
                    {selectedNews.excerpt}
                  </p>
                  <p className="text-slate-500 leading-relaxed text-sm font-medium">
                    {/* Placeholder for future detailed content field */}
                    This is the official announcement from the Schools Division Office of Imus City. For more details regarding this update, please coordinate with your respective school administrators or visit the division office.
                  </p>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


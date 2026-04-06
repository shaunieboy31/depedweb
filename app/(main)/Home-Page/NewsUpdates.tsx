"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, Calendar } from "lucide-react";

export function NewsUpdates() {
  const [news, setNews] = useState([
    {
      id: "1",
      date: "Feb 28, 2026",
      category: "ANNOUNCEMENT",
      title: "Division Announces Early Registration Schedule",
      excerpt: "The Schools Division Office of Imus City property announces early registration dates for incoming learners for SY 2026-2027.",
      image: "/images/news/1.jpg",
    },
    {
      id: "2",
      date: "Jan 15, 2026",
      category: "PROGRAMS",
      title: "Learner Support Program Expanded",
      excerpt: "New support initiatives were launched to assist learners with distance and blended learning modalities across all districts.",
      image: "/images/news/2.jpg",
    },
    {
      id: "3",
      date: "Dec 10, 2025",
      category: "AWARDS",
      title: "Division Awards Exemplary Teachers",
      excerpt: "Outstanding teachers from elementary and secondary levels were recognized during the division awards ceremony.",
      image: "/images/news/3.jpg",
    },
  ]);

  // Sync with Admin Dashboard (Removed)
  useEffect(() => {
    // Persistence removed for database-less mode
  }, []);

  return (
    <div className="py-20 bg-white">
      <div className="flex items-center justify-between mb-16 border-b border-slate-100 pb-6">
        <div className="space-y-1">
          <h2 className="text-3xl font-black text-[#4279D2] tracking-tight uppercase">Featured Programs</h2>
          <p className="text-slate-500 font-medium">Latest news and announcements from the division</p>
        </div>
        <a href="/news" className="text-sm font-bold text-[#4279D2] hover:underline flex items-center gap-1 group">
          View all updates <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {news.map((n) => (
          <article key={n.id} className="group">
            {/* Image Container with Label */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-sm border border-slate-100">
              <Image
                src={n.image || "/images/news-placeholder.webp"}
                alt={n.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              {/* Reference Style Blue Label */}
              <div className="absolute top-0 left-0 bg-[#4279D2] text-white text-[10px] font-black px-4 py-2 tracking-widest uppercase">
                {n.category}
              </div>
            </div>
            
            {/* Content Area */}
            <div className="space-y-4">
               <p className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <Calendar size={12} />
                  {n.date}
               </p>
               <h3 className="text-xl font-bold text-[#4279D2] leading-snug group-hover:text-blue-700 transition-colors">
                 <a href="#">{n.title}</a>
               </h3>
               <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                 {n.excerpt}
               </p>
               <div className="flex justify-end pt-2">
                 <a href="#" className="text-[11px] font-black text-[#4279D2] hover:text-blue-800 transition-colors uppercase tracking-widest">
                   read more...
                 </a>
               </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}


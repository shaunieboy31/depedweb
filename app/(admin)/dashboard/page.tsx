"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { ChevronRight } from "lucide-react";

export default function Dashboard() {
  const [stats, setStats] = useState({ banners: 0, documents: 0, news: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [
          { count: bannerCount },
          { count: docCount },
          { count: newsCount }
        ] = await Promise.all([
          supabase.from("banners").select("*", { count: "exact", head: true }),
          supabase.from("documents").select("*", { count: "exact", head: true }),
          supabase.from("news").select("*", { count: "exact", head: true }),
        ]);

        setStats({
          banners: bannerCount || 0,
          documents: docCount || 0,
          news: newsCount || 0,
        });
      } catch (err) {
        console.error("Error fetching stats:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-1 md:col-span-2 space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Content Overview
          </h3>
          <p className="text-gray-600 mb-4">
            Welcome to the DepEd Imus Admin Panel. Manage your carousel banners,
            news updates, and official documents from here.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <span className="block text-2xl font-bold text-blue-700">
                {loading ? "..." : stats.banners}
              </span>
              <span className="text-sm text-blue-600">Active Banners</span>
            </div>
            <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
              <span className="block text-2xl font-bold text-emerald-700">
                {loading ? "..." : stats.documents}
              </span>
              <span className="text-sm text-emerald-600">Documents</span>
            </div>
            <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg">
              <span className="block text-2xl font-bold text-amber-700">
                {loading ? "..." : stats.news}
              </span>
              <span className="text-sm text-amber-600">News Items</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-span-1">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <a 
              href="/dashboard/carousel" 
              className="flex items-center justify-between w-full p-4 bg-slate-50 border border-slate-200 rounded-lg group hover:bg-blue-600 hover:border-blue-700 transition-all duration-300"
            >
              <div className="flex flex-col text-left">
                <span className="font-semibold text-slate-700 group-hover:text-white">Update Carousel</span>
                <span className="text-xs text-slate-500 group-hover:text-blue-100">Manage homepage banners</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white" />
            </a>
            
            <a 
              href="/dashboard/news" 
              className="flex items-center justify-between w-full p-4 bg-slate-50 border border-slate-200 rounded-lg group hover:bg-blue-600 hover:border-blue-700 transition-all duration-300"
            >
              <div className="flex flex-col text-left">
                <span className="font-semibold text-slate-700 group-hover:text-white">Post News</span>
                <span className="text-xs text-slate-500 group-hover:text-blue-100">Add announcements</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white" />
            </a>

            <button className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition px-4 py-3 rounded text-sm font-medium shadow-sm">
              Add Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


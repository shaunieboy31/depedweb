"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import {
  Bell,
  Search,
  User
} from "lucide-react";

interface AdminHeaderProps {
  user: {
    username: string;
    role: string;
  };
}

export default function AdminHeader({ user }: AdminHeaderProps) {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "overview";

  const titles: { [key: string]: string } = {
    overview: "Dashboard Overview",
    carousel: "Hero Slider Manager",
    news: "News & Article Portal",
    employee: "Employee of the Month",
    org: "Organization Charts"
  };

  return (
    <header className="flex justify-between items-center mb-10 bg-white/70 backdrop-blur-md p-6 rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase text-blue-600 tracking-[0.2em]">Division Console</span>
            <span className="text-slate-300">/</span>
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">{tab}</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight leading-none">
            {titles[tab] || "Admin Console"}
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Quick Actions Search */}
        <div className="relative hidden lg:block group">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
          <input
            placeholder="Search records..."
            className="bg-slate-50 border border-slate-100 rounded-2xl py-2.5 pl-11 pr-4 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all w-64"
          />
        </div>

        <button className="p-3 bg-slate-50 text-slate-400 hover:text-slate-900 rounded-2xl hover:bg-slate-100 transition-all border border-slate-100">
          <Bell size={20} />
        </button>

        <div className="h-10 w-[1px] bg-slate-100 mx-2" />

        <div className="flex items-center gap-4 pl-2 group cursor-pointer">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-black text-slate-900 uppercase tracking-tight">{user.username}</p>
            <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-[0.1em]">Cloud Sync Active</p>
          </div>
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-200 border-2 border-white transition-transform group-hover:scale-105">
              <User size={20} />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-sm" />
          </div>
        </div>
      </div>
    </header>
  );
}

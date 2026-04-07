"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  LayoutDashboard, 
  Layers, 
  Newspaper, 
  Trophy, 
  Users, 
  LogOut,
  Building2,
  Bell,
  Search,
  User
} from "lucide-react";

function AdminHeader() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "overview";

  const titles: { [key: string]: string } = {
    overview: "Dashboard Overview",
    carousel: "Hero Slider Manager",
    news: "News & Article Portal",
    employee: "Hall of Excellence",
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
            <p className="text-xs font-black text-slate-900 uppercase tracking-tight">Admin User</p>
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

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#f8fafc] font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Sidebar */}
      <aside className="w-72 bg-[#0F172A] text-white p-8 shadow-[10px_0_40px_rgba(0,0,0,0.05)] hidden md:flex flex-col h-screen sticky top-0 border-r border-white/5">
        <div className="flex items-center gap-4 mb-16 px-2">
           <div className="p-3 bg-blue-600 rounded-2xl shadow-2xl shadow-blue-500/40 border border-blue-400/30">
              <Building2 size={28} className="text-white" />
           </div>
           <div>
              <h2 className="text-[11px] font-black uppercase tracking-[0.3em] leading-tight text-slate-400">Division of<br/><span className="text-white text-base tracking-normal">Imus City</span></h2>
           </div>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { id: "overview", label: "Dashboard Overview", icon: LayoutDashboard, href: "/dashboard" },
            { id: "carousel", label: "Hero Slider", icon: Layers, href: "/dashboard?tab=carousel" },
            { id: "news", label: "News & Updates", icon: Newspaper, href: "/dashboard?tab=news" },
            { id: "employee", label: "Hall of Excellence", icon: Trophy, href: "/dashboard?tab=employee" },
            { id: "org", label: "Org Charts", icon: Users, href: "/dashboard?tab=org" },
          ].map((item) => (
            <Link 
              key={item.id}
              href={item.href} 
              className="group flex items-center gap-4 text-slate-400 hover:text-white transition-all py-4 px-5 rounded-[1.25rem] hover:bg-white/5 active:scale-[0.98]"
            >
              <div className="p-2 transition-colors group-hover:bg-blue-600/10 rounded-lg">
                <item.icon size={20} className="group-hover:text-blue-400 transition-colors" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest leading-none">{item.label}</span>
            </Link>
          ))}

          <div className="pt-10 mt-10 border-t border-white/5 space-y-4">
            <Link 
              href="/" 
              className="flex items-center gap-4 text-slate-500 hover:text-rose-400 transition-all py-3 px-5 rounded-xl hover:bg-rose-500/5 text-[10px] font-black uppercase tracking-widest"
            >
              <LogOut size={16} />
              <span>Exit Command Center</span>
            </Link>
          </div>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-10 min-h-screen">
        <Suspense fallback={
          <div className="h-20 bg-white rounded-[2rem] animate-pulse mb-10" />
        }>
          <AdminHeader />
        </Suspense>

        <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000">
          {children}
        </div>
      </main>
    </div>
  );
}

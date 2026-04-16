import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FileText, 
  ChevronRight, 
  Download, 
  Search, 
  FolderOpen, 
  ShieldCheck, 
  Globe, 
  Layers,
  ArrowRight,
  Sparkles,
  Info,
  FileSearch
} from "lucide-react";
import { getIssuancesAction } from "@/app/actions/issuances";

export default async function IssuancesPage() {
  const result = await getIssuancesAction();
  const issuances = result.success ? result.data || [] : [];

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 pb-32">
      
      {/* Institutional Hero - Simple & Clear */}
      <section className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/newbuilding.webp"
            alt="SDO Imus Issuances"
            fill
            className="object-cover object-center brightness-[0.3]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-[#032977]/90 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] text-blue-300 uppercase bg-blue-950/40 backdrop-blur-md rounded-full border border-blue-400/30">
            <FileText size={14} className="text-blue-400" />
            <span>Digital Archive Portal</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-4 drop-shadow-2xl">
            Official <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Issuances
            </span>
          </h1>
          <p className="text-slate-300 font-medium italic text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
             "Access, view, and download the latest division memoranda, advisories, and official communications."
          </p>
        </div>
      </section>

      {/* Main Navigation - Simplified Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-16 relative z-20 space-y-20">
        
        {/* Large Navigation Buttons for Easy Access */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           
           {/* Division Section */}
           <Link href="/issuances/division/memoranda" className="group">
              <div className="bg-white rounded-[3rem] p-10 h-full border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center space-y-6">
                 <div className="w-24 h-24 bg-blue-600 rounded-[2.5rem] flex items-center justify-center text-white shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={48} />
                 </div>
                 <div className="space-y-2">
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Division</h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">Memorandums and advisories from the local SDO office.</p>
                 </div>
                 <div className="pt-4 flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest">
                    <span>Open Archive</span>
                    <ArrowRight size={14} />
                 </div>
              </div>
           </Link>

           {/* Regional Section */}
           <Link href="/issuances/regional" className="group">
              <div className="bg-white rounded-[3rem] p-10 h-full border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center space-y-6">
                 <div className="w-24 h-24 bg-emerald-600 rounded-[2.5rem] flex items-center justify-center text-white shadow-xl shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    <Layers size={48} />
                 </div>
                 <div className="space-y-2">
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Regional</h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">Directives and communications from the Regional Office.</p>
                 </div>
                 <div className="pt-4 flex items-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-widest">
                    <span>Open Archive</span>
                    <ArrowRight size={14} />
                 </div>
              </div>
           </Link>

           {/* National Section */}
           <Link href="/issuances/national" className="group">
              <div className="bg-white rounded-[3rem] p-10 h-full border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center space-y-6">
                 <div className="w-24 h-24 bg-slate-900 rounded-[2.5rem] flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                    <Globe size={48} />
                 </div>
                 <div className="space-y-2">
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">National</h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">Official orders and guidelines from the DepEd Central Office.</p>
                 </div>
                 <div className="pt-4 flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-widest">
                    <span>Open Archive</span>
                    <ArrowRight size={14} />
                 </div>
              </div>
           </Link>
        </div>

        {/* Latest Documents Quick View - User Friendly List */}
        <section className="bg-white rounded-[3.5rem] border border-slate-200 shadow-2xl overflow-hidden">
           <div className="p-10 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-4">
                 <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
                    <FolderOpen size={24} />
                 </div>
                 <div>
                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight leading-none">Latest Releases</h2>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">Updated as of {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                 </div>
              </div>
              <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all">
                 <Search size={14} />
                 <span>Find a File</span>
              </button>
           </div>

           <div className="divide-y divide-slate-100">
              {issuances.length === 0 ? (
                <div className="p-20 text-center space-y-4">
                   <FileSearch size={48} className="mx-auto text-slate-200" strokeWidth={1} />
                   <p className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">No official issuances found in the archive.</p>
                </div>
              ) : (
                issuances.map((doc: any) => (
                  <div key={doc.id} className="p-8 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-8 group">
                     <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 border border-blue-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                           <FileText size={32} />
                        </div>
                        <div className="space-y-1">
                           <div className="flex items-center gap-3">
                              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{doc.type}</span>
                              <div className="w-1 h-1 bg-slate-200 rounded-full" />
                              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{doc.number}</span>
                           </div>
                           <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{doc.title}</h3>
                           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Released: {doc.date}</p>
                        </div>
                     </div>
                     
                     <div className="flex items-center gap-4">
                        {doc.fileUrl ? (
                          <a 
                            href={doc.fileUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-200"
                          >
                            <Download size={16} />
                            <span>Download PDF</span>
                          </a>
                        ) : (
                          <button disabled className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-slate-200 text-slate-400 rounded-2xl text-[10px] font-black uppercase tracking-widest cursor-not-allowed">
                            <Download size={16} />
                            <span>No File Linked</span>
                          </button>
                        )}
                        <button className="p-4 bg-slate-50 text-slate-400 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all border border-slate-100">
                           <ChevronRight size={20} />
                        </button>
                     </div>
                  </div>
                ))
              )}
           </div>

           <div className="p-10 bg-slate-50/50 border-t border-slate-100 text-center">
              <Link href="/issuances/division/memoranda" className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] hover:tracking-[0.5em] transition-all inline-flex items-center gap-3">
                 <span>Explore Full Archives</span>
                 <ArrowRight size={14} />
              </Link>
           </div>
        </section>

        {/* User Support / Simple Help */}
        <div className="bg-blue-900 rounded-[3.5rem] p-10 md:p-16 text-white relative overflow-hidden group shadow-2xl">
           <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-125 transition-transform duration-1000">
              <Info size={150} />
           </div>
           
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center border border-blue-400/30">
                    <Sparkles size={32} />
                 </div>
                 <h2 className="text-4xl font-black uppercase tracking-tighter leading-tight">Need help finding <br /> a specific file?</h2>
                 <p className="text-blue-200 font-medium">
                    If you cannot find the memorandum you are looking for, you can contact our records section directly for assistance.
                 </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                 <div className="flex-1 p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10">
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">Office Hotline</p>
                    <p className="text-xl font-bold">(046) 434-8450</p>
                 </div>
                 <div className="flex-1 p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10">
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">Records Email</p>
                    <p className="text-xl font-bold">records.imus@deped</p>
                 </div>
              </div>
           </div>
        </div>

      </div>

      {/* Simplified Footer Decoration */}
      <div className="w-full h-24 bg-gradient-to-t from-slate-200/50 to-transparent pt-32" />
    </div>
  );
}

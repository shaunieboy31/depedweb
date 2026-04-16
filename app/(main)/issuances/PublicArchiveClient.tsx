"use client";

import React, { useState, useMemo } from "react";
import { 
  Search, 
  FileDown, 
  Inbox,
  Filter
} from "lucide-react";

interface Issuance {
  id: number;
  title: string;
  number: string;
  type: string;
  category: string;
  date: string;
  year: string | null;
  fileUrl: string | null;
}

interface PublicArchiveClientProps {
  initialDocuments: any[];
  categoryLabel?: string;
  typeLabel?: string;
}

export default function PublicArchiveClient({ 
  initialDocuments, 
  categoryLabel = "Archive",
  typeLabel = "Document"
}: PublicArchiveClientProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDocuments = useMemo(() => {
    return initialDocuments.filter((doc) => {
      const searchStr = `${doc.title} ${doc.number} ${doc.year || ""}`.toLowerCase();
      return searchStr.includes(searchTerm.toLowerCase());
    });
  }, [initialDocuments, searchTerm]);

  return (
    <div className="w-full space-y-8">
      {/* Dynamic Search Bar */}
      <div className="relative group max-w-3xl mx-auto -mt-32 z-30">
        <div className="absolute inset-y-0 left-6 flex items-center text-slate-400 group-focus-within:text-blue-400 transition-colors">
          <Search size={24} />
        </div>
        <input 
          type="text" 
          placeholder="Search by Keyword, Title, or Document Number..."
          className="w-full pl-16 pr-8 py-8 bg-white rounded-3xl text-slate-900 placeholder:text-slate-400 font-bold shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 text-lg transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filter Bar */}
      <div className="max-w-5xl mx-auto px-6 relative z-20 space-y-8">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-slate-500">
            <Filter size={18} />
            <span className="text-[10px] font-black uppercase tracking-widest">{categoryLabel} Filter:</span>
            <div className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase shadow-sm ${searchTerm ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
              {searchTerm ? "Filtered View" : "All Records"}
            </div>
          </div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            {filteredDocuments.length} Documents Found
          </p>
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden min-h-[400px]">
          {filteredDocuments.length === 0 ? (
            <div className="p-32 text-center space-y-6">
              <Inbox size={64} className="mx-auto text-slate-200" strokeWidth={1} />
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-slate-900 uppercase">
                  {searchTerm ? "No results found" : "Archive Empty"}
                </h2>
                <p className="text-slate-400 font-medium">
                  {searchTerm 
                    ? `No matches found for "${searchTerm}". Try different keywords.` 
                    : "Official documents have not been added to this category yet."}
                </p>
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="mt-4 text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#032977] text-white">
                  <tr>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] first:pl-10 whitespace-nowrap">{typeLabel} #</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em]">Series</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em]">Title</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em]">File</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] last:pr-10 text-right">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredDocuments.map((doc: any) => (
                    <tr key={doc.id} className="group hover:bg-slate-50 transition-all duration-300">
                      <td className="px-8 py-8 first:pl-10">
                        <span className="text-sm font-black text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 uppercase whitespace-nowrap">
                          {doc.number}
                        </span>
                      </td>
                      <td className="px-8 py-8">
                        <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 uppercase tracking-widest whitespace-nowrap">
                          s. {doc.year || "----"}
                        </span>
                      </td>
                      <td className="px-8 py-8 w-full">
                        <h3 className="text-base font-black text-slate-900 group-hover:text-blue-700 transition-colors leading-snug uppercase tracking-tight line-clamp-2">
                          {doc.title}
                        </h3>
                      </td>
                      <td className="px-8 py-8">
                        {doc.fileUrl ? (
                          <a 
                            href={doc.fileUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/10 active:scale-95 whitespace-nowrap"
                          >
                            <FileDown size={14} />
                            <span>Download PDF</span>
                          </a>
                        ) : (
                          <button disabled className="flex items-center gap-3 px-6 py-3 bg-slate-100 text-slate-400 rounded-xl text-[10px] font-black uppercase tracking-widest cursor-not-allowed whitespace-nowrap">
                            <FileDown size={14} />
                            <span>No File</span>
                          </button>
                        )}
                      </td>
                      <td className="px-8 py-8 last:pr-10 text-right">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">{doc.date}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

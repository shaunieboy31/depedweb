"use client";

import React from "react";
import { Info } from "lucide-react";

export default function NewsManager() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Manage News & Updates</h2>
      </div>

      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 text-center shadow-sm">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full text-blue-600">
            <Info size={32} />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Database Management Disabled</h3>
        <p className="text-gray-700 max-w-md mx-auto mb-6">
          The Supabase database integration has been removed to simplify site management. 
          News and updates are now managed directly through the project's static code files.
        </p>
        <div className="bg-white p-4 rounded-lg border border-blue-100 text-left text-sm font-mono text-gray-600 overflow-x-auto">
          To edit news, modify: <br/>
          <span className="text-blue-600">app/(main)/Home-Page/NewsUpdates.tsx</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-50 grayscale pointer-events-none select-none">
         <div className="bg-white p-6 rounded-xl border border-gray-200 h-32"></div>
         <div className="bg-white p-6 rounded-xl border border-gray-200 h-32"></div>
      </div>
    </div>
  );
}

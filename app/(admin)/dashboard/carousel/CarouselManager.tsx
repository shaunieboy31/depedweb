"use client";

import React from "react";
import { Info } from "lucide-react";

export default function CarouselManager() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Manage Carousel Banners</h2>
      </div>

      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 text-center shadow-sm">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-3 rounded-full text-red-600">
            <Info size={32} />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Database Management Disabled</h3>
        <p className="text-gray-700 max-w-md mx-auto mb-6">
          The Supabase database integration has been removed to simplify site management. 
          Carousel banners are now managed directly through the project's static code files.
        </p>
        <div className="bg-white p-4 rounded-lg border border-red-100 text-left text-sm font-mono text-gray-600 overflow-x-auto">
          To edit banners, modify: <br/>
          <span className="text-red-600">app/(main)/Home-Page/HomeCarousel.tsx</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-50 grayscale pointer-events-none select-none">
         <div className="bg-white p-6 rounded-xl border border-gray-200 h-40"></div>
         <div className="bg-white p-6 rounded-xl border border-gray-200 h-40"></div>
         <div className="bg-white p-6 rounded-xl border border-gray-200 h-40"></div>
      </div>
    </div>
  );
}

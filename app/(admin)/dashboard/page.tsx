import React from "react";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-1 md:col-span-2 space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Content Overview</h3>
          <p className="text-gray-600 mb-4">
            Welcome to the DepEd Imus Admin Panel. Once the database is connected, you can upload new images for the homepage carousel,
            manage the news excerpts, and secure forms and documents here.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <span className="block text-2xl font-bold text-blue-700">12</span>
              <span className="text-sm text-blue-600">Active Banners</span>
            </div>
            <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
              <span className="block text-2xl font-bold text-emerald-700">45</span>
              <span className="text-sm text-emerald-600">Published Documents</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-span-1">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <button className="w-full mb-3 bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-3 rounded text-sm font-medium shadow-sm">
            Upload New Banner
          </button>
          <button className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition px-4 py-3 rounded text-sm font-medium shadow-sm">
            Add Document
          </button>
        </div>
      </div>
    </div>
  );
}

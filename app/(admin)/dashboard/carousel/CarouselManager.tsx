"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Plus, Trash2, Save, X, ToggleLeft, ToggleRight, Loader2 } from "lucide-react";

interface Banner {
  id: string;
  title: string;
  description: string;
  image_url: string;
  active: boolean;
  order_index: number;
}

export default function CarouselManager() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  // Form State
  const [showAdd, setShowAdd] = useState(false);
  const [newBanner, setNewBanner] = useState({
    title: "",
    description: "",
    image_url: "",
    active: true,
    order_index: 0
  });

  useEffect(() => {
    fetchBanners();
  }, []);

  async function fetchBanners() {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("banners")
        .select("*")
        .order("order_index", { ascending: true });
      if (error) throw error;
      setBanners(data || []);
    } catch (err) {
      console.error("Error fetching banners:", err);
    } finally {
      setLoading(false);
    }
  }

  async function handleAddBanner(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      const { error } = await supabase.from("banners").insert([newBanner]);
      if (error) throw error;
      
      setNewBanner({ title: "", description: "", image_url: "", active: true, order_index: 0 });
      setShowAdd(false);
      fetchBanners();
    } catch (err) {
      alert("Error adding banner: " + (err as Error).message);
    } finally {
      setSaving(false);
    }
  }

  async function toggleActive(id: string, currentStatus: boolean) {
    try {
      const { error } = await supabase
        .from("banners")
        .update({ active: !currentStatus })
        .eq("id", id);
      if (error) throw error;
      fetchBanners();
    } catch (err) {
      alert("Error updating status");
    }
  }

  async function deleteBanner(id: string) {
    if (!confirm("Are you sure you want to delete this banner?")) return;
    try {
      const { error } = await supabase.from("banners").delete().eq("id", id);
      if (error) throw error;
      fetchBanners();
    } catch (err) {
      alert("Error deleting banner");
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Manage Carousel Banners</h2>
        <button 
          onClick={() => setShowAdd(!showAdd)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
        >
          {showAdd ? <X size={18} /> : <Plus size={18} />}
          {showAdd ? "Cancel" : "Add New Banner"}
        </button>
      </div>

      {showAdd && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 animate-in fade-in slide-in-from-top-4">
          <h3 className="text-lg font-medium mb-4">Add New Banner</h3>
          <form onSubmit={handleAddBanner} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Banner Title</label>
              <input 
                type="text" required
                value={newBanner.title}
                onChange={e => setNewBanner({...newBanner, title: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="e.g. Early Registration 2026"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Image URL</label>
              <input 
                type="text" required
                value={newBanner.image_url}
                onChange={e => setNewBanner({...newBanner, image_url: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="/images/carousel/..."
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-gray-700">Description</label>
              <textarea 
                value={newBanner.description}
                onChange={e => setNewBanner({...newBanner, description: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                rows={2}
                placeholder="Brief description for the slide..."
              />
            </div>
            <div className="flex items-center gap-4 py-2">
               <button 
                type="submit" disabled={saving}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg disabled:opacity-50 flex items-center gap-2"
               >
                 {saving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                 Save Banner
               </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="animate-spin text-blue-600" size={32} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {banners.length === 0 ? (
            <div className="col-span-full py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 text-center">
              <p className="text-gray-500">No banners found. Add your first one above!</p>
            </div>
          ) : (
            banners.map((banner) => (
              <div key={banner.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group">
                <div className="h-40 bg-gray-100 relative overflow-hidden">
                  <img src={banner.image_url} alt={banner.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2">
                    <button 
                      onClick={() => toggleActive(banner.id, banner.active)}
                      className={`p-1 rounded-full ${banner.active ? "text-emerald-600" : "text-gray-400"}`}
                    >
                      {banner.active ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 truncate">{banner.title}</h4>
                  <p className="text-sm text-gray-500 line-clamp-2 mt-1 min-h-[40px]">{banner.description}</p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${banner.active ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-600"}`}>
                      {banner.active ? "Active" : "Inactive"}
                    </span>
                    <button 
                      onClick={() => deleteBanner(banner.id)}
                      className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

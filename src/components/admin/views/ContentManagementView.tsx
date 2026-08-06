'use client';

import React, { useState, useEffect } from 'react';
import { 
  PlusCircle, 
  FileText, 
  Sparkles, 
  Star, 
  Edit, 
  Trash2, 
  Image as ImageIcon, 
  CheckCircle2, 
  Save, 
  Undo2, 
  HelpCircle,
  Eye
} from 'lucide-react';
import { mockPosts } from '../../../data/mockPosts';

export const ContentManagementView: React.FC = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [spotlightIds, setSpotlightIds] = useState<string[]>(['sishu-burger-710', 'titich-flame-burger']);

  // Form UX State with Autosave (Phase 6 requirement)
  const [restaurantName, setRestaurantName] = useState('');
  const [neighborhood, setNeighborhood] = useState('Bole');
  const [category, setCategory] = useState('Kitfo & Traditional');
  const [price, setPrice] = useState('450');
  const [caption, setCaption] = useState('');
  const [savedDraftTime, setSavedDraftTime] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);

  // Auto-Save Draft Effect
  useEffect(() => {
    if (restaurantName || caption) {
      const timer = setTimeout(() => {
        setSavedDraftTime(new Date().toLocaleTimeString());
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [restaurantName, caption, neighborhood, price, category]);

  const toggleSpotlight = (id: string) => {
    setSpotlightIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleDeletePost = (id: string) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!restaurantName.trim() || !caption.trim()) return;

    setFormSuccess(true);
    setSavedDraftTime(null);
    setRestaurantName('');
    setCaption('');

    setTimeout(() => setFormSuccess(false), 4000);
  };

  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-2" style={{ borderColor: 'var(--border-subtle)' }}>
        <div>
          <span className="text-xs font-label uppercase tracking-wider text-[#B8422E] font-bold flex items-center gap-1">
            <FileText className="w-4 h-4" /> Content Studio
          </span>
          <h1 className="font-display font-medium text-2xl text-[var(--text-primary)]">
            Food Inspection Posts &amp; Editorial Publishing
          </h1>
        </div>

        {savedDraftTime && (
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
            <Save className="w-3.5 h-3.5" /> Draft auto-saved at {savedDraftTime}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Form Column: Add New Review with Autosave & Inline Validation */}
        <div className="lg:col-span-1 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-5 shadow-xs">
          <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <h3 className="font-display font-medium text-lg text-[var(--text-primary)]">Add Food Inspection Review</h3>
            <span className="text-[10px] font-label uppercase text-[#B8422E] font-bold">Autosave Active 🟢</span>
          </div>

          {formSuccess && (
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/40 text-emerald-600 text-xs font-label font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Review published successfully to website &amp; Telegram queue!</span>
            </div>
          )}

          <form onSubmit={handlePublish} className="flex flex-col gap-4 text-xs font-body">
            {/* Restaurant Name Input */}
            <div className="flex flex-col gap-1">
              <label className="font-label uppercase text-[10px] text-slate-400 font-bold">
                Spot / Restaurant Name *
              </label>
              <input
                type="text"
                required
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
                placeholder="e.g. Yado Kitfo Special"
                className="w-full p-2.5 rounded-lg border border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 text-[var(--text-primary)] focus:outline-none focus:border-[#B8422E]"
              />
            </div>

            {/* Neighborhood & Category Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="font-label uppercase text-[10px] text-slate-400 font-bold">District</label>
                <select
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 text-[var(--text-primary)] focus:outline-none"
                >
                  <option value="Bole">Bole</option>
                  <option value="Bole Atlas">Bole Atlas</option>
                  <option value="Kazanchis">Kazanchis</option>
                  <option value="Piassa">Piassa</option>
                  <option value="Sarbet">Sarbet</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label uppercase text-[10px] text-slate-400 font-bold">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 text-[var(--text-primary)] focus:outline-none"
                >
                  <option value="Kitfo & Traditional">Kitfo &amp; Traditional</option>
                  <option value="Burgers">Burgers</option>
                  <option value="Coffee">Coffee &amp; Bakery</option>
                  <option value="Fasting">Fasting</option>
                  <option value="Seafood">Seafood</option>
                </select>
              </div>
            </div>

            {/* Price ETB Input */}
            <div className="flex flex-col gap-1">
              <label className="font-label uppercase text-[10px] text-slate-400 font-bold">ETB Price Audit (Br)</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="450"
                className="w-full p-2.5 rounded-lg border border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 text-[var(--text-primary)] focus:outline-none font-mono"
              />
            </div>

            {/* Caption Textarea with Character Counter */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <label className="font-label uppercase text-[10px] text-slate-400 font-bold">Inspection Review Notes</label>
                <span className="text-[10px] font-mono text-slate-400">{caption.length} / 500 chars</span>
              </div>
              <textarea
                rows={4}
                maxLength={500}
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Detailed audit of taste, ambiance, price accuracy, and Ayeb pairing..."
                className="w-full p-2.5 rounded-lg border border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 text-[var(--text-primary)] focus:outline-none focus:border-[#B8422E]"
              />
            </div>

            <button
              type="submit"
              className="button-primary py-3 rounded-lg font-label uppercase text-xs tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:scale-102 transition-all mt-2"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Publish Inspection Review</span>
            </button>
          </form>
        </div>

        {/* Posts List Column */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-5 shadow-xs">
          <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <h3 className="font-display font-medium text-lg text-[var(--text-primary)]">
              Live Food Inspection Posts ({posts.length})
            </h3>
            <span className="text-xs font-label text-slate-400">Click star to feature on homepage</span>
          </div>

          <div className="flex flex-col gap-3 max-h-[600px] overflow-y-auto pr-1">
            {posts.map((post) => {
              const isSpotlight = spotlightIds.includes(post.id);
              return (
                <div
                  key={post.id}
                  className="p-4 rounded-xl border border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 flex items-center justify-between gap-4 hover:border-[#B8422E]/50 transition-colors"
                >
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <img src={post.image} alt={post.restaurantName} className="w-12 h-12 rounded-xl object-cover border border-slate-700 shrink-0" />
                    <div className="flex flex-col gap-0.5 overflow-hidden">
                      <span className="font-bold text-sm text-[var(--text-primary)] truncate">{post.restaurantName}</span>
                      <span className="text-xs font-label text-[var(--text-secondary)]">
                        {post.neighborhood} • <span className="font-mono text-[#B8422E] font-bold">{post.priceFormatted}</span>
                      </span>
                      <p className="text-[11px] font-body text-slate-400 line-clamp-1">{post.caption}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => toggleSpotlight(post.id)}
                      className={`p-2 rounded-lg border transition-all cursor-pointer ${
                        isSpotlight
                          ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                          : 'bg-black/10 text-slate-400 border-transparent hover:text-white'
                      }`}
                    >
                      <Star className={`w-4 h-4 ${isSpotlight ? 'fill-amber-400' : ''}`} />
                    </button>

                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-500/10 cursor-pointer transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

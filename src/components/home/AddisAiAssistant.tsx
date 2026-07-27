'use client';

import React, { useState } from 'react';
import { Sparkles, Send, MapPin, Tag, Utensils, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function AddisAiAssistant() {
  const { lang } = useLanguage();
  const [inputQuery, setInputQuery] = useState('');
  const [activeResponse, setActiveResponse] = useState<{
    text: string;
    spots: { name: string; dish: string; price: string; location: string; rating: string }[];
  } | null>({
    text: 'እባክዎን ከታች ያሉትን ጥያቄዎች ይጫኑ ወይም የሚፈልጉትን ምግብ ይጻፉ! (Tap any query below or ask about food in Addis Ababa)',
    spots: [
      { name: 'Habesha 2000', dish: 'Kitfo Special & Ayib', price: '450 ETB', location: 'Bole, near Edna Mall', rating: '4.8 ⭐' },
      { name: 'Tomoca Coffee', dish: 'Ethiopian Macchiato', price: '120 ETB', location: 'Bole, Atlas', rating: '4.9 ⭐' },
      { name: 'Yod Abyssinia', dish: 'Tibs Firfir Platter', price: '380 ETB', location: 'Kazanchis', rating: '4.7 ⭐' },
    ]
  });

  const promptChips = [
    { label: 'Where can I eat good Kitfo near Bole?', amharic: 'በቦሌ ጥሩ Kitfo የት ይገኛል?' },
    { label: 'Best Macchiato under 300 Br', amharic: 'ከ 300 ብር በታች ምርጥ ማኪያቶ' },
    { label: 'የእግር ምግብ እንዴት ነው?', amharic: 'የእግር ምግብ እንዴት ነው?' },
    { label: 'Vegetarian food in Kazanchis', amharic: 'በካዛንችስ የጾም ምግብ' },
    { label: 'Food events this weekend', amharic: 'በዚህ ሳምንት የሁነቶች ፕሮግራም' },
  ];

  const handleQuerySubmit = (e?: React.FormEvent, customQuery?: string) => {
    if (e) e.preventDefault();
    const query = customQuery || inputQuery;
    if (!query.trim()) return;

    setInputQuery(query);

    if (query.toLowerCase().includes('kitfo') || query.includes('በቦሌ')) {
      setActiveResponse({
        text: 'ለ Kitfo በቦሌ እና ፒያሳ አካባቢ የተመረጡ 3 ምርጥ ቦታዎች (Top 3 Kitfo spots found):',
        spots: [
          { name: 'Habesha 2000', dish: 'Kitfo Special + Gomen', price: '450 ETB', location: 'Bole, Edna Mall', rating: '4.8 ⭐' },
          { name: 'Kakur Traditional', dish: 'Special Gurage Kitfo', price: '520 ETB', location: 'Piassa, Tewdros Sq', rating: '4.9 ⭐' },
          { name: 'Kategna Restaurant', dish: 'Lebleb Kitfo', price: '490 ETB', location: 'Bole Medhaniallem', rating: '4.7 ⭐' },
        ]
      });
    } else if (query.toLowerCase().includes('macchiato') || query.includes('ብር')) {
      setActiveResponse({
        text: 'ከ 300 ብር በታች የተመረጡ የቡና ቦታዎች (Best Coffee under 300 ETB):',
        spots: [
          { name: 'Tomoca Coffee', dish: 'Double Macchiato', price: '120 ETB', location: 'Bole, Atlas & Piassa', rating: '4.9 ⭐' },
          { name: 'Galani Coffee', dish: 'Single Origin Pour Over', price: '180 ETB', location: 'Sarbet Golf Club', rating: '4.8 ⭐' },
        ]
      });
    } else {
      setActiveResponse({
        text: `ለ "${query}" የተገኙ ምርጥ ውጤቶች (Results for your craving):`,
        spots: [
          { name: 'Yod Abyssinia', dish: 'Special Cultural Feast', price: '650 ETB', location: 'Bole', rating: '4.8 ⭐' },
          { name: 'Burger House', dish: 'Classic Flame Beef Burger', price: '320 ETB', location: 'Piassa', rating: '4.6 ⭐' },
        ]
      });
    }
  };

  return (
    <div className="w-full bg-[#111827] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl flex flex-col gap-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#E53935]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#E53935] to-[#FF8C00] flex items-center justify-center text-white shadow-lg shrink-0">
            <Sparkles className="w-5 h-5 text-amber-200" />
          </div>
          <div>
            <h2 className="font-display font-black text-xl sm:text-2xl text-white flex items-center gap-2">
              <span>Addis AI Assistant</span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#E53935] text-white uppercase tracking-widest">
                v5.0 Engine
              </span>
            </h2>
            <p className="text-xs text-amber-300 font-mono font-bold pt-0.5">
              ምን ልርዳዎት ነው? How can I help you today?
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
          <Compass className="w-4 h-4 text-[#FF8C00]" />
          <span>Multilingual NLU (Amharic & English)</span>
        </div>
      </div>

      {/* Interactive Chat Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 z-10">
        
        {/* Left Column: Quick Prompts & Input */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">
            Popular Craving Prompts:
          </span>

          <div className="flex flex-col gap-2">
            {promptChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleQuerySubmit(undefined, chip.label)}
                className="touch-target text-left px-4 py-2.5 rounded-xl bg-white/5 hover:bg-[#E53935]/20 border border-white/10 hover:border-[#E53935]/40 text-xs font-semibold text-stone-200 hover:text-white transition-all flex items-center justify-between group cursor-pointer"
              >
                <span>{chip.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#FF8C00] transition-transform group-hover:translate-x-1" />
              </button>
            ))}
          </div>

          <form onSubmit={handleQuerySubmit} className="relative mt-2">
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask me anything... (e.g. በቦሌ Kitfo)"
              className="w-full bg-black/50 border border-white/20 rounded-xl pl-4 pr-12 py-3.5 text-xs text-white placeholder-stone-400 focus:outline-none focus:border-[#E53935] font-medium"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-[#E53935] hover:bg-[#B71C1C] text-white flex items-center justify-center cursor-pointer transition-colors shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Right Column: AI Response Payload */}
        <div className="lg:col-span-2 bg-black/40 border border-white/10 rounded-2xl p-5 flex flex-col gap-4 justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF8C00] border-b border-white/10 pb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{activeResponse?.text}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              {activeResponse?.spots.map((spot, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex flex-col justify-between gap-2 hover:border-[#E53935]/50 transition-colors"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-amber-300 block">{spot.rating}</span>
                    <h4 className="font-display font-black text-sm text-white pt-0.5">{spot.name}</h4>
                    <p className="text-xs text-stone-300 font-medium pt-1">{spot.dish}</p>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <span className="font-mono font-black text-xs text-[#E53935]">{spot.price}</span>
                    <span className="text-[10px] font-mono text-stone-400 flex items-center gap-0.5">
                      <MapPin className="w-3 h-3 text-[#FF8C00]" />
                      <span>{spot.location.split(',')[0]}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-stone-400">
            <span>Powered by Addis AI Engine (v5.0)</span>
            <span className="text-[#FF8C00] font-bold">100% Verified ETB Logs</span>
          </div>
        </div>

      </div>

    </div>
  );
}

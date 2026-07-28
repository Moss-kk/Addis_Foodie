'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  X, 
  Send, 
  MapPin, 
  CheckCircle2, 
  Bot, 
  ArrowRight,
  Utensils,
  Star
} from 'lucide-react';

export default function AiFoodieBotModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [activeResponse, setActiveResponse] = useState<{
    text: string;
    spots: { name: string; dish: string; price: string; location: string; rating: string }[];
  }>({
    text: 'እባክዎን ከታች ያሉትን ጥያቄዎች ይጫኑ ወይም የሚፈልጉትን ምግብ ይጻፉ! (Tap any query below or ask about food in Addis Ababa)',
    spots: [
      { name: 'Habesha 2000', dish: 'Kitfo Special & Ayib', price: '450 ETB', location: 'Bole, near Edna Mall', rating: '4.8' },
      { name: 'Tomoca Coffee', dish: 'Ethiopian Macchiato', price: '120 ETB', location: 'Bole, Atlas', rating: '4.9' },
      { name: 'Yod Abyssinia', dish: 'Tibs Firfir Platter', price: '380 ETB', location: 'Kazanchis', rating: '4.7' },
    ]
  });

  const promptChips = [
    { label: 'Where can I eat good Kitfo near Bole?' },
    { label: 'Best Macchiato under 300 ETB' },
    { label: 'Vegetarian / Fasting food in Kazanchis' },
    { label: 'Food events & festivals this weekend' },
  ];

  const handleQuerySubmit = (e?: React.FormEvent, customQuery?: string) => {
    if (e) e.preventDefault();
    const query = customQuery || inputQuery;
    if (!query.trim()) return;

    setInputQuery(query);

    const q = query.toLowerCase();

    if (q.includes('kitfo') || q.includes('bole')) {
      setActiveResponse({
        text: 'Top recommendations for Kitfo in Bole & Piassa:',
        spots: [
          { name: 'Habesha 2000', dish: 'Kitfo Special + Gomen & Ayib', price: '450 ETB', location: 'Bole, Edna Mall', rating: '4.8' },
          { name: 'Kakur Traditional', dish: 'Special Gurage Kitfo', price: '520 ETB', location: 'Piassa, Tewdros Sq', rating: '4.9' },
          { name: 'Kategna Restaurant', dish: 'Lebleb Kitfo Platter', price: '490 ETB', location: 'Bole Medhaniallem', rating: '4.7' },
        ]
      });
    } else if (q.includes('macchiato') || q.includes('coffee') || q.includes('300')) {
      setActiveResponse({
        text: 'Best Coffee & Macchiato spots under 300 ETB:',
        spots: [
          { name: 'Tomoca Coffee', dish: 'Double Ethiopian Macchiato', price: '120 ETB', location: 'Bole, Atlas & Piassa', rating: '4.9' },
          { name: 'Galani Coffee', dish: 'Single Origin Pour Over', price: '180 ETB', location: 'Sarbet Golf Club', rating: '4.8' },
        ]
      });
    } else if (q.includes('vegetarian') || q.includes('fasting') || q.includes('kazanchis')) {
      setActiveResponse({
        text: 'Top Fasting & Veggie Spots in Kazanchis:',
        spots: [
          { name: 'Yod Abyssinia', dish: 'Traditional Beyaynetu Platter', price: '280 ETB', location: 'Kazanchis', rating: '4.8' },
          { name: 'Fin fine Cultural', dish: 'Special Shiro & Gomen', price: '220 ETB', location: 'Kazanchis', rating: '4.6' },
        ]
      });
    } else {
      setActiveResponse({
        text: `Top verified recommendations for "${query}":`,
        spots: [
          { name: 'Yod Abyssinia', dish: 'Special Cultural Feast', price: '650 ETB', location: 'Bole', rating: '4.8' },
          { name: 'Burger House', dish: 'Classic Flame Beef Burger', price: '320 ETB', location: 'Piassa', rating: '4.6' },
        ]
      });
    }
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-50">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#E53935] to-[#FF8C00] text-white shadow-2xl border border-amber-300/40 cursor-pointer group"
          aria-label="Open AI Foodie Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#111827] animate-pulse" />
          </div>
          <span className="text-xs font-extrabold font-display hidden sm:inline-block tracking-wide">
            AI Foodie Bot
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-200" />
        </motion.button>
      </div>

      {/* Pop Up Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-2xl bg-[#111827] text-white rounded-3xl border border-stone-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              
              {/* Header */}
              <div className="p-5 sm:p-6 bg-gradient-to-r from-[#8B1717] via-[#111827] to-[#111827] border-b border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#E53935] flex items-center justify-center text-white shadow-lg shrink-0">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-black text-lg sm:text-xl text-white">
                        Addis AI Assistant
                      </h3>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#E53935] text-white uppercase">
                        AI BOT
                      </span>
                    </div>
                    <p className="text-xs text-amber-300 font-medium pt-0.5">
                      Personalized food recommendations & advice across Addis Ababa
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 flex flex-col gap-6 overflow-y-auto">
                
                {/* Prompt Chips */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-400">
                    Popular Recommendation Questions:
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {promptChips.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuerySubmit(undefined, chip.label)}
                        className="text-left px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-[#E53935]/20 border border-white/10 hover:border-[#E53935]/40 text-xs font-semibold text-stone-200 hover:text-white transition-all flex items-center justify-between group cursor-pointer"
                      >
                        <span>{chip.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#FF8C00] transition-transform group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Search Form */}
                <form onSubmit={handleQuerySubmit} className="relative">
                  <input
                    type="text"
                    value={inputQuery}
                    onChange={(e) => setInputQuery(e.target.value)}
                    placeholder="Ask AI Bot for food advice (e.g. Best Kitfo in Bole, Fasting lunch near Kazanchis)..."
                    className="w-full bg-black/50 border border-stone-700 rounded-xl pl-4 pr-12 py-3 text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:border-[#E53935] font-medium"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-[#E53935] hover:bg-[#B71C1C] text-white flex items-center justify-center cursor-pointer transition-colors shadow-md"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                {/* Active AI Payload Card */}
                <div className="bg-black/40 border border-stone-800 rounded-2xl p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF8C00] border-b border-stone-800 pb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{activeResponse.text}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    {activeResponse.spots.map((spot, i) => (
                      <div
                        key={i}
                        className="bg-white/5 border border-stone-800 rounded-xl p-3 flex flex-col justify-between gap-2 hover:border-[#E53935]/50 transition-colors"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <h4 className="font-display font-black text-xs sm:text-sm text-white">{spot.name}</h4>
                            <span className="text-[10px] font-mono font-bold text-amber-400 flex items-center gap-0.5">
                              <Star className="w-3 h-3 fill-amber-400" />
                              {spot.rating}
                            </span>
                          </div>
                          <p className="text-xs text-stone-300 font-medium pt-1">{spot.dish}</p>
                        </div>

                        <div className="pt-2 border-t border-stone-800 flex items-center justify-between">
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

              </div>

              {/* Footer */}
              <div className="p-4 bg-stone-950 border-t border-stone-800 text-center text-xs text-stone-400 font-mono flex items-center justify-between">
                <span>Verified Addis Foodies Recommendation Engine</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-1.5 rounded-lg bg-[#E53935] text-white text-xs font-bold shadow-md hover:bg-[#B71C1C]"
                >
                  Close Assistant
                </button>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </>
  );
}

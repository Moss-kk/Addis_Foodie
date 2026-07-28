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
  Star,
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
      { name: 'Habesha 2000',   dish: 'Kitfo Special & Ayib',       price: '450 ETB', location: 'Bole, near Edna Mall', rating: '4.8' },
      { name: 'Tomoca Coffee',  dish: 'Ethiopian Macchiato',         price: '120 ETB', location: 'Bole, Atlas',          rating: '4.9' },
      { name: 'Yod Abyssinia',  dish: 'Tibs Firfir Platter',        price: '380 ETB', location: 'Kazanchis',            rating: '4.7' },
    ],
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
          { name: 'Habesha 2000',      dish: 'Kitfo Special + Gomen & Ayib', price: '450 ETB', location: 'Bole, Edna Mall',    rating: '4.8' },
          { name: 'Kakur Traditional',  dish: 'Special Gurage Kitfo',          price: '520 ETB', location: 'Piassa, Tewdros Sq', rating: '4.9' },
          { name: 'Kategna Restaurant', dish: 'Lebleb Kitfo Platter',          price: '490 ETB', location: 'Bole Medhaniallem',  rating: '4.7' },
        ],
      });
    } else if (q.includes('macchiato') || q.includes('coffee') || q.includes('300')) {
      setActiveResponse({
        text: 'Best Coffee & Macchiato spots under 300 ETB:',
        spots: [
          { name: 'Tomoca Coffee', dish: 'Double Ethiopian Macchiato', price: '120 ETB', location: 'Bole, Atlas & Piassa', rating: '4.9' },
          { name: 'Galani Coffee', dish: 'Single Origin Pour Over',    price: '180 ETB', location: 'Sarbet Golf Club',     rating: '4.8' },
        ],
      });
    } else if (q.includes('vegetarian') || q.includes('fasting') || q.includes('kazanchis')) {
      setActiveResponse({
        text: 'Top Fasting & Veggie Spots in Kazanchis:',
        spots: [
          { name: 'Yod Abyssinia',    dish: 'Traditional Beyaynetu Platter', price: '280 ETB', location: 'Kazanchis', rating: '4.8' },
          { name: 'Fin fine Cultural', dish: 'Special Shiro & Gomen',         price: '220 ETB', location: 'Kazanchis', rating: '4.6' },
        ],
      });
    } else {
      setActiveResponse({
        text: `Top verified recommendations for "${query}":`,
        spots: [
          { name: 'Yod Abyssinia', dish: 'Special Cultural Feast',     price: '650 ETB', location: 'Bole',   rating: '4.8' },
          { name: 'Burger House',  dish: 'Classic Flame Beef Burger',  price: '320 ETB', location: 'Piassa', rating: '4.6' },
        ],
      });
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="relative flex items-center gap-2.5 px-4 py-3 rounded-full text-white shadow-2xl cursor-pointer group border"
          style={{
            background: 'linear-gradient(90deg, var(--accent-brand), var(--accent-amber))',
            borderColor: 'rgba(244,162,97,0.4)',
          }}
          aria-label="Open AI Foodie Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-white" />
            {/* Design.md --accent-verified teal for live dot */}
            <span
              className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-[#121212] animate-pulse"
              style={{ backgroundColor: 'var(--accent-verified)' }}
            />
          </div>
          <span className="text-xs font-extrabold font-display hidden sm:inline-block tracking-wide">
            AI Foodie Bot
          </span>
          <Sparkles className="w-3.5 h-3.5 text-white/80" />
        </motion.button>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              style={{
                backgroundColor: '#1E1E1E',      /* Design.md dark --bg-surface */
                color: '#F9F7F3',                /* Design.md dark --text-primary */
                border: '1px solid #2E2E2E',     /* Design.md dark --border-hairline */
              }}
            >
              {/* Modal Header */}
              <div
                className="p-5 sm:p-6 flex items-center justify-between"
                style={{
                  background: 'linear-gradient(90deg, #5a0000, #1E1E1E)',
                  borderBottom: '1px solid #2E2E2E',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0"
                    style={{ backgroundColor: 'var(--accent-brand)' }}
                  >
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-black text-lg sm:text-xl text-white">
                        Addis AI Assistant
                      </h3>
                      <span
                        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full text-white uppercase"
                        style={{ backgroundColor: 'var(--accent-brand)' }}
                      >
                        AI BOT
                      </span>
                    </div>
                    <p className="text-xs font-medium pt-0.5" style={{ color: 'var(--accent-amber)' }}>
                      Personalized food recommendations &amp; advice across Addis Ababa
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl transition-colors hover:bg-white/10"
                  style={{ color: '#A09E98' }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-6 flex flex-col gap-6 overflow-y-auto">

                {/* Prompt Chips */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider" style={{ color: '#A09E98' }}>
                    Popular Recommendation Questions:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {promptChips.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuerySubmit(undefined, chip.label)}
                        className="text-left px-3.5 py-2.5 rounded-xl border text-xs font-semibold transition-all flex items-center justify-between group cursor-pointer"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.04)',
                          borderColor: '#2E2E2E',
                          color: '#D4D1C9',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--accent-brand) 18%, transparent)';
                          e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--accent-brand) 40%, transparent)';
                          e.currentTarget.style.color = '#F9F7F3';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
                          e.currentTarget.style.borderColor = '#2E2E2E';
                          e.currentTarget.style.color = '#D4D1C9';
                        }}
                      >
                        <span>{chip.label}</span>
                        <ArrowRight
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                          style={{ color: 'var(--accent-amber)' }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Form */}
                <form onSubmit={handleQuerySubmit} className="relative">
                  <input
                    type="text"
                    value={inputQuery}
                    onChange={(e) => setInputQuery(e.target.value)}
                    placeholder="Ask AI Bot for food advice (e.g. Best Kitfo in Bole, Fasting lunch near Kazanchis)..."
                    className="w-full rounded-xl pl-4 pr-12 py-3 text-xs sm:text-sm placeholder-stone-500 focus:outline-none font-medium transition-colors"
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.4)',
                      border: '1px solid #2E2E2E',
                      color: '#F9F7F3',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-brand)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#2E2E2E')}
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg text-white flex items-center justify-center cursor-pointer transition-colors shadow-md"
                    style={{ backgroundColor: 'var(--accent-brand)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-brand-hover)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-brand)')}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                {/* AI Result Cards */}
                <div
                  className="rounded-2xl p-4 flex flex-col gap-3"
                  style={{ backgroundColor: 'rgba(0,0,0,0.35)', border: '1px solid #2E2E2E' }}
                >
                  <div
                    className="flex items-center gap-2 text-xs font-mono font-bold pb-2"
                    style={{ borderBottom: '1px solid #2E2E2E', color: 'var(--accent-amber)' }}
                  >
                    {/* Design.md: --accent-verified for confirmed/verified states */}
                    <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--accent-verified)' }} />
                    <span>{activeResponse.text}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    {activeResponse.spots.map((spot, i) => (
                      <div
                        key={i}
                        className="rounded-xl p-3 flex flex-col justify-between gap-2 transition-colors"
                        style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid #2E2E2E' }}
                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--accent-brand) 50%, transparent)')}
                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2E2E2E')}
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <h4 className="font-display font-black text-xs sm:text-sm text-white">{spot.name}</h4>
                            <span
                              className="text-[10px] font-mono font-bold flex items-center gap-0.5"
                              style={{ color: 'var(--accent-amber)' }}
                            >
                              <Star className="w-3 h-3 fill-current" />
                              {spot.rating}
                            </span>
                          </div>
                          <p className="text-xs font-medium pt-1" style={{ color: '#D4D1C9' }}>{spot.dish}</p>
                        </div>

                        <div
                          className="pt-2 flex items-center justify-between"
                          style={{ borderTop: '1px solid #2E2E2E' }}
                        >
                          <span className="font-mono font-black text-xs" style={{ color: 'var(--accent-brand)' }}>
                            {spot.price}
                          </span>
                          <span className="text-[10px] font-mono flex items-center gap-0.5" style={{ color: '#A09E98' }}>
                            <MapPin className="w-3 h-3" style={{ color: 'var(--accent-amber)' }} />
                            <span>{spot.location.split(',')[0]}</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div
                className="p-4 text-center text-xs font-mono flex items-center justify-between"
                style={{
                  backgroundColor: '#121212',
                  borderTop: '1px solid #2E2E2E',
                  color: '#A09E98',
                }}
              >
                <span>Verified Addis Foodies Recommendation Engine</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-1.5 rounded-lg text-white text-xs font-bold shadow-md transition-colors"
                  style={{ backgroundColor: 'var(--accent-brand)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-brand-hover)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-brand)')}
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

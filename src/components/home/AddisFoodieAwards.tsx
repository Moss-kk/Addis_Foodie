'use client';

import React, { useState } from 'react';
import { Award, CheckCircle2, Trophy, Utensils, Coffee, Flame, HeartHandshake, X, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function AddisFoodieAwards() {
  const { lang } = useLanguage();
  const [isVotingOpen, setIsVotingOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [votedSpot, setVotedSpot] = useState<string | null>(null);

  const categories = [
    {
      id: 'fine-dining',
      name: lang === 'AM' ? 'ፋይን ዳይኒንግ' : 'Fine Dining',
      description: lang === 'AM' ? 'ምርጥ የሆቴሎች እና የቅንጦት ምግብ ቤቶች' : 'Luxury dining, international menus & hotel culinary excellence',
      nominees: ['Ethiopian Skylight Hotel - Grand Dining', 'Hyatt Regency Grill', 'Sheraton Addis Summer Palace', 'Elilly International Hotel'],
      icon: Utensils,
      color: 'from-amber-500/20 to-amber-700/20 text-amber-400 border-amber-500/40',
    },
    {
      id: 'cafes',
      name: lang === 'AM' ? 'ካፌዎች እና ኬክ ቤቶች' : 'Cafés & Bakeries',
      description: lang === 'AM' ? 'ምርጥ ቡና፣ ኬክ እና ቁርስ ቦታዎች' : 'Artisanal roasters, fresh pastries & breakfast hangouts',
      nominees: ['Tomoca Coffee Bole', 'Velvet Pastry House Sarbet', 'Mulberry Bakery Atlas', 'Green Bean Roasters'],
      icon: Coffee,
      color: 'from-sky-500/20 to-sky-700/20 text-sky-400 border-sky-500/40',
    },
    {
      id: 'traditional',
      name: lang === 'AM' ? 'ክትፎ እና ባህላዊ ምግቦች' : 'Kitfo & Traditional',
      description: lang === 'AM' ? 'እውነተኛ የክትፎ እና የሀገር ባህል ምግቦች' : 'Authentic Gurage Kitfo, Tire Siga, and cultural feasts',
      nominees: ['Yado Gurage Kitfo Kazanchis', 'Monarch Rooftop Kitfo Bole', 'Kera Prime Meat House', 'Nitsu Kitfo Gotera'],
      icon: Trophy,
      color: 'from-[#E53935]/20 to-[#E53935]/40 text-[#FF8C00] border-[#E53935]/50',
    },
    {
      id: 'burgers',
      name: lang === 'AM' ? 'በርገሮች' : 'Gourmet Burgers',
      description: lang === 'AM' ? 'በአዲስ አበባ ውስጥ ያሉ ምርጥ የበርገር ቦታዎች' : 'Handcrafted patties, double cheese stacks & chili aioli',
      nominees: ['Sishu Burger Atlas', 'Titich Gourmet Lounge Medhanialem', 'The Burger Club CMC', 'Monster Burger ECA'],
      icon: Flame,
      color: 'from-orange-500/20 to-red-600/20 text-orange-400 border-orange-500/40',
    },
    {
      id: 'street-food',
      name: lang === 'AM' ? 'የሰፈር እና የጾም ምግቦች' : 'Street Food & Fasting',
      description: lang === 'AM' ? 'የተወደዱ የጾም በየአይነቱ እና የሰፈር ካፌዎች' : 'Iconic Shiro spots, Tsom Beyaynetu & local food hubs',
      nominees: ['22 Mazoria Shiro House', 'Kazanchis Fasting House', 'Piassa Green Cafe', 'Stadium Cultural Kitchen'],
      icon: HeartHandshake,
      color: 'from-emerald-500/20 to-emerald-700/20 text-emerald-400 border-emerald-500/40',
    },
  ];

  const handleVote = (spotName: string) => {
    setVotedSpot(spotName);
    setTimeout(() => {
      setVotedSpot(null);
      setIsVotingOpen(false);
    }, 2200);
  };

  return (
    <section className="w-full py-10 px-4 sm:px-8 rounded-3xl bg-[#0B0F17] text-white border border-amber-500/30 shadow-2xl relative overflow-hidden my-8">
      {/* Golden Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-[#FF8C00]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        
        {/* Addis Foodie Awards Gold Badge Seal */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center rounded-full bg-gradient-to-b from-amber-300 via-amber-600 to-amber-900 p-1 shadow-xl group hover:scale-105 transition-transform duration-300">
          <div className="w-full h-full rounded-full bg-[#0D121F] flex flex-col items-center justify-center p-2 border border-amber-400/40">
            <div className="flex items-center justify-center text-amber-400 mb-0.5">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-amber-300 drop-shadow-md" />
            </div>
            <div className="font-display font-black text-[10px] sm:text-xs tracking-widest text-amber-200 uppercase leading-none">
              ADDISFOODIE
            </div>
            <div className="font-mono text-[9px] sm:text-[10px] font-bold text-amber-400 tracking-wider">
              AWARDS 2026
            </div>
            <div className="flex items-center gap-1 mt-1">
              <span className="w-1 h-1 rounded-full bg-amber-400 animate-pulse" />
              <span className="w-1 h-1 rounded-full bg-amber-400" />
              <span className="w-1 h-1 rounded-full bg-amber-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="flex flex-col items-center gap-2 max-w-2xl">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            AddisFoodie Awards 2026
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-medium leading-relaxed">
            {lang === 'AM' 
              ? 'በአዲስ አበባ ውስጥ ለሚወዷቸው የምግብ ቤቶች ድምጽ ይስጡ እና በኢንዱስትሪው ውስጥ ምርጦቹን ለመለየት ያግዙ።' 
              : 'Vote for your favorite restaurants in Addis Ababa and help recognize the best in the industry.'}
          </p>
        </div>

        {/* Start Voting CTA Button */}
        <button
          type="button"
          onClick={() => setIsVotingOpen(true)}
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-stone-950 hover:bg-amber-100 font-label font-bold text-sm uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>{lang === 'AM' ? 'ድምጽ መስጠት ይጀምሩ' : 'Start Voting'}</span>
        </button>

        {/* Categories Section */}
        <div className="w-full pt-6 border-t border-white/10 flex flex-col gap-4">
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-display font-bold text-xl text-amber-200">
              {lang === 'AM' ? 'ምድቦች' : 'Categories'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 font-body">
              {lang === 'AM' 
                ? 'በብዙ የተለያዩ ምድቦች እንደ ፋይን ዳይኒንግ፣ ካፌዎች፣ ክትፎ እና የሰፈር ምግቦች ውስጥ ድምጽ ይስጡ።' 
                : 'Vote across multiple categories including Fine Dining, Cafés, Kitfo & Traditional, Gourmet Burgers, and Street Food.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setIsVotingOpen(true);
                  }}
                  className={`p-4 rounded-2xl bg-gradient-to-b ${cat.color} border bg-white/5 text-left flex flex-col justify-between gap-3 hover:scale-[1.02] transition-all cursor-pointer shadow-md`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className="w-6 h-6" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded-full text-white">
                      2026
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-sm text-white">{cat.name}</h4>
                    <p className="text-[11px] font-body text-stone-300 line-clamp-2 mt-1 leading-snug">
                      {cat.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Voting Modal Drawer */}
      {isVotingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#111622] border border-amber-500/40 rounded-3xl p-6 sm:p-8 flex flex-col gap-5 text-white shadow-2xl">
            
            <button
              type="button"
              onClick={() => setIsVotingOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {votedSpot ? (
              <div className="py-8 flex flex-col items-center text-center gap-3 animate-scaleUp">
                <CheckCircle2 className="w-16 h-16 text-emerald-400" />
                <h3 className="font-display font-bold text-2xl text-white">Vote Submitted!</h3>
                <p className="text-sm font-body text-stone-300">
                  Thank you for voting for <span className="font-bold text-amber-400">{votedSpot}</span> in the AddisFoodie Awards 2026.
                </p>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-1 pr-6">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                    <Trophy className="w-4 h-4" />
                    <span>AddisFoodie Official Ballot</span>
                  </div>
                  <h3 className="font-display font-black text-2xl text-white">
                    {selectedCategory 
                      ? categories.find(c => c.id === selectedCategory)?.name 
                      : 'Select a Restaurant to Vote'}
                  </h3>
                  <p className="text-xs text-stone-400 font-body">
                    Cast your official vote for the best culinary spot in Addis Ababa.
                  </p>
                </div>

                <div className="flex flex-col gap-2 max-h-[340px] overflow-y-auto pr-1">
                  {(selectedCategory 
                    ? categories.filter(c => c.id === selectedCategory) 
                    : categories
                  ).flatMap(cat => 
                    cat.nominees.map(nominee => ({ nominee, catName: cat.name }))
                  ).map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleVote(item.nominee)}
                      className="p-3.5 rounded-xl bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/50 flex items-center justify-between text-left transition cursor-pointer group"
                    >
                      <div className="flex flex-col">
                        <span className="font-display font-bold text-sm text-white group-hover:text-amber-200">
                          {item.nominee}
                        </span>
                        <span className="text-[10px] font-mono text-stone-400">{item.catName}</span>
                      </div>
                      <span className="px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 font-label font-bold text-xs group-hover:bg-amber-500 group-hover:text-stone-950 transition">
                        Vote
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}

          </div>
        </div>
      )}
    </section>
  );
}

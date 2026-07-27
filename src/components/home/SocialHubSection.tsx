'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, Send, Play, Video, ArrowUpRight, Sparkles } from 'lucide-react';

const socialPosts = [
  {
    id: '1',
    platform: 'Instagram',
    handle: '@addisfoodiess',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&w=800&q=80',
    title: 'Top 5 Kitfo Spots in Bole You Must Try',
    engagement: '14.2K Likes • 280 Comments',
    url: 'https://www.instagram.com/p/CK8TFBSngx8/?igshid=1pjzbuzr55jv8',
    icon: Camera,
    color: 'bg-pink-600/20 text-pink-400 border-pink-500/40',
  },
  {
    id: '2',
    platform: 'Telegram Feed',
    handle: 't.me/addisfoodies',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    title: 'Weekend Foodie Alert: Special Doro Wat at Yod Abyssinia',
    engagement: '32K Views • Live Channel',
    url: 'https://t.me/addisfoodies',
    icon: Send,
    color: 'bg-sky-600/20 text-sky-400 border-sky-500/40',
  },
  {
    id: '3',
    platform: 'TikTok Reels',
    handle: '@addisfoodies',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    title: 'Trying the Sizzling Shiro Tegabino in Kazanchis',
    engagement: '89K Views • Viral Reel',
    url: 'https://www.tiktok.com',
    icon: Play,
    color: 'bg-zinc-800 text-white border-zinc-700',
  },
  {
    id: '4',
    platform: 'YouTube Hub',
    handle: 'Addis Foodies Official',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    title: 'Kitfo Fest 2026 Documentary — Full Behind The Scenes',
    engagement: '45K Views • 18 Min Documentary',
    url: 'https://www.youtube.com',
    icon: Video,
    color: 'bg-red-600/20 text-red-400 border-red-500/40',
  },
];

export default function SocialHubSection() {
  return (
    <section className="w-full py-12 px-6 sm:px-8 rounded-3xl bg-white border border-stone-200/80 shadow-xs">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-200 pb-4 mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-mono font-bold text-pink-600 uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Social Channels</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-zinc-900">
            Connect with @addisfoodiess
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-medium pt-1">
            Follow our live daily updates across Instagram, Telegram, TikTok & YouTube.
          </p>
        </div>

        <a
          href="https://www.instagram.com/p/CK8TFBSngx8/?igshid=1pjzbuzr55jv8"
          target="_blank"
          rel="noopener noreferrer"
          className="touch-target px-5 py-2.5 rounded-xl bg-[#E53935] hover:bg-[#B71C1C] text-white font-extrabold text-xs transition-all shadow-md flex items-center justify-center gap-2 w-fit"
        >
          <span>Follow Instagram</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Grid of 4 Social Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {socialPosts.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-white border border-stone-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-[#E53935]/40"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.94]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 backdrop-blur-md border ${item.color}`}>
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.platform}</span>
                </span>
              </div>

              {/* Text Body */}
              <div className="p-4 flex flex-col gap-2 flex-1 justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#FF8C00] font-bold">
                    {item.handle}
                  </span>
                  <h3 className="font-display font-black text-sm text-zinc-900 group-hover:text-[#E53935] transition-colors line-clamp-2 mt-0.5">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-500">
                  <span>{item.engagement}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E53935] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>

    </section>
  );
}

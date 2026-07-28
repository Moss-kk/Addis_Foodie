'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { FaInstagram, FaTelegramPlane, FaTiktok, FaYoutube } from 'react-icons/fa';

interface LiveIgPost {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

const fallbackSocialPosts = [
  {
    id: '1',
    platform: 'Instagram',
    handle: '@addisfoodiess',
    image: '/telegram-imports/Queen Burger.jpg',
    title: 'Top 5 Kitfo Spots in Bole You Must Try',
    engagement: '14.2K Likes • 280 Comments',
    url: 'https://www.instagram.com/p/CK8TFBSngx8/?igshid=1pjzbuzr55jv8',
    icon: FaInstagram,
    color: 'bg-pink-600/20 text-pink-400 border-pink-500/40',
  },
  {
    id: '2',
    platform: 'Telegram Feed',
    handle: 't.me/addisfoodies',
    image: '/telegram-imports/Yado kitfo.jpg',
    title: 'Weekend Foodie Alert: Special Doro Wat at Yod Abyssinia',
    engagement: '32K Views • Live Channel',
    url: 'https://t.me/addisfoodies',
    icon: FaTelegramPlane,
    color: 'bg-sky-600/20 text-sky-400 border-sky-500/40',
  },
  {
    id: '3',
    platform: 'TikTok Reels',
    handle: '@addisfoodies',
    image: '/telegram-imports/fasting burger.jpg',
    title: 'Trying the Sizzling Shiro Tegabino in Kazanchis',
    engagement: '89K Views • Viral Reel',
    url: 'https://www.tiktok.com',
    icon: FaTiktok,
    color: 'bg-zinc-800 text-white border-zinc-700',
  },
  {
    id: '4',
    platform: 'YouTube Hub',
    handle: 'Addis Foodies Official',
    image: '/telegram-imports/Vanilla Fasting Iced late.jpg',
    title: 'Kitfo Fest 2026 Documentary — Full Behind The Scenes',
    engagement: '45K Views • 18 Min Documentary',
    url: 'https://www.youtube.com',
    icon: FaYoutube,
    color: 'bg-red-600/20 text-red-400 border-red-500/40',
  },
];

export default function SocialHubSection() {
  const [liveIgPost, setLiveIgPost] = useState<LiveIgPost | null>(null);

  useEffect(() => {
    async function loadLiveFeed() {
      try {
        const res = await fetch('/api/instagram/feed?limit=1');
        if (res.ok) {
          const data = await res.json();
          if (data.posts && data.posts.length > 0) {
            setLiveIgPost(data.posts[0]);
          }
        }
      } catch (e) {
        console.log('Instagram live feed fetch skipped/failed, using curated fallback.', e);
      }
    }
    loadLiveFeed();
  }, []);

  const displayPosts = fallbackSocialPosts.map((item) => {
    if (item.platform === 'Instagram' && liveIgPost) {
      return {
        ...item,
        image: liveIgPost.media_type === 'VIDEO' && liveIgPost.thumbnail_url ? liveIgPost.thumbnail_url : liveIgPost.media_url,
        title: liveIgPost.caption || item.title,
        url: liveIgPost.permalink || item.url,
        engagement: `${liveIgPost.like_count ?? 14200} Likes • ${liveIgPost.comments_count ?? 280} Comments`,
      };
    }
    return item;
  });

  return (
    <section
      className="w-full py-12 px-6 sm:px-8 rounded-[32px] border shadow-card"
      style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
    >
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 mb-8 gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-mono font-bold text-pink-500 uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Social Channels</span>
          </div>
          <h2 className="font-display font-normal text-2xl sm:text-4xl" style={{ color: 'var(--text-primary)' }}>
            Connect with @addisfoodiess
          </h2>
          <p className="text-xs sm:text-sm font-body pt-1" style={{ color: 'var(--text-secondary)' }}>
            Follow our live daily updates across Instagram, Telegram, TikTok &amp; YouTube.
          </p>
        </div>

        <a
          href="https://www.instagram.com/p/CK8TFBSngx8/?igshid=1pjzbuzr55jv8"
          target="_blank"
          rel="noopener noreferrer"
          className="touch-target px-6 py-3 rounded-full text-slate-950 font-extrabold text-xs transition-all shadow-md flex items-center justify-center gap-2 w-fit cursor-pointer hover:scale-105"
          style={{ backgroundColor: 'var(--accent-gold)' }}
        >
          <span>Follow Instagram</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Grid of 4 Social Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayPosts.map((item, idx) => {
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
              className="group border rounded-2xl overflow-hidden shadow-card hover:shadow-floating transition-all duration-300 flex flex-col justify-between"
              style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-subtle)' }}
            >
              {/* Media Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.95]"
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
                  <span className="text-[11px] font-mono font-bold" style={{ color: 'var(--accent-gold)' }}>
                    {item.handle}
                  </span>
                  <h3 className="font-display font-bold text-sm line-clamp-2 mt-0.5" style={{ color: 'var(--text-primary)' }}>
                    {item.title}
                  </h3>
                </div>

                <div className="pt-2 border-t flex items-center justify-between text-[11px] font-mono" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
                  <span>{item.engagement}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" style={{ color: 'var(--accent-gold)' }} />
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>

    </section>
  );
}

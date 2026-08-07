'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Award, Trophy, Star, CheckCircle, Sparkles, Filter, ChevronRight, Vote } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import PostDetailModal from '../../components/PostDetailModal';
import { CUISINE_CATEGORIES, getCategoryBySlug } from '../../lib/categories';
import { mockPosts } from '../../data/mockPosts';
import { FoodPost } from '../../types/post';

function AwardsContent() {
  const searchParams = useSearchParams();
  const initialCategoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryParam || 'all');
  const [votedSpotIds, setVotedSpotIds] = useState<Record<string, boolean>>({});
  const [voteCounts, setVoteCounts] = useState<Record<string, number>>({});
  const [votingLoadingId, setVotingLoadingId] = useState<string | null>(null);
  const [modalPost, setModalPost] = useState<FoodPost | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync category state when URL search params change
  useEffect(() => {
    if (initialCategoryParam) {
      setSelectedCategory(initialCategoryParam);
    }
  }, [initialCategoryParam]);

  // Seed initial vote counts randomly for demo polish (100-500 votes)
  useEffect(() => {
    const initialCounts: Record<string, number> = {};
    mockPosts.forEach((post, index) => {
      initialCounts[post.id] = (post.reviewCount || 120) * 3 + (index * 17) % 85;
    });
    setVoteCounts(initialCounts);
  }, []);

  // Show Toast Alert
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Handle Cast Vote
  const handleVote = async (post: FoodPost) => {
    if (votedSpotIds[post.id]) {
      showToast(`You have already voted for ${post.restaurantName}!`);
      return;
    }

    setVotingLoadingId(post.id);

    try {
      const res = await fetch('/api/awards/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nomineeId: post.id,
          categorySlug: post.category.toLowerCase(),
          restaurantName: post.restaurantName,
        }),
      });

      if (res.ok) {
        setVotedSpotIds((prev) => ({ ...prev, [post.id]: true }));
        setVoteCounts((prev) => ({
          ...prev,
          [post.id]: (prev[post.id] || 0) + 1,
        }));
        showToast(`🎉 Your vote for ${post.restaurantName} has been recorded!`);
      } else {
        showToast('Error recording vote. Please try again.');
      }
    } catch {
      showToast('Network error while casting vote.');
    } finally {
      setVotingLoadingId(null);
    }
  };

  // Filter Nominees by Selected Category
  const filteredNominees = useMemo(() => {
    if (selectedCategory === 'all') return mockPosts;
    return mockPosts.filter((post) => {
      const catObj = getCategoryBySlug(selectedCategory);
      if (catObj) {
        return post.category.toLowerCase() === catObj.label.toLowerCase() || post.category.toLowerCase() === catObj.slug.toLowerCase();
      }
      return post.category.toLowerCase() === selectedCategory.toLowerCase();
    });
  }, [selectedCategory]);

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-20 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      {/* Toast Alert Banner */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#1A1C1E] text-white px-4 py-3 rounded-lg border border-[#F59E0B] shadow-2xl flex items-center gap-2 animate-bounce">
          <Sparkles className="w-5 h-5 text-[#F59E0B]" />
          <span className="text-xs font-label font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative w-full py-12 sm:py-16 bg-gradient-to-b from-stone-950 via-stone-900 to-[#1A1C1E] text-white border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="site-container relative z-10 flex flex-col items-center text-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-amber-500/20 text-[#F59E0B] border border-[#F59E0B]/30 shadow-inner">
            <Trophy className="w-4 h-4 text-[#F59E0B]" />
            <span>2026 Official Culinary Competition</span>
          </div>

          <h1 className="font-syne font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl">
            Addis Foodies Choice Awards
          </h1>

          <p className="text-sm sm:text-base font-body text-stone-300 max-w-2xl leading-relaxed">
            Vote for your favorite restaurants across Addis Ababa. The top-rated culinary destinations will be crowned live at the 2026 Addis Foodies Gala.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4 text-xs font-label uppercase tracking-wider text-stone-400 border-t border-white/10 w-full max-w-lg mt-2">
            <div>
              <span className="block font-bold text-white text-base">10</span>
              <span>Award Categories</span>
            </div>
            <div className="border-r border-white/10" />
            <div>
              <span className="block font-bold text-white text-base">100%</span>
              <span>Community Voted</span>
            </div>
            <div className="border-r border-white/10" />
            <div>
              <span className="block font-bold text-[#F59E0B] text-base">Dec 31, 2026</span>
              <span>Voting Deadline</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories & Nominees Section */}
      <main className="site-container py-8 flex flex-col gap-8 flex-1">
        
        {/* Category Filter Chips Bar */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#B8422E]" />
              <span className="text-xs font-label uppercase tracking-wider font-bold text-[var(--text-secondary)]">
                Select Ballot Category:
              </span>
            </div>
            <span className="text-xs font-mono text-stone-400 font-bold">
              Showing {filteredNominees.length} Nominees
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-label font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer border ${
                selectedCategory === 'all'
                  ? 'bg-[#1A1C1E] text-white border-[#B8422E] shadow-sm'
                  : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[#B8422E]'
              }`}
            >
              All Categories ⭐
            </button>

            {CUISINE_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory.toLowerCase() === cat.slug.toLowerCase();
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-label font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#1A1C1E] text-white border-[#B8422E] shadow-md'
                      : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[#B8422E]'
                  }`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Nominees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNominees.map((post, idx) => {
            const hasVoted = Boolean(votedSpotIds[post.id]);
            const votes = voteCounts[post.id] || 150;

            return (
              <div
                key={post.id}
                className="heritage-card group relative flex flex-col rounded-2xl overflow-hidden bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xs transition-all duration-300 hover:shadow-lg hover:border-[#B8422E]"
              >
                {/* 4:3 Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={post.image}
                    alt={post.restaurantName}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                  {/* Nominee Rank Badge */}
                  <div className="absolute top-3 left-3 bg-[#1A1C1E]/90 text-[#F59E0B] backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border border-[#F59E0B]/30 flex items-center gap-1 shadow-md">
                    <Award className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Nominee #{idx + 1}</span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-3 right-3 bg-zinc-950/90 text-white font-mono font-bold text-xs px-3 py-1 rounded-full border border-white/20">
                    {post.priceFormatted}
                  </div>

                  {/* Category Tag */}
                  <div className="absolute bottom-3 left-3 bg-black/70 text-stone-200 text-[10px] font-label font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm border border-white/10">
                    {post.category}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-label text-[var(--text-secondary)] font-bold">
                        📍 {post.neighborhood}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{post.rating || '4.8'}</span>
                      </div>
                    </div>

                    <h3 className="font-syne font-bold text-xl text-[var(--text-primary)] group-hover:text-[#B8422E] transition-colors">
                      {post.restaurantName}
                    </h3>

                    <p className="text-xs font-body text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                      {post.caption}
                    </p>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between gap-2 mt-2">
                    <div className="flex flex-col text-[11px] font-mono">
                      <span className="text-stone-400 uppercase text-[9px]">Verified Votes</span>
                      <span className="font-bold text-[#F59E0B] text-sm">{votes.toLocaleString()} votes</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleVote(post)}
                      disabled={hasVoted || votingLoadingId === post.id}
                      className={`px-4 py-2.5 rounded-xl font-label text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                        hasVoted
                          ? 'bg-emerald-700 text-white cursor-default'
                          : 'bg-[#B8422E] hover:bg-[#8B1717] text-white shadow-xs hover:scale-102'
                      }`}
                    >
                      {hasVoted ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-white" />
                          <span>Voted ✓</span>
                        </>
                      ) : votingLoadingId === post.id ? (
                        <span>Casting...</span>
                      ) : (
                        <>
                          <Vote className="w-4 h-4 text-white" />
                          <span>Cast Vote</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </main>

      <Footer />
      <MobileBottomNav />

      {modalPost && (
        <PostDetailModal
          post={modalPost}
          onClose={() => setModalPost(null)}
        />
      )}
    </div>
  );
}

export default function AwardsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#1A1C1E] text-white p-8">Loading Addis Foodies Awards...</div>}>
      <AwardsContent />
    </Suspense>
  );
}

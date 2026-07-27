import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '../../../components/Header';
import RestaurantReviewGrid from '../../../components/RestaurantReviewGrid';
import Footer from '../../../components/Footer';
import MobileBottomNav from '../../../components/layout/MobileBottomNav';
import { getRestaurantBySlug, getAllRestaurantSlugs } from '../../../lib/restaurants';
import { ReviewJsonLd } from '../../../components/JsonLd';

export async function generateStaticParams() {
  return getAllRestaurantSlugs();
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function RestaurantPage({ params }: PageProps) {
  const { slug } = await params;
  const restaurant = getRestaurantBySlug(slug);

  if (!restaurant) {
    notFound();
  }

  const primaryPost = restaurant.posts[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] dark:bg-[#120907] text-zinc-900 dark:text-[#FFF8F6] transition-colors duration-300 selection:bg-[#E53935]/20 selection:text-[#E53935] pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      {/* Schema.org JSON-LD Structured Data */}
      {primaryPost && <ReviewJsonLd post={primaryPost} />}

      {/* Sticky Header */}
      <Header />

      {/* Main Container */}
      <main className="site-container py-6 sm:py-10 flex flex-col gap-8">
        
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-600 dark:text-[#D1C2BD] hover:text-[#E53935] transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* Restaurant Hero Block - Responsive Light/Dark */}
        <div className="bg-gradient-to-r from-[#E53935] via-amber-600 to-[#E53935] dark:from-[#1A100C] dark:via-[#120907] dark:to-[#1A100C] text-white py-10 px-8 sm:px-12 rounded-3xl flex flex-col gap-5 shadow-xl relative overflow-hidden border border-red-400/30 dark:border-red-500/20">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col gap-2 z-10">
            <h1 className="font-syne font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              {restaurant.name}
            </h1>
            <p className="text-white/90 dark:text-[#D1C2BD] font-medium text-xs sm:text-sm max-w-2xl">
              Discover authentic reviews and aggregated menu pricing for {restaurant.name} in {restaurant.neighborhood}.
            </p>
          </div>

          {/* Badges Row */}
          <div className="flex flex-wrap items-center gap-3 z-10 pt-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-black text-zinc-950 bg-white px-3.5 py-1.5 rounded-full shadow-xs">
              📍 {restaurant.neighborhood}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-black text-zinc-950 bg-amber-400 px-3.5 py-1.5 rounded-full shadow-xs">
              Avg ~{restaurant.avgPrice} Br
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-black text-white bg-white/20 dark:bg-white/10 border border-white/30 px-3.5 py-1.5 rounded-full">
              ⭐ {restaurant.reviewCount} {restaurant.reviewCount === 1 ? 'Review' : 'Reviews'}
            </span>
          </div>
        </div>

        {/* Compiled Menu Section */}
        {restaurant.menu.length > 0 && (
          <section className="bg-white dark:bg-[#1A100C] p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-red-500/20 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">📋</span>
                <h2 className="font-syne font-black text-base sm:text-lg text-zinc-900 dark:text-[#FFF8F6]">
                  Compiled Menu & Prices (ETB)
                </h2>
              </div>
              <span className="text-xs font-mono font-bold text-[#E53935] dark:text-[#FF8C00] bg-red-50 dark:bg-amber-500/10 px-3 py-1 rounded-full border border-red-200 dark:border-amber-500/30">
                {restaurant.menu.length} {restaurant.menu.length === 1 ? 'item' : 'items'}
              </span>
            </div>
            
            <div className="divide-y divide-zinc-100 dark:divide-zinc-800/80">
              {restaurant.menu.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-3 text-xs sm:text-sm font-semibold hover:bg-zinc-50 dark:hover:bg-[#120907]/50 px-2 rounded-lg transition-colors">
                  <span className="text-zinc-800 dark:text-zinc-200">{item.name}</span>
                  <span className="text-[#E53935] dark:text-[#FF8C00] font-black font-mono text-sm">{item.price} ETB</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Reviews Grid Section */}
        <section className="flex flex-col gap-5 pt-2">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <h2 className="font-syne font-black text-lg sm:text-xl text-zinc-900 dark:text-[#FFF8F6] flex items-center gap-2">
              <span>💬</span>
              <span>Reviews for {restaurant.name}</span>
            </h2>
            <span className="text-xs font-bold text-zinc-500 dark:text-[#D1C2BD]">
              Showing all {restaurant.posts.length} {restaurant.posts.length === 1 ? 'post' : 'posts'}
            </span>
          </div>

          <RestaurantReviewGrid posts={restaurant.posts} />
        </section>

      </main>

      {/* Footer & Mobile Nav */}
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

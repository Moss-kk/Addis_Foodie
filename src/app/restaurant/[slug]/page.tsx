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
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] dark:bg-[#120907] text-zinc-900 dark:text-[#FFF8F6] transition-colors duration-300 selection:bg-[#E53935]/20 selection:text-[#E53935] pb-16 sm:pb-0 max-w-full overflow-x-hidden">
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
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-600 dark:text-stone-300 hover:text-[#E53935] transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4 text-[#E53935]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* Restaurant Hero Block */}
        <div className="bg-gradient-to-r from-[#E53935] via-[#B71C1C] to-[#E53935] text-white py-10 px-8 sm:px-12 rounded-3xl flex flex-col gap-5 shadow-xl relative overflow-hidden border border-red-400/30">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col gap-2 z-10">
            <h1 className="font-syne font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              {restaurant.name}
            </h1>
            <p className="text-white/90 font-medium text-xs sm:text-sm max-w-2xl">
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
            <span className="inline-flex items-center gap-1.5 text-xs font-black text-white bg-white/20 border border-white/30 px-3.5 py-1.5 rounded-full">
              ⭐ {restaurant.reviewCount} {restaurant.reviewCount === 1 ? 'Review' : 'Reviews'}
            </span>
          </div>
        </div>

        {/* Compiled Menu Section */}
        {restaurant.menu.length > 0 && (
          <section className="bg-white dark:bg-[#161E2E] p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-xs flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">📋</span>
                <h2 className="font-syne font-black text-base sm:text-lg text-zinc-900 dark:text-white">
                  Compiled Menu &amp; Prices (ETB)
                </h2>
              </div>
              <span className="text-xs font-mono font-bold text-[#E53935] bg-red-50 dark:bg-red-950/50 px-3 py-1 rounded-full border border-red-200 dark:border-red-800">
                {restaurant.menu.length} {restaurant.menu.length === 1 ? 'item' : 'items'}
              </span>
            </div>
            
            <div className="divide-y divide-stone-100 dark:divide-stone-800">
              {restaurant.menu.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-3 text-xs sm:text-sm font-semibold hover:bg-stone-50 dark:hover:bg-stone-900 px-2 rounded-lg transition-colors">
                  <span className="text-zinc-800 dark:text-stone-200">{item.name}</span>
                  <span className="text-[#E53935] font-black font-mono text-sm">{item.price} ETB</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Reviews Grid Section */}
        <section className="flex flex-col gap-5 pt-2">
          <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
            <h2 className="font-syne font-black text-lg sm:text-xl text-zinc-900 dark:text-white flex items-center gap-2">
              <span>💬</span>
              <span>Reviews for {restaurant.name}</span>
            </h2>
            <span className="text-xs font-bold text-zinc-600 dark:text-stone-400">
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

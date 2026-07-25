import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '../../../components/Header';
import RestaurantReviewGrid from '../../../components/RestaurantReviewGrid';
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
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-primary/10 selection:text-brand-primary">
      {/* Schema.org JSON-LD Structured Data */}
      {primaryPost && <ReviewJsonLd post={primaryPost} />}

      {/* Sticky Header */}
      <Header />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-8">
        
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-500 hover:text-brand-primary transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* Restaurant Hero Block - Clean Cream/Charcoal Split */}
        <div className="bg-brand-dark text-white py-10 px-8 sm:px-12 rounded-3xl flex flex-col gap-5 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col gap-2 z-10">
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              {restaurant.name}
            </h1>
            <p className="text-white/70 font-semibold text-xs sm:text-sm">
              Discover authentic reviews and aggregated menu pricing for {restaurant.name} in {restaurant.neighborhood}.
            </p>
          </div>

          {/* Badges Row */}
          <div className="flex flex-wrap items-center gap-3 z-10 pt-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-black text-brand-dark bg-brand-bg px-3.5 py-1.5 rounded-full border border-zinc-200/20">
              📍 {restaurant.neighborhood}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-black text-brand-dark bg-brand-accent px-3.5 py-1.5 rounded-full shadow-xs">
              Avg ~{restaurant.avgPrice} Br
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-black text-white/90 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
              ⭐ {restaurant.reviewCount} {restaurant.reviewCount === 1 ? 'Review' : 'Reviews'}
            </span>
          </div>
        </div>

        {/* Compiled Menu Section */}
        {restaurant.menu.length > 0 && (
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/50 shadow-xs flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">📋</span>
                <h2 className="font-display font-extrabold text-base sm:text-lg text-brand-dark">
                  Compiled Menu & Prices (ETB)
                </h2>
              </div>
              <span className="text-xs font-bold text-zinc-400 bg-zinc-100 px-3 py-1 rounded-full">
                {restaurant.menu.length} {restaurant.menu.length === 1 ? 'item' : 'items'}
              </span>
            </div>
            
            <div className="divide-y divide-zinc-100/80">
              {restaurant.menu.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-3 text-xs sm:text-sm font-semibold hover:bg-zinc-50/50 px-2 rounded-lg transition-colors">
                  <span className="text-zinc-700">{item.name}</span>
                  <span className="text-brand-dark font-black font-mono text-sm">{item.price} ETB</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Reviews Grid Section */}
        <section className="flex flex-col gap-5 pt-2">
          <div className="flex items-center justify-between border-b border-zinc-200/50 pb-3">
            <h2 className="font-display font-extrabold text-lg sm:text-xl text-brand-dark flex items-center gap-2">
              <span>💬</span>
              <span>Reviews for {restaurant.name}</span>
            </h2>
            <span className="text-xs font-semibold text-zinc-500">
              Showing all {restaurant.posts.length} {restaurant.posts.length === 1 ? 'post' : 'posts'}
            </span>
          </div>

          <RestaurantReviewGrid posts={restaurant.posts} />
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200/50 bg-white/50 py-6 text-center mt-12">
        <p className="text-[10px] sm:text-xs text-zinc-400 font-semibold tracking-wide uppercase font-sans">
          Addis Foodies © 2026 • Discovering Foods in Addis
        </p>
      </footer>
    </div>
  );
}

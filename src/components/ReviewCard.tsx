import Image from 'next/image';
import { FoodPost } from '../types/post';

interface ReviewCardProps {
  post: FoodPost;
  onClick: () => void;
}

export default function ReviewCard({ post, onClick }: ReviewCardProps) {
  // Highlight hashtags in the card excerpt
  const renderHighlightedExcerpt = (captionText: string) => {
    const words = captionText.split(/(\s+)/);
    return words.map((word, idx) => {
      if (word.startsWith('#')) {
        return (
          <span key={idx} className="text-brand-primary font-semibold">
            {word}
          </span>
        );
      }
      return word;
    });
  };

  return (
    <article
      onClick={onClick}
      className="bg-white rounded-3xl overflow-hidden border border-zinc-200/50 shadow-xs hover:shadow-md hover:border-zinc-200/80 hover:-translate-y-0.5 transition-all duration-300 flex flex-col group cursor-pointer"
    >
      {/* Media container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-100">
        <Image
          src={post.image}
          alt={post.restaurantName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
        />

        {/* Price Tag Overlay (MUST BE BOLD) */}
        <div className="absolute top-3.5 right-3.5 z-10">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-black text-brand-dark bg-brand-accent border border-white/20 shadow-lg tracking-wide">
            {post.priceFormatted}
          </span>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-5 flex flex-col flex-1 gap-3.5">
        
        {/* Bold Location Landmark Badge at Top of Card Details */}
        <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-[#111827] bg-zinc-100/90 border border-zinc-200/30 px-3 py-1 rounded-full w-fit">
          <svg className="w-3.5 h-3.5 text-brand-primary fill-current" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span className="truncate">{post.location}</span>
        </div>

        {/* Restaurant/Dish Highlight */}
        <div className="flex flex-col gap-1">
          <h3 className="font-display font-extrabold text-lg text-[#111827] leading-snug group-hover:text-brand-primary transition-colors duration-200">
            {post.restaurantName}
          </h3>
          <span className="inline-flex items-center text-[10px] text-zinc-500 font-extrabold bg-zinc-50 border border-zinc-100 px-2 py-0.5 rounded-md w-fit uppercase tracking-wider">
            {post.category}
          </span>
        </div>

        {/* 2-line teaser of caption */}
        <p className="text-xs sm:text-sm text-zinc-500 line-clamp-2 leading-relaxed flex-1 font-semibold">
          {renderHighlightedExcerpt(post.caption)}
        </p>

        {/* Footer Actions (Subtle platform pills at bottom right) */}
        <div className="flex items-center justify-between pt-3 border-t border-zinc-100/60 mt-1">
          <span className="text-[11px] font-bold text-brand-primary group-hover:underline flex items-center gap-1">
            Read Full Review
            <svg className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>

          {/* Source pill button */}
          <div>
            {post.sourcePlatform === 'telegram' ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-black text-white bg-[#0088cc] shadow-2xs uppercase tracking-wider">
                TG Link
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-black text-white bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-2xs uppercase tracking-wider">
                IG Feed
              </span>
            )}
          </div>
        </div>

      </div>
    </article>
  );
}

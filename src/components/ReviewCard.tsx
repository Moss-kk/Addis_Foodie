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
      className="bg-white rounded-2xl overflow-hidden border border-zinc-200/50 shadow-xs hover:shadow-md hover:border-zinc-200 hover:-translate-y-0.5 transition-all duration-300 flex flex-col group cursor-pointer"
    >
      {/* Aspect Ratio Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-100">
        <Image
          src={post.image}
          alt={post.restaurantName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
        />

        {/* Platform Source Badge */}
        <div className="absolute top-3 left-3 z-10">
          {post.sourcePlatform === 'telegram' ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-black text-white bg-[#0088cc] shadow-md uppercase tracking-wider">
              Telegram
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-black text-white bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-md uppercase tracking-wider">
              Instagram
            </span>
          )}
        </div>

        {/* Price Badge Overlay */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black text-brand-dark bg-brand-accent shadow-md tracking-wider">
            ETB {post.price}
          </span>
        </div>
      </div>

      {/* Card Contents */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        {/* Header & Location */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-extrabold text-base text-[#111827] leading-tight group-hover:text-brand-primary transition-colors duration-200">
            {post.restaurantName}
          </h3>
          <span className="inline-flex items-center gap-0.5 text-[10px] text-zinc-600 font-bold bg-zinc-100 px-2 py-0.5 rounded-md flex-shrink-0">
            📍 {post.location}
          </span>
        </div>

        {/* 3-line Excerpt of Review Text */}
        <p className="text-xs sm:text-sm text-zinc-500 line-clamp-3 leading-relaxed flex-1 font-medium">
          {renderHighlightedExcerpt(post.caption)}
        </p>

        {/* In-App Action Hint */}
        <div className="flex items-center justify-between text-[11px] font-bold text-brand-primary group-hover:underline pt-1 border-t border-zinc-100/50 mt-1">
          <span>Read Full Review</span>
          <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </article>
  );
}

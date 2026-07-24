import Image from 'next/image';
import { FoodPost } from '../types/post';

interface ReviewCardProps {
  post: FoodPost;
}

export default function ReviewCard({ post }: ReviewCardProps) {
  // Highlight hashtags in the caption
  const renderHighlightedCaption = (captionText: string) => {
    const words = captionText.split(/(\s+)/);
    return words.map((word, idx) => {
      if (word.startsWith('#')) {
        return (
          <span key={idx} className="text-brand-primary font-semibold hover:underline">
            {word}
          </span>
        );
      }
      return word;
    });
  };

  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-zinc-200/50 shadow-xs hover:shadow-md hover:border-zinc-200 hover:-translate-y-0.5 transition-all duration-300 flex flex-col group">
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
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black text-white bg-[#0088cc] shadow-md uppercase tracking-wider">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.6 1.5-1.55 2.75-2.92 2.75-2.92.3-.34.36-.5-.22-.52-.37-.02-1.92.95-4.82 2.9-.45.31-.86.46-1.22.45-.4-.01-1.17-.23-1.74-.41-.7-.22-1.25-.34-1.2-.72.03-.2.3-.41.82-.62 3.2-1.4 5.34-2.32 6.42-2.77 3.07-1.28 3.7-.15 3.7.37z" />
              </svg>
              Telegram
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black text-white bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-md uppercase tracking-wider">
              <svg
                className="w-3 h-3 stroke-current fill-none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              </svg>
              Instagram
            </span>
          )}
        </div>

        {/* Price Badge Overlay */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-extrabold text-brand-dark bg-brand-accent shadow-md tracking-wide">
            {post.price} ETB
          </span>
        </div>
      </div>

      {/* Card Contents */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        {/* Header & Location */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-extrabold text-base text-brand-dark leading-tight group-hover:text-brand-primary transition-colors duration-200">
            {post.restaurantName}
          </h3>
          <span className="inline-flex items-center gap-0.5 text-xs text-zinc-500 font-semibold bg-zinc-100 px-2 py-0.5 rounded-md flex-shrink-0">
            📍 {post.location}
          </span>
        </div>

        {/* Caption Excerpt */}
        <p className="text-xs sm:text-sm text-zinc-600 line-clamp-3 leading-relaxed flex-1">
          {renderHighlightedCaption(post.caption)}
        </p>

        {/* Action Link Button */}
        <a
          href={post.originalPostUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 w-full bg-brand-dark hover:bg-brand-primary text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition-colors duration-200 cursor-pointer"
        >
          View Original Post
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </article>
  );
}

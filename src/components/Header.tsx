import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-14 border-b border-zinc-200/50 glass-panel flex items-center justify-between px-4 sm:px-6">
      {/* Brand Logo & Wordmark */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-zinc-200 shadow-sm group-hover:scale-105 transition-transform duration-200">
          <Image
            src="/images/logo.png"
            alt="Addis Foodies Logo"
            fill
            sizes="32px"
            priority
            className="object-cover"
          />
        </div>
        <div className="flex items-baseline">
          <span className="font-display font-extrabold text-lg tracking-tight text-brand-dark">Addis</span>
          <span className="font-display font-extrabold text-lg tracking-tight text-brand-primary">Foodies</span>
        </div>
      </Link>

      {/* Live Feed Indicator */}
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50/80 border border-emerald-200/40 shadow-xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[10px] font-bold text-emerald-700 tracking-wider uppercase font-sans">
          🟢 Live Feed
        </span>
      </div>

      {/* Quick Channel Links */}
      <div className="flex items-center gap-3">
        <a
          href="https://t.me/addisfoodies"
          target="_blank"
          rel="noopener noreferrer"
          title="Join our Telegram Channel"
          className="p-1.5 text-zinc-600 hover:text-[#0088cc] hover:bg-zinc-100 rounded-full transition-colors duration-200"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.6 1.5-1.55 2.75-2.92 2.75-2.92.3-.34.36-.5-.22-.52-.37-.02-1.92.95-4.82 2.9-.45.31-.86.46-1.22.45-.4-.01-1.17-.23-1.74-.41-.7-.22-1.25-.34-1.2-.72.03-.2.3-.41.82-.62 3.2-1.4 5.34-2.32 6.42-2.77 3.07-1.28 3.7-.15 3.7.37z" />
          </svg>
        </a>
        <a
          href="https://instagram.com/addisfoodies"
          target="_blank"
          rel="noopener noreferrer"
          title="Follow us on Instagram"
          className="p-1.5 text-zinc-600 hover:text-[#e1306c] hover:bg-zinc-100 rounded-full transition-colors duration-200"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>
    </header>
  );
}

import { Story } from '../types';
import { Linkedin, Link as LinkIcon, Check } from 'lucide-react';
import { useState } from 'react';

const XLogo = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface StoryItemProps {
  story: Story;
}

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const time = Math.max(1, Math.ceil(words / wordsPerMinute));
  return `${time} min read`;
}

export default function StoryItem({ story }: StoryItemProps) {
  const [copied, setCopied] = useState(false);
  const readTime = calculateReadingTime(`${story.title} ${story.summary}`);

  const handleCopy = () => {
    const url = `${window.location.origin}/story/${story.id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareText = encodeURIComponent(story.title);
  const shareUrl = encodeURIComponent(`${window.location.origin}/story/${story.id}`);

  return (
    <article className="py-6 sm:py-7 border-b border-mist last:border-b-0 group">
      <div className="font-mono text-xs text-slate mb-2">
        {story.date} &middot; {story.category}
      </div>
      <h3 className="font-display font-semibold text-lg sm:text-xl leading-snug text-accent mb-2.5">
        {story.title}{' '}
        <span className="font-mono text-xs sm:text-[13px] text-slate font-normal whitespace-nowrap">
          ({readTime})
        </span>
      </h3>
      <p className="text-sm sm:text-base leading-relaxed max-w-3xl text-[#1A1A18] mb-4">
        {story.summary}
      </p>
      
      <div className="flex gap-5 items-center opacity-70 sm:opacity-0 group-hover:opacity-100 transition-opacity">
        <a 
          href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
          target="_blank" 
          rel="noreferrer"
          className="text-slate hover:text-accent transition-colors flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest"
          title="Share on X (Twitter)"
        >
          <XLogo size={16} />
        </a>
        <a 
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
          target="_blank" 
          rel="noreferrer"
          className="text-slate hover:text-accent transition-colors flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest"
          title="Share on LinkedIn"
        >
          <Linkedin size={16} />
        </a>
        <button 
          onClick={handleCopy}
          className="text-slate hover:text-accent transition-colors flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest"
          title="Copy Link"
        >
          {copied ? <Check size={14} className="text-bull" /> : <LinkIcon size={14} />}
          {copied ? <span className="text-bull">Copied</span> : 'Copy Link'}
        </button>
      </div>
    </article>
  );
}

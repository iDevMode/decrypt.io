import { X } from 'lucide-react';
import { useState } from 'react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubscribeModal({ isOpen, onClose }: SubscribeModalProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally handle subscription logic here
    setSubscribed(true);
    setTimeout(() => {
      onClose();
      setSubscribed(false);
      setEmail('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-paper border border-hairline w-full max-w-lg shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate hover:text-ink transition-colors p-2"
          aria-label="Close"
        >
          <X size={20} strokeWidth={1.5} />
        </button>
        
        <div className="p-8 sm:p-12 text-center">
          <div className="inline-block font-mono text-[10px] sm:text-xs text-accent uppercase tracking-[0.18em] mb-4 border border-accent/20 bg-accent/5 px-3 py-1">
            Stay Updated
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl leading-tight mb-4 text-ink">
            Get the Daily Decrypt
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate mb-8 leading-relaxed">
            The 5-minute brief on AI, crypto & the money moving both. Delivered to your inbox every morning.
          </p>
          
          {subscribed ? (
            <div className="bg-[#0E8C5A]/10 text-[#0E8C5A] border border-[#0E8C5A]/20 p-4 font-mono text-sm">
              Thanks for subscribing! Check your inbox.
            </div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com" 
                className="w-full font-mono text-sm px-4 py-3 sm:py-4 border border-hairline focus:outline-none focus:border-ink focus:ring-1 focus:ring-ink transition-all placeholder:text-slate/50"
                required
                autoFocus
              />
              <button 
                type="submit" 
                className="w-full font-mono text-xs sm:text-[13px] font-semibold uppercase tracking-widest bg-accent text-white px-6 py-3 sm:py-4 hover:bg-ink transition-colors"
              >
                Subscribe Now &rarr;
              </button>
            </form>
          )}
          
          <div className="font-mono text-[10px] text-slate mt-6">
            No spam. Unsubscribe anytime.
          </div>
        </div>
      </div>
    </div>
  );
}

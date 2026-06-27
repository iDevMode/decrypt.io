import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import StoryItem from './components/StoryItem';
import Footer from './components/Footer';
import SubscribeModal from './components/SubscribeModal';
import { tickerData, aiStories, cryptoStories, learningStories } from './data';
import { useState } from 'react';

export default function App() {
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);

  return (
    <div className="py-0 sm:py-8 lg:py-12 px-0 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Outer Paper Container */}
      <div className="bg-paper border-x sm:border border-hairline shadow-sm min-h-screen flex flex-col">
        
        <Header onSubscribeClick={() => setIsSubscribeModalOpen(true)} />
        
        <main className="flex-grow">
          <Hero />
          
          <div className="px-4 sm:px-10 lg:px-14 py-8">
            <Ticker items={tickerData} lastUpdated="06:00 ET" />
          </div>

          {/* AI Section */}
          <section className="px-4 sm:px-10 lg:px-14 pb-8">
            <div className="flex items-center gap-4 mb-2">
              <h2 className="font-mono text-[11px] sm:text-[13px] font-semibold tracking-widest uppercase whitespace-nowrap">
                Artificial Intelligence
              </h2>
              <span className="flex-1 h-px bg-hairline"></span>
              <span className="font-mono text-[10px] sm:text-xs text-slate whitespace-nowrap">
                {aiStories.length} stories
              </span>
            </div>
            
            <div className="flex flex-col">
              {aiStories.map(story => (
                <StoryItem key={story.id} story={story} />
              ))}
            </div>
          </section>

          {/* Sponsor Block */}
          <aside className="mx-4 sm:mx-10 lg:mx-14 mb-10 bg-mist border border-hairline p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-white bg-ink px-2.5 py-1">
                Sponsor
              </span>
              <span className="font-mono text-xs text-slate">Ledgerline</span>
            </div>
            <h3 className="font-display font-semibold text-lg sm:text-xl leading-snug text-ink mb-2">
              Settle stablecoin payouts in 11 currencies, one API call
            </h3>
            <p className="text-sm sm:text-[15.5px] leading-relaxed max-w-3xl text-[#3A3A36]">
              Skip the correspondent-bank maze. Ledgerline routes USDC and EURC to local rails in seconds — built for treasuries that move money across borders daily.
            </p>
          </aside>

          {/* Crypto & Markets Section */}
          <section className="px-4 sm:px-10 lg:px-14 pb-8">
            <div className="flex items-center gap-4 mb-2">
              <h2 className="font-mono text-[11px] sm:text-[13px] font-semibold tracking-widest uppercase whitespace-nowrap">
                Crypto & Markets
              </h2>
              <span className="flex-1 h-px bg-hairline"></span>
              <span className="font-mono text-[10px] sm:text-xs text-slate whitespace-nowrap">
                {cryptoStories.length} stories
              </span>
            </div>
            
            <div className="flex flex-col">
              {cryptoStories.map(story => (
                <StoryItem key={story.id} story={story} />
              ))}
            </div>
          </section>

          {/* Learn & Courses Section */}
          <section className="px-4 sm:px-10 lg:px-14 pb-8">
            <div className="flex items-center gap-4 mb-2">
              <h2 className="font-mono text-[11px] sm:text-[13px] font-semibold tracking-widest uppercase whitespace-nowrap">
                Learn & Courses
              </h2>
              <span className="flex-1 h-px bg-hairline"></span>
              <span className="font-mono text-[10px] sm:text-xs text-slate whitespace-nowrap">
                {learningStories.length} resources
              </span>
            </div>
            
            <div className="flex flex-col">
              {learningStories.map(story => (
                <StoryItem key={story.id} story={story} />
              ))}
            </div>
          </section>

          {/* Quick Links */}
          <section className="px-4 sm:px-10 lg:px-14 py-6 border-t border-hairline">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-mono text-[11px] sm:text-[13px] font-semibold tracking-widest uppercase whitespace-nowrap">
                Quick Links
              </h2>
              <span className="flex-1 h-px bg-hairline"></span>
            </div>
            <ul className="flex flex-col gap-3.5 text-sm sm:text-[15.5px] leading-relaxed">
              <li>
                <a href="#" className="font-medium text-accent hover:underline">Xapo Bank updates BTC-backed loans</a>
                <span className="font-mono text-xs text-slate ml-2">(1 min)</span>
              </li>
              <li>
                <a href="#" className="font-medium text-accent hover:underline">SpaceX S-1 full analysis</a>
                <span className="font-mono text-xs text-slate ml-2">(6 min)</span>
              </li>
              <li>
                <a href="#" className="font-medium text-accent hover:underline">A public Sentry key can hijack Claude Code, Cursor & Codex</a>
                <span className="font-mono text-xs text-slate ml-2">(4 min)</span>
              </li>
            </ul>
          </section>

        </main>
        
        <Footer />
        
        <SubscribeModal 
          isOpen={isSubscribeModalOpen} 
          onClose={() => setIsSubscribeModalOpen(false)} 
        />
      </div>
    </div>
  );
}

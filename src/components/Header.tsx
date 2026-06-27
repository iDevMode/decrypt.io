interface HeaderProps {
  onSubscribeClick: () => void;
}

export default function Header({ onSubscribeClick }: HeaderProps) {
  return (
    <header className="border-b border-hairline pt-6 sm:pt-10 pb-6 sm:pb-8 px-4 sm:px-10 lg:px-14">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
        <div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-none tracking-tight uppercase">
            Daily Decrypt
          </h1>
          <p className="font-mono text-xs sm:text-[13px] text-slate mt-4 tracking-wide max-w-sm">
            The 5-minute brief on AI, crypto & the money moving both.
          </p>
        </div>
        
        <div className="flex flex-col md:items-end gap-4">
          <div className="font-mono text-xs text-slate md:text-right leading-relaxed flex flex-row md:flex-col justify-between md:justify-end w-full">
            <div>EST. 2026</div>
            <div>ISSUE&nbsp;Nº&nbsp;042</div>
          </div>
          <button 
            onClick={onSubscribeClick}
            className="font-mono text-xs sm:text-[13px] font-semibold tracking-widest uppercase bg-accent text-white px-5 py-2.5 sm:py-3 hover:bg-ink transition-colors mt-2 md:mt-0"
          >
            Subscribe
          </button>
        </div>
      </div>
      
      {/* Navigation Filter Menu */}
      <nav className="mt-8 pt-6 border-t border-hairline overflow-x-auto no-scrollbar">
        <ul className="flex gap-6 sm:gap-8 font-mono text-xs sm:text-[13px] uppercase tracking-widest whitespace-nowrap">
          <li>
            <button className="font-semibold text-ink border-b-2 border-ink pb-1 transition-colors hover:text-accent hover:border-accent">All Stories</button>
          </li>
          <li>
            <button className="font-medium text-slate pb-1 transition-colors hover:text-accent">Artificial Intelligence</button>
          </li>
          <li>
            <button className="font-medium text-slate pb-1 transition-colors hover:text-accent">Crypto & Markets</button>
          </li>
          <li>
            <button className="font-medium text-slate pb-1 transition-colors hover:text-accent">Investing</button>
          </li>
          <li>
            <button className="font-medium text-slate pb-1 transition-colors hover:text-accent">Learn & Courses</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

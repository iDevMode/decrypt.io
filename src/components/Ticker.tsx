import { TickerData } from '../types';

interface TickerProps {
  items: TickerData[];
  lastUpdated: string;
}

export default function Ticker({ items, lastUpdated }: TickerProps) {
  return (
    <div className="bg-ink text-white font-mono text-xs sm:text-sm flex gap-4 sm:gap-7 py-3 px-4 sm:px-6 flex-wrap items-center">
      <span className="text-[#8A8A82] tracking-widest font-semibold">MARKETS</span>
      {items.map((item) => (
        <span key={item.symbol} className="flex gap-1.5 sm:gap-2">
          <span className="font-semibold">{item.symbol}</span>
          <span className={item.isUp ? 'text-[#5FD39A]' : 'text-[#FF6B74]'}>
            {item.price} {item.isUp ? '▲' : '▼'}{item.change}
          </span>
        </span>
      ))}
      <span className="text-[#8A8A82] hidden md:inline ml-auto">as of {lastUpdated}</span>
    </div>
  );
}

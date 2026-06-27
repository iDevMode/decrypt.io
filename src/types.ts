export interface Story {
  id: string;
  date: string;
  category: string;
  title: string;
  readTime: string;
  summary: string;
}

export interface TickerData {
  symbol: string;
  price: string;
  change: string;
  isUp: boolean;
}

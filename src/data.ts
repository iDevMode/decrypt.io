import { Story, TickerData } from './types';

export const tickerData: TickerData[] = [
  { symbol: 'BTC', price: '63,140', change: '2.4%', isUp: false },
  { symbol: 'ETH', price: '3,012', change: '1.1%', isUp: true },
  { symbol: 'SOL', price: '148', change: '3.0%', isUp: true },
  { symbol: 'NVDA', price: '172.40', change: '0.8%', isUp: true },
];

export const aiStories: Story[] = [
  {
    id: 'ai-1',
    date: 'Jun 25',
    category: 'AI',
    title: 'Gemini 3.5 Flash gains Computer Use',
    readTime: '3 minute read',
    summary: "Google's smallest fast model can now drive a browser and desktop apps directly, closing the gap with agentic frontier systems on routine tool-use benchmarks."
  },
  {
    id: 'ai-2',
    date: 'Jun 25',
    category: 'AI',
    title: 'GLM-5.2 is the step change for open agents',
    readTime: '11 minute read',
    summary: 'A modest benchmark bump unlocked a wide range of new coding-harness use cases. The community has largely praised the model after hands-on testing.'
  },
  {
    id: 'ai-3',
    date: 'Jun 24',
    category: 'AI',
    title: 'Mistral OCR 4 sets a new bar for document intelligence',
    readTime: '9 minute read',
    summary: 'State-of-the-art extraction across tables, handwriting and multi-column layouts, positioned squarely at enterprise back-office automation.'
  }
];

export const learningStories: Story[] = [
  {
    id: 'learn-1',
    date: 'Jun 26',
    category: 'Course',
    title: 'Building autonomous AI agents for customer support',
    readTime: '45 min course',
    summary: 'Learn how to construct a RAG-powered agent using LangChain and Gemini, integrate it with Zendesk, and safely deploy it in a business environment.'
  },
  {
    id: 'learn-2',
    date: 'Jun 22',
    category: 'Guide',
    title: 'Prompt engineering patterns for structured data extraction',
    readTime: '15 min read',
    summary: 'A deep dive into schema enforcement, few-shot prompting, and reliable JSON generation for automated data pipelines.'
  }
];

export const cryptoStories: Story[] = [

  {
    id: 'crypto-1',
    date: 'Jun 25',
    category: 'Crypto',
    title: 'Ethereum Foundation cuts 54 staff in its largest restructuring',
    readTime: '2 minute read',
    summary: 'The foundation refocuses on protocol R&D and hands more ecosystem funding to independent teams, as ETH exchange reserves hit an all-time low.'
  },
  {
    id: 'crypto-2',
    date: 'Jun 24',
    category: 'Markets',
    title: 'Tokenized stocks are a net positive for crypto, not a threat',
    readTime: '1 minute read',
    summary: 'As spot prices gain, on-chain equity rails expand the addressable market rather than cannibalize it — though derivatives traders signal skepticism on a sustained rally.'
  }
];

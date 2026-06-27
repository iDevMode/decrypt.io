export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-12 sm:mt-16">
      <div className="px-4 sm:px-10 lg:px-14 py-12 sm:py-16 md:py-20 flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-8">
        <div className="text-center md:text-left">
          <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight mb-3">Get it daily, free.</h3>
          <p className="font-mono text-xs sm:text-[13px] text-[#9A9A92]">Join 40,000+ readers. One email, 06:00 ET.</p>
        </div>
        
        <form className="flex flex-col sm:flex-row w-full max-w-sm gap-2 sm:gap-0" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 font-mono text-xs sm:text-[13px] px-4 py-3 sm:py-4 bg-[#161613] text-white border border-[#2E2E2A] sm:border-r-0 focus:outline-none focus:border-accent transition-colors placeholder:text-slate"
            required
          />
          <button 
            type="submit" 
            className="font-mono text-xs sm:text-[13px] font-semibold uppercase tracking-widest bg-accent text-white px-5 sm:px-6 py-3 sm:py-4 hover:bg-white hover:text-ink transition-colors whitespace-nowrap"
          >
            Subscribe &rarr;
          </button>
        </form>
      </div>
      
      <div className="border-t border-[#2E2E2A] px-4 sm:px-10 lg:px-14 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="font-mono text-[10px] sm:text-xs text-[#9A9A92] tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Daily Decrypt
        </div>
        <div className="flex gap-6 font-mono text-[10px] sm:text-xs text-[#9A9A92] uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Archive</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
        </div>
      </div>
    </footer>
  );
}

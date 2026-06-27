export default function Hero() {
  return (
    <section className="px-4 sm:px-10 lg:px-14 py-16 sm:py-24 border-b border-hairline bg-white flex flex-col items-start text-left">
      <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8 max-w-4xl text-ink">
        The week in AI,<br />
        crypto & markets —<br />
        <span className="text-accent">decoded in five<br />minutes.</span>
      </h1>
      <p className="font-sans text-lg sm:text-xl text-slate mb-12 max-w-3xl leading-relaxed">
        One email every Monday at 06:00 ET. The stories that moved<br className="hidden sm:block" />
        the money, the models, and the markets — no noise, no filler.
      </p>
      
      <form className="flex flex-col sm:flex-row w-full max-w-2xl gap-3 sm:gap-0 mb-6" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="you@email.com" 
          className="flex-1 font-mono text-base px-5 py-4 border border-ink focus:outline-none focus:ring-1 focus:ring-ink transition-all placeholder:text-slate/60"
          required
        />
        <button 
          type="submit" 
          className="font-mono text-sm font-semibold uppercase tracking-widest bg-accent text-white px-8 py-4 hover:bg-accent/90 transition-colors whitespace-nowrap sm:-ml-px border border-ink sm:border-l-0"
        >
          Subscribe Free &rarr;
        </button>
      </form>
      <div className="font-mono text-[11px] sm:text-[13px] text-slate leading-loose">
        <div>Join 0 readers — be the first. <span className="mx-2 text-slate/40">&bull;</span> Free forever <span className="mx-2 text-slate/40">&bull;</span></div>
        <div className="mt-1">Unsubscribe anytime</div>
      </div>
    </section>
  );
}

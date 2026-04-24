import React from 'react';

const SizeGuide = () => {
  const tableData = [
    { cap: "500L", people: "1-2", use: "Small apartment", height: "85cm", dia: "80cm" },
    { cap: "1,000L", people: "2-4", use: "Standard home", height: "105cm", dia: "100cm" },
    { cap: "2,000L", people: "4-6", use: "Family home", height: "130cm", dia: "125cm" },
    { cap: "3,000L", people: "6-8", use: "Large home", height: "150cm", dia: "140cm" },
    { cap: "5,000L", people: "8-15", use: "Small business / Farm", height: "170cm", dia: "170cm" },
    { cap: "10,000L", people: "15+", use: "Commercial / Industrial", height: "210cm", dia: "210cm" },
  ];

  return (
    <div className="flex flex-col gap-24 pb-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pb-8 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <div className="container-max mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left Dark Panel */}
            <div className="dark-panel relative overflow-hidden rounded-[36px] px-6 py-10 text-white shadow-[0_36px_80px_-40px_rgba(9,34,41,0.75)] sm:px-10 sm:py-12 lg:px-12 lg:py-16">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_40%)]"></div>
              <div className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-primary/30 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-accent/20 blur-3xl"></div>
              <div className="relative z-10 space-y-8">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">Size guide</div>
                <div className="space-y-6">
                  <div className="text-sm font-medium uppercase tracking-[0.24em] text-white/50">Home / Size Guide</div>
                  <h1 className="max-w-3xl text-4xl font-display font-bold leading-tight sm:text-6xl lg:text-[4.5rem]">Compare tank sizes before you place your order</h1>
                  <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">The new size guide presents the same support information in a clearer, more buyer-friendly structure for households, institutions, and projects.</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row pt-2">
                  <a className="cta-primary inline-flex items-center justify-center gap-2" href="https://wa.me/254750600235" rel="noopener noreferrer" target="_blank">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L30 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    Ask on WhatsApp
                  </a>
                  <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/20" href="tel:254750600235">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    Call Our Team
                  </a>
                </div>
              </div>
            </div>

            {/* Right Cards */}
            <div className="grid gap-4">
              <div className="surface-panel relative overflow-hidden rounded-[28px] px-5 py-6 sm:px-6 shadow-sm border border-border/40">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">What to expect</div>
                    <p className="text-base font-medium leading-7 text-foreground">Capacity, people served, and common use are easier to compare at a glance.</p>
                  </div>
                </div>
              </div>
              <div className="surface-panel relative overflow-hidden rounded-[28px] px-5 py-6 sm:px-6 shadow-sm border border-border/40">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Built for Kenya</div>
                    <p className="text-base font-medium leading-7 text-foreground">The guide adds better context around domestic, commercial, and institutional demand.</p>
                  </div>
                </div>
              </div>
              <div className="surface-panel relative overflow-hidden rounded-[28px] px-5 py-6 sm:px-6 shadow-sm border border-border/40">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Buying Support</div>
                    <p className="text-base font-medium leading-7 text-foreground">WhatsApp advice remains one click away for buyers who need help choosing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="container-max mx-auto space-y-10">
          <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr] xl:items-end">
             <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Size guide</div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-display font-bold leading-tight sm:text-4xl lg:text-5xl text-foreground">Help buyers match capacity to household or project demand</h2>
                  <p className="text-lg leading-8 text-muted-foreground">The guide is now structured as decision support, not just a table. Buyers can compare people served, common use, and dimensions before reaching out.</p>
                </div>
             </div>
             <div className="surface-panel rounded-[32px] p-6 border border-border/40 bg-secondary/10">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white p-4 text-sm font-bold text-center text-foreground/70 shadow-sm">For homes and apartments</div>
                  <div className="rounded-2xl bg-white p-4 text-sm font-bold text-center text-foreground/70 shadow-sm">For schools, rentals, and farms</div>
                  <div className="rounded-2xl bg-white p-4 text-sm font-bold text-center text-foreground/70 shadow-sm">For large commercial demand</div>
                </div>
             </div>
          </div>

          <div className="surface-panel rounded-[36px] overflow-hidden border border-border/40 bg-white shadow-xl">
             <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
                <div className="bg-slate-900 p-8 sm:p-10 text-white space-y-8">
                  <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">Quick guidance</div>
                  <h3 className="text-3xl font-display font-bold leading-tight">Shortlist the right tank before you order</h3>
                  <div className="space-y-4">
                    <div className="p-5 rounded-[24px] bg-white/5 border border-white/10 text-base leading-relaxed text-white/70">Smaller capacities suit apartments and light domestic backup</div>
                    <div className="p-5 rounded-[24px] bg-white/5 border border-white/10 text-base leading-relaxed text-white/70">Mid-range capacities work well for family homes and rental use</div>
                    <div className="p-5 rounded-[24px] bg-white/5 border border-white/10 text-base leading-relaxed text-white/70">Larger tanks support institutions, farms, and heavier daily demand</div>
                  </div>
                  <div className="pt-4">
                    <a className="cta-primary w-full inline-flex items-center justify-center gap-3 py-4" href="https://wa.me/254750600235" rel="noopener noreferrer" target="_blank">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                      Ask on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="p-2 sm:p-6 overflow-x-auto">
                   <table className="w-full text-left min-w-[600px]">
                      <thead>
                        <tr className="border-b border-border/60">
                          <th className="px-4 py-6 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Capacity</th>
                          <th className="px-4 py-6 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">People served</th>
                          <th className="px-4 py-6 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Recommended use</th>
                          <th className="px-4 py-6 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Height</th>
                          <th className="px-4 py-6 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Diameter</th>
                          <th className="px-4 py-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">UV treated</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((row, idx) => (
                          <tr key={idx} className="border-b border-border/30 last:border-0 hover:bg-muted/30 transition-colors">
                            <td className="px-4 py-6 text-xl font-display font-bold text-foreground">{row.cap}</td>
                            <td className="px-4 py-6 text-base font-medium text-foreground/80">{row.people}</td>
                            <td className="px-4 py-6 text-base text-muted-foreground">{row.use}</td>
                            <td className="px-4 py-6 text-base font-medium text-foreground/80">{row.height}</td>
                            <td className="px-4 py-6 text-base font-medium text-foreground/80">{row.dia}</td>
                            <td className="px-4 py-6">
                              <div className="flex justify-center">
                                <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                   </table>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SizeGuide;

import React from 'react';
import { Link } from 'react-router-dom';

const UseCases = () => {
  const caseCards = [
    {
      title: "Residential homes",
      desc: "Everyday water storage and backup supply for homes that need cleaner buying guidance.",
      icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    },
    {
      title: "Farms and agriculture",
      desc: "Reliable storage for irrigation planning, livestock use, and seasonal water management.",
      icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
    },
    {
      title: "Schools and institutions",
      desc: "Practical capacities for dormitories, washrooms, kitchens, and shared utility blocks.",
      icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
    },
    {
      title: "Construction projects",
      desc: "Strong on-site supply support for building teams that need consistent water access.",
      icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    },
    {
      title: "Commercial properties",
      desc: "A clean fit for offices, retail premises, hospitality spaces, and managed compounds.",
      icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    },
    {
      title: "Rainwater harvesting",
      desc: "Store collected water more effectively with capacities suited to home and project systems.",
      icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
    }
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
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">Use cases</div>
                <div className="space-y-6">
                  <div className="text-sm font-medium uppercase tracking-[0.24em] text-white/50">Home / Use Cases</div>
                  <h1 className="max-w-3xl text-4xl font-display font-bold leading-tight sm:text-6xl lg:text-[4.5rem]">See how the tanks fit homes, rentals, schools, farms, and projects</h1>
                  <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">The updated structure now connects product browsing to real applications, helping buyers understand where each tank size makes sense.</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row pt-2">
                  <a className="cta-primary inline-flex items-center justify-center gap-2" href="https://wa.me/254750600235" rel="noopener noreferrer" target="_blank">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
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
                    <p className="text-base font-medium leading-7 text-foreground">Domestic and commercial use cases are grouped more clearly for faster decisions.</p>
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
                    <p className="text-base font-medium leading-7 text-foreground">The layout supports trust by showing practical fit instead of generic filler content.</p>
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
                    <p className="text-base font-medium leading-7 text-foreground">This page works as a bridge between discovery, catalogue browsing, and direct contact.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Use Cases Content Section */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="container-max mx-auto">
          <div className="grid gap-8 xl:grid-cols-[0.86fr_1.14fr]">
            <div className="dark-panel p-8 sm:p-10 rounded-[32px] border border-white/10 shadow-xl h-fit bg-slate-900">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-white">Use cases</div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-display font-bold leading-tight sm:text-4xl lg:text-5xl text-white">Built for the way water storage is actually used across Kenya</h2>
                  <p className="text-lg leading-8 text-white/70">The refreshed layout now positions use cases as decision support instead of decorative filler. Buyers can quickly connect tank sizes to real environments and buying situations.</p>
                </div>
                
                <div className="grid gap-3 sm:grid-cols-2 pt-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white/80">Homes and rental compounds</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white/80">Schools and institutions</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white/80">Farms and agro projects</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white/80">Commercial and construction sites</div>
                </div>

                <div className="pt-6">
                  <Link className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary-light" to="/products">
                    See capacities and prices <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {caseCards.map((card, idx) => (
                <div key={idx} className="surface-panel hover-lift rounded-[28px] p-6 border border-border/40 shadow-sm flex flex-col group transition-all hover:border-primary/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    {card.icon}
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-display font-bold text-foreground">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;

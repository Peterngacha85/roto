import React from 'react';
import { Link } from 'react-router-dom';

const Benefits = () => {
  const benefitCards = [
    {
      title: "Durable construction",
      desc: "Made from quality polyethylene for dependable long-term storage and everyday resilience.",
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      title: "UV treated material",
      desc: "Designed to perform in harsh Kenyan sun and reduce early wear from outdoor exposure.",
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
    },
    {
      title: "Multiple capacities",
      desc: "A broad range from 1,000L to 20,000L gives buyers a cleaner path to the right size.",
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
    },
    {
      title: "Domestic to commercial use",
      desc: "A practical match for homes, rental compounds, institutions, farms, and business sites.",
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    },
    {
      title: "Easy to clean design",
      desc: "The updated structure makes routine cleaning simpler for maintaining water quality.",
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      title: "Nationwide delivery",
      desc: "Coordinate delivery from Nairobi to any location with direct sales team support.",
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
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
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">Why Roto</div>
                <div className="space-y-6">
                  <div className="text-sm font-medium uppercase tracking-[0.24em] text-white/50">Home / Why Roto</div>
                  <h1 className="max-w-3xl text-4xl font-display font-bold leading-tight sm:text-6xl lg:text-[4.5rem]">Why these tanks work for practical Kenyan water storage needs</h1>
                  <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">This page reframes the value story with clearer business credibility, stronger messaging, and a more professional visual hierarchy.</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row pt-2">
                  <a className="cta-primary inline-flex items-center justify-center gap-2" href="https://wa.me/254750600235?text=Hello%20Roto%20Tanks%20Kenya%2C%20I%20am%20interested%20in%20buying%20a%20water%20tank.%20Please%20assist%20me%20with%20pricing%20and%20delivery%20details." rel="noopener noreferrer" target="_blank">
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
                    <p className="text-base font-medium leading-7 text-foreground">Durability, UV protection, and broad capacity coverage are easier to understand.</p>
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
                    <p className="text-base font-medium leading-7 text-foreground">The page is structured to support both domestic and commercial buyers.</p>
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
                    <p className="text-base font-medium leading-7 text-foreground">Clear internal paths guide people back to the catalogue and size guide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Benefits Content Section */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="container-max mx-auto">
          <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
            <div className="surface-card p-8 sm:p-10 rounded-[32px] border border-border/40 shadow-sm h-fit">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Why choose our tanks</div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-display font-bold leading-tight sm:text-4xl lg:text-5xl text-foreground">Reasons buyers can trust these tanks quickly and keep moving</h2>
                  <p className="text-lg leading-8 text-muted-foreground">This section is now more sales-focused: durability, climate readiness, size flexibility, and simpler ordering support are presented as practical buying reasons.</p>
                </div>
                
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4 px-6 py-5 rounded-2xl bg-secondary/20 border border-border/30">
                    <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary"></div>
                    <p className="text-base leading-relaxed text-foreground/80">Water storage that feels dependable for serious buyers</p>
                  </div>
                  <div className="flex items-start gap-4 px-6 py-5 rounded-2xl bg-secondary/20 border border-border/30">
                    <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary"></div>
                    <p className="text-base leading-relaxed text-foreground/80">Clear messaging for homes, rentals, schools, farms, and commercial sites</p>
                  </div>
                  <div className="flex items-start gap-4 px-6 py-5 rounded-2xl bg-secondary/20 border border-border/30">
                    <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary"></div>
                    <p className="text-base leading-relaxed text-foreground/80">A more conversion-focused path into the tank catalogue</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 pt-6 sm:flex-row">
                  <a className="cta-primary inline-flex items-center justify-center gap-3 px-8 py-4" href="https://wa.me/254750600235?text=Hello%20Roto%20Tanks%20Kenya%2C%20I%20am%20interested%20in%20buying%20a%20water%20tank.%20Please%20assist%20me%20with%20pricing%20and%20delivery%20details." rel="noopener noreferrer" target="_blank">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    Order on WhatsApp
                  </a>
                  <Link className="inline-flex items-center justify-center rounded-full border border-border/80 bg-background px-8 py-4 text-base font-bold text-foreground transition hover:bg-muted" to="/products">
                    View tank prices
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefitCards.map((card, idx) => (
                <div key={idx} className="surface-panel hover-lift rounded-[28px] px-8 py-10 border border-border/40 shadow-sm flex flex-col group transition-all hover:border-primary/30">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      {card.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/30">0{idx + 1}</span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-display font-bold text-foreground">{card.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">{card.desc}</p>
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

export default Benefits;

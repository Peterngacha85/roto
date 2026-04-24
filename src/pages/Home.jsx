import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden px-4 pb-6 pt-10 sm:px-6 sm:pb-10 lg:px-8 lg:pb-12">
        <div className="absolute inset-0 hidden lg:block">
          <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[130px]"></div>
          <div className="absolute bottom-0 right-0 h-[440px] w-[440px] rounded-full bg-accent/10 blur-[140px]"></div>
        </div>
        <div className="container-max relative">
          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[560px] overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,#08262b_0%,#0a2b31_55%,#0e3740_100%)] shadow-[0_30px_90px_-50px_rgba(9,34,41,0.85)] lg:min-h-[640px]">
              <img alt="Water storage tanks in a Kenyan compound" className="absolute inset-0 h-full w-full object-cover lg:hidden" src="/assets/hero-bg-DNKd6YXX.jpg" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,14,17,0.2),rgba(5,20,24,0.82)_45%,rgba(7,25,29,0.96)_100%)] lg:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_30%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(24,174,186,0.22),_transparent_42%)]"></div>
              <div className="relative z-10 flex h-full flex-col justify-between px-5 pb-5 pt-32 sm:px-7 sm:pb-7 sm:pt-36 lg:px-9 lg:pb-9 lg:pt-32">
                <div className="space-y-5 lg:max-w-[34rem]">
                  <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">Water tanks delivered in Kenya</div>
                  <div className="space-y-4">
                    <h1 className="max-w-3xl text-[2.35rem] font-display font-semibold leading-[1.04] text-white sm:text-5xl lg:text-[4.1rem]">Affordable water tanks delivered fast.</h1>
                    <p className="max-w-2xl text-base leading-7 text-white/75 sm:text-lg">Strong roto tanks for homes, rentals, farms, schools, and business sites. See prices quickly, choose a size, and order on WhatsApp or call our team.</p>
                  </div>
                  <div className="rounded-[28px] border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-md sm:max-w-[24rem]">
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">Starting price</div>
                    <div className="mt-2 text-4xl font-display font-semibold text-white">KSh 5,500</div>
                  </div>
                  <div className="grid gap-3 sm:max-w-[32rem] sm:grid-cols-2">
                    <a className="cta-primary inline-flex items-center justify-center gap-2" href="https://wa.me/254750600235" rel="noopener noreferrer" target="_blank">Order on WhatsApp</a>
                    <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/20" href="tel:254750600235">Call now</a>
                    <Link className="cta-secondary inline-flex items-center justify-center gap-2 sm:col-span-2" to="/products">View Products</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden gap-5 lg:grid">
              <div className="surface-panel relative overflow-hidden rounded-[34px] px-7 py-7">
                <div className="grid gap-6 xl:grid-cols-[0.52fr_0.48fr] xl:items-center">
                  <div className="space-y-4">
                    <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">Fast-moving sizes</div>
                    <h2 className="text-3xl font-display font-semibold leading-tight text-foreground">Buyers can compare prices and move to action faster.</h2>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between rounded-[24px] border border-border/70 bg-background/80 px-4 py-3.5">
                        <div className="text-xl font-display font-semibold text-foreground">2,000L</div>
                        <div className="text-lg font-display font-semibold text-foreground">KSh 11,000</div>
                      </div>
                      <div className="flex items-center justify-between rounded-[24px] border border-border/70 bg-background/80 px-4 py-3.5">
                        <div className="text-xl font-display font-semibold text-foreground">5,000L</div>
                        <div className="text-lg font-display font-semibold text-foreground">KSh 27,500</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[30px] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,240,232,0.95))]">
                    <img alt="Roto water tank" className="relative z-10 h-[320px] w-auto object-contain drop-shadow-2xl" src="/assets/hero-tank-BGNsYmIM.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="container-max">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="surface-panel rounded-[28px] p-6 space-y-4">
              <h3 className="text-xl font-display font-semibold text-foreground">Domestic Use</h3>
              <p className="text-muted-foreground leading-7">Reliable water storage for Kenyan homes and rental compounds.</p>
              <Link to="/use-cases" className="text-primary font-semibold hover:underline">Learn more →</Link>
            </div>
            <div className="surface-panel rounded-[28px] p-6 space-y-4">
              <h3 className="text-xl font-display font-semibold text-foreground">Agriculture</h3>
              <p className="text-muted-foreground leading-7">Strong tanks for irrigation, livestock, and farm water management.</p>
              <Link to="/use-cases" className="text-primary font-semibold hover:underline">Learn more →</Link>
            </div>
            <div className="surface-panel rounded-[28px] p-6 space-y-4">
              <h3 className="text-xl font-display font-semibold text-foreground">Institutions</h3>
              <p className="text-muted-foreground leading-7">Large capacity solutions for schools, hospitals, and projects.</p>
              <Link to="/use-cases" className="text-primary font-semibold hover:underline">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

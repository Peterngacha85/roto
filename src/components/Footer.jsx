import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="px-4 pb-24 pt-10 sm:px-6 md:pb-6 lg:px-8">
      <div className="container-max">
        <div className="dark-panel relative overflow-hidden px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="absolute -right-8 top-0 h-36 w-36 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-accent/20 blur-3xl"></div>
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">Ready to order?</div>
              <h2 className="max-w-2xl text-3xl font-display font-semibold leading-tight sm:text-4xl">Let's help you choose the right water tank and organise delivery with confidence.</h2>
              <p className="max-w-2xl text-base leading-7 text-white/70">Talk to our team for home supply, rental units, schools, farms, and business installations across Kenya.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a className="cta-primary inline-flex items-center justify-center gap-2" href="https://wa.me/254750600235?text=Hello%20Roto%20Tanks%20Kenya%2C%20I%20am%20interested%20in%20buying%20a%20water%20tank.%20Please%20assist%20me%20with%20pricing%20and%20delivery%20details." rel="noopener noreferrer" target="_blank">
                <svg className="lucide lucide-message-circle h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>Order on WhatsApp
              </a>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/20" href="tel:254750600235">
                <svg className="lucide lucide-phone-call h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                  <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                </svg>Call +254 750 600235
              </a>
            </div>
          </div>
          <div className="soft-divider mt-8"></div>
          <div className="relative mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.65fr_0.65fr_0.9fr]">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                  <img alt="Roto Tanks Kenya" className="h-9 w-auto brightness-0 invert" src="/assets/roto-logo-BblSR1Xi.png" />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white/50">Roto Tanks Kenya</div>
                  <div className="text-sm text-white/70">Reliable water storage for Kenyan homes, projects, and businesses.</div>
                </div>
              </div>
              <div className="grid gap-3 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <svg className="lucide lucide-map-pin mt-0.5 h-4 w-4 text-accent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg><span>Industrial Area, Nairobi, Kenya</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="lucide lucide-clock3 mt-0.5 h-4 w-4 text-accent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16.5 12"></polyline>
                  </svg><span>Mon - Sat: 8:00am - 6:00pm</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/50">Explore</h3>
              <div className="grid gap-3">
                <Link className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white" to="/products">Tank catalogue</Link>
                <Link className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white" to="/benefits">Why choose Roto Tanks</Link>
                <Link className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white" to="/use-cases">Use cases</Link>
                <Link className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white" to="/size-guide">Size guide</Link>
                <Link className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white" to="/faq">FAQs</Link>
                <Link className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white" to="/contact">Contact</Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/50">Popular sizes</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-[0.2em] text-white/70">1,000L</span>
                <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-[0.2em] text-white/70">2,000L</span>
                <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-[0.2em] text-white/70">5,000L</span>
                <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-[0.2em] text-white/70">10,000L</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/50">Direct contact</h3>
              <div className="grid gap-3 text-sm">
                <a className="text-white/70 transition-colors hover:text-white" href="tel:254750600235">+254 750 600235</a>
                <a className="text-white/70 transition-colors hover:text-white" href="mailto:rototank15@gmail.com">rototank15@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="relative mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Roto Tanks Kenya. All rights reserved.</p>
            <p>Professional water storage solutions for homes, rentals, schools, farms, and business sites.</p>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <a aria-label="Chat on WhatsApp" className="fixed bottom-5 right-4 z-50 hidden items-center gap-3 rounded-full border border-[#25D366]/25 bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_24px_70px_-30px_rgba(37,211,102,0.9)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105 md:inline-flex md:bottom-6 md:right-6" href="https://wa.me/254750600235?text=Hello%20Roto%20Tanks%20Kenya%2C%20I%20am%20interested%20in%20buying%20a%20water%20tank.%20Please%20assist%20me%20with%20pricing%20and%20delivery%20details." rel="noopener noreferrer" target="_blank">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
          <svg className="lucide lucide-message-circle h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
          </svg>
        </span>
        <span>Order on WhatsApp</span>
      </a>
      
      {/* Mobile Sticky Actions */}
      <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50 flex flex-col items-end gap-3 md:hidden">
        <a className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/95 px-4 py-3 text-sm font-semibold text-foreground shadow-[0_22px_45px_-24px_rgba(9,34,41,0.55)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-background" href="tel:254750600235">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg className="lucide lucide-phone-call h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
              <path d="M14.05 6A5 5 0 0 1 18 10"></path>
            </svg>
          </span>
          <span>Call</span>
        </a>
        <a className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_24px_55px_-22px_rgba(37,211,102,0.85)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105" href="https://wa.me/254750600235?text=Hello%20Roto%20Tanks%20Kenya%2C%20I%20am%20interested%20in%20buying%20a%20water%20tank.%20Please%20assist%20me%20with%20pricing%20and%20delivery%20details." rel="noopener noreferrer" target="_blank">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
            <svg className="lucide lucide-message-circle h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
            </svg>
          </span>
          <span>WhatsApp</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

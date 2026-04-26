import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What sizes of water tanks do you offer?",
      a: "We offer a wide range of roto-moulded water tanks starting from 1,000L up to 20,000L. Common sizes include 2,000L, 3,000L, 5,000L, and 10,000L. Custom sizes for large projects are also available upon request."
    },
    {
      q: "Are your tanks food-grade safe?",
      a: "Yes, all our Roto tanks are manufactured using 100% virgin, food-grade polyethylene material. They are UV-stabilized to prevent algae growth and ensure your water remains safe for drinking and domestic use."
    },
    {
      q: "Do you deliver nationwide in Kenya?",
      a: "Absolutely! We coordinate deliveries across Kenya, including Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and upcountry locations. Delivery costs and timelines depend on your specific location and the tank size ordered."
    },
    {
      q: "What warranty do your tanks come with?",
      a: "Our tanks come with a manufacturer's warranty against defects. Roto tanks are built to last over 20 years when installed correctly on a flat, level surface."
    },
    {
      q: "How do I choose the right tank size?",
      a: "Our size guide helps you calculate capacity based on your household size or project needs. Typically, a family of 4 needs at least 2,000L to 3,000L for reliable backup."
    },
    {
      q: "Can I order in bulk for a project?",
      a: "Yes, we specialize in supplying large-scale projects, schools, and institutions. Contact our sales team for bulk pricing and project coordination support."
    },
    {
      q: "How do I place an order?",
      a: "Ordering is simple! You can click the 'Order on WhatsApp' button to chat with our sales team directly, or call us at +254 750 007617. We will help you choose the right size, provide a quote, and arrange delivery."
    }
  ];

  return (
    <div className="flex flex-col gap-24 pb-32">
      {/* Reference Hero Section from faq.html */}
      <section className="relative overflow-hidden px-4 pb-8 pt-10 sm:px-6 sm:pt-12 lg:px-8">
        <div className="container-max mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left Dark Panel */}
            <div className="dark-panel relative overflow-hidden rounded-[36px] px-6 py-10 text-white shadow-[0_36px_80px_-40px_rgba(9,34,41,0.75)] sm:px-10 sm:py-12 lg:px-12 lg:py-16">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_40%)]"></div>
              <div className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-primary/30 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-accent/20 blur-3xl"></div>
              <div className="relative z-10 space-y-8">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">FAQs</div>
                <div className="space-y-6">
                  <div className="text-sm font-medium uppercase tracking-[0.24em] text-white/50">Home / FAQS</div>
                  <h1 className="max-w-3xl text-4xl font-display font-bold leading-tight sm:text-6xl lg:text-[4.5rem]">Answers to the questions buyers ask before ordering</h1>
                  <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">This page now feels like a practical support layer in the sales journey, making it easier to address uncertainty and move toward a confident enquiry.</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row pt-2">
                  <a className="cta-primary inline-flex items-center justify-center gap-2" href="https://wa.me/254750007617?text=Hello%20Roto%20Tanks%20Kenya%2C%20I%20am%20interested%20in%20buying%20a%20water%20tank.%20Please%20assist%20me%20with%20pricing%20and%20delivery%20details." rel="noopener noreferrer" target="_blank">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    Ask on WhatsApp
                  </a>
                  <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/20" href="tel:254750007617">
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
                    <p className="text-base font-medium leading-7 text-foreground">Common questions about size, delivery, safety, and ordering are easier to scan.</p>
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
                    <p className="text-base font-medium leading-7 text-foreground">The layout supports faster mobile reading without feeling like a template accordion page.</p>
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
                    <p className="text-base font-medium leading-7 text-foreground">Buyers still have direct routes into contact and WhatsApp support from anywhere on the site.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ Content Section */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="container-max mx-auto">
          <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-10 lg:sticky lg:top-48 h-fit">
              <div className="space-y-8">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">FAQS</div>
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground leading-[1.1]">Answering the practical questions buyers ask before placing an order</h2>
                <p className="text-xl text-muted-foreground leading-8">The FAQ now feels more like a support tool than a generic accordion block, helping buyers move from uncertainty to action.</p>
              </div>
              
              <a className="cta-primary inline-flex items-center gap-3 px-10 py-5 text-lg" href="https://wa.me/254750007617?text=Hello%20Roto%20Tanks%20Kenya%2C%20I%20am%20interested%20in%20buying%20a%20water%20tank.%20Please%20assist%20me%20with%20pricing%20and%20delivery%20details." rel="noopener noreferrer" target="_blank">
                 <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                 Ask on WhatsApp
              </a>

              <div className="space-y-4 pt-6">
                <div className="rounded-[28px] border border-border/50 bg-secondary/20 p-6 text-base font-semibold text-muted-foreground/80">Capacity guidance for homes and projects</div>
                <div className="rounded-[28px] border border-border/50 bg-secondary/20 p-6 text-base font-semibold text-muted-foreground/80">Delivery, warranty, and material safety questions</div>
                <div className="rounded-[28px] border border-border/50 bg-secondary/20 p-6 text-base font-semibold text-muted-foreground/80">Clear next steps for ordering or requesting support</div>
              </div>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="surface-panel rounded-[32px] border border-border/50 overflow-hidden transition-all duration-300 bg-white hover:shadow-xl">
                  <button 
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="flex w-full items-center justify-between p-8 text-left group"
                  >
                    <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{faq.q}</span>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full border border-border/50 transition-all duration-300 ${openIndex === idx ? 'bg-primary border-primary text-white rotate-180 shadow-lg' : 'text-muted-foreground group-hover:border-primary/50'}`}>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-8 pb-8 text-muted-foreground leading-8 text-lg border-t border-border/20 pt-6 mt-2">
                      {faq.a}
                    </div>
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

export default FAQ;

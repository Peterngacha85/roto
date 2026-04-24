import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hello Roto Tanks Kenya,\n\nI would like to request a quote.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/254750600235?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col gap-12 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pb-8 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(19,124,128,0.18),_transparent_60%)]"></div>
        <div className="container-max relative mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#0d2f35_0%,#113f49_45%,#0b252b_100%)] px-6 py-8 text-white shadow-[0_36px_80px_-40px_rgba(9,34,41,0.75)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_40%)]"></div>
              <div className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-primary/30 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-accent/20 blur-3xl"></div>
              <div className="relative space-y-6">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">Contact</div>
                <div className="space-y-4">
                  <div className="text-sm font-medium uppercase tracking-[0.24em] text-white/50">
                    <span className="hover:text-white transition-colors cursor-pointer">Home</span>
                    <span className="mx-2 text-white/30">/</span>
                    <span>Contact</span>
                  </div>
                  <h1 className="max-w-3xl text-4xl font-display font-semibold leading-tight sm:text-5xl lg:text-[3.65rem]">Speak to the team and request your quote with less friction</h1>
                  <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">The contact page is now designed like a proper conversion page, with clear channels, stronger trust cues, and a direct WhatsApp handoff.</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href="https://wa.me/254750600235" target="_blank" rel="noopener noreferrer" className="cta-primary inline-flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-4 w-4"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
                    Ask on WhatsApp
                  </a>
                  <a href="tel:254750600235" className="cta-secondary inline-flex items-center justify-center gap-2 border-white/10 bg-white/10 text-white hover:bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call h-4 w-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
                    Call Our Team
                  </a>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="surface-panel relative overflow-hidden rounded-[28px] px-5 py-6 sm:px-6 border border-border/40 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check h-5 w-5"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">What to expect</div>
                    <p className="text-base font-medium leading-7 text-foreground">Phone, WhatsApp, email, and quote request options are all presented more clearly.</p>
                  </div>
                </div>
              </div>
              <div className="surface-panel relative overflow-hidden rounded-[28px] px-5 py-6 sm:px-6 border border-border/40 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check h-5 w-5"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Built for Kenya</div>
                    <p className="text-base font-medium leading-7 text-foreground">The page sets better response expectations and location trust for Kenyan buyers.</p>
                  </div>
                </div>
              </div>
              <div className="surface-panel relative overflow-hidden rounded-[28px] px-5 py-6 sm:px-6 border border-border/40 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-5 w-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Buying support</div>
                    <p className="text-base font-medium leading-7 text-foreground">The quote form opens WhatsApp directly with prefilled details for quicker support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="contact" className="section-padding py-16">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr]">
            <div className="dark-panel relative overflow-hidden px-6 py-7 sm:px-8 sm:py-8 rounded-[32px] border border-white/10 shadow-xl bg-slate-900">
              <div className="absolute -right-8 top-0 h-28 w-28 rounded-full bg-primary/20 blur-3xl"></div>
              <div className="relative space-y-7">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] border-white/10 bg-white/10 text-white/70">Contact and ordering</div>
                  <div className="space-y-3">
                    <h2 className="text-3xl font-display font-semibold leading-tight sm:text-4xl lg:text-5xl text-white">A cleaner closing section with direct action built in</h2>
                    <p className="max-w-2xl text-base leading-7 sm:text-lg text-white/70">This final section now works like a real sales close: clear contact options, response expectations, and a quote form that sends straight to WhatsApp.</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  <a href="tel:254750600235" className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/10 px-4 py-4 text-white transition-colors hover:bg-white/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call h-5 w-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">Call sales</div>
                      <div className="mt-1 text-sm font-medium text-white/80">+254 750 600235</div>
                    </div>
                  </a>
                  <a href="https://wa.me/254750600235" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/10 px-4 py-4 text-white transition-colors hover:bg-white/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-5 w-5"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">WhatsApp orders</div>
                      <div className="mt-1 text-sm font-medium text-white/80">+254 750 600235</div>
                    </div>
                  </a>
                  <a href="mailto:rototank15@gmail.com" className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/10 px-4 py-4 text-white transition-colors hover:bg-white/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-5 w-5"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">Email us</div>
                      <div className="mt-1 text-sm font-medium text-white/80">rototank15@gmail.com</div>
                    </div>
                  </a>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-white/10 bg-white/10 px-4 py-4">
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock3 h-5 w-5 text-accent"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16.5 12"></polyline></svg>
                      <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50">Response expectation</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/70">Fast support during working hours for quotes, capacity advice, and delivery planning.</p>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-white/10 px-4 py-4">
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-5 w-5 text-accent"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50">Base location</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/70">Industrial Area, Nairobi, with support for delivery coordination across Kenya.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="surface-card px-5 py-6 sm:px-7 sm:py-7 bg-white rounded-[28px] border border-border/80 shadow-sm h-fit">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Request a quote</div>
                  <h3 className="mt-2 text-2xl font-display font-semibold text-foreground sm:text-3xl">Send your enquiry directly to our WhatsApp line</h3>
                </div>
                <div className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-foreground h-fit">No unexpected redirects</div>
              </div>
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground ml-1">Full name</label>
                    <input 
                      type="text" 
                      name="name"
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-[20px] border border-border/80 bg-background/80 px-4 py-3.5 text-sm text-foreground outline-none transition duration-200 placeholder:text-muted-foreground/70 focus:border-primary/40 focus:ring-4 focus:ring-primary/10" 
                      placeholder="John Kamau" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground ml-1">Phone number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-[20px] border border-border/80 bg-background/80 px-4 py-3.5 text-sm text-foreground outline-none transition duration-200 placeholder:text-muted-foreground/70 focus:border-primary/40 focus:ring-4 focus:ring-primary/10" 
                      placeholder="0700 000 000" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground ml-1">Email address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-[20px] border border-border/80 bg-background/80 px-4 py-3.5 text-sm text-foreground outline-none transition duration-200 placeholder:text-muted-foreground/70 focus:border-primary/40 focus:ring-4 focus:ring-primary/10" 
                    placeholder="name@email.com" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground ml-1">What do you need?</label>
                  <textarea 
                    name="message"
                    required 
                    rows="6" 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-[20px] border border-border/80 bg-background/80 px-4 py-3.5 text-sm text-foreground outline-none transition duration-200 placeholder:text-muted-foreground/70 focus:border-primary/40 focus:ring-4 focus:ring-primary/10 resize-none" 
                    placeholder="I am interested in buying a 2,000L tank for a family home in Nairobi..."
                  ></textarea>
                </div>
                <div className="grid gap-3 rounded-[24px] border border-border/80 bg-secondary/40 px-4 py-4 text-sm text-muted-foreground sm:grid-cols-2">
                  <div>Use the form for price confirmation, delivery guidance, or size advice.</div>
                  <div>Submitting opens WhatsApp directly with your details prefilled for a faster response.</div>
                </div>
                <button type="submit" className="cta-primary inline-flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send h-4 w-4"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                  Send quote request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

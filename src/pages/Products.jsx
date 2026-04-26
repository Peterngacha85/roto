import React from 'react';

const Products = () => {
  const products = [
    { size: "1,000L", price: "5,500", desc: "Ideal for small households and apartments", tags: ["Small home", "Apartment"] },
    { size: "1,500L", price: "8,250", desc: "Perfect for growing homes", tags: ["Growing home", "Medium use"] },
    { size: "2,000L", price: "11,000", desc: "Great for medium homes and small businesses", tags: ["Family home", "Small business"] },
    { size: "2,500L", price: "13,750", desc: "Reliable storage for larger families", tags: ["Large family", "Reliable"] },
    { size: "3,000L", price: "16,500", desc: "Suitable for larger homes and institutions", tags: ["Institution", "Large home"] },
    { size: "4,000L", price: "22,000", desc: "Strong mid-size solution for homes and farms", tags: ["Farm use", "Mid-size"] },
    { size: "5,000L", price: "27,500", desc: "Commercial grade for schools and farms", tags: ["School use", "Farm supply"] },
    { size: "10,000L", price: "49,500", desc: "Industrial capacity for large-scale needs", tags: ["Industrial", "Large project"] },
    { size: "20,000L", price: "99,000", desc: "Maximum capacity for major institutions", tags: ["Major project", "Maximum storage"] },
  ];

  return (
    <main className="container-max py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-4 text-center pt-10 lg:pt-16">
        <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">Tank Catalogue</div>
        <h1 className="text-4xl font-display font-bold text-foreground sm:text-5xl">Our Product Range</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">Compare capacities and prices for Kenyan homes, farms, and projects.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, idx) => (
          <article key={idx} className="dark-panel relative overflow-hidden px-6 py-8 flex flex-col h-full rounded-[34px]">
            <div className="absolute -right-6 top-0 h-24 w-24 rounded-full bg-accent/10 blur-3xl"></div>
            <div className="relative flex flex-col h-full">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-4xl font-display font-semibold text-white">{product.size}</h3>
                <div className="rounded-[22px] bg-white px-4 py-3 text-right text-foreground shadow-lg shrink-0">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">Price</div>
                  <div className="mt-1 text-2xl font-display font-semibold">KSh {product.price}</div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row flex-1 items-center gap-4 rounded-[26px] border border-white/10 bg-white/10 p-5">
                <img alt={`${product.size} tank`} className="h-24 sm:h-28 w-auto object-contain drop-shadow-xl" src="/assets/hero-tank-BGNsYmIM.png" />
                <div className="text-center sm:text-left">
                  <p className="text-sm leading-6 text-white/70">{product.desc}</p>
                  <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2">
                    {product.tags.map(tag => (
                      <span key={tag} className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-3">
                <a className="cta-primary inline-flex w-full items-center justify-center gap-2" href={`https://wa.me/254750007617?text=Hello%20Roto%20Tanks%20Kenya%2C%20I%20would%20like%20to%20order%20the%20${product.size}%20water%20tank.`} rel="noopener noreferrer" target="_blank">
                  <svg className="lucide lucide-message-circle h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>Order on WhatsApp
                </a>
                <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/20" href="tel:254750007617">
                   <svg className="lucide lucide-phone-call h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                    <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                  </svg>Call Sales
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Products;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showCreamBg = !isHomePage || isScrolled || isMenuOpen;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tanks', path: '/products' },
    { name: 'Why Roto', path: '/benefits' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Size Guide', path: '/size-guide' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300 px-4 py-4 sm:px-6 lg:px-8">
      <div className="container-max mx-auto">
        <div 
          style={{ backgroundColor: showCreamBg ? '#fefdfb' : 'rgba(13,47,53,0.68)' }}
          className={`rounded-[30px] border px-4 py-3 transition-all duration-300 sm:px-6 shadow-[0_30px_80px_-50px_rgba(9,34,41,0.85)] ${
            showCreamBg 
              ? 'border-border/50 text-foreground !backdrop-blur-none opacity-100' 
              : 'border-white/10 text-white backdrop-blur-xl'
          }`}
        >
          <div className="flex items-center gap-3 lg:gap-5">
            <Link className="flex min-w-0 items-center gap-3" to="/" onClick={() => setIsMenuOpen(false)}>
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 ${
                showCreamBg ? 'border-primary/10 bg-primary/5' : 'border-white/10 bg-white/10'
              }`}>
                <img alt="Roto Tanks Kenya" className={`h-8 w-auto transition-all duration-300 ${showCreamBg ? '' : 'brightness-0 invert'}`} src="/assets/roto-logo-BblSR1Xi.png" />
              </div>
              <div className="min-w-0">
                <div className={`truncate text-sm font-semibold uppercase tracking-[0.28em] transition-all duration-300 ${
                  showCreamBg ? 'text-primary' : 'text-white'
                }`}>Roto Tanks Kenya</div>
                <div className={`truncate text-sm transition-all duration-300 ${
                  showCreamBg ? 'text-foreground' : 'text-white'
                }`}>Water storage solutions</div>
              </div>
            </Link>
            <div className="hidden flex-1 items-center justify-center lg:flex">
              <div className={`flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-300 ${
                showCreamBg ? 'bg-secondary/80' : 'bg-white/10'
              }`}>
                {navLinks.map((link) => (
                  <Link 
                    key={link.path}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      location.pathname === link.path
                        ? (showCreamBg ? 'bg-background text-primary shadow-sm' : 'bg-white/20 text-white')
                        : (showCreamBg ? 'text-foreground hover:bg-black/5' : 'text-white hover:bg-white/10')
                    }`} 
                    to={link.path}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden items-center gap-2 lg:flex">
              <a className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition duration-300 ${
                showCreamBg ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white/10 text-white hover:bg-white/20'
              }`} href="https://wa.me/254750007617?text=Hello%20Roto%20Tanks%20Kenya%2C%20I%20am%20interested%20in%20buying%20a%20water%20tank.%20Please%20assist%20me%20with%20pricing%20and%20delivery%20details." rel="noopener noreferrer" target="_blank">
                <svg className="lucide lucide-message-circle h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>WhatsApp
              </a>
              <a className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold border transition duration-300 ${
                showCreamBg ? 'border-primary/20 bg-primary/5 text-primary hover:bg-primary/10' : 'border-white/10 bg-transparent text-white hover:bg-white/10'
              }`} href="tel:254750007617">
                <svg className="lucide lucide-phone-call h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                  <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                </svg>Call
              </a>
            </div>
            <button 
              aria-label="Toggle menu" 
              className={`ml-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl border lg:hidden transition-all duration-300 ${
                showCreamBg ? 'border-border bg-secondary text-foreground' : 'border-white/10 bg-white/10 text-white'
              }`} 
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="lucide lucide-menu h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 border-t border-border/50 pt-4 pb-2 animate-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-2xl text-base font-semibold transition-colors ${
                      location.pathname === link.path
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="grid grid-cols-2 gap-3 mt-4 px-2">
                  <a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm" href="https://wa.me/254750007617?text=Hello%20Roto%20Tanks%20Kenya%2C%20I%20am%20interested%20in%20buying%20a%20water%20tank.%20Please%20assist%20me%20with%20pricing%20and%20delivery%20details." rel="noopener noreferrer" target="_blank">
                    WhatsApp
                  </a>
                  <a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm font-semibold text-primary" href="tel:254750007617">
                    Call Sales
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className={`mt-3 hidden items-center gap-3 border-t pt-3 text-xs font-medium uppercase tracking-[0.22em] lg:flex transition-all duration-300 ${
            showCreamBg ? 'border-border/50 text-muted-foreground' : 'border-white/10 text-white/50'
          }`}>
            <span className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent"></span>Delivery coordination across Kenya</span>
            <span className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent"></span>Direct WhatsApp ordering support</span>
            <span className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent"></span>Mon - Sat sales assistance</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

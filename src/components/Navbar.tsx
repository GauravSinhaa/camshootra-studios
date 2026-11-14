import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Photography', href: '#portfolio' },
  { label: 'Cinema & Motion', href: '#motion' },
  { label: 'Services', href: '#services' },
  { label: 'Methodology', href: '#process' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-[#C8A46B]/15 bg-[#0A0908]/88 py-3.5 backdrop-blur-xl'
          : 'bg-gradient-to-b from-[#0A0908]/90 to-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Monogram & Wordmark */}
        <a href="#top" className="group flex items-center gap-3.5">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A46B]/40 bg-[#141210] transition-colors duration-300 group-hover:border-[#C8A46B]">
            <svg
              viewBox="0 0 36 36"
              fill="none"
              className="h-5 w-5 text-[#C8A46B] transition-transform duration-500 group-hover:rotate-45"
              aria-hidden="true"
            >
              <circle cx="18" cy="18" r="13" stroke="currentColor" strokeWidth="1.2" />
              <polygon
                points="18,8 26.6,23 9.4,23"
                stroke="currentColor"
                strokeWidth="1.1"
                fill="none"
              />
              <circle cx="18" cy="18" r="2.2" fill="currentColor" />
            </svg>
          </div>
          <div className="leading-none">
            <span className="font-serif-editorial block text-xl font-semibold tracking-[0.14em] text-[#F5F0E8] uppercase">
              Camshootra
            </span>
            <span className="font-mono-spec mt-0.5 block text-[10px] tracking-[0.34em] text-[#C8A46B] uppercase">
              Studios
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-[0.2em] text-[#D7CFC3] uppercase transition-colors duration-300 hover:text-[#C8A46B]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#commission"
            className="group inline-flex items-center gap-2 rounded-full border border-[#C8A46B]/45 bg-[#C8A46B]/10 px-5 py-2.5 text-xs font-medium tracking-[0.18em] text-[#E6CFA8] uppercase transition-all duration-300 hover:border-[#C8A46B] hover:bg-[#C8A46B] hover:text-[#0A0908]"
          >
            Commission Us
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A46B]/30 text-[#F5F0E8] md:hidden"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#C8A46B]/15 bg-[#0A0908]/98 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium tracking-[0.2em] text-[#E6CFA8] uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#commission"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#C8A46B] px-5 py-3 text-xs font-semibold tracking-[0.2em] text-[#0A0908] uppercase"
            >
              Commission Us
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


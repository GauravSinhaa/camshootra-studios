import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import {
  PORTFOLIO_ITEMS,
  type PortfolioCategory,
  type PortfolioItem,
} from '../data/studioData';

const CATEGORIES: PortfolioCategory[] = [
  'All',
  'Culinary & Cocktails',
  'Spirits & Editorial',
  'Hospitality & Events',
  'Couture & Automotive',
];

interface PortfolioSectionProps {
  onCommissionCategory?: (serviceId: string) => void;
}

export function PortfolioSection({ onCommissionCategory }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  const activeItem: PortfolioItem | null =
    lightboxIndex !== null && filteredItems[lightboxIndex] ? filteredItems[lightboxIndex] : null;

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const handleCategoryChange = (cat: PortfolioCategory) => {
    setSelectedCategory(cat);
    setLightboxIndex(null);
  };

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-8 border-b border-[#C8A46B]/15 pb-10 lg:flex-row lg:items-end">
          <div>
            <span className="font-mono-spec text-xs tracking-[0.28em] text-[#C8A46B] uppercase">
              01 / Selected Commissions
            </span>
            <h2 className="font-serif-editorial mt-3 text-4xl font-normal tracking-tight text-[#F5F0E8] sm:text-5xl">
              Curated Client <span className="italic text-[#E6CFA8]">Photography</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#A39A8D] sm:text-base">
              Real production highlights captured for artisanal culinary gastronomy, craft mixology
              lounges, flagship beverage portfolios, five-star hospitality icons, and luxury ateliers.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`rounded-full px-4 py-2 text-xs font-medium tracking-[0.14em] uppercase transition-all duration-300 ${
                    active
                      ? 'border border-[#C8A46B] bg-[#C8A46B] text-[#0A0908]'
                      : 'border border-[#C8A46B]/25 bg-[#141210] text-[#D7CFC3] hover:border-[#C8A46B]/60 hover:text-[#F5F0E8]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Grid */}
        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => {
            const isLandscape = item.aspect === 'landscape';
            return (
              <article
                key={item.id}
                className={`group relative overflow-hidden rounded-xl border border-[#C8A46B]/20 bg-[#12100E] transition-all duration-500 hover:border-[#C8A46B]/55 ${
                  isLandscape ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  className="block w-full text-left focus:outline-none"
                  aria-label={`Inspect ${item.title}`}
                >
                  <div
                    className={`relative w-full overflow-hidden bg-[#0E0C0A] ${
                      isLandscape ? 'aspect-[16/10]' : 'aspect-[4/5]'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={`${item.title} — ${item.client}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/20 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />

                    {/* Top Corner Badge */}
                    <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#0A0908]/70 text-[#E6CFA8] opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                      <Expand className="h-4 w-4" />
                    </div>

                    {/* Bottom Overlay Metadata */}
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-mono-spec text-[10px] tracking-[0.22em] text-[#C8A46B] uppercase">
                          {item.client}
                        </span>
                        <span className="font-mono-spec text-[10px] text-[#9A9184]">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="font-serif-editorial mt-1.5 text-2xl font-medium text-[#F5F0E8] transition-colors group-hover:text-[#E6CFA8]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[#B9B1A4]">
                        {item.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.deliverables.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#C8A46B]/25 bg-[#0A0908]/75 px-2.5 py-0.5 text-[10px] tracking-wider text-[#DFD7CA]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#070605]/95 p-4 backdrop-blur-xl sm:p-8"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#C8A46B]/35 bg-[#141210] text-[#F5F0E8] transition-colors hover:border-[#C8A46B] hover:text-[#C8A46B]"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-[#C8A46B]/30 bg-[#110F0D] lg:grid-cols-12">
            {/* Image Stage */}
            <div className="relative flex items-center justify-center bg-[#080706] p-4 lg:col-span-8 lg:p-6">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[72vh] w-auto rounded-lg object-contain"
              />
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
                  )
                }
                aria-label="Previous image"
                className="absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0A0908]/80 text-[#F5F0E8] hover:border-[#C8A46B]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredItems.length)}
                aria-label="Next image"
                className="absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0A0908]/80 text-[#F5F0E8] hover:border-[#C8A46B]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Editorial Metadata Sidebar */}
            <div className="flex flex-col justify-between border-t border-[#C8A46B]/15 p-7 lg:col-span-4 lg:border-t-0 lg:border-l">
              <div>
                <div className="font-mono-spec text-[11px] tracking-[0.24em] text-[#C8A46B] uppercase">
                  {activeItem.category} • {activeItem.year}
                </div>
                <h3 className="font-serif-editorial mt-3 text-3xl font-medium text-[#F5F0E8]">
                  {activeItem.title}
                </h3>
                <div className="mt-3 text-xs tracking-wider text-[#B6AEA1] uppercase">
                  Client: <span className="text-[#F5F0E8]">{activeItem.client}</span>
                </div>
                <div className="mt-1 text-xs tracking-wider text-[#B6AEA1] uppercase">
                  Series: <span className="text-[#F5F0E8]">{activeItem.venueOrSeries}</span>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-[#C2BAB0]">
                  {activeItem.description}
                </p>

                <div className="mt-7">
                  <div className="font-mono-spec text-[10px] tracking-[0.24em] text-[#9A9184] uppercase">
                    Production Scope
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeItem.deliverables.map((d) => (
                      <span
                        key={d}
                        className="rounded-full border border-[#C8A46B]/30 bg-[#191613] px-3 py-1 text-xs text-[#E6CFA8]"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-[#C8A46B]/15 pt-6">
                <a
                  href="#commission"
                  onClick={() => {
                    setLightboxIndex(null);
                    onCommissionCategory?.('photography');
                  }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C8A46B] px-6 py-3 text-xs font-semibold tracking-[0.18em] text-[#0A0908] uppercase transition-colors hover:bg-[#E6CFA8]"
                >
                  Commission Similar Production
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


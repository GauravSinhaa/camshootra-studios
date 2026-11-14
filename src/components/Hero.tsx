import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Camera, Code2, LineChart, Palette, Sparkles } from 'lucide-react';

const HERO_FRAMES = [
  {
    src: '/portfolio/chivas_photo_edited_3.jpg',
    client: 'Pernod Ricard • Chivas Regal XV',
    caption: 'Cognac Cask Prestige Still Life',
    spec: '85mm • f/1.8 • Chiaroscuro Studio',
  },
  {
    src: '/portfolio/gaurav_gupta_1.jpg',
    client: 'Monika Alcobev × Gaurav Gupta',
    caption: 'Sculptural Couture Atelier',
    spec: '50mm • f/2.2 • Architectural Grade',
  },
  {
    src: '/portfolio/100pipers_3.jpg',
    client: 'Pernod Ricard • House of Spirits',
    caption: 'Flaming Reserve Bar Production',
    spec: '35mm • f/2.8 • Live Flame Capture',
  },
  {
    src: '/portfolio/leela_palace_2.jpg',
    client: 'The Leela Palace • 1800 Tequila',
    caption: 'The Library Bar Activation',
    spec: '50mm • f/2.0 • Twilight Ambient',
  },
];

const DISCIPLINE_BADGES = [
  { icon: Camera, label: 'Luxury Photography' },
  { icon: Sparkles, label: 'Social Media Growth' },
  { icon: Code2, label: 'Websites & IT Systems' },
  { icon: Palette, label: 'Brand Architecture' },
  { icon: LineChart, label: 'Data & Business Growth' },
];

export function Hero() {
  const [activeFrame, setActiveFrame] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % HERO_FRAMES.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const current = HERO_FRAMES[activeFrame];

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* Ambient Radial Gold Glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[540px] w-[760px] -translate-x-1/2 rounded-full opacity-25 blur-[130px]"
        style={{
          background:
            'radial-gradient(circle, rgba(200,164,107,0.42) 0%, rgba(120,82,36,0.14) 52%, transparent 78%)',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        {/* Left Editorial Column */}
        <div className="lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#C8A46B]/30 bg-[#141210]/90 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8A46B]" />
            <span className="font-mono-spec text-[11px] tracking-[0.26em] text-[#E6CFA8] uppercase">
              Creative Atelier • Engineering • Growth Analytics
            </span>
          </div>

          <h1 className="font-serif-editorial text-5xl leading-[1.02] font-normal tracking-tight text-[#F5F0E8] sm:text-6xl lg:text-7xl">
            Where{' '}
            <span className="italic text-[#E6CFA8]">Luxury Aesthetics</span>
            <br />
            Meet Measurable{' '}
            <span className="relative inline-block">
              Growth.
              <span className="absolute right-0 -bottom-1 left-0 h-px bg-gradient-to-r from-[#C8A46B] via-[#E6CFA8] to-transparent" />
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#B6AEA1] sm:text-lg">
            <strong className="font-medium text-[#F5F0E8]">Camshootra Studios</strong> is a
            multidisciplinary luxury studio uniting editorial photography for marquee hospitality
            and spirits houses with bespoke website engineering, social media amplification, brand
            architecture, and data-driven business intelligence.
          </p>

          {/* 5 Disciplines Pill Strip */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {DISCIPLINE_BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-[#C8A46B]/20 bg-[#141210]/80 px-3.5 py-1.5 text-xs tracking-wide text-[#DFD7CA]"
              >
                <Icon className="h-3.5 w-3.5 text-[#C8A46B]" />
                {label}
              </span>
            ))}
          </div>

          {/* Primary Actions */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#C8A46B] px-7 py-3.5 text-xs font-semibold tracking-[0.2em] text-[#0A0908] uppercase transition-all duration-300 hover:bg-[#E6CFA8]"
            >
              View Client Work
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#commission"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#C8A46B]/40 bg-transparent px-7 py-3.5 text-xs font-medium tracking-[0.2em] text-[#F5F0E8] uppercase transition-all duration-300 hover:border-[#C8A46B] hover:bg-[#C8A46B]/10"
            >
              Book a Consultation
              <ArrowUpRight className="h-4 w-4 text-[#C8A46B] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Studio Metrics */}
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-[#C8A46B]/15 pt-7">
            <div>
              <div className="font-serif-editorial text-3xl font-medium text-[#E6CFA8] sm:text-4xl">
                120+
              </div>
              <div className="mt-1 text-xs tracking-wider text-[#9A9184] uppercase">
                Luxury Campaigns
              </div>
            </div>
            <div>
              <div className="font-serif-editorial text-3xl font-medium text-[#E6CFA8] sm:text-4xl">
                5
              </div>
              <div className="mt-1 text-xs tracking-wider text-[#9A9184] uppercase">
                Integrated Pillars
              </div>
            </div>
            <div>
              <div className="font-serif-editorial text-3xl font-medium text-[#E6CFA8] sm:text-4xl">
                360°
              </div>
              <div className="mt-1 text-xs tracking-wider text-[#9A9184] uppercase">
                Creative + IT + Data
              </div>
            </div>
          </div>
        </div>

        {/* Right Interactive Luxury Showcase Frame */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Decorative Gold Corner Frame */}
            <div className="absolute -inset-3 rounded-2xl border border-[#C8A46B]/20 pointer-events-none" />

            <div className="relative overflow-hidden rounded-xl border border-[#C8A46B]/30 bg-[#12100E] shadow-2xl shadow-black/80">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                {HERO_FRAMES.map((frame, index) => (
                  <img
                    key={frame.src}
                    src={frame.src}
                    alt={`${frame.client} — ${frame.caption}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                      index === activeFrame
                        ? 'scale-100 opacity-100'
                        : 'scale-105 opacity-0 pointer-events-none'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/20 to-transparent" />
              </div>

              {/* Frame Caption Bar */}
              <div className="relative z-10 -mt-20 px-6 pb-6">
                <div className="font-mono-spec text-[10px] tracking-[0.24em] text-[#C8A46B] uppercase">
                  {current.client}
                </div>
                <div className="font-serif-editorial mt-1 text-2xl font-medium text-[#F5F0E8]">
                  {current.caption}
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-3">
                  <span className="font-mono-spec text-[11px] text-[#9A9184]">{current.spec}</span>
                  <div className="flex items-center gap-1.5">
                    {HERO_FRAMES.map((frame, idx) => (
                      <button
                        key={frame.src}
                        type="button"
                        onClick={() => setActiveFrame(idx)}
                        aria-label={`Show featured production ${idx + 1}: ${frame.caption}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === activeFrame
                            ? 'w-6 bg-[#C8A46B]'
                            : 'w-2 bg-white/25 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


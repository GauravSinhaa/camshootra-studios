import { useState } from 'react';
import {
  ArrowUpRight,
  Camera,
  Check,
  Code2,
  LineChart,
  Palette,
  Sparkles,
} from 'lucide-react';
import { SERVICE_PILLARS } from '../data/studioData';
import { AnalyticsShowcase } from './AnalyticsShowcase';

const ICONS: Record<string, typeof Camera> = {
  photography: Camera,
  social: Sparkles,
  'it-web': Code2,
  branding: Palette,
  analytics: LineChart,
};

interface ServicesSectionProps {
  onSelectServiceForBrief?: (serviceId: string) => void;
}

export function ServicesSection({ onSelectServiceForBrief }: ServicesSectionProps) {
  const [activeId, setActiveId] = useState<string>(SERVICE_PILLARS[0].id);
  const activeService =
    SERVICE_PILLARS.find((pillar) => pillar.id === activeId) ?? SERVICE_PILLARS[0];
  const ActiveIcon = ICONS[activeService.id] ?? Camera;

  return (
    <section
      id="services"
      className="relative border-t border-[#C8A46B]/15 bg-[#0D0B09] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="font-mono-spec text-xs tracking-[0.28em] text-[#C8A46B] uppercase">
            02 / Multidisciplinary Capabilities
          </span>
          <h2 className="font-serif-editorial mt-3 text-4xl font-normal tracking-tight text-[#F5F0E8] sm:text-5xl">
            Five Disciplines. One{' '}
            <span className="italic text-[#E6CFA8]">Unified Atelier.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#A39A8D] sm:text-base">
            Luxury brands lose momentum when photography, social marketing, web engineering,
            branding, and business analytics live in disconnected silos. Camshootra Studios unites
            all five under one senior creative and technical direction.
          </p>
        </div>

        {/* Interactive Selector Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Left Pillar List */}
          <div className="flex flex-col gap-3 lg:col-span-5">
            {SERVICE_PILLARS.map((pillar) => {
              const Icon = ICONS[pillar.id] ?? Camera;
              const isSelected = pillar.id === activeId;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActiveId(pillar.id)}
                  className={`group flex items-start gap-4 rounded-xl border p-5 text-left transition-all duration-300 ${
                    isSelected
                      ? 'border-[#C8A46B]/70 bg-[#171410] shadow-lg shadow-black/50'
                      : 'border-[#C8A46B]/15 bg-[#110F0D]/70 hover:border-[#C8A46B]/40 hover:bg-[#15120F]'
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                      isSelected
                        ? 'border-[#C8A46B] bg-[#C8A46B] text-[#0A0908]'
                        : 'border-[#C8A46B]/25 bg-[#1B1814] text-[#C8A46B]'
                    }`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono-spec text-[11px] tracking-[0.2em] text-[#C8A46B]">
                        {pillar.number}
                      </span>
                      <span
                        className={`text-[10px] tracking-widest uppercase transition-opacity ${
                          isSelected ? 'text-[#E6CFA8] opacity-100' : 'opacity-0'
                        }`}
                      >
                        Active
                      </span>
                    </div>
                    <h3 className="font-serif-editorial mt-1 text-2xl font-medium text-[#F5F0E8]">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#9A9184]">{pillar.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Specification Card */}
          <div className="lg:col-span-7">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-[#C8A46B]/30 bg-gradient-to-br from-[#171411] via-[#12100E] to-[#0D0B09] p-8 sm:p-10">
              <div>
                <div className="flex items-center justify-between border-b border-[#C8A46B]/15 pb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A46B]/40 bg-[#C8A46B]/10 text-[#E6CFA8]">
                      <ActiveIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-mono-spec text-[11px] tracking-[0.24em] text-[#C8A46B] uppercase">
                        Pillar {activeService.number}
                      </span>
                      <div className="text-xs text-[#9A9184]">{activeService.subtitle}</div>
                    </div>
                  </div>
                </div>

                <h3 className="font-serif-editorial mt-7 text-3xl font-medium text-[#F5F0E8] sm:text-4xl">
                  {activeService.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#C2BAB0] sm:text-base">
                  {activeService.summary}
                </p>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <div className="font-mono-spec text-[11px] tracking-[0.22em] text-[#C8A46B] uppercase">
                      Core Deliverables
                    </div>
                    <ul className="mt-4 space-y-3">
                      {activeService.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-[#EAE2D6]"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A46B]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="font-mono-spec text-[11px] tracking-[0.22em] text-[#C8A46B] uppercase">
                      Commercial Impact
                    </div>
                    <ul className="mt-4 space-y-3">
                      {activeService.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-2.5 text-sm text-[#B9B1A4]"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C8A46B]" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#C8A46B]/15 pt-7">
                <span className="text-xs text-[#9A9184]">
                  Available standalone or bundled into a full-suite retainer.
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  {activeService.id === 'analytics' && (
                    <a
                      href="#intelligence"
                      className="inline-flex items-center gap-2 rounded-full border border-[#C8A46B]/60 px-5 py-3 text-xs font-semibold tracking-[0.14em] text-[#E6CFA8] uppercase transition-colors hover:bg-[#C8A46B]/15"
                    >
                      View Live Console Below ↓
                    </a>
                  )}
                  <a
                    href="#commission"
                    onClick={() => onSelectServiceForBrief?.(activeService.id)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#C8A46B] px-6 py-3 text-xs font-semibold tracking-[0.18em] text-[#0A0908] uppercase transition-colors hover:bg-[#E6CFA8]"
                  >
                    Request Scope for {activeService.number}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Data Intelligence Explorer within Services */}
        <AnalyticsShowcase isEmbedded />
      </div>
    </section>
  );
}


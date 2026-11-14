import { useState } from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';
import { ANALYTICS_SCENARIOS } from '../data/studioData';

interface AnalyticsShowcaseProps {
  isEmbedded?: boolean;
}

export function AnalyticsShowcase({ isEmbedded = false }: AnalyticsShowcaseProps) {
  const [scenarioId, setScenarioId] = useState<string>(ANALYTICS_SCENARIOS[0].id);
  const scenario =
    ANALYTICS_SCENARIOS.find((s) => s.id === scenarioId) ?? ANALYTICS_SCENARIOS[0];

  // Build SVG polyline coordinates for a clean 520x180 chart viewport
  const width = 520;
  const height = 180;
  const padX = 26;
  const padY = 20;
  const plotW = width - padX * 2;
  const plotH = height - padY * 2;

  const toCoords = (values: number[]) =>
    values.map((v, i) => {
      const x = padX + (i / (values.length - 1)) * plotW;
      const y = padY + plotH - (v / 100) * plotH;
      return { x, y, v };
    });

  const growthPoints = toCoords(scenario.monthlySeries.map((d) => d.revenueIndex));
  const baselinePoints = toCoords(scenario.monthlySeries.map((d) => d.baselineIndex));

  const growthLine = growthPoints.map((p) => `${p.x},${p.y}`).join(' ');
  const baselineLine = baselinePoints.map((p) => `${p.x},${p.y}`).join(' ');
  const growthArea = `${padX},${padY + plotH} ${growthLine} ${
    growthPoints[growthPoints.length - 1].x
  },${padY + plotH}`;

  const content = (
    <>
      {/* Header */}
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <span className="font-mono-spec text-xs tracking-[0.28em] text-[#C8A46B] uppercase">
            Pillar 05 Console / Data Analysis for Business Growth
          </span>
          <h3 className="font-serif-editorial mt-3 text-3xl font-normal tracking-tight text-[#F5F0E8] sm:text-4xl">
            Creative Intuition,{' '}
            <span className="italic text-[#E6CFA8]">Quantified.</span>
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[#A39A8D] sm:text-base">
            Beauty earns attention; data compounds profit. Explore how Camshootra Studios
            instruments web architecture, social reach, and revenue attribution across three
            illustrative client growth models.
          </p>
        </div>

        {/* Scenario Toggle */}
        <div className="flex flex-wrap gap-2">
          {ANALYTICS_SCENARIOS.map((item) => {
            const active = item.id === scenario.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setScenarioId(item.id)}
                className={`rounded-full px-4 py-2 text-xs font-medium tracking-[0.12em] uppercase transition-all ${
                  active
                    ? 'border border-[#C8A46B] bg-[#C8A46B] text-[#0A0908]'
                    : 'border border-[#C8A46B]/25 bg-[#141210] text-[#D7CFC3] hover:border-[#C8A46B]/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Intelligence Console Card */}
      <div className="mt-12 rounded-2xl border border-[#C8A46B]/30 bg-[#12100E] p-6 shadow-2xl shadow-black/70 sm:p-10">
          <div className="flex flex-col justify-between gap-4 border-b border-[#C8A46B]/15 pb-6 md:flex-row md:items-center">
            <div>
              <div className="font-mono-spec text-[11px] tracking-[0.22em] text-[#C8A46B] uppercase">
                {scenario.industry}
              </div>
              <h3 className="font-serif-editorial mt-1 text-2xl font-medium text-[#F5F0E8] sm:text-3xl">
                {scenario.headline}
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#C8A46B]/30 bg-[#191613] px-3.5 py-1.5 text-[11px] text-[#E6CFA8]">
              <BarChart3 className="h-3.5 w-3.5 text-[#C8A46B]" />
              Illustrative 6-Month Growth Model
            </div>
          </div>

          <p className="mt-5 max-w-3xl text-sm text-[#B6AEA1]">{scenario.summary}</p>

          {/* KPI Strip */}
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {scenario.kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-[#C8A46B]/20 bg-[#171411] p-5"
              >
                <div className="text-xs tracking-wide text-[#9A9184]">{kpi.label}</div>
                <div className="font-serif-editorial mt-2 text-3xl font-semibold text-[#F5F0E8] sm:text-4xl">
                  {kpi.value}
                </div>
                <div className="font-mono-spec mt-1.5 inline-flex items-center gap-1 text-[11px] text-[#C8A46B]">
                  <TrendingUp className="h-3 w-3" />
                  {kpi.delta}
                </div>
              </div>
            ))}
          </div>

          {/* Chart + Funnel Grid */}
          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* Trajectory SVG Chart */}
            <div className="rounded-xl border border-[#C8A46B]/20 bg-[#0E0C0A] p-6 lg:col-span-7">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono-spec text-[11px] tracking-[0.2em] text-[#C8A46B] uppercase">
                    Compounding Revenue Index
                  </div>
                  <div className="mt-1 text-xs text-[#9A9184]">
                    Integrated Camshootra Stack vs. Unoptimized Baseline
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[11px]">
                  <span className="flex items-center gap-1.5 text-[#E6CFA8]">
                    <span className="h-2 w-2 rounded-full bg-[#C8A46B]" />
                    Camshootra Stack
                  </span>
                  <span className="flex items-center gap-1.5 text-[#7E766B]">
                    <span className="h-2 w-2 rounded-full bg-[#5A534B]" />
                    Baseline
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <svg
                  viewBox={`0 0 ${width} ${height}`}
                  className="h-52 w-full overflow-visible"
                  role="img"
                  aria-label={`Revenue growth index chart for ${scenario.label}`}
                >
                  <defs>
                    <linearGradient id="goldArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C8A46B" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#C8A46B" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Gridlines */}
                  {[0.25, 0.5, 0.75, 1].map((t) => {
                    const y = padY + plotH * (1 - t);
                    return (
                      <line
                        key={t}
                        x1={padX}
                        y1={y}
                        x2={width - padX}
                        y2={y}
                        stroke="rgba(200,164,107,0.12)"
                        strokeDasharray="3 4"
                      />
                    );
                  })}

                  {/* Baseline Line */}
                  <polyline
                    fill="none"
                    stroke="#5A534B"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    points={baselineLine}
                  />

                  {/* Gold Area & Trajectory */}
                  <polygon fill="url(#goldArea)" points={growthArea} />
                  <polyline
                    fill="none"
                    stroke="#C8A46B"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={growthLine}
                  />

                  {/* Data Nodes & Month Labels */}
                  {growthPoints.map((pt, i) => (
                    <g key={scenario.monthlySeries[i].month}>
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="4"
                        fill="#0A0908"
                        stroke="#E6CFA8"
                        strokeWidth="2"
                      />
                      <text
                        x={pt.x}
                        y={height - 2}
                        textAnchor="middle"
                        className="fill-[#8E8579] text-[10px]"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {scenario.monthlySeries[i].month}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>

            {/* Funnel Attribution Breakdown */}
            <div className="rounded-xl border border-[#C8A46B]/20 bg-[#0E0C0A] p-6 lg:col-span-5">
              <div className="font-mono-spec text-[11px] tracking-[0.2em] text-[#C8A46B] uppercase">
                Conversion Funnel Telemetry
              </div>
              <div className="mt-1 text-xs text-[#9A9184]">
                Full-journey visibility from first impression to closed revenue
              </div>

              <div className="mt-6 space-y-5">
                {scenario.funnelSteps.map((step) => (
                  <div key={step.stage}>
                    <div className="flex items-baseline justify-between gap-3 text-xs">
                      <span className="text-[#EAE2D6]">{step.stage}</span>
                      <span className="font-mono-spec text-[#E6CFA8]">{step.metric}</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#1C1915]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#8D6E3F] via-[#C8A46B] to-[#E6CFA8] transition-all duration-700"
                        style={{ width: `${step.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </>
  );

  if (isEmbedded) {
    return (
      <div id="intelligence" className="mt-20 border-t border-[#C8A46B]/20 pt-16">
        {content}
      </div>
    );
  }

  return (
    <section id="intelligence" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {content}
      </div>
    </section>
  );
}


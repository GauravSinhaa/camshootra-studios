import { PROCESS_STEPS } from '../data/studioData';

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative border-t border-[#C8A46B]/15 bg-[#0D0B09] py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Manifesto */}
          <div className="lg:col-span-5">
            <span className="font-mono-spec text-xs tracking-[0.28em] text-[#C8A46B] uppercase">
              04 / Atelier Methodology
            </span>
            <h2 className="font-serif-editorial mt-3 text-4xl font-normal tracking-tight text-[#F5F0E8] sm:text-5xl">
              Crafted Like Art.{' '}
              <span className="italic text-[#E6CFA8]">Operated Like Infrastructure.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[#A39A8D] sm:text-base">
              Whether we are lighting a rare single-malt pour at The Leela Palace or architecting
              your custom web platform and revenue dashboard, our engagement cadence guarantees zero
              friction between creative vision and commercial execution.
            </p>

            {/* Studio Ethos Quote */}
            <blockquote className="mt-8 rounded-xl border border-[#C8A46B]/25 bg-[#141210] p-6">
              <p className="font-serif-editorial text-xl leading-snug italic text-[#EAE2D6]">
                “Luxury is never accidental—it is the discipline of aligning every photograph,
                interface, and metric around a single unmistakable standard.”
              </p>
              <footer className="font-mono-spec mt-4 text-[11px] tracking-[0.22em] text-[#C8A46B] uppercase">
                Camshootra Studios — New Delhi • Global
              </footer>
            </blockquote>
          </div>

          {/* Right 4-Step Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="group rounded-xl border border-[#C8A46B]/20 bg-[#12100E] p-7 transition-all duration-300 hover:border-[#C8A46B]/55"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono-spec text-xs tracking-[0.26em] text-[#C8A46B]">
                    STEP {item.step}
                  </span>
                  <span className="h-px w-10 bg-[#C8A46B]/30 transition-all duration-300 group-hover:w-14 group-hover:bg-[#C8A46B]" />
                </div>
                <h3 className="font-serif-editorial mt-4 text-2xl font-medium text-[#F5F0E8]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A39A8D]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


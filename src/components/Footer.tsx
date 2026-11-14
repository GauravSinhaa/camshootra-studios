export function Footer() {
  return (
    <footer className="border-t border-[#C8A46B]/20 bg-[#070605] py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-serif-editorial text-2xl font-semibold tracking-[0.16em] text-[#F5F0E8] uppercase">
              Camshootra <span className="text-[#C8A46B]">Studios</span>
            </div>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-[#8E8579]">
              A luxury creative and engineering atelier crafting editorial photography, social
              media growth, bespoke websites & IT services, brand identity, and business growth
              analytics.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono-spec text-[10px] tracking-[0.24em] text-[#C8A46B] uppercase">
              Navigation
            </div>
            <ul className="mt-4 space-y-2.5 text-xs text-[#B6AEA1]">
              <li>
                <a href="#portfolio" className="hover:text-[#E6CFA8]">
                  Curated Photography
                </a>
              </li>
              <li>
                <a href="#motion" className="hover:text-[#E6CFA8]">
                  Cinema & Brand Films
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#E6CFA8]">
                  Studio Disciplines & Services
                </a>
              </li>
              <li>
                <a href="#intelligence" className="hover:text-[#E6CFA8]">
                  Data Intelligence (Pillar 05)
                </a>
              </li>
              <li>
                <a href="#commission" className="hover:text-[#E6CFA8]">
                  Commission Concierge
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-mono-spec text-[10px] tracking-[0.24em] text-[#C8A46B] uppercase">
              Practice Areas
            </div>
            <ul className="mt-4 space-y-2.5 text-xs text-[#B6AEA1]">
              <li>Luxury & Hospitality Photography</li>
              <li>Social Media Marketing & Paid Amplification</li>
              <li>Custom Websites & IT Engineering</li>
              <li>Brand Architecture & Data Analytics</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-[11px] text-[#7D756A] sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Camshootra Studios. All rights reserved.</span>
          <span className="font-mono-spec tracking-[0.16em] uppercase">
            Luxury Craft • Digital Precision
          </span>
        </div>
      </div>
    </footer>
  );
}


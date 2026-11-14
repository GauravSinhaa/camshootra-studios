import { CLIENT_MARQUEE } from '../data/studioData';

export function ClientMarquee() {
  const repeated = [...CLIENT_MARQUEE, ...CLIENT_MARQUEE];

  return (
    <section
      aria-label="Selected client roster"
      className="relative overflow-hidden border-y border-[#C8A46B]/15 bg-[#0F0D0B] py-5"
    >
      <div className="animate-marquee items-center">
        {repeated.map((brand, index) => (
          <div key={`${brand}-${index}`} className="flex items-center">
            <span className="font-serif-editorial px-7 text-lg tracking-[0.22em] text-[#D7CFC3]/80 uppercase transition-colors hover:text-[#E6CFA8] sm:text-xl">
              {brand}
            </span>
            <span className="h-1 w-1 rounded-full bg-[#C8A46B]/60" />
          </div>
        ))}
      </div>
    </section>
  );
}


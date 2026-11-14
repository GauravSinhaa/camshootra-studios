import { useState, useRef, useEffect } from 'react';
import {
  Play,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  Film,
  Sparkles,
  Clapperboard,
} from 'lucide-react';
import { VIDEO_ITEMS, type VideoItem } from '../data/studioData';

const VIDEO_CATEGORIES = [
  'All Films',
  'Commercial & Spirits',
  'Events & Culture',
  'Hospitality & Travel',
  'Culinary & Mixology',
  'Commercial & Wellness',
] as const;

type VideoCategoryFilter = (typeof VIDEO_CATEGORIES)[number];

export function MotionSection() {
  const [activeCategory, setActiveCategory] = useState<VideoCategoryFilter>('All Films');
  const [theaterVideo, setTheaterVideo] = useState<VideoItem | null>(null);
  const [playingInlineId, setPlayingInlineId] = useState<string | null>(null);
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({});

  const theaterVideoRef = useRef<HTMLVideoElement | null>(null);

  const filteredVideos =
    activeCategory === 'All Films'
      ? VIDEO_ITEMS
      : VIDEO_ITEMS.filter((v) => v.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setTheaterVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleInlinePlay = (id: string) => {
    setPlayingInlineId((prev) => (prev === id ? null : id));
  };

  const toggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMutedStates((prev) => ({
      ...prev,
      [id]: !(prev[id] ?? true),
    }));
  };

  return (
    <section id="motion" className="relative border-t border-[#C8A46B]/15 bg-[#090807] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-8 border-b border-[#C8A46B]/15 pb-10 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono-spec text-xs tracking-[0.28em] text-[#C8A46B] uppercase">
                02 / Motion & Brand Films
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-[#C8A46B]/30 bg-[#C8A46B]/10 px-2.5 py-0.5 font-mono-spec text-[10px] text-[#E6CFA8]">
                <Film className="h-3 w-3 text-[#C8A46B]" />
                Cinema Atelier
              </span>
            </div>
            <h2 className="font-serif-editorial mt-3 text-4xl font-normal tracking-tight text-[#F5F0E8] sm:text-5xl">
              Cinema, Commercials &{' '}
              <span className="italic text-[#E6CFA8]">High-Retention Motion</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#A39A8D] sm:text-base">
              Bespoke commercial brand films, high-energy festival aftermovies, luxury architectural
              walkthroughs, and vertical reels engineered for The Macallan, Jose Cuervo, McDowell's,
              The Roseate, and five-star hospitality icons.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {VIDEO_CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-medium tracking-[0.12em] uppercase transition-all duration-300 ${
                    active
                      ? 'border border-[#C8A46B] bg-[#C8A46B] text-[#0A0908]'
                      : 'border border-[#C8A46B]/25 bg-[#141210] text-[#D7CFC3] hover:border-[#C8A46B]/60 hover:text-[#F5F0E8]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Video Showcase Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video) => {
            const isLandscape = video.aspect === 'landscape';
            const isPlaying = playingInlineId === video.id;
            const isMuted = mutedStates[video.id] ?? true;

            return (
              <div
                key={video.id}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[#C8A46B]/20 bg-[#12100E] transition-all duration-500 hover:border-[#C8A46B]/50 hover:shadow-2xl hover:shadow-[#C8A46B]/5 ${
                  isLandscape ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Media Container */}
                <div
                  className={`relative w-full overflow-hidden bg-black ${
                    isLandscape ? 'aspect-video' : 'aspect-[9/16] max-h-[580px]'
                  }`}
                >
                  {isPlaying ? (
                    <video
                      src={video.videoSrc}
                      poster={video.posterSrc}
                      autoPlay
                      playsInline
                      loop
                      muted={isMuted}
                      className="h-full w-full object-cover"
                      controls
                    />
                  ) : (
                    <>
                      <img
                        src={video.posterSrc}
                        alt={video.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />

                      {/* Play Button Overlay */}
                      <button
                        type="button"
                        onClick={() => toggleInlinePlay(video.id)}
                        className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        aria-label={`Play ${video.title}`}
                      >
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C8A46B]/70 bg-black/60 backdrop-blur-md text-[#E6CFA8] shadow-xl shadow-black/80 transition-colors hover:border-[#C8A46B] hover:bg-[#C8A46B] hover:text-[#0A0908]">
                          <Play className="ml-1 h-7 w-7 fill-current" />
                        </div>
                      </button>
                    </>
                  )}

                  {/* Top Badges */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
                    <span className="font-mono-spec rounded-full border border-[#C8A46B]/30 bg-black/70 px-3 py-1 text-[10px] tracking-[0.18em] text-[#E6CFA8] uppercase backdrop-blur-md">
                      {video.aspect === 'landscape' ? '16:9 Cinema' : '9:16 Reel'}
                    </span>
                    <span className="font-mono-spec rounded-full bg-black/70 px-2.5 py-1 text-[10px] text-[#A39A8D] backdrop-blur-md">
                      {video.duration}
                    </span>
                  </div>

                  {/* Bottom Action Controls (Theater Mode & Inline Audio) */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
                    {isPlaying && (
                      <button
                        type="button"
                        onClick={(e) => toggleMute(video.id, e)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A46B]/40 bg-black/70 text-[#E6CFA8] backdrop-blur-md transition-colors hover:bg-[#C8A46B] hover:text-[#0A0908]"
                        title={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => setTheaterVideo(video)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#C8A46B]/40 bg-black/70 px-3 py-1.5 text-[11px] font-medium tracking-wide text-[#E6CFA8] backdrop-blur-md transition-colors hover:border-[#C8A46B] hover:bg-[#C8A46B] hover:text-[#0A0908]"
                      title="Open in Theater Mode"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>Theater</span>
                    </button>
                  </div>
                </div>

                {/* Content Card Info */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono-spec text-[11px] tracking-[0.2em] text-[#C8A46B] uppercase">
                        {video.client}
                      </span>
                      <span className="font-mono-spec text-[10px] text-[#7E766B]">
                        {video.year}
                      </span>
                    </div>
                    <h3 className="font-serif-editorial mt-2 text-xl font-medium tracking-tight text-[#F5F0E8] sm:text-2xl">
                      {video.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#A39A8D]">
                      {video.description}
                    </p>
                  </div>

                  {/* Deliverables Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-[#C8A46B]/15 pt-4">
                    {video.deliverables.map((deliv) => (
                      <span
                        key={deliv}
                        className="rounded-full border border-[#C8A46B]/20 bg-[#171411] px-2.5 py-0.5 text-[10px] text-[#C2BAB0]"
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Theater Modal */}
      {theaterVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl sm:p-8"
          onClick={() => setTheaterVideo(null)}
        >
          <div
            className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-[#C8A46B]/40 bg-[#0F0D0B] shadow-2xl shadow-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#C8A46B]/20 px-6 py-4">
              <div className="flex items-center gap-3">
                <Clapperboard className="h-5 w-5 text-[#C8A46B]" />
                <div>
                  <h4 className="font-serif-editorial text-lg font-medium text-[#F5F0E8]">
                    {theaterVideo.title}
                  </h4>
                  <span className="font-mono-spec text-[10px] tracking-[0.2em] text-[#C8A46B] uppercase">
                    {theaterVideo.client} • {theaterVideo.year}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setTheaterVideo(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[#A39A8D] transition-colors hover:border-[#C8A46B] hover:text-[#F5F0E8]"
                aria-label="Close Theater"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Video Player */}
            <div className="relative flex items-center justify-center bg-black max-h-[70vh]">
              <video
                ref={theaterVideoRef}
                src={theaterVideo.videoSrc}
                poster={theaterVideo.posterSrc}
                controls
                autoPlay
                className={`w-full max-h-[70vh] object-contain ${
                  theaterVideo.aspect === 'landscape' ? 'aspect-video' : 'max-w-[420px]'
                }`}
              />
            </div>

            {/* Modal Footer Info */}
            <div className="flex flex-col justify-between gap-4 border-t border-[#C8A46B]/20 p-6 sm:flex-row sm:items-center">
              <div>
                <p className="max-w-2xl text-xs leading-relaxed text-[#B9B1A4]">
                  {theaterVideo.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {theaterVideo.deliverables.map((deliv) => (
                    <span
                      key={deliv}
                      className="rounded-full border border-[#C8A46B]/25 bg-[#171411] px-3 py-1 font-mono-spec text-[10px] text-[#E6CFA8]"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="#commission"
                onClick={() => setTheaterVideo(null)}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#C8A46B] px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-[#0A0908] uppercase transition-colors hover:bg-[#E6CFA8]"
              >
                Commission Film
                <Sparkles className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

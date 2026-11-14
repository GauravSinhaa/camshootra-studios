import { useEffect, useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from 'lucide-react';
import { SERVICE_PILLARS } from '../data/studioData';

const ENGAGEMENT_TIERS = [
  'Single Flagship Campaign',
  'Full Brand + Web Launch',
  'Ongoing Growth Retainer',
];

interface ContactSectionProps {
  preselectedService?: string | null;
}

export function ContactSection({ preselectedService }: ContactSectionProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(['photography']);
  const [tier, setTier] = useState<string>(ENGAGEMENT_TIERS[1]);
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!preselectedService) return;
    setSelectedServices((prev) =>
      prev.includes(preselectedService) ? prev : [...prev, preselectedService]
    );
  }, [preselectedService]);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id)
        ? prev.length > 1
          ? prev.filter((item) => item !== id)
          : prev
        : [...prev, id]
    );
  };

  const selectedLabels = SERVICE_PILLARS.filter((s) =>
    selectedServices.includes(s.id)
  ).map((s) => s.title);

  const briefSummary = [
    `CAMSHOOTRA STUDIOS — COMMISSION BRIEF`,
    `Client: ${name || 'Prospective Partner'}${brand ? ` (${brand})` : ''}`,
    `Email: ${email || 'Not provided'}`,
    `Engagement Model: ${tier}`,
    `Disciplines: ${selectedLabels.join(', ')}`,
    `Project Notes: ${notes || 'Requesting initial discovery consultation.'}`,
  ].join('\n');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(briefSummary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="commission" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Concierge Details */}
          <div className="lg:col-span-5">
            <span className="font-mono-spec text-xs tracking-[0.28em] text-[#C8A46B] uppercase">
              05 / Private Concierge
            </span>
            <h2 className="font-serif-editorial mt-3 text-4xl font-normal tracking-tight text-[#F5F0E8] sm:text-5xl">
              Commission{' '}
              <span className="italic text-[#E6CFA8]">Camshootra Studios</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#A39A8D] sm:text-base">
              Select the disciplines your business needs—from luxury client shoots and social
              campaigns to bespoke websites, branding, and growth analytics—and receive a tailored
              scope & timeline within 24 hours.
            </p>

            <div className="mt-10 space-y-5 border-t border-[#C8A46B]/15 pt-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C8A46B]/30 bg-[#141210] text-[#C8A46B]">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-mono-spec text-[10px] tracking-[0.22em] text-[#9A9184] uppercase">
                    Studio Desk
                  </div>
                  <a
                    href="mailto:concierge@camshootrastudios.com"
                    className="mt-0.5 block text-sm text-[#F5F0E8] hover:text-[#E6CFA8]"
                  >
                    concierge@camshootrastudios.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C8A46B]/30 bg-[#141210] text-[#C8A46B]">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-mono-spec text-[10px] tracking-[0.22em] text-[#9A9184] uppercase">
                    Direct Line
                  </div>
                  <div className="mt-0.5 text-sm text-[#F5F0E8]">By Private Appointment</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C8A46B]/30 bg-[#141210] text-[#C8A46B]">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-mono-spec text-[10px] tracking-[0.22em] text-[#9A9184] uppercase">
                    Headquarters
                  </div>
                  <div className="mt-0.5 text-sm text-[#F5F0E8]">
                    New Delhi, India — Available Worldwide
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Brief Builder */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#C8A46B]/30 bg-[#12100E] p-7 shadow-2xl shadow-black/70 sm:p-10">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Disciplines Multi-Select */}
                  <div>
                    <label className="font-mono-spec block text-[11px] tracking-[0.22em] text-[#C8A46B] uppercase">
                      1. Select Required Disciplines
                    </label>
                    <div className="mt-3 flex flex-wrap gap-2.5">
                      {SERVICE_PILLARS.map((pillar) => {
                        const active = selectedServices.includes(pillar.id);
                        return (
                          <button
                            key={pillar.id}
                            type="button"
                            onClick={() => toggleService(pillar.id)}
                            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs transition-all ${
                              active
                                ? 'border border-[#C8A46B] bg-[#C8A46B] font-semibold text-[#0A0908]'
                                : 'border border-[#C8A46B]/25 bg-[#181511] text-[#D7CFC3] hover:border-[#C8A46B]/60'
                            }`}
                          >
                            {active && <Check className="h-3.5 w-3.5" />}
                            {pillar.title.split(' & ')[0]}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Engagement Model */}
                  <div>
                    <label className="font-mono-spec block text-[11px] tracking-[0.22em] text-[#C8A46B] uppercase">
                      2. Engagement Architecture
                    </label>
                    <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
                      {ENGAGEMENT_TIERS.map((option) => {
                        const active = tier === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setTier(option)}
                            className={`rounded-xl border px-4 py-3 text-left text-xs transition-all ${
                              active
                                ? 'border-[#C8A46B] bg-[#C8A46B]/15 text-[#F5F0E8]'
                                : 'border-[#C8A46B]/20 bg-[#181511] text-[#A39A8D] hover:border-[#C8A46B]/50'
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact Inputs */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="client-name"
                        className="font-mono-spec block text-[11px] tracking-[0.2em] text-[#9A9184] uppercase"
                      >
                        Your Name *
                      </label>
                      <input
                        id="client-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Aarav Mehta"
                        className="mt-2 w-full rounded-xl border border-[#C8A46B]/25 bg-[#0A0908] px-4 py-3 text-sm text-[#F5F0E8] placeholder:text-[#5E574E] focus:border-[#C8A46B] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="client-brand"
                        className="font-mono-spec block text-[11px] tracking-[0.2em] text-[#9A9184] uppercase"
                      >
                        Brand / Hospitality Group
                      </label>
                      <input
                        id="client-brand"
                        type="text"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        placeholder="Maison Reserve"
                        className="mt-2 w-full rounded-xl border border-[#C8A46B]/25 bg-[#0A0908] px-4 py-3 text-sm text-[#F5F0E8] placeholder:text-[#5E574E] focus:border-[#C8A46B] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="client-email"
                      className="font-mono-spec block text-[11px] tracking-[0.2em] text-[#9A9184] uppercase"
                    >
                      Work Email *
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="mt-2 w-full rounded-xl border border-[#C8A46B]/25 bg-[#0A0908] px-4 py-3 text-sm text-[#F5F0E8] placeholder:text-[#5E574E] focus:border-[#C8A46B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client-notes"
                      className="font-mono-spec block text-[11px] tracking-[0.2em] text-[#9A9184] uppercase"
                    >
                      Project Vision & Objectives
                    </label>
                    <textarea
                      id="client-notes"
                      rows={4}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Tell us about your upcoming shoot, website build, social growth goals, or analytics requirements..."
                      className="mt-2 w-full rounded-xl border border-[#C8A46B]/25 bg-[#0A0908] px-4 py-3 text-sm text-[#F5F0E8] placeholder:text-[#5E574E] focus:border-[#C8A46B] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C8A46B] px-7 py-3.5 text-xs font-semibold tracking-[0.2em] text-[#0A0908] uppercase transition-colors hover:bg-[#E6CFA8]"
                  >
                    Generate Studio Commission Brief
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8A46B] text-[#0A0908]">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-mono-spec text-[11px] tracking-[0.22em] text-[#C8A46B] uppercase">
                        Dossier Prepared
                      </div>
                      <h3 className="font-serif-editorial text-2xl font-medium text-[#F5F0E8]">
                        Thank you, {name}.
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-[#B6AEA1]">
                    Your commission brief is ready. Copy the formatted dossier below or open your
                    mail client to dispatch it directly to our senior producers and technical leads.
                  </p>

                  <pre className="overflow-x-auto rounded-xl border border-[#C8A46B]/25 bg-[#0A0908] p-5 font-mono-spec text-xs leading-relaxed text-[#E6CFA8]">
                    {briefSummary}
                  </pre>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`mailto:concierge@camshootrastudios.com?subject=${encodeURIComponent(
                        `Commission Brief — ${brand || name}`
                      )}&body=${encodeURIComponent(briefSummary)}`}
                      className="inline-flex items-center gap-2 rounded-full bg-[#C8A46B] px-6 py-3 text-xs font-semibold tracking-[0.18em] text-[#0A0908] uppercase hover:bg-[#E6CFA8]"
                    >
                      Send via Email
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center gap-2 rounded-full border border-[#C8A46B]/40 px-5 py-3 text-xs font-medium tracking-[0.16em] text-[#F5F0E8] uppercase hover:border-[#C8A46B]"
                    >
                      <Copy className="h-3.5 w-3.5 text-[#C8A46B]" />
                      {copied ? 'Copied Brief' : 'Copy Brief'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="ml-auto text-xs tracking-wider text-[#9A9184] underline-offset-4 hover:text-[#F5F0E8] hover:underline"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export type PortfolioCategory =
  | 'All'
  | 'Culinary & Cocktails'
  | 'Spirits & Editorial'
  | 'Hospitality & Events'
  | 'Couture & Automotive';

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  venueOrSeries: string;
  category: Exclude<PortfolioCategory, 'All'>;
  image: string;
  aspect: 'portrait' | 'landscape';
  year: string;
  deliverables: string[];
  description: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // --- New Food & Cocktail Collection ---
  {
    id: 'paparizza-flaming-rose',
    title: 'Paparizza — The Flaming Rose',
    client: 'Paparizza',
    venueOrSeries: 'Paparizza Fire Lounge',
    category: 'Culinary & Cocktails',
    image: '/portfolio/paparizza_flaming_rose.jpg',
    aspect: 'portrait',
    year: '2024',
    deliverables: ['High-Speed Fire Capture', 'Liquid Flame Refraction', 'Signature Cocktail Hero'],
    description:
      'A dramatic live-flame cocktail capture: vibrant fiery sparks illuminating crystal ice, dried botanicals, and deep crimson spirit.',
  },
  {
    id: 'paparizza-violet-frost',
    title: 'Paparizza — Sapphire Mist & Crushed Ice Pour',
    client: 'Paparizza',
    venueOrSeries: 'Paparizza Speakeasy',
    category: 'Culinary & Cocktails',
    image: '/portfolio/paparizza_violet_frost.jpg',
    aspect: 'portrait',
    year: '2024',
    deliverables: ['Atmospheric Low-Key Stills', 'Liquid Pour Action', 'Luxury Velvet Backdrop'],
    description:
      'Crushed ice pour over layered indigo-violet spirits against plush teal velvet, creating rich moody speakeasy contrast.',
  },
  {
    id: 'refuge-gilded-chalice',
    title: 'Refuge — Gilded Golden Chalice & Liquid Intelligence',
    client: 'Refuge',
    venueOrSeries: 'Refuge Speakeasy',
    category: 'Culinary & Cocktails',
    image: '/portfolio/refuge_gilded_chalice.jpg',
    aspect: 'portrait',
    year: '2025',
    deliverables: ['Luxury Chalice Still Life', 'Editorial Book Staging', 'VIP Menu Hero'],
    description:
      'An ornate gilded chalice cocktail crowned with dried citrus, staged atop mixology literature Liquid Intelligence and Cocktail Codex.',
  },
  {
    id: 'refuge-sunset-highball',
    title: 'Refuge — Solstice Agave Sunset Highball',
    client: 'Refuge',
    venueOrSeries: 'Refuge Bar & Grill',
    category: 'Culinary & Cocktails',
    image: '/portfolio/refuge_sunset_highball.jpg',
    aspect: 'portrait',
    year: '2025',
    deliverables: ['Ombré Liquid Layers', 'Black Marble Reflection', 'Bar Promotion Kit'],
    description:
      'A layered ombré sunset highball glowing against polished black marble, garnished with dehydrated blood orange.',
  },
  {
    id: 'prana-penne-confit',
    title: 'Prana — Penne Rosa Confit & Charred Sourdough',
    client: 'Prana',
    venueOrSeries: 'Prana Trattoria',
    category: 'Culinary & Cocktails',
    image: '/portfolio/prana_penne_confit.jpg',
    aspect: 'portrait',
    year: '2025',
    deliverables: ['Steam & Texture Stills', 'Artisanal Table Staging', 'Menu Campaign'],
    description:
      'Creamy tomato-cream penne garnished with fresh parmesan, basil, and paired with garlic herb sourdough crostini.',
  },
  {
    id: 'prana-herb-burrata',
    title: 'Prana — Heirloom Tomatoes & Handcrafted Burrata',
    client: 'Prana',
    venueOrSeries: 'Prana Garden Table',
    category: 'Culinary & Cocktails',
    image: '/portfolio/prana_herb_burrata.jpg',
    aspect: 'portrait',
    year: '2025',
    deliverables: ['Garden Fresh Contrast', 'Olive Oil Sheen', 'Social Flatlay Assets'],
    description:
      'Plump artisan burrata resting on sweet heirloom cherry tomatoes, basil pesto drizzle, and balsamic caviar pearls.',
  },
  {
    id: 'prana-artisan-flatbread',
    title: 'Prana — Woodfired Truffle & Burrata Flatbread',
    client: 'Prana',
    venueOrSeries: 'Prana Hearth',
    category: 'Culinary & Cocktails',
    image: '/portfolio/prana_artisan_flatbread.jpg',
    aspect: 'portrait',
    year: '2025',
    deliverables: ['Hearth Crust Detail', 'Melting Cheese Texture', 'Editorial Food Stills'],
    description:
      'Blistered Neapolitan woodfired crust with creamy burrata dollops, wild arugula, and aromatic white truffle glaze.',
  },
  {
    id: 'prana-signature-pour',
    title: 'Prana — Emerald Herb Elixir Tableside Service',
    client: 'Prana',
    venueOrSeries: 'Prana Bar & Dining',
    category: 'Culinary & Cocktails',
    image: '/portfolio/prana_signature_pour.jpg',
    aspect: 'portrait',
    year: '2025',
    deliverables: ['Tableside Beverage Pour', 'Vibrant Color Capture', 'Hospitality Storytelling'],
    description:
      'Artisanal glassware filled with crushed ice receiving a slow pour of vibrant emerald herb elixir.',
  },
  {
    id: 'local-violet-highball',
    title: 'Local — Violet Blossom & Brandied Cherry',
    client: 'Local',
    venueOrSeries: 'Local Highball Lab',
    category: 'Culinary & Cocktails',
    image: '/portfolio/local_violet_highball.jpg',
    aspect: 'portrait',
    year: '2025',
    deliverables: ['Bar Craft Photography', 'Backlit Ice Spear Detail', 'Social Campaign Reels'],
    description:
      'Striking violet-infused cocktail served over a single clear ice spear, garnished with brandied cherry and purple orchid.',
  },
  {
    id: 'local-amber-old-fashioned',
    title: 'Local — Barrel-Aged Amber Old Fashioned',
    client: 'Local',
    venueOrSeries: 'Local Mixology Bar',
    category: 'Culinary & Cocktails',
    image: '/portfolio/local_amber_old_fashioned.jpg',
    aspect: 'portrait',
    year: '2025',
    deliverables: ['Rich Amber Liquid Tone', 'Carved Ice Sphere', 'Low-Key Mood Stills'],
    description:
      'Rich deep amber aged whiskey stirred to silky perfection over an artisanal hand-carved ice sphere with expressed orange peel.',
  },
  {
    id: 'local-botanical-smash',
    title: 'Local — Rosemary & Ruby Citrus Smash',
    client: 'Local',
    venueOrSeries: 'Local Signature Cocktails',
    category: 'Culinary & Cocktails',
    image: '/portfolio/local_botanical_smash.jpg',
    aspect: 'portrait',
    year: '2025',
    deliverables: ['Fresh Herb Styling', 'Condensation Texture', 'Nightlife Visual Kit'],
    description:
      'Vibrant red citrus smash shaken with torched rosemary sprig, releasing aromatic oils into crystal cut glassware.',
  },
  {
    id: 'local-crimson-sour',
    title: 'Local — Spiced Velvet Crimson Sour',
    client: 'Local',
    venueOrSeries: 'Local Night Bar',
    category: 'Culinary & Cocktails',
    image: '/portfolio/local_crimson_sour.jpg',
    aspect: 'portrait',
    year: '2025',
    deliverables: ['Silky Foam Photography', 'Rich Crimson Hue', 'Bar Menu Key Visual'],
    description:
      'Velvety spiced sour featuring a dense white foam crown dusted with aromatic bitters over ruby liquor.',
  },
  {
    id: 'gastronomy-veloute-pour',
    title: 'Velouté Symphony — Tableside Herb Jus Pour',
    client: 'Haute Gastronomie',
    venueOrSeries: 'Modern Atelier Series',
    category: 'Culinary & Cocktails',
    image: '/portfolio/gastronomy_veloute_pour.jpg',
    aspect: 'portrait',
    year: '2025',
    deliverables: ['Tableside Service Capture', 'Action Liquid Stream', 'Macro Culinary Grade'],
    description:
      'A precision pour of velvety chive-herb velouté over an edible botanical tartlet, capturing liquid motion and gloss.',
  },
  {
    id: 'mixology-citrus-crest',
    title: 'Citrus Crest — Smoked Spiced Highball',
    client: 'Artisan Mixology Lab',
    venueOrSeries: 'Bespoke Cocktail Atelier',
    category: 'Culinary & Cocktails',
    image: '/portfolio/mixology_citrus_crest.jpg',
    aspect: 'landscape',
    year: '2025',
    deliverables: ['Horizontal Bar Staging', 'Micro-Foam Capture', 'Chiaroscuro Backlight'],
    description:
      'Artisanal highball rested in sculpted dark timber, crowned with citrus vapor foam, dehydrated citrus wheel, and spiced rim.',
  },
  {
    id: 'gastronomy-smoke-plate',
    title: 'The Charcoal Hearth — Smoked Carpaccio',
    client: 'Epicurean Showcase',
    venueOrSeries: 'Bespoke Dining Atelier',
    category: 'Culinary & Cocktails',
    image: '/portfolio/gastronomy_smoke_plate.jpg',
    aspect: 'landscape',
    year: '2025',
    deliverables: ['Atmospheric Smoke Stills', 'Horizontal Table Architecture', 'Menu Feature Visuals'],
    description:
      'Richly textured smoked carpaccio adorned with micro-greens and citrus pearls under directional tungsten studio lighting.',
  },
  {
    id: 'mixology-botanical-spritz',
    title: 'Botanical Mist — Elderflower & Herb Spritz',
    client: 'Bespoke Bar Craft',
    venueOrSeries: 'Botanical Lounge',
    category: 'Culinary & Cocktails',
    image: '/portfolio/mixology_botanical_spritz.jpg',
    aspect: 'portrait',
    year: '2025',
    deliverables: ['Glassware Transparency', 'Herb Garnish Styling', 'Luminescence Grade'],
    description:
      'Effervescent elderflower spritz with hand-pressed botanical garnishes and crystal clear ice tower.',
  },
  {
    id: 'gastronomy-tasting-spoon',
    title: 'Amuse-Bouche — Truffle & Caviar Quenelle',
    client: "Chef's Tasting Counter",
    venueOrSeries: 'Private Dining Atelier',
    category: 'Culinary & Cocktails',
    image: '/portfolio/gastronomy_tasting_spoon.jpg',
    aspect: 'portrait',
    year: '2025',
    deliverables: ['Macro Plating Precision', 'Luxury Texture Grading', 'Tasting Menu Feature'],
    description:
      'Ultra-macro study of caviar and black truffle cream served on bespoke ceramic tasting spoons.',
  },
  {
    id: 'gastronomy-crudo-bloom',
    title: 'Crudo Bloom — Cured Kingfish & Sea Urchin',
    client: 'Oceanic Tasting Menu',
    venueOrSeries: 'Fine Dining Atelier',
    category: 'Culinary & Cocktails',
    image: '/portfolio/gastronomy_crudo_bloom.jpg',
    aspect: 'portrait',
    year: '2025',
    deliverables: ['Seafood Styling Stills', 'Color Contrast Grading', 'Editorial Plating'],
    description:
      'Delicate kingfish crudo rosettes paired with sea urchin roe, pickled radishes, and cold-pressed citrus oil droplets.',
  },
  {
    id: 'cinnamon-turkish-cigars',
    title: 'Cinnamon Turkish Cigars — Mango Emulsion',
    client: 'Levantine Gastronomy',
    venueOrSeries: 'Artisan Kitchen',
    category: 'Culinary & Cocktails',
    image: '/portfolio/cinnamon_turkish_cigars.jpg',
    aspect: 'portrait',
    year: '2024',
    deliverables: ['Crisp Pastry Texture', 'Vibrant Emulsion Swirls', 'Culinary Editorial'],
    description:
      'Golden crispy pastry rolls filled with spiced spiced filling, plated over vibrant saffron mango coulis and violet petals.',
  },
  {
    id: 'culinary-hamachi-crudo',
    title: 'Hamachi Tartare — Citrus Ponzu Reduction Pour',
    client: 'High Gastronomy Series',
    venueOrSeries: 'Modern Atelier',
    category: 'Culinary & Cocktails',
    image: '/portfolio/culinary_hamachi_crudo.jpg',
    aspect: 'portrait',
    year: '2024',
    deliverables: ['Pour Action Detail', 'Vibrant Blood Orange Contrast', 'Culinary Feature Stills'],
    description:
      'Cold-pressed citrus ponzu poured over delicate hamachi tartare adorned with edible petals, blood orange, and sea urchin.',
  },

  // --- Curated Flagship Spirits, Couture & Hospitality Shoots ---
  {
    id: 'chivas-xv-prestige',
    title: 'Chivas Regal XV — Cognac Cask Prestige',
    client: 'Pernod Ricard',
    venueOrSeries: 'Chivas XV Editorial',
    category: 'Spirits & Editorial',
    image: '/portfolio/chivas_photo_edited_3.jpg',
    aspect: 'portrait',
    year: '2025',
    deliverables: ['Luxury Still Life', 'Gold Foil Key Visuals', 'Campaign Grading'],
    description:
      'Low-key chiaroscuro product staging highlighting embossed metallic crests and amber glass refraction on dark damask.',
  },
  {
    id: 'pernod-flaming-reserve',
    title: 'Flaming Reserve — House of Spirits',
    client: 'Pernod Ricard',
    venueOrSeries: '100 Pipers • Jameson • Absolut',
    category: 'Spirits & Editorial',
    image: '/portfolio/100pipers_3.jpg',
    aspect: 'landscape',
    year: '2025',
    deliverables: ['Commercial Bar Stills', 'High-Speed Fire Capture', 'Social Launch Kit'],
    description:
      'Dramatic bar-top composition capturing live flame refraction across Pernod Ricard’s flagship blended Scotch, Irish whiskey, and vodka portfolio.',
  },
  {
    id: 'gaurav-gupta-sculptural',
    title: 'Gaurav Gupta — Sculptural Menswear Atelier',
    client: 'Monika Alcobev × Couture Showcase',
    venueOrSeries: 'Gaurav Gupta Flagship',
    category: 'Couture & Automotive',
    image: '/portfolio/gaurav_gupta_1.jpg',
    aspect: 'portrait',
    year: '2026',
    deliverables: ['Architectural Lookbook', 'Monochrome Tone Grade', 'VIP Preview Coverage'],
    description:
      'Gallery-lit study of intricate hand-embroidered couture silhouettes paired with bespoke velvet footwear on monolithic plinths.',
  },
  {
    id: 'leela-1800-anejo',
    title: '1800 Tequila Añejo — The Library Bar',
    client: 'Monika Alcobev',
    venueOrSeries: 'The Leela Palace, New Delhi',
    category: 'Hospitality & Events',
    image: '/portfolio/leela_palace_2.jpg',
    aspect: 'portrait',
    year: '2026',
    deliverables: ['Luxury Venue Activation', 'Backlit Brand Display', 'Guest Experience Reels'],
    description:
      'Ambient twilight framing of the "Discover the Unexpected" showcase inside The Leela Palace’s iconic Library Bar.',
  },
  {
    id: 'bird-automotive-bushmills',
    title: 'Bird Automotive × Bushmills — Bespoke Lounge',
    client: 'BMW Bird Automotive × Monika Alcobev',
    venueOrSeries: 'Private Showroom Activation',
    category: 'Couture & Automotive',
    image: '/portfolio/bmw_shoot_2.jpg',
    aspect: 'landscape',
    year: '2025',
    deliverables: ['Automotive Hospitality', 'Environmental Portraiture', 'Event Documentation'],
    description:
      'Architectural bar staging and bespoke mixology coverage for a curated BMW client evening featuring Bushmills 12-Year Single Malt.',
  },
  {
    id: 'absolut-cobalt-soundstage',
    title: 'Absolut — Cobalt Soundstage',
    client: 'Pernod Ricard',
    venueOrSeries: 'Absolut Live Culture',
    category: 'Hospitality & Events',
    image: '/portfolio/absolut_nov_2.jpg',
    aspect: 'portrait',
    year: '2025',
    deliverables: ['Live Music Photography', 'Editorial Framing', 'Social Cutdowns'],
    description:
      'Atmospheric architectural perspective framing live electronic performance energy through industrial steel grids and cobalt stage wash.',
  },
  {
    id: 'tequila-1800-precision',
    title: '1800 Blanco — Precision Mixology',
    client: 'Monika Alcobev',
    venueOrSeries: 'Artisanal Pour Series',
    category: 'Spirits & Editorial',
    image: '/portfolio/tequila_1800_2.jpg',
    aspect: 'portrait',
    year: '2024',
    deliverables: ['Hospitality Craft Stills', 'Menu Visuals', 'Bartender Storytelling'],
    description:
      'Shallow-depth craft study capturing hand-carved crystal ice placement alongside 1800 Tequila Blanco against warm backbar amber.',
  },
  {
    id: 'india-art-fair-mr-button',
    title: 'India Art Fair × Mr Button Salon',
    client: 'Monika Alcobev',
    venueOrSeries: 'India Art Fair, New Delhi',
    category: 'Hospitality & Events',
    image: '/portfolio/india_art_fair_1.jpg',
    aspect: 'landscape',
    year: '2026',
    deliverables: ['Cultural Fair Coverage', 'Co-Branded Installation', 'Press Assets'],
    description:
      'Minimalist warm-glow brand sculpture anchoring the VIP hospitality lounge during India Art Fair.',
  },
  {
    id: 'chivas-xv-close-study',
    title: 'Chivas XV — Amber Glass & Seal',
    client: 'Pernod Ricard',
    venueOrSeries: 'Chivas Bottle Study',
    category: 'Spirits & Editorial',
    image: '/portfolio/chivas_photo_edited_2.jpg',
    aspect: 'portrait',
    year: '2025',
    deliverables: ['Macro Product Detail', 'E-Commerce Hero Stills', 'Digital Collateral'],
    description:
      'Ultra-shallow depth study emphasizing the sculpted crest, cognac-cask neck foil, and warm gold typography.',
  },
  {
    id: 'ballantines-stay-true',
    title: "Ballantine's — Stay True Capsule",
    client: 'Pernod Ricard',
    venueOrSeries: "Ballantine's Lifestyle",
    category: 'Spirits & Editorial',
    image: '/portfolio/ballantines_2.jpg',
    aspect: 'portrait',
    year: '2024',
    deliverables: ['Brand Merchandise Flatlay', 'Textile Detail', 'Social Campaign'],
    description:
      'Tactile flatlay study uniting custom apparel typography, canvas packaging, and enamel pin craftsmanship.',
  },
  {
    id: 'pipers-nocturne-pour',
    title: '100 Pipers — Nocturne Pour',
    client: 'Pernod Ricard',
    venueOrSeries: 'Master Mixology Series',
    category: 'Hospitality & Events',
    image: '/portfolio/100pipers_1.jpg',
    aspect: 'landscape',
    year: '2025',
    deliverables: ['Action Pour Photography', 'Nightlife Coverage', 'Creator Reels'],
    description:
      'High-contrast slow-shutter pour study highlighting amber liquid motion under dramatic overhead bar lighting.',
  },
  {
    id: 'gaurav-gupta-embroidery',
    title: 'Gaurav Gupta — Handcrafted Metallic Brocade',
    client: 'Monika Alcobev × Couture Showcase',
    venueOrSeries: 'Gaurav Gupta Flagship',
    category: 'Couture & Automotive',
    image: '/portfolio/gaurav_gupta_2.jpg',
    aspect: 'portrait',
    year: '2026',
    deliverables: ['Detail Documentation', 'VIP Lookbook', 'Luxury Brand Assets'],
    description:
      'Warm studio-graded perspective showcasing sculptural metallic zardozi embroidery on tailored velvet.',
  },
];

export interface ServicePillar {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  deliverables: string[];
  outcomes: string[];
}

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    number: '01',
    id: 'photography',
    title: 'Luxury Photography & Visual Production',
    subtitle: 'Culinary • Mixology • Spirits • Hospitality • Couture',
    summary:
      'Museum-grade still photography and cinematic imagery engineered for discerning hospitality and luxury brands. From signature cocktails and haute gastronomy to flagship bottle campaigns, luxury hotels, and private automotive lounges.',
    deliverables: [
      'Culinary Gastronomy & Artisanal Mixology Campaigns',
      'Editorial Spirits & Luxury Product Still Life',
      'Five-Star Hospitality, Bar & Nightlife Coverage',
      'Couture, Automotive & Cultural Fair Documentation',
      'Color-Graded Post-Production & Print-Ready Masters',
    ],
    outcomes: [
      'Cohesive visual authority across press, print, menus & social',
      'Fast-turnaround VIP selects and high-resolution deliverables',
      'Custom art direction aligned with global brand standards',
    ],
  },
  {
    number: '02',
    id: 'social',
    title: 'Social Media Marketing & Amplification',
    subtitle: 'Narrative Strategy • Short-Form Reels • Paid Acquisition',
    summary:
      'We transform bespoke visual production into compounding digital demand. Every frame is paired with platform-native storytelling, creator orchestration, and precision paid distribution.',
    deliverables: [
      'Monthly Editorial Content Calendars & Grid Curation',
      'High-Retention Short-Form Reels & Launch Teasers',
      'Meta, Instagram & LinkedIn Paid Media Management',
      'Influencer, Sommelier & Cultural Partner Seeding',
    ],
    outcomes: [
      'Elevated brand desirability without discounting',
      'Predictable audience growth and qualified inbound reservations',
      'Unified creative-to-conversion messaging across channels',
    ],
  },
  {
    number: '03',
    id: 'it-web',
    title: 'IT Services & Bespoke Web Engineering',
    subtitle: 'Luxury Websites • Custom Platforms • Cloud & Automation',
    summary:
      'High-craft software engineering tailored for brands that refuse generic templates. We architect ultra-fast websites, interactive flagships, booking systems, and scalable business infrastructure.',
    deliverables: [
      'Bespoke Luxury Websites & Interactive Brand Flagships',
      'Custom Web Applications, Portals & Booking Engines',
      'E-Commerce Storefronts, CRM & Payment Integrations',
      'Cloud Deployment, Performance Optimization & Technical SEO',
    ],
    outcomes: [
      'Sub-second perceived load speeds and fluid responsiveness',
      'Conversion-engineered UX built around your buyer journey',
      'Clean, maintainable TypeScript & modern cloud architecture',
    ],
  },
  {
    number: '04',
    id: 'branding',
    title: 'Brand Identity & Creative Direction',
    subtitle: 'Positioning • Visual Systems • Collateral • Packaging',
    summary:
      'Timeless identity architecture that commands category premiums. We define your verbal voice, typographic hierarchy, monogram geometry, packaging systems, and spatial event language.',
    deliverables: [
      'Brand Strategy, Naming & Luxury Positioning',
      'Logo Marks, Typography & Color System Design',
      'Menu, Packaging, Lookbook & Print Collateral',
      'Comprehensive Brand Guidelines & Digital Asset Kits',
    ],
    outcomes: [
      'Unmistakable shelf, screen, and venue presence',
      'Consistent execution across menus, agencies & markets',
      'Higher perceived value and stronger customer recall',
    ],
  },
  {
    number: '05',
    id: 'analytics',
    title: 'Data Analysis for Business Growth',
    subtitle: 'Attribution • Revenue Dashboards • Cohort & Funnel Intelligence',
    summary:
      'Artistry backed by empirical rigor. Our analytics practice connects creative campaigns, website behavior, and sales pipelines into executive dashboards that expose where revenue compounds.',
    deliverables: [
      'Multi-Touch Campaign & Channel Attribution Modeling',
      'Executive KPI, Revenue & Customer Cohort Dashboards',
      'Website Funnel Audits, A/B Testing & CRO Roadmaps',
      'Audience Segmentation & Predictive Growth Forecasting',
    ],
    outcomes: [
      'Eliminate wasted ad spend with clear ROAS visibility',
      'Identify highest-LTV customer segments & booking channels',
      'Turn creative intuition into repeatable revenue levers',
    ],
  },
];

export interface AnalyticsScenario {
  id: string;
  label: string;
  industry: string;
  headline: string;
  summary: string;
  kpis: {
    label: string;
    value: string;
    delta: string;
  }[];
  monthlySeries: {
    month: string;
    revenueIndex: number;
    baselineIndex: number;
  }[];
  funnelSteps: {
    stage: string;
    metric: string;
    pct: number;
  }[];
}

export const ANALYTICS_SCENARIOS: AnalyticsScenario[] = [
  {
    id: 'hospitality',
    label: 'Hospitality & Luxury Spirits',
    industry: 'Multi-Venue Activations + Social + Web',
    headline: 'Connecting Editorial Shoots to Venue Footfall & Bottle Velocity',
    summary:
      'Illustrative growth model combining on-premise visual production, geo-targeted Reels, bespoke reservation landing pages, and cohort attribution across 6 months.',
    kpis: [
      { label: 'Blended Campaign ROAS', value: '4.6x', delta: '+68% vs prior quarter' },
      { label: 'Qualified VIP Bookings', value: '+142%', delta: 'Reservation funnel' },
      { label: 'Avg Spend / Party', value: '₹18,400', delta: '+34% premium upsell' },
      { label: 'Social Save-to-Visit', value: '18.9%', delta: 'High intent conversion' },
    ],
    monthlySeries: [
      { month: 'M1', revenueIndex: 32, baselineIndex: 30 },
      { month: 'M2', revenueIndex: 45, baselineIndex: 31 },
      { month: 'M3', revenueIndex: 58, baselineIndex: 33 },
      { month: 'M4', revenueIndex: 72, baselineIndex: 34 },
      { month: 'M5', revenueIndex: 86, baselineIndex: 36 },
      { month: 'M6', revenueIndex: 100, baselineIndex: 37 },
    ],
    funnelSteps: [
      { stage: 'Editorial Content Impressions', metric: '1.85M Views', pct: 100 },
      { stage: 'High-Intent Landing Page Visits', metric: '94.2K Visits', pct: 62 },
      { stage: 'Menu & VIP Table Inquiries', metric: '12.4K Inquiries', pct: 36 },
      { stage: 'Confirmed High-Value Covers', metric: '4,180 Bookings', pct: 22 },
    ],
  },
  {
    id: 'e-commerce',
    label: 'Direct-to-Consumer & Retail',
    industry: 'High-Ticket Brand Flagship + CRM',
    headline: 'Scaling Conversion & Repeat Order LTV for Bespoke Products',
    summary:
      'Illustrative e-commerce growth architecture tracking macro still photography, ultra-fast headless storefront engineering, and post-purchase email workflows.',
    kpis: [
      { label: 'Storefront Conversion Rate', value: '3.82%', delta: '+1.45% lift vs baseline' },
      { label: 'Average Order Value', value: '₹12,850', delta: '+28% cart enrichment' },
      { label: 'Customer Acquisition Cost', value: '-31%', delta: 'Organic & retargeting' },
      { label: 'Repeat Client Rate', value: '41%', delta: 'CRM lifecycle flows' },
    ],
    monthlySeries: [
      { month: 'M1', revenueIndex: 38, baselineIndex: 35 },
      { month: 'M2', revenueIndex: 49, baselineIndex: 36 },
      { month: 'M3', revenueIndex: 63, baselineIndex: 36 },
      { month: 'M4', revenueIndex: 74, baselineIndex: 38 },
      { month: 'M5', revenueIndex: 88, baselineIndex: 39 },
      { month: 'M6', revenueIndex: 98, baselineIndex: 40 },
    ],
    funnelSteps: [
      { stage: 'Search & Social Flagship Traffic', metric: '420K Sessions', pct: 100 },
      { stage: 'Lookbook & Product Detail Depth', metric: '68% Scroll Depth', pct: 68 },
      { stage: 'Private Appointment / Bag Add', metric: '24.6K Intents', pct: 42 },
      { stage: 'Completed Flagship Orders', metric: '6,890 Orders', pct: 24 },
    ],
  },
  {
    id: 'enterprise-growth',
    label: 'B2B & Enterprise Services',
    industry: 'IT Systems + LinkedIn Growth + BI',
    headline: 'Full-Funnel Pipeline Intelligence for Scaling Enterprises',
    summary:
      'Illustrative B2B growth architecture integrating executive brand positioning, custom client portals, CRM instrumentation, and SQL pipeline forecasting.',
    kpis: [
      { label: 'SQL Pipeline Velocity', value: '3.1x', delta: 'Inbound + ABM' },
      { label: 'Lead-to-Close Cycle', value: '-24%', delta: 'Automated qualification' },
      { label: 'Portal Adoption', value: '92%', delta: 'Active client accounts' },
      { label: 'Forecast Accuracy', value: '94.5%', delta: 'Cohort revenue model' },
    ],
    monthlySeries: [
      { month: 'M1', revenueIndex: 30, baselineIndex: 28 },
      { month: 'M2', revenueIndex: 42, baselineIndex: 30 },
      { month: 'M3', revenueIndex: 55, baselineIndex: 31 },
      { month: 'M4', revenueIndex: 69, baselineIndex: 33 },
      { month: 'M5', revenueIndex: 82, baselineIndex: 34 },
      { month: 'M6', revenueIndex: 94, baselineIndex: 35 },
    ],
    funnelSteps: [
      { stage: 'Executive Content & ABM Reach', metric: '310K Decision Makers', pct: 100 },
      { stage: 'Interactive Audit & Case Studies', metric: '28.5K Engaged', pct: 64 },
      { stage: 'Discovery & Architecture Briefs', metric: '1,940 Qualified', pct: 38 },
      { stage: 'Signed Retainer Contracts', metric: '412 Engagements', pct: 21 },
    ],
  },
];

export const CLIENT_MARQUEE = [
  'PAPARIZZA',
  'REFUGE',
  'PRANA',
  'LOCAL',
  'PERNOD RICARD',
  'MONIKA ALCOBEV',
  'CHIVAS REGAL XV',
  '1800 TEQUILA',
  'THE LEELA PALACE',
  'ABSOLUT',
  'BALLANTINE’S',
  'BUSHMILLS',
  'GAURAV GUPTA',
  'BIRD AUTOMOTIVE (BMW)',
  '100 PIPERS',
  'JOSE CUERVO',
  'COSY BOX',
  'INDIA ART FAIR',
  'SIDECAR',
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Commercial Audit',
    detail:
      'We dissect your brand equity, visual gaps, technical stack, and historical revenue data to pinpoint the highest-leverage opportunities.',
  },
  {
    step: '02',
    title: 'Creative & System Architecture',
    detail:
      'Art direction moodboards, brand identity rules, UX wireframes, and KPI telemetry schemas are unified into one coherent blueprint.',
  },
  {
    step: '03',
    title: 'Production & Precision Engineering',
    detail:
      'On-location luxury shoots, social motion production, and full-stack TypeScript web builds executed by senior specialists under one roof.',
  },
  {
    step: '04',
    title: 'Attribution & Compounding Scale',
    detail:
      'Post-launch, our data analysts monitor funnel conversion, creative fatigue, and ROAS—iterating weekly so growth compounds.',
  },
];

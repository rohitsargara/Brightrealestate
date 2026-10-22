export interface CorridorInfo {
  id: string;
  name: string;
  tagline: string;
  overview: string;
  priceRange: string;
  dlcRateAvg: string;
  dominantPropertyTypes: string[];
  keyHighlights: string[];
  connectivity: string;
  suitability: string;
}

export const JAIPUR_CORRIDORS: CorridorInfo[] = [
  {
    id: 'vaishali-nagar',
    name: 'Vaishali Nagar & Chitrakoot',
    tagline: 'Jaipur’s Established Western Luxury Epicenter',
    overview: 'The golden standard of upscale Jaipur living. Vaishali Nagar features high-street retail (Amrapali Circle), upscale educational institutions, and independent luxury villas commanding strong capital retention.',
    priceRange: '₹8,500 – ₹16,000 / sq.ft',
    dlcRateAvg: '₹48,000 – ₹75,000 / sq.yd',
    dominantPropertyTypes: ['Luxury Duplex Villas', 'Premium Builder Floors', 'High-Street Retail Showrooms'],
    keyHighlights: [
      'Proximity to 200 Ft Bypass and Ajmer Road Flyover',
      'High-end dining, boutique cafes, and medical institutions',
      'Mature social infrastructure with zero open land wastage',
      'Consistent 8–10% annual capital appreciation'
    ],
    connectivity: '12 min to Railway Station · 22 min to Airport',
    suitability: 'High-net-worth families, established entrepreneurs, doctors'
  },
  {
    id: 'jhotwara-kalwar',
    name: 'Jhotwara & Kalwar Road',
    tagline: 'High-Growth JDA Residential Enclave',
    overview: 'The primary residential gateway of Jaipur West with exponential suburban growth. Known for well-planned JDA approved townships, peaceful residential colonies, and accessible pricing for growing families.',
    priceRange: '₹3,200 – ₹5,800 / sq.ft',
    dlcRateAvg: '₹18,000 – ₹32,000 / sq.yd',
    dominantPropertyTypes: ['JDA Freehold Plots', 'Independent 3/4BHK Houses', 'Affordable Builder Apartments'],
    keyHighlights: [
      'Extensive choice of JDA 90A approved residential plots',
      'Direct connectivity to Sikar Road and Jaipur West bypass',
      'Rapid infrastructure expansion with 40ft to 80ft arterial roads',
      'Ideal balance between affordability and investment multiplier'
    ],
    connectivity: '8 min to Dahar Ka Balaji Station · 15 min to Vaishali Nagar',
    suitability: 'First-time home buyers, custom villa builders, long-term investors'
  },
  {
    id: 'jagatpura-mahal',
    name: 'Jagatpura & Mahal Road',
    tagline: 'The Modern Institutional & Medical Corridor',
    overview: 'Jaipur’s fastest-growing modern high-rise district, favored by tech professionals and medical specialists due to premier hospitals (Bombay Hospital, Narayana Hrudayalaya) and educational universities.',
    priceRange: '₹4,500 – ₹7,800 / sq.ft',
    dlcRateAvg: '₹28,000 – ₹42,000 / sq.yd',
    dominantPropertyTypes: ['Modern Gated Apartments', 'Sky Penthouses', 'Commercial Offices'],
    keyHighlights: [
      'Just 10 minutes from Jaipur International Airport (Terminal 2)',
      'Close to Sitapura Industrial Area & RIICO IT SEZ',
      'Wide planned 100ft and 160ft sector master plan roads',
      'High rental yield from healthcare & engineering faculties'
    ],
    connectivity: '10 min to Airport · 12 min to Malviya Nagar / Gaurav Tower',
    suitability: 'Professionals, rental yield investors, young modern families'
  },
  {
    id: 'ajmer-road',
    name: 'Ajmer Road & Mansarovar',
    tagline: 'Expressway Lifeline & Metro Connectivity',
    overview: 'Bridging Jaipur’s historic Mansarovar housing board scheme with the futuristic Mahindra World City SEZ along NH-48. Boasts Jaipur Metro Phase 1 and Ring Road integration.',
    priceRange: '₹4,200 – ₹9,500 / sq.ft',
    dlcRateAvg: '₹30,000 – ₹55,000 / sq.yd',
    dominantPropertyTypes: ['Township Villas', 'High-Rise Condominiums', 'JDA Scheme Plots'],
    keyHighlights: [
      'Direct access to Jaipur Metro Station (Mansarovar terminus)',
      'Strategic gateway to Mahindra World City SEZ & Delhi-Mumbai corridor',
      'Proximity to reputed schools (St. Xavier’s, Delhi Public School)',
      'Jaipur Ring Road connects seamlessly to Agra and Tonk Roads'
    ],
    connectivity: 'Immediate Metro access · Direct NH-48 expressway',
    suitability: 'SEZ professionals, commuters, institutional investors'
  },
  {
    id: 'vki-industrial',
    name: 'VKI (Vishwakarma) & Sikar Road',
    tagline: 'Rajasthan’s Premier Commercial & Logistics Engine',
    overview: 'The preeminent industrial and warehousing territory of Jaipur with over 2,000 manufacturing and logistics facilities. Ideal for cold storage, logistics depots, and commercial transport hubs.',
    priceRange: '₹22,000 – ₹45,000 / sq.yd (Land)',
    dlcRateAvg: '₹24,000 – ₹48,000 / sq.yd',
    dominantPropertyTypes: ['Industrial Sheds & Depots', 'PEB Warehouses', 'Factory Plots'],
    keyHighlights: [
      'Heavy trailer maneuverability with 60ft to 80ft arterial roads',
      'Uninterrupted 33KV/11KV industrial power substations',
      'Zero restriction on heavy commercial transport movement',
      'High institutional demand for e-commerce regional transit hubs'
    ],
    connectivity: 'Zero km to Sikar Road Highway · 15 min to Ring Road junction',
    suitability: 'Logistics operators, manufacturers, supply chain conglomerates'
  }
];

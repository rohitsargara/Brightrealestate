export interface Property {
  id: string;
  title: string;
  category: 'residential' | 'plots' | 'commercial' | 'warehousing';
  categoryLabel: string;
  corridor: string;
  subLocation: string;
  priceFormatted: string;
  priceRaw: number; // in INR Lakhs
  unitSize: string;
  sqftArea: number;
  approvalType: 'JDA Approved' | '90A Clear' | 'RERA Registered' | 'Freehold Registry';
  facing: string;
  furnishing?: string;
  description: string;
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
  architecturalStyle: string;
  status: 'Ready for Possession' | 'Immediate Registry' | 'Available';
}

export const PROPERTIES: Property[] = [
  {
    id: 'vaishali-aranya-villa',
    title: 'The Aranya Residence',
    category: 'residential',
    categoryLabel: 'Luxury Villa',
    corridor: 'Vaishali Nagar',
    subLocation: 'Gandhi Path West, Jaipur',
    priceFormatted: '₹2.85 Cr',
    priceRaw: 285,
    unitSize: '3,450 sq.ft · 250 sq.yd plot',
    sqftArea: 3450,
    approvalType: 'JDA Approved',
    facing: 'North-East (Vastu Compliant)',
    furnishing: 'Semi-Furnished Bespoke Woodwork',
    description: 'An architectural 4BHK independent duplex residence crafted with natural Dholpur stone accents, double-height living pavilion, internal lightwell, and private rooftop deck.',
    features: [
      '4 En-Suite Bedrooms with Walk-in Closets',
      'Italian Statuario Marble Flooring',
      'Double-Height Living & Dining Room',
      'Landscaped Zen Water Courtyard',
      'Covered Parking for 2 Large SUVs',
      'Independent Submersible & 15,000L Sump Tank'
    ],
    specs: [
      { label: 'Plot Area', value: '250 Sq. Yards' },
      { label: 'Super Built-Up', value: '3,450 Sq. Feet' },
      { label: 'Title', value: 'JDA Approved (Patta in Hand)' },
      { label: 'Road Width', value: '40 Ft Sector Road' },
      { label: 'Completion', value: 'Brand New (2025)' }
    ],
    architecturalStyle: 'Modern Desert Minimalist',
    status: 'Ready for Possession'
  },
  {
    id: 'kalwar-vatika-plot',
    title: 'Vatika Palm Enclave Plot',
    category: 'plots',
    categoryLabel: 'JDA Residential Plot',
    corridor: 'Jhotwara / Kalwar Road',
    subLocation: 'Near Govindam Tower, Kalwar Road, Jaipur',
    priceFormatted: '₹58.5 Lakh',
    priceRaw: 58.5,
    unitSize: '200 sq.yd (30 × 60 ft)',
    sqftArea: 1800,
    approvalType: 'JDA Approved',
    facing: 'East Facing',
    description: 'Prime rectangular corner plot inside a fully developed gated residential scheme with paved interlocking roads, dedicated green parks, and underground electrification.',
    features: [
      'Clear JDA Lease Deed (Patta Issued)',
      'Direct 40-foot Interlocking Paver Road',
      'Underground Electrical & Sewerage Lines',
      'Boom-Barrier Security & Boundary Wall',
      'Immediate Bank Loan Approval up to 80%',
      'Surrounded by inhabited villas'
    ],
    specs: [
      { label: 'Plot Size', value: '200 Sq. Yards' },
      { label: 'Dimensions', value: '30 ft Front × 60 ft Depth' },
      { label: 'Approval', value: 'JDA Approved Scheme' },
      { label: 'Water Source', value: 'Bisalpur Line Connected' },
      { label: 'Possession', value: 'Immediate Registry' }
    ],
    architecturalStyle: 'Gated Residential Township',
    status: 'Immediate Registry'
  },
  {
    id: 'tonk-meridian-commercial',
    title: 'The Meridian Commercial Plaza',
    category: 'commercial',
    categoryLabel: 'Commercial Floor',
    corridor: 'Tonk Road',
    subLocation: 'Near Gopalpura Bypass Junction, Jaipur',
    priceFormatted: '₹4.20 Cr',
    priceRaw: 420,
    unitSize: '3,800 sq.ft Super Area',
    sqftArea: 3800,
    approvalType: 'Freehold Registry',
    facing: 'Main Road Frontage',
    furnishing: 'Bare-shell with High Ceiling (13.5 ft)',
    description: 'High-visibility corporate showroom or office space on Jaipur’s most bustling arterial commercial corridor with dedicated multi-level basement parking and heavy footfall.',
    features: [
      '65 Ft Clear Frontage Glass Glazing',
      '13.5 Ft Clear Ceiling Height',
      'Dual High-Speed Passenger & Service Lifts',
      '100% DG Power Backup & VRV Provision',
      'Designated Reserved Basement Bays (6 Cars)',
      'Fire NOC & Occupancy Certificate Approved'
    ],
    specs: [
      { label: 'Floor Level', value: '1st Floor Prime Showroom' },
      { label: 'Usable Carpet', value: '3,120 Sq. Feet' },
      { label: 'Signage Rights', value: 'Full Highway Facing Facade' },
      { label: 'Power Load', value: '45 KW Sanctioned' },
      { label: 'Suitability', value: 'Bank, Flagship Retail, IT Office' }
    ],
    architecturalStyle: 'Curtain-Wall Contemporary Glass',
    status: 'Ready for Possession'
  },
  {
    id: 'jagatpura-mahal-penthouse',
    title: 'Mahal Ridge Sky Penthouse',
    category: 'residential',
    categoryLabel: 'Luxury Penthouse',
    corridor: 'Jagatpura',
    subLocation: 'Mahal Road near Bombay Hospital, Jaipur',
    priceFormatted: '₹1.65 Cr',
    priceRaw: 165,
    unitSize: '2,380 sq.ft · 3BHK + Private Terrace',
    sqftArea: 2380,
    approvalType: 'RERA Registered',
    facing: 'South-East (Aravalli Ridge View)',
    furnishing: 'Designer Modular Kitchen & VRV ACs',
    description: 'Top-floor penthouse with an exclusive 600 sq.ft private sky terrace overlooking panoramic sunrises. Built by a premier A-grade developer with low-density 2 units per floor.',
    features: [
      '600 sq.ft Landscaped Private Sky Deck',
      'Direct Elevator Access with Smart Keycard',
      'European Modular Kitchen with German Hardware',
      'Clubhouse with Infinity Pool & Squash Court',
      'Walking Distance to International Schools & Hospitals',
      'RERA Verified & Title Clearance Report'
    ],
    specs: [
      { label: 'Configuration', value: '3 Bedrooms + 4 Baths + Terrace' },
      { label: 'Floor', value: '12th Floor (Top)' },
      { label: 'Parking', value: '2 Covered Basement Slots' },
      { label: 'Maintenance', value: '₹2.50 per sq.ft' },
      { label: 'Registry', value: 'Immediate Transfer' }
    ],
    architecturalStyle: 'Contemporary Minimalist Penthouse',
    status: 'Ready for Possession'
  },
  {
    id: 'vki-logistics-depot',
    title: 'VKI Industrial Logistics Hub',
    category: 'warehousing',
    categoryLabel: 'Industrial Warehouse',
    corridor: 'VKI / Sikar Road',
    subLocation: 'Vishwakarma Industrial Area Road No. 14, Jaipur',
    priceFormatted: '₹6.50 Cr',
    priceRaw: 650,
    unitSize: '16,500 sq.ft Covered Shed on 2,200 sq.yd',
    sqftArea: 16500,
    approvalType: 'Freehold Registry',
    facing: 'North Facing with 60 Ft Wide Road',
    description: 'Pre-Engineered Building (PEB) industrial storage depot engineered for logistics hubs, distribution centers, or manufacturing units, with heavy trailer turning radius.',
    features: [
      '32 Ft Clear Center Height / 26 Ft Eaves',
      'Trimix Industrial Grade Epoxy-Finished Floor (6T/m²)',
      '4 Hydraulic Dock Levelers with Weather Canopies',
      'Dedicated Weighbridge & Driver Rest Facility',
      '150 KVA Sanctioned Industrial Transformer',
      'Direct Access to Jaipur-Delhi National Highway 48'
    ],
    specs: [
      { label: 'Plot Size', value: '2,200 Sq. Yards' },
      { label: 'Shed Footprint', value: '16,500 Sq. Feet' },
      { label: 'Office Block', value: '1,800 Sq. Feet G+1 Admin Space' },
      { label: 'Road Width', value: '60 Ft Industrial Carrier Road' },
      { label: 'Zoning', value: 'RIICO Industrial Converted' }
    ],
    architecturalStyle: 'PEB High-Clearance Logistics Facility',
    status: 'Available'
  },
  {
    id: 'mansarovar-shyam-estate',
    title: 'Shyam Enclave Prime Villa Plot',
    category: 'plots',
    categoryLabel: 'JDA Residential Plot',
    corridor: 'Mansarovar Extension',
    subLocation: 'Near Muhana Mandi Road & Ring Road, Jaipur',
    priceFormatted: '₹72.0 Lakh',
    priceRaw: 72,
    unitSize: '160 sq.yd (24 × 60 ft)',
    sqftArea: 1440,
    approvalType: 'JDA Approved',
    facing: 'North Facing',
    description: 'Clear-title residential plot in an established society with rapid capital appreciation, minutes away from Jaipur Ring Road and Mansarovar Metro connectivity.',
    features: [
      'JDA Single Patta Issued (Original File Clear)',
      'Demarcated Boundary Pillars Installed',
      'Near Jaipur Ring Road Interchange (5 min)',
      'Reputed Schools & Supermarkets within 1.5 km',
      'Eligible for 85% Home Construction Loan',
      'Sweet Groundwater Zone with Bisalpur supply'
    ],
    specs: [
      { label: 'Plot Size', value: '160 Sq. Yards' },
      { label: 'Dimensions', value: '24 ft Front × 60 ft Length' },
      { label: 'Road Frontage', value: '30 Ft Wide Cement Road' },
      { label: 'Legal Due Diligence', value: '100% Clean Non-Encumbrance' },
      { label: 'Registry', value: 'Ready for Stamp Registration' }
    ],
    architecturalStyle: 'Prime Residential Colony',
    status: 'Immediate Registry'
  }
];

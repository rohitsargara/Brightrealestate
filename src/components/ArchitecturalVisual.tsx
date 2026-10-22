interface ArchitecturalVisualProps {
  type: 'villa' | 'plot' | 'commercial' | 'penthouse' | 'warehouse';
  className?: string;
  showOverlayBadge?: boolean;
}

export function ArchitecturalVisual({ type, className = '', showOverlayBadge = true }: ArchitecturalVisualProps) {
  // Bespoke architectural SVG compositions reflecting Jaipur's architectural character:
  // Warm sandstone tones (#D4A373, #E6CCB2, #FAF0CA), crisp graphite lines (#2B2D42), travertine slabs, and glass reflections.
  
  return (
    <div className={`relative overflow-hidden bg-[#F3EFEA] flex items-center justify-center select-none ${className}`}>
      {type === 'villa' && (
        <svg viewBox="0 0 600 400" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5ECE1" />
              <stop offset="70%" stopColor="#EADBCC" />
              <stop offset="100%" stopColor="#DEC7AE" />
            </linearGradient>
            <linearGradient id="poolGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C9D6DF" />
              <stop offset="100%" stopColor="#96AAB8" />
            </linearGradient>
            <linearGradient id="stoneWall" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#CBB499" />
              <stop offset="50%" stopColor="#DAC6AF" />
              <stop offset="100%" stopColor="#BAA082" />
            </linearGradient>
            <linearGradient id="glassWash" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A8BCC9" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#E4EDF2" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#7E96A6" stopOpacity="0.85" />
            </linearGradient>
          </defs>

          {/* Sky background */}
          <rect width="600" height="400" fill="url(#skyGrad)" />
          
          {/* Subtle Aravalli ridge horizon */}
          <path d="M0 240 Q120 215 240 230 T480 220 T600 235 L600 270 L0 270 Z" fill="#D3BEA8" fillOpacity="0.45" />

          {/* Ground Plane */}
          <rect y="260" width="600" height="140" fill="#E6DFD5" />

          {/* Reflection Water Pool */}
          <polygon points="120,310 480,310 520,380 80,380" fill="url(#poolGrad)" />
          <line x1="80" y1="380" x2="520" y2="380" stroke="#8499A7" strokeWidth="1" strokeOpacity="0.4" />

          {/* Villa Lower Mass (Ground Floor) */}
          <rect x="140" y="160" width="340" height="110" fill="#EBE4DB" stroke="#3D3833" strokeWidth="1.2" />
          
          {/* Natural Sandstone Clad Core */}
          <rect x="140" y="160" width="95" height="110" fill="url(#stoneWall)" stroke="#3D3833" strokeWidth="1" />
          {/* Sandstone ashlar groove lines */}
          <line x1="140" y1="185" x2="235" y2="185" stroke="#9E876D" strokeWidth="0.8" />
          <line x1="140" y1="210" x2="235" y2="210" stroke="#9E876D" strokeWidth="0.8" />
          <line x1="140" y1="235" x2="235" y2="235" stroke="#9E876D" strokeWidth="0.8" />

          {/* Panoramic Floor-to-Ceiling Glazing */}
          <rect x="250" y="175" width="215" height="95" fill="url(#glassWash)" stroke="#2C2825" strokeWidth="1" />
          <line x1="320" y1="175" x2="320" y2="270" stroke="#2C2825" strokeWidth="0.8" />
          <line x1="390" y1="175" x2="390" y2="270" stroke="#2C2825" strokeWidth="0.8" />

          {/* Cantilevered Upper Pavilion (First Floor) */}
          <rect x="190" y="85" width="310" height="85" fill="#FAF7F2" stroke="#3D3833" strokeWidth="1.2" />
          {/* Deep Cantilever Roof Slab */}
          <rect x="175" y="75" width="340" height="10" fill="#2B2824" />
          
          {/* Upper Glass Aperture & Timber Louver */}
          <rect x="220" y="95" width="160" height="65" fill="url(#glassWash)" stroke="#2C2825" strokeWidth="0.8" />
          {/* Minimalist vertical louvers */}
          <line x1="395" y1="95" x2="395" y2="160" stroke="#87674B" strokeWidth="2.5" />
          <line x1="410" y1="95" x2="410" y2="160" stroke="#87674B" strokeWidth="2.5" />
          <line x1="425" y1="95" x2="425" y2="160" stroke="#87674B" strokeWidth="2.5" />
          <line x1="440" y1="95" x2="440" y2="160" stroke="#87674B" strokeWidth="2.5" />
          <line x1="455" y1="95" x2="455" y2="160" stroke="#87674B" strokeWidth="2.5" />
          <line x1="470" y1="95" x2="470" y2="160" stroke="#87674B" strokeWidth="2.5" />

          {/* Landscaped Architectural Greenery */}
          <circle cx="105" cy="270" r="18" fill="#758265" fillOpacity="0.8" />
          <line x1="105" y1="270" x2="105" y2="300" stroke="#483B2E" strokeWidth="2" />
          <circle cx="510" cy="265" r="22" fill="#6A7A58" fillOpacity="0.85" />
          <line x1="510" y1="265" x2="510" y2="300" stroke="#483B2E" strokeWidth="2" />

          {/* Architectural Axis & Scale Marks */}
          <line x1="40" y1="365" x2="180" y2="365" stroke="#A89E92" strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="40" y="380" fill="#7C7266" fontSize="9" fontFamily="Outfit, sans-serif" letterSpacing="0.1em">ELEVATION 01 · GANDHI PATH WEST</text>
        </svg>
      )}

      {type === 'plot' && (
        <svg viewBox="0 0 600 400" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Blueprint / Land Plot Cadastral Layout */}
          <rect width="600" height="400" fill="#F4EFEA" />
          
          {/* Cadastral Grid */}
          <defs>
            <pattern id="plotGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#E3DACF" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="600" height="400" fill="url(#plotGrid)" />

          {/* Master Plan Sector Roads */}
          {/* 40 Ft Road */}
          <rect x="0" y="270" width="600" height="70" fill="#E8E1D7" stroke="#C9BDB0" strokeWidth="1" />
          <line x1="0" y1="305" x2="600" y2="305" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="10 8" />
          <text x="35" y="310" fill="#786E63" fontSize="10" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600" letterSpacing="0.08em">40 FT SECTOR ARTERIAL ROAD</text>

          {/* Surrounding Plots */}
          <rect x="40" y="70" width="120" height="175" fill="#EAE4DC" stroke="#C3B6A7" strokeWidth="1" />
          <text x="75" y="155" fill="#9C8E7F" fontSize="11" fontFamily="Outfit, sans-serif">PLOT 11</text>
          
          <rect x="420" y="70" width="140" height="175" fill="#EAE4DC" stroke="#C3B6A7" strokeWidth="1" />
          <text x="465" y="155" fill="#9C8E7F" fontSize="11" fontFamily="Outfit, sans-serif">PLOT 13</text>

          {/* SUBJECT PRIME PLOT 12 (Highlighted) */}
          <rect x="180" y="60" width="220" height="195" fill="#FFFFFF" stroke="#9A6735" strokeWidth="2.5" />
          
          {/* Boundary Dimension Markers */}
          <line x1="180" y1="48" x2="400" y2="48" stroke="#9A6735" strokeWidth="1" />
          <line x1="180" y1="42" x2="180" y2="54" stroke="#9A6735" strokeWidth="1" />
          <line x1="400" y1="42" x2="400" y2="54" stroke="#9A6735" strokeWidth="1" />
          <text x="270" y="44" fill="#9A6735" fontSize="10" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">30 FT FRONTAGE</text>

          <line x1="415" y1="60" x2="415" y2="255" stroke="#9A6735" strokeWidth="1" />
          <line x1="409" y1="60" x2="421" y2="60" stroke="#9A6735" strokeWidth="1" />
          <line x1="409" y1="255" x2="421" y2="255" stroke="#9A6735" strokeWidth="1" />
          <text x="425" y="162" fill="#9A6735" fontSize="10" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">60 FT DEPTH</text>

          {/* Plot Content Info */}
          <circle cx="290" cy="120" r="16" fill="#FBF8F3" stroke="#9A6735" strokeWidth="1" />
          <path d="M290 108 L290 132 M278 120 L302 120" stroke="#9A6735" strokeWidth="1" />
          <text x="290" y="152" textAnchor="middle" fill="#1C1917" fontSize="14" fontFamily="Outfit, sans-serif" fontWeight="700">PLOT NO. 12</text>
          <text x="290" y="172" textAnchor="middle" fill="#665E54" fontSize="11" fontFamily="Plus Jakarta Sans, sans-serif">200 SQ. YARDS · JDA APPROVED</text>
          <text x="290" y="190" textAnchor="middle" fill="#2E6F40" fontSize="10" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600">✓ 90A PATTA IN HAND</text>

          {/* North Direction Compass */}
          <g transform="translate(520, 45)">
            <circle cx="0" cy="0" r="16" stroke="#52483E" strokeWidth="0.8" fill="#FFFFFF" />
            <polygon points="0,-12 4,0 0,2 -4,0" fill="#9A6735" />
            <polygon points="0,12 4,0 0,-2 -4,0" fill="#D3C9BD" />
            <text x="0" y="-15" textAnchor="middle" fill="#1C1917" fontSize="8" fontWeight="bold">N</text>
          </g>
        </svg>
      )}

      {type === 'commercial' && (
        <svg viewBox="0 0 600 400" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Modern Corporate Facade */}
          <rect width="600" height="400" fill="#202226" />
          
          <defs>
            <linearGradient id="commGlass" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4A5568" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#2D3748" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1A202C" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="glowWarm" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#D97706" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Highway Street Plane */}
          <rect y="330" width="600" height="70" fill="#141517" />
          <line x1="0" y1="330" x2="600" y2="330" stroke="#33373D" strokeWidth="1.5" />
          
          {/* Commercial High-Street Podium */}
          <rect x="70" y="40" width="460" height="290" fill="#1A1C20" stroke="#373B42" strokeWidth="1" />

          {/* Architectural Vertical Mullions & Structural Ribs */}
          <rect x="90" y="60" width="420" height="150" fill="url(#commGlass)" stroke="#4A5260" strokeWidth="1" />
          
          {/* Glass Grid Panels */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`vert-${i}`} x1={90 + (i + 1) * 46} y1="60" x2={90 + (i + 1) * 46} y2="210" stroke="#4A5260" strokeWidth="1" />
          ))}
          <line x1="90" y1="110" x2="510" y2="110" stroke="#4A5260" strokeWidth="1" />
          <line x1="90" y1="160" x2="510" y2="160" stroke="#4A5260" strokeWidth="1" />

          {/* High Ceiling Ground Floor Showroom Glazing */}
          <rect x="90" y="225" width="420" height="95" fill="#252A32" stroke="#606A7B" strokeWidth="1.5" />
          <rect x="100" y="235" width="400" height="80" fill="url(#glowWarm)" />
          
          {/* Showroom Lighting Accents */}
          <line x1="120" y1="237" x2="480" y2="237" stroke="#FDE68A" strokeWidth="2" strokeOpacity="0.7" />
          <text x="300" y="278" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontFamily="Outfit, sans-serif" fontWeight="600" letterSpacing="0.15em">HIGH-STREET RETAIL FRONTAGE · TONK ROAD</text>
          <text x="300" y="298" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="Plus Jakarta Sans, sans-serif">13.5 FT CLEAR CEILING HEIGHT · 65 FT HIGHWAY FACADE</text>
        </svg>
      )}

      {type === 'penthouse' && (
        <svg viewBox="0 0 600 400" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Luxury Penthouse Panoramic Vista */}
          <defs>
            <linearGradient id="skyGolden" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E2D4C0" />
              <stop offset="40%" stopColor="#DFD0BC" />
              <stop offset="100%" stopColor="#C9B8A3" />
            </linearGradient>
            <linearGradient id="marbleFloor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EFECE6" />
              <stop offset="100%" stopColor="#DFDAD1" />
            </linearGradient>
          </defs>

          <rect width="600" height="400" fill="url(#skyGolden)" />
          
          {/* Aravalli silhouette at horizon */}
          <path d="M0 210 Q90 190 200 205 T450 195 T600 210 L600 240 L0 240 Z" fill="#B3A28E" fillOpacity="0.6" />

          {/* Marble Interior Terrace Floor */}
          <polygon points="0,240 600,240 600,400 0,400" fill="url(#marbleFloor)" />
          
          {/* Subtle Marble Veins */}
          <path d="M50 290 Q150 320 280 295 T520 340" stroke="#CCC6BA" strokeWidth="1" strokeOpacity="0.7" />
          <path d="M120 370 Q250 340 390 380" stroke="#CCC6BA" strokeWidth="1" strokeOpacity="0.6" />

          {/* Minimalist Floor-to-Ceiling Slimline Glazing Frames */}
          <line x1="160" y1="0" x2="160" y2="240" stroke="#38332E" strokeWidth="2.5" />
          <line x1="320" y1="0" x2="320" y2="240" stroke="#38332E" strokeWidth="2.5" />
          <line x1="480" y1="0" x2="480" y2="240" stroke="#38332E" strokeWidth="2.5" />
          <line x1="0" y1="240" x2="600" y2="240" stroke="#26221E" strokeWidth="3" />

          {/* Glass Balustrade on Sky Terrace */}
          <rect x="0" y="210" width="600" height="30" fill="#E6EEF2" fillOpacity="0.35" stroke="#2B2723" strokeWidth="0.8" />
          <line x1="0" y1="210" x2="600" y2="210" stroke="#2B2723" strokeWidth="1.5" />

          {/* Minimalist Designer Lounge Seating Silhouette */}
          <rect x="180" y="280" width="160" height="40" rx="3" fill="#8F8274" />
          <rect x="190" y="260" width="140" height="25" rx="3" fill="#A89B8D" />
          
          {/* Low travertine table */}
          <rect x="370" y="300" width="70" height="18" fill="#DDD7CD" stroke="#9E9486" strokeWidth="0.8" />

          {/* Architectural Typographic Indicator */}
          <text x="35" y="375" fill="#6B6053" fontSize="10" fontFamily="Outfit, sans-serif" letterSpacing="0.1em">PANORAMIC SKY TERRACE · JAGATPURA RIDGE VIEW</text>
        </svg>
      )}

      {type === 'warehouse' && (
        <svg viewBox="0 0 600 400" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Industrial PEB Logistics Shed */}
          <rect width="600" height="400" fill="#E4E2DC" />
          
          {/* Apron Concrete Ground */}
          <rect y="260" width="600" height="140" fill="#C5C2B8" />
          <line x1="0" y1="260" x2="600" y2="260" stroke="#87847A" strokeWidth="2" />

          {/* PEB Warehouse Portal Frame Structure */}
          <polygon points="60,260 60,130 300,70 540,130 540,260" fill="#DFDCD4" stroke="#42464D" strokeWidth="2" />
          
          {/* Structural Center Roof Ridge Line */}
          <line x1="300" y1="70" x2="300" y2="260" stroke="#5A5F69" strokeWidth="1.2" strokeDasharray="4 3" />

          {/* Industrial Corrugated Siding Panels */}
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`corr-${i}`} x1={95 + i * 34} y1="130" x2={95 + i * 34} y2="260" stroke="#BEBAB0" strokeWidth="1" />
          ))}

          {/* 4 Heavy-Duty Hydraulic Docks with Canopies */}
          {[120, 210, 310, 400].map((xPos, idx) => (
            <g key={`dock-${idx}`}>
              {/* Weather Canopy */}
              <rect x={xPos - 5} y="180" width="70" height="10" fill="#2C3038" />
              {/* Shutter Door */}
              <rect x={xPos} y="190" width="60" height="70" fill="#4B5361" stroke="#1F232B" strokeWidth="1" />
              {/* Horizontal slats */}
              <line x1={xPos} y1="205" x2={xPos + 60} y2="205" stroke="#363C47" strokeWidth="1" />
              <line x1={xPos} y1="220" x2={xPos + 60} y2="220" stroke="#363C47" strokeWidth="1" />
              <line x1={xPos} y1="235" x2={xPos + 60} y2="235" stroke="#363C47" strokeWidth="1" />
              {/* Yellow safety bumper */}
              <rect x={xPos - 2} y="258" width="64" height="6" fill="#FBBF24" />
            </g>
          ))}

          {/* Spec Callout */}
          <text x="300" y="320" textAnchor="middle" fill="#3D424B" fontSize="12" fontFamily="Outfit, sans-serif" fontWeight="600" letterSpacing="0.08em">VKI INDUSTRIAL ZONE · 32 FT CLEAR CENTER HEIGHT</text>
          <text x="300" y="340" textAnchor="middle" fill="#69707C" fontSize="10" fontFamily="Plus Jakarta Sans, sans-serif">4 HYDRAULIC DOCKS · TRIMIX FLOOR 6T/M² · HEAVY TRAILER APRON</text>
        </svg>
      )}

      {/* Verified Status Tag on Corner */}
      {showOverlayBadge && (
        <div className="absolute top-3 left-3 bg-[#1C1917]/85 backdrop-blur-sm text-[#FBF8F3] px-3 py-1 text-[11px] tracking-wide font-medium flex items-center gap-1.5 border border-[#3A3530]/40">
          <span className="w-1.5 h-1.5 bg-[#C59B63] rounded-full inline-block"></span>
          <span>Verified Asset</span>
        </div>
      )}
    </div>
  );
}

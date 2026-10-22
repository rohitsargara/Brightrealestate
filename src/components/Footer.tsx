import React from 'react';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141312] text-[#A8A29E] border-t border-[#292524] text-xs">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#292524]">
          {/* Brand & Overview */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-display text-xl font-bold tracking-tight text-white block">
              Bright Real Estate
            </span>
            <p className="text-[#8C857E] text-xs leading-relaxed max-w-sm">
              Distinguished property consultancy and land advisory in Jaipur. Specializing in verified residential villas, JDA-approved residential plots, and commercial facilities across Vaishali Nagar, Jhotwara, Jagatpura, and industrial corridors.
            </p>
            <div className="text-[11px] text-[#78716C] pt-2">
              Hub: Main Niwaru Road, Near Jhotwara, Jaipur, Rajasthan 302012
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Portfolio & Corridors
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#properties" className="hover:text-white transition-colors">Curated Jaipur Listings</a>
              </li>
              <li>
                <a href="#corridors" className="hover:text-white transition-colors">Vaishali Nagar & Chitrakoot</a>
              </li>
              <li>
                <a href="#corridors" className="hover:text-white transition-colors">Jhotwara & Kalwar Road</a>
              </li>
              <li>
                <a href="#corridors" className="hover:text-white transition-colors">Jagatpura & Mahal Road</a>
              </li>
              <li>
                <a href="#corridors" className="hover:text-white transition-colors">VKI Industrial Warehousing</a>
              </li>
            </ul>
          </div>

          {/* Advisory & Tools */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Advisory & Tools
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#valuation" className="hover:text-white transition-colors">Rajasthan DLC & Market Valuation</a>
              </li>
              <li>
                <a href="#due-diligence" className="hover:text-white transition-colors">JDA Patta & 90A Checklist</a>
              </li>
              <li>
                <a href="#due-diligence" className="hover:text-white transition-colors">Sub-Registrar Stamp Duty Guidance</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Schedule On-Ground Site Inspection</a>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#8C857E] hover:text-white transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & RERA Compliance */}
        <div className="pt-8 space-y-4 text-[11px] text-[#736B63] leading-relaxed">
          <p>
            <strong>Regulatory Disclosure:</strong> Bright Real Estate Services provides property brokerage, market valuation estimates, and facilitation services in Jaipur, Rajasthan. All property details, dimensions, and approval assertions are based on records provided by owners, developers, and municipal authorities. Prospective purchasers are advised to inspect physical title files, JDA lease deeds, and sub-registrar search reports prior to entering into financial commitments.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#292524]/60">
            <div>
              © {new Date().getFullYear()} Bright Real Estate Services. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-[#8C857E]">
              <span>Jaipur, Rajasthan, India</span>
              <span>·</span>
              <span>JDA & RERA Advisory</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

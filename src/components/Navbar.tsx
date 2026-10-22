import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E7E5E0] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face, no subtext) */}
        <a 
          href="#" 
          className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          Bright Real Estate
        </a>

        {/* Zone 2: 4-5 single-line clean text links with subtle hover underlines */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#57534E]">
          <a href="#properties" className="hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0 py-1">
            Properties
          </a>
          <a href="#services" className="hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0 py-1">
            Services
          </a>
          <a href="#corridors" className="hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0 py-1">
            Jaipur Corridors
          </a>
          <a href="#valuation" className="hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0 py-1">
            Valuation
          </a>
          <a href="#due-diligence" className="hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0 py-1">
            Due Diligence
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1917] rounded-none hover:bg-[#322E2B] active:bg-black transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <span>Schedule Visit</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1C1917] hover:bg-[#F0EEE6] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E7E5E0] bg-[#FAFAF8] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-3 text-base font-medium text-[#292524]">
            <a
              href="#properties"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#9A6735]"
            >
              Curated Properties
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#9A6735]"
            >
              Advisory Services
            </a>
            <a
              href="#corridors"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#9A6735]"
            >
              Jaipur Micro-Markets
            </a>
            <a
              href="#valuation"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#9A6735]"
            >
              Market Rate Calculator
            </a>
            <a
              href="#due-diligence"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#9A6735]"
            >
              JDA & Title Due Diligence
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#9A6735]"
            >
              Office & Contact
            </a>
          </div>

          <div className="pt-4 border-t border-[#E7E5E0]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1917] hover:bg-[#322E2B]"
            >
              <span>Schedule Property Visit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

import React from 'react';
import { ArrowUpRight, ShieldCheck, MapPin, CheckCircle2, FileText } from 'lucide-react';
import { ArchitecturalVisual } from './ArchitecturalVisual';

interface HeroProps {
  onExploreProperties: () => void;
  onOpenConsultation: () => void;
}

export function Hero({ onExploreProperties, onOpenConsultation }: HeroProps) {
  return (
    <section className="relative pt-12 pb-20 border-b border-[#E7E5E0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Kicker - Clean unboxed text with typographic separator (No pill badges) */}
        <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#78716C] mb-6">
          <span>Jaipur Property Advisory</span>
          <span aria-hidden="true">·</span>
          <span>JDA Approved Real Estate</span>
          <span aria-hidden="true">·</span>
          <span>Verified Titles</span>
        </div>

        {/* 2-Column Split: Content & Architectural Visual Carrier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch mb-16">
          {/* Left Column: Proposition & Action */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#1C1917] tracking-tight leading-[1.08] text-balance mb-6">
                Distinguished Real Estate in the Pink City.
              </h1>
              <p className="text-lg text-[#57534E] leading-relaxed max-w-xl font-normal">
                Bright Real Estate provides discerning buyers, developers, and businesses with rigorously vetted residential villas, JDA-approved plots, and commercial assets across Jaipur’s prime growth corridors.
              </p>
            </div>

            {/* Micro Details Strip - Clean unboxed metadata */}
            <div className="pt-4 border-t border-[#E7E5E0] grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#78716C]">Coverage Hub</div>
                <div className="text-sm font-semibold text-[#1C1917] mt-0.5">Jhotwara & West Jaipur</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#78716C]">Legal Standard</div>
                <div className="text-sm font-semibold text-[#1C1917] mt-0.5">JDA & 90A Verified</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#78716C]">Consultation</div>
                <div className="text-sm font-semibold text-[#1C1917] mt-0.5">Direct Owner Liaison</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreProperties}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white bg-[#1C1917] hover:bg-[#322E2B] transition-colors shadow-sm"
              >
                <span>View Verified Portfolio</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#1C1917] bg-white border border-[#D6D3CD] hover:border-[#1C1917] hover:bg-[#FBFBFA] transition-colors"
              >
                <span>Schedule Property Visit</span>
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Visual Anchor */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative border border-[#E7E5E0] bg-white p-3 shadow-xs h-full flex flex-col justify-between">
              <div className="relative overflow-hidden aspect-[4/3] w-full border border-[#E7E5E0]">
                <ArchitecturalVisual type="villa" className="w-full h-full" />
              </div>

              {/* Architectural caption card */}
              <div className="pt-4 pb-1 px-1">
                <div className="flex items-center justify-between text-xs text-[#78716C] mb-1">
                  <span>Featured Elevation</span>
                  <span className="font-mono tabular-nums text-[#1C1917]">4BHK Villa · Gandhi Path</span>
                </div>
                <div className="flex items-center justify-between text-sm font-semibold text-[#1C1917]">
                  <span>The Aranya Residence</span>
                  <span className="font-mono tabular-nums text-[#9A6735]">₹2.85 Cr</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Verification / Trust Indicators Strip */}
        <div className="border-t border-[#E7E5E0] pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#1C1917]">
              <ShieldCheck className="w-4 h-4 text-[#9A6735]" />
              <span>JDA & 90A Title Due Diligence</span>
            </div>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Every plot and residence undergoes independent land revenue verification before listing.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#1C1917]">
              <FileText className="w-4 h-4 text-[#9A6735]" />
              <span>Transparent Registry Procedures</span>
            </div>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Assistance with Rajasthan sub-registrar stamp duty calculation, deed drafting, and mutation records.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#1C1917]">
              <MapPin className="w-4 h-4 text-[#9A6735]" />
              <span>Prime Corridor Specialization</span>
            </div>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Hyper-local expertise in Vaishali Nagar, Jhotwara, Kalwar Road, Jagatpura, and VKI industrial hubs.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#1C1917]">
              <CheckCircle2 className="w-4 h-4 text-[#9A6735]" />
              <span>Direct Developer & Owner Terms</span>
            </div>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Clean negotiations with verified property owners and reputed A-grade Rajasthan builders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

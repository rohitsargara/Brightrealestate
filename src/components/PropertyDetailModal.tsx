import React, { useEffect } from 'react';
import { X, CheckCircle, MapPin, Compass, ArrowUpRight, ShieldCheck, Ruler, Calendar } from 'lucide-react';
import { Property } from '../data/properties';
import { ArchitecturalVisual } from './ArchitecturalVisual';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onBookInspection: (property: Property) => void;
}

export function PropertyDetailModal({ property, onClose, onBookInspection }: PropertyDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (property) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [property, onClose]);

  if (!property) return null;

  // Visual type mapping
  const visualType = property.category === 'plots' 
    ? 'plot' 
    : property.category === 'commercial' 
    ? 'commercial' 
    : property.category === 'warehousing' 
    ? 'warehouse' 
    : property.id.includes('penthouse') 
    ? 'penthouse' 
    : 'villa';

  // Approximate Rajasthan Stamp Duty calculation
  // Male ~ 6% stamp + 20% surcharge (1.2%) + 1% reg = ~8.2%
  // Female ~ 5% stamp + 20% surcharge (1%) + 1% reg = ~7%
  const approxStampMale = ((property.priceRaw * 100000) * 0.082).toLocaleString('en-IN', { maximumFractionDigits: 0 });
  const approxStampFemale = ((property.priceRaw * 100000) * 0.070).toLocaleString('en-IN', { maximumFractionDigits: 0 });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-[#1C1917]/70 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-[#E7E5E0] shadow-2xl overflow-y-auto z-10 flex flex-col animate-in zoom-in-95 duration-150">
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-[#E7E5E0] px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#78716C]">
              Property Dossier #{property.id.slice(0, 8)}
            </span>
            <span className="text-xs text-[#A8A29E]">·</span>
            <span className="text-xs font-medium text-[#2E6F40] bg-[#F0FDF4] px-2 py-0.5 border border-[#DCFCE7]">
              {property.approvalType}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#57534E] hover:text-[#1C1917] hover:bg-[#F5F5F4] transition-colors focus:outline-none"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Main Visual & Title Block */}
          <div>
            <div className="border border-[#E7E5E0] overflow-hidden aspect-[16/9] w-full mb-6">
              <ArchitecturalVisual type={visualType} className="w-full h-full" showOverlayBadge={false} />
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E7E5E0] pb-6">
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-[#78716C] mb-1">
                  {property.categoryLabel} · {property.corridor}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1917] tracking-tight">
                  {property.title}
                </h2>
                <div className="flex items-center gap-2 text-sm text-[#57534E] mt-1.5">
                  <MapPin className="w-4 h-4 text-[#9A6735]" />
                  <span>{property.subLocation}</span>
                </div>
              </div>

              <div className="text-left md:text-right">
                <div className="text-xs font-medium uppercase tracking-wider text-[#78716C]">Offered Price</div>
                <div className="text-3xl font-bold font-mono tabular-nums text-[#1C1917] mt-0.5">
                  {property.priceFormatted}
                </div>
                <div className="text-xs text-[#78716C] mt-1">
                  Area: {property.unitSize}
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Description */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#1C1917] mb-3">
              Architectural & Location Overview
            </h3>
            <p className="text-sm text-[#57534E] leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Specifications Grid */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#1C1917] mb-3">
              Verified Specifications
            </h3>
            <div className="border border-[#E7E5E0] divide-y divide-[#E7E5E0]">
              {property.specs.map((spec, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 px-4 py-3 text-xs bg-white hover:bg-[#FAFAF8] transition-colors">
                  <div className="sm:col-span-4 font-semibold text-[#57534E]">{spec.label}</div>
                  <div className="sm:col-span-8 font-mono tabular-nums text-[#1C1917] font-medium">{spec.value}</div>
                </div>
              ))}
              <div className="grid grid-cols-1 sm:grid-cols-12 px-4 py-3 text-xs bg-white">
                <div className="sm:col-span-4 font-semibold text-[#57534E]">Facing / Vastu</div>
                <div className="sm:col-span-8 text-[#1C1917] font-medium">{property.facing}</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 px-4 py-3 text-xs bg-white">
                <div className="sm:col-span-4 font-semibold text-[#57534E]">Status</div>
                <div className="sm:col-span-8 text-[#2E6F40] font-semibold">{property.status}</div>
              </div>
            </div>
          </div>

          {/* Key Salient Features */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#1C1917] mb-3">
              Salient Highlights & Infrastructure
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 border border-[#E7E5E0] bg-[#FAFAF8] text-xs text-[#292524]">
                  <CheckCircle className="w-4 h-4 text-[#9A6735] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rajasthan Registry & Stamp Duty Transparency Box */}
          <div className="p-5 border border-[#E7E5E0] bg-[#F7F5F0]">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-[#9A6735]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                Rajasthan Registration & Stamp Guidance
              </h4>
            </div>
            <p className="text-xs text-[#57534E] mb-4">
              Estimated total government charges in Jaipur (stamp duty + surcharges + registration fee):
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 bg-white border border-[#E7E5E0]">
                <div className="text-[11px] font-semibold uppercase text-[#78716C]">Male Purchaser (~8.2% Total)</div>
                <div className="text-base font-bold font-mono tabular-nums text-[#1C1917] mt-1">
                  ₹{approxStampMale} approx.
                </div>
              </div>
              <div className="p-3 bg-white border border-[#E7E5E0]">
                <div className="text-[11px] font-semibold uppercase text-[#78716C]">Female Purchaser (~7.0% Total)</div>
                <div className="text-base font-bold font-mono tabular-nums text-[#1C1917] mt-1">
                  ₹{approxStampFemale} approx.
                </div>
              </div>
            </div>
            <p className="text-[11px] text-[#78716C] mt-3">
              *Calculated on declared consideration or DLC rate (whichever is higher) as per Rajasthan Stamps Act. Bright Real Estate assists with complete sub-registrar documentation.
            </p>
          </div>
        </div>

        {/* Modal Footer / Action Bar */}
        <div className="sticky bottom-0 z-20 bg-white border-t border-[#E7E5E0] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#57534E]">
            Direct owner terms · Inspection arranged at your preferred slot
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#57534E] hover:text-[#1C1917] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookInspection(property);
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-white bg-[#1C1917] hover:bg-[#322E2B] transition-colors shadow-sm"
            >
              <span>Schedule Inspection</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { JAIPUR_CORRIDORS } from '../data/corridors';
import { MapPin, TrendingUp, Navigation, CheckCircle, ArrowRight } from 'lucide-react';

interface JaipurCorridorsProps {
  onExploreProperties: () => void;
}

export function JaipurCorridors({ onExploreProperties }: JaipurCorridorsProps) {
  const [activeCorridorId, setActiveCorridorId] = useState(JAIPUR_CORRIDORS[0].id);

  const activeCorridor = JAIPUR_CORRIDORS.find(c => c.id === activeCorridorId) || JAIPUR_CORRIDORS[0];

  return (
    <section id="corridors" className="py-24 border-b border-[#E7E5E0] bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#78716C] mb-2">
            Jaipur Micro-Markets
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Key Real Estate Corridors & Market Dynamics
          </h2>
          <p className="text-sm text-[#57534E] mt-3 leading-relaxed">
            Real estate values in Jaipur vary significantly by corridor infrastructure, JDA sector planning, and master plan connectivity. Explore our verified data for each micro-market.
          </p>
        </div>

        {/* Corridor Selection Segmented Tabs */}
        <div className="flex overflow-x-auto pb-2 gap-2 border-b border-[#E7E5E0] mb-8 scrollbar-none">
          {JAIPUR_CORRIDORS.map((corridor) => (
            <button
              key={corridor.id}
              onClick={() => setActiveCorridorId(corridor.id)}
              className={`px-5 py-3 text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all border-b-2 ${
                activeCorridorId === corridor.id
                  ? 'border-[#1C1917] text-[#1C1917] bg-white'
                  : 'border-transparent text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              {corridor.name}
            </button>
          ))}
        </div>

        {/* Active Corridor Deep Dive Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Corridor Dossier */}
          <div className="lg:col-span-8 border border-[#E7E5E0] bg-white p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E7E5E0] pb-5">
              <div>
                <span className="text-xs font-mono font-medium text-[#9A6735] uppercase">
                  {activeCorridor.tagline}
                </span>
                <h3 className="text-2xl font-bold text-[#1C1917] tracking-tight mt-1">
                  {activeCorridor.name}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#57534E] bg-[#FAFAF8] px-3 py-1.5 border border-[#E7E5E0]">
                <Navigation className="w-3.5 h-3.5 text-[#9A6735]" />
                <span>{activeCorridor.connectivity}</span>
              </div>
            </div>

            <p className="text-sm text-[#57534E] leading-relaxed">
              {activeCorridor.overview}
            </p>

            {/* Micro Metrics Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 border border-[#E7E5E0] bg-[#FAFAF8]">
                <div className="flex items-center gap-2 text-xs text-[#78716C]">
                  <TrendingUp className="w-3.5 h-3.5 text-[#9A6735]" />
                  <span>Prevailing Market Price</span>
                </div>
                <div className="text-lg font-bold font-mono tabular-nums text-[#1C1917] mt-1">
                  {activeCorridor.priceRange}
                </div>
              </div>

              <div className="p-4 border border-[#E7E5E0] bg-[#FAFAF8]">
                <div className="flex items-center gap-2 text-xs text-[#78716C]">
                  <MapPin className="w-3.5 h-3.5 text-[#9A6735]" />
                  <span>DLC Benchmark (Approx)</span>
                </div>
                <div className="text-lg font-bold font-mono tabular-nums text-[#1C1917] mt-1">
                  {activeCorridor.dlcRateAvg}
                </div>
              </div>
            </div>

            {/* Strategic Advantages */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-3">
                Corridor Highlights & Growth Drivers
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeCorridor.keyHighlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#44403C]">
                    <CheckCircle className="w-4 h-4 text-[#9A6735] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Suitability */}
            <div className="pt-4 border-t border-[#E7E5E0] text-xs text-[#57534E]">
              <strong className="text-[#1C1917]">Ideal For:</strong> {activeCorridor.suitability}
            </div>
          </div>

          {/* Right Column: Matched Action & Property Types */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border border-[#E7E5E0] bg-white p-6 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                Dominant Asset Classes
              </div>
              <div className="space-y-2">
                {activeCorridor.dominantPropertyTypes.map((type, idx) => (
                  <div key={idx} className="p-3 border border-[#E7E5E0] bg-[#FAFAF8] text-xs font-medium text-[#1C1917]">
                    {type}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-[#1C1917] bg-[#1C1917] text-white p-6 space-y-4">
              <div className="text-xs font-mono tracking-widest uppercase text-[#D4AF37]">
                INVENTORY INQUIRY
              </div>
              <h4 className="text-lg font-bold tracking-tight">
                Searching in {activeCorridor.name}?
              </h4>
              <p className="text-xs text-[#A8A29E] leading-relaxed">
                We maintain off-market land holdings, direct builder plots, and independent villas across this corridor.
              </p>
              <button
                onClick={onExploreProperties}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#1C1917] bg-white hover:bg-[#F3EFEA] transition-colors"
              >
                <span>Filter Portfolio by Corridor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

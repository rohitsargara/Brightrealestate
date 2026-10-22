import React, { useState } from 'react';
import { PROPERTIES, Property } from '../data/properties';
import { ArchitecturalVisual } from './ArchitecturalVisual';
import { MapPin, ArrowUpRight, Check, Eye } from 'lucide-react';

interface PropertyPortfolioProps {
  onSelectProperty: (property: Property) => void;
  onBookInspection: (property: Property) => void;
}

export function PropertyPortfolio({ onSelectProperty, onBookInspection }: PropertyPortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCorridor, setSelectedCorridor] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Properties' },
    { id: 'residential', label: 'Luxury Villas & Floors' },
    { id: 'plots', label: 'JDA Approved Plots' },
    { id: 'commercial', label: 'Commercial & Retail' },
    { id: 'warehousing', label: 'Warehousing & Industrial' },
  ];

  const corridors = [
    { id: 'all', label: 'All Corridors' },
    { id: 'Vaishali Nagar', label: 'Vaishali Nagar' },
    { id: 'Jhotwara / Kalwar Road', label: 'Jhotwara / Kalwar' },
    { id: 'Jagatpura', label: 'Jagatpura' },
    { id: 'Tonk Road', label: 'Tonk Road' },
    { id: 'Mansarovar Extension', label: 'Mansarovar Ext.' },
    { id: 'VKI / Sikar Road', label: 'VKI Industrial' }
  ];

  const filteredProperties = PROPERTIES.filter((item) => {
    const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchCorridor = selectedCorridor === 'all' || item.corridor === selectedCorridor;
    return matchCategory && matchCorridor;
  });

  return (
    <section id="properties" className="py-24 border-b border-[#E7E5E0] bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#78716C] mb-2">
              Verified Inventory
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
              Curated Jaipur Real Estate Portfolio
            </h2>
            <p className="text-sm text-[#57534E] mt-2 max-w-xl">
              Every listed plot, residence, and commercial facility has been physically surveyed and revenue-verified for transparent transactions.
            </p>
          </div>

          <div className="text-xs text-[#78716C] font-mono tabular-nums">
            Showing {filteredProperties.length} of {PROPERTIES.length} verified listings
          </div>
        </div>

        {/* Filter Controls (Functional interactive segmented buttons) */}
        <div className="space-y-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium tracking-wide transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#1C1917] text-white'
                    : 'bg-white border border-[#E7E5E0] text-[#57534E] hover:text-[#1C1917] hover:border-[#D6D3CD]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Corridor Sub-Filter */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#E7E5E0]/60">
            <span className="text-xs font-semibold text-[#78716C] mr-2">Location:</span>
            {corridors.map((corridor) => (
              <button
                key={corridor.id}
                onClick={() => setSelectedCorridor(corridor.id)}
                className={`px-3 py-1 text-xs transition-colors whitespace-nowrap ${
                  selectedCorridor === corridor.id
                    ? 'text-[#1C1917] font-semibold border-b-2 border-[#1C1917]'
                    : 'text-[#78716C] hover:text-[#1C1917]'
                }`}
              >
                {corridor.label}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length === 0 ? (
          <div className="border border-[#E7E5E0] bg-white p-12 text-center">
            <p className="text-sm text-[#57534E]">No properties match the selected criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedCorridor('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1917]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => {
              const visualType = property.category === 'plots' 
                ? 'plot' 
                : property.category === 'commercial' 
                ? 'commercial' 
                : property.category === 'warehousing' 
                ? 'warehouse' 
                : property.id.includes('penthouse') 
                ? 'penthouse' 
                : 'villa';

              return (
                <article
                  key={property.id}
                  className="group border border-[#E7E5E0] bg-white hover:border-[#1C1917] transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Area */}
                    <div className="relative aspect-[4/3] w-full border-b border-[#E7E5E0] overflow-hidden">
                      <ArchitecturalVisual type={visualType} className="w-full h-full group-hover:scale-102 transition-transform duration-500" />
                      
                      {/* Price Tag Overlay */}
                      <div className="absolute bottom-3 right-3 bg-[#1C1917]/90 text-white font-mono tabular-nums text-sm font-bold px-3 py-1">
                        {property.priceFormatted}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                      {/* Quiet metadata kicker */}
                      <div className="flex items-center justify-between text-xs text-[#78716C]">
                        <span>{property.categoryLabel}</span>
                        <span>{property.approvalType}</span>
                      </div>

                      {/* Property Title */}
                      <h3 className="text-xl font-bold text-[#1C1917] tracking-tight group-hover:text-[#9A6735] transition-colors">
                        {property.title}
                      </h3>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-xs text-[#57534E]">
                        <MapPin className="w-3.5 h-3.5 text-[#9A6735] shrink-0" />
                        <span className="truncate">{property.subLocation}</span>
                      </div>

                      {/* Area & Specifications Row */}
                      <div className="pt-3 border-t border-[#E7E5E0] grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <div className="text-[#78716C]">Footprint / Area</div>
                          <div className="font-semibold text-[#1C1917] mt-0.5">{property.unitSize}</div>
                        </div>
                        <div>
                          <div className="text-[#78716C]">Vastu / Orientation</div>
                          <div className="font-semibold text-[#1C1917] mt-0.5 truncate">{property.facing}</div>
                        </div>
                      </div>

                      {/* Snippet Description */}
                      <p className="text-xs text-[#57534E] line-clamp-2 leading-relaxed">
                        {property.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="px-6 py-4 bg-[#FAFAF8] border-t border-[#E7E5E0] flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectProperty(property)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] hover:text-[#9A6735] transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Dossier</span>
                    </button>

                    <button
                      onClick={() => onBookInspection(property)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1917] hover:bg-[#322E2B] transition-colors"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

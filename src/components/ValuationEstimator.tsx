import React, { useState, useId } from 'react';
import { Calculator, ArrowUpRight, Check, HelpCircle } from 'lucide-react';

interface ValuationEstimatorProps {
  onProceedWithValuation: (summary: string) => void;
}

export function ValuationEstimator({ onProceedWithValuation }: ValuationEstimatorProps) {
  const corridorSelectId = useId();
  const propertyTypeSelectId = useId();
  const areaInputId = useId();
  const [corridor, setCorridor] = useState<string>('vaishali');
  const [propertyType, setPropertyType] = useState<string>('villa');
  const [unit, setUnit] = useState<'sqyd' | 'sqft'>('sqyd');
  const [areaSize, setAreaSize] = useState<number>(200);
  const [buyerGender, setBuyerGender] = useState<'male' | 'female'>('male');

  // Rates in INR per unit based on Jaipur verified market trends
  // All calculations normalized to sq. yards
  const CORRIDOR_RATES: Record<string, { name: string; plotRatePerSqYd: number; builtRatePerSqFt: number; dlcAvg: number }> = {
    vaishali: { name: 'Vaishali Nagar / Chitrakoot', plotRatePerSqYd: 65000, builtRatePerSqFt: 9500, dlcAvg: 52000 },
    jhotwara: { name: 'Jhotwara / Kalwar Road', plotRatePerSqYd: 28000, builtRatePerSqFt: 4200, dlcAvg: 22000 },
    jagatpura: { name: 'Jagatpura / Mahal Road', plotRatePerSqYd: 42000, builtRatePerSqFt: 5800, dlcAvg: 32000 },
    ajmer: { name: 'Ajmer Road / Mansarovar', plotRatePerSqYd: 48000, builtRatePerSqFt: 6200, dlcAvg: 36000 },
    tonk: { name: 'Tonk Road Commercial', plotRatePerSqYd: 75000, builtRatePerSqFt: 11000, dlcAvg: 60000 },
    vki: { name: 'VKI Industrial Area', plotRatePerSqYd: 32000, builtRatePerSqFt: 3800, dlcAvg: 26000 },
  };

  const selectedData = CORRIDOR_RATES[corridor];

  // Convert area to both sqyd and sqft
  const normalizedSqYd = unit === 'sqyd' ? areaSize : areaSize / 9;
  const normalizedSqFt = unit === 'sqft' ? areaSize : areaSize * 9;

  let baseRate = selectedData.plotRatePerSqYd;
  let totalMarketEstimate = 0;

  if (propertyType === 'plot') {
    totalMarketEstimate = normalizedSqYd * selectedData.plotRatePerSqYd;
  } else if (propertyType === 'villa') {
    // Villa includes plot value + built construction cost approx ₹2,000/sqft on 1.8 FAR
    const plotVal = normalizedSqYd * selectedData.plotRatePerSqYd;
    const builtVal = (normalizedSqYd * 9 * 1.5) * 2200;
    totalMarketEstimate = plotVal + builtVal;
  } else if (propertyType === 'flat') {
    totalMarketEstimate = normalizedSqFt * selectedData.builtRatePerSqFt;
  } else if (propertyType === 'commercial') {
    totalMarketEstimate = normalizedSqFt * (selectedData.builtRatePerSqFt * 1.6);
  } else {
    // warehouse
    totalMarketEstimate = (normalizedSqYd * selectedData.plotRatePerSqYd * 0.9) + (normalizedSqFt * 1600);
  }

  const minVal = Math.round(totalMarketEstimate * 0.92);
  const maxVal = Math.round(totalMarketEstimate * 1.08);

  const formatLakhsCrores = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(amount / 100000).toFixed(1)} Lakh`;
  };

  // Stamp duty calculation
  // Male: 6% stamp + 20% surcharge + 1% registration = approx 8.2%
  // Female: 5% stamp + 20% surcharge + 1% registration = approx 7.0%
  const stampRate = buyerGender === 'male' ? 0.082 : 0.070;
  const estimatedStamp = Math.round(totalMarketEstimate * stampRate);

  const handleConsultation = () => {
    const summary = `${selectedData.name} - ${propertyType.toUpperCase()} of ${areaSize} ${unit === 'sqyd' ? 'Sq. Yds' : 'Sq. Ft'} (Estimated ${formatLakhsCrores(minVal)} to ${formatLakhsCrores(maxVal)})`;
    onProceedWithValuation(summary);
  };

  return (
    <section id="valuation" className="py-24 border-b border-[#E7E5E0] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#78716C] mb-2">
            Jaipur Property Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Indicative Valuation & Stamp Duty Estimator
          </h2>
          <p className="text-sm text-[#57534E] mt-3 leading-relaxed">
            Estimate current market valuation and state registration charges for plots, villas, and commercial properties based on Rajasthan DLC benchmarks and prevailing transaction figures.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-7 border border-[#E7E5E0] bg-[#FAFAF8] p-8 space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-[#E7E5E0]">
              <Calculator className="w-5 h-5 text-[#9A6735]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1C1917]">
                Property Parameters
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Corridor */}
              <div>
                <label htmlFor={corridorSelectId} className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2">
                  Corridor / Micro-Market
                </label>
                <select
                  id={corridorSelectId}
                  value={corridor}
                  onChange={(e) => setCorridor(e.target.value)}
                  className="w-full bg-white border border-[#E7E5E0] px-4 py-3 text-sm text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                >
                  <option value="vaishali">Vaishali Nagar / Chitrakoot</option>
                  <option value="jhotwara">Jhotwara / Kalwar Road</option>
                  <option value="jagatpura">Jagatpura / Mahal Road</option>
                  <option value="ajmer">Ajmer Road / Mansarovar</option>
                  <option value="tonk">Tonk Road Commercial</option>
                  <option value="vki">VKI Industrial Area</option>
                </select>
              </div>

              {/* Property Type */}
              <div>
                <label htmlFor={propertyTypeSelectId} className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2">
                  Property Asset Class
                </label>
                <select
                  id={propertyTypeSelectId}
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-white border border-[#E7E5E0] px-4 py-3 text-sm text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                >
                  <option value="plot">JDA Residential Plot</option>
                  <option value="villa">Independent Villa / Kothi</option>
                  <option value="flat">Gated Builder Flat / Penthouse</option>
                  <option value="commercial">Commercial Showroom / Office</option>
                  <option value="warehouse">Industrial Warehouse / Depot</option>
                </select>
              </div>
            </div>

            {/* Area Size & Unit */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={areaInputId} className="text-xs font-semibold uppercase tracking-wider text-[#78716C]">
                  Footprint / Size
                </label>
                <div className="flex items-center gap-1 bg-white border border-[#E7E5E0] p-0.5">
                  <button
                    type="button"
                    onClick={() => {
                      if (unit !== 'sqyd') {
                        setUnit('sqyd');
                        setAreaSize(Math.round(areaSize / 9) || 200);
                      }
                    }}
                    className={`px-3 py-1 text-xs font-medium ${unit === 'sqyd' ? 'bg-[#1C1917] text-white' : 'text-[#78716C]'}`}
                  >
                    Sq. Yards (Gaj)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (unit !== 'sqft') {
                        setUnit('sqft');
                        setAreaSize(Math.round(areaSize * 9) || 1800);
                      }
                    }}
                    className={`px-3 py-1 text-xs font-medium ${unit === 'sqft' ? 'bg-[#1C1917] text-white' : 'text-[#78716C]'}`}
                  >
                    Sq. Feet
                  </button>
                </div>
              </div>

              <input
                id={areaInputId}
                type="number"
                min="50"
                max="50000"
                value={areaSize}
                onChange={(e) => setAreaSize(Number(e.target.value))}
                className="w-full bg-white border border-[#E7E5E0] px-4 py-3 text-sm font-mono text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
              />
              <div className="flex items-center justify-between text-xs text-[#78716C] mt-2">
                <span>Equivalent: {unit === 'sqyd' ? `${Math.round(areaSize * 9)} sq.ft` : `${Math.round(areaSize / 9)} sq.yds (approx ${Math.round(areaSize / 9)} Gaj)`}</span>
                <span>Common: 100, 160, 200, 250, 500 Sq. Yd</span>
              </div>
            </div>

            {/* Purchaser Gender for Rajasthan Stamp Duty calculation */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2">
                Purchaser Status (Rajasthan Stamp Duty Benefit)
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setBuyerGender('male')}
                  className={`p-3 text-left border text-xs transition-colors ${buyerGender === 'male' ? 'bg-white border-[#1C1917] text-[#1C1917] font-semibold' : 'bg-white border-[#E7E5E0] text-[#78716C]'}`}
                >
                  <div className="font-semibold text-[#1C1917]">Male Purchaser</div>
                  <div className="text-[11px] text-[#78716C] mt-0.5">Standard 6% Stamp + 1% Reg. + Surcharges (~8.2%)</div>
                </button>
                <button
                  type="button"
                  onClick={() => setBuyerGender('female')}
                  className={`p-3 text-left border text-xs transition-colors ${buyerGender === 'female' ? 'bg-white border-[#1C1917] text-[#1C1917] font-semibold' : 'bg-white border-[#E7E5E0] text-[#78716C]'}`}
                >
                  <div className="font-semibold text-[#1C1917]">Female Purchaser / Joint</div>
                  <div className="text-[11px] text-[#78716C] mt-0.5">Concessional 5% Stamp + Surcharges (~7.0%)</div>
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 border border-[#1C1917] bg-[#1C1917] text-white p-8 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                VALUATION SUMMARY
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white mt-1">
                Estimated Price Bracket
              </h3>
            </div>

            <div className="py-6 border-y border-[#3A3530] space-y-4">
              <div>
                <div className="text-xs text-[#A8A29E] uppercase tracking-wider">Estimated Market Value</div>
                <div className="text-3xl font-bold font-mono tabular-nums text-white mt-1">
                  {formatLakhsCrores(minVal)} – {formatLakhsCrores(maxVal)}
                </div>
                <div className="text-xs text-[#A8A29E] mt-1">
                  Based on recent verified transactions in {selectedData.name}
                </div>
              </div>

              <div className="pt-4 border-t border-[#3A3530] grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[11px] text-[#A8A29E] uppercase">Govt. DLC Base</div>
                  <div className="text-sm font-semibold font-mono text-white mt-0.5">
                    ₹{selectedData.dlcAvg.toLocaleString('en-IN')}/sq.yd
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-[#A8A29E] uppercase">Est. Govt Stamp & Reg.</div>
                  <div className="text-sm font-semibold font-mono text-[#D4AF37] mt-0.5">
                    ~{formatLakhsCrores(estimatedStamp)}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs text-[#A8A29E]">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Calculations account for Rajasthan Stamp Act rules.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Bright Real Estate provides formal on-ground valuation reports.</span>
              </div>
            </div>

            <button
              onClick={handleConsultation}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#1C1917] bg-white hover:bg-[#F3EFEA] transition-colors shadow-sm"
            >
              <span>Request Formal Valuation Dossier</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

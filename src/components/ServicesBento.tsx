import React from 'react';
import { Home, Landmark, Building2, Warehouse, FileCheck, ArrowUpRight } from 'lucide-react';

interface ServicesBentoProps {
  onOpenConsultation: () => void;
}

export function ServicesBento({ onOpenConsultation }: ServicesBentoProps) {
  return (
    <section id="services" className="py-24 border-b border-[#E7E5E0] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#78716C] mb-2">
            Advisory Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Comprehensive Real Estate Services in Jaipur
          </h2>
          <p className="text-sm text-[#57534E] mt-3 leading-relaxed">
            From acquiring prime freehold land in developing JDA schemes to closing high-yield commercial showrooms and industrial warehouses, Bright Real Estate offers end-to-end transaction security.
          </p>
        </div>

        {/* Asymmetric Services Grid with Human Editorial Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 01 - Large Spanning Card */}
          <div className="lg:col-span-2 border border-[#E7E5E0] bg-[#FAFAF8] p-8 flex flex-col justify-between hover:border-[#1C1917] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-[#9A6735]">01. RESIDENTIAL BROKERAGE</span>
                <Home className="w-5 h-5 text-[#9A6735]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1C1917] tracking-tight">
                Residential Acquisitions & Luxury Villas
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed max-w-2xl">
                We represent private buyers in identifying, evaluating, and acquiring bespoke independent residences, luxury penthouses, and builder floors across Vaishali Nagar, Chitrakoot, and Jagatpura. Every residence is vetted for Vastu orientation, construction quality, clear title chain, and realistic market valuation.
              </p>
              
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#292524]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#9A6735] rounded-full"></span>
                  <span>Independent duplex and triplex villas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#9A6735] rounded-full"></span>
                  <span>Low-density gated builder apartments</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#9A6735] rounded-full"></span>
                  <span>Architectural structural inspection checks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#9A6735] rounded-full"></span>
                  <span>Direct negotiations with reputable builders</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E7E5E0] flex items-center justify-between">
              <span className="text-xs text-[#78716C]">Average timeline: 2 to 4 weeks</span>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1C1917] hover:text-[#9A6735] transition-colors"
              >
                <span>Request Villa Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Service 02 */}
          <div className="border border-[#E7E5E0] bg-[#FAFAF8] p-8 flex flex-col justify-between hover:border-[#1C1917] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-[#9A6735]">02. JDA PLOT SELECTION</span>
                <Landmark className="w-5 h-5 text-[#9A6735]" />
              </div>
              <h3 className="text-xl font-bold text-[#1C1917] tracking-tight">
                JDA Approved Land & Scheme Plots
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Specialized land brokerage in Jaipur Development Authority (JDA) sanctioned schemes, 90A converted private townships, and clear patta allotments along Kalwar Road, Jhotwara, and Mansarovar Extension.
              </p>
              <ul className="text-xs text-[#57534E] space-y-2 pt-2">
                <li>• Verification of original JDA Lease Deed (Patta)</li>
                <li>• Demarcation pillar inspection & road width audit</li>
                <li>• Bisalpur water supply & electrical line connectivity</li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E7E5E0]">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1C1917] hover:text-[#9A6735] transition-colors"
              >
                <span>Inquire JDA Plots</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Service 03 */}
          <div className="border border-[#E7E5E0] bg-[#FAFAF8] p-8 flex flex-col justify-between hover:border-[#1C1917] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-[#9A6735]">03. COMMERCIAL ASSETS</span>
                <Building2 className="w-5 h-5 text-[#9A6735]" />
              </div>
              <h3 className="text-xl font-bold text-[#1C1917] tracking-tight">
                High-Street Retail & Corporate Floors
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Acquisition and institutional leasing of commercial properties along Jaipur’s high-traffic commercial spines: Tonk Road, Ajmer Road, and Sikar Road. High footfall showrooms and Grade-A office spaces.
              </p>
              <ul className="text-xs text-[#57534E] space-y-2 pt-2">
                <li>• Commercial frontage and facade visibility analysis</li>
                <li>• Lease deeds for national retailers & banking institutions</li>
                <li>• Sanctioned commercial load and basement parking</li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E7E5E0]">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1C1917] hover:text-[#9A6735] transition-colors"
              >
                <span>Commercial Inquiries</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Service 04 */}
          <div className="border border-[#E7E5E0] bg-[#FAFAF8] p-8 flex flex-col justify-between hover:border-[#1C1917] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-[#9A6735]">04. INDUSTRIAL & LOGISTICS</span>
                <Warehouse className="w-5 h-5 text-[#9A6735]" />
              </div>
              <h3 className="text-xl font-bold text-[#1C1917] tracking-tight">
                Warehousing & Storage Depots
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Industrial real estate strategic advisory in VKI Area (Vishwakarma), Bindayaka, and Mahindra World City SEZ. Heavy PEB warehouses with dock levelers, heavy trailer access, and industrial power.
              </p>
              <ul className="text-xs text-[#57534E] space-y-2 pt-2">
                <li>• Industrial conversion & RIICO transfer guidance</li>
                <li>• Strategic warehouse location optimization</li>
                <li>• Long-term third-party logistics (3PL) leasing</li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E7E5E0]">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1C1917] hover:text-[#9A6735] transition-colors"
              >
                <span>Warehouse Advisory</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Service 05 */}
          <div className="border border-[#E7E5E0] bg-[#FAFAF8] p-8 flex flex-col justify-between hover:border-[#1C1917] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-[#9A6735]">05. DUE DILIGENCE & REGISTRY</span>
                <FileCheck className="w-5 h-5 text-[#9A6735]" />
              </div>
              <h3 className="text-xl font-bold text-[#1C1917] tracking-tight">
                Title Verification & Registry Liaison
              </h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Comprehensive legal assistance for Rajasthan real estate transactions. We protect client capital through 13-year revenue search reports, DLC rate calculations, and Sub-Registrar deed execution.
              </p>
              <ul className="text-xs text-[#57534E] space-y-2 pt-2">
                <li>• Section 90A Rajasthan Land Revenue order audit</li>
                <li>• Non-encumbrance certificate & mortgage check</li>
                <li>• Post-registration Mutation (Naam-Intkal) follow-up</li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E7E5E0]">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1C1917] hover:text-[#9A6735] transition-colors"
              >
                <span>Legal Review Support</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

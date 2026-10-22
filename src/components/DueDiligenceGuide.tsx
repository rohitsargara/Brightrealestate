import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, ChevronUp, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export function DueDiligenceGuide() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const steps = [
    {
      title: '01. JDA Allotment Letter & Lease Deed (Patta)',
      summary: 'Distinguish between genuine JDA Lease Deeds, Nagar Nigam Pattas, and unapproved housing society allotment papers.',
      details: 'In Jaipur, properties governed by the Jaipur Development Authority must possess an authentic JDA Allotment or Lease Deed (Patta) issued under the JDA Act. Housing cooperative societies (Grah Nirman Sahakari Samiti) that issued receipts or provisional allotment letters prior to June 1999 must have their schemes regularized under Section 90A to obtain a formal JDA Patta. We verify the master record with JDA’s Citizen Portal and file archives before client engagement.',
      verificationChecklist: [
        'Check original registered Patta serial number with JDA database',
        'Verify lease money (Lease Rent / One Time Urban Development Tax) payment receipts',
        'Ensure site plan demarcated on the reverse of the Patta matches physical ground boundaries'
      ]
    },
    {
      title: '02. Section 90A Rajasthan Land Revenue Conversion Order',
      summary: 'Ensure agricultural land has been legally surrendered and converted for residential or commercial development.',
      details: 'Under Section 90A of the Rajasthan Land Revenue Act 1956, agricultural land cannot be subdivided into residential or commercial plots without a formal conversion order passed by the authorized revenue officer (SDO / Tehsildar / JDA Zonal Commissioner). A genuine 90A order transfers the land from the khatedar to the urban authority for planned layout sanction.',
      verificationChecklist: [
        'Confirm gazette notification and 90A order reference number',
        'Verify surrender deed signed by the recorded khatedars (original agricultural landholders)',
        'Ensure conversion charges and development levy have been remitted in government treasury'
      ]
    },
    {
      title: '03. 13-Year Non-Encumbrance Search Report (Barah Sala)',
      summary: 'Confirm the property is completely free from prior mortgages, court injunctions, and disputed title claims.',
      details: 'Before executing any purchase agreement in Jaipur, an exhaustive title search of at least 13 years (and ideally 30 years) is performed at the relevant Sub-Registrar Office (Jaipur I, II, III, IV, V, VI, VII, VIII or Sanganer/Amer/Jhotwara). This guarantees there are no undisclosed equitable mortgages with commercial banks or pending civil litigations under Section 52 of the Transfer of Property Act.',
      verificationChecklist: [
        'Certified copy of Nil-Encumbrance Certificate from the Sub-Registrar',
        'Verification of complete title chain from first allotment to present vendor',
        'Release deed inspection if previous bank loan was discharged'
      ]
    },
    {
      title: '04. JDA Approved Master Layout Plan & Road Right-of-Way',
      summary: 'Ensure building setback rules, sector road widths, and utility reservations meet urban development norms.',
      details: 'Every authorized township scheme must hold an approved layout plan signed by the JDA Town Planning Wing. This demarcates road widths (e.g. 30ft, 40ft, 60ft, 80ft, or 100ft arterial roads), designated park areas, commercial facility strips, and utility easements. Purchasing a plot on an unapproved layout risks demolition of encroachments during future road widening projects.',
      verificationChecklist: [
        'Physical cross-check of corner plot setbacks and road widths',
        'Ensuring plot has not been designated under public utility (Suvidha Kshetra / Park)',
        'Checking proximity to notified Jaipur Ring Road or Master Plan 2025 green belts'
      ]
    },
    {
      title: '05. Sub-Registrar Execution & Revenue Mutation (Naam-Intkal)',
      summary: 'Complete legal transfer through Rajasthan Stamps Act registration followed by formal mutation in municipal records.',
      details: 'Registration of the Sale Deed (Bikraynama) at the Sub-Registrar Office transfers legal title. Following this, the crucial final step is applying for Mutation (Naam-Intkal) with the Jaipur Development Authority or Nagar Nigam to update property tax registers and utility connections into the new owner’s name.',
      verificationChecklist: [
        'Payment of appropriate stamp duty via E-Gras Rajasthan e-treasury challan',
        'Presence of recorded witnesses and verified biometrics',
        'Submission of mutation docket within 30 days of registration'
      ]
    }
  ];

  return (
    <section id="due-diligence" className="py-24 border-b border-[#E7E5E0] bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#78716C] mb-2">
            Legal & Regulatory Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            The Jaipur Property Due Diligence Standard
          </h2>
          <p className="text-sm text-[#57534E] mt-3 leading-relaxed">
            Navigating property ownership in Rajasthan requires meticulous verification of land conversion, JDA lease deeds, and sub-registrar records. Here is how Bright Real Estate protects your investment.
          </p>
        </div>

        {/* Accordion List */}
        <div className="border border-[#E7E5E0] bg-white divide-y divide-[#E7E5E0]">
          {steps.map((step, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left hover:bg-[#FAFAF8] transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <span className="font-display text-base sm:text-lg font-bold text-[#1C1917]">
                      {step.title}
                    </span>
                  </div>
                  <div className="p-1 text-[#78716C] shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#9A6735]" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 space-y-6 text-sm text-[#57534E] border-t border-[#F2EFE9] bg-[#FAFAF8]/50 animate-in fade-in duration-150">
                    <p className="leading-relaxed font-normal">
                      {step.details}
                    </p>

                    <div className="p-4 bg-white border border-[#E7E5E0] space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                        <CheckCircle2 className="w-4 h-4 text-[#2E6F40]" />
                        <span>Bright Real Estate Mandatory Checkpoints</span>
                      </div>
                      <ul className="space-y-2 text-xs text-[#292524]">
                        {step.verificationChecklist.map((check, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2">
                            <span className="text-[#9A6735] font-bold">•</span>
                            <span>{check}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Warning / Advisory Note */}
        <div className="mt-8 p-6 border border-[#E7E5E0] bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#9A6735] shrink-0 mt-0.5" />
            <div className="text-xs text-[#57534E]">
              <strong className="text-[#1C1917]">Advisory on Society Agreements:</strong> Never purchase unregularized society receipts without obtaining an official Section 90A conversion and direct JDA lease deed. Our legal desk examines existing title files on request.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

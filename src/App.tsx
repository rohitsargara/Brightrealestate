/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertyPortfolio } from './components/PropertyPortfolio';
import { ServicesBento } from './components/ServicesBento';
import { JaipurCorridors } from './components/JaipurCorridors';
import { ValuationEstimator } from './components/ValuationEstimator';
import { DueDiligenceGuide } from './components/DueDiligenceGuide';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { ScheduleModal } from './components/ScheduleModal';
import { Property } from './data/properties';

export default function App() {
  const [activePropertyModal, setActivePropertyModal] = useState<Property | null>(null);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [scheduledProperty, setScheduledProperty] = useState<Property | null>(null);
  const [valuationSummary, setValuationSummary] = useState('');

  const handleOpenConsultation = (property?: Property | null) => {
    setScheduledProperty(property || null);
    setIsScheduleModalOpen(true);
  };

  const handleExploreProperties = () => {
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProceedWithValuation = (summary: string) => {
    setValuationSummary(summary);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1C1917] selection:bg-[#E2D5C3] selection:text-[#1C1917]">
      {/* Strict Top Bar Contract Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation(null)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onExploreProperties={handleExploreProperties}
          onOpenConsultation={() => handleOpenConsultation(null)}
        />

        {/* Curated Properties Portfolio */}
        <PropertyPortfolio 
          onSelectProperty={(prop) => setActivePropertyModal(prop)}
          onBookInspection={(prop) => handleOpenConsultation(prop)}
        />

        {/* Advisory Capabilities Bento */}
        <ServicesBento 
          onOpenConsultation={() => handleOpenConsultation(null)}
        />

        {/* Jaipur Key Corridors & Micro-Market Dynamics */}
        <JaipurCorridors 
          onExploreProperties={handleExploreProperties}
        />

        {/* Jaipur Valuation & Rajasthan Stamp Duty Estimator */}
        <ValuationEstimator 
          onProceedWithValuation={handleProceedWithValuation}
        />

        {/* Rajasthan Due Diligence Standard */}
        <DueDiligenceGuide />

        {/* Advisory Desk & Working Contact Actions */}
        <ContactSection initialSummary={valuationSummary} />
      </main>

      {/* Quiet Luxury Footer */}
      <Footer />

      {/* Interactive Property Detail Modal */}
      <PropertyDetailModal
        property={activePropertyModal}
        onClose={() => setActivePropertyModal(null)}
        onBookInspection={(prop) => {
          setActivePropertyModal(null);
          handleOpenConsultation(prop);
        }}
      />

      {/* Inspection Scheduler Modal */}
      <ScheduleModal
        isOpen={isScheduleModalOpen}
        onClose={() => {
          setIsScheduleModalOpen(false);
          setScheduledProperty(null);
        }}
        selectedProperty={scheduledProperty}
      />
    </div>
  );
}

import React, { useState, useId } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  initialSummary?: string;
}

export function ContactSection({ initialSummary = '' }: ContactSectionProps) {
  const fullNameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const categorySelectId = useId();
  const corridorSelectId = useId();
  const messageId = useId();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('residential');
  const [corridor, setCorridor] = useState('all');
  const [message, setMessage] = useState(initialSummary);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Success state
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Bright Real Estate, I am inquiring about properties in Jaipur (${interest.toUpperCase()} in ${corridor}). Please connect.`
    );
    window.open(`https://wa.me/919414028190?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 border-b border-[#E7E5E0] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#78716C] mb-2">
            Advisory Desk
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Consult with Our Jaipur Specialists
          </h2>
          <p className="text-sm text-[#57534E] mt-3 leading-relaxed">
            Schedule an on-ground site inspection, request verified property title files, or discuss commercial property requirements directly with our principal advisors.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office Details & Direct Actions */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-[#E7E5E0] bg-[#FAFAF8] p-8 space-y-6">
              <h3 className="text-lg font-bold text-[#1C1917] tracking-tight">
                Bright Real Estate Services
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#9A6735] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#1C1917]">Office Location</div>
                    <div className="text-[#57534E] mt-0.5 leading-relaxed">
                      Main Niwaru Road, Near Jhotwara Flyover Junction<br />
                      (Connected to Vaishali Nagar Corridor)<br />
                      Jaipur, Rajasthan 302012, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#E7E5E0]">
                  <Phone className="w-4 h-4 text-[#9A6735] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#1C1917]">Direct Phone Consultation</div>
                    <a href="tel:+919414028190" className="text-[#1C1917] font-mono text-sm hover:text-[#9A6735] transition-colors mt-0.5 block">
                      +91 94140 28190 / +91 98290 14820
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#E7E5E0]">
                  <Mail className="w-4 h-4 text-[#9A6735] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#1C1917]">Written Correspondence</div>
                    <a href="mailto:inquiries@brightrealestatejaipur.com" className="text-[#57534E] hover:text-[#1C1917] transition-colors mt-0.5 block">
                      inquiries@brightrealestatejaipur.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#E7E5E0]">
                  <Clock className="w-4 h-4 text-[#9A6735] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#1C1917]">Operating Desk Hours</div>
                    <div className="text-[#57534E] mt-0.5">
                      Monday to Saturday: 9:30 AM – 7:30 PM<br />
                      Sunday: By prior site inspection booking
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-4 border-t border-[#E7E5E0]">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#15803D] hover:bg-[#166534] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp Inquiries</span>
                </button>
              </div>
            </div>

            {/* Micro Advisory Box */}
            <div className="p-6 border border-[#E7E5E0] bg-[#FAFAF8] text-xs text-[#57534E] space-y-2">
              <div className="font-bold text-[#1C1917] uppercase tracking-wider">
                Rajasthan RERA & Title Transparency
              </div>
              <p className="leading-relaxed">
                We facilitate site visits accompanied by our senior property consultants. Inspection of original title chains, approved layout maps, and seller identity proofs provided prior to token negotiations.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 border border-[#E7E5E0] bg-white p-8">
            {submitted ? (
              <div className="py-12 px-6 text-center space-y-4">
                <div className="w-12 h-12 bg-[#F0FDF4] border border-[#DCFCE7] text-[#2E6F40] mx-auto flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#1C1917] tracking-tight">
                  Inquiry Registered Successfully
                </h3>
                <p className="text-sm text-[#57534E] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#1C1917]">{fullName}</strong>. Your requirement for <strong>{interest.toUpperCase()}</strong> has been routed to our senior Jaipur desk. An advisor will contact you at <strong>{phone}</strong> within 2 business hours.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFullName('');
                      setPhone('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1C1917] border border-[#1C1917] hover:bg-[#FAFAF8]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#1C1917] tracking-tight mb-1">
                    Send Direct Property Requirement
                  </h3>
                  <p className="text-xs text-[#78716C]">
                    Fields marked with * are required. We respect client confidentiality.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-[#FEF2F2] border border-[#FEE2E2] text-xs text-[#991B1B] font-medium">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor={fullNameId} className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2">
                      Full Name *
                    </label>
                    <input
                      id={fullNameId}
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#FAFAF8] border border-[#E7E5E0] px-4 py-3 text-sm text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:border-[#1C1917]"
                    />
                  </div>

                  <div>
                    <label htmlFor={phoneId} className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2">
                      Mobile Number (India) *
                    </label>
                    <input
                      id={phoneId}
                      type="tel"
                      required
                      placeholder="+91 98290 XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#FAFAF8] border border-[#E7E5E0] px-4 py-3 text-sm text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:border-[#1C1917]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="sm:col-span-1">
                    <label htmlFor={emailId} className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2">
                      Email Address
                    </label>
                    <input
                      id={emailId}
                      type="email"
                      placeholder="name@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#FAFAF8] border border-[#E7E5E0] px-4 py-3 text-sm text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:border-[#1C1917]"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor={categorySelectId} className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2">
                      Asset Interest *
                    </label>
                    <select
                      id={categorySelectId}
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full bg-[#FAFAF8] border border-[#E7E5E0] px-4 py-3 text-sm text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                    >
                      <option value="residential">Luxury Villa / House</option>
                      <option value="plots">JDA Scheme Plot</option>
                      <option value="commercial">Commercial Space / Retail</option>
                      <option value="warehousing">Industrial Warehouse</option>
                      <option value="legal">Legal & Title Due Diligence</option>
                    </select>
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor={corridorSelectId} className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2">
                      Preferred Corridor
                    </label>
                    <select
                      id={corridorSelectId}
                      value={corridor}
                      onChange={(e) => setCorridor(e.target.value)}
                      className="w-full bg-[#FAFAF8] border border-[#E7E5E0] px-4 py-3 text-sm text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                    >
                      <option value="all">Any Prime Corridor</option>
                      <option value="Vaishali Nagar">Vaishali Nagar</option>
                      <option value="Jhotwara / Kalwar">Jhotwara / Kalwar</option>
                      <option value="Jagatpura">Jagatpura</option>
                      <option value="Ajmer Road">Ajmer Road</option>
                      <option value="Tonk Road">Tonk Road</option>
                      <option value="VKI">VKI Industrial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor={messageId} className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2">
                    Requirements / Schedule Preferences
                  </label>
                  <textarea
                    id={messageId}
                    rows={4}
                    placeholder="Specify budget, minimum area (Sq. Yds / Sq. Ft), timeline for purchase, or schedule a preferred day for physical site inspection."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#FAFAF8] border border-[#E7E5E0] px-4 py-3 text-sm text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:border-[#1C1917] resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-white bg-[#1C1917] hover:bg-[#322E2B] transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Property Requirement</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

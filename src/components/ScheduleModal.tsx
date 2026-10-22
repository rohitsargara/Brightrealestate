import React, { useState, useEffect, useId } from 'react';
import { X, Calendar, Clock, CheckCircle, ArrowUpRight } from 'lucide-react';
import { Property } from '../data/properties';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProperty?: Property | null;
}

export function ScheduleModal({ isOpen, onClose, selectedProperty }: ScheduleModalProps) {
  const nameInputId = useId();
  const phoneInputId = useId();
  const dateInputId = useId();
  const notesInputId = useId();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setError('Please provide a valid 10-digit mobile number.');
      return;
    }

    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-[#1C1917]/70 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="relative w-full max-w-lg bg-white border border-[#E7E5E0] shadow-2xl p-6 sm:p-8 z-10 animate-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#57534E] hover:text-[#1C1917] hover:bg-[#F5F5F4] transition-colors focus:outline-none"
          aria-label="Close scheduler"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 bg-[#F0FDF4] border border-[#DCFCE7] text-[#2E6F40] mx-auto flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1C1917] tracking-tight">
              Site Inspection Confirmed
            </h3>
            <p className="text-xs text-[#57534E] leading-relaxed">
              We have reserved your appointment for <strong>{date || 'Upcoming Business Day'}</strong> at <strong>{timeSlot}</strong>. Our senior consultant will call <strong>{phone}</strong> to confirm the exact location meetup.
            </p>
            {selectedProperty && (
              <div className="p-3 bg-[#FAFAF8] border border-[#E7E5E0] text-xs text-[#1C1917] font-semibold text-left">
                Property: {selectedProperty.title} ({selectedProperty.corridor})
              </div>
            )}
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="w-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1917]"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#78716C] mb-1">
                Direct Appointment
              </div>
              <h3 className="text-2xl font-bold text-[#1C1917] tracking-tight">
                Schedule Property Inspection
              </h3>
              <p className="text-xs text-[#57534E] mt-1">
                {selectedProperty 
                  ? `Inspection for: ${selectedProperty.title} (${selectedProperty.priceFormatted})`
                  : 'Private site visit across Jaipur with a verified property consultant.'}
              </p>
            </div>

            {error && (
              <div className="p-3 bg-[#FEF2F2] border border-[#FEE2E2] text-xs text-[#991B1B]">
                {error}
              </div>
            )}

            <div className="space-y-4 text-xs">
              <div>
                <label htmlFor={nameInputId} className="block font-semibold uppercase tracking-wider text-[#78716C] mb-1.5">
                  Full Name *
                </label>
                <input
                  id={nameInputId}
                  type="text"
                  required
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#FAFAF8] border border-[#E7E5E0] px-3.5 py-2.5 text-sm text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                />
              </div>

              <div>
                <label htmlFor={phoneInputId} className="block font-semibold uppercase tracking-wider text-[#78716C] mb-1.5">
                  Phone Number *
                </label>
                <input
                  id={phoneInputId}
                  type="tel"
                  required
                  placeholder="+91 94140 XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#FAFAF8] border border-[#E7E5E0] px-3.5 py-2.5 text-sm text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor={dateInputId} className="block font-semibold uppercase tracking-wider text-[#78716C] mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    id={dateInputId}
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#FAFAF8] border border-[#E7E5E0] px-3 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#78716C] mb-1.5">
                    Time Window
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#FAFAF8] border border-[#E7E5E0] px-3 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                  >
                    <option value="10:00 AM">10:00 AM (Morning)</option>
                    <option value="12:00 PM">12:00 PM (Noon)</option>
                    <option value="03:00 PM">03:00 PM (Afternoon)</option>
                    <option value="05:30 PM">05:30 PM (Evening)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor={notesInputId} className="block font-semibold uppercase tracking-wider text-[#78716C] mb-1.5">
                  Specific Requests (Optional)
                </label>
                <input
                  id={notesInputId}
                  type="text"
                  placeholder="e.g. Need to inspect JDA lease deed or title copy"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#FAFAF8] border border-[#E7E5E0] px-3.5 py-2.5 text-sm text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white bg-[#1C1917] hover:bg-[#322E2B] transition-colors"
              >
                <span>Confirm Inspection Slot</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

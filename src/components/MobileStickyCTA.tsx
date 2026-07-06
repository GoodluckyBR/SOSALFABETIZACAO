import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '../config/offer';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe após 600px de scroll
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToOffer = () => {
    trackEvent('Click Mobile Sticky CTA');
    const target = document.getElementById('offer-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 z-40 shadow-2xl flex items-center justify-between gap-4 animate-fade-in-up">
      <div className="text-left">
        <p className="text-[10px] uppercase font-bold text-slate-400">SOS Alfabetização</p>
        <p className="text-xs font-extrabold text-[#0B1F3A]">Orientação Individual</p>
      </div>
      
      <button
        onClick={handleScrollToOffer}
        className="flex-grow max-w-[200px] flex items-center justify-center py-2.5 px-4 rounded-xl bg-[#D62828] hover:bg-[#E53935] text-white font-bold text-xs sm:text-sm text-center shadow-md cursor-pointer"
      >
        Quero ajudar meu filho
        <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
      </button>
    </div>
  );
}

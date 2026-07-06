import { useEffect, useState } from 'react';
import { offerConfig, trackEvent } from '../config/offer';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsappClick = () => {
    trackEvent('Click Mobile Sticky WhatsApp CTA');
    window.open(offerConfig.whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3.5 z-45 shadow-2xl flex items-center justify-center">
      <button
        onClick={handleWhatsappClick}
        className="w-full max-w-sm flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#25D366] hover:bg-[#20BA56] active:bg-[#1E9F4A] text-white font-extrabold text-sm sm:text-base text-center shadow-lg transition-all duration-200 cursor-pointer"
        aria-label="Falar com a professora Tainá Souza pelo WhatsApp"
      >
        {/* Official WhatsApp SVG logo */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-5 h-5 fill-current text-white flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.768.002-2.607-1.012-5.059-2.859-6.908C16.375 2.08 13.91 1.066 11.293 1.066c-5.4.001-9.799 4.381-9.802 9.77-.001 1.955.498 3.861 1.444 5.5l-.999 3.649 3.766-.988zM16.924 13.43c-.279-.14-1.654-.816-1.91-.908-.255-.093-.44-.139-.626.139-.185.279-.718.908-.88 1.093-.163.186-.325.209-.604.069-.279-.14-1.18-.435-2.247-1.387-.83-.74-1.39-1.653-1.553-1.932-.163-.279-.017-.43.122-.569.126-.125.279-.325.419-.487.14-.162.186-.279.279-.464.093-.186.046-.348-.023-.487-.069-.14-.626-1.507-.857-2.064-.226-.543-.453-.47-.626-.478-.162-.007-.348-.008-.534-.008-.186 0-.488.069-.743.348-.255.279-.974.952-.974 2.32 0 1.369.998 2.692 1.137 2.877.14.186 1.966 3.002 4.761 4.204.665.286 1.184.457 1.589.587.668.213 1.278.183 1.758.111.535-.08 1.654-.676 1.887-1.328.232-.653.232-1.213.163-1.328-.069-.116-.255-.185-.534-.325z" />
        </svg>
        <span>Falar com Tainá</span>
      </button>
    </div>
  );
}

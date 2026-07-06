import { MessageCircle } from 'lucide-react';
import { offerConfig, trackEvent } from '../config/offer';

export default function WhatsappWidget() {
  const handleClick = () => {
    trackEvent('Click WhatsApp Floating Widget');
    window.open(offerConfig.whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA56] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-bounce cursor-pointer group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-[#0B1F3A] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10">
        Dúvidas? Fale conosco!
      </span>
    </button>
  );
}

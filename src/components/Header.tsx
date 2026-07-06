import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { trackEvent } from '../config/offer';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToOffer = () => {
    trackEvent('Click Header CTA');
    const target = document.getElementById('offer-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-1 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center font-bold text-xl md:text-2xl cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-[#D62828] font-extrabold mr-1">SOS</span>
          <span className="text-[#0B1F3A]">Alfabetização</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 text-sm font-medium text-slate-600">
          <button onClick={() => scrollToSection('how-it-works')} className="hover:text-[#D62828] transition-colors cursor-pointer">Como funciona</button>
          <button onClick={() => scrollToSection('deliverables')} className="hover:text-[#D62828] transition-colors cursor-pointer">O que você recebe</button>
          <button onClick={() => scrollToSection('literacy-map')} className="hover:text-[#D62828] transition-colors cursor-pointer">Mapa da Alfabetização</button>
          <button onClick={() => scrollToSection('about-professional')} className="hover:text-[#D62828] transition-colors cursor-pointer">Sobre</button>
          <button onClick={() => scrollToSection('faq')} className="hover:text-[#D62828] transition-colors cursor-pointer">Dúvidas</button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button 
            onClick={handleScrollToOffer}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-white bg-[#D62828] hover:bg-[#E53935] font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            Quero entender como ajudar
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 hover:text-[#0B1F3A] p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl py-6 px-4 flex flex-col space-y-4 animate-fade-in-down">
          <button onClick={() => scrollToSection('how-it-works')} className="text-left py-2 font-medium text-slate-700 hover:text-[#D62828]">Como funciona</button>
          <button onClick={() => scrollToSection('deliverables')} className="text-left py-2 font-medium text-slate-700 hover:text-[#D62828]">O que você recebe</button>
          <button onClick={() => scrollToSection('literacy-map')} className="text-left py-2 font-medium text-slate-700 hover:text-[#D62828]">Mapa da Alfabetização</button>
          <button onClick={() => scrollToSection('about-professional')} className="text-left py-2 font-medium text-slate-700 hover:text-[#D62828]">Sobre</button>
          <button onClick={() => scrollToSection('faq')} className="text-left py-2 font-medium text-slate-700 hover:text-[#D62828]">Dúvidas</button>
          <button
            onClick={handleScrollToOffer}
            className="w-full flex items-center justify-center py-3 bg-[#D62828] hover:bg-[#E53935] text-white rounded-xl font-bold text-center transition-colors shadow-md"
          >
            Quero entender como ajudar
          </button>
        </div>
      )}
    </header>
  );
}

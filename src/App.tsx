import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import ScrollProgress from './components/ScrollProgress';
import TopBar from './components/TopBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PainIdentification from './components/PainIdentification';
import InteractiveSituationSelector from './components/InteractiveSituationSelector';
import ProblemReframe from './components/ProblemReframe';
import SolutionOverview from './components/SolutionOverview';
import LiteracyMap from './components/LiteracyMap';
import HowItWorks from './components/HowItWorks';
import Deliverables from './components/Deliverables';
import WhatItIsNot from './components/WhatItIsNot';
import WhoItIsFor from './components/WhoItIsFor';
import ParentTransformation from './components/ParentTransformation';
import ProfessionalSection from './components/ProfessionalSection';
import OfferSection from './components/OfferSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import { trackEvent } from './config/offer';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Analytics tracking check
    trackEvent('Landing Page Loaded');

    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    trackEvent('Click Scroll To Top');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#D62828] selection:text-white">
      {/* Scroll Reading Progress Indicator */}
      <ScrollProgress />

      {/* Top Banner Bar */}
      <TopBar />

      {/* Navigation Header */}
      <Header />

      {/* Main Sections Content */}
      <main>
        {/* Section 1: Hero Principal */}
        <HeroSection />

        {/* Section 2: Identificação com a Dor */}
        <PainIdentification />

        {/* Section 3: Seletor Interativo de Cenários */}
        <InteractiveSituationSelector />

        {/* Section 4: Reenquadramento do Problema */}
        <ProblemReframe />

        {/* Section 5: Apresentação da Solução */}
        <SolutionOverview />

        {/* Section 6: O Método do Mapa da Alfabetização */}
        <LiteracyMap />

        {/* Section 7: Como Funciona o Processo */}
        <HowItWorks />

        {/* Section 8: Os Entregáveis da Consultoria */}
        <Deliverables />

        {/* Section 9: Alinhamento de Expectativas / O que não é */}
        <WhatItIsNot />

        {/* Section 10: Para Quem É e Quem Não é */}
        <WhoItIsFor />

        {/* Section 11: Transformação de sentimentos dos Pais */}
        <ParentTransformation />

        {/* Section 12: Apresentação da Profissional Responsável */}
        <ProfessionalSection />

        {/* Section 13: Oferta Principal */}
        <OfferSection />

        {/* Section 14: Perguntas Frequentes (FAQ) */}
        <FAQSection />

        {/* Section 15: Chamada Final */}
        <FinalCTA />
      </main>

      {/* Footer & Legals */}
      <Footer />

      {/* Sticky Bottom Bar on Mobile Devices */}
      <MobileStickyCTA />

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 z-50 bg-[#0B1F3A] hover:bg-[#D62828] text-white p-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer hidden md:flex items-center justify-center"
          aria-label="Voltar para o topo"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default App;

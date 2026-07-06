import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import ScrollProgress from './components/ScrollProgress';
import TopBar from './components/TopBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PainIdentification from './components/PainIdentification';
import ProblemReframe from './components/ProblemReframe';
import SolutionOverview from './components/SolutionOverview';
import LiteracyMap from './components/LiteracyMap';
import ActivitySection from './components/ActivitySection';
import HowItWorks from './components/HowItWorks';
import ProfessionalSection from './components/ProfessionalSection';
import OfferFaqFinalSection from './components/OfferFaqFinalSection';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import WhatsappWidget from './components/WhatsappWidget';
import { trackEvent } from './config/offer';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
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

      {/* Main Content: Exactly 9 Sections */}
      <main>
        {/* SEÇÃO 1 — HERO PRINCIPAL */}
        <HeroSection />

        {/* SEÇÃO 2 — IDENTIFICAÇÃO COM OS PAIS */}
        <PainIdentification />

        {/* SEÇÃO 3 — O PROBLEMA NÃO É FALTA DE ATIVIDADES */}
        <ProblemReframe />

        {/* SEÇÃO 4 — CONHEÇA O SOS ALFABETIZAÇÃO */}
        <SolutionOverview />

        {/* SEÇÃO 5 — MAPA DA ALFABETIZAÇÃO */}
        <LiteracyMap />

        {/* SEÇÃO 6 — ORIENTAÇÃO PRÁTICA E ATIVIDADES */}
        <ActivitySection />

        {/* SEÇÃO 7 — COMO FUNCIONA E O QUE A FAMÍLIA RECEBE */}
        <HowItWorks />

        {/* SEÇÃO 8 — SOBRE TAINÁ SOUZA */}
        <ProfessionalSection />

        {/* SEÇÃO 9 — OFERTA, FAQ E CHAMADA FINAL */}
        <OfferFaqFinalSection />
      </main>

      {/* Footer & Legals (Not counted as a section) */}
      <Footer />

      {/* Sticky Bottom Bar on Mobile Devices */}
      <MobileStickyCTA />

      {/* WhatsApp Floating Button */}
      <WhatsappWidget />

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

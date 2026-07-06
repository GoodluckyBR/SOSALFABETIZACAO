import { ArrowRight, Search, Compass, Home, AlertCircle } from 'lucide-react';
import { offerConfig, trackEvent } from '../config/offer';

export default function HeroSection() {
  const handleScrollToSection = (id: string) => {
    trackEvent(`Hero Click ${id}`);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F7FA] via-[#EAF1F8]/50 to-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#EAF1F8] rounded-full blur-3xl opacity-60" />
      <div className="absolute -bottom-10 left-10 -z-10 w-80 h-80 bg-red-50/50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left order-1 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-[#D62828] text-xs md:text-sm font-bold tracking-wide w-fit">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D62828] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D62828]"></span>
              </span>
              Orientação pedagógica individual para pais
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] leading-tight tracking-tight">
              Você não precisa continuar tentando{' '}
              <span className="text-[#D62828] relative inline-block">
                adivinhar
                <span className="absolute left-0 bottom-1 w-full h-[3px] bg-[#D62828]/20" />
              </span>{' '}
              como{' '}
              <span className="text-[#16365C] font-black">
                ajudar seu filho
              </span>{' '}
              a ler e escrever.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Em uma consultoria individual com a professora <strong className="text-[#0B1F3A]">{offerConfig.professionalName}</strong>, você irá compreender melhor o momento da alfabetização do seu filho e sair com um plano claro para apoiá-lo em casa durante os próximos 30 dias.
            </p>

            {/* Quick Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 p-1 bg-blue-50 rounded-lg">
                  <Search className="w-4 h-4 text-[#0B1F3A]" />
                </div>
                <p className="text-sm font-medium text-slate-700">Entenda em qual etapa da alfabetização seu filho está.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 p-1 bg-[#EAF1F8] rounded-lg">
                  <Compass className="w-4 h-4 text-[#16365C]" />
                </div>
                <p className="text-sm font-medium text-slate-700">Identifique o que pode estar dificultando o avanço.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 p-1 bg-green-50 rounded-lg">
                  <Home className="w-4 h-4 text-green-700" />
                </div>
                <p className="text-sm font-medium text-slate-700">Saiba o que fazer em casa de maneira prática.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 p-1 bg-red-50 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-[#D62828]" />
                </div>
                <p className="text-sm font-medium text-slate-700">Descubra o que evitar durante esse processo.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={() => handleScrollToSection('offer-section')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-white bg-[#D62828] hover:bg-[#E53935] font-bold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                Quero entender como ajudar meu filho
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button 
                onClick={() => handleScrollToSection('how-it-works-section')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 font-semibold text-base transition-all cursor-pointer"
              >
                Ver como funciona
              </button>
            </div>

            <p className="text-xs text-slate-500 font-medium">
              ✓ Atendimento individual, linguagem simples e orientação personalizada.
            </p>
          </div>

          {/* Right Column (Image of Tainá Souza) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-2 lg:order-2">
            <div className="relative w-full max-w-[380px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#EAF1F8] group">
              {/* Colored backdrop card */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/30 to-transparent z-10" />
              <img 
                src={offerConfig.images.hero} 
                alt="Professora Tainá Souza, responsável pelo SOS Alfabetização." 
                className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
              />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-slate-100 shadow-lg z-20 text-left">
                <p className="text-[10px] uppercase font-bold text-[#D62828] tracking-widest">Consultora Pedagógica</p>
                <p className="text-xs font-extrabold text-[#0B1F3A]">Professora Tainá Souza</p>
              </div>
            </div>
            
            <span className="mt-3 text-xs text-slate-400 font-semibold italic">
              Com a professora Tainá Souza
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

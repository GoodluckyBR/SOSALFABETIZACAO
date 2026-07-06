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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F7FA] via-[#EAF1F8]/50 to-white pt-6 pb-16 lg:pt-20 lg:pb-28">
      {/* Decorative Background Shapes - Hidden on Mobile */}
      <div className="hidden lg:block absolute top-0 right-0 -z-10 w-96 h-96 bg-[#EAF1F8] rounded-full blur-3xl opacity-60" />
      <div className="hidden lg:block absolute -bottom-10 left-10 -z-10 w-80 h-80 bg-red-50/50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Column 1 (Image): Renders FIRST on Mobile, SECOND on Desktop */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[420px] h-[320px] sm:h-[400px] lg:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl border-2 sm:border-4 border-white bg-[#EAF1F8] group">
              {/* Colored backdrop card */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/45 via-transparent to-transparent z-10" />
              
              {/* Shape backing only on desktop */}
              <div className="hidden lg:block absolute -inset-2 bg-gradient-to-tr from-blue-500/10 to-red-500/10 blur-lg -z-10" />

              <img 
                src={offerConfig.images.hero} 
                alt="Professora Tainá Souza, responsável pelo SOS Alfabetização." 
                className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
              />
              
              {/* Badge Overlay: White/Navy Semitransparent */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0b1f3a]/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 shadow-lg z-20 text-left text-white">
                <p className="text-[9px] uppercase font-extrabold text-red-400 tracking-widest">Tainá Souza</p>
                <p className="text-xs font-bold text-slate-100 leading-normal">Orientação pedagógica para pais</p>
              </div>
            </div>
          </div>

          {/* Column 2 (Copy): Renders SECOND on Mobile, FIRST on Desktop */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-[#D62828] text-xs md:text-sm font-bold tracking-wide w-fit">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D62828] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D62828]"></span>
              </span>
              Orientação pedagógica individual para pais
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#0B1F3A] leading-tight tracking-tight">
              Você não precisa continuar tentando{' '}
              <span className="text-[#D62828] relative inline-block">
                adivinhar
                <span className="absolute left-0 bottom-1 w-full h-[2.5px] bg-[#D62828]/25" />
              </span>{' '}
              como{' '}
              <span className="text-[#16365C] font-black">
                ajudar seu filho
              </span>{' '}
              a ler e escrever.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-medium">
              Em uma consultoria individual com a professora <strong className="text-[#0B1F3A]">{offerConfig.professionalName}</strong>, você irá compreender melhor o momento da alfabetização do seu filho e sair com um plano claro para apoiá-lo em casa durante os próximos 30 dias.
            </p>

            {/* Quick Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 py-1">
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 flex-shrink-0 p-1 bg-blue-50 rounded-lg">
                  <Search className="w-3.5 h-3.5 text-[#0B1F3A]" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">Entenda em qual etapa da alfabetização seu filho está.</p>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 flex-shrink-0 p-1 bg-[#EAF1F8] rounded-lg">
                  <Compass className="w-3.5 h-3.5 text-[#16365C]" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">Identifique o que pode estar dificultando o avanço.</p>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 flex-shrink-0 p-1 bg-green-50 rounded-lg">
                  <Home className="w-3.5 h-3.5 text-green-700" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">Saiba o que fazer em casa de maneira prática.</p>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 flex-shrink-0 p-1 bg-red-50 rounded-lg">
                  <AlertCircle className="w-3.5 h-3.5 text-[#D62828]" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">Descubra o que evitar durante esse processo.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button 
                onClick={() => handleScrollToSection('offer-section')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-white bg-[#D62828] hover:bg-[#E53935] font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                Quero entender como ajudar meu filho
                <ArrowRight className="ml-1.5 w-4 h-4" />
              </button>
              
              <button 
                onClick={() => handleScrollToSection('how-it-works-section')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 font-bold text-sm sm:text-base transition-all cursor-pointer"
              >
                Ver como funciona
              </button>
            </div>

            <p className="text-[10px] sm:text-xs text-slate-500 font-bold">
              ✓ Atendimento individual, linguagem simples e orientação personalizada.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

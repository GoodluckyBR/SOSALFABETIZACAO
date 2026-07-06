import { motion } from 'framer-motion';
import { Search, Compass, Home, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F9FC] via-[#EEF3F8]/50 to-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#EEF3F8] rounded-full blur-3xl opacity-60" />
      <div className="absolute -bottom-10 left-10 -z-10 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Copy) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-[#D62828] text-xs md:text-sm font-semibold tracking-wide w-fit">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D62828] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D62828]"></span>
              </span>
              Orientação pedagógica individual para pais
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] leading-tight tracking-tight">
              Você não precisa continuar tentando{' '}
              <span className="text-[#D62828] relative">
                adivinhar
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#D62828]/20" />
              </span>{' '}
              como{' '}
              <span className="text-[#16365C] font-black">
                ajudar seu filho
              </span>{' '}
              a ler e escrever.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Em uma consultoria individual, você irá compreender melhor o momento da alfabetização do seu filho e sair com um plano claro de como apoiá-lo em casa durante os próximos 30 dias.
            </p>

            {/* Quick Benefits list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 p-1 bg-blue-50 rounded-lg">
                  <Search className="w-4 h-4 text-[#0B1F3A]" />
                </div>
                <p className="text-sm font-medium text-slate-700">Entenda em qual etapa da alfabetização seu filho está.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 p-1 bg-[#EEF3F8] rounded-lg">
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
                <p className="text-sm font-medium text-slate-700">Descubra quais atitudes podem atrapalhar o processo.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={() => handleScrollToSection('offer-section')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white bg-[#D62828] hover:bg-[#E53935] font-bold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                Quero entender como ajudar meu filho
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button 
                onClick={() => handleScrollToSection('how-it-works')}
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 font-semibold text-base transition-all cursor-pointer"
              >
                Ver como funciona
              </button>
            </div>

            <div className="text-xs text-slate-500 space-y-1">
              <p>✓ Atendimento individual, linguagem simples e orientação personalizada.</p>
              <p className="font-semibold text-slate-700">
                Valor inicial de validação: <span className="text-[#D62828] text-sm">{offerConfig.price}</span>
              </p>
            </div>
          </div>

          {/* Right Column (Visual Composition) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[420px] aspect-square bg-white rounded-3xl shadow-xl border border-slate-100 p-6 flex flex-col justify-between overflow-hidden"
            >
              {/* Background Map Tracing */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#5C6B7A_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              
              {/* Visual Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">Mapa da Alfabetização</span>
                </div>
                <span className="text-[10px] bg-blue-50 text-[#0B1F3A] font-semibold px-2 py-0.5 rounded-full">Individual</span>
              </div>

              {/* Graphical representation of the road */}
              <div className="relative flex-grow flex items-center justify-center py-4">
                <svg className="w-full h-full max-h-[220px]" viewBox="0 0 300 160" fill="none">
                  {/* Road Path */}
                  <path 
                    d="M 20 120 Q 80 40 140 100 T 260 40" 
                    stroke="#E2E8F0" 
                    strokeWidth="8" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M 20 120 Q 80 40 140 100 T 260 40" 
                    stroke="#16365C" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    strokeDasharray="4 6" 
                  />
                  
                  {/* Nodes */}
                  <g className="cursor-pointer">
                    <circle cx="20" cy="120" r="10" fill="#E2E8F0" className="hover:fill-slate-300 transition-colors" />
                    <circle cx="20" cy="120" r="6" fill="#94A3B8" />
                  </g>
                  
                  <g className="cursor-pointer">
                    <circle cx="70" cy="82" r="12" fill="#FEE2E2" className="hover:fill-red-200 transition-colors" />
                    <circle cx="70" cy="82" r="7" fill="#D62828" />
                    <foreignObject x="85" y="70" width="100" height="40">
                      <div className="text-[9px] font-bold text-slate-800 bg-white/90 backdrop-blur-sm p-1 rounded border border-red-200 shadow-sm leading-tight">
                        📍 Ponto Crítico Identificado
                      </div>
                    </foreignObject>
                  </g>

                  <g className="cursor-pointer">
                    <circle cx="140" cy="100" r="10" fill="#E2E8F0" />
                    <circle cx="140" cy="100" r="6" fill="#94A3B8" />
                  </g>

                  <g className="cursor-pointer">
                    <circle cx="200" cy="70" r="10" fill="#E2E8F0" />
                    <circle cx="200" cy="70" r="6" fill="#94A3B8" />
                  </g>

                  <g className="cursor-pointer">
                    <circle cx="260" cy="40" r="10" fill="#DCFCE7" />
                    <circle cx="260" cy="40" r="6" fill="#22C55E" />
                  </g>
                </svg>

                {/* Simulated Floating Tooltip */}
                <div className="absolute top-2 right-2 bg-white/95 border border-slate-100 p-2.5 rounded-xl shadow-lg flex items-center gap-2 max-w-[150px]">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-[9px] font-bold text-slate-800">Relatório Pronto</p>
                    <p className="text-[8px] text-slate-500">Plano de Ação 30 dias</p>
                  </div>
                </div>
              </div>

              {/* Visual Footer */}
              <div className="border-top border-slate-100 pt-3 flex items-center justify-between text-left">
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Análise & Direção</h4>
                  <p className="text-[10px] text-slate-500">Compreensão sem rótulos clínicos</p>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[8px] font-bold text-slate-600">P</div>
                  <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-[#0B1F3A]">F</div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

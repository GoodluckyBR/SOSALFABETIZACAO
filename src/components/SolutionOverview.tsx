import { Search, Compass, BookOpen } from 'lucide-react';
import { offerConfig } from '../config/offer';

export default function SolutionOverview() {
  const steps = [
    {
      icon: Search,
      title: "Análise individual",
      description: "As informações da criança são organizadas e analisadas detalhadamente antes do início da consultoria."
    },
    {
      icon: BookOpen,
      title: `Consultoria com ${offerConfig.professionalName}`,
      description: "Durante aproximadamente uma hora, os pais recebem explicações em linguagem clara, prática e sem termos pedagógicos difíceis."
    },
    {
      icon: Compass,
      title: "Plano personalizado",
      description: "A família recebe um relatório pedagógico analítico e um plano de ação prático com prioridades para os próximos 30 dias."
    }
  ];

  return (
    <section className="py-20 bg-white" id="solution-overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0B1F3A] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            A Proposta
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
            Conheça o SOS Alfabetização
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Uma consultoria pedagógica individual para pais que querem entender melhor as dificuldades dos filhos e participar da alfabetização com mais segurança.
          </p>
        </div>

        {/* Triple pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-[#F5F7FA] border border-slate-100 p-8 rounded-2xl hover:bg-white hover:border-[#0B1F3A] hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B1F3A] flex items-center justify-center mb-6 border border-blue-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">{step.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                <div className="mt-6 text-xs font-semibold text-slate-400">
                  Pilar 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Banner Highlight */}
        <div className="bg-[#EAF1F8] rounded-2xl p-6 md:p-8 max-w-4xl mx-auto border border-blue-100/50 flex flex-col md:flex-row items-center gap-4 text-left">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="text-xl">🎯</span>
          </div>
          <div>
            <p className="text-sm sm:text-base text-[#0B1F3A] font-bold">
              Você não receberá uma resposta genérica.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              A orientação será construída de forma exclusiva a partir da realidade e do contexto particular da sua família.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

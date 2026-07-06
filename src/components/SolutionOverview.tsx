import { Search, Compass, BookOpen, Video, FileSpreadsheet, CalendarRange } from 'lucide-react';
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

        {/* Triple pillars cards with connection SVGs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto items-stretch">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-[#F5F7FA] border border-slate-100 p-8 rounded-3xl hover:bg-white hover:border-[#0B1F3A] hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B1F3A] flex items-center justify-center mb-6 border border-blue-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">{step.description}</p>
                </div>
                <div className="mt-6 text-xs font-bold text-slate-400">
                  Etapa 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Mockup/Flowchart connecting the 3 pillars */}
        <div className="bg-[#F5F7FA] border border-slate-100 rounded-3xl p-8 max-w-4xl mx-auto shadow-sm mb-16">
          <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-8">Fluxo Visual da Consultoria</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Visual Block 1: Notepad checklist */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-left space-y-3">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span className="font-bold uppercase">Pre-Análise</span>
                <FileSpreadsheet className="w-4 h-4 text-blue-600" />
              </div>
              <div className="space-y-1.5 pt-1">
                <div className="h-1.5 bg-slate-200 rounded w-11/12" />
                <div className="h-1.5 bg-slate-200 rounded w-5/6" />
                <div className="h-1.5 bg-slate-200 rounded w-2/3" />
              </div>
              <div className="text-[10px] text-slate-500 font-bold bg-[#EAF1F8] px-2 py-1 rounded w-fit">
                Questionário Inicial
              </div>
            </div>

            {/* Visual Block 2: Video Call Screen */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-left space-y-3 relative">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span className="font-bold uppercase">Encontro Zoom/Meet</span>
                <Video className="w-4 h-4 text-red-500" />
              </div>
              <div className="h-20 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 text-xs">
                🎥 Videochamada ~1h
              </div>
            </div>

            {/* Visual Block 3: Action Plan Grid */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-left space-y-3">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span className="font-bold uppercase">Planejamento</span>
                <CalendarRange className="w-4 h-4 text-green-600" />
              </div>
              <div className="grid grid-cols-5 gap-1 pt-1">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className={`h-3 rounded-sm ${i < 3 ? 'bg-green-500' : 'bg-slate-100'}`} />
                ))}
              </div>
              <div className="text-[10px] text-green-700 font-bold bg-green-50 px-2 py-1 rounded w-fit">
                Plano de 30 Dias
              </div>
            </div>

          </div>
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

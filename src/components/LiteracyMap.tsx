import { useState } from 'react';
import { Compass, Check, BookOpen, Brain, SpellCheck, Star, Award, Sparkles } from 'lucide-react';
import { trackEvent } from '../config/offer';

interface Step {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
}

export default function LiteracyMap() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: Step[] = [
    {
      id: 0,
      title: "Percepção dos sons",
      subtitle: "Consciência fonológica e auditiva.",
      description: "Como a criança percebe, discrimina e manipula os sons da fala (rimas, sílabas) antes de representá-los em letras.",
      icon: Brain
    },
    {
      id: 1,
      title: "Relação entre sons e letras",
      subtitle: "Princípio alfabético.",
      description: "A conexão entre o fonema (som) e o grafema (letra escrita). Entender que letras representam sons da fala.",
      icon: SpellCheck
    },
    {
      id: 2,
      title: "Formação de sílabas e palavras",
      subtitle: "Decodificação básica.",
      description: "A junção gradual das letras e sílabas para ler as primeiras palavras completas sem adivinhar pelo contexto.",
      icon: BookOpen
    },
    {
      id: 3,
      title: "Escrita",
      subtitle: "Codificação e hipóteses.",
      description: "O registro gráfico de palavras e ideias, analisando hipóteses ortográficas e trocas naturais de letras.",
      icon: Star
    },
    {
      id: 4,
      title: "Fluência",
      subtitle: "Automaticidade de leitura.",
      description: "Leitura com entonação adequada, velocidade confortável e sem a necessidade de silabação constante.",
      icon: Award
    },
    {
      id: 5,
      title: "Compreensão e autonomia",
      subtitle: "Leitura independente com significado.",
      description: "O entendimento profundo do texto lido, permitindo que a criança utilize a leitura como ferramenta de aprendizado autônomo.",
      icon: Sparkles
    }
  ];

  const handleStepClick = (idx: number) => {
    trackEvent('Click Map Step', { stepId: idx, stepTitle: steps[idx].title });
    setActiveStep(idx);
  };

  return (
    <section className="py-20 bg-[#EAF1F8]" id="literacy-map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm border border-slate-100">
            <Compass className="w-4 h-4 text-[#0B1F3A]" />
            Metodologia SOS
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] leading-tight">
            Mapa da Alfabetização: primeiro entendemos o caminho, depois definimos os próximos passos.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            O Mapa da Alfabetização ajuda os pais a compreenderem as habilidades envolvidas no processo de leitura e escrita e quais pontos precisam receber mais atenção.
          </p>
        </div>

        {/* Trilha Horizontal (Desktop) / Vertical (Mobile) */}
        <div className="mb-12 max-w-5xl mx-auto relative hidden md:block">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-[5%] right-[5%] h-1 bg-slate-300 -translate-y-1/2 -z-10 rounded" />
          <div 
            className="absolute top-1/2 left-[5%] h-1 bg-[#D62828] -translate-y-1/2 -z-10 rounded transition-all duration-500"
            style={{ width: `${(activeStep / (steps.length - 1)) * 90}%` }}
          />

          <div className="flex justify-between items-center">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(idx)}
                  className="flex flex-col items-center group relative cursor-pointer"
                >
                  <div className={`w-14 h-14 rounded-full border-4 flex items-center justify-center transition-all duration-300 shadow-md ${
                    isActive 
                      ? 'bg-[#D62828] border-white text-white scale-110 ring-4 ring-[#D62828]/10' 
                      : isPassed
                        ? 'bg-[#0B1F3A] border-white text-white'
                        : 'bg-white border-slate-200 text-slate-500 hover:border-[#0B1F3A] hover:text-[#0B1F3A]'
                  }`}>
                    <StepIcon className="w-5 h-5" />
                  </div>
                  <span className={`mt-3 text-xs font-bold transition-colors text-center max-w-[100px] ${
                    isActive ? 'text-[#D62828]' : 'text-slate-500 group-hover:text-[#0B1F3A]'
                  }`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Trilha Layout */}
        <div className="md:hidden space-y-4 mb-8">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            const isActive = activeStep === idx;

            return (
              <button
                key={step.id}
                onClick={() => handleStepClick(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center gap-4 cursor-pointer ${
                  isActive
                    ? 'border-[#D62828] bg-white text-[#0B1F3A] ring-2 ring-[#D62828]/10'
                    : 'border-slate-100/50 bg-white/70 text-slate-600'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  isActive ? 'bg-[#D62828] text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  <StepIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-800">{step.title}</h3>
                  <p className="text-xs text-slate-400 font-medium">{step.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Step Detail Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0B1F3A] rounded-3xl p-8 text-white text-left shadow-xl relative overflow-hidden min-h-[250px] flex flex-col justify-between border border-white/5">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
            
            <div>
              <span className="text-[10px] bg-[#D62828] text-white font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Etapa {activeStep + 1} de {steps.length}
              </span>

              <h3 className="text-xl sm:text-2xl font-black mt-6 mb-1 text-white">
                {steps[activeStep].title}
              </h3>
              <p className="text-xs text-red-300 font-bold mb-4">
                {steps[activeStep].subtitle}
              </p>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-semibold">
                {steps[activeStep].description}
              </p>
            </div>

            <div className="border-t border-white/10 pt-4 mt-6 text-xs text-slate-400 flex items-center justify-between">
              <span>Método de Análise SOS Alfabetização</span>
              <span className="text-[#D62828] font-bold">★</span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 bg-white/60 border border-slate-100 rounded-xl p-4 text-slate-500 text-xs text-left shadow-sm">
            ⚠️ <strong>Importante:</strong> O objetivo não é rotular a criança. É compreender quais habilidades merecem mais atenção neste momento de seu desenvolvimento escolar.
          </div>
        </div>

        {/* Bottom checklist points */}
        <div className="mt-16 border-t border-slate-200 pt-12 max-w-4xl mx-auto text-left">
          <h3 className="text-lg font-bold text-[#0B1F3A] mb-6">O que os pais compreendem em relação à criança:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Como a criança aprende a ler",
              "Em qual etapa ela parece estar",
              "O que pode estar dificultando o processo",
              "O que fazer em casa",
              "O que evitar",
              "Quais podem ser os próximos passos"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base font-semibold">
                <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { Compass, Check } from 'lucide-react';
import { trackEvent } from '../config/offer';

interface Step {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  details: string;
}

export default function LiteracyMap() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: Step[] = [
    {
      id: 0,
      title: "Percepção e consciência dos sons",
      subtitle: "Como a criança percebe e diferencia os sons da fala.",
      description: "A habilidade de isolar, rimar, misturar e manipular os sons das palavras faladas, fundamental antes do registro escrito.",
      details: "Habilidades avaliadas: Rimas, sílabas iniciais, aliterações e discriminação auditiva."
    },
    {
      id: 1,
      title: "Relação entre sons e letras",
      subtitle: "Como ela conecta o que escuta com o que vê escrito.",
      description: "A associação entre fonemas (sons) e grafemas (letras). A criança compreende o princípio alfabético e as regras de escrita.",
      details: "Habilidades avaliadas: Correspondência letra-som, reconhecimento de grafemas e decodificação básica."
    },
    {
      id: 2,
      title: "Leitura de sílabas e palavras",
      subtitle: "Como acontece a construção gradual da leitura.",
      description: "A junção de sons para formar sílabas e palavras completas. A leitura deixa de ser adivinhação e passa a ser técnica estruturada.",
      details: "Habilidades avaliadas: Sílabas simples, sílabas complexas, palavras isoladas e pseudopalavras."
    },
    {
      id: 3,
      title: "Escrita e representação",
      subtitle: "Como a criança pensa e registra o que deseja escrever.",
      description: "A transição do pensamento falado para a folha de papel. Inclui a análise de trocas de letras e hipóteses de escrita.",
      details: "Habilidades avaliadas: Escrita fonética, ortografia inicial e estruturação de frases curtas."
    },
    {
      id: 4,
      title: "Fluência e segurança",
      subtitle: "Como a leitura começa a se tornar menos lenta e mais natural.",
      description: "A leitura ganha velocidade, entonação adequada e redução da necessidade de soletrar cada som silabicamente.",
      details: "Habilidades avaliadas: Velocidade de decodificação, entonação e automaticidade de leitura."
    },
    {
      id: 5,
      title: "Compreensão e autonomia",
      subtitle: "Como a criança passa a compreender melhor o que lê e escreve.",
      description: "O ápice do processo de alfabetização. Ler passa a ser uma ferramenta para aprender, extrair significado e criar de forma independente.",
      details: "Habilidades avaliadas: Interpretação de pequenos textos, resposta a perguntas e produção textual."
    }
  ];

  const handleStepClick = (idx: number) => {
    trackEvent('Click Map Step', { stepId: idx, stepTitle: steps[idx].title });
    setActiveStep(idx);
  };

  return (
    <section className="py-20 bg-white" id="literacy-map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4 text-[#0B1F3A]" />
            Metodologia Exclusiva
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] leading-tight">
            Mapa da Alfabetização: primeiro entendemos o caminho, depois definimos os próximos passos.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Durante a consultoria, você compreenderá os principais elementos envolvidos no processo de alfabetização e onde concentrar sua atenção.
          </p>
        </div>

        {/* Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Interactive Navigation */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-bold uppercase text-slate-400 text-left pl-3 tracking-wider mb-4">Etapas do Caminho</p>
            {steps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                  activeStep === idx
                    ? 'border-[#D62828] bg-red-50/20 text-[#0B1F3A] ring-2 ring-[#D62828]/10'
                    : 'border-slate-100 bg-[#F7F9FC] text-slate-600 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                    activeStep === idx ? 'bg-[#D62828] text-white' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">{step.title}</h3>
                    <p className="text-xs text-slate-500 line-clamp-1">{step.subtitle}</p>
                  </div>
                </div>
                <span className={`text-xs font-bold ${activeStep === idx ? 'text-[#D62828]' : 'text-slate-400'}`}>
                  {activeStep === idx ? 'Ativo' : 'Visualizar'}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column: Dynamic Detail Card */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-[#102A4C] to-[#0B1F3A] rounded-2xl p-8 text-white text-left shadow-xl relative overflow-hidden min-h-[380px] flex flex-col justify-between">
              {/* Background graphic */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
              
              <div>
                <span className="text-[10px] bg-red-500 text-white font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Etapa {activeStep + 1} de {steps.length}
                </span>

                <h3 className="text-xl sm:text-2xl font-black mt-6 mb-2 text-white">
                  {steps[activeStep].title}
                </h3>
                <p className="text-sm text-red-300 font-semibold mb-6">
                  {steps[activeStep].subtitle}
                </p>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 font-medium">
                  {steps[activeStep].description}
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-slate-400 uppercase mb-2">
                  <span>Foco de Orientação</span>
                </div>
                <p className="text-xs sm:text-sm text-white/90 font-medium">
                  {steps[activeStep].details}
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 bg-[#F7F9FC] border border-slate-100 rounded-xl p-4 text-slate-500 text-xs text-left">
              ⚠️ <strong>Importante:</strong> As etapas não são apresentadas como um diagnóstico rígido ou classificação clínica. O objetivo não é rotular a criança. É compreender quais habilidades precisam de mais atenção neste momento.
            </div>
          </div>

        </div>

        {/* Section Bottom List */}
        <div className="mt-16 border-t border-slate-100 pt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Durante a consultoria, os pais deverão entender:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Como acontece o processo de alfabetização",
                "Em qual etapa o filho parece estar",
                "Quais pontos merecem mais atenção",
                "O que pode estar dificultando a aprendizagem",
                "O que pode ser feito em casa",
                "O que deve ser evitado",
                "Quais podem ser os próximos passos"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-slate-600 text-sm font-medium">
                  <div className="w-5 h-5 rounded-full bg-green-50 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#EEF3F8]/60 p-6 rounded-2xl border border-blue-100/50 flex flex-col justify-center">
            <h4 className="font-bold text-[#0B1F3A] text-sm md:text-base">📍 O Mapa orienta o apoio prático</h4>
            <p className="text-slate-600 text-xs md:text-sm mt-2 leading-relaxed">
              Você não vai apenas assistir a uma apresentação técnica. O Mapa da Alfabetização é o guia que dita como o plano de 30 dias será formatado para a sua realidade.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

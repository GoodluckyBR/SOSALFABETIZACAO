import { useState } from 'react';
import { AlertCircle, HelpCircle, BookOpen, PenTool, MessageSquare, Files, ArrowRight, Notebook } from 'lucide-react';
import { trackEvent } from '../config/offer';

interface PainCard {
  id: number;
  icon: any;
  text: string;
}

export default function PainIdentification() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards: PainCard[] = [
    {
      id: 1,
      icon: AlertCircle,
      text: "“A escola disse que meu filho está com dificuldade, mas eu não entendi exatamente em quê.”"
    },
    {
      id: 2,
      icon: BookOpen,
      text: "“Ele reconhece letras, mas ainda não consegue formar palavras.”"
    },
    {
      id: 3,
      icon: PenTool,
      text: "“Ela escreve, mas troca letras e fica insegura.”"
    },
    {
      id: 4,
      icon: MessageSquare,
      text: "“Quando tento ajudar, o momento de estudo vira discussão.”"
    },
    {
      id: 5,
      icon: Files,
      text: "“Já baixei várias atividades, mas não sei se são adequadas.”"
    },
    {
      id: 6,
      icon: HelpCircle,
      text: "“Não sei se devo esperar ou procurar outro tipo de ajuda.”"
    }
  ];

  const handleCardClick = (id: number) => {
    trackEvent('Click Pain Card', { cardId: id });
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section className="py-20 bg-white" id="pain-identification">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Simulated Visual Notepad Panel */}
          <div className="lg:col-span-5 text-left space-y-6 lg:sticky lg:top-24">
            <span className="text-xs font-bold text-[#0B1F3A] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Identificação
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] leading-tight">
              Você percebeu uma dificuldade, recebeu um alerta da escola e agora não sabe exatamente o que fazer?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              Muitos pais percebem que algo não está avançando como esperado, mas não sabem se devem esperar, procurar ajuda ou mudar a forma de acompanhar a criança em casa.
            </p>

            {/* Notepad Visual Composition */}
            <div className="space-y-4 pt-4">
              
              {/* Card 1: School Notepad */}
              <div className="bg-[#FFFDF5] border border-yellow-200 p-5 rounded-2xl shadow-sm relative overflow-hidden ring-1 ring-yellow-100">
                <div className="absolute top-0 left-0 w-2 h-full bg-yellow-400" />
                <div className="flex gap-3 items-start pl-2">
                  <Notebook className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-400 tracking-wider uppercase mb-1">Alerta da Escola</h4>
                    <p className="text-xs sm:text-sm font-serif italic text-slate-700 leading-relaxed">
                      "Percebemos que o aluno apresenta dificuldades na fixação dos sons das letras. Recomendamos apoio em casa..."
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Dificuldade Percebida */}
              <div className="bg-red-50/40 border border-red-100 p-5 rounded-2xl shadow-sm relative overflow-hidden pl-7">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#D62828]" />
                <h4 className="text-xs font-extrabold text-slate-400 tracking-wider uppercase mb-1">Dificuldade Percebida</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                  A criança tenta escrever, mas trava, chora ou rejeita fazer os deveres escolares.
                </p>
              </div>

              {/* Card 3: Doubt bubble */}
              <div className="bg-blue-50/40 border border-blue-100 p-5 rounded-2xl shadow-sm relative overflow-hidden pl-7">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#16365C]" />
                <h4 className="text-xs font-extrabold text-slate-400 tracking-wider uppercase mb-1">Dúvida sobre como agir</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                  Qual método usar? Devo cobrar mais ou dar mais tempo?
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Pain Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card) => {
              const Icon = card.icon;
              const isActive = activeCard === card.id;

              return (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(card.id)}
                  className={`group p-5 rounded-2xl bg-[#F5F7FA] border transition-all duration-300 cursor-pointer text-left relative flex flex-col justify-between overflow-hidden min-h-[160px] ${
                    isActive
                      ? 'border-[#D62828] bg-white shadow-md ring-1 ring-[#D62828]/25'
                      : 'border-slate-100/50 hover:bg-white hover:border-[#16365C] hover:shadow-lg'
                  }`}
                >
                  <div>
                    <div className={`p-2.5 rounded-xl w-fit mb-4 transition-colors ${
                      isActive 
                        ? 'bg-red-50 text-[#D62828]' 
                        : 'bg-white text-[#0B1F3A] group-hover:bg-[#0B1F3A] group-hover:text-white'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed italic">
                      {card.text}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-center justify-between text-[10px] text-slate-400 group-hover:text-[#0B1F3A] transition-colors">
                    <span>{isActive ? 'Clique para fechar' : 'Entenda esse cenário'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'rotate-90 text-[#D62828]' : 'group-hover:translate-x-1'}`} />
                  </div>

                  {/* Micro educational feedback */}
                  {isActive && (
                    <div className="absolute inset-0 bg-[#0B1F3A] p-5 text-white flex flex-col justify-between z-10 animate-fade-in">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-red-400 mb-2">Primeiro Passo</h4>
                        <p className="text-xs text-slate-200 leading-relaxed font-medium">
                          O primeiro passo não é fazer mais atividades. É entender o momento da criança. A consultoria pedagógica individual irá focar exatamente nessa análise.
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveCard(null);
                        }}
                        className="self-end text-[9px] font-bold text-slate-300 hover:text-white underline cursor-pointer"
                      >
                        Fechar
                      </button>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

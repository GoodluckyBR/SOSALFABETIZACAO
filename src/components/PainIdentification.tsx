import { useState } from 'react';
import { AlertCircle, HelpCircle, BookOpen, PenTool, MessageSquare, Files, ArrowRight } from 'lucide-react';
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
    <section className="py-20 bg-[#F5F7FA]" id="pain-identification">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0B1F3A] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Identificação
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] leading-tight">
            Você percebeu uma dificuldade, recebeu um alerta da escola e agora não sabe exatamente o que fazer?
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            Muitos pais percebem que algo não está avançando como esperado, mas não sabem se devem esperar, procurar ajuda ou mudar a forma de acompanhar a criança em casa.
          </p>
        </div>

        {/* Pain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((card) => {
            const Icon = card.icon;
            const isActive = activeCard === card.id;

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`group p-6 rounded-2xl bg-white border transition-all duration-300 cursor-pointer text-left relative flex flex-col justify-between overflow-hidden ${
                  isActive
                    ? 'border-[#D62828] shadow-md ring-1 ring-[#D62828]/25'
                    : 'border-slate-100 shadow-sm hover:border-[#16365C] hover:shadow-lg'
                }`}
              >
                <div>
                  <div className={`p-2.5 rounded-xl w-fit mb-4 transition-colors ${
                    isActive 
                      ? 'bg-red-50 text-[#D62828]' 
                      : 'bg-[#EAF1F8] text-[#0B1F3A] group-hover:bg-[#0B1F3A] group-hover:text-white'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <p className="text-base font-semibold text-slate-700 leading-relaxed italic">
                    {card.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 group-hover:text-[#0B1F3A] transition-colors">
                  <span>{isActive ? 'Clique para fechar' : 'Entenda esse cenário'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'rotate-90 text-[#D62828]' : 'group-hover:translate-x-1'}`} />
                </div>

                {/* Micro educational feedback */}
                {isActive && (
                  <div className="absolute inset-0 bg-[#0B1F3A] p-6 text-white flex flex-col justify-between z-10 animate-fade-in">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-extrabold text-red-400 mb-2">Primeiro Passo</h4>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                        O primeiro passo não é fazer mais atividades. É entender o momento da criança. A consultoria pedagógica individual irá focar exatamente nessa análise.
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCard(null);
                      }}
                      className="self-end text-[10px] font-bold text-slate-300 hover:text-white underline cursor-pointer"
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
    </section>
  );
}

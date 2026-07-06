import { useState } from 'react';
import { AlertTriangle, BookOpen, PenTool, MessageSquare, Files, HelpCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '../config/offer';

interface CardData {
  id: number;
  icon: any;
  text: string;
}

export default function PainIdentification() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const cards: CardData[] = [
    {
      id: 1,
      icon: AlertTriangle,
      text: "“A escola disse que ele está com dificuldade, mas eu não entendi exatamente em quê.”"
    },
    {
      id: 2,
      icon: BookOpen,
      text: "“Ele reconhece algumas letras, mas ainda não consegue ler palavras.”"
    },
    {
      id: 3,
      icon: PenTool,
      text: "“Ela escreve, mas troca letras e fica insegura.”"
    },
    {
      id: 4,
      icon: MessageSquare,
      text: "“Quando tento ajudar, a atividade vira discussão.”"
    },
    {
      id: 5,
      icon: Files,
      text: "“Já baixei várias atividades, mas não sei se estou usando as corretas.”"
    },
    {
      id: 6,
      icon: HelpCircle,
      text: "“Não sei se devo esperar, procurar reforço ou buscar outro tipo de ajuda.”"
    }
  ];

  const handleCardClick = (id: number) => {
    trackEvent('Click Pain Card', { cardId: id });
    setSelectedCard(selectedCard === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] leading-tight">
            Você recebeu um alerta da escola, percebeu uma dificuldade e agora não sabe exatamente o que fazer?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Essa é a realidade de muitos pais. O problema não é falta de interesse. É falta de uma orientação clara sobre o que observar e como agir.
          </p>
        </div>

        {/* Grid of pain cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            const isSelected = selectedCard === card.id;
            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between text-left group overflow-hidden ${
                  isSelected
                    ? 'border-[#D62828] bg-red-50/30 ring-2 ring-[#D62828]/20 shadow-md'
                    : 'border-slate-100 bg-[#F7F9FC] hover:bg-white hover:border-[#16365C] hover:shadow-lg'
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className={`p-3 rounded-xl w-fit ${
                    isSelected ? 'bg-red-100 text-[#D62828]' : 'bg-[#EEF3F8] text-[#0B1F3A] group-hover:bg-[#0B1F3A] group-hover:text-white transition-colors'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-base font-semibold text-slate-700 leading-relaxed italic">
                    {card.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-600 transition-colors">
                  <span>{isSelected ? 'Toque para fechar' : 'Clique para analisar'}</span>
                  <span className="font-bold text-[#D62828] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>

                {/* Interactive Feedback Message drawer */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 bg-[#0B1F3A] p-6 text-white flex flex-col justify-center"
                    >
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-extrabold tracking-wide uppercase text-red-400">O que você precisa saber</h4>
                          <p className="mt-2 text-sm text-slate-200 leading-relaxed font-medium">
                            O primeiro passo não é fazer mais atividades. É entender o momento da criança. A consultoria pedagógica individual irá focar exatamente nessa análise.
                          </p>
                        </div>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCard(null);
                        }}
                        className="mt-4 self-end text-xs font-bold text-slate-300 hover:text-white underline"
                      >
                        Fechar aviso
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-sm text-slate-400">
          💡 Toque em qualquer card acima para ver uma reflexão sobre a situação.
        </div>

      </div>
    </section>
  );
}

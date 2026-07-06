import { useState } from 'react';
import { ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '../config/offer';

export default function InteractiveSituationSelector() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const options = [
    { id: 1, text: "Meu filho reconhece letras, mas ainda não consegue ler." },
    { id: 2, text: "Ele lê algumas palavras, mas escreve com muita dificuldade." },
    { id: 3, text: "Ele fica nervoso ou evita atividades de leitura." },
    { id: 4, text: "A escola sinalizou uma dificuldade e eu não sei como agir." },
    { id: 5, text: "Eu ainda não sei se realmente existe uma dificuldade." }
  ];

  const handleSelect = (id: number) => {
    trackEvent('Interactive Diagnostic Choice', { optionId: id });
    setSelectedOption(id);
  };

  const handleScrollToOffer = () => {
    trackEvent('Interactive Diagnostic CTA Clicked');
    const target = document.getElementById('offer-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-[#F7F9FC] border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider mb-6">
          <HelpCircle className="w-4 h-4 text-[#0B1F3A]" />
          Análise Rápida de Cenário
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mb-4">
          Qual dessas situações mais se aproxima do que você está vivendo?
        </h2>
        <p className="text-slate-600 mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          Selecione o cenário que mais reflete a sua realidade em casa para ver nossa abordagem pedagógica recomendada.
        </p>

        {/* Options Stack */}
        <div className="space-y-3 max-w-2xl mx-auto text-left">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`w-full p-4 rounded-xl border text-left font-medium text-sm sm:text-base transition-all duration-200 flex items-center justify-between cursor-pointer ${
                selectedOption === option.id
                  ? 'border-[#D62828] bg-white ring-2 ring-[#D62828]/20 text-[#0B1F3A]'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
              }`}
            >
              <span>{option.text}</span>
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ml-3 ${
                selectedOption === option.id
                  ? 'border-[#D62828] bg-[#D62828] text-white'
                  : 'border-slate-300'
              }`}>
                {selectedOption === option.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
            </button>
          ))}
        </div>

        {/* Feedback Section */}
        {selectedOption !== null && (
          <div className="mt-8 p-6 bg-white border border-slate-100 rounded-2xl max-w-2xl mx-auto shadow-md animate-fade-in text-left">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-[#0B1F3A] text-base">Recomendação Pedagógica</p>
                <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Cada criança pode estar em um momento diferente. Por isso, a orientação precisa começar pela compreensão da situação, e não por uma atividade genérica. No SOS Alfabetização, nós analisamos esse contexto em detalhe para gerar o plano correto de 30 dias.
                </p>
                
                <button
                  onClick={handleScrollToOffer}
                  className="mt-5 inline-flex items-center justify-center px-6 py-3 rounded-xl text-white bg-[#D62828] hover:bg-[#E53935] font-bold text-sm transition-all shadow-md cursor-pointer"
                >
                  Quero uma orientação individual
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

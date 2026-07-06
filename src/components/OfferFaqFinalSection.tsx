import { useState } from 'react';
import { Check, ShieldCheck, CreditCard, ChevronDown, ChevronUp, Sparkles, ArrowRight } from 'lucide-react';
import { offerConfig, trackEvent } from '../config/offer';

export default function OfferFaqFinalSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const includes = [
    "Questionário inicial",
    "Preparação da análise",
    "Consultoria individual de aproximadamente uma hora",
    "Aplicação do Mapa da Alfabetização",
    "Relatório personalizado",
    "Plano de ação para 30 dias",
    "Orientações sobre o que fazer em casa",
    "Orientações sobre o que evitar",
    "Sugestões para conversar com a escola"
  ];

  const faqs = [
    {
      q: "Meu filho precisa participar da consultoria?",
      a: "A consultoria é direcionada principalmente aos pais ou responsáveis. A participação direta da criança não é obrigatória, pois o foco está em orientar os pais sobre como apoiar em casa."
    },
    {
      q: "A consultoria é um diagnóstico?",
      a: "Não. O SOS Alfabetização oferece orientação pedagógica especializada. Ele não substitui nem realiza avaliações ou diagnósticos clínicos, médicos, psicológicos ou fonoaudiológicos."
    },
    {
      q: "Vou receber atividades?",
      a: "O foco principal não é a entrega de um pacote de exercícios mecânicos. Você receberá orientações estratégicas e um plano de apoio de 30 dias. Atividades complementares podem ser sugeridas de acordo com as necessidades específicas analisadas."
    },
    {
      q: "Quanto tempo dura a consultoria?",
      a: "A consultoria individual dura aproximadamente uma hora."
    },
    {
      q: "Quando receberei o relatório?",
      a: "Você receberá o relatório personalizado e o plano de ação prático em PDF por e-mail ou WhatsApp em até 5 dias úteis após a realização da consultoria."
    },
    {
      q: "O plano garante que meu filho aprenderá a ler?",
      a: "Não. Cada criança tem seu próprio ritmo de desenvolvimento e maturidade. O plano de ação organiza e otimiza o suporte domiciliar para facilitar o avanço, sem promessas milagrosas."
    },
    {
      q: "A consultoria substitui a escola?",
      a: "Não. A consultoria auxilia a família a acompanhar o processo em casa de maneira consciente, trabalhando de forma complementar e em harmonia com a escola."
    },
    {
      q: "Como funciona o agendamento?",
      a: "Após a confirmação de sua compra, você receberá por e-mail o link para acessar nossa agenda online e escolher o horário mais adequado."
    },
    {
      q: "É possível remarcar?",
      a: "Sim, é possível remarcar com até 24 horas de antecedência do horário agendado."
    }
  ];

  const handleCheckoutClick = () => {
    trackEvent('Offer Click Checkout', { price: offerConfig.price });
    window.location.href = offerConfig.checkoutUrl;
  };

  const handleScrollToOffer = () => {
    trackEvent('Click Final CTA Button');
    const target = document.getElementById('offer-card');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="offer-faq-final-section">
      
      {/* ----------------- BLOCO 1: OFERTA ----------------- */}
      <section className="py-20 bg-white" id="offer-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#D62828] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Valor Exclusivo
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] leading-tight">
              Entenda o momento da alfabetização do seu filho e receba um plano claro para os próximos 30 dias.
            </h2>
          </div>

          <div id="offer-card" className="max-w-3xl mx-auto bg-[#0B1F3A] rounded-3xl text-white shadow-2xl border border-white/10 overflow-hidden relative">
            <div className="bg-gradient-to-r from-red-500 to-[#D62828] text-center py-2 text-xs font-bold tracking-widest uppercase">
              Consultoria Individual SOS Alfabetização
            </div>

            <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: What's included */}
              <div className="md:col-span-7 text-left space-y-6">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">O que está incluído:</h3>
                <ul className="space-y-3">
                  {includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-200 font-semibold">
                      <div className="w-5 h-5 rounded-full bg-green-950/80 border border-green-800 text-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Pricing & Checkout */}
              <div className="md:col-span-5 bg-[#071426] p-6 rounded-2xl border border-white/5 flex flex-col justify-center items-center text-center">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Investimento de validação</span>
                
                <span className="text-4xl font-black text-red-500 mt-3">{offerConfig.price}</span>
                
                <p className="mt-2 text-[10px] text-slate-400 leading-relaxed font-semibold">
                  Condição inicial para as primeiras famílias atendidas durante a fase de validação do projeto.
                </p>

                <button
                  onClick={handleCheckoutClick}
                  className="w-full mt-6 py-3.5 px-4 rounded-xl bg-[#D62828] hover:bg-[#E53935] text-white font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CreditCard className="w-4.5 h-4.5" />
                  Quero garantir minha consultoria
                </button>

                <p className="mt-4 text-[9px] text-slate-500 leading-normal">
                  Após a confirmação, você receberá as instruções para agendamento e preenchimento do questionário inicial.
                </p>
              </div>

            </div>

            <div className="bg-[#071426]/80 border-t border-white/5 py-3 px-8 flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Compra 100% segura e garantida</span>
            </div>
          </div>

        </div>
      </section>

      {/* ----------------- BLOCO 2: FAQ ----------------- */}
      <section className="py-20 bg-[#F5F7FA]" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#0B1F3A] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Dúvidas Frequentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mt-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm transition-all">
                  <button
                    onClick={() => {
                      trackEvent('Toggle FAQ', { question: faq.q, open: !isOpen });
                      setOpenFaqIndex(isOpen ? null : idx);
                    }}
                    className="w-full py-5 px-6 flex items-center justify-between text-left font-bold text-sm sm:text-base text-[#0B1F3A] hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ----------------- BLOCO 3: CTA FINAL ----------------- */}
      <section className="py-20 bg-[#0B1F3A] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] to-[#071426] -z-10" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 text-red-400 text-xs font-semibold uppercase tracking-wider border border-red-800/40 w-fit mx-auto">
            <Sparkles className="w-4 h-4 text-red-400" />
            Decisão Segura
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white">
            Você não precisa ter todas as respostas. <br className="hidden md:inline" />
            Precisa saber quais são os próximos passos.
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Com a orientação da professora {offerConfig.professionalName}, você poderá compreender melhor o momento da alfabetização do seu filho e apoiá-lo com mais clareza e segurança.
          </p>

          <div className="pt-4 flex flex-col items-center justify-center space-y-4">
            <button
              onClick={handleScrollToOffer}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white bg-[#D62828] hover:bg-[#E53935] font-bold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              Quero entender como ajudar meu filho
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            
            <p className="text-sm font-serif italic text-slate-400 pt-2">
              “Entender é o primeiro passo para ajudar.”
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

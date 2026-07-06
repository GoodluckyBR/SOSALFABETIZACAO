import { Check, ShieldCheck, CreditCard, Calendar } from 'lucide-react';
import { offerConfig, trackEvent } from '../config/offer';

export default function OfferSection() {
  const includes = [
    "Questionário inicial detalhado",
    "Preparação e pré-análise das informações fornecidas",
    "Consultoria individual de aproximadamente 1 hora",
    "Aplicação do método Mapa da Alfabetização",
    "Relatório personalizado em formato PDF",
    "Plano de ação prático e sequenciado para 30 dias",
    "Orientações objetivas sobre o que fazer em casa",
    "Orientações estratégicas sobre o que evitar fazer",
    "Sugestões práticas para dialogar com a equipe escolar"
  ];

  const handleCheckoutClick = () => {
    trackEvent('Click Checkout CTA', { price: offerConfig.price });
    window.location.href = offerConfig.checkoutUrl;
  };

  return (
    <section className="py-20 bg-white" id="offer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#D62828] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Adesão Individual
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] leading-tight">
            Entenda o momento da alfabetização do seu filho e receba um plano claro para os próximos 30 dias.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Invista na segurança educacional de quem você mais ama com orientação pedagógica individualizada.
          </p>
        </div>

        {/* Pricing Card Wrapper */}
        <div className="max-w-3xl mx-auto bg-[#0B1F3A] rounded-3xl text-white shadow-2xl border border-white/10 overflow-hidden relative">
          
          {/* Top highlight bar */}
          <div className="bg-gradient-to-r from-red-500 to-[#D62828] text-center py-2 text-xs font-bold tracking-widest uppercase">
            Atendimento 100% Individual e Personalizado
          </div>

          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* List of features (Col-span 7) */}
            <div className="md:col-span-7 text-left space-y-6">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">O que está incluído:</h3>
              <ul className="space-y-3">
                {includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-green-950/80 border border-green-800 text-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Column (Col-span 5) */}
            <div className="md:col-span-5 bg-[#071426] p-6 rounded-2xl border border-white/5 flex flex-col justify-center items-center text-center">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Fase de Validação</span>
              
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-sm text-slate-400 line-through font-semibold">{offerConfig.originalPrice}</span>
                <span className="text-3xl sm:text-4xl font-black text-red-500">{offerConfig.price}</span>
              </div>
              
              <p className="mt-2 text-[10px] sm:text-xs text-slate-400 leading-relaxed">
                Condição inicial para as primeiras famílias atendidas durante a fase de validação do projeto.
              </p>

              <button
                onClick={handleCheckoutClick}
                className="w-full mt-6 py-3.5 px-4 rounded-xl bg-[#D62828] hover:bg-[#E53935] text-white font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <CreditCard className="w-4 h-4" />
                Quero garantir minha consultoria
              </button>

              <p className="mt-4 text-[10px] text-slate-500 leading-normal">
                Após a confirmação do pagamento, você receberá no e-mail cadastrado as instruções para o agendamento e questionário.
              </p>
            </div>

          </div>

          {/* Footer security banners */}
          <div className="bg-[#071426]/75 border-t border-white/5 py-4 px-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Pagamento 100% Seguro</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>Agendamento Prático</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

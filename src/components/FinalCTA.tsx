import { ArrowRight, Sparkles } from 'lucide-react';
import { trackEvent } from '../config/offer';

export default function FinalCTA() {
  const handleScrollToOffer = () => {
    trackEvent('Click Final CTA Button');
    const target = document.getElementById('offer-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#0B1F3A] text-white text-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] to-[#071426]" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 text-red-400 text-xs font-semibold uppercase tracking-wider border border-red-800/40 w-fit mx-auto">
          <Sparkles className="w-4 h-4 text-red-400" />
          Apoio Pedagógico Individual
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Você não precisa ter todas as respostas. <br className="hidden md:inline" />
          Precisa saber quais são os próximos passos.
        </h2>

        <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Entenda melhor o momento da alfabetização do seu filho e receba uma orientação individualizada para apoiá-lo em casa com muito mais clareza, paciência e segurança.
        </p>

        <div className="pt-4 flex flex-col items-center justify-center space-y-4">
          <button
            onClick={handleScrollToOffer}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white bg-[#D62828] hover:bg-[#E53935] font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            Quero entender como ajudar meu filho
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          
          <p className="text-sm font-serif italic text-slate-400">
            “Entender é o primeiro passo para ajudar.”
          </p>

          <p className="text-[11px] text-red-400 font-semibold tracking-wide">
            ⚠ ATENÇÃO: Atendimento individual sujeito à disponibilidade de agenda semanal.
          </p>
        </div>

      </div>
    </section>
  );
}

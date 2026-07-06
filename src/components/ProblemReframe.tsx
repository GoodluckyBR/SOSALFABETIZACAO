import { XCircle, CheckCircle } from 'lucide-react';

export default function ProblemReframe() {
  return (
    <section className="py-20 bg-[#0B1F3A] text-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-red-400 uppercase tracking-widest bg-red-950/40 px-3 py-1 rounded-full border border-red-800/30">
            Nova Abordagem
          </span>
          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Nem sempre a criança precisa de mais atividades. <br className="hidden md:inline" />
            Muitas vezes, os pais precisam de mais clareza.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            Quando não existe uma compreensão clara sobre o processo de alfabetização, é comum testar exercícios, vídeos, aplicativos e métodos diferentes. Mas uma atividade que ajuda uma criança pode não fazer sentido para outra.
          </p>
          <p className="mt-4 text-base text-slate-300">
            O <strong className="text-red-400">SOS Alfabetização</strong> foi criado para organizar as informações, explicar o processo de maneira simples e orientar a família sobre os próximos passos.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Without Guidance Card */}
          <div className="bg-[#102A4C]/50 border border-white/5 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-900/10 rounded-full blur-xl pointer-events-none" />
            <div>
              <h3 className="text-lg font-bold text-red-400 flex items-center gap-2 mb-6">
                <XCircle className="w-5 h-5 flex-shrink-0" />
                Sem Orientação
              </h3>
              <ul className="space-y-4 text-left">
                {[
                  "Atividades aleatórias baixadas na internet",
                  "Tentativas de ensino sem sequência lógica",
                  "Ansiedade crescente no momento dos estudos",
                  "Cobranças excessivas sobre a criança",
                  "Dúvidas constantes sobre o que é normal para a idade",
                  "Dificuldade e insegurança para conversar com a escola"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                    <span className="text-[#D62828] font-bold mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 text-xs text-[#D62828] font-medium tracking-wide uppercase">
              Gera tensão e desgaste na rotina
            </div>
          </div>

          {/* With Clarity Card */}
          <div className="bg-[#16365C]/60 border border-white/10 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between ring-1 ring-red-500/20 shadow-xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-900/10 rounded-full blur-xl pointer-events-none" />
            <div>
              <h3 className="text-lg font-bold text-green-400 flex items-center gap-2 mb-6">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                Com Clareza
              </h3>
              <ul className="space-y-4 text-left">
                {[
                  "Compreensão do momento atual e real da criança",
                  "Prioridades de apoio bem definidas",
                  "Orientações personalizadas e fáceis de aplicar",
                  "Plano prático estruturado para os próximos 30 dias",
                  "Mais segurança e leveza para ajudar em casa",
                  "Conversas mais objetivas e construtivas com a escola"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-200 text-sm sm:text-base font-medium">
                    <span className="text-green-400 font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 text-xs text-green-400 font-bold tracking-wide uppercase">
              Transforma a alfabetização em um processo seguro
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import { XCircle, CheckCircle } from 'lucide-react';

export default function ProblemReframe() {
  return (
    <section className="py-20 bg-[#0B1F3A] text-white relative" id="problem-reframe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-red-400 uppercase tracking-widest bg-red-950/40 px-3 py-1 rounded-full border border-red-800/30">
            Foco de Apoio
          </span>
          <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Nem sempre a criança precisa de mais atividades. <br className="hidden md:inline" />
            Muitas vezes, os pais precisam de mais clareza.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            Quando os pais não compreendem exatamente o momento da alfabetização da criança, é comum experimentar exercícios, aplicativos, vídeos e métodos diferentes sem saber qual caminho realmente faz sentido.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Sem Orientação Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-lg font-bold text-red-400 flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5 flex-shrink-0" />
                Sem Orientação
              </h3>

              {/* Confused Path SVG Graphic */}
              <div className="w-full h-16 flex items-center justify-center my-4 opacity-75">
                <svg className="w-full max-w-[260px] h-full" viewBox="0 0 200 60" fill="none">
                  {/* Loop path */}
                  <path 
                    d="M 10 30 Q 30 10 50 30 T 90 30 Q 110 50 120 30 T 150 10 Q 170 30 190 30" 
                    stroke="#D62828" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeDasharray="4 4"
                  />
                  {/* Random question nodes */}
                  <circle cx="50" cy="30" r="5" fill="#D62828" />
                  <circle cx="120" cy="30" r="5" fill="#D62828" />
                  <circle cx="150" cy="10" r="5" fill="#D62828" />
                </svg>
              </div>

              <ul className="space-y-4 text-left pt-2">
                {[
                  "Atividades aleatórias",
                  "Tentativas sem sequência",
                  "Cobranças excessivas",
                  "Ansiedade",
                  "Dificuldade para conversar com a escola",
                  "Incerteza sobre os próximos passos"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm font-semibold">
                    <span className="text-[#D62828] font-bold mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 text-[10px] text-[#D62828] font-bold tracking-wider uppercase">
              Frustração e perda de tempo precioso
            </div>
          </div>

          {/* Com Clareza Card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between ring-1 ring-red-500/25 shadow-2xl">
            <div>
              <h3 className="text-lg font-bold text-green-400 flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                Com Clareza
              </h3>

              {/* Organized Path SVG Graphic */}
              <div className="w-full h-16 flex items-center justify-center my-4 opacity-90">
                <svg className="w-full max-w-[260px] h-full" viewBox="0 0 200 60" fill="none">
                  {/* Straight target path */}
                  <path 
                    d="M 10 30 L 190 30" 
                    stroke="#22C55E" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                  />
                  {/* Step nodes connected */}
                  <circle cx="10" cy="30" r="6" fill="#0B1F3A" stroke="#22C55E" strokeWidth="2" />
                  <circle cx="70" cy="30" r="6" fill="#0B1F3A" stroke="#22C55E" strokeWidth="2" />
                  <circle cx="130" cy="30" r="6" fill="#0B1F3A" stroke="#22C55E" strokeWidth="2" />
                  <circle cx="190" cy="30" r="8" fill="#22C55E" />
                </svg>
              </div>

              <ul className="space-y-4 text-left pt-2">
                {[
                  "Compreensão do momento atual",
                  "Prioridades definidas",
                  "Orientações personalizadas",
                  "Plano prático para 30 dias",
                  "Mais segurança para acompanhar",
                  "Perguntas mais objetivas para a escola"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-white text-xs sm:text-sm font-bold">
                    <span className="text-green-400 font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 text-[10px] text-green-400 font-extrabold tracking-wider uppercase">
              Segurança e passos intencionais
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

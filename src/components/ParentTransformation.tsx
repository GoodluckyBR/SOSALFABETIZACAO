import { ArrowRightLeft } from 'lucide-react';

export default function ParentTransformation() {
  const beforeList = [
    "Incerteza se a dificuldade é normal para a idade.",
    "Dúvidas constantes sobre qual método pedagógico usar.",
    "Excesso de informações e atividades soltas da internet.",
    "Tentativas aleatórias que frustram pais e filhos.",
    "Culpa por não saber a melhor forma de ajudar.",
    "Dificuldade e medo de conversar com os professores."
  ];

  const afterList = [
    "Mais compreensão real sobre a alfabetização.",
    "Direção clara sobre onde concentrar esforços.",
    "Prioridades semanais para apoiar sem cansar.",
    "Um plano de apoio simples e prático de 30 dias.",
    "Perguntas objetivas e comunicação clara com a escola.",
    "Mais segurança e paz mental no acompanhamento."
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider mb-4">
            <ArrowRightLeft className="w-4 h-4" />
            A Transformação
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] leading-tight">
            O maior resultado não é ter mais atividades. <br />
            É saber por que, como e quando agir.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Veja como a atitude e a segurança da família mudam antes e depois de passar pela nossa orientação individual.
          </p>
        </div>

        {/* Before and After Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Antes */}
          <div className="bg-[#F7F9FC] border border-slate-100 p-8 rounded-2xl text-left">
            <h3 className="text-lg font-bold text-slate-500 mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              Antes da Consultoria
            </h3>
            <ul className="space-y-4">
              {beforeList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#D62828] font-bold mt-0.5">😟</span>
                  <span className="text-sm sm:text-base text-slate-600 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Depois */}
          <div className="bg-blue-50/40 border border-blue-100 p-8 rounded-2xl text-left ring-2 ring-blue-500/10">
            <h3 className="text-lg font-bold text-[#0B1F3A] mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Depois da Consultoria
            </h3>
            <ul className="space-y-4">
              {afterList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">🧠</span>
                  <span className="text-sm sm:text-base text-slate-800 font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Big brand phrase highlight */}
        <div className="mt-16 text-center">
          <p className="text-xl sm:text-2xl font-serif italic text-[#0B1F3A] font-bold">
            “Pais informados ajudam os filhos com mais confiança.”
          </p>
        </div>

      </div>
    </section>
  );
}

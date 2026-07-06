import { Check, X, Info } from 'lucide-react';

export default function WhatItIsNot() {
  const isList = [
    "Uma orientação pedagógica individual baseada em anos de experiência prática.",
    "Uma análise cuidadosa a partir das informações fornecidas diretamente pelos pais.",
    "Um momento acolhedor focado em tirar dúvidas e diminuir a tensão familiar.",
    "Um plano prático estruturado de apoio em casa para os próximos 30 dias.",
    "Uma forma de os pais participarem do desenvolvimento de forma segura."
  ];

  const isNotList = [
    "Uma avaliação clínica diagnóstica (neurológica, psicológica, fonoaudiológica).",
    "Um diagnóstico médico, psicológico, psiquiátrico ou de transtorno escolar.",
    "Uma promessa de alfabetização imediata ou fórmula mágica acelerada.",
    "Uma aula de reforço escolar ou atendimento clínico para a criança.",
    "Um pacote genérico de apostilas ou folhas de atividades para preencher.",
    "Um substituto para acompanhamento terapêutico ou escolar especializado."
  ];

  return (
    <section className="py-20 bg-[#F7F9FC]" id="what-it-is-not">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Transparência
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
            O que o SOS Alfabetização é — e o que ele não é
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Prezamos pela ética, verdade e clareza no desenvolvimento da sua criança.
          </p>
        </div>

        {/* Split comparison cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          
          {/* O que É */}
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-green-700 flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-green-50 text-green-700 flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              O SOS Alfabetização É:
            </h3>
            <ul className="space-y-4">
              {isList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-600 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* O que NÃO é */}
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-red-600 flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-50 text-[#D62828] flex items-center justify-center">
                <X className="w-5 h-5" />
              </div>
              O SOS Alfabetização NÃO é:
            </h3>
            <ul className="space-y-4">
              {isNotList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 text-[#D62828] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-600 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Disclaimer Alert */}
        <div className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl p-5 max-w-5xl mx-auto flex items-start gap-3 text-left">
          <Info className="w-5 h-5 text-[#0B1F3A] flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <strong>Orientação profissional ética:</strong> Caso sejam percebidos sinais persistentes que mereçam uma investigação clínica ou médica mais detalhada (como hipótese de dislexia, TDAH ou distúrbios de processamento auditivo), a família poderá ser orientada a procurar o especialista adequado (neuropediatra, psicólogo, fonoaudiólogo).
          </p>
        </div>

      </div>
    </section>
  );
}

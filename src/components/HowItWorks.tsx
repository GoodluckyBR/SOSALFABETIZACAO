import { CheckCircle2, FileText, Calendar, Compass } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { title: "1. Compra pelo site", desc: "Garanta sua consultoria pelo valor de validação de forma rápida e segura." },
    { title: "2. Agendamento", desc: "Escolha data e horário ideais diretamente em nossa agenda virtual." },
    { title: "3. Questionário inicial", desc: "Responda sobre rotina escolar, leitura, escrita e dificuldades." },
    { title: "4. Pré-análise do caso", desc: "Análise prévia do questionário para focar no que realmente importa." },
    { title: "5. Consultoria pedagógica", desc: "Uma hora individual com a professora, tirando dúvidas e mapeando caminhos." },
    { title: "6. Relatório em PDF", desc: "Relatório pedagógico consolidando a análise em até 5 dias úteis." },
    { title: "7. Plano prático de 30 dias", desc: "Prioridades semanais para implementar o apoio doméstico." }
  ];

  const deliverables = [
    "Consultoria individual de aproximadamente uma hora",
    "Análise pedagógica personalizada",
    "Aplicação do Mapa da Alfabetização",
    "Relatório personalizado em PDF",
    "Plano de ação para 30 dias",
    "Orientações práticas sobre o que fazer",
    "Orientações estratégicas sobre o que evitar",
    "Sugestões objetivas para conversar com a escola"
  ];

  return (
    <section className="py-20 bg-[#F5F7FA]" id="how-it-works-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0B1F3A] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Fluxo Pedagógico
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
            Um processo simples, individual e organizado
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mb-24 max-w-6xl mx-auto">
          {/* Connector Line SVG (Desktop only) */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-0.5 bg-slate-200 -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-100/50 rounded-2xl p-5 shadow-sm text-left flex flex-col justify-between items-start relative hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-full bg-[#0B1F3A] text-white flex items-center justify-center font-bold text-xs mb-3 flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1F3A] mb-1">{step.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-normal font-semibold">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Section with Mockup Stack */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto shadow-sm text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (Content) */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F3A]">
                O que você recebe da consultoria
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                Você não receberá apenas informações soltas. Nosso foco é fornecer guias visuais e estruturados de suporte.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Visual Mockup Stack (PDF Report, 30-day calendar, Literacy Map) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Entregáveis Digitais</p>
              
              {/* Stack representation */}
              <div className="space-y-3">
                
                {/* Mockup 1: Relatório Pedagógico */}
                <div className="bg-[#EAF1F8] border border-blue-100 p-4 rounded-xl flex items-center gap-3 shadow-xs hover:-translate-y-0.5 transition-transform">
                  <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1F3A]">Mockup 1: Relatório Personalizado</h4>
                    <p className="text-[10px] text-slate-500 font-semibold">PDF com análise, pontos fortes e fracos.</p>
                  </div>
                </div>

                {/* Mockup 2: Plano de Ação 30 dias */}
                <div className="bg-[#FFFDF5] border border-yellow-200 p-4 rounded-xl flex items-center gap-3 shadow-xs hover:-translate-y-0.5 transition-transform">
                  <div className="w-9 h-9 rounded-lg bg-yellow-500 text-white flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1F3A]">Mockup 2: Plano de Ação (30 Dias)</h4>
                    <p className="text-[10px] text-slate-500 font-semibold">Cronograma detalhado semana a semana.</p>
                  </div>
                </div>

                {/* Mockup 3: Mapa da Alfabetização */}
                <div className="bg-green-50/50 border border-green-200 p-4 rounded-xl flex items-center gap-3 shadow-xs hover:-translate-y-0.5 transition-transform">
                  <div className="w-9 h-9 rounded-lg bg-green-600 text-white flex items-center justify-center flex-shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1F3A]">Mockup 3: Mapa de Desenvolvimento</h4>
                    <p className="text-[10px] text-slate-500 font-semibold">Estágio real de leitura/escrita mapeado.</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

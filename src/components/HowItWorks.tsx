import { Calendar, ShoppingBag, FileText, Settings, Award, Layers, Compass } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: ShoppingBag,
      title: "1. Compra pelo site",
      desc: "Você garante sua consultoria pelo valor de validação de forma rápida e segura."
    },
    {
      icon: Calendar,
      title: "2. Agendamento",
      desc: "Após a confirmação, você recebe as orientações para escolher o melhor horário."
    },
    {
      icon: FileText,
      title: "3. Questionário inicial",
      desc: "Você responde algumas perguntas sobre rotina, leitura, escrita e dificuldades."
    },
    {
      icon: Settings,
      title: "4. Preparação da análise",
      desc: "As informações são organizadas antes do encontro para máxima produtividade."
    },
    {
      icon: Layers,
      title: "5. Consultoria individual",
      desc: "Em 1 hora, você recebe explicações claras, orientações e esclarece suas principais dúvidas."
    },
    {
      icon: Award,
      title: "6. Relatório em PDF",
      desc: "Após a consultoria, você recebe um documento bonito, resumindo a análise pedagógica."
    },
    {
      icon: Compass,
      title: "7. Plano de ação 30 dias",
      desc: "Orientações práticas passo a passo para apoiar a criança em casa com segurança."
    }
  ];

  return (
    <section className="py-20 bg-[#F7F9FC]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0B1F3A] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Etapas do Processo
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
            Um processo simples, individual e organizado
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Desenvolvido para caber na rotina corrida das famílias, com entregas objetivas e eficientes.
          </p>
        </div>

        {/* Timeline Desktop vs Mobile */}
        <div className="relative">
          {/* Decorative Center Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-1 bg-slate-200 -z-10" />

          {/* Grid Layout (Vertical on mobile, horizontal on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between items-start text-left relative"
                >
                  {/* Step Bubble Icon */}
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B1F3A] flex items-center justify-center mb-4 border border-blue-100/50 flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1F3A] mb-2">{step.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Desktop Step Index connector indicator */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#0B1F3A] text-white flex items-center justify-center text-[10px] font-black shadow">
                    {idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

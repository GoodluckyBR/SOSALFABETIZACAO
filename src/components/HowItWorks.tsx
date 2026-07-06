import { CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { title: "1. Compra pelo site", desc: "Você garante sua consultoria pelo valor de validação." },
    { title: "2. Agendamento", desc: "Após a confirmação, você escolhe o melhor horário disponível." },
    { title: "3. Questionário inicial", desc: "Responda sobre rotina escolar, leitura, escrita e dificuldades." },
    { title: "4. Preparação da análise", desc: "As informações da criança são organizadas antes do encontro." },
    { title: "5. Consultoria individual", desc: "Encontro de aproximadamente uma hora com explicações diretas." },
    { title: "6. Entrega do relatório", desc: "Você recebe um PDF detalhando o percurso pedagógico do aluno." },
    { title: "7. Plano de ação 30 dias", desc: "Orientações práticas para guiar os estudos em casa com segurança." }
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

        {/* Timeline (Mobile: vertical, Desktop: horizontal grid) */}
        <div className="relative mb-20">
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-0.5 bg-slate-200 -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm text-left flex flex-col justify-between items-start relative hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-full bg-[#0B1F3A] text-white flex items-center justify-center font-bold text-xs mb-3 flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1F3A] mb-1">{step.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-normal">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Section (Two Columns) */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto shadow-sm text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold text-[#0B1F3A]">
                O que a sua família recebe ao final
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Você não receberá apenas informações perdidas ou jargões. Nosso objetivo é entregar ferramentas práticas para transformar o acompanhamento em casa em um momento leve e intencional.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card Mockup visualizer */}
            <div className="lg:col-span-5 bg-[#EAF1F8] p-6 rounded-2xl border border-blue-100/50 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-[9px] bg-[#0B1F3A] text-white font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Guia do Aluno
                </span>
                <h4 className="font-extrabold text-sm sm:text-base text-[#0B1F3A] mt-4 mb-1">
                  Relatório Pedagógico SOS
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Documento em PDF estruturado e editado pessoalmente pela professora Tainá Souza para direcionar suas ações semanais.
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Versão digital inclusa</span>
                <span className="font-extrabold text-[#D62828]">PDF</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

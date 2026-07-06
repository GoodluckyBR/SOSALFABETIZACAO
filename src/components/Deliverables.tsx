import { MessageSquare, Search, Compass, FileText, Calendar, AlertTriangle, MessageCircle, FileCheck } from 'lucide-react';

export default function Deliverables() {
  const deliverables = [
    {
      icon: MessageSquare,
      title: "Consultoria individual de ~1 hora",
      desc: "Encontro focado 100% na realidade da sua família, sem teoria complexa e com linguagem direta."
    },
    {
      icon: Search,
      title: "Análise pedagógica personalizada",
      desc: "Organização analítica das informações e observações escolares relatadas por você."
    },
    {
      icon: Compass,
      title: "Aplicação do Mapa da Alfabetização",
      desc: "Identificação clara do ponto exato onde a criança se encontra no percurso pedagógico."
    },
    {
      icon: FileText,
      title: "Relatório personalizado em PDF",
      desc: "Documento oficial e bem estruturado resumindo os achados e a análise da consultoria."
    },
    {
      icon: Calendar,
      title: "Plano de ação para 30 dias",
      desc: "Um roteiro com prioridades semanais claras e atitudes simples para adotar na rotina de casa."
    },
    {
      icon: AlertTriangle,
      title: "Lista do que evitar",
      desc: "Avisos sobre cobranças, comparações ou treinos que geram estresse e bloqueio na aprendizagem."
    },
    {
      icon: MessageCircle,
      title: "Guia para falar com a escola",
      desc: "Sugestões de perguntas estratégicas para fazer aos professores, facilitando a parceria."
    }
  ];

  return (
    <section className="py-20 bg-white" id="deliverables">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0B1F3A] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            O que você recebe
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
            Ao final, você não terá apenas informações. <br />
            Terá um caminho claro.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Todo o material é planejado para ser consultado facilmente sempre que você sentir dúvidas sobre como agir.
          </p>
        </div>

        {/* Deliverables Grid & PDF Mockup Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Cards (Left Column) */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliverables.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 bg-[#F7F9FC] border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all duration-200 rounded-2xl"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0B1F3A] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-[#0B1F3A] text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Premium Mockup (Right Column) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[3/4] bg-[#0B1F3A] rounded-2xl shadow-xl overflow-hidden p-6 text-white flex flex-col justify-between border border-white/10">
              
              {/* Decorative Cover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#071426] via-[#0B1F3A] to-[#16365C] -z-10" />
              
              {/* Document Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-red-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Relatório de Análise</span>
                </div>
                <span className="text-[9px] bg-red-950/40 text-red-400 font-bold border border-red-800/30 px-2 py-0.5 rounded-full">PDF</span>
              </div>

              {/* Title & Cover Body */}
              <div className="my-auto space-y-4">
                <h4 className="text-xl sm:text-2xl font-extrabold leading-tight text-white">
                  SOS <br />
                  Alfabetização
                </h4>
                
                <p className="text-[11px] text-slate-300 leading-relaxed max-w-[200px]">
                  Plano de Orientação Individualizado para os próximos 30 dias de estudos e apoio domiciliar.
                </p>

                {/* Simulated Document Preview Fields */}
                <div className="space-y-2 bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Criança:</span>
                    <span className="text-slate-200 font-bold">[Iniciais do Aluno]</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Etapa do Mapa:</span>
                    <span className="text-slate-200 font-bold">2. Sons e Letras</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Orientador(a):</span>
                    <span className="text-slate-200 font-bold">Prof. Pedagoga</span>
                  </div>
                </div>
              </div>

              {/* Document Footer */}
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div className="text-left">
                  <p className="text-[9px] font-bold text-slate-200">SOS Alfabetização</p>
                  <p className="text-[8px] text-slate-400">Direito Reservado à Família</p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-red-500 text-white flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

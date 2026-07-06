import { CheckCircle2, AlertTriangle } from 'lucide-react';

export default function WhoItIsFor() {
  const forList = [
    "Você tem uma criança entre 5 e 9 anos em fase escolar.",
    "Seu filho apresenta atraso ou insegurança na leitura e escrita.",
    "A escola enviou bilhetes ou alertas de dificuldade e você se sente perdido(a).",
    "Você não consegue identificar em qual etapa da alfabetização a criança está travando.",
    "Quer ajudar em casa, mas tem medo de usar métodos errados ou confusos.",
    "As tentativas de ensinar geram discussões, choro ou resistência da criança.",
    "Já gastou dinheiro com várias atividades prontas e apostilas sem ver progresso.",
    "Deseja entender e ter segurança antes de tomar outras decisões ou procurar terapias."
  ];

  return (
    <section className="py-20 bg-white" id="who-it-is-for">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0B1F3A] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Alinhamento
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
            O SOS Alfabetização pode fazer sentido para sua família quando…
          </h2>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* List of when it makes sense */}
          <div className="lg:col-span-8 bg-[#F7F9FC] border border-slate-100 p-8 rounded-2xl text-left">
            <h3 className="font-extrabold text-[#0B1F3A] mb-6 text-lg">Indicações para a consultoria</h3>
            <ul className="space-y-4">
              {forList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for panel */}
          <div className="lg:col-span-4 bg-red-50/20 border border-red-100 p-8 rounded-2xl text-left flex flex-col justify-between">
            <div>
              <h3 className="font-extrabold text-[#D62828] mb-4 text-lg flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Não Indicado Para:
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Quem procura apenas atividades prontas genéricas para baixar, soluções milagrosas de curto prazo sem esforço familiar, ou quer um laudo ou diagnóstico clínico formal.
              </p>
            </div>
            <div className="mt-8 text-xs font-semibold text-slate-500">
              💡 Nosso foco é orientar pais a agirem de forma consciente e com segurança.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

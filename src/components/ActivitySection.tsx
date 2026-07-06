import { Search, Compass, AlertCircle } from 'lucide-react';
import { offerConfig } from '../config/offer';

export default function ActivitySection() {
  const cards = [
    {
      title: "O que observar",
      desc: "Quais habilidades a criança já apresenta e onde demonstra mais dificuldade.",
      icon: Search,
      color: "bg-blue-50 text-blue-700 border-blue-100"
    },
    {
      title: "O que praticar",
      desc: "Quais estímulos podem ser incluídos na rotina de forma simples e intencional.",
      icon: Compass,
      color: "bg-green-50 text-green-700 border-green-100"
    },
    {
      title: "O que evitar",
      desc: "Quais cobranças, comparações ou estratégias podem aumentar a insegurança da criança.",
      icon: AlertCircle,
      color: "bg-red-50 text-red-700 border-red-100"
    }
  ];

  return (
    <section className="py-20 bg-white" id="activity-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Image with overlapping float badges) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center relative">
            <div className="relative w-full max-w-[380px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-50">
              <img 
                src={offerConfig.images.activities} 
                alt="Professora Tainá Souza organizando atividades de alfabetização."
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Floating Element only visible on desktop */}
            <div className="hidden lg:block absolute -right-6 top-1/4 bg-white/95 backdrop-blur border border-slate-100 p-4 rounded-2xl shadow-lg max-w-[180px] text-left">
              <span className="text-[9px] uppercase font-bold text-red-500">Intencionalidade</span>
              <p className="text-xs font-bold text-slate-800 mt-1">Estimulação guiada sem jargão clínico</p>
            </div>
            <div className="hidden lg:block absolute -left-6 bottom-10 bg-[#0B1F3A] text-white p-4 rounded-2xl shadow-lg max-w-[180px] text-left border border-white/10">
              <span className="text-[9px] uppercase font-bold text-blue-300">Foco Parental</span>
              <p className="text-xs font-bold mt-1">Pais e filhos em harmonia nos deveres</p>
            </div>
          </div>

          {/* Right Column (Content & Cards Stack) */}
          <div className="lg:col-span-6 order-1 lg:order-2 text-left space-y-6">
            <span className="text-xs font-bold text-[#D62828] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Estímulo Estruturado
            </span>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] leading-tight">
              Atividades só fazem sentido quando existe um objetivo claro.
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-semibold">
              O SOS Alfabetização não entrega um pacote genérico de exercícios. Primeiro, buscamos compreender o momento da criança. Depois, são definidos os tipos de estímulos, atividades e atitudes que podem fazer sentido para a rotina da família.
            </p>

            {/* Three Cards Stack */}
            <div className="space-y-4">
              {cards.map((card, idx) => {
                const CardIcon = card.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-[#F5F7FA] border border-slate-100 p-5 rounded-2xl flex gap-4 items-start hover:bg-white hover:border-[#16365C] hover:shadow-md transition-all duration-200"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border ${card.color}`}>
                      <CardIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[#0B1F3A] text-sm sm:text-base mb-1">{card.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Accent highlighted quote */}
            <div className="pt-4 border-t border-slate-100">
              <p className="text-lg font-bold text-[#D62828] italic">
                “Não é sobre fazer mais. É sobre saber o que fazer e por quê.”
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

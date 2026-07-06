import { offerConfig } from '../config/offer';

export default function ActivitySection() {
  const cards = [
    {
      title: "O que observar",
      desc: "Quais habilidades a criança já apresenta e onde demonstra mais dificuldade."
    },
    {
      title: "O que praticar",
      desc: "Quais estímulos podem ser incluídos na rotina de forma simples e intencional."
    },
    {
      title: "O que evitar",
      desc: "Quais cobranças, comparações ou estratégias podem aumentar a insegurança da criança."
    }
  ];

  return (
    <section className="py-20 bg-white" id="activity-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Image) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-[480px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-50">
              <img 
                src={offerConfig.images.activities} 
                alt="Professora Tainá Souza organizando atividades de alfabetização."
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column (Content) */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left space-y-6">
            <span className="text-xs font-bold text-[#D62828] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Estímulo Estruturado
            </span>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] leading-tight">
              Atividades só fazem sentido quando existe um objetivo claro.
            </h2>
            
            <p className="text-base text-slate-600 leading-relaxed">
              O SOS Alfabetização não entrega um pacote genérico de exercícios. Primeiro, buscamos compreender o momento da criança. Depois, são definidos os tipos de estímulos, atividades e atitudes que podem fazer sentido para a rotina da família.
            </p>

            {/* Three Cards Stack */}
            <div className="space-y-4">
              {cards.map((card, idx) => (
                <div 
                  key={idx}
                  className="bg-[#F5F7FA] border border-slate-100 p-5 rounded-2xl flex gap-4 items-start hover:bg-white hover:border-[#16365C] hover:shadow-md transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#EAF1F8] text-[#0B1F3A] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#0B1F3A] text-sm sm:text-base mb-1">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">{card.desc}</p>
                  </div>
                </div>
              ))}
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

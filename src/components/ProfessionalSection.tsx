import { Award, Compass, Heart, GraduationCap } from 'lucide-react';
import { offerConfig } from '../config/offer';

export default function ProfessionalSection() {
  const highlights = [
    { title: "Orientação individual", desc: "Olhar específico para a rotina de sua casa.", icon: Compass },
    { title: "Linguagem simples", desc: "Sem jargões pedagógicos confusos.", icon: Award },
    { title: "Plano personalizado", desc: "Passo a passo exclusivo para 30 dias.", icon: GraduationCap },
    { title: "Apoio para os pais", desc: "Foco na parceria família-escola.", icon: Heart }
  ];

  return (
    <section className="py-20 bg-white" id="about-professional">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0B1F3A] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Sobre a Professora
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
            Quem irá orientar sua família
          </h2>
        </div>

        {/* Professional Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto text-left">
          
          {/* Left Column (Copy) */}
          <div className="lg:col-span-7 order-1 lg:order-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight">
                {offerConfig.professionalName}
              </h1>
              <p className="text-sm sm:text-base font-bold text-[#D62828] uppercase tracking-wider">
                {offerConfig.professionalTitle}
              </p>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
              <p>
                Meu trabalho é ajudar pais e responsáveis a compreenderem melhor o processo de alfabetização dos filhos, transformando informações pedagógicas em orientações simples, práticas e possíveis de aplicar na rotina familiar.
              </p>
              <p>
                O SOS Alfabetização nasceu da necessidade de oferecer aos pais mais do que atividades prontas. O objetivo é compreender o momento da criança, esclarecer dúvidas e construir um caminho de apoio mais consciente e personalizado.
              </p>
            </div>

            {/* Stylized quotes */}
            <div className="relative p-6 bg-[#F5F7FA] rounded-2xl border-l-4 border-[#D62828] shadow-xs">
              <span className="absolute top-2 left-2 text-4xl text-slate-200 font-serif">“</span>
              <p className="text-lg sm:text-xl font-serif italic text-[#0B1F3A] font-bold pl-3 leading-relaxed">
                Entender é o primeiro passo para ajudar.
              </p>
              <span className="absolute bottom-2 right-4 text-4xl text-slate-200 font-serif">”</span>
            </div>

            {/* Grid of badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="p-1.5 rounded-lg bg-[#EAF1F8] text-[#0B1F3A] flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-[#0B1F3A]">{item.title}</h4>
                      <p className="text-[10px] sm:text-xs text-slate-500 font-semibold">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (Image of Tainá) */}
          <div className="lg:col-span-5 order-2 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#0B1F3A] group">
              <img 
                src={offerConfig.images.about} 
                alt="Retrato profissional da professora Tainá Souza." 
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/25 to-transparent pointer-events-none" />
              
              {/* Badge overlay card */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-slate-100 shadow-sm text-[9px] font-bold text-[#0B1F3A]">
                Orientation Lead
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

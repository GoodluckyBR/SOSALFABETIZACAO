import { CheckCircle } from 'lucide-react';
import { offerConfig } from '../config/offer';

export default function ProfessionalSection() {
  const highlights = [
    "Orientação individual",
    "Linguagem simples",
    "Plano personalizado",
    "Apoio para os pais"
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

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                Meu trabalho é ajudar pais e responsáveis a compreenderem melhor o processo de alfabetização dos filhos, transformando informações pedagógicas em orientações simples, práticas e possíveis de aplicar na rotina familiar.
              </p>
              <p>
                O SOS Alfabetização nasceu da necessidade de oferecer aos pais mais do que atividades prontas. O objetivo é compreender o momento da criança, esclarecer dúvidas e construir um caminho de apoio mais consciente e personalizado.
              </p>
            </div>

            <p className="text-xl sm:text-2xl font-serif italic text-[#0B1F3A] font-bold border-l-4 border-[#D62828] pl-4 py-1">
              “Entender é o primeiro passo para ajudar.”
            </p>

            {/* Elements list around */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Image of Tainá) */}
          <div className="lg:col-span-5 order-2 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#0B1F3A]">
              <img 
                src={offerConfig.images.about} 
                alt="Retrato profissional da professora Tainá Souza." 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/25 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

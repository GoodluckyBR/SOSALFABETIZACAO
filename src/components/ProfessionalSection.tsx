import { GraduationCap, Award, BookOpen, Heart } from 'lucide-react';
import { offerConfig } from '../config/offer';

export default function ProfessionalSection() {
  return (
    <section className="py-20 bg-[#F7F9FC]" id="about-professional">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0B1F3A] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Quem Orienta
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
            Quem irá orientar sua família
          </h2>
        </div>

        {/* Content Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto text-left">
          
          {/* Photo/Avatar Representation (Left Column) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#16365C] to-[#0B1F3A] p-1 shadow-xl">
              <div className="w-full h-full bg-[#102A4C] rounded-[22px] flex flex-col items-center justify-center p-6 text-white text-center relative overflow-hidden">
                {/* Visual texture */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />
                
                <div className="w-20 h-20 rounded-full bg-[#16365C] border-2 border-white/20 flex items-center justify-center text-3xl mb-4 shadow">
                  👩‍🏫
                </div>
                
                <h3 className="font-extrabold text-lg text-white">
                  {offerConfig.professionalName || "[NOME DA PROFISSIONAL]"}
                </h3>
                <p className="text-xs text-red-300 font-semibold mt-1">
                  {offerConfig.professionalTitle || "[FORMAÇÃO E CARGO]"}
                </p>

                <div className="mt-6 space-y-2 w-full">
                  <div className="bg-white/5 border border-white/5 py-1.5 px-3 rounded-lg text-[10px] text-slate-300 flex items-center justify-between">
                    <span>Atendimento individual:</span>
                    <span className="text-white font-bold">Ativo</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 py-1.5 px-3 rounded-lg text-[10px] text-slate-300 flex items-center justify-between">
                    <span>Abordagem:</span>
                    <span className="text-white font-bold">Colaborativa / Pais</span>
                  </div>
                </div>

                <div className="absolute bottom-2 text-[9px] text-slate-400">
                  Foto profissional a ser integrada futuramente
                </div>
              </div>
            </div>
          </div>

          {/* Bio text & credentials (Right Column) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-[#0B1F3A] leading-tight">
              “Entender é o primeiro passo para ajudar.”
            </h3>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Meu trabalho é ajudar famílias a compreenderem melhor o processo de alfabetização, traduzindo conhecimentos pedagógicos para uma linguagem simples, prática e aplicável à rotina de casa.
              </p>
              <p>
                O <strong className="text-[#0B1F3A]">SOS Alfabetização</strong> nasceu da necessidade de oferecer aos pais mais do que atividades prontas. Ele foi criado para proporcionar clareza, orientação profissional e um caminho personalizado.
              </p>
            </div>

            {/* Grid of badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 text-[#0B1F3A] rounded-lg">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm">Formação Acadêmica</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Pedagogia e Especializações em Psicopedagogia / Alfabetização.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#EEF3F8] text-[#16365C] rounded-lg">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm">Abordagem de Atendimento</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Foco na orientação parental, leveza e comunicação sem jargões.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-50 text-green-700 rounded-lg">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm">Experiência Prática</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Anos atuando diretamente no desenvolvimento de crianças em idade escolar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-red-50 text-[#D62828] rounded-lg">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm">Propósito Pedagógico</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Fortalecer o vínculo de apoio dos pais para reduzir o estresse infantil.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

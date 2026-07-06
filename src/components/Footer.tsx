import { offerConfig } from '../config/offer';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071426] text-slate-400 py-12 px-4 border-t border-white/5 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/5 items-start">
          
          {/* Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center font-bold text-xl md:text-2xl cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="text-[#D62828] font-extrabold mr-1">SOS</span>
              <span className="text-white">Alfabetização</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Um olhar pedagógico para ajudar os pais a compreenderem o desenvolvimento de seus filhos e agirem com segurança.
            </p>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Contato e Atendimento</h4>
            <div className="text-xs sm:text-sm space-y-2 text-slate-400">
              <p>Professora: <span className="text-white">{offerConfig.professionalName}</span></p>
              <p>Email: <span className="text-white">{offerConfig.supportEmail}</span></p>
              <p>WhatsApp: <span className="text-white">+{offerConfig.supportWhatsapp}</span></p>
            </div>
          </div>

          {/* Legals */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Termos e Políticas</h4>
            <div className="text-xs flex flex-col space-y-2">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Política de cancelamento ou remarcação</a>
            </div>
          </div>

        </div>

        {/* Ethical Warning Disclaimer & Copyrights */}
        <div className="pt-8 space-y-6 text-center text-xs">
          
          <div className="bg-[#0B1F3A] border border-white/5 p-4 rounded-xl max-w-4xl mx-auto text-slate-300 leading-relaxed text-left">
            <strong>Aviso Legal:</strong> O SOS Alfabetização oferece orientação pedagógica e não realiza diagnóstico médico, psicológico, fonoaudiológico ou neuropsicológico.
          </div>

          <p className="text-[10px] text-slate-500">
            &copy; {currentYear} {offerConfig.professionalName} — SOS Alfabetização. Todos os direitos reservados.
          </p>

        </div>

      </div>
    </footer>
  );
}

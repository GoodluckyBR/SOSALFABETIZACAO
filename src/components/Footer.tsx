import { offerConfig } from '../config/offer';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071426] text-slate-400 py-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/5 items-start text-left">
          
          {/* Logo & Desc */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center font-bold text-xl md:text-2xl cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="text-[#D62828] font-extrabold mr-1">SOS</span>
              <span className="text-white">Alfabetização</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Um olhar pedagógico individualizado para ajudar as famílias a conduzirem o processo de leitura e escrita com clareza e segurança em casa.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Informações de Contato</h4>
            <div className="text-xs sm:text-sm space-y-2 text-slate-400">
              <p>Email: <span className="text-white">{offerConfig.supportEmail}</span></p>
              <p>WhatsApp: <span className="text-white">+{offerConfig.supportWhatsapp}</span></p>
              <p>Profissional: <span className="text-white">{offerConfig.professionalName}</span></p>
            </div>
          </div>

          {/* Legals */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Políticas Legais</h4>
            <div className="text-xs flex flex-col space-y-2">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Política de Cancelamento e Remarcação</a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 space-y-6 text-center text-xs">
          
          {/* Clinical Disclaimer */}
          <div className="bg-[#0B1F3A] border border-white/5 p-4 rounded-xl max-w-4xl mx-auto text-slate-300 leading-relaxed text-left">
            <strong>Aviso de responsabilidade ética:</strong> O SOS Alfabetização oferece exclusivamente orientação pedagógica personalizada de apoio doméstico e estudos em casa. Este serviço não realiza diagnósticos médicos, psiquiátricos, psicológicos, fonoaudiológicos, psicopedagógicos clínicos ou neuropsicológicos, nem substitui o acompanhamento regular escolar ou de profissionais de saúde especializados.
          </div>

          <p className="text-[10px] text-slate-500">
            &copy; {currentYear} SOS Alfabetização. Todos os direitos reservados.
          </p>

        </div>

      </div>
    </footer>
  );
}

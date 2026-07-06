import { ShieldCheck } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#071426] text-white py-2 px-4 text-center text-xs md:text-sm font-medium border-b border-white/5 flex items-center justify-center gap-2">
      <ShieldCheck className="w-4 h-4 text-red-500 animate-pulse" />
      <span>Atendimento pedagógico individual para pais de crianças entre 5 e 9 anos.</span>
    </div>
  );
}

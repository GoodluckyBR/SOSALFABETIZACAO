import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { trackEvent } from '../config/offer';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Meu filho precisa participar da consultoria?",
      answer: "A consultoria é direcionada principalmente aos pais ou responsáveis. A participação direta da criança não é obrigatória, pois o foco está em orientar os pais sobre como agir no dia a dia doméstico, analisando as informações fornecidas por eles."
    },
    {
      question: "A consultoria é uma avaliação ou diagnóstico?",
      answer: "Não. O SOS Alfabetização oferece orientação pedagógica especializada. Ele não realiza nem substitui exames médicos, psicológicos, fonoaudiológicos, psicopedagógicos ou neuropsicológicos."
    },
    {
      question: "Vou receber atividades prontas?",
      answer: "O foco principal não é entregar um pacote de atividades. Você receberá orientações estratégicas de rotina e um plano personalizado. Materiais específicos poderão ser sugeridos de forma complementar se fizerem sentido para a situação analisada."
    },
    {
      question: "Quanto tempo dura a consultoria?",
      answer: "O encontro individual dura aproximadamente uma hora."
    },
    {
      question: "Quando receberei o relatório?",
      answer: "O relatório personalizado em PDF e o plano de ação de 30 dias serão enviados para o seu e-mail ou WhatsApp em até 5 dias úteis após o término da consultoria."
    },
    {
      question: "O plano de 30 dias garante que meu filho aprenderá a ler?",
      answer: "Não. Cada criança possui um ritmo, maturidade e realidade particulares. O plano tem o objetivo de orientar a família e organizar os próximos passos de suporte doméstico de forma estruturada, sem prometer milagres ou resultados imediatos."
    },
    {
      question: "A consultoria substitui o acompanhamento da escola?",
      answer: "Não. A proposta é ajudar os pais a compreenderem o processo e participarem dele de forma consciente e com segurança, mantendo o diálogo aberto e transparente com a equipe escolar."
    },
    {
      question: "E se for necessário procurar outro profissional?",
      answer: "Caso a situação da criança indique necessidade de uma avaliação detalhada ou acompanhamento de saúde, a família receberá a indicação profissional correta (fonoaudiólogo, neuropediatra, psicólogo) para buscar ajuda especializada."
    },
    {
      question: "Como faço o agendamento?",
      answer: "Após a confirmação de sua compra, você receberá um e-mail com o link de agendamento online. Basta escolher a data e o horário mais convenientes entre as opções disponíveis."
    },
    {
      question: "Posso remarcar a consultoria?",
      answer: "Sim. A remarcação pode ser feita com antecedência mínima de 24 horas do horário agendado, diretamente pela plataforma ou entrando em contato com nosso suporte."
    }
  ];

  const toggleFAQ = (idx: number) => {
    const isNowOpen = openIndex === idx;
    trackEvent('Toggle FAQ', { question: faqs[idx].question, open: !isNowOpen });
    setOpenIndex(isNowOpen ? null : idx);
  };

  return (
    <section className="py-20 bg-[#F7F9FC]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4 text-[#0B1F3A]" />
            Perguntas Frequentes
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A]">
            Dúvidas Frequentes
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Esclareça as principais dúvidas sobre como a consultoria pedagógica funciona na prática.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left font-bold text-sm sm:text-base text-[#0B1F3A] hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export const offerConfig = {
  price: "R$ 147",
  originalPrice: "R$ 197",
  checkoutUrl: "https://pay.hotmart.com/mock", // Substituir com link de checkout real
  whatsappUrl: "https://wa.me/5599999999999?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Consultoria%20SOS%20Alfabetiza%C3%A7%C3%A3o",
  schedulingUrl: "https://calendly.com/mock", // Link para agendamento após compra
  professionalName: "Ana Paula Silva",
  professionalTitle: "Pedagoga e Especialista em Alfabetização",
  supportEmail: "suporte@sosalfabetizacao.com.br",
  supportWhatsapp: "5599999999999",
  isValidationPhase: true,
  leadTargetAge: "5 a 9 anos"
};

// Centralização de trackings (Google Analytics, Facebook Pixel, etc)
export const trackEvent = (eventName: string, details?: Record<string, any>) => {
  console.log(`[Analytics Event]: ${eventName}`, details);
  // Se o usuário configurar o gtag ou fbq futuramente, pode integrar aqui:
  if (typeof window !== 'undefined') {
    // Exemplo:
    // @ts-ignore
    if (window.gtag) {
      // @ts-ignore
      window.gtag('event', eventName, details);
    }
    // @ts-ignore
    if (window.fbq) {
      // @ts-ignore
      window.fbq('track', eventName, details);
    }
  }
};

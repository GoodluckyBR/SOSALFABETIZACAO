export const offerConfig = {
  price: "R$147",
  originalPrice: "R$197",
  checkoutUrl: "#", // Link do checkout
  whatsappUrl: "https://wa.me/5599999999999?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Consultoria%20SOS%20Alfabetiza%C3%A7%C3%A3o",
  schedulingUrl: "#", // Link para agendamento após a compra
  professionalName: "Tainá Souza",
  professionalTitle: "Professora dedicada à alfabetização infantil e à orientação de pais e responsáveis",
  supportEmail: "suporte@sosalfabetizacao.com.br",
  supportWhatsapp: "5599999999999",
  isValidationPhase: true,
  leadTargetAge: "5 a 9 anos",
  images: {
    hero: "/imagens/hero.JPG",
    about: "/imagens/sobre mim.JPG",
    activities: "/imagens/atividades.JPG"
  }
};

export const trackEvent = (eventName: string, details?: Record<string, any>) => {
  console.log(`[Analytics Event]: ${eventName}`, details);
  if (typeof window !== 'undefined') {
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

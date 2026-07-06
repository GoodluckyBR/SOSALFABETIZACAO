export const offerConfig = {
  price: "R$147",
  originalPrice: "R$197",
  checkoutUrl: "#", // Link do checkout
  whatsappUrl: "https://wa.me/553891829351?text=Ol%C3%A1%2C%20Quero%20saber%20mais%20sobre%20a%20consultoria%20",
  schedulingUrl: "#", // Link para agendamento após a compra
  professionalName: "Tainá Souza",
  professionalTitle: "Professora dedicada à alfabetização infantil e à orientação de pais e responsáveis",
  supportEmail: "suporte@sosalfabetizacao.com.br",
  supportWhatsapp: "553891829351",
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

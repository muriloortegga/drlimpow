// Central site configuration. Replace placeholders when real data is available.
export const SITE = {
  name: "Dr. Limpow",
  tagline: "Higienização de Estofados e Automotiva",
  region: "Vargem Grande Paulista e Cotia – SP",
  // TODO: Substituir pelo número real do WhatsApp do Victor (formato 55 + DDD + número, só dígitos)
  whatsappNumber: "5511000000000",
  email: "contato@drlimpow.com.br",
  instagram: "https://instagram.com/drlimpow",
  instagramHandle: "@drlimpow",
} as const;

export function whatsappLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}

export const WPP_MESSAGES = {
  generic: "Olá! Vim pelo site da Dr. Limpow e quero saber mais.",
  estofados: "Olá! Quero higienizar meu estofado.",
  lavagem: "Olá! Quero agendar uma lavagem/detalhamento do meu carro.",
  empresas:
    "Olá! Represento uma empresa e quero saber mais sobre o Plano Frota Dr. Limpow.",
} as const;

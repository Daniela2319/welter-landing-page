const numero = "5541996027017";

export const gerarLinkWhatsApp = (mensagem: string): string => {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
};

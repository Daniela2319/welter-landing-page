import { MessageCircle } from "lucide-react";
import { gerarLinkWhatsApp } from "../../utils/whatsapp";

export default function Services() {
  const services = [
    "Revisão Geral",
    "Conserto de Motores",
    "Soldagem Especializada",
    "Troca de Peças",
    "Manutenção Preventiva",
    "Reforma Completa",
  ];

  return (
    <section id="servicos" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-ruralGreen mb-12">
        Nossos Serviços
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {services.map((service) => (
          <a
            key={service}
            href={gerarLinkWhatsApp(
              `Olá, gostaria de solicitar um orçamento para ${service}.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-fieldBeige p-8 rounded-xl shadow-lg hover:scale-105 transition group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              🚜
            </div>

            <h3 className="text-xl font-semibold text-soilBrown mb-4">
              {service}
            </h3>

            <div className="flex justify-center items-center gap-2 text-ruralGreen font-medium">
              <MessageCircle size={18} />
              Solicitar Orçamento
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

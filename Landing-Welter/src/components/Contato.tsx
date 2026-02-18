import { Phone, Calculator, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "../../public/images/bg-contato.png";
import { gerarLinkWhatsApp } from "../utils/whatsapp";

export function ContactCTA() {
  return (
    <section id="contato" className="py-20 ">
      <div className=" max-w-7xl mx-auto">
        <div
          className=" rounded-[40px] py-20 px-8 text-center text-white relative overflow-hidden"
          style={{
            backgroundImage: `url(${Image})`,
          }}
        >
          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Pronto para manter sua produção em movimento?
          </motion.h2>

          {/* Subtítulo */}
          <p className="text-lg opacity-90 max-w-3xl mx-auto mb-10">
            Entre em contato agora mesmo e solicite seu orçamento. Nossa equipe
            está pronta para atender você com agilidade e qualidade.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <a
              href={gerarLinkWhatsApp(
                "Olá, gostaria de solicitar um orçamento.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white text-[#3f6f2a] px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition"
            >
              <Calculator size={20} />
              Solicite seu Orçamento Grátis
            </a>

            <a
              href="tel:+5541996027017"
              className="flex items-center justify-center gap-3 border border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#3f6f2a] transition"
            >
              <Phone size={20} />
              Ligar Agora
            </a>
          </div>

          {/* Texto inferior */}
          <div className="flex justify-center items-center gap-2 text-sm opacity-90">
            <CheckCircle size={16} />
            Respondemos em até 24 horas • Orçamento sem compromisso
          </div>
        </div>
      </div>
    </section>
  );
}

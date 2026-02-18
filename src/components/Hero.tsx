import { motion } from "framer-motion";
import image from "../assets/hero.png";
import { gerarLinkWhatsApp } from "../utils/whatsapp";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay Premium */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f14]/95 via-[#1f3d2b]/80 to-transparent"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-[#c7a16a] text-white text-sm px-4 py-1 rounded-full mb-6 shadow-md"
        >
          Fazenda Rio Grande – PR
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl"
        >
          Especialistas em manter sua{" "}
          <span className="text-[#e8c39e]">produção</span>{" "}
          <span className="text-[#e8c39e]">em movimento</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-lg text-gray-200 max-w-2xl"
        >
          Manutenção, reforma e conserto de máquinas agrícolas com qualidade e
          agilidade. Sua colheita segura com equipamentos sempre funcionando.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href={gerarLinkWhatsApp("Olá, gostaria de solicitar um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2e5c3b] hover:bg-[#163522] text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition transform hover:scale-105"
          >
            Solicite seu Orçamento
          </a>

          <a
            href="#servicos"
            className="border border-[#e8c39e] text-[#e8c39e] hover:bg-[#e8c39e] hover:text-[#1f3d2b] px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Ver Serviços
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 flex flex-wrap gap-6 text-sm text-[#e8c39e]"
        >
          <span> +15 anos de experiência</span>
          <span> Atendimento regional</span>
        </motion.div>
      </div>

      {/* Curva elegante inferior */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,96L80,106.7C160,117,320,139,480,133.3C640,128,800,96,960,90.7C1120,85,1280,107,1360,117.3L1440,128V160H0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}

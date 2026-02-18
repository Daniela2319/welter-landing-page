import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";
import Image from "../../public/images/banner-about.png";

export function About() {
  return (
    <section id="sobre" className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* IMAGEM */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src={Image}
              alt="Manutenção de trator Welter"
              width={700}
              height={500}
              className="object-cover w-full h-full brightness-80 contrast-180"
            />
          </motion.div>

          {/* CARD +15 ANOS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 right-10 bg-[#2f5d2f] text-white px-8 py-6 rounded-2xl shadow-2xl"
          >
            <p className="text-3xl font-bold">+15</p>
            <p className="text-sm opacity-90">anos de experiência</p>
          </motion.div>
        </div>

        {/* CONTEÚDO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-widest text-[#2f5d2f] font-semibold mb-4">
            SOBRE A WELTER
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1f3d2b] leading-tight mb-8">
            Compromisso com a qualidade e agilidade
          </h2>

          <p className="text-[#5f6f63] leading-relaxed mb-6">
            A <strong>Welter Manutenção e Reforma de Máquinas Agrícolas</strong>{" "}
            é referência em manutenção especializada no Paraná. Localizada em
            Fazenda Rio Grande, atendemos agricultores e proprietários rurais
            com excelência e dedicação.
          </p>

          <p className="text-[#5f6f63] leading-relaxed mb-10">
            Nosso compromisso é com a qualidade e a agilidade em cada serviço.
            Sabemos que tempo é dinheiro no campo, por isso trabalhamos para
            devolver sua máquina operacional o mais rápido possível, sem
            comprometer a qualidade.
          </p>

          {/* BENEFÍCIOS */}
          <div className="flex flex-col sm:flex-row gap-8 mb-10">
            <div className="flex items-start gap-4">
              <div className="bg-[#2f5d2f] p-3 rounded-lg text-white">
                <Check size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-[#1f3d2b]">
                  Qualidade Garantida
                </h4>
                <p className="text-sm text-[#6c7a70]">
                  Serviços com padrão de excelência
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#2f5d2f] p-3 rounded-lg text-white">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-[#1f3d2b]">Agilidade</h4>
                <p className="text-sm text-[#6c7a70]">
                  Retorno rápido da sua máquina
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

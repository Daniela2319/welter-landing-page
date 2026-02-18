import { motion } from "framer-motion";
import {
  ClipboardList,
  Cog,
  Flame,
  Settings,
  Shield,
  Hammer,
} from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Revisão Geral",
      description:
        "Inspeção completa do equipamento para identificar problemas e garantir funcionamento ideal.",
      icon: ClipboardList,
    },
    {
      title: "Conserto de Motores",
      description:
        "Reparo especializado em motores diesel e sistemas hidráulicos de máquinas agrícolas.",
      icon: Cog,
    },
    {
      title: "Soldagem",
      description:
        "Serviços profissionais de soldagem em estruturas metálicas e componentes de máquinas.",
      icon: Flame,
    },
    {
      title: "Troca de Peças",
      description:
        "Substituição de peças originais e de qualidade para garantir performance.",
      icon: Settings,
    },
    {
      title: "Manutenção Preventiva",
      description:
        "Evite paradas inesperadas com nossa manutenção preventiva especializada.",
      icon: Shield,
    },
    {
      title: "Reforma Completa",
      description:
        "Restauração integral do equipamento para estender sua vida útil e desempenho.",
      icon: Hammer,
    },
  ];

  return (
    <section id="servicos" className="bg-[#e9efe6] py-28 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Cabeçalho */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm tracking-widest text-[#2e5c3b] font-semibold mb-4"
        >
          NOSSOS SERVIÇOS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#1f3d2b] max-w-4xl mx-auto"
        >
          Soluções completas para suas máquinas agrícolas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-[#5c6b5f] max-w-2xl mx-auto"
        >
          Oferecemos todos os serviços necessários para manter seus equipamentos
          em perfeito funcionamento
        </motion.p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left"
              >
                {/* Ícone */}
                <div className="w-14 h-14 flex items-center justify-center bg-[#2e5c3b] rounded-xl mb-6">
                  <Icon size={26} className="text-white" />
                </div>

                {/* Título */}
                <h3 className="text-xl font-semibold text-[#1f3d2b] mb-4">
                  {service.title}
                </h3>

                {/* Descrição */}
                <p className="text-[#6b6f68] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

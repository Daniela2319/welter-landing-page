import Image from "../assets/logo.png";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2f6d26] text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* LOGO + DESCRIÇÃO */}
        <div>
          <img
            src={Image}
            alt="Welter Manutenção"
            width={180}
            height={60}
            className="mb-6"
          />
          <p className="text-sm opacity-80 leading-relaxed">
            Especialistas em manutenção e reforma de máquinas agrícolas em
            Fazenda Rio Grande – PR.
          </p>
        </div>

        {/* LINKS RÁPIDOS */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-[#f4b261]">
            Links Rápidos
          </h4>
          <ul className="space-y-3 opacity-90">
            <li>
              <a href="#" className="hover:text-[#f4b261] transition">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f4b261] transition">
                Serviços
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#f4b261] transition">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* SERVIÇOS */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-[#f4b261]">
            Nossos Serviços
          </h4>
          <ul className="space-y-3 opacity-90">
            <li>Revisão Geral</li>
            <li>Conserto de Motores</li>
            <li>Soldagem</li>
            <li>Troca de Peças</li>
            <li>Manutenção Preventiva</li>
          </ul>
        </div>

        {/* CONTATO */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-[#f4b261]">
            Fale Conosco
          </h4>

          <div className="space-y-4 text-sm opacity-90">
            <div className="flex gap-3 items-start">
              <MapPin size={18} />
              <p>
                Av. Venezuela, 2282 – Eucaliptos
                <br />
                Fazenda Rio Grande – PR
                <br />
                83823-078
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <Phone size={18} />
              <p>(41) 99602-7017</p>
            </div>

            <div className="flex gap-3 items-center">
              <Mail size={18} />
              <p>contato@welter.com.br</p>
            </div>
          </div>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-white/20 mt-16 pt-6 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Welter Manutenção e Reforma de Máquinas
        Agrícolas. Todos os direitos reservados.
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { gerarLinkWhatsApp } from "../utils/whatsapp";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-fieldBeige/95 backdrop-blur-md shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="Logo Welter" className="h-20 w-auto" />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-ruralGreen">
          <a
            href="#sobre"
            className="hover:text-soilBrown transition duration-300"
          >
            Sobre
          </a>
          <a
            href="#servicos"
            className="hover:text-soilBrown transition duration-300"
          >
            Serviços
          </a>
          <a
            href="#contato"
            className="hover:text-soilBrown transition duration-300"
          >
            Contato
          </a>
          {/* CTA Desktop */}
          <a
            href={gerarLinkWhatsApp("Olá, gostaria de solicitar um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ruralGreen text-fieldBeige px-5 py-2 rounded-lg hover:bg-darkGreen transition"
          >
            Orçamento
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-ruralGreen"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-fieldBeige px-6 pb-6 shadow-lg">
          <nav className="flex flex-col gap-5 text-ruralGreen font-medium">
            <a href="#sobre" onClick={() => setIsOpen(false)}>
              Sobre
            </a>

            <a href="#servicos" onClick={() => setIsOpen(false)}>
              Serviços
            </a>

            <a href="#contato" onClick={() => setIsOpen(false)}>
              Contato
            </a>

            <a
              href={gerarLinkWhatsApp(
                "Olá, gostaria de solicitar um orçamento.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="bg-ruralGreen text-fieldBeige px-5 py-3 rounded-lg text-center"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

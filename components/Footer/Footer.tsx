import SVGLogo from "@/icons/Logo/Logo";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const nav = [
    { name: "Home", href: "/" },
    { name: "Produtos", href: "/plp?type=produtos" },
    { name: "Serviços", href: "/plp?type=servicos" },
    { name: "Cadastro", href: "/cadastro" },
  ];

  const social = [
    { name: "Instagram", href: "https://www.instagram.com", icon: FaInstagram },
    { name: "GitHub", href: "https://www.github.com", icon: FaGithub },
    { name: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedin },
  ];

  return (
    <footer className="flex flex-col items-center gap-8 justify-center w-full h-auto border-t bg-gray-900 p-6">
      <SVGLogo />
      <div className="flex gap-8">
        {social.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="text-lg text-gray-300 hover:text-white"
          >
            {React.createElement(icon)}
          </a>
        ))}
      </div>
      <nav className="flex flex-col items-center gap-4 justify-center">
        {nav.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className="text-sm text-gray-300 hover:text-white hover:underline"
          >
            {name}
          </Link>
        ))}
      </nav>
      <p className="text-sm text-gray-200">
        © 2024 Rafael Perdigão Melo Castro - PUCRS
      </p>
    </footer>
  );
};

export default Footer;

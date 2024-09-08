import SVGLogo from "@/icons/Logo/Logo";
import { NavMocks, SocialIconMocks } from "@/mock/nav-mocks";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {

  return (
    <footer className="flex flex-col items-center gap-8 justify-center w-full h-auto border-t bg-gray-900 p-6">
      <SVGLogo />
      <div className="flex gap-8">
        {SocialIconMocks.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="text-lg text-gray-300 hover:text-white hover:scale-110 transform transition-transform"
          >
            {React.createElement(icon)}
          </a>
        ))}
      </div>
      <nav className="flex flex-col items-center gap-4 justify-center">
        {NavMocks.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className="text-sm text-gray-300 hover:text-white hover:scale-110 transform transition-transform"
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

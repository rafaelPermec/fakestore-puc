import SVGLogo from "@/icons/Logo/Logo";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Header: React.FC = () => {
  const nav = [
    { name: "Home", href: "/" },
    { name: "Produtos", href: "/plp?type=produtos" },
    { name: "Serviços", href: "/plp?type=servicos" },
    { name: "Cadastro", href: "/cadastro" },
  ];

  return (
    <header className="flex items-center justify-between px-12 w-full h-24 border-b bg-gray-900 max-[700px]:justify-center max-[700px]:px-4">
      <div>
        <SVGLogo />
      </div>
      <nav className="flex items-center gap-12 justify-center max-[700px]:hidden">
        {nav.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className="text-sm text-gray-300 hover:text-white hover:scale-110 transform transition-transform"
          >
            {name}
          </Link>
        ))}
        <p className="text-lg text-gray-300 hover:text-white hover:scale-110 transform transition-transform cursor-pointer">
          <FaShoppingCart />
        </p>
      </nav>
    </header>
  );
};

export default Header;

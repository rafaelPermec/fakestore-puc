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
    <header className="flex items-center justify-between px-12 w-full h-24 border-b bg-gray-900">
      <div>
        <SVGLogo />
      </div>
      <nav className="flex items-center gap-12 justify-center">
        {nav.map(({ name, href }) => (
          <Link key={name} href={href} className="text-sm text-gray-300 hover:text-white hover:underline">
            {name}
          </Link>
        ))}
        <Link href="/cart" className="text-lg text-gray-300 hover:text-white hover:underline">
          <FaShoppingCart />
        </Link>
      </nav>
    </header>
  );
};

export default Header;

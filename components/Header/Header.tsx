import SVGLogo from "@/icons/Logo/Logo";
import { NavMocks } from "@/mock/nav-mocks";
import Link from "next/link";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-12 w-full h-24 border-b bg-gray-900 max-[700px]:justify-between max-[700px]:px-6">
      <div>
        <SVGLogo />
      </div>
      <nav className="flex items-center gap-12 justify-center">
        <div className="flex items-center gap-12 max-[700px]:hidden">
        {NavMocks.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className="text-sm text-gray-300 hover:text-white hover:scale-110 transform transition-transform"
          >
            {name}
          </Link>
        ))}
        </div>
        <ShoppingCart />
      </nav>
    </header>
  );
};

export default Header;

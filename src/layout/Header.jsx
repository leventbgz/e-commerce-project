import { Link } from "react-router-dom";
import { Menu, ShoppingBag } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#1E1E1E] shadow-lg">
      {/* Left Side: Brand & Menu */}
      <div className="flex items-center gap-4">
        <button className="lg:hidden">
          <Menu className="w-7 h-7 text-[#E4C590]" />
        </button>
        <Link
          to="/"
          className="text-2xl font-semibold tracking-wide text-[#E4C590] hover:text-[#F2D7A7] transition"
        >
          Pucci<span className="font-light">&</span>Puppi
        </Link>
      </div>

      {/* Middle: Navigation Links */}
      <nav className="hidden lg:flex items-center gap-8">
        <Link to="/pucci" className="text-[#F2D7A7] hover:text-white transition">
          For Pucci
        </Link>
        <Link to="/shop" className="text-[#F2D7A7] hover:text-white transition">
          Best of Both
        </Link>
        <Link to="/puppi" className="text-[#F2D7A7] hover:text-white transition">
          For Puppi
        </Link>
      </nav>

      {/* Right Side: Basket */}
      <div className="flex items-center gap-4">
        <Link to="/login" className="relative">
          <ShoppingBag className="w-7 h-7 text-[#E4C590] hover:text-[#F2D7A7] transition" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

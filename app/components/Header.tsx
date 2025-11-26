import { Menu, X, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setIsMenuOpen, isMenuOpen }) => {

  const navLinks = [
    { name: "Reel Packages", route: "#packages" },
    { name: "Ad Services", route: "#services" },
    { name: "Success Metrics", route: "#success" },
    { name: "Portfolio", route: "#portfolio" },
    { name: "Contact Us", route: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-20 bg-black/80 backdrop-blur-md border-b border-emerald-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold text-emerald-500 flex items-center">
          <Zap className="w-6 h-6 mr-2 text-emerald-400" />
          <Image
            src="/logoCreaton.JPG"
            alt="Creaton Logo"
            width={120}
            height={50}
            className="h-auto w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.route}
              href={link.route}
              className="text-gray-300 hover:text-emerald-400 transition font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:block bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
        >
          Order Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-emerald-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-emerald-600 shadow-lg">
          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.route}
                href={link.route}
                className="text-gray-300 hover:text-emerald-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-pink-600 text-white px-4 py-2 rounded-lg text-center"
            >
              Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

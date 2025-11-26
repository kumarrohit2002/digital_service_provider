import React from "react";
import { Instagram, Facebook, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-black border-t border-gray-800 text-center">
      
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-6">

        <a
          href="https://instagram.com/"
          target="_blank"
          className="text-gray-400 hover:text-pink-500 transition transform hover:scale-110"
        >
          <Instagram className="w-6 h-6" />
        </a>

        <a
          href="https://facebook.com/"
          target="_blank"
          className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110"
        >
          <Facebook className="w-6 h-6" />
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          className="text-gray-400 hover:text-sky-400 transition transform hover:scale-110"
        >
          <Twitter className="w-6 h-6" />
        </a>

        <a
          href="https://youtube.com/"
          target="_blank"
          className="text-gray-400 hover:text-red-500 transition transform hover:scale-110"
        >
          <Youtube className="w-6 h-6" />
        </a>

        <a
          href="mailto:creaton@gmail.com"
          className="text-gray-400 hover:text-emerald-500 transition transform hover:scale-110"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-gray-500">
        © {new Date().getFullYear()} Creaton —{" "}
        <span className="text-emerald-500">Grow Your Business Fast.</span>
      </p>

    </footer>
  );
};

export default Footer;

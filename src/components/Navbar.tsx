"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group ">
              {/* <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm overflow-hidden shrink-0">
                <div className="w-10 h-10 bg-primary flex items-center justify-center font-bold text-white text-xl">
                  IP
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter leading-none">IRONPEAK</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Construction Group</span>
              </div> */}
              <div className="relative w-32 h-16 md:w-36 md:h-20 overflow-hidden flex items-center justify-center">
                <Image
                  src="/assets/newlogo.png"
                  alt="IronPeak"
                  fill
                  className="object-contain mix-blend-multiply scale-[2]"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:4085550198"
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-sm font-bold text-sm hover:bg-black transition-all"
            >
              <Phone size={16} />
              (408) 555-0198
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-bold text-gray-700 hover:text-primary hover:bg-gray-50 uppercase tracking-widest border-b border-gray-50"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <a
                  href="tel:4085550198"
                  className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-4 rounded-sm font-bold text-base w-full"
                >
                  <Phone size={20} />
                  (408) 555-0198
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

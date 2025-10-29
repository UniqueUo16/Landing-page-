"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Sparkles, Users, PenLine, ChevronDown } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Recent Projects", href: "/projects" },
    { name: "Community Investment", href: "/investments" },
    { name: "Socials & Testimonials", href: "/socials" },
  ];

  return (
    <header
      className={`${montserrat.className} fixed top-0 left-0 w-full bg-white/70 backdrop-blur-xl border-b border-amber-200/30 shadow-lg z-100`}
    >
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo1.gif"
              alt="Ajagunla Campaign Logo"
              height={55}
              width={55}
              className="rounded-full shadow-md border "
            />
            <span className="text-xl md:text-2xl tracking-wide text-gray-900 font-semibold">
              ÀJÀGÚNLÀ
              <motion.span
                className="text-amber-700 font-extrabold ml-1 drop-shadow-[0_0_6px_rgba(245,158,11,0.8)]"
                style={{ fontVariant: "small-caps" }}
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                2027
              </motion.span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-base text-gray-800 font-medium">
          {navLinks.map((link) => (
            <motion.div whileHover={{ y: -2 }} key={link.name}>
              <Link
                href={link.href}
                className="hover:text-amber-700 transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2 rounded-md text-gray-900 hover:text-amber-700 transition"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[900]"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              className="fixed top-0 right-0 w-[80vw] max-w-sm bg-gradient-to-br from-white/90 to-amber-50/80 shadow-2xl p-6 overflow-y-auto z-[1000] rounded-l-3xl border-l border-amber-200"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-gray-900 tracking-wide">
                  ÀJÀGÚNLÀ<span className="text-amber-700"> 2027</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-600 hover:text-black"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-4 font-medium text-gray-800">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="hover:text-amber-700 border-b border-gray-200 py-2 flex justify-between items-center"
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Info Dropdown */}
                <div className="flex flex-col">
                  <span
                    onClick={() => setInfoOpen(!infoOpen)}
                    className="cursor-pointer hover:text-amber-700 border-b border-gray-200 flex justify-between py-2 items-center"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="text-amber-700" />
                      About Campaign
                    </div>
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform duration-300 ${
                        infoOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>

                  <motion.div
                    initial={false}
                    animate={{
                      height: infoOpen ? "auto" : 0,
                      opacity: infoOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-4 flex flex-col gap-2 text-sm text-gray-700 mt-2">
                      <Link href="/about" className="hover:text-amber-700">
                        Who We Are
                      </Link>
                      <Link href="/mission" className="hover:text-amber-700">
                        Our Vision
                      </Link>
                      <Link href="/impact" className="hover:text-amber-700">
                        Campaign Impact
                      </Link>
                    </div>
                  </motion.div>
                </div>

                {/* CTA */}
                <Link
                  href="/subscribe"
                  onClick={() => setOpen(false)}
                  className="mt-4 flex items-center justify-center bg-amber-700 text-white py-2 rounded-lg shadow-lg hover:bg-amber-800 transition"
                >
                  <Mail className="mr-2" size={18} /> Join ÀJÀGÚNLÀ Campaign
                </Link>
              </nav>

              {/* Footer */}
              <div className="mt-8 text-xs text-gray-500 border-t pt-4 text-center">
                <p>© 2025 Ajagunla Campaign.</p>
                <p className="text-amber-700 font-medium">
                  Building Tomorrow’s Leaders.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

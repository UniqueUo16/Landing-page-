"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
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
      className={`${montserrat.className} fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-amber-100 shadow-sm z-50`}
    >
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo1.gif"
            alt="Adeyemi Newsletter Logo"
            height={55}
            width={55}
            className="rounded-full"
          />
          <span className="text-xl md:text-2xl tracking-wide text-gray-900 font-semibold">
            Adeyemi
            <span
              className="text-amber-700 font-extrabold ml-1"
              style={{ fontVariant: "small-caps" }}
            >
              Newsletter
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex gap-10 text-lg text-gray-800 font-medium"
          style={{ fontVariant: "small-caps" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-amber-700 transition-colors"
            >
              {link.name}
            </Link>
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

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[900]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-[80vw] max-w-sm bg-white shadow-2xl text-[0.95rem] transform transition-transform duration-500 ease-in-out p-6 overflow-y-auto z-[1000] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-bold text-gray-900 tracking-wide">
            Adeyemi<span className="text-amber-700">.</span>
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
              className="flex items-center justify-between hover:text-amber-700 border-b border-gray-200 py-2"
              onClick={() => setOpen(false)}
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
                About Newsletter
              </div>
              <ChevronDown
                size={16}
                className={`transform transition-transform duration-300 ${
                  infoOpen ? "rotate-180" : ""
                }`}
              />
            </span>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                infoOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-4 flex flex-col gap-2 text-sm text-gray-700">
                <Link href="/about" className="hover:text-amber-700">
                  Who We Are
                </Link>
                <Link href="/mission" className="hover:text-amber-700">
                  Our Mission
                </Link>
                <Link href="/values" className="hover:text-amber-700">
                  Our Values
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter CTA */}
          <Link
            href="/subscribe"
            onClick={() => setOpen(false)}
            className="flex justify-between items-center hover:text-amber-700 border-b border-gray-200 py-2"
          >
            Subscribe Now <Mail className="text-amber-700" size={18} />
          </Link>

          {/* Team */}
          <Link
            href="/team"
            className="flex justify-between items-center hover:text-amber-700 border-b border-gray-200 py-2"
            onClick={() => setOpen(false)}
          >
            Meet the Team <Users className="text-amber-700" size={18} />
          </Link>

          {/* Blog */}
          <Link
            href="/blog"
            className="flex justify-between items-center hover:text-amber-700 border-b border-gray-200 py-2"
            onClick={() => setOpen(false)}
          >
            Read Our Blog <PenLine className="text-amber-700" size={18} />
          </Link>

          {/* Highlights */}
          <div className="mt-8 border-t pt-4 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/imgs/insight1.jpg"
                alt="news1"
                height={70}
                width={110}
                className="rounded-md object-cover"
              />
              <span className="text-sm font-medium">
                Design Trends That Will Shape 2025
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/imgs/inspiration.webp"
                alt="news2"
                height={70}
                width={110}
                className="rounded-md object-cover"
              />
              <span className="text-sm font-medium">
                How Creativity Beats the Algorithm
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-xs text-gray-500 border-t pt-4 text-center">
            <p>© 2025 Adeyemi Newsletter.</p>
            <p>Designed with passion and coffee ☕</p>
          </div>
        </nav>
      </div>
    </header>
  );
}

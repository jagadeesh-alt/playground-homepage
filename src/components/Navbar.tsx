"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!document.getElementById("mobile-menu")?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [menuOpen]);

  const navLinks = [
    { href: "/playground", label: "Playground" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/auth/login", label: "Login" },
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/home" className="text-2xl font-extrabold text-gray-100">
          Darion<span className="text-blue-400"> Playground</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <li key={href} className="relative group">
              <Link
                href={href}
                className={`relative px-4 py-2 text-gray-300 transition ${
                  pathname === href ? "text-blue-400 font-semibold" : "hover:text-blue-400"
                }`}
              >
                {label}
                {/* Underline Animation */}
                <motion.span
                  className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all group-hover:w-full group-hover:left-0"
                  layoutId={pathname === href ? "underline" : undefined}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-gray-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full backdrop-blur-md bg-gray-900/90 shadow-lg md:hidden"
          >
            <ul className="flex flex-col items-center space-y-4 py-6">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-6 py-2 text-gray-300 transition ${
                      pathname === href ? "text-blue-400 font-medium" : "hover:text-blue-400"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

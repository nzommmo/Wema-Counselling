"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 dark:bg-surface-950/90 backdrop-blur-lg shadow-lg shadow-black/3"
            : "bg-white/50 dark:bg-surface-950/50 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/Logo-removebg-preview.png"
                alt="Mindful Wema"
                width={56}
                height={56}
                className="rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
              <span className="hidden sm:block font-bold text-lg text-gray-900 dark:text-white tracking-tight">
                Mindful Wema
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-[15px] font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-pink-600"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-linear-to-r from-pink-600 to-rose-400 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA + Mobile Hamburger */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link
                href="https://calendly.com/maureennjihia468/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white hover:-translate-y-0.5"
              >
                Book Appointment
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
                aria-label="Toggle menu"
              >
                <span
                  className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-2"
                      : "group-hover:w-7"
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0 scale-0" : "group-hover:w-5"
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-2"
                      : "group-hover:w-4"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-full max-w-sm bg-white dark:bg-surface-900 shadow-2xl transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col p-8 pt-24 h-full">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                        isActive
                          ? "text-pink-600 bg-pink-50"
                          : "text-gray-700 hover:text-pink-600 hover:bg-pink-50/50"
                      }`}
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}

            </ul>

            <div className="mt-auto pb-8">
              <Link
                href="https://calendly.com/maureennjihia468/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block w-full text-center px-6 py-3.5 text-base font-semibold text-white bg-linear-to-r from-pink-600 to-rose-500 rounded-xl shadow-lg shadow-pink-500/25 hover:shadow-xl transition-all duration-300"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
}

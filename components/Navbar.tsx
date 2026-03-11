"use client";
import { MapPin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Analytics", href: "#analytics" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center shadow-md group-hover:bg-brand-600 transition-colors">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-xl font-800 text-slate-900 tracking-tight">
              GEON<span className="text-brand-500">Technology</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="http://69.167.170.135/login"
              target="_blank"
              className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition-colors px-4 py-2"
            >
              Log In
            </Link>
            <Link
              href="#cta"
              className="text-sm font-semibold bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-brand-200"
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-slate-100 shadow-lg transition-all duration-300 overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 space-y-2 border-t border-slate-100 mt-2">
            <a
              href="#"
              className="block text-center text-sm font-semibold text-slate-700 border border-slate-200 px-4 py-2.5 rounded-xl"
            >
              Log In
            </a>
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="block text-center text-sm font-semibold bg-brand-500 text-white px-4 py-2.5 rounded-xl"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

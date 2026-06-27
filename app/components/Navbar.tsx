"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects", dot: true },
  { label: "Contact", href: "#contact", pill: true },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["#home", "#about", "#projects", "#experience", "#contact"];
    const observers = sections.map((id) => {
      const el = document.querySelector(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      {/* Desktop — floating pill */}
      <nav
        className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full"
        style={{
          background: "rgba(20, 20, 20, 0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}
      >
        {links.map((link) => {
          const isActive = active === link.href;

          if (link.pill) {
            return (
              
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.href)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: "#F0F0F0",
                  color: "#0a0a0a",
                  fontFamily: "var(--font-space-grotesk)",
                }}
              >
                {link.label}
              </a>
            );
          }

          return (
            
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className="relative flex items-center gap-1.5 px-5 py-2 rounded-full text-sm transition-all"
              style={{
                color: isActive ? "#F0F0F0" : "#666666",
                fontFamily: "var(--font-space-grotesk)",
                background: isActive ? "rgba(255,255,255,0.06)" : "transparent",
              }}
            >
              {link.dot && (
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#ef4444" }}
                />
              )}
              {link.label}
            </a>
          );
        })}
      </nav>

      {/* Mobile — hamburger */}
      <div className="md:hidden flex items-center justify-between w-full px-2">
        <span
          className="font-display font-semibold text-sm text-[#F0F0F0]"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          NK<span style={{ color: "#4F8EF7" }}>.</span>
        </span>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1 p-2"
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-[#888] transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-5 h-px bg-[#888] transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-[#888] transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-14 left-4 right-4 rounded-2xl p-4 flex flex-col gap-2"
          style={{
            background: "rgba(10,10,10,0.95)",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(16px)",
          }}
        >
          {links.map((link) => (
            
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-colors"
              style={{
                color: active === link.href ? "#F0F0F0" : "#666666",
                background: active === link.href ? "rgba(255,255,255,0.05)" : "transparent",
                fontFamily: "var(--font-space-grotesk)",
              }}
            >
              {link.dot && (
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
              )}
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
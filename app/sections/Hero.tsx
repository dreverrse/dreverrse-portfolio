"use client";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "UI Engineer",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let i = typing ? 0 : current.length;
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      const type = () => {
        if (i <= current.length) {
          setDisplayed(current.slice(0, i));
          i++;
          timeout = setTimeout(type, 60);
        } else {
          timeout = setTimeout(() => setTyping(false), 2000);
        }
      };
      type();
    } else {
      const erase = () => {
        if (i >= 0) {
          setDisplayed(current.slice(0, i));
          i--;
          timeout = setTimeout(erase, 30);
        } else {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTyping(true);
        }
      };
      erase();
    }
    return () => clearTimeout(timeout);
  }, [roleIndex, typing]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 pt-20 max-w-5xl mx-auto"
    >
      {/* Status badge */}
      <div className="mb-10 flex items-center gap-2 animate-fade-in">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
        </span>
        <span className="font-mono text-xs text-[#666666]">
          Available for work
        </span>
      </div>

      {/* Greeting */}
      <p
        className="font-mono text-sm text-[#4F8EF7] mb-4 tracking-widest uppercase animate-fade-in"
        style={{ animationDelay: "0.1s" }}
      >
        Halo, saya
      </p>

      {/* Name */}
      <h1
        className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-[#F0F0F0] leading-none tracking-tight mb-4 animate-fade-up"
        style={{ animationDelay: "0.15s" }}
      >
        Nama Kamu
        <span className="text-[#4F8EF7]">.</span>
      </h1>

      {/* Typewriter role */}
      <div
        className="font-display text-3xl md:text-5xl font-semibold text-[#333333] mb-8 h-14 flex items-center animate-fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        <span>{displayed}</span>
        <span className="ml-0.5 inline-block w-0.5 h-9 bg-[#4F8EF7] animate-pulse" />
      </div>

      {/* Tagline */}
      <p
        className="text-[#666666] text-lg md:text-xl max-w-2xl leading-relaxed mb-12 animate-fade-up"
        style={{ animationDelay: "0.25s" }}
      >
        Membangun produk digital yang cepat, elegan, dan berdampak nyata.
        Berfokus pada pengalaman pengguna yang mulus dan kode yang bersih.
      </p>

      {/* CTAs */}
      <div
        className="flex flex-wrap gap-4 animate-fade-up"
        style={{ animationDelay: "0.3s" }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-[#4F8EF7] text-black text-sm font-semibold font-display rounded-full hover:bg-[#6BA3FF] transition-all hover:scale-105 active:scale-95"
        >
          Lihat Proyek →
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-[#2a2a2a] text-[#888888] text-sm font-display rounded-full hover:border-[#4F8EF7] hover:text-[#4F8EF7] transition-all"
        >
          Hubungi Saya
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
        <span className="font-mono text-xs text-[#666666] tracking-widest">
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#666] to-transparent" />
      </div>

      {/* Background accent blob */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(79,142,247,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </section>
  );
}

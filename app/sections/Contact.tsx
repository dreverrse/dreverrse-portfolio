"use client";
import { useEffect, useRef, useState } from "react";

const socials = [
  {
    label: "GitHub",
    handle: "@namakamu",
    href: "https://github.com/namakamu",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "Nama Kamu",
    href: "https://linkedin.com/in/namakamu",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    handle: "@namakamu",
    href: "https://twitter.com/namakamu",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Email",
    handle: "hello@namakamu.dev",
    href: "mailto:hello@namakamu.dev",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@namakamu.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto" ref={ref}>
      {/* Section label */}
      <div className="reveal flex items-center gap-4 mb-16">
        <span className="font-mono text-xs text-[#4F8EF7] tracking-widest uppercase">
          04 / kontak
        </span>
        <div className="flex-1 h-px bg-[#1a1a1a]" />
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Left: CTA */}
        <div className="reveal">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0F0F0] leading-tight mb-6">
            Punya ide
            <br />
            <span className="text-[#4F8EF7]">keren?</span>
          </h2>
          <p className="text-[#666666] leading-relaxed mb-8">
            Saya selalu terbuka untuk diskusi proyek baru, peluang kolaborasi,
            atau sekadar berbicara tentang teknologi. Jangan ragu untuk
            menghubungi saya.
          </p>

          {/* Email CTA */}
          <div className="border border-[#1a1a1a] rounded-2xl p-6 mb-6 hover:border-[#2a2a2a] transition-colors">
            <p className="font-mono text-xs text-[#444444] mb-2 uppercase tracking-wider">
              Email Langsung
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[#888888] font-mono text-sm">
                hello@namakamu.dev
              </span>
              <button
                onClick={handleCopyEmail}
                className="text-xs font-mono text-[#4F8EF7] hover:text-[#6BA3FF] transition-colors"
              >
                {copied ? "✓ Tersalin!" : "Salin"}
              </button>
            </div>
          </div>

          <a
            href="mailto:hello@namakamu.dev"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F8EF7] text-black text-sm font-semibold font-display rounded-full hover:bg-[#6BA3FF] transition-all hover:scale-105 active:scale-95"
          >
            Kirim Email →
          </a>
        </div>

        {/* Right: Social links */}
        <div className="reveal">
          <h3 className="font-mono text-xs text-[#444444] uppercase tracking-widest mb-8">
            Temukan Saya Di
          </h3>
          <div className="space-y-4">
            {socials.map((social, i) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border border-[#1a1a1a] rounded-xl hover:border-[#2a2a2a] hover:bg-[#050505] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#444444] group-hover:text-[#4F8EF7] transition-colors">
                    {social.icon}
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-[#888888] group-hover:text-[#F0F0F0] transition-colors">
                      {social.label}
                    </span>
                    <span className="font-mono text-xs text-[#444444]">
                      {social.handle}
                    </span>
                  </div>
                </div>
                <span className="text-[#333333] group-hover:text-[#4F8EF7] transition-colors text-sm">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="reveal mt-24 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-semibold text-sm text-[#333333]">
          NK<span className="text-[#4F8EF7]">.</span>
        </span>
        <span className="font-mono text-xs text-[#333333]">
          © 2024 Nama Kamu. Dibangun dengan Next.js & ❤️
        </span>
        <a
          href="#home"
          className="font-mono text-xs text-[#444444] hover:text-[#4F8EF7] transition-colors"
        >
          Kembali ke atas ↑
        </a>
      </div>
    </section>
  );
}

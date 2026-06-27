"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    period: "2023 — Sekarang",
    role: "Senior Full Stack Developer",
    company: "PT. Digital Inovasi Indonesia",
    type: "Full-time",
    description:
      "Memimpin pengembangan platform SaaS untuk 5,000+ pengguna aktif. Mendesain arsitektur microservices dan mentoring 3 junior developer.",
    achievements: [
      "Meningkatkan performa API sebesar 70% melalui caching strategy",
      "Memimpin migrasi dari monolith ke microservices",
      "Reduksi bug production sebesar 45% dengan unit testing komprehensif",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
  },
  {
    period: "2022 — 2023",
    role: "Frontend Developer",
    company: "Startup XYZ (Remote)",
    type: "Contract",
    description:
      "Membangun interface dashboard analytics dan sistem design yang reusable. Berkolaborasi erat dengan tim desain dan product.",
    achievements: [
      "Membangun design system dari nol, digunakan 4 produk",
      "Meningkatkan Lighthouse score dari 62 ke 96",
      "Mengimplementasikan CI/CD pipeline yang mengurangi deploy time 80%",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Storybook", "Vercel"],
  },
  {
    period: "2021 — 2022",
    role: "Web Developer Intern",
    company: "Agensi Kreatif ABC",
    type: "Magang",
    description:
      "Mengembangkan website untuk klien dari berbagai industri. Pertama kali terjun ke lingkungan produksi nyata.",
    achievements: [
      "Menyelesaikan 8 project klien secara mandiri",
      "Meningkatkan trafik web klien rata-rata sebesar 30%",
      "Diangkat jadi full-time sebelum masa magang selesai",
    ],
    stack: ["HTML/CSS", "JavaScript", "WordPress", "PHP", "MySQL"],
  },
];

const education = [
  {
    year: "2018 — 2022",
    degree: "S1 Teknik Informatika",
    institution: "Universitas Indonesia",
    gpa: "IPK 3.78",
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <section id="experience" className="py-32 px-6 max-w-5xl mx-auto" ref={ref}>
      {/* Section label */}
      <div className="reveal flex items-center gap-4 mb-16">
        <span className="font-mono text-xs text-[#4F8EF7] tracking-widest uppercase">
          03 / pengalaman
        </span>
        <div className="flex-1 h-px bg-[#1a1a1a]" />
      </div>

      <div className="reveal mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0F0F0] leading-tight">
          Perjalanan karir
          <br />
          <span className="text-[#333333]">yang membentuk saya.</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-[180px] top-0 bottom-0 w-px bg-[#1a1a1a]" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div
              key={exp.role}
              className="reveal relative grid md:grid-cols-[180px_1fr] gap-6 md:gap-12"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Period */}
              <div className="md:text-right">
                <span className="font-mono text-xs text-[#444444] block">
                  {exp.period}
                </span>
                <span
                  className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-mono ${
                    exp.type === "Full-time"
                      ? "text-green-400 bg-green-400/10"
                      : exp.type === "Contract"
                      ? "text-yellow-400 bg-yellow-400/10"
                      : "text-[#4F8EF7] bg-[#4F8EF7]/10"
                  }`}
                >
                  {exp.type}
                </span>
              </div>

              {/* Dot */}
              <div className="absolute left-0 md:left-[180px] top-1 w-2 h-2 rounded-full bg-[#1a1a1a] border border-[#333] -translate-x-1/2 mt-0.5" />

              {/* Content */}
              <div className="md:pl-8">
                <h3 className="font-display text-lg font-semibold text-[#F0F0F0] mb-1">
                  {exp.role}
                </h3>
                <p className="font-mono text-sm text-[#4F8EF7] mb-3">
                  {exp.company}
                </p>
                <p className="text-[#666666] text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((ach) => (
                    <li
                      key={ach}
                      className="flex gap-2 text-sm text-[#555555]"
                    >
                      <span className="text-[#4F8EF7] mt-0.5 flex-shrink-0">
                        ↳
                      </span>
                      {ach}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="reveal mt-20 pt-12 border-t border-[#1a1a1a]">
        <h3 className="font-mono text-xs text-[#444444] uppercase tracking-widest mb-8">
          Pendidikan
        </h3>
        {education.map((edu) => (
          <div key={edu.degree} className="flex items-start justify-between">
            <div>
              <h4 className="font-display font-semibold text-[#F0F0F0]">
                {edu.degree}
              </h4>
              <p className="text-[#666666] text-sm mt-1">{edu.institution}</p>
            </div>
            <div className="text-right">
              <span className="font-mono text-xs text-[#444444]">
                {edu.year}
              </span>
              <span className="block font-mono text-xs text-[#4F8EF7] mt-1">
                {edu.gpa}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    number: "01",
    title: "E-Commerce Platform",
    description:
      "Platform belanja online full-stack dengan real-time inventory, payment gateway Midtrans, dan dashboard analytics. Menangani 10,000+ transaksi per bulan.",
    role: "Full Stack Developer",
    challenge:
      "Optimasi performa query database yang memburuk dengan skala data besar.",
    result: "Meningkatkan konversi sebesar 35% dan mengurangi load time 60%.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Redis", "Midtrans"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    number: "02",
    title: "SaaS Dashboard Analytics",
    description:
      "Dashboard analytics real-time untuk memantau KPI bisnis dengan visualisasi data interaktif dan laporan otomatis.",
    role: "Frontend Engineer",
    challenge: "Menampilkan ribuan data points tanpa mengorbankan performa UI.",
    result: "Reduksi waktu pengambilan keputusan tim klien sebesar 40%.",
    stack: ["React", "TypeScript", "Chart.js", "Node.js", "WebSocket"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    number: "03",
    title: "Mobile REST API Service",
    description:
      "Backend service untuk aplikasi mobile dengan autentikasi JWT, rate limiting, dan dokumentasi API otomatis.",
    role: "Backend Developer",
    challenge: "Merancang arsitektur yang mampu menangani concurrent users tinggi.",
    result: "Mendukung 50,000+ active users dengan uptime 99.9%.",
    stack: ["Express.js", "MongoDB", "JWT", "Docker", "AWS EC2"],
    link: "#",
    github: "#",
    featured: false,
  },
];

const testimonials = [
  {
    quote:
      "Kualitas kerja yang luar biasa. Website kami sekarang jauh lebih cepat dan konversi meningkat signifikan. Sangat profesional dan komunikatif.",
    name: "Budi Santoso",
    role: "CEO, TechStartup ID",
    avatar: "BS",
  },
  {
    quote:
      "Delivered tepat waktu dengan kualitas yang melampaui ekspektasi. Saya akan kembali menggunakan jasanya untuk proyek berikutnya.",
    name: "Sarah Wijaya",
    role: "Product Manager, DigiCo",
    avatar: "SW",
  },
  {
    quote:
      "Memahami kebutuhan bisnis dengan baik, bukan sekadar developer teknis. Solusi yang diberikan sangat tepat sasaran.",
    name: "Ahmad Rizki",
    role: "Founder, StartupKu",
    avatar: "AR",
  },
];

export default function Projects() {
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
    <section id="projects" className="py-32 px-6 max-w-5xl mx-auto" ref={ref}>
      {/* Section label */}
      <div className="reveal flex items-center gap-4 mb-16">
        <span className="font-mono text-xs text-[#4F8EF7] tracking-widest uppercase">
          02 / proyek
        </span>
        <div className="flex-1 h-px bg-[#1a1a1a]" />
      </div>

      <div className="reveal mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0F0F0] leading-tight">
          Proyek terpilih
          <br />
          <span className="text-[#333333]">yang sudah dibangun.</span>
        </h2>
      </div>

      {/* Projects list */}
      <div className="space-y-6 mb-24">
        {projects.map((project, i) => (
          <div
            key={project.number}
            className="reveal project-card rounded-2xl p-8 bg-[#050505]"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="font-mono text-xs text-[#333333]">
                {project.number}
              </span>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="font-mono text-xs text-[#555555] hover:text-[#4F8EF7] transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href={project.link}
                  className="font-mono text-xs text-[#555555] hover:text-[#4F8EF7] transition-colors"
                >
                  Live ↗
                </a>
              </div>
            </div>

            <h3 className="font-display text-xl md:text-2xl font-semibold text-[#F0F0F0] mb-3">
              {project.title}
            </h3>
            <p className="text-[#666666] leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Meta grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
              <div>
                <span className="block font-mono text-xs text-[#333333] uppercase tracking-wider mb-1">
                  Peran
                </span>
                <span className="text-[#888888]">{project.role}</span>
              </div>
              <div>
                <span className="block font-mono text-xs text-[#333333] uppercase tracking-wider mb-1">
                  Tantangan
                </span>
                <span className="text-[#888888]">{project.challenge}</span>
              </div>
              <div>
                <span className="block font-mono text-xs text-[#333333] uppercase tracking-wider mb-1">
                  Hasil
                </span>
                <span className="text-[#4F8EF7] font-medium">{project.result}</span>
              </div>
            </div>

            {/* Stack */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="reveal mb-8">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-[#4F8EF7] tracking-widest uppercase">
            Testimoni
          </span>
          <div className="flex-1 h-px bg-[#1a1a1a]" />
        </div>
        <h3 className="font-display text-3xl font-bold text-[#F0F0F0] mb-12">
          Kata mereka.
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="reveal card rounded-2xl p-6 bg-[#050505]"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="text-[#4F8EF7] text-2xl font-display mb-4">"</div>
            <p className="text-[#666666] text-sm leading-relaxed mb-6">
              {t.quote}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center font-mono text-xs text-[#4F8EF7]">
                {t.avatar}
              </div>
              <div>
                <div className="text-sm font-semibold text-[#888888]">
                  {t.name}
                </div>
                <div className="text-xs text-[#444444] font-mono">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

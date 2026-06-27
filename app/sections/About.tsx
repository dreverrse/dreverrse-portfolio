"use client";
import { useEffect, useRef } from "react";

const skills = [
  { name: "React / Next.js", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "Node.js / Express", level: 85 },
  { name: "PostgreSQL / Prisma", level: 80 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Docker / DevOps", level: 72 },
];

const tools = [
  "VS Code", "Git", "Figma", "Vercel", "Railway",
  "Supabase", "Redis", "AWS", "Linux", "Postman",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Animate skill bars
            const bars = entry.target.querySelectorAll<HTMLElement>(".skill-bar-fill");
            bars.forEach((bar) => {
              bar.style.transform = `scaleX(1)`;
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto" ref={ref}>
      {/* Section label */}
      <div className="reveal flex items-center gap-4 mb-16">
        <span className="font-mono text-xs text-[#4F8EF7] tracking-widest uppercase">
          01 / tentang saya
        </span>
        <div className="flex-1 h-px bg-[#1a1a1a]" />
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Bio */}
        <div className="reveal">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0F0F0] leading-tight mb-8">
            Crafting digital
            <br />
            <span className="text-[#4F8EF7]">experiences</span>
            <br />
            that matter.
          </h2>
          <div className="space-y-4 text-[#666666] leading-relaxed">
            <p>
              Saya adalah Full Stack Developer dengan pengalaman 3+ tahun
              membangun aplikasi web yang scalable dan performan. Passion saya
              terletak pada intersection antara teknik yang solid dan desain
              yang elegan.
            </p>
            <p>
              Berawal dari rasa penasaran terhadap bagaimana internet bekerja,
              kini saya merancang dan membangun produk digital dari nol hingga
              production. Saya percaya kode yang baik adalah seni — terstruktur,
              dapat dibaca, dan efisien.
            </p>
            <p>
              Di luar koding, saya aktif berkontribusi ke open-source dan
              berbagi pengetahuan melalui artikel teknis.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            {[
              { value: "3+", label: "Tahun Exp." },
              { value: "20+", label: "Proyek Selesai" },
              { value: "15+", label: "Klien Puas" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-[#1a1a1a] rounded-xl p-4 text-center"
              >
                <div className="font-display text-2xl font-bold text-[#4F8EF7]">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-[#555555] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="reveal space-y-8">
          <div>
            <h3 className="font-display font-semibold text-sm text-[#888888] uppercase tracking-widest mb-6">
              Keahlian Utama
            </h3>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm text-[#888888]">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-[#4F8EF7]">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-bar rounded-full">
                    <div
                      className="skill-bar-fill rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        transform: "scaleX(0)",
                        transitionDelay: `${skills.indexOf(skill) * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-display font-semibold text-sm text-[#888888] uppercase tracking-widest mb-4">
              Tools & Teknologi
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

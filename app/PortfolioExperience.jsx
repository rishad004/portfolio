"use client";

import { useEffect } from "react";
import AOS from "aos";

const skills = [
  ["Languages", "text-[var(--neon-cyan)]", "hover:border-t-[var(--neon-cyan)]", ["Golang", "Node.js", "C"]],
  ["Frameworks", "text-[var(--neon-pink)]", "hover:border-t-[var(--neon-pink)]", ["Gin", "Gorilla Mux", "Express.js"]],
  ["Architecture", "text-[var(--neon-green)]", "hover:border-t-[var(--neon-green)]", ["Microservices", "Clean Architecture", "DDD", "MVC"]],
  ["Concurrency", "text-white", "hover:border-t-white", ["Goroutines", "Channels", "Concurrency Patterns"]],
  ["Databases", "text-[var(--neon-cyan)]", "hover:border-t-[var(--neon-cyan)]", ["PostgreSQL", "MongoDB", "Redis caching"]],
  ["Inter-Service Comm", "text-[var(--neon-pink)]", "hover:border-t-[var(--neon-pink)]", ["gRPC", "Kafka", "REST", "WebSocket", "RTMP"]],
  ["DevOps & Cloud", "text-[var(--neon-green)]", "hover:border-t-[var(--neon-green)]", ["Docker", "Kubernetes GKE", "AWS EC2", "NGINX", "GitHub Actions CI/CD"]],
  ["Testing", "text-white", "hover:border-t-white", ["Unit Testing", "TDD", "Postman"]],
  ["Version Control", "text-[var(--neon-cyan)]", "hover:border-t-[var(--neon-cyan)]", ["Git", "GitHub"]],
  ["Front-End", "text-[var(--neon-pink)]", "hover:border-t-[var(--neon-pink)]", ["HTML", "CSS"]]
];

const projects = [
  {
    name: "GamerVision",
    href: "https://github.com/rishad004/project-gv",
    type: "Live Streaming Platform",
    color: "cyan",
    description:
      "Developed a game streaming platform using Golang with a microservices architecture. Implemented user registration, subscriptions, streaming, and paid superchat.",
    tech: ["Golang", "gRPC", "K8s", "PostgreSQL"]
  },
  {
    name: "Byecom",
    href: "https://github.com/rishad004/My-Ecommerce",
    type: "E-commerce",
    color: "pink",
    description:
      "Built a monolithic back-end e-commerce application using Golang and PostgreSQL. Implemented product catalog, shopping cart, order processing, and payment integration. Containerized with Docker and deployed on Kubernetes.",
    tech: ["Golang", "PostgreSQL", "Docker"]
  }
];

const contacts = [
  {
    label: "Email Server",
    href: "mailto:rishadpullissery@gmail.com",
    hover: "hover:bg-[var(--neon-cyan)] hover:text-black hover:shadow-[0_0_15px_var(--neon-cyan)]",
    icon: "mail"
  },
  {
    label: "Voice Comms",
    href: "tel:+917902903790",
    hover: "hover:bg-[var(--neon-pink)] hover:text-black hover:shadow-[0_0_15px_var(--neon-pink)]",
    icon: "phone"
  },
  {
    label: "GitHub",
    href: "https://github.com/rishad004",
    hover: "hover:bg-[var(--neon-green)] hover:text-black hover:shadow-[0_0_15px_var(--neon-green)]",
    icon: "github"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammed-rishad-a43a132aa/",
    hover: "hover:bg-[#0077b5] hover:text-white hover:shadow-[0_0_15px_rgba(0,119,181,0.8)]",
    icon: "linkedin"
  }
];

function ContactIcon({ icon }) {
  if (icon === "github") {
    return (
      <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    );
  }

  const path =
    icon === "mail"
      ? "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      : "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z";

  return (
    <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path} />
    </svg>
  );
}

export default function PortfolioExperience() {
  useEffect(() => {
    AOS.init({ once: false, mirror: true, offset: 100 });

    const intervalId = window.setInterval(() => {
      const fpsElement = document.getElementById("fps");
      const pingElement = document.getElementById("ping");

      if (fpsElement) fpsElement.innerText = String(Math.floor(Math.random() * 10) + 135);
      if (pingElement) pingElement.innerText = String(Math.floor(Math.random() * 8) + 8);
    }, 800);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="scanlines" />

      <nav className="pointer-events-none fixed top-0 z-50 flex w-full items-start justify-between p-6" data-aos="fade-down" data-aos-duration="1000" aria-label="Status">
        <div className="glass-panel pointer-events-auto flex items-center gap-4 rounded-lg border-l-4 border-l-[var(--neon-green)] p-3 shadow-lg transition-transform hover:scale-105">
          <div>
            <div className="mb-1 text-xs font-bold text-[var(--neon-green)]">HP [||||||||||] 100%</div>
            <div className="text-[10px] text-slate-400">Lvl 24 &bull; Sr. Backend Dev</div>
          </div>
        </div>

        <div className="glass-panel pointer-events-auto rounded-lg border-r-4 border-r-[var(--neon-cyan)] p-3 text-right shadow-lg transition-transform hover:scale-105">
          <div className="mb-1 text-xs font-bold text-[var(--neon-cyan)]">FPS: <span id="fps">144</span></div>
          <div className="text-xs text-slate-400">PING: <span id="ping">12</span>ms</div>
        </div>
      </nav>

      <main>
        <section className="relative flex min-h-screen flex-col items-center justify-center pt-20">
          <div className="bg-grid absolute inset-0 z-[-1]" />
          <div className="absolute left-1/2 top-1/2 z-[-1] h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[var(--neon-cyan)] opacity-10 blur-[150px]" />

          <div className="hero-content z-10 max-w-4xl px-6 text-center">
            <div className="glass-panel mb-6 inline-block rounded-full border-[var(--neon-cyan)] px-4 py-1 text-xs uppercase tracking-widest text-[var(--neon-cyan)]">
              <span className="typing-effect">&gt; Player 1 Connected_</span>
            </div>

            <h1 className="hero-title mb-4 text-5xl font-black uppercase tracking-tight text-white md:text-8xl" data-aos="zoom-in" data-aos-duration="1000">
              Muhammed Rishad
            </h1>

            <p className="game-font mb-6 text-xl text-slate-400" data-aos="fade-up" data-aos-delay="300">Senior Back-End Developer</p>
            <p className="mx-auto mb-10 max-w-2xl text-base leading-8 text-slate-500 md:text-lg" data-aos="fade-up" data-aos-delay="450">
              Back-end developer with 3+ years of experience building scalable APIs and high-performance systems in Go and Node.js. Proven track record across freelance and full-time roles delivering production-grade features, clean architecture, and efficient concurrent logic.
            </p>

            <a href="#career" data-aos="fade-up" data-aos-delay="600" className="group pointer-events-auto relative inline-flex">
              <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-[#00f3ff] to-[#ff00ea] opacity-70 blur-lg transition-all duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200" />
              <span className="game-font relative inline-flex items-center justify-center rounded-lg border border-slate-800 bg-slate-950 px-8 py-4 text-lg font-bold text-white transition-all duration-200">
                START JOURNEY
              </span>
            </a>

            <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm font-bold text-slate-500" data-aos="fade-in" data-aos-delay="1000">
              <span className="flex items-center gap-2 transition-colors hover:text-white"><span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />Malappuram, Kerala</span>
              <span className="flex items-center gap-2 transition-colors hover:text-white"><span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />Golang &amp; Node.js</span>
            </div>
          </div>
        </section>

        <section id="career" className="relative z-10 bg-[#0a0a0a] py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-16 flex items-center gap-4 text-3xl text-white" data-aos="fade-right"><span className="text-[var(--neon-pink)]">01.</span> CAREER HIGHWAY</h2>
            <div className="relative ml-3 space-y-12 border-l border-slate-700 md:ml-6">
              <article className="group relative pl-8 md:pl-12" data-aos="fade-up" data-aos-delay="100">
                <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-slate-700 transition-all group-hover:bg-[var(--neon-cyan)] group-hover:shadow-[0_0_10px_var(--neon-cyan)]" />
                <div className="mb-1 text-sm font-bold text-[var(--neon-cyan)]">Nov 2022 - Aug 2024</div>
                <h3 className="game-font mb-2 text-xl font-bold text-white">Freelance <span className="text-sm font-normal text-slate-500">| Backend Developer</span></h3>
                <p className="text-sm leading-relaxed text-slate-400">-&gt; Delivered multiple client projects using Go with the Gin framework, focusing on REST API design and performance.</p>
                <p className="text-sm leading-relaxed text-slate-400">-&gt; Managed end-to-end development and delivery workflows.</p>
                <p className="text-sm leading-relaxed text-slate-400">-&gt; Worked directly with clients to gather requirements, iterate rapidly, and deliver maintainable codebases.</p>
              </article>

              <article className="group relative pl-8 md:pl-12" data-aos="fade-up" data-aos-delay="300">
                <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-slate-700 transition-all group-hover:bg-[var(--neon-pink)] group-hover:shadow-[0_0_10px_var(--neon-pink)]" />
                <div className="mb-1 text-sm font-bold text-[var(--neon-pink)]">May 2025 - Present</div>
                <h3 className="game-font mb-2 text-xl font-bold text-white">KONCPT AI <span className="text-sm font-normal text-slate-500">| Sr. Backend Developer</span></h3>
                <p className="text-sm leading-relaxed text-slate-400">-&gt; Developing and maintaining high-performance back-end services using Go and PostgreSQL in a fast-paced AI product environment.</p>
                <p className="text-sm leading-relaxed text-slate-400">-&gt; Designing APIs to support AI-driven features across the platform.</p>
                <p className="text-sm leading-relaxed text-slate-400">-&gt; Collaborating cross-functionally to ship reliable, production-ready features with measurable performance improvements.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="relative z-10 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-16 flex items-center gap-4 text-3xl text-white" data-aos="fade-right"><span className="text-[var(--neon-green)]">02.</span> LOADOUT (SKILLS)</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {skills.map(([title, color, border, items], index) => (
                <article key={title} className={`glass-panel rounded-xl border-t-2 border-t-slate-700 p-6 transition-colors ${border} ${index % 2 ? "animate-float-delayed" : "animate-float"}`} data-aos="zoom-in" data-aos-delay={`${(index % 4) * 100 + 100}`}>
                  <h3 className={`mb-4 text-sm font-bold uppercase tracking-wider ${color}`}>{title}</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {items.map((item) => <li key={item} className="flex items-center gap-2">&gt; {item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 bg-[#0a0a0a] py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-16 flex items-center gap-4 text-3xl text-white" data-aos="fade-right"><span className="text-[var(--neon-cyan)]">03.</span> METROPOLIS (PROJECTS)</h2>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-500" data-aos="fade-in">Major Builds</h3>
            <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
              {projects.map((project, index) => {
                const isCyan = project.color === "cyan";
                return (
                  <a key={project.name} href={project.href} target="_blank" rel="noreferrer" className="block h-full" data-aos="fade-up" data-aos-delay={`${index * 200 + 100}`}>
                    <article className={`glass-panel h-full cursor-pointer rounded-2xl p-8 transition-all hover:-translate-y-2 ${isCyan ? "glow-border-cyan" : "glow-border-pink"}`}>
                      <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                        <h4 className={`game-font text-2xl font-bold text-white ${isCyan ? "group-hover:text-[var(--neon-cyan)]" : "group-hover:text-[var(--neon-pink)]"}`}>{project.name}</h4>
                        <span className={`rounded px-2 py-1 text-xs ${isCyan ? "bg-[var(--neon-cyan)]/10 text-[var(--neon-cyan)]" : "bg-[var(--neon-pink)]/10 text-[var(--neon-pink)]"}`}>{project.type}</span>
                      </div>
                      <p className="mb-6 text-sm leading-relaxed text-slate-400">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => <span key={tech} className="rounded-full border px-3 py-1 text-xs">{tech}</span>)}
                      </div>
                    </article>
                  </a>
                );
              })}
            </div>

            <h3 className="mb-6 mt-16 text-sm font-bold uppercase tracking-widest text-slate-500" data-aos="fade-in">Sub-routines (Mini Projects)</h3>
            <div className="grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
              <article className="glass-panel rounded-xl p-6 transition-colors hover:-translate-y-1 hover:bg-slate-800/50" data-aos="fade-up" data-aos-delay="100">
                <h4 className="mb-2 text-lg font-bold text-white">Learning Platform</h4>
                <p className="mb-4 text-xs text-slate-400">Microservices architecture with four core services: user, institute, enrollment, and payment, communicating via gRPC.</p>
              </article>
              <article className="glass-panel rounded-xl p-6 transition-colors hover:-translate-y-1 hover:bg-slate-800/50" data-aos="fade-up" data-aos-delay="200">
                <h4 className="mb-2 text-lg font-bold text-white">Drive Manager</h4>
                <p className="mb-4 text-xs text-slate-400">Google Drive tool with OAuth2 auth; uses goroutines for concurrent file uploads, reducing upload times significantly.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="relative z-10 border-t border-slate-800 py-32">
          <div className="absolute inset-0 z-[-1] bg-[var(--neon-cyan)] opacity-[0.02]" />
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <h2 className="game-font mb-6 text-4xl uppercase text-white" data-aos="zoom-in">Initiate Co-op</h2>
            <p className="mb-12 text-slate-400" data-aos="fade-up" data-aos-delay="200">Server connection open. Waiting for player 2 input.</p>
            <div className="flex w-full flex-wrap justify-center gap-3 md:gap-4">
              {contacts.map((contact, index) => (
                <a key={contact.label} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined} data-aos="fade-up" data-aos-delay={`${index * 100 + 400}`} className={`glass-panel flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 px-4 py-4 text-xs uppercase tracking-widest text-white transition-all hover:font-bold sm:w-auto md:text-sm lg:px-6 ${contact.hover}`}>
                  <ContactIcon icon={contact.icon} />
                  {contact.label}
                </a>
              ))}
            </div>
            <div className="mt-16 flex items-center justify-center gap-2 text-xs text-slate-600" data-aos="fade-in" data-aos-delay="800">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[var(--neon-green)]" />
              SYSTEM STATUS: ONLINE
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

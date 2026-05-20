import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Shield,
  Mail,
  ExternalLink,
  FileText,
  Award,
  FolderGit2,
  BookOpen,
  Search,
  Menu,
  X,
  Cpu,
  Code2,
  ChevronRight,
} from "lucide-react";

/*
  HOW TO UPDATE THIS PORTFOLIO
  1. Edit the personalInfo object.
  2. Add/remove projects inside the projects array.
  3. Add/remove certificates inside the certificates array.
  4. Add/remove writeups inside the writeups array.
  5. Edit skills inside the skillGroups array.

  This file is designed to be easy to maintain.
*/

const personalInfo = {
  name: "Hasif Aidil",
  role: "Cybersecurity Student",
  tagline: "2nd Year Computer Science (Cyber Security) (Hons.) | Tahfiz (T13) Student | UNITEN | TESP MARA Scholar | Penetration Testing & Cloud Security Enthusiast | Aspiring Security Engineer",
  summary:
    "I am a dedicated Cyber Security student at UNITEN with a 3.76 CGPA, combining strong academic performance with practical experience in Penetration Testing, OSINT, and CTF competitions.",
  location: "Malaysia",
  email: "hasifaidil05@gmail.com",
  github: "https://github.com/deayl",
  linkedin: "https://www.linkedin.com/in/hasif-aidil/",
  resumeUrl: "#",
  profileImage: "https://media.licdn.com/dms/image/v2/D5603AQHGhRISZwHmQg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731777004596?e=1781136000&v=beta&t=k7edSDpVDaYLoqODpePsT4Tn5T-YRMNZH2qjEoJ4Vxw",
};

const stats = [
  { label: "Focus Area", value: "Red Team" },
  { label: "Degree", value: "Cybersecurity" },
  { label: "CTF Handle", value: "n0vu5" },
  { label: "Current Goal", value: "Internship" },
];

const skillGroups = [
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: [
      "Penetration Testing",
      "Web App Security",
      "Digital Forensics",
      "Network Security",
      "Cryptography Basics",
      "Steganography",
      "Threat Analysis",
      "Secure Coding",
    ],
  },
  {
    title: "Tools",
    icon: Terminal,
    skills: [
      "Kali Linux",
      "Burp Suite",
      "Wireshark",
      "Nmap",
      "Metasploit",
      "Ghidra",
      "Autopsy",
      "Docker",
      "GitHub",
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: [
      "Python",
      "C++",
      "PHP",
      "JavaScript",
      "SQL",
      "Bash",
      "C#",
      ".NET MAUI",
    ],
  },
];

const projects = [
  {
    title: "Found@Campus",
    type: "Mobile App",
    description:
      "A UNITEN lost-and-found mobile app built using .NET MAUI. Students can post lost or found items, manage posts, verify claims, and track resolved cases.",
    tech: [".NET MAUI", "C#", "Firebase", "XAML", "JSON"],
    highlights: [
      "User-friendly lost/found item posting flow",
      "Claim verification concept for item ownership",
      "Responsive mobile UI with reusable components",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "NATTO Turf Booking System",
    type: "Web System",
    description:
      "A turf booking slot system with user authentication, admin slot management, booking records, and CRUD functionality.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    highlights: [
      "Admin dashboard for managing slots",
      "User booking flow with database records",
      "Session-based authentication",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "DCT Steganography Lab",
    type: "Security Lab",
    description:
      "A Python lab that demonstrates image watermarking and data hiding using Discrete Cosine Transform concepts.",
    tech: ["Python", "OpenCV", "NumPy", "DCT", "BMP Images"],
    highlights: [
      "Hide and extract messages from image data",
      "Understand visual quality vs robustness",
      "Experiment with steganography limitations",
    ],
    github: "#",
    demo: "#",
  },
];

const certificates = [
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco / Course Provider",
    date: "2026",
    link: "#",
  },
  {
    title: "TryHackMe Pre Security",
    issuer: "TryHackMe",
    date: "Ongoing",
    link: "#",
  },
  {
    title: "Google Cybersecurity Certificate",
    issuer: "Google",
    date: "Planned",
    link: "#",
  },
];

const writeups = [
  {
    title: "Hashing vs Encryption vs MAC",
    category: "Cryptography",
    description:
      "A beginner-friendly explanation of the difference between hashing, encryption, and message authentication codes.",
    link: "#",
  },
  {
    title: "My First picoCTF Forensics Challenge",
    category: "Forensics",
    description:
      "A simple writeup showing how I approached a file analysis challenge using basic Linux commands and forensic thinking.",
    link: "#",
  },
  {
    title: "Basic SQL Injection Prevention in PHP",
    category: "Web Security",
    description:
      "A practical guide on why SQL injection happens and how prepared statements help prevent it.",
    link: "#",
  },
];

const navItems = [
  "About",
  "Skills",
  "Projects",
  "Writeups",
  "Certificates",
  "Contact",
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 font-mono text-sm uppercase tracking-[0.35em] text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

function TerminalWindow() {
  const commands = [
    "$ whoami",
    "hasif_aidil // cybersecurity_student",
    "$ cat focus.txt",
    "red_team | cloud_security | web_security | secure_code",
    "$ ./mission.sh",
    "building practical skills through labs, projects, and CTFs...",
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-950/90 shadow-2xl shadow-emerald-950/30 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <span className="ml-3 font-mono text-xs text-slate-400">
          hasifaidil@portfolio:~/security
        </span>
      </div>

      <div className="space-y-3 p-5 font-mono text-sm text-slate-300 sm:p-6">
        {commands.map((line, index) => (
          <motion.p
            key={line + index}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.12 }}
            className={
              line.startsWith("$") ? "text-emerald-400" : "text-slate-300"
            }
          >
            {line}
          </motion.p>
        ))}
        <span className="inline-block h-5 w-2 animate-pulse bg-emerald-400 align-middle" />
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-emerald-400/30 bg-emerald-400/10">
            <Terminal className="h-5 w-5 text-emerald-400" />
          </div>
          <span className="font-mono text-sm font-semibold text-white">
            n0vu5
          </span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm text-slate-300 transition hover:text-emerald-400"
            >
              {item}
            </button>
          ))}
        </div>

        <a
          href={personalInfo.resumeUrl}
          className="hidden rounded-xl border border-emerald-400/40 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-400/10 md:inline-flex"
        >
          Resume
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 p-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="rounded-xl px-3 py-2 text-left text-sm text-slate-300 hover:bg-white/5 hover:text-emerald-400"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 font-mono text-xs text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for cybersecurity internship
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            {personalInfo.name}
            <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-500 bg-clip-text text-transparent">
              {personalInfo.role}
            </span>
          </h1>

          <p className="mt-5 max-w-2xl font-mono text-base text-emerald-300 sm:text-lg">
            {personalInfo.tagline}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {personalInfo.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              View Projects <ChevronRight className="h-5 w-5" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <FileText className="h-5 w-5" /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={personalInfo.github}
              className="text-slate-400 transition hover:text-emerald-400"
              aria-label="GitHub"
            >
              <span className="font-mono text-sm">GH</span>
            </a>

            <a
              href={personalInfo.linkedin}
              className="text-slate-400 transition hover:text-emerald-400"
              aria-label="LinkedIn"
            >
              <span className="font-mono text-sm">IN</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 transition hover:text-emerald-400"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <TerminalWindow />
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20">
            <p className="font-mono text-sm text-emerald-400">/about_me</p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Built for practical security learning.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              My goal is to become strong in offensive security while still
              understanding how to build secure systems. I focus on hands-on
              learning: CTFs, labs, web security projects, mobile app
              development, and technical writeups.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
              >
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-2 font-mono text-xl font-bold text-emerald-300">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="/skills"
          title="Technical toolkit"
          description="A clear snapshot of the cybersecurity, tool, and programming skills I am building."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-400/30 hover:bg-emerald-400/[0.04]"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-400/10">
                    <Icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const q = query.toLowerCase();

    return projects.filter((project) =>
      [project.title, project.type, project.description, ...project.tech]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="/projects"
          title="Security & software projects"
          description="Projects are written like mini case studies so recruiters can understand what was built, what tools were used, and what skills were demonstrated."
        />

        <div className="mx-auto mb-8 flex max-w-xl items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3">
          <Search className="h-5 w-5 text-slate-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, tools, or topics..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/[0.04]"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">
                    {project.type}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <FolderGit2 className="h-6 w-6 text-slate-500 group-hover:text-emerald-400" />
              </div>

              <p className="leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-950 px-3 py-1 text-xs text-emerald-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-5 space-y-2 text-sm text-slate-400">
                {project.highlights.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-3">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm text-slate-300 hover:text-emerald-400"
                >
                  <span className="font-mono text-xs">GH</span> Code
                </a>

                <a
                  href={project.demo}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm text-slate-300 hover:text-emerald-400"
                >
                  <ExternalLink className="h-4 w-4" /> Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Writeups() {
  return (
    <section id="writeups" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="/writeups"
          title="CTF notes & security writeups"
          description="A place to show how I think, how I solve problems, and how I explain technical ideas."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {writeups.map((post) => (
            <a
              key={post.title}
              href={post.link}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  {post.category}
                </span>
                <BookOpen className="h-5 w-5 text-slate-500" />
              </div>

              <h3 className="text-xl font-bold text-white">{post.title}</h3>

              <p className="mt-3 leading-7 text-slate-400">
                {post.description}
              </p>

              <p className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-emerald-400">
                read_writeup <ExternalLink className="h-4 w-4" />
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="/certificates"
          title="Certificates & learning progress"
          description="Use this section for completed certificates, ongoing courses, workshops, and training platforms."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {certificates.map((cert) => (
            <a
              key={cert.title}
              href={cert.link}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-400/30 hover:bg-emerald-400/[0.04]"
            >
              <Award className="mb-4 h-7 w-7 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">{cert.title}</h3>
              <p className="mt-2 text-slate-400">{cert.issuer}</p>
              <p className="mt-4 font-mono text-sm text-emerald-300">
                {cert.date}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 to-cyan-400/5 p-8 text-center shadow-2xl shadow-emerald-950/20 sm:p-12">
        <Cpu className="mx-auto mb-5 h-10 w-10 text-emerald-400" />

        <p className="font-mono text-sm uppercase tracking-[0.35em] text-emerald-400">
          /contact
        </p>

        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Let’s connect.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
          I am open to cybersecurity internships, project collaboration, CTF
          teams, and learning opportunities in red teaming, forensics, and
          secure development.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-300"
          >
            <Mail className="h-5 w-5" /> Email Me
          </a>

          <a
            href={personalInfo.github}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10"
          >
            <span className="font-mono text-sm">GH</span> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 text-center sm:px-6 lg:px-8">
      <p className="font-mono text-sm text-slate-500">
        © {new Date().getFullYear()} {personalInfo.name}. Built with a
        Linux-inspired security theme.
      </p>
    </footer>
  );
}

export default function CybersecurityPortfolio() {
  return (
    <main className="min-h-screen scroll-smooth bg-slate-950 text-slate-100 selection:bg-emerald-400 selection:text-slate-950">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Writeups />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
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

const personalInfo = {
  name: "Hasif Aidil",
  role: "Cybersecurity Student",
  tagline:
    "2nd Year Computer Science (Cyber Security) (Hons.) | Tahfiz (T13) Student | UNITEN | TESP MARA Scholar | Penetration Testing & Cloud Security Enthusiast | Aspiring Security Engineer",
  summary:
    "I am a dedicated Cyber Security student at UNITEN with a 3.76 CGPA, combining strong academic performance with practical experience in Penetration Testing, OSINT, and CTF competitions.",
  location: "Malaysia",
  email: "hasifaidil05@gmail.com",
  github: "https://github.com/deayl",
  linkedin: "https://www.linkedin.com/in/hasif-aidil/",
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  profileImage:
    "https://media.licdn.com/dms/image/v2/D5603AQHGhRISZwHmQg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731777004596?e=1781136000&v=beta&t=k7edSDpVDaYLoqODpePsT4Tn5T-YRMNZH2qjEoJ4Vxw",
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

const ctfCompetitions = [
  {
    id: "umcs-ctf-2026",
    year: "2026",
    title: "UMCS CTF 2026",
    badge: "Participant",
    description:
      "Participated in UMCS CTF 2026 and solved challenges across web exploitation, cryptography, forensics, and binary exploitation.",
    points: "Update points",
    rank: "Update rank",
    categories: [
      "Web Exploitation",
      "Cryptography",
      "Forensics",
      "Binary Exploitation",
    ],
    challenges: [
      {
        title: "Login Bypass",
        category: "Web Exploitation",
        points: "100 pts",
        description:
          "A web challenge focused on bypassing a weak login system through basic SQL injection testing.",
        solutionSteps: [
          {
            title: "Inspect the login form",
            description:
              "Checked how the login form sends username and password to the server.",
            code: `username=admin
password=test`,
          },
          {
            title: "Test SQL injection payload",
            description:
              "Tried a basic authentication bypass payload to check whether input was sanitized.",
            code: `' OR '1'='1`,
          },
          {
            title: "Confirm bypass",
            description:
              "The login accepted the payload, showing that the backend query was vulnerable.",
            code: `SELECT * FROM users
WHERE username = '$username'
AND password = '$password';`,
          },
        ],
        result: "Flag hidden for portfolio",
      },
      {
        title: "Hidden Metadata",
        category: "Forensics",
        points: "150 pts",
        description:
          "A forensic challenge where hidden information was stored inside image metadata.",
        solutionSteps: [
          {
            title: "Check file type",
            description:
              "Started by confirming the actual file type and whether it matched the extension.",
            code: `file challenge.jpg`,
          },
          {
            title: "Inspect metadata",
            description:
              "Used exiftool to list hidden metadata and comments inside the image.",
            code: `exiftool challenge.jpg`,
          },
          {
            title: "Search readable strings",
            description:
              "Used strings to search for readable hidden text inside the file.",
            code: `strings challenge.jpg | grep -i flag`,
          },
        ],
        result: "Flag hidden for portfolio",
      },
    ],
  },
  {
    id: "picoctf-2024",
    year: "2024",
    title: "PicoCTF 2024",
    badge: "Practice",
    description:
      "Solved beginner-to-intermediate challenges across Web, Crypto, Forensics, and Binary Exploitation categories.",
    points: "4,200 pts",
    rank: "Top 10%",
    categories: [
      "Web Exploitation",
      "Cryptography",
      "Forensics",
      "Binary Exploitation",
    ],
    challenges: [
      {
        title: "Buffer Overflow 2",
        category: "Binary Exploitation",
        points: "400 pts",
        description:
          "Stack buffer overflow with no canary. Overwrote return address to redirect execution to the win() function.",
        solutionSteps: [
          {
            title: "Find offset",
            description:
              "Used cyclic pattern to find the exact offset to the return address.",
            code: `from pwn import *

elf = ELF('./vuln')
offset = 112  # found using cyclic pattern`,
          },
          {
            title: "Find win function",
            description:
              "Located the address of the win() function from the binary symbol table.",
            code: `win_addr = elf.symbols['win']
print(hex(win_addr))`,
          },
          {
            title: "Build payload",
            description:
              "Created payload using padding plus the win() function address.",
            code: `payload = b'A' * offset
payload += p32(win_addr)

p = process('./vuln')
p.sendline(payload)
p.interactive()`,
          },
        ],
        result: "Flag hidden for portfolio",
      },
      {
        title: "RSA Breakout",
        category: "Cryptography",
        points: "300 pts",
        description:
          "RSA challenge requiring modular arithmetic, private key recovery, and ciphertext decryption.",
        solutionSteps: [
          {
            title: "Identify RSA values",
            description:
              "Started by identifying public key values n, e, and ciphertext c.",
            code: `n = 33
e = 7
c = 5`,
          },
          {
            title: "Calculate private key",
            description:
              "Factored n and calculated phi(n), then found d using modular inverse.",
            code: `p = 3
q = 11
phi = (p - 1) * (q - 1)

d = pow(e, -1, phi)`,
          },
          {
            title: "Decrypt message",
            description: "Used RSA decryption formula m = c^d mod n.",
            code: `m = pow(c, d, n)
print(m)`,
          },
        ],
        result: "Flag hidden for portfolio",
      },
    ],
  },
  {
    id: "practice-labs",
    year: "2025",
    title: "Practice Labs",
    badge: "Ongoing",
    description:
      "Ongoing cybersecurity practice through CTF-style labs, Linux exercises, web exploitation, crypto, and forensics.",
    points: "Learning",
    rank: "Ongoing",
    categories: ["Web Exploitation", "Cryptography", "Forensics"],
    challenges: [
      {
        title: "Basic File Analysis",
        category: "Forensics",
        points: "Practice",
        description:
          "A beginner forensic workflow for checking file type, metadata, strings, and embedded data.",
        solutionSteps: [
          {
            title: "Check file",
            description:
              "Used Linux file command to identify the real file type.",
            code: `file suspicious_file`,
          },
          {
            title: "Extract strings",
            description: "Searched for readable strings inside the file.",
            code: `strings suspicious_file`,
          },
          {
            title: "Check embedded files",
            description: "Used binwalk to look for embedded data.",
            code: `binwalk suspicious_file`,
          },
        ],
        result: "Learning note only",
      },
    ],
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

function CyberBackground() {
  const matrixLines = [
    "010101 110010 001101",
    "nmap -sV target.local",
    "sudo tcpdump -i eth0",
    "python3 exploit.py",
    "burpsuite proxy:8080",
    "hashcat -m 0 hashes.txt",
    "forensics crypto pwn web",
    "ssh root@target",
    "whoami && id",
    "scan complete",
    "CTF{redacted}",
    "payload generated",
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020807]">
      <style>
        {`
          @keyframes matrixDrop {
            0% {
              transform: translateY(-30%);
              opacity: 0;
            }
            15% {
              opacity: 0.38;
            }
            100% {
              transform: translateY(130%);
              opacity: 0;
            }
          }

          @keyframes scanLine {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(100vh);
            }
          }

          @keyframes heroGlow {
            0%, 100% {
              opacity: 0.35;
            }
            50% {
              opacity: 0.7;
            }
          }
        `}
      </style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_30%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.12),transparent_30%),linear-gradient(to_bottom,rgba(2,8,7,0.2),rgba(2,8,7,0.96))]" />

      <div className="absolute inset-0 hidden overflow-hidden lg:block">
        {matrixLines.map((line, index) => (
          <div
            key={index}
            className="absolute top-0 font-mono text-sm font-bold text-emerald-400/20"
            style={{
              left: `${index * 8 + 1}%`,
              animation: `matrixDrop ${12 + index * 1.2}s linear infinite`,
              animationDelay: `${index * 0.9}s`,
              writingMode: index % 2 === 0 ? "vertical-rl" : "horizontal-tb",
            }}
          >
            {line}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 opacity-25">
        <div className="absolute left-[5%] top-[35%] h-px w-[90%] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
        <div className="absolute left-[10%] top-[55%] h-px w-[70%] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        <div className="absolute left-[30%] top-[20%] h-[65%] w-px bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent" />
        <div className="absolute left-[78%] top-[10%] h-[75%] w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />

        <div className="absolute left-[12%] top-[55%] h-4 w-4 rounded-full bg-emerald-400/40 blur-sm" />
        <div className="absolute left-[50%] top-[60%] h-4 w-4 rounded-full bg-cyan-400/40 blur-sm" />
        <div className="absolute left-[78%] top-[22%] h-4 w-4 rounded-full bg-emerald-400/40 blur-sm" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

      <div
        className="absolute left-0 h-32 w-full bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent"
        style={{ animation: "scanLine 8s linear infinite" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,8,7,0.25)_0%,rgba(2,8,7,0.75)_55%,rgba(2,8,7,0.98)_100%)]" />

      <div
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl"
        style={{ animation: "heroGlow 6s ease-in-out infinite" }}
      />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "home", id: "home" },
    { label: "about", id: "about" },
    { label: "skills", id: "skills" },
    { label: "projects", id: "projects" },
    { label: "ctf", id: "ctf" },
    { label: "writeups", id: "writeups" },
    { label: "certificates", id: "certificates" },
    { label: "contact", id: "contact" },
  ];

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-400/10 bg-black/20 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          onClick={() => scrollTo("home")}
          className="group flex items-center gap-3 font-mono"
        >
          <span className="text-emerald-400">[</span>
          <span className="font-bold text-white transition group-hover:text-emerald-300">
            n0vu5@portfolio
          </span>
          <span className="text-emerald-400">]</span>
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`rounded-lg px-3 py-2 font-mono text-sm transition ${
                index === 0
                  ? "bg-emerald-400/20 text-emerald-300"
                  : "text-slate-400 hover:bg-white/5 hover:text-emerald-300"
              }`}
            >
              ~/{item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="rounded-xl px-3 py-2 text-left font-mono text-sm text-slate-300 hover:bg-white/5 hover:text-emerald-300"
              >
                ~/{item.label}
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
      className="relative flex min-h-screen items-center px-4 py-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]"
        >
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 font-mono text-sm text-emerald-300 shadow-lg shadow-emerald-950/30 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/70" />
              Available for cybersecurity internship
            </div>

            <p className="mb-3 text-xl font-semibold text-slate-400">
              Hello, World. I'm
            </p>

            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              {personalInfo.name}
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(16,185,129,0.35)]">
                {personalInfo.role}
              </span>
            </h1>

            <p className="mt-6 max-w-4xl font-mono text-base leading-8 text-emerald-200/90 sm:text-lg">
              {personalInfo.tagline}
            </p>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {personalInfo.summary}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-8 py-4 font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5"
              >
                View Projects <ChevronRight className="h-5 w-5" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-emerald-400/40 bg-black/30 px-8 py-4 font-bold text-emerald-300 backdrop-blur transition hover:-translate-y-0.5 hover:bg-emerald-400/10"
              >
                <FileText className="h-5 w-5" />
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5 font-mono text-sm text-slate-400">
              <a
                href={personalInfo.github}
                className="transition hover:text-emerald-400"
              >
                GH
              </a>

              <a
                href={personalInfo.linkedin}
                className="transition hover:text-emerald-400"
              >
                IN
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="transition hover:text-emerald-400"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-emerald-400/20 bg-black/60 shadow-2xl shadow-emerald-950/40 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/80 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <span className="font-mono text-xs text-slate-500">
                terminal — bash
              </span>
            </div>

            <div className="space-y-4 p-6 font-mono text-sm sm:text-base">
              <p>
                <span className="text-emerald-400">┌──(</span>
                <span className="text-cyan-300">n0vu5㉿kali</span>
                <span className="text-emerald-400">)-[</span>
                <span className="text-violet-300">~/portfolio</span>
                <span className="text-emerald-400">]</span>
              </p>

              <p>
                <span className="text-emerald-400">└─$</span>{" "}
                <span className="text-slate-200">whoami</span>
              </p>

              <p className="text-slate-300">
                hasif_aidil // cybersecurity_student
              </p>

              <p>
                <span className="text-emerald-400">└─$</span>{" "}
                <span className="text-slate-200">cat focus.txt</span>
              </p>

              <div className="space-y-2 text-emerald-300">
                <p>red_team | cloud_security | web_security | secure_code</p>
              </div>

              <p>
                <span className="text-emerald-400">└─$</span>{" "}
                <span className="text-slate-200">./mission.sh</span>
              </p>

              <p className="text-slate-300">
                building practical skills through labs, projects, and CTFs...
              </p>

              <span className="inline-block h-5 w-2 animate-pulse bg-emerald-400 align-middle" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 font-mono text-xs uppercase tracking-[0.4em] text-slate-600 md:block">
        scroll
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="/about_me"
          title="Who I am"
          description="A quick overview of my cybersecurity direction, learning style, and current technical focus."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-slate-900/60 p-8 shadow-2xl shadow-emerald-950/20 backdrop-blur">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 font-mono text-xs text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Practical security learner
              </div>

              <h2 className="max-w-xl text-3xl font-black leading-tight text-white sm:text-4xl">
                Building skills through labs, CTFs, and real projects.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                My goal is to become strong in offensive security while still
                understanding how to build secure systems. I focus on hands-on
                learning through CTF competitions, web security projects,
                mobile app development, technical writeups, and practical lab
                work.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                    Main Direction
                  </p>
                  <p className="mt-2 font-mono text-sm font-bold text-emerald-300">
                    Penetration Testing
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                    Learning Style
                  </p>
                  <p className="mt-2 font-mono text-sm font-bold text-emerald-300">
                    Build, break, document
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-400/[0.04]"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-emerald-400/5 blur-2xl transition group-hover:bg-emerald-400/10" />

                <div className="relative">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-xs text-slate-500">
                      0{index + 1}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/60" />
                  </div>

                  <p className="text-sm text-slate-400">{item.label}</p>

                  <p className="mt-3 font-mono text-2xl font-black text-emerald-300">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/70 p-5 font-mono text-sm text-slate-400 backdrop-blur">
          <span className="text-emerald-400">$</span> current_focus --red-team
          --cloud-security --web-security --ctf
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
                className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition hover:border-emerald-400/30 hover:bg-emerald-400/[0.04]"
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
          description="A collection of projects that show my ability to build systems, apply security concepts, and document technical work."
        />

        <div className="mb-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-emerald-400/20 bg-slate-900/60 p-6 backdrop-blur">
            <p className="font-mono text-sm text-emerald-400">
              $ ls ~/projects
            </p>
            <p className="mt-4 leading-7 text-slate-400">
              These projects are written like mini case studies. Each one shows
              the problem, tools used, technical highlights, and links to code
              or demo when available.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/70 px-5 py-4 backdrop-blur">
            <Search className="h-5 w-5 text-slate-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tools, or topics..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-3xl border p-6 backdrop-blur transition hover:-translate-y-1 ${
                index === 0
                  ? "border-emerald-400/40 bg-emerald-400/[0.04] shadow-2xl shadow-emerald-950/20"
                  : "border-white/10 bg-slate-900/60 hover:border-emerald-400/30 hover:bg-emerald-400/[0.04]"
              }`}
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-emerald-400/5 blur-3xl transition group-hover:bg-emerald-400/10" />

              <div className="relative">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-emerald-300">
                        {project.type}
                      </span>

                      {index === 0 && (
                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-mono text-xs text-cyan-300">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-black leading-tight text-white transition group-hover:text-emerald-300">
                      {project.title}
                    </h3>
                  </div>

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-slate-950/70">
                    <FolderGit2 className="h-5 w-5 text-slate-500 transition group-hover:text-emerald-400" />
                  </div>
                </div>

                <p className="min-h-[112px] leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6">
                  <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-500">
                    Tech Stack
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 font-mono text-xs text-emerald-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-500">
                    Key Highlights
                  </p>

                  <ul className="space-y-3 text-sm text-slate-400">
                    {project.highlights.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow shadow-emerald-400/60" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-300 transition hover:border-emerald-400/30 hover:text-emerald-400"
                  >
                    <span className="font-mono text-xs">GH</span> Code
                  </a>

                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-300 transition hover:border-emerald-400/30 hover:text-emerald-400"
                  >
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-center backdrop-blur">
            <p className="font-mono text-sm text-slate-400">
              No projects found. Try another keyword.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function CTF() {
  const [selectedCtfId, setSelectedCtfId] = useState(ctfCompetitions[0].id);
  const [activeCategory, setActiveCategory] = useState("All");

  const selectedCtf =
    ctfCompetitions.find((ctf) => ctf.id === selectedCtfId) ||
    ctfCompetitions[0];

  const categories = ["All", ...selectedCtf.categories];

  const filteredChallenges =
    activeCategory === "All"
      ? selectedCtf.challenges
      : selectedCtf.challenges.filter(
          (challenge) => challenge.category === activeCategory
        );

  const handleSelectCtf = (ctfId) => {
    setSelectedCtfId(ctfId);
    setActiveCategory("All");

    setTimeout(() => {
      document
        .getElementById("ctf-detail")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <section id="ctf" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="/ctf"
          title="CTF competitions & solutions"
          description="Click a CTF event to view its stats, categories, challenges, and structured solution writeups."
        />

        <div className="mb-16">
          <h3 className="mb-8 border-b border-white/10 pb-4 text-2xl font-bold text-white">
            CTF Competitions
          </h3>

          <div className="relative space-y-8 border-l border-emerald-400/30 pl-8">
            {ctfCompetitions.map((ctf) => {
              const isActive = ctf.id === selectedCtfId;

              return (
                <button
                  key={ctf.id}
                  onClick={() => handleSelectCtf(ctf.id)}
                  className={`relative w-full rounded-3xl border p-6 text-left backdrop-blur transition hover:-translate-y-1 ${
                    isActive
                      ? "border-emerald-400/80 bg-emerald-400/[0.04] shadow-lg shadow-emerald-950/30"
                      : "border-white/10 bg-slate-900/60 hover:border-emerald-400/30"
                  }`}
                >
                  <span
                    className={`absolute -left-[45px] top-7 h-5 w-5 rounded-full ${
                      isActive
                        ? "bg-emerald-400 shadow-lg shadow-emerald-400/60"
                        : "bg-slate-600"
                    }`}
                  />

                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-sm text-slate-500">
                      {ctf.year}
                    </span>

                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                      {ctf.badge}
                    </span>

                    {isActive && (
                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                        Selected
                      </span>
                    )}
                  </div>

                  <h4 className="text-2xl font-bold text-white">
                    {ctf.title}
                  </h4>

                  <p className="mt-3 leading-7 text-slate-400">
                    {ctf.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-6 font-mono text-sm">
                    <span className="text-emerald-400">
                      Points: {ctf.points}
                    </span>
                    <span className="text-cyan-300">Rank: {ctf.rank}</span>
                    <span className="text-slate-400">
                      Challenges: {ctf.challenges.length}
                    </span>
                  </div>

                  <p className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-emerald-400">
                    Open CTF Writeup <ChevronRight className="h-4 w-4" />
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div
          id="ctf-detail"
          className="overflow-hidden rounded-3xl border border-emerald-400/20 bg-slate-950/70 backdrop-blur"
        >
          <div className="border-b border-white/10 bg-gradient-to-br from-emerald-400/10 via-slate-950/80 to-cyan-400/5 p-6 sm:p-10">
            <p className="mb-4 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 font-mono text-xs uppercase tracking-[0.25em] text-emerald-300">
              CTF Writeup
            </p>

            <h3 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              {selectedCtf.title}
            </h3>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
              {selectedCtf.description}
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-4">
              <div>
                <p className="font-mono text-3xl font-bold text-emerald-400">
                  {selectedCtf.points}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-slate-500">
                  Points
                </p>
              </div>

              <div>
                <p className="font-mono text-3xl font-bold text-emerald-400">
                  {selectedCtf.challenges.length}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-slate-500">
                  Challenges
                </p>
              </div>

              <div>
                <p className="font-mono text-3xl font-bold text-emerald-400">
                  {selectedCtf.rank}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-slate-500">
                  Rank
                </p>
              </div>

              <div>
                <p className="font-mono text-3xl font-bold text-emerald-400">
                  {selectedCtf.categories.length}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-slate-500">
                  Categories
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <div className="mb-8 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 font-mono text-sm transition ${
                    activeCategory === category
                      ? "border-emerald-400 bg-emerald-400/10 text-emerald-300"
                      : "border-white/10 bg-slate-900/70 text-slate-400 hover:text-emerald-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="space-y-8">
              {filteredChallenges.map((challenge) => (
                <article
                  key={challenge.title}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70"
                >
                  <div className="p-6 sm:p-8">
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                      <span className="rounded-full border border-red-400/30 bg-red-400/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-red-300">
                        {challenge.category}
                      </span>

                      <span className="font-mono text-sm font-bold text-emerald-400">
                        {challenge.points}
                      </span>
                    </div>

                    <h4 className="text-2xl font-bold text-white">
                      {challenge.title}
                    </h4>

                    <p className="mt-4 leading-8 text-slate-400">
                      {challenge.description}
                    </p>
                  </div>

                  <details className="border-t border-white/10">
                    <summary className="cursor-pointer px-6 py-4 font-mono text-sm font-bold text-emerald-400 hover:bg-white/[0.03] sm:px-8">
                      View Solution
                    </summary>

                    <div className="space-y-8 px-6 pb-8 pt-4 sm:px-8">
                      {challenge.solutionSteps.map((step, index) => (
                        <div key={step.title}>
                          <div className="mb-4 flex items-start gap-4">
                            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-emerald-400/30 bg-emerald-400/10 font-mono text-sm text-emerald-300">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <div>
                              <h5 className="text-lg font-bold text-white">
                                {step.title}
                              </h5>
                              <p className="mt-2 leading-7 text-slate-400">
                                {step.description}
                              </p>
                            </div>
                          </div>

                          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                              <div className="flex gap-2">
                                <span className="h-3 w-3 rounded-full bg-red-400" />
                                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                              </div>
                              <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
                                step_{index + 1}
                              </span>
                            </div>

                            <pre className="overflow-x-auto p-5 text-sm leading-7 text-emerald-200">
                              <code>{step.code}</code>
                            </pre>
                          </div>
                        </div>
                      ))}

                      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                        <p className="font-mono text-sm font-bold text-emerald-300">
                          Result: {challenge.result}
                        </p>
                      </div>
                    </div>
                  </details>
                </article>
              ))}
            </div>
          </div>
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
          title="Security writeups & research notes"
          description="Short technical notes, CTF explanations, and cybersecurity topics that show how I think, learn, and document security concepts."
        />

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-slate-900/60 p-8 shadow-2xl shadow-emerald-950/20 backdrop-blur">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 font-mono text-xs text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Documentation mindset
              </div>

              <h3 className="text-3xl font-black leading-tight text-white">
                I document what I learn, not just what I build.
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                This section is for writeups, security explanations, and notes.
                It helps show my problem-solving process, technical
                communication skills, and understanding of cybersecurity topics.
              </p>

              <div className="mt-8 space-y-3 font-mono text-sm">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <span className="text-emerald-400">$</span> writeups
                  --category crypto
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <span className="text-emerald-400">$</span> notes --topic
                  web-security
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <span className="text-emerald-400">$</span> explain --simple
                  --technical
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {writeups.map((post, index) => (
              <a
                key={post.title}
                href={post.link}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-400/[0.04]"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-emerald-400/5 blur-2xl transition group-hover:bg-emerald-400/10" />

                <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <div className="hidden h-12 w-12 shrink-0 place-items-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 font-mono text-sm font-bold text-emerald-300 sm:grid">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                          {post.category}
                        </span>

                        <span className="font-mono text-xs text-slate-500">
                          writeup
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white transition group-hover:text-emerald-300">
                        {post.title}
                      </h3>

                      <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                        {post.description}
                      </p>
                    </div>
                  </div>

                  <BookOpen className="h-5 w-5 text-slate-500 transition group-hover:text-emerald-400" />
                </div>

                <div className="relative mt-5 border-t border-white/10 pt-4">
                  <p className="inline-flex items-center gap-2 font-mono text-sm text-emerald-400">
                    read_writeup <ExternalLink className="h-4 w-4" />
                  </p>
                </div>
              </a>
            ))}
          </div>
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
          title="Certificates & learning roadmap"
          description="A simple record of completed certificates, ongoing courses, workshops, and cybersecurity learning progress."
        />

        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-slate-900/60 p-8 shadow-2xl shadow-emerald-950/20 backdrop-blur">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 font-mono text-xs text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Learning progress
              </div>

              <h3 className="text-3xl font-black leading-tight text-white">
                Building my cybersecurity foundation step by step.
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                This section tracks certificates, courses, and training
                platforms that support my growth in security fundamentals,
                penetration testing, cloud security, and practical labs.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/70 p-5 font-mono text-sm text-slate-400">
                <p>
                  <span className="text-emerald-400">$</span> learning_status
                  --continuous
                </p>
                <p className="mt-2">
                  <span className="text-emerald-400">output:</span> courses +
                  labs + writeups + projects
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {certificates.map((cert, index) => {
              const status = cert.date.toLowerCase();

              const statusLabel = status.includes("ongoing")
                ? "Ongoing"
                : status.includes("planned")
                ? "Planned"
                : "Completed";

              return (
                <a
                  key={cert.title}
                  href={cert.link}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-400/[0.04]"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-emerald-400/5 blur-2xl transition group-hover:bg-emerald-400/10" />

                  <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10">
                        <Award className="h-6 w-6 text-emerald-400" />
                      </div>

                      <div>
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                          <span className="font-mono text-xs text-slate-500">
                            0{index + 1}
                          </span>

                          <span
                            className={`rounded-full border px-3 py-1 font-mono text-xs ${
                              statusLabel === "Completed"
                                ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                                : statusLabel === "Ongoing"
                                ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                                : "border-yellow-400/20 bg-yellow-400/10 text-yellow-300"
                            }`}
                          >
                            {statusLabel}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white transition group-hover:text-emerald-300">
                          {cert.title}
                        </h3>

                        <p className="mt-2 text-slate-400">{cert.issuer}</p>
                      </div>
                    </div>

                    <div className="sm:text-right">
                      <p className="font-mono text-sm font-bold text-emerald-300">
                        {cert.date}
                      </p>

                      <p className="mt-3 inline-flex items-center gap-2 font-mono text-sm text-slate-400 transition group-hover:text-emerald-400">
                        view_certificate <ExternalLink className="h-4 w-4" />
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 to-cyan-400/5 p-8 text-center shadow-2xl shadow-emerald-950/20 backdrop-blur sm:p-12">
        <Cpu className="mx-auto mb-5 h-10 w-10 text-emerald-400" />

        <p className="font-mono text-sm uppercase tracking-[0.35em] text-emerald-400">
          /contact
        </p>

        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Let’s connect.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
          I am open to cybersecurity internships, project collaboration, CTF
          teams, and learning opportunities in red teaming, cloud security,
          penetration testing, and secure development.
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
    <main className="relative min-h-screen scroll-smooth text-slate-100 selection:bg-emerald-400 selection:text-slate-950">
      <CyberBackground />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CTF />
      <Writeups />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
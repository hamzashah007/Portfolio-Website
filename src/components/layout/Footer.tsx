import { Mail } from "lucide-react";

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export function Footer() {
  return (
    <footer className="py-12 relative overflow-hidden" style={{ backgroundColor: "var(--bg-primary)", borderTop: "1px solid var(--border-color)" }}>
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#10B981]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <a href="#" className="text-2xl font-bold tracking-tight mb-6" style={{ color: "var(--text-primary)" }}>
          Syed Hamza Sohail<span className="text-[#10B981]">.</span>
        </a>

        <p className="text-center max-w-md mb-8" style={{ color: "var(--text-muted)" }}>
          Flutter Developer &amp; SQA Engineer helping startups and businesses build scalable, reliable, and performance-driven mobile apps.
        </p>

        <div className="flex gap-6 mb-10">
          {[
            { icon: <GithubIcon size={20} />, href: "https://github.com/hamzashah007", label: "GitHub" },
            { icon: <LinkedinIcon size={20} />, href: "https://www.linkedin.com/in/hamza-shah-83b362255", label: "LinkedIn" },
            { icon: <Mail size={20} />, href: "mailto:shahhamza602@gmail.com", label: "Email" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={social.label}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#10B981] hover:text-white transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)", color: "var(--text-secondary)" }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="w-full h-[1px] mb-6" style={{ backgroundColor: "var(--border-color)" }} />

        <div className="flex justify-center items-center w-full text-sm" style={{ color: "var(--text-muted)" }}>
          <p>© {new Date().getFullYear()} Syed Hamza Sohail. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

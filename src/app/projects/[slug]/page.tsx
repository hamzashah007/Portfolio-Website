"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Layers, Target, Clock, User } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen selection:bg-[#10B981]/30 pb-20" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-[#10B981]/10 blur-[150px] rounded-full opacity-50" style={{ opacity: "var(--glow-opacity)" }} />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-[#F59E0B]/5 blur-[150px] rounded-full opacity-30" style={{ opacity: "var(--glow-opacity)" }} />
      </div>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link 
              href="/#projects" 
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors mb-8 group"
              style={{ color: "var(--text-muted)" }}
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
            
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="flex items-start gap-6">
                  {project.logoSrc && (
                    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                      <img src={project.logoSrc} alt={`${project.title} logo`} className="w-full h-full object-contain" />
                    </div>
                  )}
                  <div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
                      {project.title}
                    </h1>
                    <p className="text-xl max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {project.description}
                    </p>
                  </div>
                </div>
              
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-3 rounded-xl transition-all" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)", color: "var(--text-primary)" }}>
                    <GithubIcon size={24} />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#10B981] text-white font-bold hover:bg-[#059669] transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    Live Demo <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Project Info Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 p-6 rounded-2xl backdrop-blur-sm"
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
                <User size={12} /> Role
              </span>
              <span className="text-base font-medium">{project.role}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
                <Layers size={12} /> Category
              </span>
              <span className="text-base font-medium">Mobile Development</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
                <Clock size={12} /> Duration
              </span>
              <span className="text-base font-medium">{project.duration}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
                <Target size={12} /> Status
              </span>
              <span className="text-base font-medium">Completed</span>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Left Column: Description */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
                Project Overview
                <div className="h-px flex-1 ml-4" style={{ backgroundColor: "var(--border-color)" }} />
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                {project.longDescription}
              </p>
              
              <h3 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>Key Features</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 p-4 rounded-xl border" style={{ color: "var(--text-secondary)", backgroundColor: "rgba(var(--bg-card-rgb), 0.3)", borderColor: "var(--border-color)" }}>
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#10B981] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column: Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="sticky top-32 p-8 rounded-2xl border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-color)" }}>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#10B981]">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-4 py-2 rounded-lg text-sm font-medium border"
                      style={{ backgroundColor: "var(--bg-card)", color: "var(--text-secondary)", borderColor: "var(--border-color)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-10 p-6 rounded-xl border text-sm" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border-color)", color: "var(--text-muted)" }}>
                  Built with a focus on <strong>performance</strong>, <strong>scalability</strong>, and <strong>user experience</strong>.
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl border text-center"
            style={{ background: "linear-gradient(to bottom right, var(--bg-card), var(--bg-primary))", borderColor: "var(--border-color)" }}
          >
            <h3 className="text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Have a project in mind?</h3>
            <p className="mb-8 max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
              I am always open to discussing new mobile development opportunities, SQA consulting, or technical collaborations.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block px-10 py-4 bg-[#10B981] text-white font-bold rounded-xl hover:bg-[#059669] transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
            >
              Let&apos;s Talk
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

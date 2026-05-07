"use client";

import { motion } from "framer-motion";
import { ProjectCard3D } from "../3d/ProjectCard3D";

import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      {/* Background decorations */}
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-[#10B981]/10 blur-[150px] rounded-full -z-10 pointer-events-none" style={{ opacity: "var(--glow-opacity)" }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#F59E0B]/5 blur-[150px] rounded-full -z-10 pointer-events-none" style={{ opacity: "var(--glow-opacity)" }} />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Featured <span className="text-[#10B981]">Projects</span>
            </h2>
            <p className="max-w-xl" style={{ color: "var(--text-muted)" }}>
              A selection of production-level mobile applications I&apos;ve built, optimized, and rigorously tested.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="https://github.com/hamzashah007" target="_blank" rel="noreferrer" className="text-[#F59E0B] hover:text-[#10B981] transition-colors flex items-center gap-2 font-medium">
              View all on GitHub &rarr;
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard3D
              key={project.slug}
              index={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              slug={project.slug}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageSrc?: string;
  index: number;
  slug: string;
}

export function ProjectCard3D({ title, description, techStack, index, slug }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    setTilt({
      rotateX: yPct * -20,
      rotateY: xPct * 20,
      glowX: (xPct + 0.5) * 100,
      glowY: (yPct + 0.5) * 100,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transformStyle: "preserve-3d",
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
          backgroundColor: "var(--bg-card)",
          border: isHovered ? "1px solid rgba(16,185,129,0.5)" : "1px solid var(--border-color)",
          boxShadow: isHovered ? "0 0 30px rgba(16,185,129,0.15)" : "0 4px 20px rgba(0,0,0,0.1)",
        }}
        className="relative w-full h-full p-6 md:p-8 rounded-2xl transition-colors duration-300"
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0 z-0 pointer-events-none rounded-2xl transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.5 : 0,
            background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(245, 158, 11, 0.1) 0%, transparent 60%)`,
          }}
        />

        <div className="relative z-10 h-full flex flex-col" style={{ transform: "translateZ(30px)" }}>
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
              {title}
            </h3>
            <div className="flex gap-3">
              <a href="#" className="hover:text-[#F59E0B] transition-colors" style={{ color: "var(--text-muted)" }}>
                <Code2 size={20} />
              </a>
              <a href="#" className="hover:text-[#10B981] transition-colors" style={{ color: "var(--text-muted)" }}>
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          <p className="mb-8 flex-grow leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8 mt-auto">
            {techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link 
            href={`/projects/${slug}`}
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[#10B981] hover:border-[#10B981] hover:text-white transition-all group/btn font-semibold text-sm"
            style={{ color: "var(--text-primary)" }}
          >
            View Case Study
            <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

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
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard3D({ title, description, techStack, index, slug, githubUrl, liveUrl }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const isMobile = window.innerWidth < 1024;
    if (isMobile || !ref.current) return;

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
          transform: tilt.rotateX || tilt.rotateY ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)` : "none",
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
            <Link href={`/projects/${slug}`}>
              <h3 className="text-2xl font-bold hover:text-[#10B981] transition-colors cursor-pointer" style={{ color: "var(--text-primary)" }}>
                {title}
              </h3>
            </Link>
            <div className="flex gap-3">
              {githubUrl && (
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-[#F59E0B] transition-colors" 
                  style={{ color: "var(--text-muted)" }}
                  title="View Code"
                >
                  <Code2 size={20} />
                </a>
              )}
              <Link 
                href={`/projects/${slug}`}
                className="hover:text-[#10B981] transition-colors" 
                style={{ color: "var(--text-muted)" }}
                title="View Case Study"
              >
                <ExternalLink size={20} />
              </Link>
            </div>
          </div>

          <p className="mb-8 flex-grow leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {description}
          </p>

          <div className="flex flex-wrap gap-3 mt-auto">
            {techStack.slice(0, 4).map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-block text-xs font-medium px-4 py-2 rounded-full cursor-default transition-all"
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  color: "#10B981",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>


        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

const HeroParticles = dynamic(() => import("../3d/HeroParticles").then((mod) => mod.HeroParticles), {
  ssr: false,
  loading: () => <div className="w-full h-full absolute inset-0" />
});

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none" style={{ opacity: "var(--glow-opacity)" }}>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#10B981]/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[50%] bg-[#F59E0B]/10 blur-[100px] rounded-full" />
      </div>

      {/* Particle animation background */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <HeroParticles />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 text-[#10B981] text-sm font-semibold tracking-wide"
          >
            Welcome to my Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            I Build & Test{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#F59E0B]">
              High-Quality
            </span>{" "}
            Mobile Apps
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Flutter Developer and SQA Engineer helping startups and businesses build scalable, reliable, and performance-driven applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center w-full sm:w-auto px-4 sm:px-0"
          >
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#10B981] hover:bg-[#059669] text-white rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:-translate-y-1 w-full sm:w-auto"
            >
              Contact Me
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-8 py-4 hover:bg-[#10B981]/10 rounded-xl font-semibold transition-all hover:-translate-y-1 w-full sm:w-auto"
              style={{ color: "var(--text-primary)", border: "1px solid var(--border-color)" }}
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

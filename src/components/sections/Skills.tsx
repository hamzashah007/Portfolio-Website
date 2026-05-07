"use client";

import { motion } from "framer-motion";
import { Code, CheckCircle, Wrench } from "lucide-react";

const developmentSkills = [
  "Flutter", "Dart", "Firebase", "REST APIs", "Provider", "Riverpod", "FCM", "BLoC"
];

const testingSkills = [
  "API Testing", "Postman", "Playwright", "Appium", "JMeter", "Regression"
];

const toolsSkills = [
  "Git", "Jira", "TestRail", "ClickUp", "Agile/Scrum"
];

function SkillPill({ name, color }: { name: string; color: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.1, y: -2 }}
      className="inline-block text-sm font-medium px-4 py-2 rounded-full cursor-default transition-shadow"
      style={{
        backgroundColor: `${color}15`,
        color: color,
        border: `1px solid ${color}30`,
      }}
    >
      {name}
    </motion.span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Technical <span className="text-[#F59E0B]">Arsenal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ color: "var(--text-muted)" }}
            className="max-w-2xl mx-auto"
          >
            A comprehensive set of tools and technologies I use to build, test, and deploy robust mobile applications.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Development */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl"
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 flex items-center justify-center">
                <Code className="text-[#10B981]" size={20} />
              </div>
              <h3 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {developmentSkills.map((skill) => (
                <SkillPill key={skill} name={skill} color="#10B981" />
              ))}
            </div>
          </motion.div>

          {/* Testing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl"
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#f43f5e]/20 flex items-center justify-center">
                <CheckCircle className="text-[#f43f5e]" size={20} />
              </div>
              <h3 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>Testing & QA</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {testingSkills.map((skill) => (
                <SkillPill key={skill} name={skill} color="#f43f5e" />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-3xl"
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center">
                <Wrench className="text-[#F59E0B]" size={20} />
              </div>
              <h3 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {toolsSkills.map((skill) => (
                <SkillPill key={skill} name={skill} color="#F59E0B" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

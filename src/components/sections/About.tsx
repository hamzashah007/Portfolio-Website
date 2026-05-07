"use client";

import { motion } from "framer-motion";
import { Code2, TestTube2, GraduationCap, Briefcase } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
            Developer + <span className="text-[#10B981]">Quality Engineer</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            I am Syed Hamza Sohail — a Flutter Developer and Software Quality Assurance Engineer with hands-on experience building and testing real-world mobile applications. Skilled in developing production-level apps and ensuring their quality through comprehensive manual &amp; automated testing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Developer Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl relative overflow-hidden group"
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981]/10 blur-[50px] rounded-full group-hover:bg-[#10B981]/20 transition-all" />
            <div className="w-14 h-14 rounded-2xl bg-[#10B981]/20 flex items-center justify-center mb-6 border border-[#10B981]/30">
              <Code2 className="text-[#10B981]" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Building Applications</h3>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              I develop cross-platform mobile apps using Flutter &amp; Dart, integrating Firebase, FCM, RevenueCat for in-app purchases, Google Maps, and REST APIs. Experienced with Provider &amp; Riverpod for state management.
            </p>
          </motion.div>

          {/* SQA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-3xl relative overflow-hidden group"
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F59E0B]/10 blur-[50px] rounded-full group-hover:bg-[#F59E0B]/20 transition-all" />
            <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/20 flex items-center justify-center mb-6 border border-[#F59E0B]/30">
              <TestTube2 className="text-[#F59E0B]" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Ensuring Reliability</h3>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              As an SQA Engineer, I perform end-to-end testing including functional, regression, UAT, and API testing using Postman, Playwright &amp; Appium. Experienced in cross-platform testing for stable releases.
            </p>
          </motion.div>
        </div>

        {/* Education & Experience */}
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Education & <span className="text-[#F59E0B]">Experience</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl relative overflow-hidden group hover:border-[#10B981]/30 transition-colors"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 flex items-center justify-center border border-[#10B981]/20">
                  <GraduationCap className="text-[#10B981]" size={20} />
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                  2022 – 2026
                </span>
              </div>
              <h4 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>BS Computer Science</h4>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>CUST — Islamabad, Pakistan</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl relative overflow-hidden group hover:border-[#F59E0B]/30 transition-colors"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center border border-[#F59E0B]/20">
                  <Briefcase className="text-[#F59E0B]" size={20} />
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20">
                  02/2026 – Present
                </span>
              </div>
              <h4 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>SQA Engineer</h4>
              <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>Galixo AI</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                End-to-end QA for AI-powered web &amp; mobile apps using Postman &amp; Playwright.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl relative overflow-hidden group hover:border-[#10B981]/30 transition-colors"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 flex items-center justify-center border border-[#10B981]/20">
                  <Briefcase className="text-[#10B981]" size={20} />
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                  Present
                </span>
              </div>
              <h4 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>App Developer</h4>
              <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>HexaIT Solutions — Islamabad</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Built Rattil &amp; Al Athar. FCM, RevenueCat, Google Maps &amp; API integrations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Smartphone, Zap, ServerCog, BugPlay } from "lucide-react";

const services = [
  {
    icon: <Smartphone size={32} className="text-[#F59E0B]" />,
    title: "Mobile App Development",
    description: "Building responsive, beautiful, and highly functional cross-platform applications using Flutter for iOS and Android.",
  },
  {
    icon: <ServerCog size={32} className="text-[#10B981]" />,
    title: "API Integration",
    description: "Seamlessly connecting mobile applications with backend services, third-party APIs, Firebase, and cloud databases.",
  },
  {
    icon: <BugPlay size={32} className="text-[#f43f5e]" />,
    title: "App Testing & QA",
    description: "End-to-end manual and automated testing including functional, regression, UAT, and API testing to ensure bug-free releases.",
  },
  {
    icon: <Zap size={32} className="text-[#F59E0B]" />,
    title: "Performance Optimization",
    description: "Analyzing and tuning existing applications for faster load times, smoother animations, and reduced memory footprint.",
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative z-10" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            My <span className="text-[#F59E0B]">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Comprehensive solutions tailored for startups and businesses looking to build or improve their mobile presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl transition-all group relative overflow-hidden flex flex-col sm:flex-row items-start gap-6 hover:scale-[1.02]"
              style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981]/5 blur-[50px] rounded-full group-hover:bg-[#10B981]/10 transition-all pointer-events-none" />

              <div className="flex-shrink-0 p-5 rounded-2xl group-hover:scale-110 transition-transform duration-300 relative z-10" style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
                {service.icon}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

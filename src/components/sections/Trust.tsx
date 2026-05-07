"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Layers, ShieldCheck } from "lucide-react";

const trustIndicators = [
  {
    icon: <Layers className="text-[#F59E0B]" size={28} />,
    title: "Production Apps Built",
    description: "Rattil, Al Athar, TireMate & more"
  },
  {
    icon: <CheckCircle2 className="text-[#10B981]" size={28} />,
    title: "Cross-platform Experience",
    description: "Seamless Android & iOS apps"
  },
  {
    icon: <ShieldCheck className="text-[#F59E0B]" size={28} />,
    title: "Tested & Reliable Systems",
    description: "End-to-end QA for production apps"
  }
];

export function Trust() {
  return (
    <section className="py-12 relative z-20" style={{ borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", backgroundColor: "var(--bg-secondary)" }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustIndicators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="flex items-center gap-5"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

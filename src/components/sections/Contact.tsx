"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setError(false);

    try {
      await emailjs.sendForm(
        "service_2k0xawb",
        "template_ia4vf7b",
        formRef.current,
        "xLxQHWUz_S7ASL2m3"
      );

      setIsSent(true);
      formRef.current.reset();
      setTimeout(() => setIsSent(false), 5000);
    } catch (err: unknown) {
      const error = err as { text?: string; message?: string };
      console.error("EmailJS Detailed Error:", error.text || error.message || err);
      setError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              Ready to <span className="text-[#10B981]">Build?</span>
            </h2>
            <p className="text-xl mb-10 leading-relaxed font-light" style={{ color: "var(--text-secondary)" }}>
              Let&apos;s work together to build reliable, scalable, and high-quality applications. Drop me a message to discuss your next project.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#F59E0B]" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>Email Me At</p>
                  <a href="mailto:shahhamza602@gmail.com" className="font-medium hover:text-[#F59E0B] transition-colors" style={{ color: "var(--text-primary)" }}>shahhamza602@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#10B981]" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>Call Me</p>
                  <a href="tel:+923365828363" className="font-medium hover:text-[#10B981] transition-colors" style={{ color: "var(--text-primary)" }}>+92 336 5828363</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#F59E0B]" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>Location</p>
                  <p className="font-medium" style={{ color: "var(--text-primary)" }}>Rawalpindi, Pakistan &middot; Available Remotely</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-3xl relative overflow-hidden"
            style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/10 blur-[80px] rounded-full -z-10" />

            <form 
              ref={formRef}
              className="space-y-6 relative z-10" 
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="from_name" // Match EmailJS template variable
                    required
                    className="w-full rounded-xl px-4 py-3 focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-colors"
                    style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", color: "var(--text-primary)" }}
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="from_email" // Match EmailJS template variable
                    required
                    className="w-full rounded-xl px-4 py-3 focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-colors"
                    style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", color: "var(--text-primary)" }}
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>Your Message</label>
                <textarea
                  id="message"
                  name="message" // Match EmailJS template variable
                  required
                  rows={4}
                  className="w-full rounded-xl px-4 py-3 focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-colors resize-none"
                  style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", color: "var(--text-primary)" }}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending || isSent}
                className="w-full py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Sending...
                  </>
                ) : isSent ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>

              {error && (
                <p className="text-center text-sm text-red-500 mt-2">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

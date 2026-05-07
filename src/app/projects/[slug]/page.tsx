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
    <main className="min-h-screen bg-black text-white selection:bg-[#10B981]/30 pb-20">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-[#10B981]/10 blur-[150px] rounded-full opacity-50" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-[#F59E0B]/5 blur-[150px] rounded-full opacity-30" />
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
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-[#10B981] transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-gray-900 border border-gray-800 hover:border-[#10B981] hover:text-[#10B981] transition-all">
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
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 p-6 rounded-2xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                <User size={12} /> Role
              </span>
              <span className="text-base font-medium">{project.role}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                <Layers size={12} /> Category
              </span>
              <span className="text-base font-medium">Mobile Development</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                <Clock size={12} /> Duration
              </span>
              <span className="text-base font-medium">{project.duration}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
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
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                Project Overview
                <div className="h-px flex-1 bg-gray-800 ml-4" />
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {project.longDescription}
              </p>
              
              <h3 className="text-xl font-bold mb-6">Key Features</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-400 bg-gray-900/30 p-4 rounded-xl border border-gray-800/50">
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
              <div className="sticky top-32 p-8 rounded-2xl bg-[#10B981]/5 border border-[#10B981]/20">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#10B981]">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-4 py-2 rounded-lg bg-gray-900 text-gray-300 text-sm font-medium border border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-10 p-6 rounded-xl bg-black/40 border border-gray-800 text-sm text-gray-400">
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
            className="p-12 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Have a project in mind?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
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

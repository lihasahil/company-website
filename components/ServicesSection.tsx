"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Cpu,
  Database,
  Eye,
  MessageSquare,
  Wand2,
  Settings,
  BarChart3,
  Search,
  Globe,
  Zap,
} from "lucide-react";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [expanded, setExpanded] = useState(false);

  const services = [
    { name: "AI Model Development", icon: Brain },
    { name: "Machine Learning", icon: Cpu },
    { name: "AI Automation", icon: Zap },
    { name: "Chatbot Development", icon: MessageSquare },
    { name: "Data Intelligence", icon: Database },
    { name: "Natural Language Processing", icon: Search },
    { name: "Computer Vision", icon: Eye },
    { name: "Predictive Analytics", icon: BarChart3 },
  ];

  const industries = [
    { name: "Healthcare & Biotech", icon: Globe },
    { name: "Finance & Fintech", icon: BarChart3 },
    { name: "E-commerce & Retail", icon: Zap },
    { name: "Manufacturing 4.0", icon: Settings },
    { name: "Logistics & Supply", icon: Globe },
    { name: "Education & Edtech", icon: Brain },
    { name: "Real Estate & Proptech", icon: Search },
    { name: "Entertainment & Media", icon: Wand2 },
  ];

  const activeData = activeTab === "services" ? services : industries;
  const activeHeading = activeTab === "services" 
    ? "Empowering Every Sector with Intelligent Solutions"
    : "Revolutionizing Industries with Tailored AI Integration";

  return (
    <section className="relative w-full bg-[#fafafa] py-24 px-6 md:px-16 overflow-hidden">
      {/* Light Theme Grid OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Tab Toggle */}
        <motion.div
          onViewportEnter={() => setExpanded(true)}
          viewport={{ once: true, margin: "-100px" }}
          initial={{ maxWidth: "52px" }}
          animate={{ maxWidth: expanded ? "400px" : "52px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative flex p-1.5 bg-white rounded-full border border-gray-200 shadow-sm mb-12 overflow-hidden mx-auto h-[52px]"
        >
          {/* Active Black Pill (Starts as a 40x40 circle) */}
          <motion.div
            initial={{ width: "40px", x: 0 }}
            animate={{
              width: expanded ? (activeTab === "services" ? "142px" : "180px") : "40px",
              x: expanded ? (activeTab === "services" ? 0 : 142) : 0,
            }}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
            className="absolute left-1.5 h-[40px] bg-[#0f172a] rounded-full z-0 shadow-md"
          />

          <button
            onClick={() => { if (expanded) setActiveTab("services"); }}
            className={`relative flex items-center justify-center w-[142px] h-[40px] z-10 text-[15px] font-medium transition-colors duration-300 shrink-0 ${
              activeTab === "services" ? "text-white" : "text-gray-600 hover:text-black"
            }`}
          >
            <motion.span
              animate={{ opacity: expanded ? 1 : 0 }}
              transition={{ delay: expanded ? 0.3 : 0, duration: 0.4 }}
              className="whitespace-nowrap"
            >
              Our Services
            </motion.span>
          </button>
          
          <button
            onClick={() => { if (expanded) setActiveTab("industries"); }}
            className={`relative flex items-center justify-center w-[180px] h-[40px] z-10 text-[15px] font-medium transition-colors duration-300 shrink-0 ${
              activeTab === "industries" ? "text-white" : "text-gray-600 hover:text-black"
            }`}
          >
            <motion.span
              animate={{ opacity: expanded ? 1 : 0 }}
              transition={{ delay: expanded ? 0.3 : 0, duration: 0.4 }}
              className="whitespace-nowrap"
            >
              Industries We Serve
            </motion.span>
          </button>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#111] mb-20 max-w-4xl leading-tight tracking-tight"
        >
          {activeHeading}
        </motion.h2>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-[1200px]">
          {/* Left Card - Custom SVG Flare */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group min-h-[500px] lg:min-h-full rounded-[32px] overflow-hidden bg-[#050505] shadow-2xl"
          >
            {/* Custom Blue Flare Gradient */}
            <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.45)_0%,rgba(0,0,0,0)_60%)] z-0 pointer-events-none" />
            
            {/* Dark Card Subtle Grid OVERLAY (Larger Size) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0" />

            {/* Glowing Moving Pulses specifically masked to the grid lines */}
            <div 
              className="absolute inset-0 pointer-events-none z-0"
              style={{
                maskImage: "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
                maskSize: "60px 60px",
                WebkitMaskImage: "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
                WebkitMaskSize: "60px 60px",
              }}
            >
              <motion.div
                animate={{
                  x: ["0%", "100%"],
                  y: ["0%", "100%"],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 8,
                  ease: "easeInOut",
                }}
                className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/80 rounded-full blur-[80px]"
              />
              <motion.div
                animate={{
                  x: ["100%", "0%"],
                  y: ["0%", "100%"],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 12,
                  ease: "easeInOut",
                }}
                className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#0ea5e9]/70 rounded-full blur-[60px]"
              />
            </div>

            <div className="relative z-10 flex flex-col justify-end h-full p-10 md:p-12">
              <p className="text-xl md:text-[22px] font-medium text-white/90 leading-relaxed max-w-[90%]">
                Try Our AI Solutions that Power Modern Businesses with Cutting-Edge Technology.
              </p>
            </div>
          </motion.div>

          {/* Right Card - Detailed Info & Tags */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-[#111111] rounded-[32px] p-10 md:p-12 flex flex-col justify-between shadow-2xl"
          >
            <div className="mb-16">
              <p className="text-white/95 text-lg font-medium leading-loose mb-10 max-w-2xl text-[17px]">
                We deliver tailored technology solutions across diverse industries, helping businesses adapt, innovate, and grow in a rapidly evolving digital landscape. Our expertise allows us to understand industry-specific challenges and build solutions that drive real impact.
              </p>

              <button className="px-6 py-3 rounded-full bg-[#0ea5e9] hover:bg-blue-500 text-white font-medium transition-all shadow-lg active:scale-95 text-[15px]">
                Industries we've innovated
              </button>
            </div>

            {/* Tags Cloud */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeData.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] hover:bg-[#222] transition-colors cursor-default group"
                >
                  <item.icon size={18} className="text-[#0ea5e9] shrink-0" />
                  <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


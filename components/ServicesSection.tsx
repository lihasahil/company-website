"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
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

  const sectionRef = useRef(null);

  // 🔥 Scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  // 🎯 Animations
  const leftX = useTransform(smoothProgress, [0, 0.5, 1], [-120, 0, -120]);
  const leftOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  const rightX = useTransform(smoothProgress, [0, 0.5, 1], [120, 0, 120]);
  const rightOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  const topScale = useTransform(smoothProgress, [0, 0.2], [0.85, 1]);
  const topOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);

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

  const activeData =
    activeTab === "services" ? services : industries;

  const activeHeading =
    activeTab === "services"
      ? "Empowering Every Sector with Intelligent Solutions"
      : "Revolutionizing Industries with Tailored AI Integration";

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center bg-[#fafafa] py-6 md:py-12 px-4 md:px-12 overflow-hidden"
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-8xl mx-auto flex flex-col items-center">

        {/* 🔥 Toggle */}
        <motion.div
          onViewportEnter={() => setExpanded(true)}
          viewport={{ once: true, margin: "-100px" }}
          initial={{ maxWidth: "52px" }}
          animate={{ maxWidth: expanded ? "400px" : "52px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{
            scale: topScale,
            opacity: topOpacity,
          }}
          className="relative flex p-1.5 bg-white rounded-full border border-gray-200 shadow-sm mb-6 overflow-hidden mx-auto h-[52px]"
        >
          {/* Active pill */}
          <motion.div
            initial={{ width: "40px", x: 0 }}
            animate={{
              width: expanded
                ? activeTab === "services"
                  ? "142px"
                  : "180px"
                : "40px",
              x: expanded
                ? activeTab === "services"
                  ? 0
                  : 142
                : 0,
            }}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
            className="absolute left-1.5 h-[40px] bg-[#0f172a] rounded-full z-0 shadow-md"
          />

          <button
            onClick={() => expanded && setActiveTab("services")}
            className={`relative flex items-center justify-center w-[142px] h-[40px] z-10 text-[15px] font-medium ${
              activeTab === "services"
                ? "text-white"
                : "text-gray-600 hover:text-black"
            }`}
          >
            <motion.span
              animate={{ opacity: expanded ? 1 : 0 }}
              transition={{ delay: expanded ? 0.3 : 0 }}
            >
              Our Services
            </motion.span>
          </button>

          <button
            onClick={() => expanded && setActiveTab("industries")}
            className={`relative flex items-center justify-center w-[180px] h-[40px] z-10 text-[15px] font-medium ${
              activeTab === "industries"
                ? "text-white"
                : "text-gray-600 hover:text-black"
            }`}
          >
            <motion.span
              animate={{ opacity: expanded ? 1 : 0 }}
              transition={{ delay: expanded ? 0.3 : 0 }}
            >
              Industries We Serve
            </motion.span>
          </button>
        </motion.div>

        {/* Heading */}
        <motion.h2
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#111] mb-8 md:mb-12 max-w-4xl"
        >
          {activeHeading}
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-[1400px] h-[400px] lg:h-[500px]">

          {/* LEFT CARD */}
          <motion.div
            style={{ x: leftX, opacity: leftOpacity }}
            className="lg:col-span-5 relative rounded-[32px] overflow-hidden bg-[#050505] shadow-2xl"
          >
            <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.45)_0%,rgba(0,0,0,0)_60%)] z-0" />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:90px_90px]" />

            <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-12">
              <p className="text-lg md:text-[22px] text-white/90">
                Try Our AI Solutions that Power Modern Businesses with Cutting-Edge Technology.
              </p>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            style={{ x: rightX, opacity: rightOpacity }}
            className="lg:col-span-7 bg-[#111111] rounded-[32px] p-4 md:p-8 flex flex-col justify-between shadow-2xl"
          >
            <div>
              <p className="text-white/95 text-base md:text-lg mb-4">
                We deliver tailored technology solutions across diverse industries.
              </p>

              <button className="px-6 py-3 rounded-full bg-[#0ea5e9] text-white">
                Industries we've innovated
              </button>
            </div>

            {/* Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeData.map((item, index) => (
                <motion.div
                  key={item.name}
                  style={{
                    opacity: useTransform(
                      smoothProgress,
                      [0.3 + index * 0.03, 0.6],
                      [0, 1]
                    ),
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#1a1a1a] border border-[#2a2a2a]"
                >
                  <item.icon size={16} className="text-[#0ea5e9]" />
                  <span className="text-gray-300 text-sm">
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

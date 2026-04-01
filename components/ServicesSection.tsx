"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  const leftX = useTransform(smoothProgress, [0, 0.5, 1], [-80, 0, -80]);
  const leftOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0],
  );

  const rightX = useTransform(smoothProgress, [0, 0.5, 1], [80, 0, 80]);
  const rightOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0],
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

  const activeData = activeTab === "services" ? services : industries;

  const activeHeading =
    activeTab === "services"
      ? "Empowering Every Sector with Intelligent Solutions"
      : "Revolutionizing Industries with Tailored AI Integration";

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex items-center bg-[#fafafa] py-10 md:py-16 px-4 sm:px-6 md:px-10 lg:px-12 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-size-[60px_60px] sm:bg-size-[80px_80px] md:bg-size-[100px_100px] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-350 mx-auto flex flex-col items-center">
        {/* Toggle */}
        <motion.div
          onViewportEnter={() => setExpanded(true)}
          viewport={{ once: true, margin: "-100px" }}
          initial={{ maxWidth: "52px" }}
          animate={{ maxWidth: expanded ? "360px" : "52px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{ scale: topScale, opacity: topOpacity }}
          className="relative flex p-1.5 bg-white rounded-full border border-gray-200 shadow-sm mb-5 md:mb-8 overflow-hidden mx-auto h-12 sm:h-13"
        >
          {/* Active pill */}
          <motion.div
            initial={{ width: "40px", x: 0 }}
            animate={{
              width: expanded
                ? activeTab === "services"
                  ? "130px"
                  : "168px"
                : "40px",
              x: expanded ? (activeTab === "services" ? 0 : 130) : 0,
            }}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
            className="absolute left-1.5 h-9 sm:h-10 bg-[#0f172a] rounded-full z-0 shadow-md"
          />

          <button
            onClick={() => expanded && setActiveTab("services")}
            className={`relative flex items-center justify-center w-32.5 h-9 sm:h-10 z-10 text-[13px] sm:text-[15px] font-medium whitespace-nowrap ${
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
            className={`relative flex items-center justify-center w-42 h-9 sm:h-10 z-10 text-[13px] sm:text-[15px] font-medium whitespace-nowrap ${
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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#111] mb-6 md:mb-10 max-w-3xl px-2"
        >
          {activeHeading}
        </motion.h2>

        {/* Cards grid — stacked on mobile/tablet, side-by-side on lg+ */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 w-full">
          {/* LEFT CARD */}
          <motion.div
            style={{ x: leftX, opacity: leftOpacity }}
            className="lg:col-span-5 relative rounded-3xl sm:rounded-[28px] lg:rounded-4xl overflow-hidden bg-[#050505] shadow-2xl min-h-55 sm:min-h-65 lg:min-h-115"
          >
            {/* Radial glow */}
            <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.45)_0%,rgba(0,0,0,0)_60%)] z-0" />

            {/* Inner grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[70px_70px] sm:bg-size-[90px_90px]" />

            {/* Pulse SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70">
              <defs>
                <linearGradient id="service-pulse-gradient">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
                  <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                </linearGradient>
              </defs>
              <ServicePulse d="M 90 0 V 600" delay={0} />
              <ServicePulse d="M 180 0 V 600" delay={1.5} />
              <ServicePulse d="M 270 0 V 600" delay={3} />
              <ServicePulse d="M 360 0 V 600" delay={0.8} />
              <ServicePulse d="M 0 90 H 800" delay={0.5} />
              <ServicePulse d="M 0 180 H 800" delay={2} />
              <ServicePulse d="M 0 270 H 800" delay={3.5} />
              <ServicePulse d="M 0 360 H 800" delay={1.2} />
            </svg>

            <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-8 md:p-10 lg:p-12">
              <p className="text-base sm:text-lg md:text-[20px] lg:text-[22px] text-white/90 leading-snug">
                Try Our AI Solutions that Power Modern Businesses with
                Cutting-Edge Technology.
              </p>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            style={{ x: rightX, opacity: rightOpacity }}
            className="lg:col-span-7 bg-[#111111] rounded-3xl sm:rounded-[28px] lg:rounded-4xl p-5 sm:p-6 md:p-8 flex flex-col gap-5 shadow-2xl"
          >
            {/* Description + CTA */}
            <div className="flex flex-col gap-4">
              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                We deliver tailored technology solutions across diverse
                industries, helping businesses adapt, innovate, and grow in a
                rapidly evolving digital landscape. Our expertise allows us to
                understand industry-specific challenges and build solutions that
                drive real impact.
              </p>
              <div>
                <button className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#0ea5e9] text-white text-sm sm:text-base font-medium hover:bg-[#0284c7] transition-colors">
                  Industries we&apos;ve innovated
                </button>
              </div>
            </div>

            {/* Tags grid — 1 col on mobile, 2 cols on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {activeData.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-full bg-[#1a1a1a] border border-[#2a2a2a]"
                >
                  <item.icon
                    size={14}
                    className="text-[#0ea5e9] shrink-0 sm:w-4 sm:h-4"
                  />
                  <span className="text-gray-300 text-xs sm:text-sm truncate">
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

interface ServicePulseProps {
  d: string;
  delay?: number;
}

const ServicePulse: React.FC<ServicePulseProps> = ({ d, delay = 0 }) => (
  <g>
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <ellipse rx="15" ry="5" fill="url(#service-pulse-gradient)">
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path={d}
          rotate="auto"
        />
      </ellipse>
      <ellipse rx="7" ry="3" fill="#fff">
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path={d}
          rotate="auto"
        />
      </ellipse>
    </motion.g>
  </g>
);

export default ServicesSection;

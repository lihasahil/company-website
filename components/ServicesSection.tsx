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
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  const sectionRef = useRef(null);

  React.useEffect(() => {
    setMounted(true);
    const checkDesktop = () => setIsDesktop(window.innerWidth > 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-[1400px]">

          {/* LEFT CARD */}
          <motion.div
            style={{ 
              x: isDesktop ? leftX : 0, 
              opacity: leftOpacity 
            }}
            className="lg:col-span-5 relative rounded-[32px] overflow-hidden bg-[#050505] shadow-2xl min-h-[300px] lg:h-full"
          >
            <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.45)_0%,rgba(0,0,0,0)_60%)] z-0" />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:90px_90px]" />

            {/* PULSE GRID ANIMATION */}
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
              <ServicePulse d="M 450 0 V 600" delay={2.2} />

              <ServicePulse d="M 0 90 H 800" delay={0.5} />
              <ServicePulse d="M 0 180 H 800" delay={2} />
              <ServicePulse d="M 0 270 H 800" delay={3.5} />
              <ServicePulse d="M 0 360 H 800" delay={1.2} />
              <ServicePulse d="M 0 450 H 800" delay={2.8} />
            </svg>

            <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-12 min-h-[300px]">
              <p className="text-lg md:text-[22px] text-white/90">
                Try Our AI Solutions that Power Modern Businesses with Cutting-Edge Technology.
              </p>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            style={{ 
              x: isDesktop ? rightX : 0, 
              opacity: rightOpacity 
            }}
            className="lg:col-span-7 bg-[#111111] rounded-[32px] p-6 md:p-10 flex flex-col gap-8 shadow-2xl"
          >
            <div>
              <p className="text-white/95 text-base md:text-lg mb-6 leading-relaxed">
                We deliver tailored technology solutions across diverse industries, helping businesses adapt, innovate, and grow in a rapidly evolving digital landscape. Our expertise allows us to understand industry-specific challenges and build solutions that drive real impact.
              </p>

              <button className="px-8 py-3.5 rounded-full bg-[#0ea5e9] text-white font-semibold hover:bg-[#0284c7] transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                Industries we've innovated
              </button>
            </div>

            {/* Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
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
                  className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] hover:bg-[#222] hover:border-[#334155] transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-[#0ea5e9]" />
                  </div>
                  <span className="text-gray-300 text-sm md:text-base font-medium">
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
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <ellipse
        rx="15"
        ry="5"
        fill="url(#service-pulse-gradient)"
        // style={{ filter: "blur(4px)" }}
      >
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

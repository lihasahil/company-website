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
import { useRouter } from "next/navigation";

// --- SUB-COMPONENTS ---

interface ServicePulseProps {
  d: string;
  delay?: number;
  duration?: number;
}

const ServicePulse: React.FC<ServicePulseProps> = ({
  d,
  delay = 0,
  duration = 4,
}) => (
  <g>
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 2, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <ellipse rx="10" ry="5" fill="url(#service-pulse-gradient)">
        <animateMotion
          dur={`${duration}s`}
          repeatCount="indefinite"
          path={d}
          rotate="auto"
        />
      </ellipse>
      <ellipse rx="7" ry="3" fill="#056DBC">
        <animateMotion
          dur={`${duration}s`}
          repeatCount="indefinite"
          path={d}
          rotate="auto"
        />
      </ellipse>
    </motion.g>
  </g>
);

// --- MAIN COMPONENT ---

const ServicesSection = () => {
  const navigate = useRouter();
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
  const rightX = useTransform(smoothProgress, [0, 0.5, 1], [80, 0, 80]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const services = [
    { name: "Natural Language Processing", icon: Search },
    { name: "AI Model Development", icon: Brain },
    { name: "Machine Learning", icon: Cpu },
    { name: "Computer Vision", icon: Eye },
    { name: "Predictive Analytics", icon: BarChart3 },
    { name: "AI Automation", icon: Zap },
    { name: "Data Intelligence", icon: Database },
    { name: "Chatbot Development", icon: MessageSquare },
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
  const marqueeItems = activeTab === "services" ? services : industries;

  const rows = [
    activeData.slice(0, 3), // row 1 — most indented
    activeData.slice(3, 6), // row 2 — medium indent
    activeData.slice(6, 9), // row 3 — flush left (may have 2 items)
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#fcfcfc] py-12 md:py-24 px-4 sm:px-6 md:px-10 overflow-hidden font-urbanist"
    >
      {/* SECTION-WIDE GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-size-[60px_60px] sm:bg-size-[80px_80px] md:bg-size-[100px_100px] pointer-events-none z-0" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700&display=swap');
        .font-urbanist { font-family: 'Urbanist', sans-serif; }
       @keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee { animation: marquee 20s linear infinite; }
      `}</style>

      {/* SHARED DEFS FOR PULSES */}
      <svg width="0" height="0" className="absolute invisible">
        <defs>
          <linearGradient
            id="service-pulse-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* SHARED TOGGLE */}
        <motion.div
          onViewportEnter={() => setExpanded(true)}
          viewport={{ once: true, margin: "-100px" }}
          className="relative flex p-1.5 bg-white rounded-full border border-gray-100 shadow-sm mb-8 md:mb-12 overflow-hidden mx-auto h-12 sm:h-13"
        >
          <button
            onClick={() => setActiveTab("services")}
            className={`relative px-8 py-2.5 rounded-full text-sm font-semibold transition-all z-10 ${
              activeTab === "services"
                ? "bg-[#0A0A0A] text-white shadow-lg"
                : "text-gray-500"
            }`}
          >
            Our Services
          </button>
          <button
            onClick={() => setActiveTab("industries")}
            className={`relative px-8 py-2.5 rounded-full text-sm font-semibold transition-all z-10 ${
              activeTab === "industries"
                ? "bg-[#0A0A0A] text-white shadow-lg"
                : "text-gray-500"
            }`}
          >
            Industries We Serve
          </button>
        </motion.div>

        {/* --- MOBILE LAYOUT (Responsive Design) --- */}
        <div className="lg:hidden w-full flex flex-col items-center">
          <h2 className="text-lg sm:text-xl font-bold text-center text-[#111] mb-4">
            Complete AI Solutions for Your Needs
          </h2>

          <div className="w-full flex flex-col gap-8">
            {/* Mobile Card */}
            <div className="relative w-full rounded-[32px] overflow-hidden bg-[#0A0A0A] aspect-[4/5] sm:aspect-video shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e3a8a_0%,transparent_70%)] opacity-40 z-0" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[60px_60px] opacity-30" />

              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50 z-10">
                {[100, 250, 400, 550, 700, 850].map((x, i) => (
                  <ServicePulse
                    key={`mv-${i}`}
                    d={`M ${x} 0 V 1000`}
                    delay={i * 0.4}
                    duration={2.5}
                  />
                ))}
                {[100, 250, 400, 550].map((y, i) => (
                  <ServicePulse
                    key={`mh-${i}`}
                    d={`M 0 ${y} H 1500`}
                    delay={i * 0.6}
                    duration={2.5}
                  />
                ))}
              </svg>

              <div className="absolute top-8 left-0 right-0 z-30 overflow-hidden py-2">
                <div
                  className="flex animate-marquee"
                  style={{ width: "max-content" }}
                >
                  {[
                    ...marqueeItems,
                    ...marqueeItems,
                    ...marqueeItems,
                    ...marqueeItems,
                  ].map((item, i) => (
                    <div
                      key={`m-${i}`}
                      className="flex items-center gap-2 px-5 py-2 mx-2 rounded-full shadow-lg border bg-white border-gray-100 text-gray-900 whitespace-nowrap flex-shrink-0"
                    >
                      <div className={"text-blue-600"}>
                        {React.createElement(item.icon, { size: 14 })}
                      </div>
                      <span className="text-[13px] font-bold uppercase tracking-wide">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-10 left-8 right-8 z-20">
                <p className="text-[18px] sm:text-xl text-white font-medium max-w-2xl leading-snug">
                  Try Our AI Solutions that Power Modern Businesses with
                  Cutting-Edge Technology.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 px-2 items-end">
              <p className="text-gray-700 text-[15px] leading-relaxed">
                We harness modern technologies to create smart, efficient, and
                scalable solutions. By blending innovation with practical
                execution, we build systems that enhance productivity and
                deliver meaningful insights.
              </p>
              <button
                onClick={() => navigate.push("/services")}
                className="w-[60%] px-4 py-4 bg-[#056DBC] text-white rounded-full font-semibold  text-[15px] shadow-[0_4px_25px_rgba(5,109,188,0.3)]"
              >
                View All Our Services
              </button>
            </div>
          </div>
        </div>

        {/* --- DESKTOP LAYOUT (Original Logic) --- */}
        <div className="hidden lg:flex flex-col items-center w-full">
          <motion.h2
            key={activeTab + "-desktop"}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-center text-[#111] mb-12 max-w-4xl"
          >
            {activeTab === "services"
              ? "Complete AI Solutions for Your Needs"
              : "Empowering Every Sector with Intelligent Solutions"}
          </motion.h2>

          <div className="grid grid-cols-12 gap-8 w-full">
            {/* Left Card */}
            <motion.div
              style={{ x: leftX, opacity }}
              className="col-span-5 relative rounded-4xl overflow-hidden bg-[#0D0D0D] shadow-2xl h-[450px]"
            >
              <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.45)_0%,rgba(0,0,0,0)_60%)] z-0" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff22_1px,transparent_2px),linear-gradient(to_bottom,#ffffff22_1px,transparent_2px)] bg-size-[90px_90px]" />

              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70">
                <ServicePulse d="M 90 0 V 600" delay={0} />
                <ServicePulse d="M 270 0 V 600" delay={3} />
                <ServicePulse d="M 0 180 H 800" delay={2} />
                <ServicePulse d="M 0 360 H 800" delay={1.2} />
              </svg>

              <div className="relative z-20 flex flex-col justify-end h-full p-5 ">
                <p className="text-[18px] text-white font-thin leading-snug">
                  Try Our AI Solutions that Power Modern Businesses with
                  Cutting-Edge Technology.
                </p>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              style={{ x: rightX, opacity }}
              className="col-span-7 bg-[#111111] rounded-4xl p-10 flex flex-col gap-6 shadow-2xl h-[450px]"
            >
              <div className="flex flex-col gap-4">
                <p className="text-white/90 text-base leading-relaxed">
                  We deliver tailored technology solutions across diverse
                  industries, helping businesses adapt, innovate, and grow in a
                  rapidly evolving digital landscape. Our expertise allows us to
                  understand industry-specific challenges and build solutions
                  that drive real impact.
                </p>
                <div>
                  <button className="px-6 py-3 rounded-full bg-[#056DBC] text-white font-medium hover:bg-[#0284c7] transition-colors">
                    Industries we&apos;ve innovated
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 mt-10">
                {rows.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex gap-2.5 -mx-5">
                    {row.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: (rowIndex * 3 + index) * 0.05,
                          duration: 0.3,
                        }}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-full border whitespace-nowrap
            bg-[#1c1c1e] border-[#2e2e30]"
                      >
                        <item.icon
                          size={15}
                          className="text-[#0ea5e9] shrink-0"
                        />
                        <span className="text-gray-300 text-[10px] xl:text-[13.5px]">
                          {item.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

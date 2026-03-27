"use client";

import React from "react";
import { 
  Phone, 
  Cloud, 
  Search, 
  Smartphone, 
  Cpu, 
  Laptop, 
  MemoryStick as Microchip,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

const HeroAI = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#020617] text-white overflow-hidden font-sans">
      
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

      {/* AMBIENT GLOWS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full" />

      {/* NAVBAR */}
      <nav className="relative z-50 flex justify-between items-center px-6 md:px-16 py-6 border-b border-white/5 bg-[#020617]/50 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-500/10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
              <path d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8z" />
              <path d="M8 12l2-2 4 4 2-2" />
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight">Next Wave AI</span>
        </div>

        <div className="hidden lg:flex gap-12 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Industries</a>
          <a href="#" className="hover:text-white transition-colors">Research</a>
          <a href="#" className="hover:text-white transition-colors">Technology</a>
        </div>

        <button className="flex items-center gap-2 bg-[#0070f3] hover:bg-blue-600 transition-all px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-500/20">
          <Phone size={16} /> Contact Us
        </button>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex flex-col items-center text-center mt-24 px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Next-Gen AI and Automation
        </h1>

        <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-12">
          From customer support to complex business workflows, our technology <br className="hidden md:block" />
          helps you reduce costs, increase efficiency, and scale without limits.
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          <button className="px-8 py-4 rounded-full bg-[#1e293b] text-white font-semibold hover:bg-[#334155] transition-all border border-white/5">
            Learn More About Us
          </button>
          <button className="px-8 py-4 rounded-full bg-[#0070f3] text-white font-semibold hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/30">
            Free Consultation
          </button>
        </div>
      </div>

      {/* AI NETWORK VISUALIZATION */}
      <div className="relative z-10 w-full max-w-5xl mx-auto h-[500px] mt-12 flex items-center justify-center">
        
        {/* SVG CONNECTIONS */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.2))" }}>
          {/* Paths and Pulses */}
          <NetworkPath d="M 250 150 Q 400 150 450 250" /> {/* Cloud */}
          <NetworkPath d="M 320 280 Q 400 280 450 280" /> {/* Search */}
          <NetworkPath d="M 280 410 Q 400 410 450 310" /> {/* Phone */}
          
          <NetworkPath d="M 800 150 Q 650 150 600 250" /> {/* CPU */}
          <NetworkPath d="M 730 280 Q 650 280 600 280" /> {/* Laptop */}
          <NetworkPath d="M 770 410 Q 650 410 600 310" /> {/* Chip */}
        </svg>

        {/* NODES - Left Side */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Cloud */}
          <div className="absolute top-[120px] left-[200px] pointer-events-auto">
            <Node icon={<Cloud size={24} />} title="Cloud" />
          </div>
          {/* Search */}
          <div className="absolute top-[256px] left-[270px] pointer-events-auto">
            <Node icon={<Search size={24} />} title="Search" />
          </div>
          {/* Phone */}
          <div className="absolute top-[386px] left-[230px] pointer-events-auto">
            <Node icon={<Smartphone size={24} />} title="Phone" />
          </div>

          {/* AI CENTER CHIP */}
          <div className="relative z-30 w-32 h-32 rounded-2xl bg-[#0f172a] border-2 border-blue-500/50 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.4)] pointer-events-auto">
            <div className="absolute -left-2 top-4 w-2 h-1 bg-blue-500" />
            <div className="absolute -left-2 top-8 w-2 h-1 bg-blue-500" />
            <div className="absolute -left-2 top-12 w-2 h-1 bg-blue-500" />
            <div className="absolute -left-2 top-16 w-2 h-1 bg-blue-500" />
            <div className="absolute -right-2 top-4 w-2 h-1 bg-blue-500" />
            <div className="absolute -right-2 top-8 w-2 h-1 bg-blue-500" />
            <div className="absolute -right-2 top-12 w-2 h-1 bg-blue-500" />
            <div className="absolute -right-2 top-16 w-2 h-1 bg-blue-500" />
            
            <span className="text-4xl font-black bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent italic">AI</span>
          </div>

          {/* NODES - Right Side */}
          {/* CPU */}
          <div className="absolute top-[120px] right-[200px] pointer-events-auto">
            <Node icon={<Cpu size={24} />} title="CPU" />
          </div>
          {/* Laptop */}
          <div className="absolute top-[256px] right-[270px] pointer-events-auto">
            <Node icon={<Laptop size={24} />} title="Laptop" />
          </div>
          {/* Microchip */}
          <div className="absolute top-[386px] right-[230px] pointer-events-auto">
            <Node icon={<Microchip size={24} />} title="Chip" />
          </div>
        </div>

      </div>

      {/* FOOTER GLOW */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
};

const NetworkPath = ({ d }: { d: string }) => (
  <g>
    <path 
      d={d} 
      fill="none" 
      stroke="#1e293b" 
      strokeWidth="2" 
    />
    <motion.circle
      r="4"
      fill="#60a5fa"
      style={{ filter: "blur(2px) shadow(0 0 10px #3b82f6)" }}
    >
      <animateMotion
        dur="3s"
        repeatCount="indefinite"
        path={d}
      />
    </motion.circle>
    <motion.circle
      r="2"
      fill="#fff"
    >
      <animateMotion
        dur="3s"
        repeatCount="indefinite"
        path={d}
      />
    </motion.circle>
  </g>
);

const Node = ({ icon, title }: { icon: React.ReactNode; title: string }) => {
  return (
    <div className="w-16 h-16 rounded-xl bg-[#1e293b]/80 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-[#1e293b] transition-all shadow-lg group cursor-pointer relative">
      <div className="absolute inset-0 rounded-xl bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors" />
      {icon}
    </div>
  );
};

export default HeroAI;

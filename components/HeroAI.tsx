"use client";

import React from "react";

import { motion } from "framer-motion";

const HeroAI = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-transparent text-white overflow-hidden font-sans">
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Vertical lines — 10 columns */}
          {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((pct) => (
            <line
              key={`v-${pct}`}
              x1={`${pct}%`}
              y1="0"
              x2={`${pct}%`}
              y2="100%"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="1"
            />
          ))}
          {/* Horizontal lines — 10 rows */}
          {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((pct) => (
            <line
              key={`h-${pct}`}
              x1="0"
              y1={`${pct}%`}
              x2="100%"
              y2={`${pct}%`}
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      {/* CUSTOM SVG LIGHT FLARES */}
      <div className="absolute top-0 right-0 pointer-events-none z-10">
        <div className="relative">
          {/* Flare 1 */}
          <svg
            width="683"
            height="734"
            viewBox="0 0 683 734"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-100px] right-[-100px] w-[400px] md:w-[700px] h-auto opacity-80"
          >
            <g filter="url(#filter0_f_38_922)">
              <path
                d="M131.071 596.191C122.704 584.702 124.708 569.061 135.697 560.09L686.314 110.62C719.991 83.1294 771.119 89.2488 797.528 123.931C823.746 158.362 814.682 206.646 777.734 229.374L169.247 603.671C156.621 611.437 139.771 608.136 131.071 596.191Z"
                fill="url(#paint0_linear_38_922)"
                fillOpacity="0.8"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_38_922"
                x="1.52588e-05"
                y="-32.5198"
                width="938.457"
                height="766.303"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="62.9567"
                  result="effect1_foregroundBlur_38_922"
                />
              </filter>
              <linearGradient
                id="paint0_linear_38_922"
                x1="128.419"
                y1="593.638"
                x2="778.351"
                y2="98.7461"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#59B8FF" stopOpacity="0" />
                <stop offset="1" stopColor="#213586" />
              </linearGradient>
            </defs>
          </svg>

          {/* Flare 2 */}
          <svg
            width="641"
            height="529"
            viewBox="0 0 641 529"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-50px] right-[-50px] w-[300px] md:w-[600px] h-auto opacity-60"
          >
            <g filter="url(#filter0_f_38_923)">
              <path
                d="M129.658 393.409C123.483 384.834 125.098 373.203 133.372 366.65L673.731 -61.3289C699.351 -81.6205 737.646 -76.7623 757.489 -50.7034C777.216 -24.7953 770.646 11.5074 743.073 28.9457L158.135 398.888C148.766 404.814 136.116 402.38 129.658 393.409Z"
                fill="url(#paint0_linear_38_923)"
                fillOpacity="0.5"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_38_923"
                x="1.52588e-05"
                y="-199.794"
                width="894.798"
                height="727.832"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="62.9567"
                  result="effect1_foregroundBlur_38_923"
                />
              </filter>
              <linearGradient
                id="paint0_linear_38_923"
                x1="127.632"
                y1="391.629"
                x2="739.523"
                y2="-74.2969"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#59B8FF" stopOpacity="0" />
                <stop offset="1" stopColor="#004E89" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex flex-col items-center text-center pt-8 md:pt-32 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl mt-10 sm:mt-0  md:text-7xl font-bold tracking-tighter mb-12 md:mb-0 bg-clip-text text-transparent leading-[1.1]"
         
        >
          <span
           style={{
            background: "linear-gradient(0deg, #F2F2F2 21.43%, #8C8C8C 80.36%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          >
          Next-Gen AI and Automation
          </span>
        </motion.h1>

        {/* MOBILE AI NETWORK VISUALIZATION - Only visible on small screens */}
        <div className="md:hidden relative w-full h-[350px] flex items-center justify-center overflow-hidden">
          <div className="scale-[3.0] sm:scale-[3.8] transition-transform duration-500 flex items-center justify-center w-full h-full">
            <img 
              src="/Circuit.svg" 
              alt="AI Circuit Visualization" 
              className="w-[1445px] h-[595px] object-contain shrink-0" 
            />
          </div>
        </div>

        <p className="relative z-30 max-w-2xl text[#f2f2f2] text-xl md:text-base font-light leading-relaxed mb-6 md:mb-2 px-4 -mt-40 md:mt-0">
          From customer support to complex business workflows, our technology{" "}
          <br className="hidden md:block" />
          helps you reduce costs, increase efficiency, and scale without limits.
        </p>

        <div className="flex flex-col z-20 sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0 pb-2 md:pb-0">
          <button className="px-4 py-2 rounded-full bg-[#F2F2F233] text-white font-semibold hover:bg-[#F2F2F233]/20 transition-all border border-[#f2f2f2] text-sm md:text-base">
            Learn More About Us
          </button>
          <button className="px-4 py-2 rounded-full bg-[#056DBC] text-white font-semibold hover:bg-[#056DBC]/80 transition-all text-sm md:text-base">
            Free Consultation
          </button>
        </div>
      </div>

      {/* DESKTOP AI NETWORK VISUALIZATION - Only visible on medium screens and up */}
      <div className="hidden md:flex relative z-10 w-full h-[560px] items-center justify-center overflow-hidden">
        <div className="scale-90 lg:scale-100 transition-transform duration-500 flex items-center justify-center w-full h-full">
          <div className="relative w-[1200px] h-[600px] flex items-center justify-center shrink-0">
            {/* SVG CONNECTIONS */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <g>
                <NetworkPath d="M 132 50 L 400 50 L 400 265 L 544 265" />
                <NetworkPath d="M 262 280 L 450 280 L 450 290 L 544 290" />
                <NetworkPath d="M 10 540 L 400 540 L 400 315 L 544 315" />
                <NetworkPath d="M 162 430 L 420 430 L 420 340 L 544 340" />
                <NetworkPath d="M 1068 50 L 800 50 L 800 265 L 656 265" />
                <NetworkPath d="M 938 280 L 750 280 L 750 290 L 656 290" />
                <NetworkPath d="M 1038 430 L 780 430 L 780 315 L 656 315" />
                <NetworkPath d="M 1190 540 L 800 540 L 800 340 L 656 340" />
                <NetworkPath d="M 570 356 L 570 600" />
                <NetworkPath d="M 590 356 L 590 600" />
                <NetworkPath d="M 610 356 L 610 600" />
                <NetworkPath d="M 630 356 L 630 600" />
              </g>
            </svg>

            {/* NODES */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[20px] left-[100px] pointer-events-auto">
                <Node
                  icon={
                    <img src="/cloud.svg" alt="Cloud" width={30} height={24} />
                  }
                />
              </div>
              <div className="absolute top-[250px] left-[230px] pointer-events-auto">
                <Node
                  icon={
                    <img src="/mag.svg" alt="Cloud" width={24} height={24} />
                  }
                />
              </div>
              <div className="absolute top-[400px] left-[130px] pointer-events-auto">
                <Node
                  icon={
                    <img src="/mob.svg" alt="Cloud" width={24} height={24} />
                  }
                />
              </div>


              {/* AI CENTER CHIP */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-28 h-28 rounded-2xl bg-[#181818] border-[2px] border-[#f2f2f2] flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)] pointer-events-auto shrink-0">
                <div className="absolute -left-3 inset-y-0 h-full w-1.5 flex flex-col items-center">
                  {[265, 290, 315, 340].map((y) => (
                    <div
                      key={y}
                      style={{ top: `${y - 244 - 6}px` }}
                      className="absolute w-3 h-2 bg-[#1d1d1d]"
                    />
                  ))}
                </div>
                <div className="absolute -right-3 inset-y-0 h-full w-1.5 flex flex-col items-center">
                  {[265, 290, 315, 340].map((y) => (
                    <div
                      key={y}
                      style={{ top: `${y - 244 - 6}px` }}
                      className="absolute w-3 h-2 bg-[#1d1d1d]"
                    />
                  ))}
                </div>
                <div className="absolute -bottom-3 inset-x-0 w-full h-1.5 flex items-center">
                  {[570, 590, 610, 630].map((x) => (
                    <div
                      key={x}
                      style={{ left: `${x - 544 - 6}px` }}
                      className="absolute w-2 h-3 bg-[#1d1d1d]"
                    />
                  ))}
                </div>
                <span
                  className="text-5xl font-black text-white tracking-tighter"
                  style={{
                    background:
                      "linear-gradient(0deg, #F2F2F2 21.43%, #8C8C8C 80.36%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  AI
                </span>
              </div>

              <div className="absolute top-[20px] right-[100px] pointer-events-auto">
                <Node
                  icon={
                    <img src="/chip.svg" alt="Cloud" width={35} height={24} />
                  }
                />
              </div>
              <div className="absolute top-[250px] right-[230px] pointer-events-auto">
                <Node
                  icon={
                    <img src="/pc.svg" alt="Cloud" width={35} height={24} />
                  }
                />
              </div>
              <div className="absolute top-[400px] right-[130px] pointer-events-auto">
                <Node
                  icon={
                    <img src="/sim.svg" alt="Cloud" width={24} height={24} />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER GLOW */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
};

interface NetworkPathProps {
  d: string;
}

const NetworkPath: React.FC<NetworkPathProps> = ({ d }) => (
  <g>
    <path
      d={d}
      fill="none"
      stroke="#1D1D1D"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <motion.g
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <ellipse
        rx="12"
        ry="4"
        fill="url(#pulse-gradient)"
        style={{ filter: "blur(4px)" }}
      >
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path={d}
          rotate="auto"
        />
      </ellipse>
      <ellipse rx="7" ry="3" fill="#056DBC">
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path={d}
          rotate="auto"
        />
      </ellipse>
    </motion.g>
    <defs>
      <linearGradient id="pulse-gradient">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
        <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
      </linearGradient>
    </defs>
  </g>
);

interface NodeProps {
  icon: React.ReactNode;
}

const Node: React.FC<NodeProps> = ({ icon }) => {
  return (
    <div className="group relative rounded-2xl p-0.5 bg-[#F2F2F2]">
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#181818] shadow-[inset_0_1px_2px_rgba(255,255,255,0.06),0_8px_20px_rgba(0,0,0,0.6)] transition-all duration-300">
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-white/10 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-blue-400/20 group-hover:ring-blue-400/40 transition-all duration-300" />
        <div className="relative z-10 text-gray-300 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default HeroAI;
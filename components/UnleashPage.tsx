/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function UnleashPage() {
  const sectionRef = useRef(null);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth > 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  // Phase 1 (0 → 0.5): background + SVG animate in
  const y = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["#ffffff", "#000000"],
  );

  // Phase 2 (0.5 → 1): content enters after image is fully visible
  const entranceProgress = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  const leftX = useTransform(entranceProgress, [0, 1], ["-120px", "0px"]);
  const leftOpacity = useTransform(entranceProgress, [0, 0.5], [0, 1]);

  const centerY = useTransform(entranceProgress, [0, 1], ["80px", "0px"]);
  const centerOpacity = useTransform(entranceProgress, [0, 0.6], [0, 1]);

  const rightX = useTransform(entranceProgress, [0, 1], ["120px", "0px"]);
  const rightOpacity = useTransform(entranceProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={sectionRef} style={{ height: "200vh", position: "relative" }}>
      {/* Sticky wrapper — pins everything while scroll plays out */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "120vh",
          overflow: "hidden",
        }}
      >
        {/* White to black background */}
        <motion.div
          style={{
            backgroundColor,
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        />

        {/* SVG slides up from below */}
        <motion.div
          style={{
            y,
            position: "absolute",
            inset: 0,
            zIndex: 1,
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src="/abstract.svg"
            alt="background"
            className="absolute w-full h-3/4 bottom-0"
          />
        </motion.div>

        {/* Content */}
        <div
          className="flex flex-col lg:flex-row justify-around items-center gap-12 lg:gap-2 mt-10 px-6 overflow-y-auto lg:overflow-visible h-[80vh] lg:h-auto"
          style={{ position: "relative", zIndex: 2, color: "white" }}
        >
          {/* Left — slides in from left */}
          <motion.div
            style={{ 
              x: isDesktop ? leftX : 0, 
              opacity: leftOpacity 
            }}
            className="flex flex-col gap-6 scale-90 md:scale-100"
          >
            <div className="p-4 w-56 h-98 rounded-3xl border border-white/20 relative overflow-hidden bg-black/20 backdrop-blur-sm">
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: `radial-gradient(61.14% 90% at 50% 50%, rgba(0,0,0,0.9) 75%, rgba(0,0,0,0) 100%), url('/card.gif')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start">
                  <span className="text-[1rem] font-light text-[#F2F2F2]">
                    Satisfied
                    <br />
                    Clients
                  </span>
                  <span className="text-[1.5rem] text-[#F2F2F2] font-semibold">50+</span>
                </div>
                <div className="flex justify-center items-end gap-2">
                  <img src="/stars.svg" alt="" />
                </div>
                <span className="text-[0.9rem] font-light text-[#F2F2F2]/80 leading-relaxed">
                  Trusted by 99+ partners, we transform complex data into
                  measurable ROI. Join the leaders scaling their future with our
                  precision AI solutions.
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between p-6 border border-white/20 rounded-3xl w-56 h-64 bg-black/20 backdrop-blur-sm">
              <div className="flex flex-col gap-4 w-full">
                <div className="flex justify-between items-start">
                  <span className="text-[1rem] font-light text-[#F2F2F2]">
                    Projects
                    <br />
                    Completed
                  </span>
                  <span className="text-[1.5rem] text-[#F2F2F2] leading-none font-semibold">
                    50<sup className="text-[0.6rem] align-super">+</sup>
                  </span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <span className="text-[1rem] font-light text-[#F2F2F2]">
                    Dedicated
                    <br />
                    Support
                  </span>
                  <span className="text-[1.5rem] text-[#F2F2F2] font-semibold">24/7</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-[1rem] font-light text-[#F2F2F2]">
                    Client
                    <br />
                    Retention
                  </span>
                  <span className="text-[1.5rem] text-[#F2F2F2] leading-none font-semibold">
                    92<sup className="text-[0.6rem] align-super">%</sup>
                  </span>
                </div>
              </div>
              <button className="bg-[#056DBC] hover:bg-[#0284c7] transition-colors rounded-full px-6 py-2 text-sm font-medium w-full mt-4">
                Read Case Studies
              </button>
            </div>
          </motion.div>

          {/* Center — rises from bottom */}
          <motion.div
            style={{ y: centerY, opacity: centerOpacity }}
            className="flex items-center justify-center order-first lg:order-none"
          >
            <div className="max-w-7xl mx-auto text-center px-4">
              <h1 className="text-4xl md:text-6xl font-medium bg-linear-to-t from-[#8C8C8C] to-[#FFFFFF] bg-clip-text text-transparent leading-tight">
                Unleash your full Potential
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-2">
                <h2 className="text-4xl md:text-6xl font-medium bg-linear-to-t from-[#8C8C8C] to-[#FFFFFF] bg-clip-text text-transparent leading-tight">
                  with Next Wave AI
                </h2>
                <img src="/nxt.svg" alt="icon" className="w-8 md:w-10" />
              </div>
              <p className="text-center lg:text-left font-light text-base md:text-lg mt-12 md:mt-20 max-w-xl mx-auto opacity-80">
                NextWaveAI builds AI-powered chatbots, scalable backend systems,
                and automation solutions for businesses across industries.
              </p>
            </div>
          </motion.div>

          {/* Right — slides in from right */}
          <motion.div
            style={{ 
              x: isDesktop ? rightX : 0, 
              opacity: rightOpacity 
            }}
            className="flex flex-col gap-6 scale-90 md:scale-100"
          >
            <div className="flex flex-col items-start justify-between p-6 border border-white/20 rounded-3xl w-56 h-98 bg-black/20 backdrop-blur-sm">
              <div className="flex justify-between">
                <span className="text-2xl font-medium">
                  Insights &<br />
                  Stories
                </span>
              </div>
              <img src="/design1.gif" alt="Design" className="w-full h-auto rounded-xl my-4" />
              <span className="text-[0.8rem] text-white/60">
                How our services shape industries.
              </span>
            </div>
            <div className="flex flex-col items-start justify-between p-6 border border-white/20 rounded-3xl w-56 h-64 bg-black/20 backdrop-blur-sm">
              <h1 className="text-2xl font-medium">
                Masters of <br />
                Agentic AI
              </h1>
              <div className="grid grid-cols-2 gap-4 items-center mt-4 mx-auto">
                <img
                  src="/view.svg"
                  alt="View"
                  className="bg-[#3798E3] rounded-full p-3 w-12 h-12"
                />
                <img
                  src="/robot.svg"
                  alt="Robot"
                  className="rounded-full border border-white/20 p-3 w-12 h-12"
                />
                <img
                  src="/roarm.svg"
                  alt="Arm"
                  className="rounded-full border border-white/20 p-3 w-12 h-12"
                />
                <img
                  src="/editing.svg"
                  alt="Editing"
                  className="rounded-full border border-white/20 p-3 w-12 h-12"
                />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

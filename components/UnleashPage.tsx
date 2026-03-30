/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function UnleashPage() {
  const sectionRef = useRef(null);

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
          height: "100vh",
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
          className="flex justify-around items-center gap-2 mt-10"
          style={{ position: "relative", zIndex: 2, color: "white" }}
        >
          {/* Left — slides in from left */}
          <motion.div
            style={{ x: leftX, opacity: leftOpacity }}
            className="flex flex-col gap-8"
          >
            <div className="p-4 w-56 h-100 rounded-3xl border border-[#F2F2F2] relative overflow-hidden">
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: `radial-gradient(61.14% 90% at 50% 50%, rgba(0,0,0,0.95) 75%, rgba(0,0,0,0) 100%), url('/card.gif')`,
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
                  <span className="text-[1.5rem] text-[#F2F2F2]">50+</span>
                </div>
                <div className="flex justify-center items-end gap-2">
                  <img src="/stars.svg" alt="" />
                </div>
                <span className="text-[0.9rem] font-light text-[#F2F2F2]">
                  Trusted by 99+ partners, we transform complex data into
                  measurable ROI. Join the leaders scaling their future with our
                  precision AI solutions.
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between p-4 border border-[#F2F2F2] rounded-3xl w-56 h-64">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <span className="text-[1rem] font-light text-[#F2F2F2]">
                    Projects
                    <br />
                    Completed
                  </span>
                  <span className="text-[1.5rem] text-[#F2F2F2] leading-none">
                    50<sup className="text-[0.6rem] align-super">+</sup>
                  </span>
                </div>
                <div className="flex justify-between items-start gap-15">
                  <span className="text-[1rem] font-light text-[#F2F2F2]">
                    Dedicated
                    <br />
                    Support
                  </span>
                  <span className="text-[1.5rem] text-[#F2F2F2]">24/7</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-[1rem] font-light text-[#F2F2F2]">
                    Client
                    <br />
                    Retention
                  </span>
                  <span className="text-[1.5rem] text-[#F2F2F2] leading-none">
                    92<sup className="text-[0.6rem] align-super">%</sup>
                  </span>
                </div>
              </div>
              <button className="bg-[#056DBC] rounded-full p-2">
                Read Case Studies
              </button>
            </div>
          </motion.div>

          {/* Center — rises from bottom */}
          <motion.div
            style={{ y: centerY, opacity: centerOpacity }}
            className="flex items-center justify-center"
          >
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-6xl font-thin bg-linear-to-t from-[#8C8C8C] to-[#FFFFFF] bg-clip-text text-transparent">
                Unleash your full Potential
              </h1>
              <div className="flex items-center -ml-35 justify-center gap-4">
                <h2 className="text-6xl font-thin bg-linear-to-t from-[#8C8C8C] to-[#FFFFFF] bg-clip-text text-transparent">
                  with Next Wave AI
                </h2>
                <img src="/nxt.svg" className="w-10" />
              </div>
              <p className="text-left font-light text-md mt-20">
                NextWaveAI builds AI-powered chatbots, scalable backend systems,
                and automation
                <br /> solutions for businesses across industries.
              </p>
            </div>
          </motion.div>

          {/* Right — slides in from right */}
          <motion.div
            style={{ x: rightX, opacity: rightOpacity }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col items-start justify-between p-4 border border-[#F2F2F2] rounded-3xl w-56 h-100">
              <div className="flex justify-between">
                <span className="text-2xl">
                  Insights &<br />
                  Stories
                </span>
              </div>
              <img src="/design1.gif" alt="" className="w-full h-auto" />
              <span className="text-[0.8rem]">
                How our services shape industries.
              </span>
            </div>
            <div className="flex flex-col items-start justify-between p-4 border border-[#F2F2F2] rounded-2xl w-56 h-64">
              <h1 className="text-2xl">
                Masters of <br />
                Agentic AI
              </h1>
              <div className="grid grid-cols-2 gap-4 items-center mt-4 mx-auto">
                <img
                  src="/view.svg"
                  alt=""
                  className="bg-[#3798E3] rounded-full p-5"
                />
                <img
                  src="/robot.svg"
                  alt=""
                  className="rounded-full border border-[#FFFFFF] p-5"
                />
                <img
                  src="/roarm.svg"
                  alt=""
                  className="rounded-full border border-[#FFFFFF] p-5"
                />
                <img
                  src="/editing.svg"
                  alt=""
                  className="rounded-full border border-[#FFFFFF] p-5"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

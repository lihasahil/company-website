/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";

export default function UnleashPage() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["#ffffff", "#000000"],
  );

  const entranceProgress = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const leftX = useTransform(entranceProgress, [0, 1], ["-80px", "0px"]);
  const leftOpacity = useTransform(entranceProgress, [0, 0.5], [0, 1]);
  const centerY = useTransform(entranceProgress, [0, 1], ["60px", "0px"]);
  const centerOpacity = useTransform(entranceProgress, [0, 0.6], [0, 1]);
  const rightX = useTransform(entranceProgress, [0, 1], ["80px", "0px"]);
  const rightOpacity = useTransform(entranceProgress, [0, 0.5], [0, 1]);

  // Shared animation config
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: cubicBezier(0.22, 1, 0.36, 1), delay },
    }),
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: cubicBezier(0.22, 1, 0.36, 1), delay },
    }),
  };

  const slideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: cubicBezier(0.22, 1, 0.36, 1), delay },
    }),
  };

  return (
    <>
      {/* ── MOBILE / TABLET layout (hidden on lg+) ── */}
      <section className="flex lg:hidden flex-col items-center justify-start bg-black text-white py-10 px-5 gap-6 overflow-hidden">
        {/* Heading — fades up from bottom */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          className="text-left w-full pt-10"
        >
          <h1 className="text-4xl md:text-5xl font-medium bg-linear-to-t from-[#8C8C8C] to-[#FFFFFF] bg-clip-text text-transparent leading-tight">
            Unleash your full Potential
          </h1>
          <div className="flex items-center justify-left gap-3 mt-1">
            <h2 className="text-4xl md:text-5xl font-medium bg-linear-to-t from-[#8C8C8C] to-[#FFFFFF] bg-clip-text text-transparent">
              with Next Wave AI
            </h2>
            <img src="/nxt.svg" className="w-7 sm:w-9" alt="" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="w-full flex flex-col items-center gap-4">
          {/* Card 1 — slides in from LEFT */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            className="p-5 w-full max-w-md h-150 rounded-3xl border border-[#F2F2F2] relative overflow-hidden"
          >
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
                <span className="text-base font-light text-[#F2F2F2]">
                  Satisfied
                  <br />
                  Clients
                </span>
                <span className="text-2xl text-[#F2F2F2]">50+</span>
              </div>
              <div className="flex justify-center items-end gap-2">
                <img src="/stars.svg" alt="" className="w-full" />
              </div>
              <span className="text-sm font-light  text-[#F2F2F2]">
                Trusted by 99+ partners, we transform complex data into
                measurable ROI. Join the leaders scaling their future with our
                precision AI solutions.
              </span>
            </div>
          </motion.div>

          {/* Card 2 — slides in from RIGHT */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.05}
            className="flex flex-col items-center justify-between p-5 border border-[#F2F2F2] rounded-3xl w-full max-w-md h-64"
          >
            <div className="flex flex-col gap-3 w-full">
              <div className="flex justify-between items-start">
                <span className="text-base font-light text-[#F2F2F2]">
                  Projects
                  <br />
                  Completed
                </span>
                <span className="text-2xl text-[#F2F2F2]">50+</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-base font-light text-[#F2F2F2]">
                  Dedicated
                  <br />
                  Support
                </span>
                <span className="text-2xl text-[#F2F2F2]">24/7</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-base font-light text-[#F2F2F2]">
                  Client
                  <br />
                  Retention
                </span>
                <span className="text-2xl text-[#F2F2F2]">92%</span>
              </div>
            </div>
            <button className="bg-[#056DBC] rounded-full px-4 py-2.5 text-sm text-white w-full">
              Read Case Studies
            </button>
          </motion.div>

          {/* Card 3 — slides in from LEFT */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.05}
            className="flex flex-col items-start justify-between p-5 border border-[#F2F2F2] rounded-3xl w-full max-w-md h-150"
          >
            <span className="text-xl">
              Insights &<br />
              Stories
            </span>
            <img
              src="/design1.gif"
              alt=""
              className="w-full h-auto rounded-xl flex items-center justify-center"
            />
            <span className="text-sm text-white/70">
              How our services shape industries.
            </span>
          </motion.div>

          {/* Card 4 — slides in from RIGHT */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.05}
            className="flex flex-col items-start justify-between p-5 border border-[#F2F2F2] rounded-2xl w-full max-w-md h-64"
          >
            <h1 className="text-xl">
              Masters of <br />
              Agentic AI
            </h1>
            <div className="grid grid-cols-2 gap-4 items-center mt-2 mx-auto">
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
          </motion.div>
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          className="text-center w-full pt-10"
        >
          <p className="text-base font-light text-white/80 mt-4 leading-relaxed">
            NextWaveAI builds AI-powered chatbots, scalable backend systems, and
            automation solutions for businesses across industries.
          </p>
        </motion.div>
      </section>

      {/* ── DESKTOP layout (lg+) ── */}
      <section
        ref={sectionRef}
        className="hidden lg:block relative lg:h-[200vh]"
      >
        <div
          className="sticky top-0 overflow-hidden"
          style={{ height: "100vh" }}
        >
          {/* Background */}
          <motion.div
            style={{
              backgroundColor,
              position: "absolute",
              inset: 0,
              zIndex: 0,
            }}
          />

          {/* SVG slides up */}
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

          {/* Desktop 3-col layout */}
          <div
            className="hidden lg:flex justify-around items-center gap-2 mt-10"
            style={{ position: "relative", zIndex: 2, color: "white" }}
          >
            {/* Left */}
            <motion.div
              style={{ x: leftX, opacity: leftOpacity }}
              className="flex flex-col ml-10 gap-6"
            >
              <div className="p-4 w-52 xl:w-56 h-96 rounded-3xl border border-[#F2F2F2] relative overflow-hidden">
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
                    measurable ROI. Join the leaders scaling their future with
                    our precision AI solutions.
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-between p-4 border border-[#F2F2F2] rounded-3xl w-52 xl:w-56 h-64">
                <div className="flex flex-col gap-2 w-full">
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
                  <div className="flex justify-between items-start">
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
                <button className="bg-[#056DBC] rounded-full p-2 text-sm w-full">
                  Read Case Studies
                </button>
              </div>
            </motion.div>

            {/* Center */}
            <motion.div
              style={{ y: centerY, opacity: centerOpacity }}
              className="flex items-center justify-center flex-1 px-4 xl:px-8"
            >
              <div className="text-center">
                <h1 className="text-4xl xl:text-6xl font-medium bg-linear-to-t from-[#8C8C8C] to-[#FFFFFF] bg-clip-text text-transparent leading-tight">
                  Unleash your full Potential
                </h1>
                <div className="flex items-center justify-center gap-4 mt-1">
                  <h2 className="text-4xl xl:text-6xl font-medium bg-linear-to-t from-[#8C8C8C] to-[#FFFFFF] bg-clip-text text-transparent">
                    with Next Wave AI
                  </h2>
                  <img src="/nxt.svg" className="w-8 xl:w-10" alt="" />
                </div>
                <p className="text-left font-light text-sm xl:text-md mt-12 xl:mt-20 text-white/90">
                  NextWaveAI builds AI-powered chatbots, scalable backend
                  systems, and automation
                  <br className="hidden xl:block" /> solutions for businesses
                  across industries.
                </p>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              style={{ x: rightX, opacity: rightOpacity }}
              className="flex flex-col gap-6 mr-10"
            >
              <div className="flex flex-col items-start justify-between p-4 border border-[#F2F2F2] rounded-3xl w-52 xl:w-56 h-96">
                <span className="text-2xl">
                  Insights &<br />
                  Stories
                </span>
                <img src="/design1.gif" alt="" className="w-full h-auto" />
                <span className="text-[0.8rem]">
                  How our services shape industries.
                </span>
              </div>

              <div className="flex flex-col items-start justify-between p-4 border border-[#F2F2F2] rounded-2xl w-52 xl:w-56 h-64">
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
    </>
  );
}

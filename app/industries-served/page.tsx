/* eslint-disable @next/next/no-img-element */
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";

const industries = [
  {
    id: 0,
    title: "Technology",
    accentColor: "#32A0F4",
    description:
      "A comprehensive suite of technology solutions designed to support digital transformation, enhance system performance, and ensure secure, reliable IT operations for modern businesses.",
    features: [
      "Cloud infrastructure",
      "Managed IT services",
      "Cybersecurity solutions",
      "Software support",
    ],
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&q=80",
  },
  {
    id: 1,
    title: "Healthcare",
    accentColor: "#32F4A0",
    description:
      "Cutting-edge AI and data solutions tailored for healthcare providers, enabling smarter diagnostics, streamlined operations, and improved patient outcomes at scale.",
    features: [
      "AI diagnostics",
      "EHR integration",
      "Compliance automation",
      "Telehealth platforms",
    ],
    image:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&q=80",
  },
  {
    id: 2,
    title: "Finance",
    accentColor: "#F4A032",
    description:
      "Robust financial technology solutions that drive efficiency, reduce risk, and unlock new growth opportunities for banks, fintechs, and investment firms alike.",
    features: [
      "Risk modeling",
      "Fraud detection",
      "Algorithmic trading",
      "Regulatory reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
  },
  {
    id: 3,
    title: "Education",
    accentColor: "#A032F4",
    description:
      "Intelligent learning platforms and automation tools that help educational institutions personalize learning, reduce administrative burden, and improve student success rates.",
    features: [
      "Adaptive learning",
      "LMS integration",
      "Analytics dashboards",
      "Virtual classrooms",
    ],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
  },
];

// Reusable variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay,
    },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const, delay },
  }),
};

export default function IndustriesPage() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const goTo = (idx: number) => {
    if (idx === active) return;
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };

  const prev = () => {
    const idx = (active - 1 + industries.length) % industries.length;
    setDirection(-1);
    setActive(idx);
  };

  const next = () => {
    const idx = (active + 1) % industries.length;
    setDirection(1);
    setActive(idx);
  };

  const current = industries[active];

  // Slide variants for card content
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir * 40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
    exit: (dir: number) => ({
      x: dir * -40,
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: [0.55, 0, 1, 0.45] as [number, number, number, number],
      },
    }),
  };

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center"
      style={{ background: "#040404" }}
    >
      <Header />

      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: 1016,
          height: 1016,
          left: "calc(50% + 322px - 508px)",
          top: -508,
          background: "#21006D",
          opacity: 0.25,
          filter: "blur(257px)",
          borderRadius: "50%",
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          width: 1159,
          height: 1254,
          left: "calc(50% - 783.5px - 579.5px)",
          top: -200,
          background: "#0048FF",
          opacity: 0.12,
          filter: "blur(257px)",
          borderRadius: "50%",
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          width: 1159,
          height: 1254,
          right: "calc(50% - 937.5px - 579.5px)",
          bottom: -300,
          background: "#4D00FF",
          opacity: 0.12,
          filter: "blur(257px)",
          borderRadius: "50%",
        }}
      />

      {/* ── Hero section ── */}
      <section className="relative z-10 flex flex-col items-center pt-25 pb-0 px-6 gap-6">
        {/* Label pill */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex items-center justify-center px-5 py-1.5 rounded-full text-sm font-normal"
          style={{
            background: "rgba(50,160,244,0.10)",
            border: "1px solid rgba(50,160,244,0.20)",
            color: "#32A0F4",
            fontSize: 14,
            lineHeight: "20px",
          }}
        >
          Industries Served
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="text-center max-w-2xl"
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(40px, 6vw, 64px)",
            lineHeight: "89%",
            letterSpacing: "-0.04em",
            background:
              "linear-gradient(1.48deg, #000000 -4.77%, #8C8C8C 15.82%, #FFFFFF 94.85%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Different Industries that we have served.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-center max-w-xl"
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: 500,
            fontSize: 18,
            lineHeight: "26px",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          Specialized technical solutions and power modern businesses with
          cutting-edge technology.
        </motion.p>
      </section>

      {/* ── Card section ── */}
      <section className="relative z-10 flex flex-col items-center px-6 pt-12 pb-20 gap-8 w-full">
        {/* Main card — entrance animation */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="flex flex-row items-stretch gap-0 w-full max-w-4xl"
          style={{
            background: "rgba(0,0,0,0.20)",
            border: "1px solid rgba(255,255,255,0.21)",
            borderRadius: 22,
            padding: 12,
            minHeight: 361,
            overflow: "hidden",
          }}
        >
          {/* Image — AnimatePresence for cross-fade */}
          <div
            className="relative shrink-0 overflow-hidden"
            style={{
              width: "clamp(180px, 40%, 499px)",
              borderRadius: 18,
              minHeight: 280,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={current.image}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
                style={{ borderRadius: 18, position: "absolute", inset: 0 }}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                  transition: { duration: 0.28, ease: "easeIn" },
                }}
              />
            </AnimatePresence>
            {/* Dark overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.55) 100%)",
                borderRadius: 18,
                zIndex: 1,
              }}
            />
          </div>

          {/* Content — slides in on change */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative flex flex-col justify-center pl-6 pr-2 py-6 gap-5 flex-1"
            >
              {/* Glow blob */}
              <div
                className="pointer-events-none absolute"
                style={{
                  width: 314,
                  height: 192,
                  right: 0,
                  bottom: 0,
                  background: "#0091FF",
                  opacity: 0.2,
                  filter: "blur(65px)",
                  borderRadius: "50%",
                }}
              />

              {/* Industry title */}
              <h2
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontWeight: 700,
                  fontSize: 36,
                  lineHeight: 1,
                  color: current.accentColor,
                }}
              >
                {current.title}
              </h2>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontWeight: 400,
                  fontSize: 15,
                  lineHeight: "20px",
                  color: "rgba(255,255,255,0.70)",
                  maxWidth: 428,
                }}
              >
                {current.description}
              </p>

              {/* Key features */}
              <div>
                <p
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    marginBottom: 6,
                  }}
                >
                  Key Features:
                </p>
                <ul className="flex flex-col gap-1">
                  {current.features.map((f, i) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: 0.1 + i * 0.06,
                          duration: 0.3,
                          ease: "easeOut",
                        },
                      }}
                      style={{
                        fontFamily: "'Urbanist', sans-serif",
                        fontWeight: 400,
                        fontSize: 14,
                        lineHeight: "20px",
                        color: "rgba(255,255,255,0.70)",
                      }}
                    >
                      – {f}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Controls: prev / dots / next */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.55}
          className="flex flex-row items-center justify-center gap-6"
        >
          {/* Prev */}
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.08, opacity: 0.9 }}
            whileTap={{ scale: 0.92 }}
            className="flex items-center justify-center"
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "linear-gradient(180deg, #0091FF 0%, #005799 100%)",
              boxShadow: "inset 0px 5px 4.5px rgba(255,255,255,0.18)",
              border: "none",
              cursor: "pointer",
              fontSize: 22,
              color: "#fff",
            }}
            aria-label="Previous"
          >
            <MoveLeft />
          </motion.button>

          {/* Dots */}
          <div className="flex flex-row items-center gap-3">
            {industries.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => goTo(i)}
                animate={{
                  background: i === active ? "#25B0FF" : "#1B1B1B",
                  scale: i === active ? 1.2 : 1,
                }}
                transition={{ duration: 0.25 }}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.09)",
                  cursor: "pointer",
                  padding: 0,
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Next */}
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.08, opacity: 0.9 }}
            whileTap={{ scale: 0.92 }}
            className="flex items-center justify-center"
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "linear-gradient(180deg, #0091FF 0%, #005799 100%)",
              boxShadow: "inset 0px 5px 4.5px rgba(255,255,255,0.18)",
              border: "none",
              cursor: "pointer",
              fontSize: 22,
              color: "#fff",
            }}
            aria-label="Next"
          >
            <MoveRight />
          </motion.button>
        </motion.div>
      </section>

      {/* ── CTA Section — scroll-triggered ── */}
      <motion.section
        className="relative w-full flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: "#000000",
          padding: "108px 72px",
          gap: 48,
          isolation: "isolate",
          width: "100%",
          height: 445,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left SVG wing */}
        <img
          src="/wing-left.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-full"
          style={{ objectFit: "cover", objectPosition: "left" }}
        />

        {/* Right SVG wing */}
        <img
          src="/wing-right.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full"
          style={{ objectFit: "cover", objectPosition: "right" }}
        />

        {/* Center glow */}
        <div
          className="pointer-events-none absolute"
          style={{
            width: 199,
            height: 295,
            left: "calc(50% - 99.5px)",
            top: -3,
            background: "#0091FF",
            filter: "blur(168px)",
            borderRadius: "50%",
          }}
        />

        {/* CTA text */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-3"
          style={{ textAlign: "center" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <h2
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1,
              color: "#FFFFFF",
            }}
          >
            Not sure where to start?
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
              color: "rgba(255,255,255,0.5)",
              maxWidth: 457,
            }}
          >
            Our 30 min AI readiness call is free, focused and actionable
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
          whileHover={{ scale: 1.04, opacity: 0.92 }}
          whileTap={{ scale: 0.96 }}
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: 700,
            fontSize: 18,
            lineHeight: "40px",
            color: "#FFFFFF",
            background: "linear-gradient(180deg, #0091FF 0%, #005799 100%)",
            boxShadow: "inset 0px 5px 4.5px rgba(255,255,255,0.18)",
            borderRadius: 16,
            padding: "16px 32px",
            border: "none",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Schedule a free AI consultation
        </motion.button>
      </motion.section>

      <Footer />

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&family=Inter:wght@400;500&display=swap');
      `}</style>
    </main>
  );
}

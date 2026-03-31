/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  "Introduction",
  "Education",
  "Edge Computing",
  "Healthcare Innovation",
  "Business",
];

const relatedArticles = [
  {
    id: "01",
    title: "5 Ways AI is Changing Education Sector",
    description:
      "Explore how artificial intelligence is transforming teaching and learning for the better.",
  },
  {
    id: "02",
    title: "How AI is Revolutionizing Healthcare Diagnostics",
    description:
      "AI-powered tools are helping doctors diagnose diseases faster and more accurately.",
  },
];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("Introduction");

  return (
    <main className="relative w-full bg-[#050505] min-h-screen text-white overflow-x-hidden font-sans">
      {/* GLOBAL GRID BACKGROUND */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:120px_120px] opacity-10 pointer-events-none z-0" />

      <Header />

      <div className="relative z-10 pt-32 pb-24 px-6 md:px-16 max-w-screen mx-auto space-y-16">
        {/* TITLE SECTION */}
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-weight-900 tracking-tight text-white/90"
          >
            <span
              style={{
                background:
                  "linear-gradient(0deg, #F2F2F2 21.43%, #8C8C8C 80.36%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Insights and Stories
            </span>
          </motion.h1>
          <div
            className="absolute top-0 left-0 w-64 h-64 
                  bg-[#32A0F4]/40 
                  blur-[120px] 
                  rounded-full 
                  pointer-events-none"
          />
          <div
            className="absolute top-[50%] left-[50%] w-124 h-124 
                  bg-[#32A0F4]/20 
                  blur-[220px] 
                   
                  pointer-events-none"
          />
          <div
            className="absolute top-[10%] right-[10%] w-64 h-64 
                  bg-[#32A0F4]/40 
                  blur-[120px] 
                  rounded-full 
                  pointer-events-none"
          />
          {/* DYNAMIC TOGGLE BAR */}
          <div className="inline-flex rounded-full p-2 px-3 bg-gradient-to-r from-blue-600 to-blue-400 overflow-x-auto no-scrollbar max-w-full">
            <div className="flex items-center min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-6 py-2.5 text-sm font-bold transition-colors whitespace-nowrap ${
                    activeCategory === cat
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-black rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FEATURED STORY CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-black/50"
          >
            {/* TEXT CONTENT */}
            <div className="p-5 md:p-10 md:w-1/2 flex flex-col justify-center space-y-4">
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight leading-tight">
                Introducing NextWaveAI: The Future of Intelligent Solutions
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                <p>
                  NextWaveAI is leading the way in intelligent solutions. Our
                  mission is to provide innovative AI tools that empower
                  businesses worldwide to harness data like never before.
                </p>
                <p>
                  With machine learning, natural language processing, and
                  computer vision, we are creating smarter workflows and better
                  decision-making processes.
                </p>
                <p className="hidden lg:block text-gray-500">
                  Stay tuned for upcoming features and industry partnerships
                  that will transform the way you work.
                </p>
              </div>
            </div>

            {/* FEATURE IMAGE */}
            <div className="md:w-1/2 relative min-h-[250px] md:min-h-[450px]">
              <Image
                src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?q=80&w=2070&auto=format&fit=crop"
                alt="Intelligent Solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0A0A0A] opacity-20" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* RELATED ARTICLES SECTION */}
        <div className="space-y-8">
          <h2
            className="text-3xl md:text-4xl font-light tracking-tight text-white/50"
            style={{
              background:
                "linear-gradient(0deg, #F2F2F2 21.43%, #8C8C8C 80.36%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Related Articles
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {relatedArticles.map((article, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-[2rem] bg-[#0A0A0A] border border-white/5 p-6 flex flex-col justify-between hover:border-blue-500/30 transition-all shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl font-bold text-blue-500 tracking-tighter opacity-80">
                      {article.id}
                    </span>
                    <button className="text-blue-400 group-hover:text-blue-300 transition-colors text-sm font-bold flex items-center gap-1 group-hover:underline">
                      Read More <ChevronRight size={14} />
                    </button>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-white/100 text-white/90">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
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
    </main>
  );
}

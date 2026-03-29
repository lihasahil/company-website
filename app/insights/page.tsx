"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Header from "@/components/Header";

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
    description: "Explore how artificial intelligence is transforming teaching and learning for the better.",
  },
  {
    id: "02",
    title: "How AI is Revolutionizing Healthcare Diagnostics",
    description: "AI-powered tools are helping doctors diagnose diseases faster and more accurately.",
  },
];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("Introduction");

  return (
    <main className="relative w-full bg-[#050505] min-h-screen text-white overflow-x-hidden font-sans">
      {/* GLOBAL GRID BACKGROUND */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:120px_120px] opacity-10 pointer-events-none z-0" />

      <Header />

      <div className="relative z-10 pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto space-y-16">
        {/* TITLE SECTION */}
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-light tracking-tight text-white/90"
          >
            Insights and Stories
          </motion.h1>

          {/* DYNAMIC TOGGLE BAR */}
          <div className="inline-flex rounded-full p-1 bg-gradient-to-r from-blue-600 to-blue-400 shadow-2xl shadow-blue-500/20 overflow-x-auto no-scrollbar max-w-full">
            <div className="flex items-center min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-6 py-2.5 text-sm font-bold transition-colors whitespace-nowrap ${
                    activeCategory === cat ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-black rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
            <div className="p-10 md:p-16 md:w-1/2 flex flex-col justify-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Introducing NextWaveAI: The Future of Intelligent Solutions
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p>
                  NextWaveAI is leading the way in intelligent solutions. Our mission is to provide innovative AI tools that empower businesses worldwide to harness data like never before.
                </p>
                <p>
                  With machine learning, natural language processing, and computer vision, we are creating smarter workflows and better decision-making processes.
                </p>
                <p className="hidden lg:block text-gray-500 italic">
                  Stay tuned for upcoming features and industry partnerships that will transform the way you work.
                </p>
              </div>
            </div>

            {/* FEATURE IMAGE */}
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-[500px]">
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
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white/50">Related Articles</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {relatedArticles.map((article, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-[2rem] bg-[#0A0A0A] border border-white/5 p-10 flex flex-col justify-between hover:border-blue-500/30 transition-all shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-5xl font-bold text-blue-500 tracking-tighter opacity-80">{article.id}</span>
                    <button className="text-blue-400 group-hover:text-blue-300 transition-colors text-sm font-bold flex items-center gap-1 group-hover:underline">
                      Read More <ChevronRight size={14} />
                    </button>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight group-hover:text-white/100 text-white/90">
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
    </main>
  );
}

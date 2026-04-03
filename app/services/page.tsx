"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    id: "01",
    title: "Data Science & Predictive Analytics",
    description:
      "Transform raw data into forward-looking intelligence. We build end-to-end data science pipelines — from ingestion and feature engineering to predictive models that drive real decisions across forecasting, segmentation, and risk management.",
    icon: <Target className="w-6 h-6 text-blue-400" />,
  },
  {
    id: "02",
    title: "Machine Learning Engineering",
    description:
      "Production-grade ML systems built to scale. From model architecture and training pipelines to deployment, monitoring, and continuous retraining — we bridge the gap between experimentation and real-world impact.",
    icon: <Target className="w-6 h-6 text-blue-400" />,
  },
  {
    id: "03",
    title: "Natural Language Processing (NLP)",
    description:
      "Unlock value locked inside your text data. We build custom NLP solutions — document classification, named entity recognition, semantic search, summarization, and sentiment analysis — powered by the latest transformer architectures.",
    icon: <Target className="w-6 h-6 text-blue-400" />,
  },
  {
    id: "04",
    title: "AI Chat Development",
    description:
      "Intelligent conversational interfaces that go far beyond scripted flows. We design and deploy AI-powered chatbots and virtual assistants — context-aware, domain-specific, and seamlessly integrated into your existing platforms.",
    icon: <Target className="w-6 h-6 text-blue-400" />,
  },
  {
    id: "05",
    title: "AI Robotics & Automation",
    description:
      "Intelligent automation that handles complex, judgment-intensive tasks — not just rule-based scripts. We build agentic AI workflows, computer vision systems, and autonomous process automation that adapt and improve over time.",
    icon: <Target className="w-6 h-6 text-blue-400" />,
  },
  {
    id: "06",
    title: "Website Development",
    description:
      "Modern, performant web experiences built with cutting-edge tech stacks. From sleek marketing sites to complex SaaS platforms — we deliver pixel-perfect, accessible, and fast products that scale with your business.",
    icon: <Target className="w-6 h-6 text-blue-400" />,
  },
];

const stats = [
  { label: "AI Projects Delivered", value: "150+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Avg. Cost Reduction", value: "40%" },
  { label: "Faster Time to Market", value: "3x" },
];

export default function ServicesPage() {
  return (
    <main className="relative w-full bg-[#050505] min-h-screen text-white overflow-x-hidden font-sans">
      {/* GLOBAL GRID BACKGROUND */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:120px_120px] opacity-10 pointer-events-none z-0" />

      <Header />

      <div className="relative z-10 pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
        {/* HERO SECTION */}
        <div className="flex flex-col items-center text-center space-y-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-bold tracking-widest uppercase"
          >
            Our Services
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium tracking-tight max-w-2xl leading-[1.1]"
          >
            <span
              style={{
                background:
                  "linear-gradient(0deg, #F2F2F2 21.43%, #8C8C8C 80.36%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Complete AI solutions for your needs.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl leading-relaxed"
          >
            One mission: move your organization from AI curiosity to measurable
            competitive advantage — fast.
          </motion.p>
        </div>
        <div
          className="absolute top-0 left-0 w-64 h-64 
                  bg-[#32A0F4]/40 
                  blur-[120px] 
                  rounded-full 
                  pointer-events-none"
        />
        <div
          className="absolute top-10 right-10 w-108 h-108 
                  bg-[#32A0F4]/40 
                  blur-[120px] 
                  rounded-full 
                  pointer-events-none"
        />
        <div
          className="absolute top-[50%] w-190 h-108 
                  bg-[#32A0F4]/20 
                  blur-[120px] 
                  rounded-full 
                  pointer-events-none"
        />
        <div
          className="absolute bottom-10 right-0 w-108 h-108 
                  bg-[#4D00FF]/40 
                  blur-[120px] 
                  rounded-full 
                  pointer-events-none"
        />
        {/* STATS ROW */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="bg-linear-to-b from-[#000000] to-[#0A1721] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center group hover:bg-white/[0.02] shadow-[inset_0px_3px_3px_0px_#56E4FF45] transition-colors"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[#32A0F4] mb-2">
                {stat.value}
              </h3>
              <p className="text-[#FFFFFF] text-xs font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* PROCESS SECTION TITLE */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2
            className="text-3xl md:text-4xl font-medium tracking-tight"
            style={{
              background:
                "linear-gradient(0deg, #F2F2F2 21.43%, #8C8C8C 80.36%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Proven AI Delivery Process
          </h2>
          <p className="text-gray-500 text-sm max-w-xl">
            A structured, agile approach that ensures every project is delivered
            on time and exceeds expectations.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#00000080] border border-[#32A0F447] rounded-2xl p-8 hover:bg-[#32A0F447]/2 transition-all hover:border-blue-500/30"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-4xl font-black text-[#32A0F4] group-hover:text-[#32A0F4]/10 transition-colors uppercase tracking-tighter">
                  {service.id}
                </span>
                <div className="p-3 bg-blue-500/5 rounded-xl border border-blue-500/10 group-hover:border-blue-500/30 transition-all">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6  group-hover:text-gray-400 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA SECTION */}
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

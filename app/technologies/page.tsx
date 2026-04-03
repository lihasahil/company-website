"use client";

import { useState } from "react";
import Tool from "@/components/tool";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTAButton";

const categories = [
  "Database",
  "Analytics",
  "Big Data",
  "Application Server",
  "Testing",
  "Cloud Platform",
  "AI & Agents",
] as const;

const categoryContent = {
  Database: {
    title: "Database Tools",
    description:
      "Reliable, scalable data solutions built for performance. At NextWaveAI, we use a mix of relational, NoSQL, and modern database technologies to handle everything from structured transactions to large-scale, real-time data. Our stack supports high-speed queries, flexible data models, and AI-ready systems—ensuring your data infrastructure is efficient, secure, and future-proof.",
  },
  Analytics: {
    title: "Analytics Tools",
    description:
      "Powerful analytics capabilities that turn raw data into actionable insights. We integrate best-in-class BI platforms, event tracking, and real-time dashboards to help you understand user behaviour, measure KPIs, and drive data-informed decisions across every layer of your product.",
  },
  "Big Data": {
    title: "Big Data Technologies",
    description:
      "Handle massive, complex datasets with ease. Our big data stack leverages distributed processing frameworks, stream ingestion pipelines, and scalable storage solutions—so your organisation can process petabytes of data in real time and derive competitive intelligence at scale.",
  },
  "Application Server": {
    title: "Application Server Stack",
    description:
      "Robust, high-performance application servers and runtime environments that keep your services fast and reliable. From containerised microservices to monolithic enterprise backends, we configure, optimise, and monitor every layer to ensure maximum throughput and minimal latency.",
  },
  Testing: {
    title: "Testing & QA Tools",
    description:
      "Comprehensive quality assurance across unit, integration, end-to-end, and performance testing. Our automated CI/CD pipelines catch regressions early so you can ship with confidence—backed by detailed test reports, coverage metrics, and lightning-fast feedback loops.",
  },
  "Cloud Platform": {
    title: "Cloud Platforms",
    description:
      "Multi-cloud and hybrid infrastructure expertise spanning AWS, Google Cloud, and Azure. We design resilient, cost-optimised cloud architectures with auto-scaling, disaster recovery, and security best practices baked in—so your platform grows with your business without surprise bills.",
  },
  "AI & Agents": {
    title: "AI & Intelligent Agents",
    description:
      "Cutting-edge AI integration using the latest large language models, vector databases, and autonomous agent frameworks. We build intelligent features—from semantic search and document processing to fully autonomous multi-step agents—that deliver measurable business value from day one.",
  },
};

export default function ToolsAndTechnologies() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("Database");

  return (
    <main className="relative w-full overflow-x-hidden flex flex-col items-center bg-[#0D0D0D]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap');
        .nw-tools-section { font-family: 'Urbanist', sans-serif; }
        .nw-section-title {
          background: linear-gradient(0deg, #8C8C8C 21%, #FFFFFF 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nw-content-title {
          background: linear-gradient(0deg, #8C8C8C 21%, #FFFFFF 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .tab-bar::-webkit-scrollbar { display: none; }
        .tab-bar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <Header />

      <section className="nw-tools-section relative flex w-full flex-col items-center pt-4 pb-8 sm:pb-8 lg:pb-10">
        {/* Section heading */}
        <h2 className="nw-section-title relative z-10 pt-6 sm:pt-12 px-4 text-center text-[clamp(32px,5vw,64px)] font-normal leading-tight tracking-[-0.04em]">
          Tools &amp; Technologies
        </h2>

        {/* Orbital visualisation */}
        <Tool />

        {/* Technologies We Work With */}
        <h3
          className="text-3xl md:text-4xl font-medium tracking-tight my-4"
          style={{
            background: "linear-gradient(0deg, #F2F2F2 21.43%, #8C8C8C 80.36%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Technologies We Work With
        </h3>

        {/* Tab bar */}
        <div className="relative z-10 w-full px-4 sm:px-6 mb-8  flex justify-center">
          <div className="tab-bar flex flex-row items-center gap-1 border border-[#f2f2f2] overflow-x-auto rounded-[72px] bg-white/[0.07] px-3 py-3 backdrop-blur-sm w-full sm:w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={[
                  "cursor-pointer whitespace-nowrap rounded-[76px] border-none px-4 py-2 sm:px-6 sm:py-3 text-[13px] sm:text-[16px] font-medium tracking-[0.01em] text-white transition-all duration-200 shrink-0",
                  activeCategory === cat
                    ? "bg-white text-[#0D0D0D]! font-bold shadow-[0_4px_20px_rgba(255,255,255,0.14)]"
                    : "bg-transparent hover:bg-white/8",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div
          key={activeCategory}
          className="relative z-10 flex w-full max-w-7xl flex-col gap-4 sm:gap-5 px-4 sm:px-6"
        >
          <div className="nw-content-title text-[clamp(20px,3.5vw,28px)] font-normal leading-tight tracking-[-0.04em]">
            {categoryContent[activeCategory].title}
          </div>
          <p className="text-[clamp(14px,2vw,18px)] font-normal leading-[1.65] text-[#F2F2F2]">
            {categoryContent[activeCategory].description}
          </p>
        </div>
      </section>
      <CTASection />
      <Footer />
    </main>
  );
}

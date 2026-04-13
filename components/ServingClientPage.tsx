/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What does NextWaveAI do?",
    answer:
      "NextWaveAI builds scalable AI-powered technology solutions for businesses across the globe, helping them automate workflows, gain insights, and grow faster.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We serve finance, healthcare, retail, logistics, and technology — delivering tailored solutions for each sector.",
  },
  {
    question: "How many countries are you active in?",
    answer:
      "We currently operate in 10+ countries and are actively expanding our global reach.",
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out through our contact page or call us directly. Our team will schedule a discovery call to understand your needs.",
  },
  {
    question: "Is your platform customizable?",
    answer:
      "Absolutely. Every solution is built to adapt to your specific business requirements, workflows, and scale.",
  },
];

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}
function norm(v: number, a: number, b: number) {
  return clamp((v - a) / (b - a), 0, 1);
}
function mix(t: number, a: number, b: number) {
  return a + (b - a) * t;
}

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => setOpen(!open)}
      className="cursor-pointer border border-white/10 rounded-xl px-4 sm:px-6 py-4 sm:py-5 hover:border-white/20 bg-white/5 transition-colors"
      style={{ pointerEvents: "auto" }}
    >
      <div className="flex justify-between items-center gap-3">
        <span className="text-white text-sm sm:text-base font-light">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="text-white/60 w-4 h-4 sm:w-5 sm:h-5" />
        </motion.div>
      </div>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <p className="text-white/50 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

function FadeUpBlock({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function MobileGlobe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        src="/globe.gif"
        alt="Globe"
        className="w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] object-cover rounded-full"
      />
    </motion.div>
  );
}

export default function ServingClientPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [s, setS] = useState({
    globeY: 0,
    textOpacity: 1,
    textY: 0,
    faqTitleOpacity: 0,
    faqTitleScale: 1.4,
    faqAccOpacity: 0,
    faqAccY: 30,
    p: 0,
  });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const compute = () => {
      const el = sectionRef.current;
      if (!el) return;
      const vh = window.innerHeight;
      const rect = el.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = el.offsetHeight;
      const scrolled = window.scrollY - sectionTop;
      const p = clamp(scrolled / (sectionHeight - vh), 0, 1);

      const globeY =
        p < 0.33
          ? mix(norm(p, 0, 0.33), vh * 0.5, 0)
          : p < 0.66
            ? 0
            : mix(norm(p, 0.66, 0.82), 0, -vh * 0.8);

      setS({
        globeY,
        textOpacity: mix(norm(p, 0, 0.2), 1, 0),
        textY: mix(norm(p, 0, 0.2), 0, -80),
        faqTitleOpacity: mix(norm(p, 0.28, 0.38), 0, 1),
        faqTitleScale: mix(norm(p, 0.28, 0.68), 1.4, 1),
        faqAccOpacity: mix(norm(p, 0.65, 0.78), 0, 1),
        faqAccY: mix(norm(p, 0.65, 0.78), 30, 0),
        p,
      });
    };

    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    compute();
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  const isScreen3 = s.p >= 0.65;

  // ── MOBILE ──
  if (isMobile) {
    return (
      <section
        ref={sectionRef}
        className="relative w-full bg-black text-white py-20 px-5 flex flex-col items-center gap-20"
      >
        {/* Hero block */}
        <div className="flex flex-col items-center text-center gap-6 w-full">
          <FadeUpBlock delay={0}>
            <h1 className="text-3xl sm:text-4xl font-medium bg-linear-to-t from-[#8C8C8C] to-[#FFFFFF] bg-clip-text text-transparent leading-tight">
              Serving Clients Globally
            </h1>
          </FadeUpBlock>

          <FadeUpBlock delay={0.1}>
            <p className="text-white/80 font-light text-sm sm:text-base">
              Building solutions for a connected world.
              <br />
              Delivering scalable technology that adapts across borders and
              markets.
            </p>
          </FadeUpBlock>

          <FadeUpBlock delay={0.18}>
            <h2 className="text-3xl sm:text-4xl font-light bg-linear-to-t from-[#8C8C8C] to-[#FFFFFF] bg-clip-text text-transparent">
              10+ Countries
            </h2>
          </FadeUpBlock>

          <MobileGlobe />
        </div>

        {/* FAQ block */}
        <div
          id="faq"
          className="flex flex-col items-center text-center gap-8 w-full max-w-2xl"
        >
          <FadeUpBlock delay={0}>
            <h2 className="text-2xl sm:text-3xl font-medium bg-gradient-to-t from-[#8C8C8C] to-[#FFFFFF] bg-clip-text text-transparent leading-tight">
              Frequently Asked Questions
            </h2>
          </FadeUpBlock>

          <FadeUpBlock delay={0.1}>
            <p className="text-white/60 font-thin text-xs sm:text-sm">
              Find answers to common questions about NextWaveAI, our services,
              and how we can help your business grow.
            </p>
          </FadeUpBlock>

          <div className="w-full flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                index={i}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── DESKTOP ──
  return (
    <section
      ref={sectionRef}
      style={{ height: "400vh", position: "relative", backgroundColor: "#000" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          backgroundColor: "#000",
        }}
        className="pointer-events-none"
      >
        {/* SCREEN 1: Hero Text */}
        <div
          className="absolute top-0 left-0 right-0 z-10 mt-6 md:mt-12 flex flex-col items-center pt-8 md:pt-16 text-center px-6 pointer-events-none"
          style={{
            opacity: s.textOpacity,
            transform: `translateY(${s.textY}px)`,
          }}
        >
          <h1 className="text-4xl xl:text-6xl font-medium bg-gradient-to-t from-[#8C8C8C] to-[#FFFFFF] bg-clip-text text-transparent pb-8 leading-tight">
            Serving Clients Globally
          </h1>
          <p className="text-[#FFFFFF] font-light mb-1 text-sm xl:text-base">
            Building solutions for a connected world.
          </p>
          <p className="text-[#FFFFFF] font-light text-sm xl:text-base mb-6">
            Delivering scalable technology that adapts across borders and
            markets.
          </p>
          <h2 className="text-3xl xl:text-4xl font-light bg-gradient-to-t from-[#8C8C8C] to-[#FFFFFF] bg-clip-text text-transparent">
            10+ Countries
          </h2>
        </div>

        {/* GLOBE */}
        <div
          className="absolute left-0 right-0 flex justify-center pointer-events-none z-10"
          style={{
            top: "45%",
            transform: `translateY(calc(-50% + ${s.globeY}px))`,
          }}
        >
          <img
            src="/globe.gif"
            alt="Globe"
            style={{
              width: "clamp(320px, 40vw, 550px)",
              height: "clamp(320px, 40vw, 550px)",
              objectFit: "cover",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          />
        </div>

        {/* SCREEN 2 → 3: FAQ */}
        <div
          id="faq"
          className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 lg:px-8 xl:px-12 pointer-events-none"
          style={{ opacity: s.faqTitleOpacity }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#000", opacity: s.faqAccOpacity }}
          />

          <div
            className="relative z-10 flex flex-col items-center w-full transition-none"
            style={{
              transform: `translateY(${mix(norm(s.faqTitleScale, 1, 1.4), 0, 60)}vh)`,
            }}
          >
            <h2
              className="bg-gradient-to-t from-[#8C8C8C] to-[#FFFFFF] bg-clip-text text-transparent font-medium text-center mb-3 leading-tight"
              style={{
                fontSize: `clamp(1.8rem, ${mix(norm(s.faqTitleScale, 1, 1.4), 3.5, 5.5)}vw, ${mix(norm(s.faqTitleScale, 1, 1.4), 3.75, 6)}rem)`,
              }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="text-[#FFFFFF] font-thin text-xs xl:text-sm max-w-2xl text-center"
              style={{ opacity: norm(s.faqTitleScale, 1.15, 1.0) }}
            >
              Find answers to common questions about NextWaveAI, our services,
              and how we can help your business grow.
            </p>
          </div>

          <div
            className="relative z-10 w-full max-w-3xl xl:max-w-5xl flex flex-col gap-3 mt-8"
            style={{
              opacity: s.faqAccOpacity,
              transform: `translateY(${s.faqAccY}px)`,
              pointerEvents: isScreen3 ? "auto" : "none",
            }}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                index={i}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

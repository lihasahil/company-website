"use client";

import { motion, Variants } from "framer-motion";

const makeFadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
});

export default function ContactUsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600&family=DM+Sans:wght@300;400&display=swap');

        .font-sora { font-family: 'Sora', sans-serif; }
        .font-dm   { font-family: 'DM Sans', sans-serif; }

        .hero-bg {
          background: radial-gradient(
            161.57% 107.5% at 50% 0%,
            #0d0d0d 52.43%,
            #056dbc 75.43%,
            #f9f9fb 91.48%
          );
        }
      `}</style>

      <section className="hero-bg font-sora h-screen relative w-full flex flex-col items-center justify-between overflow-hidden">
        {/* ── Top content ── */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-6 pb-10 gap-5">
          {/* Heading */}
          <motion.h1
            variants={makeFadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-6xl font-thin bg-linear-to-t from-[#8C8C8C] to-[#FFFFFF] bg-clip-text text-transparent"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Contact us to discuss your project
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={makeFadeUp(0.32)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-base font-thin bg-linear-to-t from-[#8C8C8C] to-[#FFFFFF] bg-clip-text text-transparent"
            style={{ color: "rgba(255,255,255,0.42)" }}
          >
            Find answers to common questions about NextWaveAI, our services, and
            how we can help your business grow.
          </motion.p>

          {/* CTA button */}
          <motion.button
            variants={makeFadeUp(0.46)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            onClick={() => {
              const target = document.getElementById("contact-form");
              if (!target) return;
              const start = window.scrollY;
              const end = target.getBoundingClientRect().top + window.scrollY;
              const duration = 1800; // ms — increase for slower scroll
              const startTime = performance.now();

              const scroll = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // easeInOutCubic
                const ease =
                  progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                window.scrollTo(0, start + (end - start) * ease);
                if (progress < 1) requestAnimationFrame(scroll);
              };

              requestAnimationFrame(scroll);
            }}
            className="mt-6 inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[13.5px] font-medium text-white backdrop-blur-md transition-all duration-300
    border border-white/20 bg-[#2a2a2a]
    hover:bg-[rgba(5,109,188,0.22)] hover:border-[rgba(5,109,188,0.5)] hover:-translate-y-0.5
    hover:shadow-[0_0_28px_rgba(5,109,188,0.22)]"
          >
            Talk to an expert
          </motion.button>
        </div>

        {/* ── Bottom content ── */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pb-14 gap-4 w-full">
          <motion.h2
            variants={makeFadeUp(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="font-light tracking-tight"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#F2F2F2",
            }}
          >
            Get In Touch
          </motion.h2>

          <motion.div
            variants={makeFadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="h-px w-full max-w-7xl"
            style={{ background: "#F2F2F2" }}
          />

          <motion.p
            variants={makeFadeUp(0.32)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-sm leading-relaxed max-w-2xl mb-10"
            style={{ color: "#F2F2F2" }}
          >
            Contact us to get connected with our team of experts. We are here to
            help you with your AI and software development needs.
          </motion.p>
        </div>
      </section>
    </>
  );
}

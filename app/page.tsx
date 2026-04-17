"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroAnimation from "@/components/IntroAnimation";
import LandingPage from "@/components/LandingPage";
import Footer from "@/components/Footer";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem("introPlayed");
    if (alreadyPlayed) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowIntro(false);
      setIsFinished(true);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (window.location.hash === "#contact-form") {
      const el = document.getElementById("contact-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [isFinished]);

  const handleFinish = () => {
    sessionStorage.setItem("introPlayed", "true");
    setShowIntro(false);
  };

  if (!mounted) return null;

  return (
    <main
      className={`relative ${isFinished ? "" : "overflow-hidden h-screen"}`}
    >
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.2, 1] }}
            className="fixed inset-0 z-[200]"
          >
            <IntroAnimation onFinish={handleFinish} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={isFinished ? false : { y: "100vh" }}
        animate={showIntro ? { y: "100vh" } : { y: 0 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.2, 1] }}
        onAnimationComplete={() => {
          if (!showIntro) setIsFinished(true);
        }}
        style={isFinished ? { transform: "none" } : {}}
      >
        <LandingPage />
        <Footer />
      </motion.div>
    </main>
  );
}

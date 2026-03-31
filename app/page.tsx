"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroAnimation from "@/components/IntroAnimation";
import LandingPage from "@/components/LandingPage";
import Footer from "@/components/Footer";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  return (
    <main className={`relative ${isFinished ? "" : "overflow-hidden h-screen"}`}>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200]"
          >
            <IntroAnimation onFinish={() => setShowIntro(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: "100vh" }}
        animate={showIntro ? { y: "100vh" } : { y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
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

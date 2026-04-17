// src/components/IntroAnimation.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroAnimation({ onFinish }: { onFinish: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 800), // bg change
      setTimeout(() => setStep(2), 1200), // text slide
      setTimeout(() => {
        onFinish();
      }, 2000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{
        backgroundColor: step >= 1 ? "#ffffff" : "#000000",
      }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src="/logo1.svg"
        alt="logo"
        className="w-20 h-20"
        initial={{ opacity: 0, scale: 0.8, x: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: step >= 2 ? -60 : 0, // slide further left
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: step >= 2 ? 1 : 0,
          x: step >= 2 ? -45 : 20, // slide in closer and left
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="text-3xl font-semibold text-[#10226B]"
      >
        Next Wave AI
      </motion.div>
    </motion.div>
  );
}

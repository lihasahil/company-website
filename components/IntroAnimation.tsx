// src/components/IntroAnimation.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroAnimation({ onFinish }: { onFinish: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1500), // bg change
      setTimeout(() => setStep(2), 2500), // text slide
      setTimeout(() => {
        setStep(3);
        setTimeout(onFinish, 800); // exit
      }, 4000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {step < 3 && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          animate={{
            backgroundColor: step >= 1 ? "#ffffff" : "#000000",
          }}
          transition={{ duration: 1.5 }}
        >
          <motion.img
            src="/logo1.svg"
            alt="logo"
            className="w-20 h-20"
            initial={{ opacity: 0, scale: 0.8, x: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: step >= 2 ? -24 : 0, // slide just enough for text
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: step >= 2 ? 1 : 0,
              x: step >= 2 ? 0 : 20, // slide in from right slightly
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-2xl font-semibold text-black"
          >
            NextWave AI
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

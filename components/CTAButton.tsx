"use client";

import React from "react";
import { motion } from "framer-motion";

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  delay?: number;
}

/**
 * Reusable premium button used in CTA sections and elsewhere
 */
export const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  onClick,
  className = "",
  delay = 0,
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative z-10 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
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
        padding: "12px 32px",
        border: "none",
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </motion.button>
  );
};

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
  delay?: number;
}

/**
 * Full-width CTA section with wings and glow
 */
export const CTASection: React.FC<CTASectionProps> = ({
  title = "Not sure where to start?",
  description = "Our 30 min AI readiness call is free, focused and actionable",
  buttonText = "Schedule a free AI consultation",
  onClick,
  delay = 0.28,
}) => {
  return (
    <motion.section
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "#000000",
        padding: "108px 72px",
        gap: 48,
        isolation: "isolate",
        width: "100%",
        minHeight: 445,
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
          {title}
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
          {description}
        </p>
      </motion.div>

      {/* CTA Button */}
      <CTAButton text={buttonText} onClick={onClick} delay={delay} />
    </motion.section>
  );
};

// Default export is the full section for backward compatibility
export default CTASection;

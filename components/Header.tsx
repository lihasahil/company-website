"use client";

import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const { scrollY } = useScroll();

  // smoother scroll mapping
  const progress = useTransform(scrollY, [0, 100, 500], [0, 0, 1]);

  const smooth = useSpring(progress, {
    stiffness: 80,
    damping: 18,
    mass: 0.8,
  });
  // 🔥 Use scale instead of width
  const scaleX = useTransform(smooth, [0, 1], [1, 0.6]);
  const scaleY = useTransform(smooth, [0, 1], [1, 0.85]);

  // Inverse scales to prevent children from becoming squished ovals
  const invScaleX = useTransform(smooth, [0, 1], [1, 1 / 0.6]);
  const invScaleY = useTransform(smooth, [0, 1], [1, 1 / 0.85]);

  // move slightly down
  const y = useTransform(smooth, [0, 1], [0, 16]);

  // fade bg instead of morphing heavy styles
  const bgOpacity = useTransform(smooth, [0, 1], [0, 1]);

  // subtle rounding
  const radius = useTransform(smooth, [0, 1], ["0px", "40px"]);

  // Collapse text properties smoothly
  const textOpacity = useTransform(smooth, [0, 0.3], [1, 0]);
  const brandWidth = useTransform(smooth, [0, 0.3], ["110px", "0px"]);
  const brandMargin = useTransform(smooth, [0, 0.3], ["12px", "0px"]);
  
  const buttonPadding = useTransform(smooth, [0, 0.3], ["20px", "11px"]);
  const contactTextWidth = useTransform(smooth, [0, 0.3], ["60px", "0px"]);
  const contactMargin = useTransform(smooth, [0, 0.3], ["8px", "0px"]);

  return (
    <motion.div
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", justifyContent: "center" }}
    >
      <motion.nav
        style={{ scaleX, scaleY, y, borderRadius: radius }}
        className="w-full max-w-[1200px] px-6 lg:px-10 py-4 flex items-center justify-between origin-center"
      >
        {/* Background layer (separate = smoother) */}
        <motion.div
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-md rounded-[inherit] border border-white/10"
        />

        {/* Content - Logo Area */}
        <motion.div style={{ scaleX: invScaleX, scaleY: invScaleY, originX: 0 }} className="relative flex items-center z-10 shrink-0">
          <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full shrink-0">
            <Image src="/logo1.svg" alt="logo" width={48} height={48} className="brightness-200" />
          </div>
          <motion.span
            style={{ width: brandWidth, opacity: textOpacity, marginLeft: brandMargin }}
            className="hidden md:block text-white font-semibold whitespace-nowrap overflow-hidden tracking-tight"
          >
            Next Wave AI
          </motion.span>
        </motion.div>

        {/* Content - Middle Links */}
        <motion.div style={{ scaleX: invScaleX, scaleY: invScaleY }} className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-300 z-10">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="#industries" className="hover:text-white transition-colors">Industries</Link>
          <Link href="/insights" className="hover:text-white transition-colors">Research</Link>
          <Link href="#technology" className="hover:text-white transition-colors">Technology</Link>
        </motion.div>

        {/* Content - Contact CTA */}
        <motion.div style={{ scaleX: invScaleX, scaleY: invScaleY, originX: 1 }} className="relative z-10 flex items-center justify-end shrink-0">
          <motion.button
            style={{ paddingLeft: buttonPadding, paddingRight: buttonPadding }}
            className="flex items-center justify-center h-10 md:h-12 bg-gradient-to-b from-[#0ea5e9] to-[#0284c7] hover:brightness-110 transition-all text-white rounded-full overflow-hidden shadow-[0_0_20px_rgba(2,132,199,0.3)]"
          >
            <div className="flex items-center justify-center whitespace-nowrap">
              <Phone size={18} className="shrink-0" />
              <motion.span
                style={{ width: contactTextWidth, opacity: textOpacity, marginLeft: contactMargin }}
                className="font-semibold text-sm overflow-hidden"
              >
                Contact
              </motion.span>
            </div>
          </motion.button>
        </motion.div>
      </motion.nav>
    </motion.div>
  );
};

export default Header;
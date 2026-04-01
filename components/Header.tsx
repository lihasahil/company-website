"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // smoother scroll mapping
  const progress = useTransform(scrollY, [0, 100, 500], [0, 0, 1]);

  const smooth = useSpring(progress, {
    stiffness: 80,
    damping: 18,
    mass: 0.8,
  });
  // 🔥 Use scale instead of width
  const scaleX = useTransform(smooth, [0, 1], [1, 0.5]);
  const scaleY = useTransform(smooth, [0, 1], [1, 0.75]);

  // Inverse scales to prevent children from becoming squished ovals
  const invScaleX = useTransform(smooth, [0, 1], [1, 1 / 0.6]);
  const invScaleY = useTransform(smooth, [0, 1], [1, 1 / 0.75]);

  // move slightly down
  const y = useTransform(smooth, [0, 1], [0, 16]);

  // fade bg instead of morphing heavy styles
  const bgOpacity = useTransform(smooth, [0, 1], [0, 1]);

  // subtle rounding
  const radius = useTransform(smooth, [0, 1], ["0px", "64px"]);

  // Collapse text properties smoothly
  const textOpacity = useTransform(smooth, [0, 0.3], [1, 0]);
  const brandWidth = useTransform(smooth, [0, 0.3], ["110px", "0px"]);
  const brandMargin = useTransform(smooth, [0, 0.3], ["12px", "0px"]);
  
  const buttonPadding = useTransform(smooth, [0, 0.3], ["20px", "11px"]);
  const contactTextWidth = useTransform(smooth, [0, 0.3], ["60px", "0px"]);
  const contactMargin = useTransform(smooth, [0, 0.3], ["8px", "0px"]);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries-served" },
    { name: "Research", href: "/insights" },
    { name: "Technology", href: "/technologies" },
  ];

  return (
    <>
      <motion.div
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", justifyContent: "center" }}
      >
        <motion.nav
          style={{ scaleX, scaleY, y, borderRadius: radius }}
          className="w-full max-w-[1600px] px-6 lg:px-10 py-4 flex items-center justify-between origin-center"
        >
          {/* Background layer (separate = smoother) */}
          <motion.div
            style={{ opacity: bgOpacity }}
            className="absolute inset-0 bg-[#0a0a0a]/90 rounded-[inherit] border border-white/10"
          />

          {/* Content - Logo Area */}
          <motion.div style={{ scaleX: invScaleX, scaleY: invScaleY, originX: 0 }} className="relative flex items-center z-10 shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full shrink-0">
                <Image src="/logo1.svg" alt="logo" width={48} height={48} className="brightness-200" />
              </div>
              <motion.span
                style={{ width: brandWidth, opacity: textOpacity, marginLeft: brandMargin }}
                className="hidden md:block text-lg text-white font-semibold whitespace-nowrap overflow-hidden tracking-tight"
              >
                Next Wave AI
              </motion.span>
            </Link>
          </motion.div>

          {/* Content - Middle Links */}
          <motion.div style={{ scaleX: invScaleX, scaleY: invScaleY }} className="hidden lg:flex items-center gap-8 text-[20px] font-medium text-gray-300 z-10">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </motion.div>

          {/* Content - Contact CTA & Mobile Menu Toggle */}
          <motion.div style={{ scaleX: invScaleX, scaleY: invScaleY, originX: 1 }} className="relative z-10 flex items-center gap-4 justify-end shrink-0">
            <motion.button
              style={{ paddingLeft: buttonPadding, paddingRight: buttonPadding }}
              className="flex items-center justify-center h-10 md:h-10 bg-linear-to-b from-[#0ea5e9] to-[#0284c7] hover:brightness-110 transition-all text-white rounded-full overflow-hidden shadow-[0_0_20px_rgba(2,132,199,0.3)]"
            >
              <div className="flex items-center justify-center whitespace-nowrap">
                <Phone size={22} className="shrink-0" />
                <motion.span
                  style={{ width: contactTextWidth, opacity: textOpacity, marginLeft: contactMargin }}
                  className="font-semibold text-sm overflow-hidden"
                >
                  Contact
                </motion.span>
              </div>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </motion.nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 lg:hidden bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col items-center justify-center p-8"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 p-2 text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col items-center gap-8 text-3xl font-medium text-white">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 px-12 py-4 bg-sky-500 text-white rounded-full text-xl font-bold hover:bg-sky-400 transition-all shadow-[0_0_30px_rgba(14,165,233,0.4)]"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 text-gray-500 text-sm font-medium tracking-widest uppercase"
            >
              Next Wave AI © 2025
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
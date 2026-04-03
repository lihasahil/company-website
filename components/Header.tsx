"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, X, Menu } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";

import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries-served", label: "Industries" },
  { href: "/insights", label: "Research" },
  { href: "/technologies", label: "Technology" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleAnchorClick = (e: React.MouseEvent, id: string) => {
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const { scrollY } = useScroll();
  const progress = useTransform(scrollY, [0, 100, 500], [0, 0, 1]);
  const smooth = useSpring(progress, { stiffness: 80, damping: 18, mass: 0.8 });

  // On mobile: no scroll transforms — nav stays full-width and unchanged
  const scaleX = useTransform(smooth, [0, 1], [1, isMobile ? 1 : 0.5]);
  const scaleY = useTransform(smooth, [0, 1], [1, isMobile ? 1 : 0.75]);
  const invScaleX = useTransform(smooth, [0, 1], [1, isMobile ? 1 : 1 / 0.5]);
  const invScaleY = useTransform(smooth, [0, 1], [1, isMobile ? 1 : 1 / 0.75]);
  const y = useTransform(smooth, [0, 1], [0, isMobile ? 0 : 16]);
  const bgOpacity = useTransform(smooth, [0, 1], [0, isMobile ? 0.85 : 1]);
  const radius = useTransform(
    smooth,
    [0, 1],
    ["0px", isMobile ? "0px" : "64px"],
  );
  const textOpacity = useTransform(smooth, [0, 0.3], [1, isMobile ? 1 : 0]);
  const brandWidth = useTransform(
    smooth,
    [0, 0.3],
    ["110px", isMobile ? "110px" : "0px"],
  );
  const brandMargin = useTransform(
    smooth,
    [0, 0.3],
    ["12px", isMobile ? "12px" : "0px"],
  );
  const buttonPadding = useTransform(
    smooth,
    [0, 0.3],
    ["20px", isMobile ? "20px" : "11px"],
  );
  const contactTextWidth = useTransform(
    smooth,
    [0, 0.3],
    ["60px", isMobile ? "60px" : "0px"],
  );
  const contactMargin = useTransform(
    smooth,
    [0, 0.3],
    ["8px", isMobile ? "8px" : "0px"],
  );

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries-served" },
    { name: "Research", href: "/insights" },
    { name: "Technology", href: "/technologies" },
  ];

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.nav
          style={{ scaleX, scaleY, y, borderRadius: radius }}
          className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between origin-center"
        >
          {/* Background layer */}
          <motion.div
            style={{ opacity: bgOpacity }}
            className="absolute inset-0 bg-[#0a0a0a]/90 rounded-[inherit] border border-white/10"
          />

          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="relative flex items-center z-10 shrink-0"
          >
            <motion.div
              style={{ scaleX: invScaleX, scaleY: invScaleY, originX: 0 }}
              className="flex items-center"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full shrink-0">
                <Image
                  src="/logo1.svg"
                  alt="logo"
                  width={48}
                  height={48}
                  className="brightness-200"
                />
              </div>
              <motion.span
                style={{
                  width: brandWidth,
                  opacity: textOpacity,
                  marginLeft: brandMargin,
                }}
                className="text-lg text-white font-semibold whitespace-nowrap overflow-hidden tracking-tight"
              >
                Next Wave AI
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop nav links */}
          <motion.div
            style={{ scaleX: invScaleX, scaleY: invScaleY }}
            className="hidden lg:flex items-center gap-8 text-[20px] font-medium text-gray-300 z-10"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>

          {/* Right side */}
          <motion.div
            style={{ scaleX: invScaleX, scaleY: invScaleY, originX: 1 }}
            className="relative z-10 flex items-center gap-3 shrink-0"
          >
            {/* Contact button — hidden on mobile */}
            <Link
              href="/#contact-form"
              onClick={(e) => handleAnchorClick(e, "contact-form")}
              className="hidden sm:block shrink-0"
            >
              <motion.button
                style={{
                  paddingLeft: buttonPadding,
                  paddingRight: buttonPadding,
                }}
                className="flex items-center justify-center h-10 w-full bg-linear-to-b from-[#0091FF] to-[#005799] hover:brightness-110 transition-all text-white rounded-full overflow-hidden shadow-[0_0_20px_rgba(2,132,199,0.3)]"
              >
                <div className="flex items-center justify-center whitespace-nowrap">
                  <Phone size={20} className="shrink-0" />
                  <motion.span
                    style={{
                      width: contactTextWidth,
                      opacity: textOpacity,
                      marginLeft: contactMargin,
                    }}
                    className="font-semibold text-sm overflow-hidden"
                  >
                    Contact
                  </motion.span>
                </div>
              </motion.button>
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full  text-white hover:bg-white/15 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={30} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={30} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </motion.nav>
      </motion.div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-[95] w-[75vw] max-w-[320px] bg-[#0a0a0a] border-l border-white/10 flex flex-col lg:hidden"
            >
              {/* Nav links */}
              <nav className="flex flex-col px-4 py-6 gap-1 mt-10">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + i * 0.06,
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/8 transition-all text-[17px] font-medium"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="mt-auto px-5 pb-8"
              >
                <Link
                  href="/#contact-form"
                  onClick={(e) => {
                    handleAnchorClick(e, "contact-form");
                    setMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-linear-to-b from-[#0091FF] to-[#005799] text-white font-semibold text-sm shadow-[0_0_20px_rgba(2,132,199,0.3)] hover:brightness-110 transition-all"
                >
                  <Phone size={16} fill="#fff" />
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

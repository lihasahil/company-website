/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const makeFadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 40 },
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

export default function Footer() {
  const pathname = usePathname();

  const handleScrollToTop = (e: React.MouseEvent) => {
    const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
    if (pathname === "/" && href === "/") {
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

  return (
    <footer className="relative w-full overflow-hidden bg-[#0D0D0D] font-[Urbanist,sans-serif]">
      {/* Top content */}
      <div className="relative z-10 max-w-7xl mx-auto pt-10 pb-2 px-4 sm:px-6 lg:px-8">
        {/* Main row */}
        <motion.div
          variants={makeFadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-10 lg:mb-12"
        >
          {/* LEFT — Logo + Socials */}
          <div className="flex flex-col gap-6 sm:gap-8 w-full lg:min-w-[214px]">
            {/* Logo */}
            <Link
              href="/"
              onClick={handleScrollToTop}
              className="flex flex-row items-center gap-3 sm:gap-4"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-r from-[#004E89] to-[#212121]">
                <img
                  src="footer-logo.svg"
                  alt="Logo"
                  className="w-6 h-6 sm:w-auto sm:h-auto"
                />
              </div>
              <span className="text-[#F2F2F2] text-[20px] sm:text-[24px] font-medium">
                NextWave AI
              </span>
            </Link>

            {/* Socials */}
            <div className="flex flex-row items-center gap-4">
              {/* Twitter */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#4B4B4B] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <svg width="14" height="12" viewBox="0 0 14 12" fill="white">
                  <path d="M13.5 1.2a5.6 5.6 0 01-1.6.4A2.8 2.8 0 0013.1 0a5.5 5.5 0 01-1.8.7A2.8 2.8 0 006.8 3c0 .2 0 .4.1.6A7.9 7.9 0 011 .5 2.8 2.8 0 001.9 4.3a2.8 2.8 0 01-1.3-.3v.03a2.8 2.8 0 002.2 2.7 2.8 2.8 0 01-1.2.05 2.8 2.8 0 002.6 1.9A5.6 5.6 0 010 9.8a7.9 7.9 0 004.3 1.3c5.1 0 7.9-4.2 7.9-7.9v-.4a5.6 5.6 0 001.3-1.6z" />
                </svg>
              </div>
              {/* Facebook */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#3757CB] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <svg width="8" height="16" viewBox="0 0 8 16" fill="white">
                  <path d="M5.2 3H7V0H5C3 0 2 1.2 2 3v1H0v3h2v9h3V7h2l.5-3H5V3.5c0-.3.1-.5.2-.5z" />
                </svg>
              </div>
              {/* Instagram */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#4B4B4B] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                </svg>
              </div>
              {/* GitHub */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#4B4B4B] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* CENTER + RIGHT — Nav columns */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-start sm:justify-between lg:justify-center gap-8 sm:gap-12 lg:gap-20 xl:gap-[140px] w-full ">
            {/* Quick Link */}
            <motion.div
              variants={makeFadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col gap-4 sm:gap-6"
            >
              <span className="text-[#FAFAFA] font-semibold text-[18px] sm:text-[20px] lg:text-[22px] tracking-[0.02em]">
                Quick Link
              </span>
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
                {[
                  { name: "Services", href: "/services" },
                  { name: "Industries", href: "/industries-served" },
                  { name: "Insights", href: "/insights" },
                  { name: "Contact", href: "/#contact-form" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleScrollToTop(e);
                      if (item.href.includes("#")) {
                        handleAnchorClick(e, item.href.split("#")[1]);
                      }
                    }}
                    className="text-[#B9B3B3] text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[140%] hover:text-[#F2F2F2] transition-colors whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Support */}
            <motion.div
              variants={makeFadeUp(0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col gap-4 sm:gap-6"
            >
              <span className="text-[#FAFAFA] font-semibold text-[18px] sm:text-[20px] lg:text-[22px] tracking-[0.02em]">
                Customer Service
              </span>
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
                <Link
                  href="/#contact-form"
                  onClick={(e) => {
                    handleScrollToTop(e);
                    handleAnchorClick(e, "contact-form");
                  }}
                  className="text-[#B9B3B3] text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[140%] hover:text-[#F2F2F2] transition-colors whitespace-nowrap"
                >
                  FAQs
                </Link>
                <Link
                  href="/#contact-form"
                  onClick={(e) => {
                    handleScrollToTop(e);
                    handleAnchorClick(e, "contact-form");
                  }}
                  className="text-[#B9B3B3] text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[140%] hover:text-[#F2F2F2] transition-colors whitespace-nowrap"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/careers"
                  className="text-[#B9B3B3] text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[140%] hover:text-[#F2F2F2] transition-colors whitespace-nowrap"
                >
                  Careers
                </Link>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={makeFadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col gap-4 sm:gap-6 w-full sm:w-auto"
            >
              <span className="text-[#FAFAFA] font-semibold text-[18px] sm:text-[20px] lg:text-[22px] tracking-[0.02em]">
                Contact Info
              </span>
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
                {/* Address */}
                <div className="flex flex-row items-start gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#B9B3B3"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 mt-0.5"
                  >
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-[#B9B3B3] text-[16px] sm:text-[17px] lg:text-[18px] leading-[140%] whitespace-nowrap">
                    123 Street, Kathmandu Nepal
                  </span>
                </div>
                {/* Phone */}
                <div className="flex flex-row items-center gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#B9B3B3"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <span className="text-[#B9B3B3] text-[16px] sm:text-[17px] lg:text-[18px] leading-[140%] whitespace-nowrap">
                    +977 9876543210
                  </span>
                </div>
                {/* Email */}
                <div className="flex flex-row items-center gap-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#B9B3B3"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="text-[#B9B3B3] text-[16px] sm:text-[17px] lg:text-[18px] leading-[140%] whitespace-nowrap">
                    nextwaveai@gmail.com
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider + Copyright */}
        <motion.div
          variants={makeFadeUp(0.25)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col gap-6 sm:gap-8 lg:gap-9"
        >
          <div className="w-full h-px bg-[#F9F9FB]" />
          <p className="text-center text-[#F9F9FB] text-[14px] sm:text-[16px] lg:text-[18px] tracking-[0.04em] px-4">
            Privacy and policy © Copyright 2025. NEXTWAVEAI
          </p>
        </motion.div>
      </div>

      {/* Big background text */}
      <div className="relative z-0 pointer-events-none w-full overflow-hidden">
        <p
          className="text-center font-medium tracking-[-0.05em] whitespace-nowrap w-full"
          style={{
            fontSize: "clamp(60px, 18vw, 220px)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1,
          }}
        >
          Next Wave AI
        </p>
      </div>
    </footer>

  );
}

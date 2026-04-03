"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const INITIAL_OUTER_ICONS = [
  { id: "outer1", name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { id: "outer2", name: "OpenCart", icon: "https://cdn.simpleicons.org/opencart/24D0FD" },
  { id: "outer3", name: "Shopify", icon: "https://cdn.simpleicons.org/shopify/95BF47" },
  { id: "outer4", name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { id: "outer5", name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { id: "outer6", name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { id: "outer7", name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { id: "outer8", name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { id: "outer9", name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
  { id: "outer10", name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { id: "outer11", name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
  { id: "outer12", name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" },
];

const INITIAL_INNER_ICONS = [
  { id: "inner1", name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/21759B" },
  { id: "inner2", name: "CodeIgniter", icon: "https://cdn.simpleicons.org/codeigniter/EE4323" },
  { id: "inner3", name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/232F3E" },
  { id: "inner4", name: "Android", icon: "https://cdn.simpleicons.org/android/3DDC84" },
  { id: "inner5", name: "Apple", icon: "https://cdn.simpleicons.org/apple/000000" },
];

export default function Tool() {
  const [outerPositions, setOuterPositions] = useState(INITIAL_OUTER_ICONS);
  const [innerPositions, setInnerPositions] = useState(INITIAL_INNER_ICONS);
  const [radii, setRadii] = useState({ inner: 130, outer: 240 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateSize = () => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      setRadii({
        inner: isMobile ? 70 : 130, // Already scaled down as per previous request
        outer: isMobile ? 125 : 240, 
      });
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    const interval = setInterval(() => {
      setOuterPositions((prev) => {
        const last = prev[prev.length - 1];
        return [last, ...prev.slice(0, prev.length - 1)];
      });
      setInnerPositions((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 3000);

    return () => {
      window.removeEventListener("resize", updateSize);
      clearInterval(interval);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full max-w-[650px] aspect-square mx-auto flex items-center justify-center overflow-visible select-none py-10 scale-[0.9] sm:scale-100">
      {/* Bluish Background Circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img 
          src="/techround.svg" 
          alt="" 
          className="w-[85%] h-[85%] object-contain scale-[0.7] opacity-60"
        />
      </div>

      {/* Central Logo */}
      <div className="z-30 relative w-[22%] h-[22%] rounded-full bg-black flex items-center justify-center shadow-[0_0_60px_rgba(40,119,178,0.4)] border border-white/5">
        <img 
          src="/logo1.svg" 
          alt="NextWave Logo" 
          className="w-[80%] h-[80%] object-contain"
          style={{ transform: 'translateY(-5%)' }}
        />
      </div>

      {/* RINGS */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* INNER RING (Shifting Position) */}
        {innerPositions.map((item, index) => {
          const angle = (index / innerPositions.length) * 2 * Math.PI - Math.PI / 2;
          const x = radii.inner * Math.cos(angle);
          const y = radii.inner * Math.sin(angle);

          return (
            <motion.div
              key={item.id}
              className="absolute w-10 h-10 md:w-16 md:h-16 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center p-1 md:p-1.5 border border-gray-100 z-10 cursor-pointer"
              animate={{ x, y }}
              transition={{
                duration: 1.2,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{ scale: 1.15, zIndex: 50 }}
            >
              <div className="w-[85%] h-[75%] flex items-center justify-center">
                <img src={item.icon} alt={item.name} className="w-full h-full object-contain pointer-events-none" />
              </div>
              <span className="text-[6px] md:text-[8px] font-bold text-[#666] text-center uppercase tracking-tighter truncate max-w-full px-0.5">{item.name}</span>
            </motion.div>
          );
        })}

        {/* OUTER RING (Shifting Position) */}
        {outerPositions.map((item, index) => {
          const angle = (index / outerPositions.length) * 2 * Math.PI - Math.PI / 2;
          const x = radii.outer * Math.cos(angle);
          const y = radii.outer * Math.sin(angle);

          return (
            <motion.div
              key={item.id}
              className="absolute w-10 h-10 md:w-16 md:h-16 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center p-1 md:p-1.5 border border-gray-100 z-10 cursor-pointer"
              animate={{ x, y }}
              transition={{
                duration: 1.2,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{ scale: 1.15, zIndex: 50 }}
            >
              <div className="w-[85%] h-[75%] flex items-center justify-center">
                <img src={item.icon} alt={item.name} className="w-full h-full object-contain pointer-events-none" />
              </div>
              <span className="text-[6px] md:text-[8px] font-bold text-[#666] text-center uppercase tracking-tighter truncate max-w-full px-0.5">{item.name}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
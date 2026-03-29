"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import HeroAI from "./HeroAI";
import ServicesSection from "./ServicesSection";

const LandingPage = () => {
  return (
    <motion.main 
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 20, mass: 1 }}
      className="relative w-full min-h-screen overflow-x-hidden"
    >
      {/* GLOBAL GRID BACKGROUND - Behind content */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:120px_120px] opacity-20 pointer-events-none z-0" />
      
      <div className="relative z-10 flex flex-col ">
        <Header />
        <HeroAI />
        <ServicesSection />
      </div>
    </motion.main>
  );
};

export default LandingPage;

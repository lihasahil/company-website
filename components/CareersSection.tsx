"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, User, MapPin, Clock, DollarSign } from "lucide-react";
import { CTASection } from "./CTAButton";

const CareersSection = () => {
  const benefits = [
    {
      id: "01",
      title: "Culture",
      description:
        "A supportive environment where collaboration and respect shape every project and interaction.",
    },
    {
      id: "02",
      title: "Growth",
      description:
        "Opportunities to learn, evolve, and take on challenges that accelerate your professional journey.",
    },
    {
      id: "03",
      title: "Impact",
      description:
        "Meaningful contribution that directly influences how businesses operate and scale.",
    },
    {
      id: "04",
      title: "Tools",
      description:
        "A modern setup designed to help you work efficiently, stay focused, and deliver your best work.",
    },
  ];

  const jobs = [
    {
      title: "Senior Product Designer",
      salary: "10000$",
      description:
        "Lead the design of intuitive, mobile-first interfaces across our core platform, collaborate with...",
      type: "Full Time",
      location: "Kathmandu",
    },
    {
      title: "Visual Designer",
      salary: "10000$",
      description:
        "Ensure visual integrity of product design, ensuring alignment with brand guidelines.",
      type: "Contract",
      location: "San Francisco",
    },
    {
      title: "Interaction Designer",
      salary: "4400$",
      description:
        "Design interactive elements that create a seamless user experience.",
      type: "Full Time",
      location: "Toronto",
    },
    {
      title: "Product Design Manager",
      salary: "6700$",
      description:
        "Manage a team of designers and optimize the design strategy for the product suite.",
      type: "Full Time",
      location: "London",
    },
    {
      title: "Content Designer",
      salary: "5000$",
      description:
        "Develop and implement content strategies that enhance user engagement and experience.",
      type: "Contract",
      location: "Sydney",
    },
    {
      title: "UI/UX Designer",
      salary: "5000$",
      description:
        "Create user-centered designs by understanding business requirements and user feedback.",
      type: "Full Time",
      location: "Berlin",
    },
    {
      title: "Junior Product Designer",
      salary: "4500$",
      description:
        "Assist in developing design concepts and prototypes for various projects.",
      type: "Full Time",
      location: "Moscow",
    },
    {
      title: "Lead UX Researcher",
      salary: "7000$",
      description:
        "Conduct user research and usability testing to inform design decisions.",
      type: "Full Time",
      location: "New York",
    },
  ];

  return (
    <>
      <section className="bg-[#020202] text-white pt-24 pb-10 px-6 md:px-12 font-sans overflow-hidden">
        <div className="max-w-[90%] mx-auto">
          {/* HERO */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-[64px] font-bold tracking-tighter leading-[0.9] max-w-3xl"
            >
              <span
                style={{
                  background:
                    "linear-gradient(0deg, #F2F2F2 21.43%, #8C8C8C 80.36%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Join our team and reshape the future.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 text-base md:text-lg font-light md:text-left md:max-w-[400px] leading-relaxed mt-4"
            >
              Work with talented people who push each other to grow and create
              solutions the shapes the future of Tech and Artificial
              intelligence.
            </motion.p>
          </div>

          {/* TEAM PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[16/7] rounded-[12px] md:rounded-[24px] overflow-hidden mb-32"
          >
            <img
              src="/employee.jpg"
              alt="The Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          {/* WORKING WITH US */}
          <div className="mb-20">
            <div className="mb-8">
              <h3
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  background:
                    "linear-gradient(0deg, #F2F2F2 21.43%, #8C8C8C 80.36%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Working with us
              </h3>
              <p className="text-gray-500 text-lg max-w-xl">
                Discover a workplace where your talents are recognized, your
                voice matters, and your contribution helps shape the future.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-6 rounded-[32px] bg-[#000000] border border-white/5 hover:border-blue-500/40 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-4xl font-bold text-[#32A0F4] tracking-tighter">
                      {benefit.id}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#111] border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-[0_0_20px_rgba(0,112,243,0.1)]">
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 -rotate-45"
                      />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{benefit.title}</h4>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* OPEN POSITIONS */}
          <div className="mb-20">
            <div className="mb-10">
              <h3
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  background:
                    "linear-gradient(0deg, #F2F2F2 21.43%, #8C8C8C 80.36%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Open Positions
              </h3>
              <p className="text-gray-500 text-lg max-w-xl">
                Browse our current job openings and see how you can contribute
                to our expanding team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {jobs.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-[20px] bg-[#000000] border border-white/5 hover:bg-[#111] transition-all flex flex-col min-h-[320px]"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#FF7E7E]/10 flex items-center justify-center text-[#FF7E7E]">
                      <div className="w-7 h-7 bg-[#FF7E7E]/40 rounded-sm" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white text-black text-[14px] font-bold tracking-tight">
                      {job.salary}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3 tracking-tight">
                    {job.title}
                  </h4>
                  <p className="text-gray-500 text-lg mb-auto leading-relaxed opacity-80">
                    {job.description}
                  </p>

                  <div className="flex items-center gap-4 pt-4 mt-auto">
                    <div className="flex items-center gap-2 text-[15px] font-medium text-white/90">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-2 text-[15px] font-medium text-white/90">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      {job.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <CTASection
        title="Not sure where to start?"
        description="Get 30 mins free AI resources calls for free, focused and actionable."
        buttonText="Schedule a free AI consultation"
      />
    </>
  );
};

export default CareersSection;

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Users, Target } from "lucide-react";
import { CTASection } from "./CTAButton";
import { careersJobs } from "@/lib/careers";
import BackgroundBlur from "./BackgroundBlur";

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

  return (
    <>
      <section className="relative bg-[#020202] text-white pt-24 pb-10 px-6 md:px-12 font-sans overflow-hidden">
        {/* Background blur ellipses */}
        <BackgroundBlur />
        <div className="max-w-[90%] mx-auto">
          {/* HERO */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-[64px] font-medium tracking-tighter leading-[0.9] max-w-3xl"
            >
              <span
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(26px, 6vw, 52px)",
                  lineHeight: "110%",
                  letterSpacing: "-0.04em",
                  background:
                    "linear-gradient(1.48deg, #000000 -4.77%, #8C8C8C 15.82%, #FFFFFF 94.85%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
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

          {/* WORKING WITH US */}
          <div className="my-20">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 ">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-6 rounded-xl bg-[#000000] border border-[#32A0F447] z-10 hover:border-[#32A0F447]/40 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-4xl font-bold text-[#32A0F4] tracking-tighter">
                      {benefit.id}
                    </span>
                    <div className="p-3 bg-blue-500/5 rounded-xl border border-blue-500/10 group-hover:border-blue-500/30 transition-all">
                      <Target className="w-6 h-6 text-[#32A0F4]" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{benefit.title}</h4>
                  <p className="text-[#FFFFFF80] text-lg leading-relaxed">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
              {careersJobs.map((job, i) => (
                <motion.div
                  key={job.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group h-full rounded-[18px] bg-[#111111] z-10 border border-white/5 hover:border-[#58A4FF]/30 transition-all duration-500"
                >
                  <Link
                    href={`/careers/${job.slug}`}
                    className="flex h-full flex-col justify-between px-8 py-8"
                  >
                    <div>
                      <h4 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
                        {job.title}
                      </h4>
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 text-sm text-[#D7DCF5]">
                          <div className="inline-flex items-center gap-3">
                            <Briefcase className="h-4 w-4 text-[#ffffff]/50" />
                            <span className="text-[#ffffff]/50">
                              Experience Level : {job.experience}
                            </span>
                          </div>
                          <div className="inline-flex items-center gap-3">
                            <Users className="h-4 w-4 text-[#ffffff]/50" />
                            <span className="text-[#ffffff]/50">
                              Vacancy : {job.vacancy}
                            </span>
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                          <span>View Details</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <CTASection
        title="Didn’t find your preferred position?"
        description="Stay connected with NextWaveAI for career openings and industry updates, and take the next step to join our team."
        buttonText="Send us your resume"
        onClick={() => {
          window.location.href = "mailto:nextwaveai@gmail.com";
        }}
      />
    </>
  );
};

export default CareersSection;

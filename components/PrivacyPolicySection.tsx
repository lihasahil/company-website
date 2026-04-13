"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BackgroundBlur from "./BackgroundBlur";

/* ───── table-of-contents data ───── */
const tocItems = [
  { id: "data-controller", label: "Data Controller" },
  { id: "information-collect", label: "Information We Collect" },
  { id: "legal-basis", label: "Legal Basis for Processing" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "data-sharing", label: "Data Sharing and Disclosure" },
  { id: "international-transfers", label: "International Data Transfers" },
  { id: "data-retention", label: "Data Retention" },
  { id: "data-security", label: "Data Security" },
  { id: "your-rights", label: "Your Rights" },
  { id: "children-privacy", label: "Children's Privacy" },
  { id: "changes", label: "Changes to This Privacy Policy" },
  { id: "contact", label: "Contact Us" },
];

/* ───── helper: fade-up variants ───── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
});

/* ───── section heading component ───── */
const SectionHeading = ({ title }: { title: string }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="w-2.5 h-2.5 rounded-full bg-[#0091FF] shrink-0" />
    <h2 className="text-[#0091FF] text-[20px] sm:text-[22px] font-semibold tracking-wide">
      {title}
    </h2>
  </div>
);

/* ───── content block wrapper with active border ───── */
const ContentBlock = ({
  id,
  isActive,
  children,
}: {
  id: string;
  isActive: boolean;
  children: React.ReactNode;
}) => (
  <div
    id={id}
    className="mb-8 scroll-mt-28 rounded-xl background-[#000000]  transition-all duration-300"
    style={{
      borderLeft: isActive ? "8px solid #32A0F4" : "8px solid transparent",
      paddingLeft: "20px",
      background: isActive
        ? "linear-gradient(90deg, rgba(50,160,244,0.06) 0%, transparent 60%)"
        : "#000000",
    }}
  >
    <div className="p-2 ">{children}</div>
  </div>
);

export default function PrivacyPolicySection() {
  const [activeId, setActiveId] = useState(tocItems[0].id);

  /* ── intersection observer to highlight active TOC item ── */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleTocClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-[#0A0A0A] font-[Urbanist,sans-serif] overflow-hidden">
      <BackgroundBlur />

      {/* ───── Hero ───── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-18 text-center">
        {/* Pill badge */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[#0091FF]/40 bg-[#0091FF]/10 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0091FF]" />
          <span
            className=" text-sm font-medium tracking-wide"
            style={{
              background:
                "linear-gradient(0deg, #F2F2F2 21.43%, #8C8C8C 80.36%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Last Updated on 13th April 2026
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp(0.08)}
          initial="hidden"
          animate="visible"
          className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-white font-[Urbanist] leading-tight mb-6"
          style={{
            background: "linear-gradient(0deg, #F2F2F2 21.43%, #8C8C8C 80.36%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Privacy Policy
        </motion.h1>

        {/* Intro paragraph */}
        <motion.p
          variants={fadeUp(0.16)}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-[#B0B0B0] text-[15px] sm:text-[16px] leading-[170%]"
        >
          At NextWave AI (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;,
          or &quot;our&quot;), we are committed to protecting your personal data
          and respecting your privacy. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit
          our website and use our services. Please read this policy carefully.
        </motion.p>
      </div>

      {/* ───── Main content grid ───── */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-2 pb-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* ── LEFT: sticky TOC sidebar ── */}
          <motion.aside
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
            className="lg:w-[260px]  xl:w-[280px] shrink-0"
          >
            <div className="lg:sticky lg:top-28 bg-[#000000] p-4 rounded-xl">
              <h3 className="text-[#32A0F4] text-[17px] pb-3 border-b border-[#32A0F440] font-semibold mb-5 tracking-wide">
                On this Page
              </h3>
              <nav className="flex flex-col gap-0.5">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleTocClick(e, item.id)}
                    className={`
                      block text-[14px] sm:text-[15px] py-2 pl-4 border-l-2  transition-all duration-200
                      ${
                        activeId === item.id
                          ? "border-[#0091FF] text-[#0091FF] font-medium"
                          : "border-[#2A2A2A] text-[#777] hover:text-[#bbb] hover:border-[#555]"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </motion.aside>

          {/* ── RIGHT: Policy content ── */}
          <motion.div
            variants={fadeUp(0.24)}
            initial="hidden"
            animate="visible"
            className="flex-1 min-w-0"
          >
            {/* ---------- Data Controller ---------- */}
            <ContentBlock
              id="data-controller"
              isActive={activeId === "data-controller"}
            >
              <SectionHeading title="Data Controller" />
              <p className="text-[#B0B0B0] text-[15px] leading-[180%]">
                The data controller responsible for your personal data is NextWaveAI, registered at Registered Address, Kathmandu, Nepal. For all data protection inquiries, you may contact our Data Protection Officer at <span className="text-[#0091FF]">legal@nxtwaveai.com</span>.
              </p>
            </ContentBlock>

            {/* ---------- Information We Collect ---------- */}
            <ContentBlock
              id="information-collect"
              isActive={activeId === "information-collect"}
            >
              <SectionHeading title="Information We Collect" />
              <div className="flex flex-col gap-6 text-[#B0B0B0] text-[15px] leading-[180%]">
                <div>
                  <h4 className="text-white font-medium mb-2 underline decoration-[#0091FF]/30 underline-offset-4">3.1 Information You Provide Directly</h4>
                  <p>We collect personal information that you voluntarily provide to us, including but not limited to: (a) full name; (b) email address; (c) telephone number; (d) company or organization name and designation; (e) billing and payment information; (f) project-related information, specifications, and requirements; (g) correspondence and communications with us; and (h) any other information you choose to provide.</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2 underline decoration-[#0091FF]/30 underline-offset-4">3.2 Information Collected Automatically</h4>
                  <p>When you visit our website, we automatically collect certain information about your device and your visit, including: (a) IP address and approximate geographic location; (b) browser type and version; (c) operating system; (d) referring and exit pages; (e) date and time of visit; (f) pages viewed and time spent on pages; (g) clickstream data; and (h) device identifiers.</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2 underline decoration-[#0091FF]/30 underline-offset-4">3.3 Information from Third Parties</h4>
                  <p>We may receive information about you from third parties, including: (a) business partners and subcontractors; (b) analytics providers; (c) advertising networks; (d) search information providers; and (e) publicly available sources.</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2 underline decoration-[#0091FF]/30 underline-offset-4">3.4 Cookies and Tracking Technologies</h4>
                  <p>We use cookies, web beacons, pixel tags, and similar tracking technologies to collect information about your browsing behavior. Please refer to our Cookie Policy for detailed information about our use of cookies.</p>
                </div>
              </div>
            </ContentBlock>

            {/* ---------- Legal Basis ---------- */}
            <ContentBlock
              id="legal-basis"
              isActive={activeId === "legal-basis"}
            >
              <SectionHeading title="Legal Basis for Processing" />
              <p className="text-[#B0B0B0] text-[15px] leading-[180%]">
                We process your personal data on the following legal bases: (a) Consent: Where you have given clear consent for us to process your personal data for a specific purpose. (b) Contractual Necessity: Where processing is necessary for the performance of a contract to which you are a party. (c) Legal Obligation: Where processing is necessary for compliance with a legal obligation to which the Company is subject. (d) Legitimate Interests: Where processing is necessary for the legitimate interests pursued by the Company, except where such interests are overridden by your fundamental rights and freedoms.
              </p>
            </ContentBlock>

            {/* ---------- How We Use ---------- */}
            <ContentBlock id="how-we-use" isActive={activeId === "how-we-use"}>
              <SectionHeading title="How We Use Your Information" />
              <p className="text-[#B0B0B0] text-[15px] leading-[180%]">
                We use your personal information for the following purposes: (a) to provide, maintain, and improve our Services; (b) to process transactions and send related information; (c) to communicate with you, including responding to inquiries and providing customer support; (d) to send promotional communications, where you have opted in; (e) to monitor and analyze trends, usage, and activities; (f) to detect, investigate, and prevent security incidents and fraudulent activity; (g) to comply with legal obligations; (h) to enforce our Terms of Service and other agreements; and (i) for any other purpose with your consent.
              </p>
            </ContentBlock>

            {/* ---------- Data Sharing ---------- */}
            <ContentBlock id="data-sharing" isActive={activeId === "data-sharing"}>
              <SectionHeading title="Data Sharing and Disclosure" />
              <p className="text-[#B0B0B0] text-[15px] leading-[180%]">
                We do not sell your personal data. We may share your personal information in the following circumstances: (a) with service providers who perform services on our behalf, subject to confidentiality agreements; (b) with business partners in connection with services provided to you; (c) in response to a request for information if we believe disclosure is required by applicable law, regulation, or legal process; (d) if we believe your actions are inconsistent with our agreements or policies, or to protect the rights, property, and safety of the Company or others; (e) in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business; and (f) with your consent or at your direction.
              </p>
            </ContentBlock>

            {/* ---------- International Transfers ---------- */}
            <ContentBlock
              id="international-transfers"
              isActive={activeId === "international-transfers"}
            >
              <SectionHeading title="International Data Transfers" />
              <p className="text-[#B0B0B0] text-[15px] leading-[180%]">
                Your personal data may be transferred to and processed in countries other than Nepal. When we transfer personal data internationally, we ensure appropriate safeguards are in place, including: (a) standard contractual clauses; (b) data processing agreements; and (c) ensuring the receiving country provides an adequate level of data protection. For clients within the European Economic Area, we ensure transfers comply with GDPR requirements.
              </p>
            </ContentBlock>

            {/* ---------- Data Retention ---------- */}
            <ContentBlock id="data-retention" isActive={activeId === "data-retention"}>
              <SectionHeading title="Data Retention" />
              <p className="text-[#B0B0B0] text-[15px] leading-[180%]">
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. The retention period is determined based on: (a) the nature of the data; (b) the purposes for which the data is processed; (c) applicable legal requirements; and (d) relevant statutes of limitation. Generally, we retain client data for a period of seven (7) years following the termination of the business relationship, unless a longer period is required by law.
              </p>
            </ContentBlock>

            {/* ---------- Data Security ---------- */}
            <ContentBlock
              id="data-security"
              isActive={activeId === "data-security"}
            >
              <SectionHeading title="Data Security" />
              <p className="text-[#B0B0B0] text-[15px] leading-[180%]">
                We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include: (a) encryption of data in transit and at rest; (b) access controls and authentication mechanisms; (c) regular security assessments and audits; (d) employee training on data protection; and (e) incident response procedures. However, no method of transmission over the Internet or method of electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </ContentBlock>

            {/* ---------- Your Rights ---------- */}
            <ContentBlock
              id="your-rights"
              isActive={activeId === "your-rights"}
            >
              <SectionHeading title="Your Rights" />
              <p className="text-[#B0B0B0] text-[15px] leading-[180%]">
                Subject to applicable law, you have the following rights regarding your personal data: (a) Right of Access: the right to request a copy of the personal data we hold about you; (b) Right to Rectification: the right to request correction of inaccurate or incomplete data; (c) Right to Erasure: the right to request deletion of your personal data under certain circumstances; (d) Right to Restrict Processing: the right to request that we restrict the processing of your data; (e) Right to Data Portability: the right to receive your personal data in a structured, commonly used, and machine-readable format; (f) Right to Object: the right to object to the processing of your personal data; (g) Right to Withdraw Consent: the right to withdraw consent at any time where processing is based on consent. To exercise any of these rights, please contact us at <span className="text-[#0091FF]">hemantgoyal@nxtwaveai.com</span>.
              </p>
            </ContentBlock>

            {/* ---------- Children's Privacy ---------- */}
            <ContentBlock
              id="children-privacy"
              isActive={activeId === "children-privacy"}
            >
              <SectionHeading title="Children's Privacy" />
              <p className="text-[#B0B0B0] text-[15px] leading-[180%]">
                Our website and Services are not directed to individuals under the age of eighteen (18). We do not knowingly collect personal data from children. If we become aware that a child has provided us with personal data, we will take steps to delete such information promptly.
              </p>
            </ContentBlock>

            {/* ---------- Changes ---------- */}
            <ContentBlock id="changes" isActive={activeId === "changes"}>
              <SectionHeading title="Changes to This Privacy Policy" />
              <p className="text-[#B0B0B0] text-[15px] leading-[180%]">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page with a revised effective date. We encourage you to review this Privacy Policy periodically.
              </p>
            </ContentBlock>

            {/* ---------- Contact Us ---------- */}
            <ContentBlock id="contact" isActive={activeId === "contact"}>
              <SectionHeading title="Contact Us" />
              <p className="text-[#B0B0B0] text-[15px] leading-[180%] mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="flex flex-col gap-2 text-[#B0B0B0] text-[15px]">
                <span>
                  <span className="text-white font-medium">NextWaveAI</span>
                </span>
                <span>
                  <span className="text-white font-medium">Address:</span> Registered Address, Kathmandu, Nepal
                </span>
                <span>
                  <span className="text-white font-medium">Email:</span>{" "}
                  <span className="text-[#0091FF]">hemantgoyal@nxtwaveai.com</span>
                </span>
                <span>
                  <span className="text-white font-medium">Website:</span>{" "}
                  <a href="https://nxtwaveai.com/" className="text-[#0091FF]">https://nxtwaveai.com/</a>
                </span>
              </div>
            </ContentBlock>
          </motion.div>
        </div>
      </div>

      {/* ───── Subtle top glow ───── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,145,255,0.08) 0%, transparent 70%)",
        }}
      />
    </section>
  );
}

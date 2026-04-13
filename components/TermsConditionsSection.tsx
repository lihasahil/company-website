"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BackgroundBlur from "./BackgroundBlur";

/* ───── table-of-contents data ───── */
const tocItems = [
  { id: "definition", label: "Definition" },
  { id: "eligibility", label: "Eligibility & Registration" },
  { id: "permitted-use", label: "Permitted Use" },
  { id: "intellectual-property", label: "Intellectual Property Rights" },
  { id: "user-content", label: "User-Generated Content" },
  { id: "third-party", label: "Third-Party Links" },
  { id: "disclaimer", label: "Disclaimer of Warranties" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "modifications", label: "Modifications to Terms" },
  { id: "termination", label: "Termination" },
  { id: "governing-law", label: "Governing Law" },
  { id: "severability", label: "Severability" },
  { id: "entire-agreement", label: "Entire Agreement" },
  { id: "contact", label: "Contact Information" },
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
    className="mb-8 scroll-mt-28 rounded-xl background-[#000000] transition-all duration-300"
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

export default function TermsConditionsSection() {
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
            Terms & Conditions
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
          Terms and Conditions
        </motion.h1>

        {/* Intro paragraph */}
        <motion.p
          variants={fadeUp(0.16)}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-[#B0B0B0] text-[15px] sm:text-[16px] leading-[170%]"
        >
          These Terms and Conditions govern your use of the NextWaveAI website. By accessing or using our website, you agree to be bound by these terms. Please read them carefully to understand your rights and obligations.
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
            className="lg:w-[260px] xl:w-[280px] shrink-0"
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
                      block text-[14px] sm:text-[15px] py-2 pl-4 border-l-2 transition-all duration-200
                      ${
                        activeId === item.id
                          ? "border-[#32A0F4] text-[#32A0F4] font-medium"
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

          {/* ── RIGHT: Terms content ── */}
          <motion.div
            variants={fadeUp(0.24)}
            initial="hidden"
            animate="visible"
            className="flex-1 min-w-0"
          >
            {/* ---------- Definition ---------- */}
            <ContentBlock id="definition" isActive={activeId === "definition"}>
              <SectionHeading title="Definition" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  <span className="text-white font-medium">&quot;Content&quot;</span> means all text, graphics, images, software, data compilations, audio, video, page layout, underlying code, and any other material displayed on or forming part of this website.
                </p>
                <p>
                  <span className="text-white font-medium">&quot;Intellectual Property&quot;</span> means patents, trademarks, service marks, trade names, domain names, copyrights, design rights, database rights, trade secrets, know-how, and all other intellectual property rights, whether registered or unregistered.
                </p>
                <p>
                  <span className="text-white font-medium">&quot;Services&quot;</span> means the IT services, software development, AI development, web development, consulting, and digital solutions offered by the Company.
                </p>
                <p>
                  <span className="text-white font-medium">&quot;Third-Party Links&quot;</span> means hyperlinks to websites, resources, or services operated by third parties not under the control of the Company.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Eligibility ---------- */}
            <ContentBlock id="eligibility" isActive={activeId === "eligibility"}>
              <SectionHeading title="Eligibility and Account Registration" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  You must be at least eighteen (18) years of age or the age of legal majority in your jurisdiction to use this website. By using this website, you represent and warrant that you meet this eligibility requirement.
                </p>
                <p>
                  If you create an account on this website, you are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
                </p>
                <p>
                  You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Permitted Use ---------- */}
            <ContentBlock id="permitted-use" isActive={activeId === "permitted-use"}>
              <SectionHeading title="Permitted Use" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  You are granted a limited, non-exclusive, non-transferable, revocable license to access and use this website strictly in accordance with these Terms.
                </p>
                <p>
                  You shall not use this website for any unlawful purpose or in any manner that could damage, disable, overburden, or impair the website or interfere with any other party&apos;s use and enjoyment of the website.
                </p>
                <p>
                  Unauthorized use of this website, including but not limited to scraping, data mining, automated access, reverse engineering, or any attempt to gain unauthorized access to restricted areas or systems, is strictly prohibited.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Intellectual Property ---------- */}
            <ContentBlock id="intellectual-property" isActive={activeId === "intellectual-property"}>
              <SectionHeading title="Intellectual Property Rights" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  All Content on this website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of NextWaveAI or its content suppliers and is protected by applicable Intellectual Property laws of Nepal and international treaties.
                </p>
                <p>
                  No part of this website may be reproduced, distributed, modified, transmitted, reused, re-posted, or used for commercial purposes without the prior written consent of the Company.
                </p>
                <p>
                  The Company name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of the Company. You must not use such marks without the prior written permission of the Company.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- User Content ---------- */}
            <ContentBlock id="user-content" isActive={activeId === "user-content"}>
              <SectionHeading title="User-Generated Content" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  If you submit, upload, or post any content to this website (&quot;User Content&quot;), you grant the Company a non-exclusive, worldwide, royalty-free, irrevocable, sub-licensable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content in connection with the operation of the website and the promotion of the Company&apos;s Services.
                </p>
                <p>
                  You represent and warrant that you own or have the necessary rights to submit User Content and that such content does not infringe upon the rights of any third party.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Third Party ---------- */}
            <ContentBlock id="third-party" isActive={activeId === "third-party"}>
              <SectionHeading title="Third-Party Links and Resources" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  This website may contain links to third-party websites or resources. These links are provided for your convenience only. The Company has no control over the contents of these sites or resources and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
                </p>
                <p>
                  The inclusion of any link does not imply endorsement by the Company. Use of any third-party website is at your own risk and subject to the terms and conditions of use for such websites.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Disclaimer ---------- */}
            <ContentBlock id="disclaimer" isActive={activeId === "disclaimer"}>
              <SectionHeading title="Disclaimer of Warranties" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p className="font-bold text-white italic">
                  THIS WEBSITE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
                </p>
                <p>
                  The Company does not warrant that (a) the website will function uninterrupted, secure, or available at any particular time or location; (b) any errors or defects will be corrected; (c) the website is free of viruses or other harmful components; or (d) the results of using the website will meet your requirements.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Liability ---------- */}
            <ContentBlock id="liability" isActive={activeId === "liability"}>
              <SectionHeading title="Limitation of Liability" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p className="font-bold text-white italic">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL NEXTWAVEAI, ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, AFFILIATES, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THIS WEBSITE.
                </p>
                <p>
                  The total aggregate liability of the Company for any claims arising out of or relating to these Terms or the use of the website shall not exceed the amount paid by you, if any, to the Company during the twelve (12) months preceding the claim.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Indemnification ---------- */}
            <ContentBlock id="indemnification" isActive={activeId === "indemnification"}>
              <SectionHeading title="Indemnification" />
              <p className="text-[#B0B0B0] text-[15px] leading-[180%]">
                You agree to defend, indemnify, and hold harmless NextWaveAI, its officers, directors, employees, agents, licensors, and suppliers from and against any claims, actions, demands, liabilities, and settlements including, without limitation, reasonable legal and accounting fees, arising out of or in connection with your use of this website or your violation of these Terms.
              </p>
            </ContentBlock>

            {/* ---------- Modifications ---------- */}
            <ContentBlock id="modifications" isActive={activeId === "modifications"}>
              <SectionHeading title="Modifications to Terms" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  The Company reserves the right to modify or replace these Terms at any time at its sole discretion. Material changes will be communicated by posting updated Terms on this website with a revised Effective Date.
                </p>
                <p>
                  Your continued use of this website after any such changes constitutes your acceptance of the new Terms. You are advised to review these Terms periodically for any changes.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Termination ---------- */}
            <ContentBlock id="termination" isActive={activeId === "termination"}>
              <SectionHeading title="Termination" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  The Company may terminate or suspend your access to this website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
                </p>
                <p>
                  Upon termination, your right to use this website will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Governing Law ---------- */}
            <ContentBlock id="governing-law" isActive={activeId === "governing-law"}>
              <SectionHeading title="Governing Law and Dispute Resolution" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Nepal, including but not limited to the Contract Act 2056 (2000), the Electronic Transactions Act 2063 (2008), and other applicable legislation, without regard to conflict of law principles.
                </p>
                <p>
                  Any dispute arising out of or in connection with these Terms shall first be attempted to be resolved through good-faith negotiation between the parties for a period of thirty (30) days.
                </p>
                <p>
                  If the dispute cannot be resolved through negotiation, it shall be referred to and finally resolved by arbitration administered under the Arbitration Act 2055 (1999) of Nepal. The seat of arbitration shall be Kathmandu, Nepal, and the language of arbitration shall be English.
                </p>
                <p>
                  Nothing in this clause shall prevent either party from seeking injunctive or other equitable relief from the courts of competent jurisdiction in Kathmandu, Nepal.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Severability ---------- */}
            <ContentBlock id="severability" isActive={activeId === "severability"}>
              <SectionHeading title="Severability" />
              <p className="text-[#B0B0B0] text-[15px] leading-[180%]">
                If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
              </p>
            </ContentBlock>

            {/* ---------- Entire Agreement ---------- */}
            <ContentBlock id="entire-agreement" isActive={activeId === "entire-agreement"}>
              <SectionHeading title="Entire Agreement" />
              <p className="text-[#B0B0B0] text-[15px] leading-[180%]">
                These Terms, together with the Privacy Policy and any other legal notices published by the Company on this website, constitute the entire agreement between you and the Company concerning your use of this website.
              </p>
            </ContentBlock>

            {/* ---------- Contact ---------- */}
            <ContentBlock id="contact" isActive={activeId === "contact"}>
              <SectionHeading title="Contact Information" />
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

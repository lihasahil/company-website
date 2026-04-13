"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BackgroundBlur from "./BackgroundBlur";

/* ───── table-of-contents data ───── */
const tocItems = [
  { id: "definitions", label: "Definitions" },
  { id: "service-terms", label: "Service Terms" },
  { id: "client-obligations", label: "Client Obligations" },
  { id: "payment-terms", label: "Payment Terms" },
  { id: "project-changes", label: "Project Changes & Change Orders" },
  { id: "acceptance-testing", label: "Acceptance & Testing" },
  { id: "warranties", label: "Warranties" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "data-protection", label: "Data Protection" },
  { id: "limitation-of-liability", label: "Limitation of Liability" },
  { id: "termination", label: "Termination" },
  { id: "force-majeure", label: "Force Majeure" },
  { id: "governing-law", label: "Governing Law & Dispute Resolution" },
  { id: "general-provisions", label: "General Provisions" },
  { id: "contact-info", label: "Contact Information" },
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

export default function TermsOfServiceSection() {
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
            Terms of Service
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
          Terms of Service for IT Services
        </motion.h1>

        {/* Intro paragraph */}
        <motion.p
          variants={fadeUp(0.16)}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-[#B0B0B0] text-[15px] sm:text-[16px] leading-[170%]"
        >
          These Terms of Service govern the provision of specialized IT services and solutions by NextWave AI. By engaging our services, you agree to these comprehensive terms designed to ensure project success and professional collaboration.
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
            {/* ---------- Definitions ---------- */}
            <ContentBlock id="definitions" isActive={activeId === "definitions"}>
              <SectionHeading title="Definitions" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  <span className="text-white font-medium">&quot;Deliverables&quot;</span> means all work products, software, code, designs, documentation, reports, and other materials created by the Service Provider in the course of performing the Services.
                </p>
                <p>
                  <span className="text-white font-medium">&quot;Project&quot;</span> means the specific scope of work agreed upon between the Service Provider and the Client as documented in a Statement of Work or Service Order.
                </p>
                <p>
                  <span className="text-white font-medium">&quot;Statement of Work&quot; or &quot;SOW&quot;</span> means a document that describes the specific Services to be performed, timelines, deliverables, milestones, and associated costs.
                </p>
                <p>
                  <span className="text-white font-medium">&quot;Confidential Information&quot;</span> means all non-public information disclosed by either party, including but not limited to business data, source code, technical data, trade secrets, financial information, and client data.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Service Terms ---------- */}
            <ContentBlock id="service-terms" isActive={activeId === "service-terms"}>
              <SectionHeading title="3. Service Terms" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  <span className="text-white font-medium">3.1.</span> All Services shall be provided pursuant to a written Statement of Work or Service Order mutually accepted by both parties. Each SOW shall define the scope of work, timeline, milestones, deliverables, acceptance criteria, and fees.
                </p>
                <p>
                  <span className="text-white font-medium">3.2.</span> The Service Provider shall perform the Services with reasonable skill and care and in accordance with generally accepted industry standards and practices.
                </p>
                <p>
                  <span className="text-white font-medium">3.3.</span> The Service Provider reserves the right to subcontract portions of the work, provided that the Service Provider remains fully responsible for the quality and timeliness of all Deliverables.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Client Obligations ---------- */}
            <ContentBlock id="client-obligations" isActive={activeId === "client-obligations"}>
              <SectionHeading title="4. Client Obligations" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  <span className="text-white font-medium">4.1.</span> The Client must provide access to all necessary information, resources, systems, personnel, and decisions required for the Service Provider to perform the Services.
                </p>
                <p>
                  <span className="text-white font-medium">4.2.</span> The Client shall designate an authorized project representative who shall have authority to make decisions and provide approval on behalf of the Client.
                </p>
                <p>
                  <span className="text-white font-medium">4.3.</span> The Client acknowledges that delays in providing information, approvals, or feedback may result in corresponding delays in the delivery of Services and Deliverables. The Service Provider shall not be liable for such delays.
                </p>
                <p>
                  <span className="text-white font-medium">4.4.</span> The Client shall comply with all applicable laws and regulations in connection with its use of the Services and Deliverables.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Payment Terms ---------- */}
            <ContentBlock id="payment-terms" isActive={activeId === "payment-terms"}>
              <SectionHeading title="5. Payment Terms" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  <span className="text-white font-medium">5.1.</span> Fees for Services shall be as set forth in the applicable SOW or Service Order. Unless otherwise specified, all fees are quoted in United States Dollars (USD) or Nepalese Rupees (NPR).
                </p>
                <p>
                  <span className="text-white font-medium">5.2.</span> Invoices shall be issued in accordance with the payment schedule specified in the SOW. Unless otherwise agreed, payment is due within fifteen (15) days from the date of invoice.
                </p>
                <p>
                  <span className="text-white font-medium">5.3.</span> Late payments shall accrue interest at the rate of one and a half percent (1.5%) per month or the maximum rate permitted by applicable law, whichever is lower.
                </p>
                <p>
                  <span className="text-white font-medium">5.4.</span> All fees are exclusive of applicable taxes, levies, and duties, including but not limited to Value Added Tax (VAT) or applicable sales tax. The Client shall be responsible for payment of all such taxes except for taxes on the Service Provider&apos;s income.
                </p>
                <p>
                  <span className="text-white font-medium">5.5.</span> The Service Provider reserves the right to suspend Services if any invoice remains unpaid for more than thirty (30) days past the due date, upon providing fifteen (15) days&apos; written notice.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Project Changes ---------- */}
            <ContentBlock id="project-changes" isActive={activeId === "project-changes"}>
              <SectionHeading title="6. Project Changes and Change Orders" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  <span className="text-white font-medium">6.1.</span> Changes to the scope, timeline, or deliverables of a Project must be documented in a written Change Order agreed by both parties.
                </p>
                <p>
                  <span className="text-white font-medium">6.2.</span> The Service Provider shall assess the impact of any requested changes on the schedule, resources, and fees, and communicate this to the Client before commencing work on the change.
                </p>
                <p>
                  <span className="text-white font-medium">6.3.</span> The Service Provider is not obligated to perform work outside the scope defined in the applicable SOW unless a Change Order has been executed.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Acceptance and Testing ---------- */}
            <ContentBlock id="acceptance-testing" isActive={activeId === "acceptance-testing"}>
              <SectionHeading title="7. Acceptance and Testing" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  <span className="text-white font-medium">7.1.</span> Upon delivery of Deliverables, the Client shall have a period of ten (10) business days (or such other period specified in the SOW) to review and test the Deliverables (“Acceptance Period”).
                </p>
                <p>
                  <span className="text-white font-medium">7.2.</span> The Client shall notify the Service Provider in writing of any deficiencies or non-conformities with the requirements set forth in the SOW or provide a list of reasonable defects that require correction.
                </p>
                <p>
                  <span className="text-white font-medium">7.3.</span> If deficiencies are noted, the Service Provider shall attend them within a reasonable timeframe. Once corrections are made, a new Acceptance Period shall commence.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Warranties ---------- */}
            <ContentBlock id="warranties" isActive={activeId === "warranties"}>
              <SectionHeading title="8. Warranties" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  <span className="text-white font-medium">8.1.</span> The Service Provider warrants that (a) the Services will be performed in a professional and workmanlike manner; (b) the Deliverables will substantially conform to the specifications set forth in the applicable SOW; and (c) it has the necessary skills and expertise to perform the Services as described.
                </p>
                <p>
                  <span className="text-white font-medium">8.2.</span> The Service Provider provides a warranty period of thirty (30) days following acceptance of final deliverables, during which it will correct any material defect or malfunction at no additional charge.
                </p>
                <p className="font-bold text-white italic">
                  8.3. THE WARRANTIES SET FORTH IN THIS SECTION ARE EXCLUSIVE AND IN LIEU OF ALL OTHER WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Confidentiality ---------- */}
            <ContentBlock id="confidentiality" isActive={activeId === "confidentiality"}>
              <SectionHeading title="9. Confidentiality" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  <span className="text-white font-medium">9.1.</span> Each party agrees to treat the other party&apos;s Confidential Information in strict confidence and not to disclose it to any third party without prior written consent.
                </p>
                <p>
                  <span className="text-white font-medium">9.2.</span> The receiving party shall use at least the same degree of care to protect Confidential Information as it uses to protect its own confidential information, but in no event less than reasonable care.
                </p>
                <p>
                  <span className="text-white font-medium">9.3.</span> Confidential Information does not include information that: (a) is or becomes publicly available through no fault of the receiving party; (b) was already known to the receiving party prior to disclosure; (c) is independently developed by the receiving party; or (d) is rightfully received from a third party without restriction.
                </p>
                <p>
                  <span className="text-white font-medium">9.4.</span> These confidentiality obligations shall survive the termination of these Terms for a period of three (3) years.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Intellectual Property ---------- */}
            <ContentBlock id="intellectual-property" isActive={activeId === "intellectual-property"}>
              <SectionHeading title="10. Intellectual Property" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  <span className="text-white font-medium">10.1.</span> Unless otherwise agreed in writing, upon full payment of all applicable fees, the Client shall own all rights, title, and interest in the custom Deliverables created specifically for the Client&apos;s Project.
                </p>
                <p>
                  <span className="text-white font-medium">10.2.</span> The Service Provider retains all rights to its pre-existing intellectual property, tools, libraries, frameworks, methodologies, and know-how (“Service Provider IP”) used in the provision of the Services.
                </p>
                <p>
                  <span className="text-white font-medium">10.3.</span> To the extent any Service Provider IP is incorporated into the Deliverables, the Service Provider grants the Client a non-exclusive, perpetual, royalty-free license to use, modify, and distribute such Service Provider IP solely as part of the Deliverables.
                </p>
                <p>
                  <span className="text-white font-medium">10.4.</span> The Service Provider may use general skills, techniques, concepts, and know-how acquired during the performance of the Services, provided such use does not disclose the Client&apos;s Confidential Information.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Data Protection ---------- */}
            <ContentBlock id="data-protection" isActive={activeId === "data-protection"}>
              <SectionHeading title="11. Data Protection" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  <span className="text-white font-medium">11.1.</span> The Service Provider shall process any personal data received from or on behalf of the Client in accordance with applicable data protection laws, including Nepal&apos;s Individual Privacy Act 2075 (2018) and where applicable, the GDPR.
                </p>
                <p>
                  <span className="text-white font-medium">11.2.</span> Where the Service Provider processes personal data on behalf of the Client, the Service Provider acts as a processor. The terms shall be defined in a data processing agreement as required by applicable law.
                </p>
                <p>
                  <span className="text-white font-medium">11.3.</span> The Service Provider shall implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Limitation of Liability ---------- */}
            <ContentBlock id="limitation-of-liability" isActive={activeId === "limitation-of-liability"}>
              <SectionHeading title="12. Limitation of Liability" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p className="font-bold text-white italic">
                  12.1. TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE PROVIDER&apos;S TOTAL AGGREGATE LIABILITY UNDER THESE TERMS SHALL NOT EXCEED THE TOTAL FEES PAID BY THE CLIENT TO THE SERVICE PROVIDER IN THE TWELVE (12) PRECEDING MONTHS BEFORE THE CAUSE OF ACTION AROSE.
                </p>
                <p className="font-bold text-white italic">
                  12.2. IN NO EVENT SHALL THE SERVICE PROVIDER BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, LOSS OF DATA, OR INTERRUPTION OF BUSINESS.
                </p>
                <p>
                  <span className="text-white font-medium">12.3.</span> The limitations in this section shall not apply to: (a) breaches of confidentiality obligations; (b) indemnification obligations; (c) willful misconduct or gross negligence; or (d) any liability that cannot be limited under applicable law.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Termination ---------- */}
            <ContentBlock id="termination" isActive={activeId === "termination"}>
              <SectionHeading title="13. Termination" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  <span className="text-white font-medium">13.1.</span> Either party may terminate these Terms or any SOW upon thirty (30) days&apos; written notice to the other party.
                </p>
                <p>
                  <span className="text-white font-medium">13.2.</span> Either party may immediately terminate upon written notice if the other party: (a) commits a material breach and fails to cure said breach within fifteen (15) days of written notice; (b) becomes insolvent or enters into bankruptcy proceedings.
                </p>
                <p>
                  <span className="text-white font-medium">13.3.</span> Upon termination, the Client shall pay the Service Provider for all Services rendered and expenses incurred up to the date of termination. The Service Provider shall deliver to the Client all Deliverables and work product completed to date, subject to payment. Any outstanding obligations and rights shall remain in full force and effect to the extent required for the equitable resolution of all matters.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Force Majeure ---------- */}
            <ContentBlock id="force-majeure" isActive={activeId === "force-majeure"}>
              <SectionHeading title="14. Force Majeure" />
              <p className="text-[#B0B0B0] text-[15px] leading-[180%]">
                Neither party shall be liable for any failure or delay in performing its obligations where such failure or delay results from any cause beyond the reasonable control of that party, including but not limited to acts of God, natural disasters, pandemics, epidemics, war, terrorism, riots, embargoes, acts of civil or military authorities, floods, earthquakes, strikes, power outages, internet disruptions, or government actions.
              </p>
            </ContentBlock>

            {/* ---------- Governing Law ---------- */}
            <ContentBlock id="governing-law" isActive={activeId === "governing-law"}>
              <SectionHeading title="15. Governing Law and Dispute Resolution" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  <span className="text-white font-medium">15.1.</span> These Terms shall be governed by and construed in accordance with the laws of Nepal.
                </p>
                <p>
                  <span className="text-white font-medium">15.2.</span> Any disputes arising out of or in connection with these Terms shall first be attempted to be resolved through good-faith negotiation for thirty (30) days. If unresolved, the dispute shall be referred to arbitration under the Arbitration Act 2055 (1999) of Nepal in accordance with its rules and procedures.
                </p>
                <p>
                  <span className="text-white font-medium">15.3.</span> The language of arbitration shall be English, and the seat of arbitration shall be Kathmandu, Nepal.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- General Provisions ---------- */}
            <ContentBlock id="general-provisions" isActive={activeId === "general-provisions"}>
              <SectionHeading title="16. General Provisions" />
              <div className="flex flex-col gap-4 text-[#B0B0B0] text-[15px] leading-[180%]">
                <p>
                  <span className="text-white font-medium">16.1. Assignment:</span> Neither party may assign its rights or obligations without the prior written consent of the other party, except that either party may assign this agreement to a successor in interest in connection with a merger, acquisition, or sale of all or substantially all of its assets, provided the assignee agrees to be bound prior to the said succession in the applicable SOW.
                </p>
                <p>
                  <span className="text-white font-medium">16.2. Severability:</span> If any provision is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                </p>
                <p>
                  <span className="text-white font-medium">16.3. Waiver:</span> The failure of either party to enforce any right or provision shall not constitute a waiver of such right or provision.
                </p>
                <p>
                  <span className="text-white font-medium">16.4. Entire Agreement:</span> These Terms, together with any applicable SOW and Change Orders, constitute the entire agreement between the parties and supersede all prior agreements, understandings, and negotiations between the parties.
                </p>
              </div>
            </ContentBlock>

            {/* ---------- Contact Info ---------- */}
            <ContentBlock id="contact-info" isActive={activeId === "contact-info"}>
              <SectionHeading title="Contact Information" />
              <div className="flex flex-col gap-2 text-[#B0B0B0] text-[15px]">
                <p>Address any questions about these Terms, please contact us at:</p>
                <span>
                  <span className="text-white font-medium">NextWaveAI</span>
                </span>
                <span>
                  <span className="text-white font-medium">Address:</span> Registered Address, Kathmandu, Nepal
                </span>
                <span>
                  <span className="text-white font-medium">Email:</span>{" "}
                  <span className="text-[#32A0F4]">hemantgoyal@nxtwaveai.com</span>
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
            "radial-gradient(ellipse at center, rgba(50,160,244,0.08) 0%, transparent 70%)",
        }}
      />
    </section>
  );
}

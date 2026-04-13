"use client";

import { useEffect, useState } from "react";

const termsSections = [
  { id: "definitions", label: "Definitions" },
  { id: "eligibility", label: "Eligibility and Account Registration" },
  { id: "permitted-use", label: "Permitted Use" },
  { id: "intellectual-property", label: "Intellectual Property Rights" },
  { id: "user-generated-content", label: "User-Generated Content" },
  { id: "third-party-links", label: "Third-Party Links and Resources" },
  { id: "disclaimer", label: "Disclaimer of Warranties" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "modifications", label: "Modifications to Terms" },
  { id: "termination", label: "Termination" },
  { id: "governing-law", label: "Governing Law and Dispute Resolution" },
  { id: "severability", label: "Severability" },
  { id: "entire-agreement", label: "Entire Agreement" },
  { id: "contact", label: "Contact Information" },
];

const getSectionClass = (
  id: string,
  isDefinition = false,
  activeSection = "",
) => {
  const isActive = activeSection === id;
  const baseBg = isDefinition ? "bg-[#111827]" : "bg-[#0B111A]";
  return `rounded-[32px] border border-white/10 p-8 transition-all scroll-mt-28 ${
    isActive
      ? "border-l-4 border-[#36A8FF] bg-[#112133] shadow-[0_0_45px_rgba(54,168,255,0.18)]"
      : baseBg
  }`;
};

export default function TermsContent() {
  const [activeSection, setActiveSection] = useState("definitions");

  useEffect(() => {
    const sections = termsSections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0 && visible[0].target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.25, 0.4, 0.55, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 pb-24 md:px-12">
      <div className="mx-auto grid gap-10 lg:grid-cols-[280px_1fr] max-w-7xl">
        <aside className="rounded-[32px] border border-white/10 bg-[#0B111A] p-6 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#7DD3FC] mb-6">
            On this Page
          </h2>
          <nav className="space-y-3 text-sm leading-7 text-[#cbd5e1]">
            {termsSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`block rounded-xl border px-3 py-2 transition ${
                  activeSection === section.id
                    ? "border-[#36A8FF] bg-white/10 text-white"
                    : "border-transparent hover:border-[#36A8FF]/40 hover:bg-white/5"
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="space-y-8">
          <article
            id="definitions"
            className={getSectionClass("definitions", true, activeSection)}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-[#ffffff0d] px-4 py-2 text-sm uppercase tracking-[0.3em] text-[#7DD3FC]">
              Definition
            </div>
            <div className="space-y-5 text-[#cbd5e1] leading-8">
              <p>
                “Content” means all text, graphics, images, software, data
                compilations, audio, video, page layout, underlying code, and
                any other material displayed on or forming part of the Website.
              </p>
              <p>
                “Intellectual Property” means any trademarks, service marks,
                trade names, domain names, logos, designs, graphics,
                information, know-how and all other intellectual property
                rights, whether registered or unregistered.
              </p>
              <p>
                “Services” means the Website, platform, products and related
                services. All products, tools, websites content, and other
                materials provided through the Website.
              </p>
              <p>
                “Third-Party Links” means hyperlinks to websites, resources, or
                services operated by third parties that are not owned or
                controlled by the Company.
              </p>
            </div>
          </article>

          <article
            id="eligibility"
            className={getSectionClass("eligibility", false, activeSection)}
          >
            <h3 className="text-2xl font-semibold text-white/90 mb-4">
              Eligibility and Account Registration
            </h3>
            <div className="space-y-4 text-[#cbd5e1] leading-8">
              <p>
                You must be at least eighteen (18) years of age or the age of
                legal majority in your jurisdiction to use this website. By
                using this website, you represent and warrant that you have met
                these eligibility requirements.
              </p>
              <p>
                If you create an account on the website, you are responsible for
                maintaining the confidentiality of your login credentials and
                for all activity that occurs under your account.
              </p>
              <p>
                You agree to provide accurate, current and complete information
                during the registration process and to keep your account
                information updated.
              </p>
            </div>
          </article>

          <article
            id="permitted-use"
            className={getSectionClass("permitted-use", false, activeSection)}
          >
            <h3 className="text-2xl font-semibold text-white/90 mb-4">
              Permitted Use
            </h3>
            <ul className="space-y-3 text-[#cbd5e1] leading-8 list-disc list-inside pl-5">
              <li>
                You are granted a limited, non-exclusive, non-transferable,
                revocable license to access and use this website strictly in
                accordance with these Terms.
              </li>
              <li>
                You shall not use this website for any unlawful purpose or in
                any manner that could damage, disable, overburden or impair the
                website or interfere with any other party’s use and enjoyment of
                the website.
              </li>
              <li>
                Unauthorized use of this website, including but not limited to
                copying, data mining, scraping, or any attempt to gain
                unauthorized access to restricted areas or systems, is strictly
                prohibited.
              </li>
            </ul>
          </article>

          <article
            id="intellectual-property"
            className={getSectionClass(
              "intellectual-property",
              false,
              activeSection,
            )}
          >
            <h3 className="text-2xl font-semibold text-white/90 mb-4">
              Intellectual Property Rights
            </h3>
            <ul className="space-y-3 text-[#cbd5e1] leading-8 list-disc list-inside pl-5">
              <li>
                All Content on this website including but not limited to text,
                graphics, logos, icons, images, audio clips, layout, design,
                databases and software is the property of NextWaveAI or its
                content suppliers and is protected by applicable intellectual
                property laws of Nepal and international treaties.
              </li>
              <li>
                No part of the website may be reproduced, distributed, modified,
                transmitted, retransmitted, republished or used for commercial
                purposes without prior written consent of the Company.
              </li>
            </ul>
          </article>

          <article
            id="user-generated-content"
            className={getSectionClass(
              "user-generated-content",
              false,
              activeSection,
            )}
          >
            <h3 className="text-2xl font-semibold text-white/90 mb-4">
              User-Generated Content
            </h3>
            <ul className="space-y-3 text-[#cbd5e1] leading-8 list-disc list-inside pl-5">
              <li>
                If you submit, upload or post any content to this website (“User
                Content”), you grant the Company a non-exclusive, worldwide,
                royalty-free, irrevocable, sublicensable license to use,
                reproduce, modify, adapt, publish, translate, distribute and
                display such User Content in connection with the operation of
                the Website and the promotion of the Company’s Services.
              </li>
              <li>
                You represent and warrant that you own or have the necessary
                rights to submit User Content and that such content does not
                infringe upon the rights of any third party.
              </li>
            </ul>
          </article>

          <article
            id="third-party-links"
            className={getSectionClass(
              "third-party-links",
              false,
              activeSection,
            )}
          >
            <h3 className="text-2xl font-semibold text-white/90 mb-4">
              Third-Party Links and Resources
            </h3>
            <ul className="space-y-3 text-[#cbd5e1] leading-8 list-disc list-inside pl-5">
              <li>
                This website may contain links to third-party websites or
                resources. These links are provided for your convenience only.
                The Company has no control over the content of these third-party
                sites and accepts no responsibility for them or for any loss or
                damage that may arise from your use of them.
              </li>
              <li>
                The inclusion of any link does not imply endorsement by the
                Company. Use of any third-party website is at your own risk and
                subject to the terms and conditions of such websites.
              </li>
            </ul>
          </article>

          <article
            id="disclaimer"
            className={getSectionClass("disclaimer", false, activeSection)}
          >
            <h3 className="text-2xl font-semibold text-white/90 mb-4">
              Disclaimer of Warranties
            </h3>
            <div className="space-y-4 text-[#cbd5e1] leading-8">
              <p className="font-semibold text-[#f8fafc]">
                THIS WEBSITE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS
                WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED,
                INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                NONINFRINGEMENT, OR COURSE OF PERFORMANCE.
              </p>
              <p>
                The Company does not warrant that the website will function
                uninterrupted, secure or available at any particular time or
                location; that any errors or defects will be corrected; or that
                this website is free of viruses or other harmful components.
              </p>
            </div>
          </article>

          <article
            id="liability"
            className={getSectionClass("liability", false, activeSection)}
          >
            <h3 className="text-2xl font-semibold text-white/90 mb-4">
              Limitation of Liability
            </h3>
            <div className="space-y-4 text-[#cbd5e1] leading-8">
              <p className="font-semibold text-[#f8fafc]">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                SHALL COMPANY BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF
                PROFITS, REVENUE, DATA OR USE, ARISING OUT OF OR IN CONNECTION
                WITH THIS WEBSITE OR THESE TERMS.
              </p>
              <p>
                The total aggregate liability of the Company for any claims
                arising out of or relating to these Terms or the Website shall
                not exceed the amount paid by you to the Company during the
                twelve (12) months preceding the claim.
              </p>
            </div>
          </article>

          <article
            id="indemnification"
            className={getSectionClass("indemnification", false, activeSection)}
          >
            <h3 className="text-2xl font-semibold text-white/90 mb-4">
              Indemnification
            </h3>
            <p className="text-[#cbd5e1] leading-8">
              You agree to defend, indemnify and hold harmless NextWaveAI, its
              officers, directors, employees, agents, licensors, and suppliers
              from and against any claims, actions, demands, liabilities,
              losses, damages, judgments, settlements, costs and expenses
              (including legal and accounting fees) arising out of or in
              connection with your use of the Website or your violation of these
              Terms.
            </p>
          </article>

          <article
            id="modifications"
            className={getSectionClass("modifications", false, activeSection)}
          >
            <h3 className="text-2xl font-semibold text-white/90 mb-4">
              Modifications to Terms
            </h3>
            <div className="space-y-4 text-[#cbd5e1] leading-8">
              <p>
                The Company reserves the right to modify or replace these Terms
                at any time at its sole discretion. Material changes will be
                communicated by posting updated Terms on this Website with an
                updated effective date.
              </p>
              <p>
                Your continued use of this Website after any such changes
                constitutes your acceptance of the new Terms. You are advised to
                review these Terms periodically for any changes.
              </p>
            </div>
          </article>

          <article
            id="termination"
            className={getSectionClass("termination", false, activeSection)}
          >
            <h3 className="text-2xl font-semibold text-white/90 mb-4">
              Termination
            </h3>
            <div className="space-y-4 text-[#cbd5e1] leading-8">
              <p>
                The Company may terminate or suspend your access to this Website
                immediately, without prior notice or liability, for any reason
                whatsoever, including for any breach of these Terms.
              </p>
              <p>
                Upon termination your right to use this Website will immediately
                cease. All provisions of these Terms which by their nature
                should survive termination shall survive.
              </p>
            </div>
          </article>

          <article
            id="governing-law"
            className={getSectionClass("governing-law", false, activeSection)}
          >
            <h3 className="text-2xl font-semibold text-white/90 mb-4">
              Governing Law and Dispute Resolution
            </h3>
            <div className="space-y-4 text-[#cbd5e1] leading-8">
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of Nepal, including but not limited to the
                Contract Act, 2056 (2000), and the Electronic Transactions Act,
                2063 (2006), and any other applicable legislation with regard to
                contract law principles.
              </p>
              <p>
                Any dispute arising out of or in connection with these Terms
                that fails to be resolved through negotiation shall be referred
                to and finally resolved by arbitration administered under the
                Arbitration Act, 2055 (1999) of Nepal. The seat of arbitration
                shall be Kathmandu, Nepal.
              </p>
              <p>
                Nothing in this clause shall prevent either party from seeking
                equitable relief from the courts of competent jurisdiction in
                Kathmandu, Nepal.
              </p>
            </div>
          </article>

          <article
            id="severability"
            className={getSectionClass("severability", false, activeSection)}
          >
            <h3 className="text-2xl font-semibold text-white/90 mb-4">
              Severability
            </h3>
            <p className="text-[#cbd5e1] leading-8">
              If any provision of these Terms is held to be invalid, illegal or
              unenforceable, the remaining provisions shall continue in full
              force and effect. The invalid provision shall be modified to the
              minimum extent necessary to make it valid and enforceable.
            </p>
          </article>

          <article
            id="entire-agreement"
            className={getSectionClass(
              "entire-agreement",
              false,
              activeSection,
            )}
          >
            <h3 className="text-2xl font-semibold text-white/90 mb-4">
              Entire Agreement
            </h3>
            <p className="text-[#cbd5e1] leading-8">
              These Terms, together with the Privacy Policy and any other legal
              notices published by the Company on this Website, constitute the
              entire agreement between you and the Company concerning your use
              of the Website.
            </p>
          </article>

          <article
            id="contact"
            className={getSectionClass("contact", false, activeSection)}
          >
            <h3 className="text-2xl font-semibold text-white/90 mb-4">
              Contact Information
            </h3>
            <div className="space-y-3 text-[#cbd5e1] leading-8">
              <p>
                If you have any questions about these Terms, please contact us
                at NextWaveAI.
              </p>
              <p>Address: Registered Address, Kathmandu, Nepal</p>
              <p>Email: nextwaveai@gmail.com</p>
              <p>Website: https://nextwaveai.com</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

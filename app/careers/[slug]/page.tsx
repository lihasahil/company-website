import Link from "next/link";
import { notFound } from "next/navigation";
import { Briefcase, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  careersJobs,
  getCareerJobBySlug,
  getCareerJobSlugs,
} from "@/lib/careers";
export async function generateStaticParams() {
  return getCareerJobSlugs();
}

interface CareerPageProps {
  params: { slug: string } | Promise<{ slug: string }>;
}

export default async function CareerDetailPage({ params }: CareerPageProps) {
  const { slug } = await params;
  const job = getCareerJobBySlug(slug);
  if (!job) {
    notFound();
  }

  return (
    <main className="bg-[#020202] text-white min-h-screen">
      <Header />
      <section className="relative overflow-hidden px-6 pt-24 pb-20 md:px-12">
        <div
          className="pointer-events-none absolute"
          style={{
            width: 960,
            height: 960,
            left: "calc(50% - 480px)",
            top: -380,
            background: "#3C0071",
            opacity: 0.18,
            filter: "blur(260px)",
            borderRadius: "50%",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="space-y-4 text-center md:text-center mb-12">
            <h1
              className="text-4xl md:text-[56px] font-semibold tracking-tight leading-tight"
              style={{
                background:
                  "linear-gradient(0deg, #F2F2F2 21.43%, #8C8C8C 80.36%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {job.title}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 justify-center md:justify-center text-sm text-[#C2C2C8]">
              <span className="inline-flex items-center gap-2 px-4 py-2">
                <Briefcase className="h-4 w-4 text-[#ffffff]/50" />
                Experience Level:{" "}
                <strong className="text-[#ffffff]/50">{job.experience}</strong>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2">
                <Users className="h-4 w-4 text-[#ffffff]/50" />
                Vacancy:{" "}
                <strong className="text-[#ffffff]/50">{job.vacancy}</strong>
              </span>
            </div>
          </div>

          <div className="space-y-4 max-w-5xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white/80">
                Role Overview
              </h2>
              <p className="text-[#D1D1D8]/70 leading-relaxed text-base md:text-lg">
                {job.overview}
              </p>
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white/80">
                  Key Responsibilities
                </h3>
                <ul className="space-y-3 text-[#D4D4D8] list-disc list-inside leading-relaxed pl-4">
                  {job.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white/80">
                  Requirements
                </h3>
                <ul className="space-y-3 text-[#D4D4D8] list-disc list-inside leading-relaxed">
                  {job.requirements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white/80">
                  What You&apos;ll Get
                </h3>
                <ul className="space-y-3 text-[#D4D4D8] list-disc list-inside leading-relaxed">
                  {job.perks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6 text-[#D4D4D8]">
              <p className="text-base leading-relaxed">
                For inquiries, contact:{" "}
                <span className="text-white">{job.contact}</span>
              </p>
              <p className="text-base text-white/70 font-semibold">
                Join Next Wave AI and help us create the future of AI!
              </p>
              <Link
                href="mailto:nextwaveai@gmail.com"
                className="inline-flex items-center justify-center rounded-[16px] bg-[#0091FF] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#0077d6]"
                style={{
                  background:
                    "linear-gradient(180deg, #0091FF 0%, #005799 100%)",
                }}
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 pb-24 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6 max-w-5xl">
              <p className="text-4xl md:text-[64px] font-medium tracking-tighter leading-[0.9]">
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
              </p>
              <p className="text-[#C9C9D1] leading-relaxed text-base md:max-w-[420px]">
                Work with talented people who push each other to grow and create
                solution the shapes the future of Tech and Artificial
                intelligence.
              </p>
            </div>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center rounded-[16px] bg-[#0091FF] px-8 py-4 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(0,145,255,0.16)] transition hover:bg-[#0077d6]"
              style={{
                background: "linear-gradient(180deg, #0091FF 0%, #005799 100%)",
              }}
            >
              See all Job Openings
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

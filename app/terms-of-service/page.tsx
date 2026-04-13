"use client";

import Header from "@/components/Header";
import TermsOfServiceSection from "@/components/TermsOfServiceSection";
import Footer from "@/components/Footer";

export default function TermsOfServicePage() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <div className="pt-20 text-white">
        <TermsOfServiceSection />
      </div>
      <Footer />
    </main>
  );
}

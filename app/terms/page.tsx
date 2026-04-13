"use client";

import Header from "@/components/Header";
import TermsConditionsSection from "@/components/TermsConditionsSection";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <div className="pt-20">
        <TermsConditionsSection />
      </div>
      <Footer />
    </main>
  );
}

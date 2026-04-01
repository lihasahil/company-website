"use client";

import Header from "@/components/Header";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";

export default function CareersPage() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <div className="pt-20">
        <CareersSection />
      </div>
      <Footer />
    </main>
  );
}

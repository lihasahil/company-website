"use client";

import Header from "@/components/Header";
import PrivacyPolicySection from "@/components/PrivacyPolicySection";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <div className="pt-20">
        <PrivacyPolicySection />
      </div>
      <Footer />
    </main>
  );
}

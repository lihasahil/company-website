"use client";

import Header from "./Header";
import HeroAI from "./HeroAI";
import ServicesSection from "./ServicesSection";
import UnleashPage from "./UnleashPage";
import ServingClientPage from "./ServingClientPage";
import ContactUsPage from "./ContactusPage";
import ContactFormSection from "./ContactFormSection";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <main className="w-full bg-transparent">
      <Header />
      <HeroAI />
      <ServicesSection />
      <UnleashPage />
      <ServingClientPage />
      <ContactUsPage />
      <ContactFormSection />
    </main>
  );
};

export default LandingPage;

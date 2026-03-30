"use client";

import { useState } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}

      {!showIntro && <LandingPage />}
    </>
  );
}

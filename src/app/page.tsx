"use client";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Intro } from "./components/intro-content";
import { MiniFooter } from "./components/minifooter";
import { FAQsection } from "./components/FAQsection";
import { Join } from "./components/Join";
import { Demo } from "./components/demos";
import { useRef } from "react";
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

export default function Home() {
  // Create refs for each section
  const introRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const joinRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const miniFooterRef = useRef<HTMLDivElement>(null);

  // Use the custom hook to detect visibility
  const isIntroVisible = useIntersectionObserver(introRef, { threshold: 0.1 });
  const isDemoVisible = useIntersectionObserver(demoRef, { threshold: 0.1 });
  const isJoinVisible = useIntersectionObserver(joinRef, { threshold: 0.1 });
  const isFAQVisible = useIntersectionObserver(faqRef, { threshold: 0.1 });
  const isMiniFooterVisible = useIntersectionObserver(miniFooterRef, { threshold: 0.1 });

  return (
    <div className="flex flex-col">
      <Navbar />
      <main>
        {/* Intro Section */}
        <div
          ref={introRef}
          className={`transition-opacity duration-1000 ${isIntroVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <Intro />
        </div>

        {/* Demo Section */}
        <div
          ref={demoRef}
          className={`transition-opacity duration-1000 ${isDemoVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <Demo />
        </div>

        {/* Join Section */}
        <div
          ref={joinRef}
          className={`transition-opacity duration-1000 ${isJoinVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <Join />
        </div>

        {/* FAQ Section */}
        <div
          ref={faqRef}
          className={`transition-opacity duration-1000 ${isFAQVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <FAQsection />
        </div>

        {/* Mini Footer Section */}
        <div
          ref={miniFooterRef}
          className={`transition-opacity duration-1000 ${isMiniFooterVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <MiniFooter />
        </div>
      </main>
      <Footer />
    </div>
  );
}
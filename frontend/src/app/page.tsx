"use client";

import { useEffect } from "react";
import { useHeaderTheme } from "@/contexts/header-theme-context";

export default function AboutPage() {
  const { setTheme } = useHeaderTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-bottom"
        style={{ backgroundImage: "url('/sp-city-background.png')" }}
      >
        {/* Purple overlay with subtle gradient for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(55, 2, 140, 0.72) 0%, rgba(30, 1, 80, 0.82) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Content — vertically centered, accounting for fixed header */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 pt-16 md:pt-20 text-center">
          <style>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(24px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-fade-in-up-1 {
              opacity: 0;
              animation: fadeInUp 0.6s ease-out 0.1s forwards;
            }

            .animate-fade-in-up-2 {
              opacity: 0;
              animation: fadeInUp 0.6s ease-out 0.35s forwards;
            }

            .animate-fade-in-up-3 {
              opacity: 0;
              animation: fadeInUp 0.6s ease-out 0.55s forwards;
            }
          `}</style>

          {/* Title */}
          <h1
            className="animate-fade-in-up-1 font-heading text-white font-bold uppercase tracking-[0.3em] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight"
          >
            HINT LANGUAGE
          </h1>

          {/* Decorative diamond divider */}
          <div
            className="animate-fade-in-up-2 mt-6 mb-8 flex items-center justify-center gap-3"
            aria-hidden="true"
          >
            <div className="h-px w-16 bg-white/20" />
            <div className="h-1.5 w-1.5 rotate-45 bg-white/40" />
            <div className="h-px w-16 bg-white/20" />
          </div>

          {/* Body paragraphs */}
          <div className="animate-fade-in-up-3 max-w-2xl mx-auto flex flex-col gap-5">
            <p className="font-body text-white/90 text-lg md:text-xl leading-relaxed">
              Our team are all well established specialists in their particular fields.
            </p>
            <p className="font-body text-white/90 text-lg md:text-xl leading-relaxed">
              Hint language services include translation, proofreading &amp; editing,
              copywriting, dubbing &amp; voice acting, and personal coaching.
            </p>
            <p className="font-body text-white/90 text-lg md:text-xl leading-relaxed">
              We are experienced with keeping to tight deadlines and working 24/7
              to deliver bespoke language solutions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";

/**
 * Bio section — Server Component
 *
 * Design: "Diagonal Stage" — a full-bleed two-tone layout. The left purple
 * panel uses a diagonal clip-path that advances slightly over the white
 * panel, creating a dynamic transition rather than a hard vertical split.
 *
 * Text column structure (top to bottom):
 * 1. Eyebrow label
 * 2. H2 heading ("Sua professora") + subtitle
 * 3. Decorative rule
 * 4. Editorial quote block (provocative phrase, left-border accent)
 * 5. Mini credential cards row (3 stats)
 * 6. Descriptive paragraphs
 *
 * Animations: staggered fadeInUp via inline <style> keyframes. Each content
 * element has a progressive delay (0.1s → 0.6s) to guide the eye down the
 * column as the section enters the viewport.
 *
 * Accessibility:
 * - Semantic heading hierarchy maintained
 * - aria-label on the <section>
 * - Decorative dividers and backgrounds are aria-hidden
 * - Credential cards use <dl> (term/description) for screen readers
 */
export function Bio() {
  return (
    <section aria-label="Quem é Larissa Rovaron">

      {/* ── Keyframe animations ── */}
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
        .bio-animate {
          opacity: 0;
          animation: fadeInUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .bio-delay-1 { animation-delay: 0.1s; }
        .bio-delay-2 { animation-delay: 0.2s; }
        .bio-delay-3 { animation-delay: 0.3s; }
        .bio-delay-4 { animation-delay: 0.4s; }
        .bio-delay-5 { animation-delay: 0.5s; }
        .bio-delay-6 { animation-delay: 0.6s; }
      `}</style>

      {/* ── Split stage: photo | intro ── */}
      <div className="relative overflow-hidden">

        {/* Full-bleed split background: left purple (diagonal), right white */}
        <div aria-hidden="true" className="absolute inset-0 bg-white">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #3a0275 0%, #5503af 40%, #4a02a0 100%)",
              clipPath: "polygon(0 0, 45% 0, 32% 100%, 0 100%)",
            }}
          />
        </div>

        {/* Dot-grid texture — covers the whole split area */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row md:items-stretch md:gap-0">

            {/* ── Left: Photo stage ── */}
            <div className="relative flex items-end justify-end overflow-hidden md:w-[40%] md:self-stretch">
              <Image
                src="/larissa-frontal-2.png"
                alt="Larissa Rovaron — professora de inglês"
                width={625}
                height={800}
                priority
                sizes="(max-width: 768px) 60vw, 380px"
                className="relative z-10 h-full w-auto translate-x-8 object-contain object-bottom md:translate-x-12"
              />
            </div>

            {/* ── Right: Intro text ── */}
            <div className="relative flex flex-col justify-center px-5 py-12 md:w-[60%] md:bg-transparent md:py-24 md:pl-16 lg:pl-20">

              {/* Eyebrow */}
              <p
                className="bio-animate bio-delay-1 mb-5 self-start rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 md:border-hint-purple/20 md:bg-hint-purple/5 md:text-hint-purple"
              >
                QUEM ENSINA
              </p>

              {/* H2 — short editorial heading */}
              <h2
                className="bio-animate bio-delay-2 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl md:text-foreground"
              >
                Sua professora
              </h2>

              {/* Subtitle — full descriptive text, lighter weight */}
              <p
                className="bio-animate bio-delay-3 mt-3 max-w-lg text-lg font-normal leading-snug text-white/80 md:text-xl md:text-muted-foreground"
              >
                Conheça Larissa Rovaron — a professora que vai transformar o seu
                inglês de verdade
              </p>

              {/* Decorative rule */}
              <div
                aria-hidden="true"
                className="my-8 flex items-center gap-3 md:my-10"
              >
                <div className="h-px w-16 bg-white/20 md:bg-hint-purple/20" />
                <div className="h-1.5 w-1.5 rotate-45 bg-white/40 md:bg-hint-purple/40" />
                <div className="h-px w-16 bg-white/20 md:bg-hint-purple/20" />
              </div>

              {/* Editorial quote block */}
              <blockquote
                className="bio-animate bio-delay-4 rounded-r-xl border-l-4 border-hint-purple bg-white/10 px-5 py-4 md:bg-hint-purple/5"
              >
                <p className="text-xl font-semibold leading-snug text-white md:text-2xl md:text-foreground">
                  Larissa Rovaron não ensina inglês.
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/90 md:text-lg md:text-foreground">
                  Ela forma pessoas confiantes para se comunicar em inglês — com
                  pronúncia clara, segurança e naturalidade real.
                </p>
              </blockquote>

              {/* Descriptive paragraphs */}
              <div className="bio-animate bio-delay-5 mt-8 flex flex-col gap-4">
                <p className="text-base leading-relaxed text-white/75 md:text-lg md:text-muted-foreground">
                  Brasileira, 45 anos, fala inglês desde os 9 anos de idade,
                  quando começou a aprender em casa com a própria mãe, também
                  professora de inglês.
                </p>
                <p className="text-base leading-relaxed text-white/75 md:text-lg md:text-muted-foreground">
                  Aos 16 anos, a fluência deixou de ser apenas estudo e virou
                  rotina diária ao conviver com um americano — também English
                  teacher para brasileiros.
                </p>
                <p className="text-base leading-relaxed text-white/75 md:text-lg md:text-muted-foreground">
                  Falar inglês em casa, no trabalho e no dia a dia por décadas faz
                  dela praticamente uma nativa — com algo que poucos cursos
                  oferecem: inglês real, funcional e aplicável.
                </p>
              </div>

              {/* Mini credential cards */}
              <dl
                aria-label="Credenciais de Larissa Rovaron"
                className="bio-animate bio-delay-6 mt-8 grid grid-cols-3 gap-3"
              >
                {[
                  { stat: "13 anos", label: "como English Teacher" },
                  { stat: "Desde os 9", label: "em contato com inglês" },
                  { stat: "30+ anos", label: "convivendo com o idioma" },
                ].map(({ stat, label }) => (
                  <div
                    key={stat}
                    className="flex flex-col gap-1 rounded-xl border border-white/15 bg-white/10 px-3 py-3 md:border-hint-purple/15 md:bg-hint-purple/5"
                  >
                    <dt className="font-heading text-2xl font-bold leading-none text-white md:text-hint-purple">
                      {stat}
                    </dt>
                    <dd className="text-xs leading-tight text-white/65 md:text-hint-gray">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

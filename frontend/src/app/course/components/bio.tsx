import Image from "next/image";

/**
 * Bio section — Server Component
 *
 * Design: "Split Stage" — a full-bleed two-tone layout that leverages
 * the photo's dark background as a feature, not a bug. The left panel
 * is a deep purple stage where the photo's dark edges dissolve naturally
 * into the background. The right panel is white with large editorial
 * typography. Below the split, three credential cards sit in a white
 * grid section.
 *
 * The split creates a dramatic visual break from the full-viewport Hero
 * and establishes Larissa's presence with editorial authority.
 */
export function Bio() {
  return (
    <section aria-label="Quem é Larissa Rovaron">

      {/* ── PART 1: Split stage — photo | intro ── */}
      <div className="relative overflow-hidden">

        {/* Full-bleed split background: left purple, right white */}
        <div aria-hidden="true" className="absolute inset-0">
          <div className="flex h-full">
            <div
              className="w-full md:w-[45%]"
              style={{
                background: "linear-gradient(135deg, #3a0275 0%, #5503af 40%, #4a02a0 100%)",
              }}
            />
            <div className="hidden md:block md:w-[55%] bg-white" />
          </div>
        </div>

        {/* Dot-grid texture on the purple side */}
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
            <div className="relative flex items-end justify-center md:w-[45%] md:-ml-8 lg:-ml-12">

              {/* Photo — anchored to the bottom, ~70% of wrapper height */}
              <div className="relative w-[70%] md:w-[80%] lg:w-[75%]">
                <Image
                  src="/larissa-frontal.png"
                  alt="Larissa Rovaron — professora de inglês"
                  width={440}
                  height={660}
                  priority
                  sizes="(max-width: 768px) 60vw, 380px"
                  className="relative z-10 w-full object-contain object-bottom"
                />

                {/* Floating credential badge */}
                <div
                  className="absolute bottom-12 right-0 z-20 rounded-xl bg-white px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.15)] md:-right-6"
                >
                  <p className="font-heading text-xs font-bold uppercase tracking-widest text-hint-purple">
                    English Teacher
                  </p>
                  <p className="font-heading text-3xl font-bold leading-none text-hint-purple">
                    13 anos
                  </p>
                </div>
              </div>
            </div>

            {/* ── Right: Intro text ── */}
            <div className="relative flex flex-col justify-center bg-white px-2 py-16 md:w-[55%] md:py-24 md:pl-12 lg:pl-16">

              {/* Eyebrow */}
              <p className="mb-6 self-start rounded-full border border-hint-purple/20 bg-hint-purple/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-hint-purple">
                Conheça a professora
              </p>

              {/* Main heading */}
              <h2 className="font-heading text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
                Conheça Larissa Rovaron — a professora que vai transformar o seu
                inglês de verdade
              </h2>

              {/* Decorative rule */}
              <div
                aria-hidden="true"
                className="my-8 flex items-center gap-3 md:my-10"
              >
                <div className="h-px w-16 bg-hint-purple/20" />
                <div className="h-1.5 w-1.5 rotate-45 bg-hint-purple/40" />
                <div className="h-px w-16 bg-hint-purple/20" />
              </div>

              {/* Intro paragraphs */}
              <div className="flex flex-col gap-5">
                <p className="text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
                  Larissa Rovaron não ensina inglês.
                </p>
                <p className="text-lg leading-relaxed text-foreground md:text-xl">
                  Ela forma pessoas confiantes para se comunicar em inglês — com
                  pronúncia clara, segurança e naturalidade real.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Brasileira, 45 anos, fala inglês desde os 9 anos de idade,
                  quando começou a aprender em casa com a própria mãe, também
                  professora de inglês.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Aos 16 anos, a fluência deixou de ser apenas estudo e virou
                  rotina diária ao conviver com um americano — também English
                  teacher para brasileiros.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Falar inglês em casa, no trabalho e no dia a dia por décadas faz
                  dela praticamente uma nativa — com algo que poucos cursos
                  oferecem: inglês real, funcional e aplicável.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}


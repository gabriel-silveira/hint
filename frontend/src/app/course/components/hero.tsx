/**
 * Hero — first section of the course landing page.
 *
 * Server Component: no interactivity, no "use client".
 *
 * Design: full-viewport dark-purple editorial stage. The H1 is the
 * typographic centrepiece — scaled to display/billboard proportions
 * (text-5xl mobile → text-8xl desktop) so it commands the entire screen.
 * A radial violet bloom behind the CTA zone draws the eye downward.
 * The green CTA button is the single saturated accent.
 *
 * Layout: min-h-screen with flex centering ensures the hero always fills
 * the browser viewport regardless of screen size, with content vertically
 * centred and generous breathing room on all sides.
 *
 * Accessibility:
 * - Semantic heading hierarchy: h1 → h2 → p
 * - aria-label on the <section> for landmark navigation
 * - Link has a descriptive text label; decorative dividers are aria-hidden
 */

export function Hero() {
  return (
    <section
      aria-label="Apresentação do curso"
      className="relative flex min-h-screen items-center overflow-hidden bg-hint-purple"
    >
      {/*
       * Layered background: two radial gradients.
       * — Top-left: deep indigo shadow to anchor the darkness.
       * — Center-bottom: violet bloom warming the CTA zone.
       */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(139,0,255,0.28) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 40% at 15% 0%, rgba(20,0,60,0.55) 0%, transparent 65%)",
          ].join(", "),
        }}
      />

      {/*
       * Fine dot-grid texture at 3% opacity — prevents the solid purple
       * from looking flat on high-DPI displays.
       */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content — vertically centred via parent flex */}
      <div className="container relative z-10 mx-auto py-28 text-center md:py-32">

        {/* Eyebrow label */}
        <p
          aria-hidden="true"
          className="mb-8 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.18em] text-white/70 md:mb-10 md:text-base"
        >
          Método Larissa Rovaron
        </p>

        {/* H1 — billboard-scale headline */}
        <h1 className="font-heading mx-auto max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Destrave seu inglês{" "}
          <span className="relative inline-block whitespace-nowrap">
            de uma vez
            {/*
             * Green underline accent — the only hint-green in the heading
             * area, linking the headline promise to the CTA below.
             */}
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-hint-green opacity-80 md:-bottom-2 md:h-1.5"
            />
          </span>{" "}
          por todas.
        </h1>

        {/* Thin decorative rule */}
        <hr
          aria-hidden="true"
          className="mx-auto mt-10 mb-10 w-16 border-0 border-t border-white/20 md:mt-12 md:mb-12"
        />

        {/* H2 — subheadline */}
        <h2 className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/85 sm:text-2xl md:text-3xl">
          Fale com pronúncia clara, confiança real e naturalidade —&nbsp;mesmo
          que você já tenha tentado antes e travado.
        </h2>

        {/* Supporting paragraph */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:mt-8 md:text-xl">
          Aprenda com um método estruturado e acompanhamento humano dentro de
          um{" "}
          <strong className="font-medium text-white/80">
            Grupo VIP no WhatsApp
          </strong>
          .
        </p>

        {/* CTA area */}
        <div className="mt-12 flex flex-col items-center gap-5 md:mt-14">
          <div className="relative w-full md:inline-block md:w-auto">
            <div
              aria-hidden="true"
              className="absolute inset-0 animate-pulse rounded-xl bg-hint-green opacity-40 blur-xl"
            />
            <a
              href="#"
              className="
                relative z-10
                block w-full
                rounded-xl
                bg-hint-green
                py-5
                text-center text-lg font-semibold tracking-wide text-white
                shadow-[0_6px_32px_rgba(0,200,83,0.45)]
                transition-all duration-200 ease-out
                hover:scale-[1.03] hover:shadow-[0_8px_48px_rgba(0,200,83,0.65)]
                active:scale-[0.98]
                md:inline-block md:w-auto md:px-12 md:py-6 md:text-xl
              "
            >
              Garanta sua vaga no Grupo VIP
            </a>
          </div>

          {/* Trust micro-copy */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium tracking-wide text-white/70">
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1">
              Acesso imediato
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1">
              Garantia de 7 dias
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1">
              Cancele quando quiser
            </span>
          </div>
        </div>

        {/* VSL Video placeholder */}
        <div className="mx-auto mt-14 w-full max-w-3xl md:mt-16">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-sm">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                <svg
                  aria-hidden="true"
                  className="ml-1 h-7 w-7 text-white/70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-white/40">
                Vídeo em breve
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Hero — first section of the course landing page.
 *
 * Server Component: no interactivity, no "use client".
 *
 * Design: dark-purple editorial stage with a radial light bloom behind the CTA
 * zone. Typographic hierarchy is the primary visual tool — the H1 commands the
 * full viewport width at display scale while the subheadline and supporting
 * copy recede gracefully via opacity. The green CTA button is the single
 * saturated accent in an otherwise monochrome palette, making it impossible
 * to miss without shouting.
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
      className="relative overflow-hidden bg-hint-purple pt-28 pb-20 md:pt-32 md:pb-28"
    >
      {/*
       * Layered background: two radial gradients stacked via multiple
       * background-image values.
       * — Top-left: a deep indigo shadow to anchor the darkness.
       * — Center-bottom: a violet bloom that gives the CTA zone warmth and
       *   draws the eye downward toward the button.
       * Both are purely decorative.
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
       * Fine noise-like grid overlay: a 1×1 px transparent-to-white dot
       * pattern at 3% opacity adds micro-texture that prevents the solid
       * purple from looking flat on high-DPI displays.
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

      {/* Content */}
      <div className="container relative z-10 mx-auto text-center">

        {/* Eyebrow label */}
        <p
          aria-hidden="true"
          className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/70"
        >
          Método Larissa Rovaron
        </p>

        {/* H1 — primary headline */}
        <h1 className="font-heading mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
          Destrave seu inglês{" "}
          <span className="relative inline-block whitespace-nowrap">
            de uma vez
            {/*
             * Decorative underline accent reinforces the "unlock / break free"
             * metaphor in the headline. It is a thin green rule — the only
             * appearance of hint-green in the heading area — that subliminally
             * links the headline promise to the CTA button below.
             */}
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-hint-green opacity-80"
            />
          </span>{" "}
          por todas.
        </h1>

        {/* Thin decorative rule — separates headline from subheadline */}
        <hr
          aria-hidden="true"
          className="mx-auto mt-8 mb-8 w-12 border-0 border-t border-white/20"
        />

        {/* H2 — subheadline */}
        <h2 className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-white/85 md:text-xl lg:text-2xl">
          Fale com pronúncia clara, confiança real e naturalidade —&nbsp;mesmo
          que você já tenha tentado antes e travado.
        </h2>

        {/* Supporting paragraph */}
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
          Aprenda com um método estruturado e acompanhamento humano dentro de
          um{" "}
          <strong className="font-medium text-white/80">
            Grupo VIP no WhatsApp
          </strong>
          .
        </p>

        {/* CTA area */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="#"
            className="
              inline-block
              rounded-xl
              bg-hint-green
              px-8 py-4
              text-base font-semibold tracking-wide text-white
              shadow-[0_4px_24px_rgba(0,200,83,0.35)]
              transition-all duration-200 ease-out
              hover:scale-[1.03] hover:shadow-[0_6px_32px_rgba(0,200,83,0.50)]
              active:scale-[0.98]
              md:px-10 md:py-5 md:text-lg
            "
          >
            Garanta sua vaga no Grupo VIP
          </a>

          {/* Trust micro-copy below the CTA */}
          <p className="text-xs text-white/40">
            Acesso imediato · Garantia de 7 dias · Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
}

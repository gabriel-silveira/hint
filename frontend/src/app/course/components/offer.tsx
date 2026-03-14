import { CheckCircle, ShieldCheck, Coins } from "@phosphor-icons/react/dist/ssr";

/**
 * Offer + Guarantee — final section of the course landing page.
 *
 * Server Component: no interactivity, no "use client".
 *
 * Design: deep hint-purple editorial backdrop — same colour family as Hero and
 * Proof — but treated with a distinct diagonal-stripe texture (45° hairlines at
 * ~2.5% opacity), the third unique texture across all purple sections. The
 * radial bloom here rises from the bottom-center, funneling attention downward
 * toward the price monument and the CTA — a deliberate inversion of the Hero's
 * downward bloom, which drew eyes into the page; here the bloom pushes upward
 * toward the decision point.
 *
 * Structural rhythm (top → bottom):
 *   1. Decision trigger — two-paragraph contrast framing
 *   2. Benefits list — 5 checkmark items in a frosted-glass panel
 *   3. Price comparison — three crossed-out expensive alternatives
 *   4. Investment reveal — monument-scale price (the visual climax)
 *   5. Guarantee block — visually distinct frosted island with ShieldCheck
 *   6. Final CTA — green glow button, larger than Hero CTA
 *
 * The price "R$ 39,90" is the typographic apex of the entire page.
 * At text-8xl on large screens it is physically the largest text element
 * anywhere in the landing page — a deliberate hierarchy signal that the
 * price is not a detail but the revelation.
 *
 * Accessibility:
 * - Semantic heading hierarchy: h2 → h3 within guarantee block
 * - aria-label on the <section> for landmark navigation
 * - role="list" on the benefits <ul>
 * - Decorative layers are aria-hidden
 * - CTA <a> has a descriptive label
 */

const BENEFITS = [
  "Acesso completo a todas as videoaulas do Método",
  "Exercícios de avaliação em todas as aulas",
  "Participação no Grupo VIP de Mentoria no WhatsApp",
  "Suporte direto dos instrutores",
  "Método estruturado com foco em pronúncia e confiança",
] as const;

export function Offer() {
  return (
    <section
      aria-label="Oferta"
      className="relative overflow-hidden bg-hint-purple py-20 md:py-28"
    >

      {/* ── Background atmosphere ────────────────────────────────────────── */}

      {/*
       * Bottom-center radial bloom: rises up through the section, warming
       * the price area and CTA. Distinct from Hero (top-center), Proof
       * (two-corner dual-tone) — every purple section gets its own
       * atmospheric signature.
       */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 90% 65% at 50% 115%, rgba(139,0,255,0.36) 0%, transparent 70%)",
            "radial-gradient(ellipse 50% 35% at 100% 0%, rgba(10,0,50,0.45) 0%, transparent 60%)",
            "radial-gradient(ellipse 45% 30% at 0% 100%, rgba(20,0,80,0.35) 0%, transparent 55%)",
          ].join(", "),
        }}
      />

      {/*
       * Diagonal-stripe texture — 45° hairlines.
       * Hero used dot-grid; Proof used crosshatch; this section uses
       * diagonal lines, completing a three-texture vocabulary across all
       * purple sections. The same white-on-purple family, different mood:
       * diagonal suggests forward momentum, direction, decision.
       */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.025,
          backgroundImage:
            "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 28px)",
        }}
      />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="container relative z-10 mx-auto max-w-3xl">

        {/* ── 1. Decision trigger ──────────────────────────────────────── */}
        <div className="mb-14 text-center md:mb-16">

          {/* Eyebrow */}
          <p
            aria-hidden="true"
            className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/70"
          >
            Sua decisão
          </p>

          <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
            Agora a decisão está nas suas mãos.
          </h2>

          {/*
           * Decorative rule — the centred diamond motif from Method/Testimonials,
           * adapted for white-on-purple context.
           */}
          <div
            aria-hidden="true"
            className="my-7 flex items-center justify-center gap-3"
          >
            <div className="h-px w-16 bg-white/20" />
            <div className="h-1.5 w-1.5 rotate-45 bg-white/40" />
            <div className="h-px w-16 bg-white/20" />
          </div>

          {/* Contrast framing — the two-path choice */}
          <div className="mx-auto flex max-w-xl flex-col gap-4">
            <p className="text-lg leading-relaxed text-white/70 md:text-xl">
              Você pode continuar tentando sozinho e acumulando frustrações.
            </p>
            <p className="text-lg font-medium leading-relaxed text-white/90 md:text-xl">
              Ou pode entrar para um método estruturado, com suporte real e
              acompanhamento humano.
            </p>
          </div>
        </div>

        {/* ── 2. Benefits block ────────────────────────────────────────── */}
        <div className="mb-14 md:mb-16">
          <h2 className="font-heading mb-8 text-center text-3xl font-bold leading-tight text-white md:text-4xl">
            O que você recebe ao entrar hoje:
          </h2>

          {/*
           * Frosted benefits panel — bg-white/8 with ring-1 ring-white/15.
           * Follows the Proof section's "frosted emphasis panels" pattern
           * but expanded to a full block. Each benefit item echoes the
           * Method card's list style, adapted for white-on-purple.
           */}
          <div className="rounded-2xl bg-white/8 p-6 ring-1 ring-white/15 md:p-8">
            <ul role="list" className="flex flex-col gap-5">
              {BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-4"
                >
                  <CheckCircle
                    aria-hidden="true"
                    weight="duotone"
                    size={24}
                    className="mt-0.5 shrink-0 text-hint-green"
                    style={{ filter: "drop-shadow(0 0 6px rgba(0,200,83,0.50))" }}
                  />
                  <span className="text-base leading-relaxed text-white/90 md:text-lg">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── 3. Price comparison ───────────────────────────────────────── */}
        <div className="mb-14 md:mb-16">
          <h2 className="font-heading mb-8 text-center text-3xl font-bold leading-tight text-white md:text-4xl">
            Quanto custaria aprender assim em outro formato?
          </h2>

          {/*
           * Three comparison lines — each with a Coins icon and
           * line-through on the price amounts to signal "expensive
           * alternatives we're NOT charging".
           */}
          <div className="flex flex-col gap-5">

            <div className="flex items-start gap-4">
              <div
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10"
              >
                <Coins
                  weight="duotone"
                  size={20}
                  className="text-white/50"
                  aria-hidden="true"
                />
              </div>
              <p className="text-base leading-relaxed text-white/65 md:text-lg">
                Um curso presencial pode variar entre{" "}
                <span className="font-semibold text-white/50 line-through decoration-white/40">
                  R$ 600
                </span>{" "}
                e{" "}
                <span className="font-semibold text-white/50 line-through decoration-white/40">
                  R$ 1.200
                </span>{" "}
                por mês.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="h-px bg-white/10"
            />

            <div className="flex items-start gap-4">
              <div
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10"
              >
                <Coins
                  weight="duotone"
                  size={20}
                  className="text-white/50"
                  aria-hidden="true"
                />
              </div>
              <p className="text-base leading-relaxed text-white/65 md:text-lg">
                Um professor particular pode custar entre{" "}
                <span className="font-semibold text-white/50 line-through decoration-white/40">
                  R$ 1.200
                </span>{" "}
                e{" "}
                <span className="font-semibold text-white/50 line-through decoration-white/40">
                  R$ 2.400
                </span>{" "}
                por mês.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="h-px bg-white/10"
            />

            {/* Closing note on the comparisons */}
            <p className="text-sm italic leading-relaxed text-white/70 md:text-base">
              E mesmo assim, você dificilmente teria acompanhamento constante.
            </p>

          </div>
        </div>

        {/* ── 4. Investment reveal ─────────────────────────────────────── */}
        <div className="mb-14 text-center md:mb-16">
          <h2 className="font-heading mb-6 text-3xl font-bold leading-tight text-white md:text-4xl">
            Seu investimento hoje
          </h2>

          <p className="mb-8 text-base leading-relaxed text-white/70 md:text-lg">
            Por tudo isso, o acesso ao treinamento completo sai por apenas:
          </p>

          {/*
           * Monument price — the typographic apex of the entire landing page.
           * text-8xl at lg+ makes this the largest text anywhere on the page.
           * The green glow shadow links the price visually to the green CTA
           * below — price and action share the same saturated accent energy.
           */}
          <p
            className="font-heading text-6xl font-bold leading-none text-white md:text-7xl lg:text-8xl"
            style={{
              textShadow: "0 0 60px rgba(255,255,255,0.15), 0 0 120px rgba(139,0,255,0.40)",
            }}
          >
            R$ 39,90
          </p>

          {/*
           * Thin green accent rule below the price — the single green element
           * in this cluster. Mirrors the Proof section's stat green rules but
           * centred and wider, befitting the price monument scale.
           */}
          <div
            aria-hidden="true"
            className="mx-auto mt-5 mb-8 h-0.5 w-24 rounded-full bg-hint-green"
            style={{ boxShadow: "0 0 16px rgba(0,200,83,0.60)" }}
          />

          {/* Clarifying bullets */}
          <ul
            role="list"
            className="flex flex-col items-center gap-2"
          >
            {[
              "Pagamento à vista ou parcelado.",
              "Sem mensalidade recorrente.",
              "Sem taxas escondidas.",
              "Sem surpresas.",
            ].map((line) => (
              <li
                key={line}
                className="text-base text-white/65 md:text-lg"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>

        {/* ── 5. Guarantee block ───────────────────────────────────────── */}
        {/*
         * Visually distinct frosted island — more prominent ring (ring-2)
         * and a slightly lighter bg (bg-white/12) versus the benefits panel
         * (bg-white/8 ring-1) to make it stand out as a "sub-section".
         * The ShieldCheck icon is oversized at 40px and rendered with a
         * hint-green tint and glow — the only large icon in the Offer
         * section, making it unmissable.
         */}
        <div className="mb-14 rounded-2xl bg-white/12 p-8 ring-2 ring-white/20 md:mb-16 md:p-10">

          {/* Guarantee header */}
          <div className="mb-6 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
            <div
              aria-hidden="true"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-hint-green/20 ring-1 ring-hint-green/40"
              style={{ boxShadow: "0 0 24px rgba(0,200,83,0.25)" }}
            >
              <ShieldCheck
                weight="duotone"
                size={32}
                className="text-hint-green"
                aria-hidden="true"
                style={{ filter: "drop-shadow(0 0 8px rgba(0,200,83,0.60))" }}
              />
            </div>
            <h3 className="font-heading text-2xl font-bold leading-tight text-white md:text-3xl">
              Garantia Incondicional de 7 Dias
            </h3>
          </div>

          {/*
           * Left-rule accent inside the guarantee block — the same motif
           * used in Bio cards, Method cards, Reframing cards, Proof's
           * closing emphasis, and Testimonials' closing editorial line.
           * Consistent visual grammar applied inside a different container.
           */}
          <div className="flex gap-5">
            <div
              aria-hidden="true"
              className="w-0.5 shrink-0 rounded-full bg-hint-green/60"
            />
            <div className="flex flex-col gap-4">
              <p className="leading-relaxed text-white/80">
                Entre, assista às aulas, participe do grupo e teste o método.
              </p>
              <p className="leading-relaxed text-white/80">
                Se por qualquer motivo sentir que não é para você, basta
                solicitar o reembolso dentro de 7 dias.
              </p>
              <p className="text-base font-medium text-white/70">
                Sem perguntas. Sem burocracia.
              </p>
              {/*
               * "O risco é zero." — the single most emphatic line in the
               * guarantee block. font-heading bold at 2xl mirrors the
               * Proof section's closing "É resultado." treatment.
               */}
              <p className="font-heading text-2xl font-bold text-white md:text-3xl">
                O risco é zero.
              </p>
            </div>
          </div>

        </div>

        {/* ── 6. Final CTA ─────────────────────────────────────────────── */}
        <div className="text-center">
          <h2 className="font-heading mb-8 text-3xl font-bold leading-tight text-white md:text-4xl">
            Está pronto para destravar seu inglês?
          </h2>

          {/*
           * CTA button — inherits Hero's green glow pattern but scaled up:
           * larger padding (px-10 py-5 → px-12 py-6), larger text (text-xl),
           * and a more intense glow shadow (opacity 0.50 → 0.60 at peak).
           * This is the biggest CTA on the page — the final persuasion.
           */}
          <a
            href="#"
            className="
              inline-block
              rounded-xl
              bg-hint-green
              px-10 py-5
              text-lg font-semibold tracking-wide text-white
              shadow-[0_6px_32px_rgba(0,200,83,0.45)]
              transition-all duration-200 ease-out
              hover:scale-[1.03] hover:shadow-[0_8px_48px_rgba(0,200,83,0.65)]
              active:scale-[0.98]
              md:px-12 md:py-6 md:text-xl
            "
          >
            Garanta sua vaga no Grupo VIP
          </a>

          {/* Trust micro-copy — mirrors Hero's sub-CTA line */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs font-medium tracking-wide text-white/70">
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1">
              Acesso imediato
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1">
              Garantia de 7 dias
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1">
              Pagamento seguro
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

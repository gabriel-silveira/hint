import {
  PlayCircle,
  ClipboardText,
  WhatsappLogo,
  CaretRight,
} from "@phosphor-icons/react/dist/ssr";

/**
 * Method — third section of the course landing page.
 *
 * Server Component: no interactivity, no "use client".
 *
 * Design: white background (alternates from Reframing's #F7F7FA).
 * Three method-pillar cards in a CSS grid:
 *  — Cards 1 & 2 follow the established Bio card language:
 *    white, rounded-xl, border, shadow-sm, purple icon container,
 *    purple left-accent rule on content, hover:shadow-md.
 *  — Card 3 (Grupo VIP) is the key differentiator and breaks the
 *    pattern deliberately: deep hint-purple background (matching
 *    the Hero), white text, green bullet accents, a "Diferencial"
 *    eyebrow badge, and an elevated shadow with purple glow.
 *    This makes it unmissable without breaking section cohesion.
 *
 * Emphasis lines use an italic callout block with a purple
 * left-rule accent — a motif borrowed from the Bio section's
 * CredentialCard inner rule.
 *
 * Accessibility:
 * - Semantic heading hierarchy: h2 → h3 (per card)
 * - aria-label on the <section> for landmark navigation
 * - role="list" on all bullet lists
 * - Decorative dividers and icon wrappers are aria-hidden
 */
export function Method() {
  return (
    <section
      aria-label="O Método Larissa Rovaron"
      className="bg-white py-20 md:py-28"
    >
      <div className="container">

        {/* ── Section header ── */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-18">

          {/* Eyebrow */}
          <p className="mb-5 inline-block rounded-full border border-hint-purple/20 bg-hint-purple/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-hint-purple">
            O Método
          </p>

          {/* H2 */}
          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Um sistema completo para destravar seu inglês com direção, prática e
            suporte real.
          </h2>

          {/*
           * Decorative rule: a thin line with a centred diamond node.
           * Purely visual — separates the heading from the intro copy.
           */}
          <div
            aria-hidden="true"
            className="my-7 flex items-center justify-center gap-3"
          >
            <div className="h-px w-16 bg-hint-purple/20" />
            <div className="h-1.5 w-1.5 rotate-45 bg-hint-purple/40" />
            <div className="h-px w-16 bg-hint-purple/20" />
          </div>

          {/* Intro paragraph */}
          <p className="text-lg leading-relaxed text-muted-foreground">
            O Método Larissa Rovaron une clareza didática, prática guiada e
            acompanhamento próximo —{" "}
            <strong className="font-medium text-foreground">
              três pilares que quase nenhum curso online oferece ao mesmo tempo.
            </strong>
          </p>
        </div>

        {/* ── Three-column card grid ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7 lg:gap-8">

          {/* ── Card 1: Videoaulas Estratégicas ── */}
          <div className="flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">

            {/* Card header */}
            <div className="mb-5 flex items-center gap-3">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-hint-purple/10 text-hint-purple"
              >
                <PlayCircle weight="duotone" size={30} />
              </div>
              <h3 className="font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                Videoaulas Estratégicas
              </h3>
            </div>

            {/* Left accent rule + content */}
            <div className="flex flex-1 gap-4">
              <div
                aria-hidden="true"
                className="w-0.5 shrink-0 rounded-full bg-hint-purple/20"
              />
              <div className="flex flex-1 flex-col gap-4">

                <p className="leading-relaxed text-muted-foreground">
                  Videoaulas pré-gravadas organizadas em sequência lógica e
                  progressiva.
                </p>

                <div>
                  <p className="mb-3 font-medium text-foreground">
                    Cada aula é:
                  </p>
                  <ul className="flex flex-col gap-2" role="list">
                    {[
                      "Direta ao ponto",
                      "Focada em aplicação real",
                      "Estruturada para melhorar sua pronúncia e segurança",
                      "Acompanhada de exercícios de avaliação",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <CaretRight
                          aria-hidden="true"
                          weight="bold"
                          size={16}
                          className="mt-0.5 shrink-0 text-hint-purple"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Emphasis callout */}
                <div className="flex gap-3 rounded-lg bg-hint-purple/5 p-3">
                  <div
                    aria-hidden="true"
                    className="w-0.5 shrink-0 rounded-full bg-hint-purple"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="font-heading font-semibold italic text-foreground">
                      Você não apenas assiste.
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Você pratica, testa, consolida e evolui.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ── Card 2: Exercícios de Avaliação ── */}
          <div className="flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">

            {/* Card header */}
            <div className="mb-5 flex items-center gap-3">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-hint-purple/10 text-hint-purple"
              >
                <ClipboardText weight="duotone" size={30} />
              </div>
              <h3 className="font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                Exercícios de Avaliação
              </h3>
            </div>

            {/* Left accent rule + content */}
            <div className="flex flex-1 gap-4">
              <div
                aria-hidden="true"
                className="w-0.5 shrink-0 rounded-full bg-hint-purple/20"
              />
              <div className="flex flex-1 flex-col gap-4">

                <p className="leading-relaxed text-muted-foreground">
                  Ao final de cada aula, você coloca o aprendizado em prática.
                </p>

                <div>
                  <p className="mb-3 font-medium text-foreground">
                    Os exercícios foram pensados para:
                  </p>
                  <ul className="flex flex-col gap-2" role="list">
                    {[
                      "Fixar a pronúncia correta",
                      "Desenvolver consciência sonora",
                      "Garantir evolução real",
                      "Evitar lacunas no aprendizado",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <CaretRight
                          aria-hidden="true"
                          weight="bold"
                          size={16}
                          className="mt-0.5 shrink-0 text-hint-purple"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>

          {/* ── Card 3: Grupo VIP de Mentoria no WhatsApp — KEY DIFFERENTIATOR ── */}
          {/*
           * This card intentionally breaks from the white card pattern.
           * It uses the same deep hint-purple as the Hero section,
           * with a radial violet bloom at the top-right for atmospheric
           * depth and a bottom glow that mirrors the CTA button in Hero.
           * The "Diferencial" eyebrow badge uses hint-green (same colour
           * as the Hero CTA) to signal that this is the unique value prop.
           * Bullet icons switch to hint-green to sustain the colour link.
           * The card is slightly taller via `md:-mt-3 md:-mb-3 md:py-9`
           * so it visually "rises" above its siblings on desktop.
           */}
          <div className="relative flex flex-col overflow-hidden rounded-xl p-6 shadow-[0_8px_40px_rgba(85,3,175,0.30)] ring-2 ring-hint-purple md:-mb-3 md:-mt-3 md:py-9"
            style={{ background: "#5503af" }}
          >
            {/* Atmospheric radial bloom — top-right */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background: [
                  "radial-gradient(ellipse 70% 50% at 100% 0%, rgba(139,0,255,0.35) 0%, transparent 65%)",
                  "radial-gradient(ellipse 60% 40% at 0% 100%, rgba(20,0,60,0.40) 0%, transparent 60%)",
                ].join(", "),
              }}
            />

            {/* Subtle dot-grid texture (same motif as Hero) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* Content — sits above decorative layers */}
            <div className="relative z-10 flex flex-1 flex-col gap-4">

              {/* Diferencial badge */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white"
                  >
                    <WhatsappLogo weight="duotone" size={30} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">
                    Grupo VIP de Mentoria no WhatsApp
                  </h3>
                </div>
              </div>

              {/* Eyebrow badge — placed after h3 so it reads below visually */}
              <div className="flex">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-hint-green/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-hint-green ring-1 ring-hint-green/40">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-hint-green"
                  />
                  Diferencial
                </span>
              </div>

              {/* Thin separator */}
              <div
                aria-hidden="true"
                className="h-px w-full bg-white/15"
              />

              <p className="font-medium leading-relaxed text-white">
                Aqui está o grande diferencial.
              </p>

              <p className="leading-relaxed text-white/80">
                Ao entrar no método, você participa de um Grupo VIP de Mentoria
                no WhatsApp, onde instrutores estarão presentes para:
              </p>

              <ul className="flex flex-col gap-2" role="list">
                {[
                  "Tirar dúvidas",
                  "Corrigir direcionamentos",
                  "Oferecer suporte",
                  "Incentivar sua evolução",
                  "Evitar que você desista no meio do caminho",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-white/85"
                  >
                    <CaretRight
                      aria-hidden="true"
                      weight="bold"
                      size={16}
                      className="mt-0.5 shrink-0 text-hint-green"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Emphasis callout — green-tinted panel, mirroring card 1's motif */}
              <div className="mt-auto flex gap-3 rounded-lg bg-white/10 p-3 ring-1 ring-white/15">
                <div
                  aria-hidden="true"
                  className="w-0.5 shrink-0 rounded-full bg-hint-green"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-heading font-semibold italic text-white">
                    Você aprende com autonomia,<br className="hidden sm:block" /> mas com suporte humano.
                  </p>
                  <p className="text-sm font-bold leading-relaxed text-hint-green">
                    E isso muda tudo.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

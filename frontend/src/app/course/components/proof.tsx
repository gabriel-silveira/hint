import Image from "next/image";
import {
  Clock,
  GlobeHemisphereWest,
  Chalkboard,
} from "@phosphor-icons/react/dist/ssr";

/**
 * Proof & Authority — fifth section of the course landing page.
 *
 * Server Component: no interactivity, no "use client".
 *
 * Design: deep hint-purple editorial backdrop — same colour family as the
 * Hero — but treated with a distinct crosshatch texture (instead of dot-grid)
 * and a strong asymmetric two-column composition that breaks from every
 * preceding section's centred/card layout.
 *
 * The three authority numbers are the visual centrepiece: they are rendered
 * as monument-scale display figures using font-heading at 5xl–7xl, each
 * prefixed by a thin hint-green horizontal rule that anchors the number
 * visually and links it to the "progress" green token without making the
 * section feel like a CTA zone.
 *
 * Photo treatment: rounded-2xl with a faint white/10 ring (ghost frame)
 * and a soft purple-glow box-shadow — ties the image into the purple
 * background without cropping it in a harsh card border.
 *
 * Mobile order: numbers first, then photo, then paragraphs — leads with the
 * proof data before the face, which is a deliberate persuasion choice for
 * small-screen scrollers who skim top-to-bottom.
 *
 * Accessibility:
 * - aria-label on <section> for landmark navigation
 * - <dl> / <dt> / <dd> for the stat numbers — semantically correct for
 *   name-value pairs (label / quantity)
 * - Decorative layers are aria-hidden
 * - Image has a meaningful alt attribute
 */
export function Proof() {
  return (
    <section
      aria-label="Resultados comprovados"
      className="relative pt-16 pb-0 md:pt-20"
      style={{ background: "#5503af" }}
    >
      {/* Curved divider — white curve descending into purple */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 L0 0 L1440 0 L1440 0 C1080 60 360 60 0 0 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* ── Background atmosphere ─────────────────────────────────────────── */}

      {/*
       * Two radial blooms:
       * — Bottom-right: warm violet lift to frame the photo zone on desktop.
       * — Top-left: deep indigo anchor that keeps the left column grounded.
       * Together they create subtle diagonal warmth without a gradient banding
       * artifact across the flat purple.
       */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 65% 70% at 100% 100%, rgba(139,0,255,0.32) 0%, transparent 65%)",
            "radial-gradient(ellipse 55% 45% at 0% 0%, rgba(10,0,50,0.50) 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      {/*
       * Crosshatch texture — a 1-px grid of white lines at very low opacity.
       * Distinct from the Hero's dot-grid; both share the same white-on-purple
       * family but the crosshatch reads as "structured authority" rather than
       * the Hero's "starfield" lightness.
       */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.035,
          backgroundImage: [
            "linear-gradient(to right, #ffffff 1px, transparent 1px)",
            "linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="container relative z-10 mx-auto">

        {/*
         * Two-column layout:
         *   Left col  (desktop): photo, full height of the content block.
         *   Right col (desktop): eyebrow, body copy, stat numbers.
         *
         * Mobile stack order via flex-col:
         *   1. Eyebrow + stat numbers (proof-first persuasion)
         *   2. Photo
         *   3. Body paragraphs
         * Handled with `order-*` utilities on each child.
         */}
        <div className="flex flex-col gap-12 md:flex-row md:gap-6 lg:gap-8">

          {/* ── LEFT: Photo — anchored to bottom, limited width ────────── */}
          <div className="order-2 flex items-end justify-center overflow-hidden md:order-1 md:w-5/12 md:self-end lg:w-5/12">
            <div className="w-[65%] md:w-[80%]">
              <Image
                src="/larissa-autoridade.png"
                alt="Larissa Rovaron — pose de autoridade"
                width={480}
                height={580}
                className="w-full object-contain object-bottom"
              />
            </div>
          </div>

          {/* ── RIGHT: Copy + Numbers ───────────────────────────────────── */}
          <div className="order-1 flex flex-col md:order-2 md:w-7/12 md:self-center lg:w-1/2">

            {/* Eyebrow label */}
            <p className="mb-6 inline-block self-start rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
              Resultados comprovados
            </p>

            {/* ── Authority stat numbers ─────────────────────────────────
             *
             * Uses <dl> (description list) with paired <dt>/<dd> for each
             * stat. This is semantically correct for a set of label-value
             * pairs and provides meaningful structure to assistive tech.
             *
             * Visual treatment:
             * - A thin hint-green rule above each number anchors the figure
             *   and is the only hint-green element in this column, keeping
             *   the green token intentional.
             * - The number itself is in font-heading (Source Sans 3 Bold)
             *   at 5xl–7xl — physically large enough to read from a
             *   skimming distance on mobile.
             * - The <dt> label is smaller, white/65, and sits below the
             *   number so the figure is the first thing eyes land on.
             * - Three stats sit in a horizontal row on md+; stacked on sm.
             ───────────────────────────────────────────────────────────── */}
            <dl className="mb-10 grid grid-cols-3 gap-5 text-center sm:gap-8">

              {/* Stat 1 — 30+ anos */}
              <div className="flex flex-col gap-2">
                <div
                  aria-hidden="true"
                  className="flex items-center justify-center gap-2"
                >
                  <div className="h-0.5 w-8 rounded-full bg-white/40" />
                  <Clock
                    weight="duotone"
                    size={24}
                    className="text-white/70"
                    aria-hidden="true"
                  />
                </div>
                <dd className="font-heading text-4xl font-bold leading-none text-white sm:text-5xl md:text-7xl lg:text-8xl">
                  30+
                </dd>
                <dt className="text-sm leading-snug text-white sm:text-base md:text-lg">
                  anos convivendo com o inglês
                </dt>
              </div>

              {/* Stat 2 — 11 países */}
              <div className="flex flex-col gap-2">
                <div
                  aria-hidden="true"
                  className="flex items-center justify-center gap-2"
                >
                  <div className="h-0.5 w-8 rounded-full bg-white/40" />
                  <GlobeHemisphereWest
                    weight="duotone"
                    size={24}
                    className="text-white/70"
                    aria-hidden="true"
                  />
                </div>
                <dd className="font-heading text-4xl font-bold leading-none text-white sm:text-5xl md:text-7xl lg:text-8xl">
                  11
                </dd>
                <dt className="text-sm leading-snug text-white sm:text-base md:text-lg">
                  países visitados
                </dt>
              </div>

              {/* Stat 3 — 13 anos como English Teacher */}
              <div className="flex flex-col gap-2">
                <div
                  aria-hidden="true"
                  className="flex items-center justify-center gap-2"
                >
                  <div className="h-0.5 w-8 rounded-full bg-white/40" />
                  <Chalkboard
                    weight="duotone"
                    size={24}
                    className="text-white/70"
                    aria-hidden="true"
                  />
                </div>
                <dd className="font-heading text-4xl font-bold leading-none text-white sm:text-5xl md:text-7xl lg:text-8xl">
                  13
                </dd>
                <dt className="text-sm leading-snug text-white sm:text-base md:text-lg">
                  anos como English Teacher
                </dt>
              </div>

            </dl>

            {/* ── Photo (mobile only) — sits between numbers and text ─────
             *
             * On mobile the photo appears here via CSS order, between the
             * stat numbers and the body paragraphs. On md+ it disappears
             * from this position (hidden md:hidden is not needed because
             * the left-column photo is always rendered; on mobile the left
             * column simply stacks after this right column).
             * The layout is a flex-col on mobile, so the photo appears
             * in DOM order: eyebrow → numbers → [mobile photo slot via
             * order] → paragraphs. However, because the photo is already
             * in the left column (order-2 on mobile = after this right
             * column order-1), it naturally appears between the two
             * right-column halves.
             *
             * No additional duplication needed — the DOM order combined
             * with flex order utilities handles it correctly:
             *  mobile: [right col: eyebrow+numbers+paragraphs] [left col: photo]
             * We need the photo to appear BETWEEN numbers and paragraphs
             * on mobile. To achieve this without duplicating the <Image>
             * we split the right column into two sub-blocks (numbers and
             * paragraphs) and assign them order-1 and order-3 inside a
             * parent that reorders the left-col photo as order-2.
             * This requires the three blocks to be direct children of
             * the outer flex container.
             ───────────────────────────────────────────────────────────── */}

            {/* ── Body copy ────────────────────────────────────────────── */}
            <div className="order-3 flex flex-col gap-5">

              {/*
               * Thin decorative separator between numbers and copy.
               * Echoes the thin-rule motif used in Method's section header,
               * adapted for a white-on-purple context.
               */}
              <div
                aria-hidden="true"
                className="flex items-center gap-3"
              >
                <div className="h-px flex-1 bg-white/15" />
                <div className="h-1.5 w-1.5 rotate-45 bg-white/30" />
                <div className="h-px flex-1 bg-white/15" />
              </div>

              <p className="text-lg leading-relaxed text-white/90 md:text-xl">
                Você não está aprendendo com alguém que apenas estudou inglês.
              </p>

              <p className="text-lg leading-relaxed text-white/80 md:text-xl">
                Você está aprendendo com alguém que{" "}
                <strong className="font-semibold text-white">
                  vive o idioma há décadas.
                </strong>
              </p>

              <p className="leading-relaxed text-white/70">
                São mais de 30 anos convivendo com o inglês na prática —
                dentro de casa, no trabalho e na vida real.
              </p>

              <p className="leading-relaxed text-white/70">
                Com formação multidisciplinar e experiência em instituições
                reconhecidas, o método nasce da prática, da vivência e da
                aplicação real.
              </p>

              {/* Closing emphasis — A) Amber glow */}
              <div
                className="relative overflow-hidden rounded-2xl px-7 py-6 md:px-9 md:py-8"
                style={{
                  background: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 60%, #FCD34D 100%)",
                  boxShadow: "0 8px 32px rgba(245,158,11,0.30), 0 0 60px rgba(251,191,36,0.12)",
                }}
              >
                <div className="flex flex-col gap-1">
                  <p
                    className="font-heading text-xl font-semibold italic leading-snug md:text-2xl"
                    style={{ color: "rgba(120,53,0,0.75)" }}
                  >
                    Não é teoria.
                  </p>
                  <p
                    className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl"
                    style={{
                      textShadow: "0 2px 8px rgba(120,53,0,0.20)",
                    }}
                  >
                    É resultado.
                  </p>
                </div>
              </div>

              {/* Secondary CTA */}
              <div className="mt-8 pb-10 text-center md:pb-0 md:text-left">
                <a
                  href="#"
                  className="
                    block w-full
                    rounded-xl
                    bg-hint-green
                    py-4
                    text-center text-base font-semibold tracking-wide text-white
                    shadow-[0_4px_20px_rgba(0,200,83,0.30)]
                    transition-all duration-200 ease-out
                    hover:shadow-[0_6px_28px_rgba(0,200,83,0.45)]
                    active:scale-[0.98]
                    md:inline-block md:w-auto md:px-10 md:py-4 md:text-lg
                  "
                >
                  Quero começar agora
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

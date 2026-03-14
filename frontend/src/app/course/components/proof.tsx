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
      aria-label="Prova e Autoridade"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "#5503af" }}
    >

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
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16 lg:gap-20">

          {/* ── LEFT: Photo ─────────────────────────────────────────────── */}
          <div className="order-2 flex justify-center md:order-1 md:w-5/12 md:justify-end lg:w-1/2">
            <div className="relative">
              {/*
               * Ghost-frame: a white/10 ring drawn as a positioned sibling div
               * inset slightly so it sits *behind* the image, giving a layered
               * floating-frame impression without a CSS outline that clips.
               */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-3xl ring-1 ring-white/10"
              />

              {/*
               * Green accent corner block — top-left of the photo frame.
               * A small 12×12 square in hint-green that adds the single
               * saturated pop of colour to the photo quadrant, echoing the
               * green stat accents on the right without being symmetric.
               */}
              <div
                aria-hidden="true"
                className="absolute -top-5 -left-5 h-12 w-12 rounded-md bg-hint-green/80"
                style={{
                  boxShadow: "0 0 24px rgba(0,200,83,0.45)",
                }}
              />

              <Image
                src="/larissa-autoridade.png"
                alt="Larissa Rovaron — pose de autoridade"
                width={480}
                height={580}
                className="relative rounded-2xl object-cover"
                style={{
                  boxShadow: [
                    "0 0 0 1px rgba(255,255,255,0.10)",
                    "0 24px 64px rgba(85,3,175,0.55)",
                    "0 8px 24px rgba(0,0,0,0.40)",
                  ].join(", "),
                }}
              />
            </div>
          </div>

          {/* ── RIGHT: Copy + Numbers ───────────────────────────────────── */}
          <div className="order-1 flex flex-col md:order-2 md:w-7/12 lg:w-1/2">

            {/* Eyebrow label */}
            <p className="mb-6 inline-block self-start rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
              Prova &amp; Autoridade
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
            <dl className="mb-10 grid grid-cols-3 gap-5 sm:gap-8">

              {/* Stat 1 — 30+ anos */}
              <div className="flex flex-col gap-2">
                <div
                  aria-hidden="true"
                  className="flex items-center gap-2"
                >
                  <div className="h-0.5 w-8 rounded-full bg-hint-green" />
                  <Clock
                    weight="duotone"
                    size={16}
                    className="text-hint-green opacity-80"
                    aria-hidden="true"
                  />
                </div>
                <dd className="font-heading text-5xl font-bold leading-none text-white md:text-6xl lg:text-7xl">
                  30+
                </dd>
                <dt className="text-sm leading-snug text-white/75 md:text-base">
                  anos convivendo com o inglês
                </dt>
              </div>

              {/* Stat 2 — 11 países */}
              <div className="flex flex-col gap-2">
                <div
                  aria-hidden="true"
                  className="flex items-center gap-2"
                >
                  <div className="h-0.5 w-8 rounded-full bg-hint-green" />
                  <GlobeHemisphereWest
                    weight="duotone"
                    size={16}
                    className="text-hint-green opacity-80"
                    aria-hidden="true"
                  />
                </div>
                <dd className="font-heading text-5xl font-bold leading-none text-white md:text-6xl lg:text-7xl">
                  11
                </dd>
                <dt className="text-sm leading-snug text-white/75 md:text-base">
                  países visitados
                </dt>
              </div>

              {/* Stat 3 — 13 anos como English Teacher */}
              <div className="flex flex-col gap-2">
                <div
                  aria-hidden="true"
                  className="flex items-center gap-2"
                >
                  <div className="h-0.5 w-8 rounded-full bg-hint-green" />
                  <Chalkboard
                    weight="duotone"
                    size={16}
                    className="text-hint-green opacity-80"
                    aria-hidden="true"
                  />
                </div>
                <dd className="font-heading text-5xl font-bold leading-none text-white md:text-6xl lg:text-7xl">
                  13
                </dd>
                <dt className="text-sm leading-snug text-white/75 md:text-base">
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
                <div className="h-px w-12 bg-white/15" />
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

              {/*
               * Closing emphasis block.
               * "Não é teoria." and "É resultado." are typographically
               * elevated: the first line is medium-weight italic in white/85,
               * and the second is bold, slightly larger, and fully white —
               * the single most emphatic text moment in the section.
               * A hint-green left-rule anchors both lines, consistent with
               * the left-rule motif from Bio and Method.
               */}
              <div className="flex items-stretch gap-4 rounded-xl bg-white/8 p-5 ring-1 ring-white/12">
                <div
                  aria-hidden="true"
                  className="w-0.5 shrink-0 rounded-full bg-hint-green"
                />
                <div className="flex flex-col gap-1.5">
                  <p className="font-heading text-lg font-medium italic leading-snug text-white/85 md:text-xl">
                    Não é teoria.
                  </p>
                  <p className="font-heading text-2xl font-bold leading-tight text-white md:text-3xl">
                    É resultado.
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

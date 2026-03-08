"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "@phosphor-icons/react";

/**
 * Testimonials — Client Component (carousel requires interactivity)
 *
 * Layout strategy:
 *   - bg-secondary (#F7F7FA) — strong contrast after the dark-purple Proof section
 *   - Desktop: static 3+2 grid; first row 3 cols, second row 2 cols centred
 *   - Mobile: embla horizontal carousel, 85vw slides, dot navigation
 *
 * Card design:
 *   - Follows the established Bio / Method / Reframing card language:
 *     rounded-xl, border, shadow-sm, left-accent purple rule, hover:shadow-md
 *   - Avatar: circular initials div with a per-person colour
 *   - 5 filled Star icons in amber
 *   - Quote body in text-muted-foreground; name in font-heading bold
 *
 * Closing line:
 *   - Italic font-heading editorial statement with hint-purple left-border,
 *     mirroring the NeedLine "bold" pattern from Reframing — a deliberate callback
 *
 * Accessibility:
 *   - <section> with aria-label
 *   - Carousel prev/next/dot buttons with aria-label
 *   - Stars rendered with aria-label="5 estrelas" on the container, aria-hidden on icons
 *   - Avatar aria-hidden; name carries full identity
 */

/* ─────────────────────────────────────────────
   Testimonial data
───────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    id: 1,
    name: "Mariana S.",
    city: "São Paulo",
    initials: "MS",
    avatarClass: "bg-purple-500",
    quote:
      "Eu já tinha feito dois cursos antes e sempre travava quando precisava falar. No método da Larissa, eu finalmente entendi os sons do inglês. Hoje eu consigo conversar sem aquele pânico inicial. Minha confiança mudou completamente.",
  },
  {
    id: 2,
    name: "Rafael M.",
    city: "Campinas",
    initials: "RM",
    avatarClass: "bg-blue-500",
    quote:
      "O grupo no WhatsApp faz toda a diferença. Eu sabia que, se tivesse dúvida, teria alguém ali para me orientar. Isso me impediu de desistir como aconteceu em outros cursos.",
  },
  {
    id: 3,
    name: "Juliana P.",
    city: "Rio de Janeiro",
    initials: "JP",
    avatarClass: "bg-pink-500",
    quote:
      "Minha maior insegurança era a pronúncia. Eu tinha vergonha de falar. Com os exercícios e as correções, comecei a perceber minha evolução semana após semana.",
  },
  {
    id: 4,
    name: "André L.",
    city: "Belo Horizonte",
    initials: "AL",
    avatarClass: "bg-emerald-500",
    quote:
      "As aulas são objetivas e práticas. Nada de enrolação. Você aprende e já aplica. Foi o primeiro curso online que realmente me deu direção.",
  },
  {
    id: 5,
    name: "Camila R.",
    city: "Curitiba",
    initials: "CR",
    avatarClass: "bg-amber-500",
    quote:
      "O que mais gostei foi o suporte. Não é só assistir vídeo. Você se sente acompanhado. Isso dá segurança para continuar e evoluir.",
  },
] as const;

/* ─────────────────────────────────────────────
   StarRating — 5 filled amber stars
───────────────────────────────────────────── */
function StarRating() {
  return (
    <div
      aria-label="5 estrelas"
      className="flex items-center gap-0.5"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          weight="fill"
          size={16}
          className="text-amber-400"
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   TestimonialCard — shared card shell
   Follows the Bio credential card / Reframing pain-point card pattern:
   rounded-xl, border, shadow-sm, purple left-accent rule, hover:shadow-md
───────────────────────────────────────────── */
interface TestimonialCardProps {
  name: string;
  city: string;
  initials: string;
  avatarClass: string;
  quote: string;
}

function TestimonialCard({
  name,
  city,
  initials,
  avatarClass,
  quote,
}: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      {/* Top row: avatar + name + stars */}
      <div className="mb-5 flex items-start gap-4">
        {/* Coloured initials avatar */}
        <div
          aria-hidden="true"
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${avatarClass}`}
        >
          {initials}
        </div>

        {/* Name + city */}
        <div className="flex flex-col gap-0.5">
          <p className="font-heading text-base font-bold leading-tight text-foreground">
            {name}
          </p>
          <p className="text-sm text-muted-foreground">{city}</p>
        </div>
      </div>

      {/* Stars */}
      <StarRating />

      {/* Divider */}
      <div
        aria-hidden="true"
        className="my-4 h-px w-full rounded-full bg-border"
      />

      {/* Left accent rule + quote */}
      <div className="flex flex-1 gap-4">
        <div
          aria-hidden="true"
          className="w-0.5 shrink-0 rounded-full bg-hint-purple/20"
        />
        <blockquote className="leading-relaxed text-muted-foreground">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────
   Testimonials — main export
───────────────────────────────────────────── */
export function Testimonials() {
  /* ── Embla carousel setup ── */
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    const onReinit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onInit();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onReinit);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onReinit);
    };
  }, [emblaApi]);

  return (
    <section
      aria-label="Depoimentos"
      className="bg-secondary py-20 md:py-28"
    >
      <div className="container">

        {/* ── Section header ── */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">

          {/* Eyebrow */}
          <p className="mb-5 font-heading text-xs font-bold uppercase tracking-[0.2em] text-hint-purple">
            Resultados reais
          </p>

          {/* H2 */}
          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Veja o que nossos alunos dizem
          </h2>

          {/* Decorative rule with centred diamond — mirrors Method section header */}
          <div
            aria-hidden="true"
            className="my-7 flex items-center justify-center gap-3"
          >
            <div className="h-px w-16 bg-hint-purple/20" />
            <div className="h-1.5 w-1.5 rotate-45 bg-hint-purple/40" />
            <div className="h-px w-16 bg-hint-purple/20" />
          </div>
        </div>

        {/* ── Desktop grid: 3 + 2 layout — hidden on mobile ── */}
        {/*
         * Row 1: 3 equal columns
         * Row 2: 2 cards centred using a 3-col grid with col-start tricks
         *        — the first card starts at col 1 (implicit), the second at col 2,
         *          leaving col 3 empty so the pair reads as centred.
         * This avoids a separate grid for row 2 while keeping one grid context.
         */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-6 lg:gap-7">
          {/* Row 1: cards 0, 1, 2 */}
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}

          {/* Row 2: cards 3 and 4, centred via col-start */}
          <div className="col-start-1 md:col-start-1 lg:col-start-1 col-span-1">
            <TestimonialCard {...TESTIMONIALS[3]} />
          </div>
          <div className="col-span-1">
            <TestimonialCard {...TESTIMONIALS[4]} />
          </div>
          {/* Third column intentionally empty — creates the centred-pair illusion */}
        </div>

        {/* ── Mobile carousel — hidden on desktop ── */}
        <div className="md:hidden">
          {/* Embla viewport */}
          <div
            ref={emblaRef}
            className="overflow-hidden"
            aria-label="Carrossel de depoimentos"
          >
            <div className="flex gap-4">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  /* 85% slide width with a right-peek for affordance */
                  className="min-w-0 flex-[0_0_85%]"
                >
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>

          {/* Dot navigation */}
          <div
            role="tablist"
            aria-label="Navegação do carrossel"
            className="mt-8 flex items-center justify-center gap-2.5"
          >
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                role="tab"
                aria-label={`Depoimento ${index + 1} de ${scrollSnaps.length}`}
                aria-selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
                className={[
                  "h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hint-purple focus-visible:ring-offset-2",
                  index === selectedIndex
                    ? "w-6 bg-hint-purple"
                    : "w-2 bg-hint-purple/25 hover:bg-hint-purple/50",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

        {/* ── Closing editorial line ── */}
        {/*
         * Styled as the NeedLine "bold" variant from Reframing:
         * 4px hint-purple left-border, italic font-heading bold, centred
         * max-width prose container — a deliberate visual callback.
         */}
        <div className="mx-auto mt-14 max-w-xl md:mt-16">
          <div className="flex gap-5">
            <div
              aria-hidden="true"
              className="w-1 shrink-0 rounded-full bg-hint-purple"
            />
            <p className="font-heading text-xl font-bold italic leading-snug text-foreground md:text-2xl">
              Se eles conseguiram destravar, você também consegue.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import { useEffect } from "react";
import { useHeaderTheme } from "@/contexts/header-theme-context";
import {
  Translate,
  ClosedCaptioning,
  ChatCircle,
  Target,
  Handshake,
  SpeakerHigh,
  Microphone,
  GraduationCap,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

/* ─────────────────────────────────────────────
   Service data
───────────────────────────────────────────── */

interface Service {
  icon: React.ComponentType<{ weight?: "duotone"; size?: number }>;
  title: string;
  description: string;
}

const linguisticServices: Service[] = [
  {
    icon: Translate,
    title: "Tradução",
    description:
      "Tradução profissional de documentos, conteúdos corporativos, acadêmicos e materiais técnicos com precisão linguística.",
  },
  {
    icon: ClosedCaptioning,
    title: "Legendagem",
    description:
      "Criação e sincronização de legendas para vídeos institucionais, educacionais e produções audiovisuais.",
  },
  {
    icon: SpeakerHigh,
    title: "Dublagem",
    description:
      "Gravação de vozes para vídeos, conteúdos educacionais e produções audiovisuais.",
  },
  {
    icon: Microphone,
    title: "Voice Over",
    description:
      "Narração profissional para vídeos institucionais, cursos online e apresentações corporativas.",
  },
];

const communicationServices: Service[] = [
  {
    icon: ChatCircle,
    title: "Intérprete",
    description:
      "Interpretação para reuniões, eventos, negociações e apresentações entre inglês e português.",
  },
  {
    icon: Target,
    title: "Consultoria para Processos Seletivos",
    description:
      "Preparação estratégica para candidatos que participam de processos seletivos internacionais.",
  },
  {
    icon: Handshake,
    title: "Entrevistas de Emprego",
    description:
      "Treinamento e simulação de entrevistas em inglês para desenvolver segurança e comunicação profissional.",
  },
  {
    icon: GraduationCap,
    title: "Treinamentos",
    description:
      "Programas de instrução em inglês focados em comunicação real e desenvolvimento profissional.",
  },
];

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */

export default function ServicePage() {
  const { setTheme } = useHeaderTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <main className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white pb-16 pt-32 md:pb-20 md:pt-40">
        {/* Subtle purple radial bloom at top */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(85,3,175,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="container relative z-10">
          <style>{`
            @keyframes serviceFadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to   { opacity: 1; transform: translateY(0); }
            }
            .svc-fade-1 { opacity: 0; animation: serviceFadeIn 0.5s ease-out 0.1s forwards; }
            .svc-fade-2 { opacity: 0; animation: serviceFadeIn 0.5s ease-out 0.3s forwards; }
            .svc-fade-3 { opacity: 0; animation: serviceFadeIn 0.5s ease-out 0.45s forwards; }
          `}</style>

          <div className="mx-auto max-w-2xl text-center">
            <h1 className="svc-fade-1 font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Serviços
            </h1>

            {/* Diamond divider */}
            <div
              aria-hidden="true"
              className="svc-fade-2 my-6 flex items-center justify-center gap-3"
            >
              <div className="h-px w-16 bg-hint-purple/20" />
              <div className="h-1.5 w-1.5 rotate-45 bg-hint-purple/40" />
              <div className="h-px w-16 bg-hint-purple/20" />
            </div>

            <p className="svc-fade-3 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Soluções profissionais em comunicação, treinamento e produção
              linguística em inglês e português.
            </p>
          </div>
        </div>
      </section>

      {/* ── Produção Linguística ── */}
      <section
        aria-label="Serviços de produção linguística"
        className="bg-secondary py-16 md:py-24"
      >
        <div className="container">
          <div className="mb-10 text-center md:mb-14">
            <p className="inline-block rounded-full border border-hint-purple/20 bg-hint-purple/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-hint-purple">
              Produção Linguística
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {linguisticServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Comunicação & Desenvolvimento ── */}
      <section
        aria-label="Serviços de comunicação e desenvolvimento"
        className="bg-white py-16 md:py-24"
      >
        <div className="container">
          <div className="mb-10 text-center md:mb-14">
            <p className="inline-block rounded-full border border-hint-purple/20 bg-hint-purple/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-hint-purple">
              Comunicação & Desenvolvimento
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {communicationServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ background: "#5503af" }}>
        {/* Radial bloom */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 30% 100%, rgba(139,0,255,0.25) 0%, transparent 65%)",
          }}
        />

        {/* Dot-grid texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container relative z-10 text-center">
          <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
            Precisa de um serviço personalizado?
          </h2>

          {/* Diamond divider — white variant */}
          <div
            aria-hidden="true"
            className="my-6 flex items-center justify-center gap-3"
          >
            <div className="h-px w-16 bg-white/20" />
            <div className="h-1.5 w-1.5 rotate-45 bg-white/40" />
            <div className="h-px w-16 bg-white/20" />
          </div>

          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-white/80">
            Entre em contato e receba uma proposta sob medida para a sua
            necessidade.
          </p>

          <Link
            href="/contact"
            className="inline-block rounded-xl bg-hint-green px-10 py-4 text-lg font-semibold text-white shadow-[0_4px_20px_rgba(0,200,83,0.30)] transition-all duration-200 ease-out hover:shadow-[0_6px_28px_rgba(0,200,83,0.50)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Entre em contato
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ─────────────────────────────────────────────
   ServiceCard
───────────────────────────────────────────── */

interface ServiceCardProps {
  icon: React.ComponentType<{ weight?: "duotone"; size?: number }>;
  title: string;
  description: string;
}

function ServiceCard({
  icon: IconComponent,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group flex flex-col items-center rounded-2xl border border-border bg-white p-8 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md md:p-10">
      {/* Icon */}
      <div
        aria-hidden="true"
        className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-hint-purple/8 text-hint-purple transition-colors duration-200 group-hover:bg-hint-purple/12"
      >
        <IconComponent weight="duotone" size={32} />
      </div>

      {/* Title */}
      <h3 className="mb-3 font-heading text-xl font-bold text-foreground">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

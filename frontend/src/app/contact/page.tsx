"use client";

import { useEffect } from "react";
import { useHeaderTheme } from "@/contexts/header-theme-context";
import {
  WhatsappLogo,
  EnvelopeSimple,
  Phone,
  MapPin,
  Clock,
  InstagramLogo,
  FacebookLogo,
  TiktokLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */

export default function ContactPage() {
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
            @keyframes contactFadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to   { opacity: 1; transform: translateY(0); }
            }
            .ct-fade-1 { opacity: 0; animation: contactFadeIn 0.5s ease-out 0.1s forwards; }
            .ct-fade-2 { opacity: 0; animation: contactFadeIn 0.5s ease-out 0.3s forwards; }
            .ct-fade-3 { opacity: 0; animation: contactFadeIn 0.5s ease-out 0.45s forwards; }
          `}</style>

          <div className="mx-auto max-w-2xl text-center">
            <h1 className="ct-fade-1 font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Contato
            </h1>

            {/* Diamond divider */}
            <div
              aria-hidden="true"
              className="ct-fade-2 my-6 flex items-center justify-center gap-3"
            >
              <div className="h-px w-16 bg-hint-purple/20" />
              <div className="h-1.5 w-1.5 rotate-45 bg-hint-purple/40" />
              <div className="h-px w-16 bg-hint-purple/20" />
            </div>

            <p className="ct-fade-3 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Fale conosco. Estamos prontos para entender sua necessidade e
              oferecer a melhor solução em inglês.
            </p>
          </div>
        </div>
      </section>

      {/* ── Canais de Atendimento ── */}
      <section
        aria-label="Canais de atendimento"
        className="bg-secondary py-16 md:py-24"
      >
        <div className="container">
          <div className="mb-10 text-center md:mb-14">
            <p className="inline-block rounded-full border border-hint-purple/20 bg-hint-purple/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-hint-purple">
              Canais de Atendimento
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            {/* WhatsApp — featured card */}
            <a
              href="https://wa.me/5511995566515"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mb-6 flex flex-col items-center overflow-hidden rounded-2xl p-8 text-center shadow-[0_6px_32px_rgba(0,200,83,0.20)] ring-1 ring-hint-green/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(0,200,83,0.30)] md:p-10"
              style={{ background: "#00C853" }}
            >
              {/* Subtle radial bloom */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 80% 0%, rgba(255,255,255,0.15) 0%, transparent 60%)",
                }}
              />

              <div className="relative z-10 flex flex-col items-center">
                <div
                  aria-hidden="true"
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-white transition-colors duration-200 group-hover:bg-white/30"
                >
                  <WhatsappLogo weight="duotone" size={36} />
                </div>
                <h3 className="mb-2 font-heading text-2xl font-bold text-white">
                  WhatsApp
                </h3>
                <p className="mb-1 text-base text-white/85">
                  Atendimento rápido e direto.
                </p>
                <p className="mb-5 text-lg font-medium text-white">
                  (11) 99556-6515
                </p>
                <span className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 text-base font-semibold text-hint-green shadow-sm transition-all duration-200 group-hover:shadow-md">
                  Chamar no WhatsApp
                </span>
              </div>
            </a>

            {/* Email + Telefone — side by side */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Email */}
              <a
                href="mailto:contact@hintlanguage.com"
                className="group flex flex-col items-center rounded-2xl border border-border bg-white p-8 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md md:p-10"
              >
                <div
                  aria-hidden="true"
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-hint-purple/8 text-hint-purple transition-colors duration-200 group-hover:bg-hint-purple/12"
                >
                  <EnvelopeSimple weight="duotone" size={32} />
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold text-foreground">
                  E-mail
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                  Para propostas, orçamentos e informações detalhadas.
                </p>
                <p className="text-base font-medium text-hint-purple">
                  contact@hintlanguage.com
                </p>
              </a>

              {/* Telefone */}
              <a
                href="tel:+5511995566515"
                className="group flex flex-col items-center rounded-2xl border border-border bg-white p-8 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md md:p-10"
              >
                <div
                  aria-hidden="true"
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-hint-purple/8 text-hint-purple transition-colors duration-200 group-hover:bg-hint-purple/12"
                >
                  <Phone weight="duotone" size={32} />
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold text-foreground">
                  Telefone
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                  Ligue diretamente para nós.
                </p>
                <p className="text-base font-medium text-hint-purple">
                  (11) 99556-6515
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Onde Estamos ── */}
      <section
        aria-label="Localização"
        className="bg-white py-16 md:py-24"
      >
        <div className="container">
          <div className="mb-10 text-center md:mb-14">
            <p className="inline-block rounded-full border border-hint-purple/20 bg-hint-purple/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-hint-purple">
              Onde Estamos
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            {/* Map embed */}
            <div className="mb-8 overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Localização HINT Language"
                src="https://maps.google.com/maps?q=Avenida+Onze+de+Junho+694+Vila+Clementino+Sao+Paulo&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-72 w-full md:h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Address + Hours — side by side */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Address card */}
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
                <div
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-hint-purple/8 text-hint-purple"
                >
                  <MapPin weight="duotone" size={26} />
                </div>
                <div>
                  <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
                    Endereço
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Avenida Onze de Junho, 694
                    <br />
                    Vila Clementino
                    <br />
                    São Paulo — SP, 04041-002
                  </p>
                </div>
              </div>

              {/* Hours card */}
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
                <div
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-hint-purple/8 text-hint-purple"
                >
                  <Clock weight="duotone" size={26} />
                </div>
                <div>
                  <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
                    Horário de Atendimento
                  </h3>
                  <ul className="space-y-1 text-base text-muted-foreground">
                    <li>Segunda a sexta, das 9h às 18h</li>
                    <li>Sábados, das 9h às 13h</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Redes Sociais ── */}
      <section
        aria-label="Redes sociais"
        className="relative overflow-hidden py-16 md:py-20"
        style={{ background: "#5503af" }}
      >
        {/* Radial bloom */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 70% 100%, rgba(139,0,255,0.25) 0%, transparent 65%)",
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
          <h2 className="mb-2 font-heading text-2xl font-bold text-white md:text-3xl">
            Acompanhe nosso conteúdo
          </h2>

          {/* Diamond divider — white variant */}
          <div
            aria-hidden="true"
            className="my-5 flex items-center justify-center gap-3"
          >
            <div className="h-px w-16 bg-white/20" />
            <div className="h-1.5 w-1.5 rotate-45 bg-white/40" />
            <div className="h-px w-16 bg-white/20" />
          </div>

          <p className="mx-auto mb-8 max-w-md text-base text-white/75">
            Siga a HINT nas redes sociais e fique por dentro das novidades.
          </p>

          <div className="flex items-center justify-center gap-5">
            {[
              {
                href: "https://www.instagram.com/hint.language?igsh=MTY1Yjlsd2JxZXJreA==",
                icon: InstagramLogo,
                label: "Instagram",
              },
              {
                href: "https://www.facebook.com/share/1GVHrR5xqR/",
                icon: FacebookLogo,
                label: "Facebook",
              },
              {
                href: "https://www.tiktok.com/@hint.language?_r=1&_t=ZS-94gyOzgvEVU",
                icon: TiktokLogo,
                label: "TikTok",
              },
              {
                href: "https://youtube.com/@hint.language?si=yyDDCfzbuAib1fcl",
                icon: YoutubeLogo,
                label: "YouTube",
              },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-lg"
              >
                <Icon weight="duotone" size={28} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

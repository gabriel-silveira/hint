import {
  GraduationCap,
  GlobeHemisphereWest,
  Briefcase,
} from "@phosphor-icons/react/dist/ssr";

/**
 * Credentials section — Server Component
 *
 * Full-height section showcasing Larissa's three pillars of authority:
 * academic background, international experience, and professional track record.
 *
 * Design: bg-secondary (#F7F7FA) with generous vertical padding to fill
 * the viewport. Cards are vertically centred within the section. An eyebrow
 * and heading anchor the content before the card grid.
 */
export function Credentials() {
  return (
    <section
      aria-label="Credenciais da professora"
      className="flex min-h-screen items-center bg-secondary py-20 md:py-28"
    >
      <div className="container">

        {/* ── Section header ── */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-4 inline-block rounded-full border border-hint-purple/20 bg-hint-purple/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-hint-purple">
            Por que a Larissa?
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground whitespace-nowrap sm:text-4xl md:text-5xl">
            Formação, vivência e experiência real
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-6 flex items-center justify-center gap-3"
          >
            <div className="h-px w-12 bg-hint-purple/20" />
            <div className="h-1.5 w-1.5 rotate-45 bg-hint-purple/40" />
            <div className="h-px w-12 bg-hint-purple/20" />
          </div>
        </div>

        {/* ── Card grid ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">

          {/* Formação Acadêmica */}
          <CredentialCard
            icon={<GraduationCap weight="duotone" size={36} />}
            title="Formação Acadêmica"
          >
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Graduada em:
            </p>
            <ul className="mt-3 flex flex-col gap-2" role="list">
              {["Magistério", "Comunicação e Marketing", "Pedagogia"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-base text-muted-foreground md:text-lg"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-hint-purple"
                    />
                    {item}
                  </li>
                )
              )}
            </ul>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Ela une didática, estratégia e comunicação clara em um método
              simples e eficiente.
            </p>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground md:text-lg">
              Além do Português, é fluente em Inglês e Espanhol e
              atualmente estuda Alemão — mantendo-se sempre no lugar do
              aluno.
            </p>
          </CredentialCard>

          {/* Experiência Internacional */}
          <CredentialCard
            icon={<GlobeHemisphereWest weight="duotone" size={36} />}
            title="Experiência Internacional"
          >
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Já visitou 11 países e morou fora do Brasil em lugares como
              Argentina, Espanha e Alemanha.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
              Essa vivência se reflete diretamente em suas aulas: o aluno
              aprende não apenas regras, mas como o idioma é usado no mundo
              real.
            </p>
          </CredentialCard>

          {/* Experiência Profissional */}
          <CredentialCard
            icon={<Briefcase weight="duotone" size={36} />}
            title="Experiência Profissional"
          >
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              São 13 anos como English Teacher e 13 anos de experiência em
              Marketing.
            </p>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground md:text-lg">
              No currículo estão instituições respeitadas de São Paulo como:
            </p>
            <ul className="mt-3 flex flex-col gap-2" role="list">
              {[
                "Colégio Batista Brasileiro",
                "Wizard",
                "Stance Dual",
                "Espaço Lúdico",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-base text-muted-foreground md:text-lg"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-hint-purple"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Sua especialidade é pronúncia e alfabetização em língua
              estrangeira — ajudando alunos de todas as idades a falarem
              com segurança e confiança.
            </p>
          </CredentialCard>
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CredentialCard — reusable sub-component
───────────────────────────────────────────── */
interface CredentialCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function CredentialCard({ icon, title, children }: CredentialCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-white p-7 shadow-sm transition-shadow hover:shadow-md md:p-8">
      {/* Icon */}
      <div
        aria-hidden="true"
        className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-hint-purple/10 text-hint-purple"
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-heading mb-5 text-2xl font-bold text-foreground sm:text-3xl">
        {title}
      </h3>

      {/* Left accent rule + content */}
      <div className="flex flex-1 gap-4">
        <div
          aria-hidden="true"
          className="w-0.5 shrink-0 rounded-full bg-hint-purple/20"
        />
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  );
}

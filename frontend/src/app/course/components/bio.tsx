import Image from "next/image";
import {
  GraduationCap,
  GlobeHemisphereWest,
  Briefcase,
} from "@phosphor-icons/react/dist/ssr";

/**
 * Bio section — Server Component
 *
 * Layout: editorial portrait dossier
 * Desktop: two-column grid (photo | credentials)
 * Mobile: stacked (photo → credentials)
 *
 * Design intent: communicate professional authority through
 * structured, credential-card sub-sections anchored by a
 * purple left-border motif that mirrors the brand identity.
 */
export function Bio() {
  return (
    <section
      aria-label="Quem é Larissa Rovaron"
      className="bg-white py-20 md:py-28"
    >
      <div className="container">
        {/* ── Grid: photo | text ── */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[420px_1fr] md:gap-16 lg:gap-20">

          {/* ── Left column: photo + decorative framing ── */}
          <div className="flex flex-col items-center md:items-start">
            {/* Purple vertical rule — desktop only */}
            <div className="hidden md:flex flex-row gap-5 w-full">
              <div className="w-1 rounded-full bg-hint-purple self-stretch shrink-0" />

              <div className="relative w-full">
                {/* Photo */}
                <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(85,3,175,0.14)]">
                  <Image
                    src="/larissa-frontal.png"
                    alt="Larissa Rovaron — professora de inglês"
                    width={420}
                    height={560}
                    priority
                    sizes="(max-width: 768px) 90vw, 420px"
                    className="w-full object-cover object-top"
                  />
                  {/* Subtle purple gradient wash at the bottom for depth */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-hint-purple/10 to-transparent"
                  />
                </div>

                {/* Floating credential badge */}
                <div
                  aria-hidden="true"
                  className="absolute -bottom-5 -right-4 rounded-xl bg-hint-purple px-4 py-3 shadow-lg"
                >
                  <p className="font-heading text-xs font-bold uppercase tracking-widest text-white">
                    English Teacher
                  </p>
                  <p className="font-heading text-2xl font-bold leading-none text-white">
                    13 anos
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile: photo without rule */}
            <div className="relative w-full max-w-sm md:hidden">
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(85,3,175,0.14)]">
                <Image
                  src="/larissa-frontal.png"
                  alt="Larissa Rovaron — professora de inglês"
                  width={420}
                  height={560}
                  priority
                  sizes="90vw"
                  className="w-full object-cover object-top"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-hint-purple/10 to-transparent"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-5 right-4 rounded-xl bg-hint-purple px-4 py-3 shadow-lg"
              >
                <p className="font-heading text-xs font-bold uppercase tracking-widest text-white">
                  English Teacher
                </p>
                <p className="font-heading text-2xl font-bold leading-none text-white">
                  13 anos
                </p>
              </div>
            </div>
          </div>

          {/* ── Right column: heading + intro + credential cards ── */}
          <div className="flex flex-col gap-8 pt-6 md:pt-0">

            {/* Eyebrow label */}
            <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-hint-purple">
              Conheça a professora
            </p>

            {/* Main heading */}
            <h2 className="font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Conheça Larissa Rovaron — a professora que vai transformar o seu
              inglês de verdade
            </h2>

            {/* Intro paragraphs */}
            <div className="flex flex-col gap-4">
              <p className="text-lg font-semibold leading-relaxed text-foreground">
                Larissa Rovaron não ensina inglês.
              </p>
              <p className="leading-relaxed text-foreground">
                Ela forma pessoas confiantes para se comunicar em inglês — com
                pronúncia clara, segurança e naturalidade real.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Brasileira, 45 anos, fala inglês desde os 9 anos de idade,
                quando começou a aprender em casa com a própria mãe, também
                professora de inglês.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Aos 16 anos, a fluência deixou de ser apenas estudo e virou
                rotina diária ao conviver com um americano — também English
                teacher para brasileiros.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Falar inglês em casa, no trabalho e no dia a dia por décadas faz
                dela praticamente uma nativa — com algo que poucos cursos
                oferecem: inglês real, funcional e aplicável.
              </p>
            </div>

            {/* ── Credential cards ── */}
            <div className="flex flex-col gap-6 pt-2">

              {/* Formação Acadêmica */}
              <CredentialCard
                icon={<GraduationCap weight="duotone" size={22} />}
                title="Formação Acadêmica"
              >
                <p className="leading-relaxed text-muted-foreground">
                  Graduada em:
                </p>
                <ul className="mt-2 flex flex-col gap-1" role="list">
                  {["Magistério", "Comunicação e Marketing", "Pedagogia"].map(
                    (item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-muted-foreground"
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
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Ela une didática, estratégia e comunicação clara em um método
                  simples e eficiente.
                </p>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Além do Português, é fluente em Inglês e Espanhol e
                  atualmente estuda Alemão — mantendo-se sempre no lugar do
                  aluno.
                </p>
              </CredentialCard>

              {/* Experiência Internacional */}
              <CredentialCard
                icon={<GlobeHemisphereWest weight="duotone" size={22} />}
                title="Experiência Internacional"
              >
                <p className="leading-relaxed text-muted-foreground">
                  Já visitou 11 países e morou fora do Brasil em lugares como
                  Argentina, Espanha e Alemanha.
                </p>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Essa vivência se reflete diretamente em suas aulas: o aluno
                  aprende não apenas regras, mas como o idioma é usado no mundo
                  real.
                </p>
              </CredentialCard>

              {/* Experiência Profissional */}
              <CredentialCard
                icon={<Briefcase weight="duotone" size={22} />}
                title="Experiência Profissional"
              >
                <p className="leading-relaxed text-muted-foreground">
                  São 13 anos como English Teacher e 13 anos de experiência em
                  Marketing.
                </p>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  No currículo estão instituições respeitadas de São Paulo como:
                </p>
                <ul className="mt-2 flex flex-col gap-1" role="list">
                  {[
                    "Colégio Batista Brasileiro",
                    "Wizard",
                    "Stance Dual",
                    "Espaço Lúdico",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-hint-purple"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Sua especialidade é pronúncia e alfabetização em língua
                  estrangeira — ajudando alunos de todas as idades a falarem
                  com segurança e confiança.
                </p>
              </CredentialCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CredentialCard — reusable sub-component
   Renders an H3 with icon + left-border accent
───────────────────────────────────────────── */
interface CredentialCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function CredentialCard({ icon, title, children }: CredentialCardProps) {
  return (
    <div className="rounded-xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      {/* Card header */}
      <div className="mb-4 flex items-center gap-3">
        {/* Icon container with purple tint */}
        <div
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-hint-purple/10 text-hint-purple"
        >
          {icon}
        </div>
        <h3 className="font-heading text-xl font-bold text-foreground md:text-2xl">
          {title}
        </h3>
      </div>

      {/* Left accent rule + content */}
      <div className="flex gap-4">
        <div
          aria-hidden="true"
          className="w-0.5 shrink-0 rounded-full bg-hint-purple/20"
        />
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  );
}

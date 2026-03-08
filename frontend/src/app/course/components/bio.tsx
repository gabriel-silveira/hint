import Image from "next/image";
import {
  GraduationCap,
  GlobeHemisphereWest,
  Briefcase,
} from "@phosphor-icons/react/dist/ssr";

/**
 * Bio section — Server Component
 *
 * Design: "Split Stage" — a full-bleed two-tone layout that leverages
 * the photo's dark background as a feature, not a bug. The left panel
 * is a deep purple stage where the photo's dark edges dissolve naturally
 * into the background. The right panel is white with large editorial
 * typography. Below the split, three credential cards sit in a white
 * grid section.
 *
 * The split creates a dramatic visual break from the full-viewport Hero
 * and establishes Larissa's presence with editorial authority.
 */
export function Bio() {
  return (
    <section aria-label="Quem é Larissa Rovaron">

      {/* ── PART 1: Split stage — photo | intro ── */}
      <div className="relative overflow-hidden">

        {/* Full-bleed split background: left purple, right white */}
        <div aria-hidden="true" className="absolute inset-0">
          <div className="flex h-full">
            <div
              className="w-full md:w-[45%]"
              style={{
                background: "linear-gradient(135deg, #3a0275 0%, #5503af 40%, #4a02a0 100%)",
              }}
            />
            <div className="hidden md:block md:w-[55%] bg-white" />
          </div>
        </div>

        {/* Dot-grid texture on the purple side */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row md:items-stretch md:gap-0">

            {/* ── Left: Photo stage ── */}
            <div className="relative flex items-end justify-center md:w-[45%] md:-ml-8 lg:-ml-12">

              {/* Photo — anchored to the bottom, ~70% of wrapper height */}
              <div className="relative w-[70%] md:w-[80%] lg:w-[75%]">
                <Image
                  src="/larissa-frontal.png"
                  alt="Larissa Rovaron — professora de inglês"
                  width={440}
                  height={660}
                  priority
                  sizes="(max-width: 768px) 60vw, 380px"
                  className="relative z-10 w-full object-contain object-bottom"
                />

                {/* Floating credential badge */}
                <div
                  className="absolute bottom-12 right-0 z-20 rounded-xl bg-white px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.15)] md:-right-6"
                >
                  <p className="font-heading text-xs font-bold uppercase tracking-widest text-hint-purple">
                    English Teacher
                  </p>
                  <p className="font-heading text-3xl font-bold leading-none text-hint-purple">
                    13 anos
                  </p>
                </div>
              </div>
            </div>

            {/* ── Right: Intro text ── */}
            <div className="relative flex flex-col justify-center bg-white px-2 py-16 md:w-[55%] md:py-24 md:pl-12 lg:pl-16">

              {/* Eyebrow */}
              <p className="mb-6 font-heading text-sm font-bold uppercase tracking-[0.2em] text-hint-purple md:text-base">
                Conheça a professora
              </p>

              {/* Main heading */}
              <h2 className="font-heading text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
                Conheça Larissa Rovaron — a professora que vai transformar o seu
                inglês de verdade
              </h2>

              {/* Decorative rule */}
              <div
                aria-hidden="true"
                className="my-8 flex items-center gap-3 md:my-10"
              >
                <div className="h-px w-16 bg-hint-purple/20" />
                <div className="h-1.5 w-1.5 rotate-45 bg-hint-purple/40" />
                <div className="h-px w-16 bg-hint-purple/20" />
              </div>

              {/* Intro paragraphs */}
              <div className="flex flex-col gap-5">
                <p className="text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
                  Larissa Rovaron não ensina inglês.
                </p>
                <p className="text-lg leading-relaxed text-foreground md:text-xl">
                  Ela forma pessoas confiantes para se comunicar em inglês — com
                  pronúncia clara, segurança e naturalidade real.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Brasileira, 45 anos, fala inglês desde os 9 anos de idade,
                  quando começou a aprender em casa com a própria mãe, também
                  professora de inglês.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Aos 16 anos, a fluência deixou de ser apenas estudo e virou
                  rotina diária ao conviver com um americano — também English
                  teacher para brasileiros.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Falar inglês em casa, no trabalho e no dia a dia por décadas faz
                  dela praticamente uma nativa — com algo que poucos cursos
                  oferecem: inglês real, funcional e aplicável.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── PART 2: Credential cards on light gray ── */}
      <div className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">

            {/* Formação Acadêmica */}
            <CredentialCard
              icon={<GraduationCap weight="duotone" size={28} />}
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
              icon={<GlobeHemisphereWest weight="duotone" size={28} />}
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
              icon={<Briefcase weight="duotone" size={28} />}
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
        className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-hint-purple/10 text-hint-purple"
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-heading mb-5 text-xl font-bold text-foreground sm:text-2xl">
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

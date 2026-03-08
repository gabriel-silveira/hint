import { MicrophoneSlash, ChatSlash, ShieldWarning } from "@phosphor-icons/react/dist/ssr";

/**
 * Reframing section — Server Component
 *
 * Narrative arc: validate frustration → redirect blame to method → open hope
 *
 * Layout strategy:
 *   - bg-secondary (#F7F7FA) alternates from Bio's white background
 *   - Pain points rendered as diagnostic "signal cards" with a left-rail motif
 *     consistent with the credential cards in Bio
 *   - Transition copy is typeset with deliberate isolation: each line breathes
 *     alone, rhythm built through spacing rather than decoration
 *   - Key phrase "Foi excesso de método errado." breaks the grid: enlarged,
 *     bold, hint-purple, separated by a fine rule — the visual pivot of the section
 *   - "Precisa de…" trio builds momentum via stacked left-indented lines
 *     with a progressive left-border that thickens slightly
 *
 * Accessibility:
 *   - <section> with aria-label
 *   - Pain point icons are aria-hidden; text carries full meaning
 *   - Semantic paragraph structure throughout
 */
export function Reframing() {
  return (
    <section
      aria-label="Reenquadramento"
      className="bg-secondary py-20 md:py-28"
    >
      <div className="container">
        {/* ── Max-width prose column centered ── */}
        <div className="mx-auto max-w-2xl">

          {/* ── Eyebrow label ── */}
          <p className="mb-6 font-heading text-xs font-bold uppercase tracking-[0.22em] text-hint-purple">
            Antes de continuar
          </p>

          {/* ── H2: the reframe headline ── */}
          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">
            O problema não é você. É o jeito que te ensinaram.
          </h2>

          {/* ── Intro line ── */}
          <p className="mt-8 text-lg leading-relaxed text-foreground">
            Se você já tentou aprender inglês antes e sentiu que:
          </p>

          {/* ── Pain point cards ── */}
          <ul className="mt-6 flex flex-col gap-4" role="list">
            <PainPoint
              icon={<MicrophoneSlash weight="duotone" size={22} />}
              text="Estudou por anos… mas ainda trava na hora de falar"
            />
            <PainPoint
              icon={<ChatSlash weight="duotone" size={22} />}
              text="Entende quando lê… mas não consegue formar frases com naturalidade"
            />
            <PainPoint
              icon={<ShieldWarning weight="duotone" size={22} />}
              text="Sabe regras gramaticais… mas sente insegurança ao se comunicar"
            />
          </ul>

          {/* ── Divider ── */}
          <div
            aria-hidden="true"
            className="my-12 h-px w-16 rounded-full bg-hint-purple/20"
          />

          {/* ── Transition: Respire ── */}
          <p className="mb-8 font-heading text-2xl font-semibold italic text-foreground">
            Respire.
          </p>

          {/* ── Cause statement ── */}
          <p className="leading-relaxed text-foreground">
            O problema nunca foi falta de capacidade.
          </p>

          {/* ── Key phrase — the visual pivot ── */}
          <div className="mt-4 mb-2">
            <p
              className="font-heading text-2xl font-bold leading-tight text-hint-purple md:text-3xl"
            >
              Foi excesso de método errado.
            </p>
            {/* Fine rule beneath the key phrase */}
            <div
              aria-hidden="true"
              className="mt-3 h-px w-full rounded-full bg-hint-purple/15"
            />
          </div>

          {/* ── Explanation paragraphs ── */}
          <div className="mt-8 flex flex-col gap-4">
            <p className="leading-relaxed text-muted-foreground">
              A maioria dos cursos ensina inglês como se fosse uma matéria
              escolar — cheia de regras e exercícios mecânicos.
            </p>
            <p className="leading-relaxed text-foreground">
              Mas ninguém aprende a falar estudando regra.
            </p>
            <p className="font-heading text-lg font-semibold leading-relaxed text-foreground">
              Aprende usando.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              E quase ninguém foi ensinado a usar o inglês com segurança real.
            </p>
          </div>

          {/* ── Spacer ── */}
          <div aria-hidden="true" className="mt-10 mb-2" />

          {/* ── Pivot to solution ── */}
          <p className="font-heading text-lg font-semibold text-foreground">
            Você não precisa de mais gramática.
          </p>

          {/* ── "Precisa de…" trio — stacked with progressive left-border ── */}
          <div className="mt-8 flex flex-col gap-0">
            <NeedLine
              weight="light"
              text="Precisa de clareza."
            />
            <NeedLine
              weight="medium"
              text="Precisa de direção."
            />
            <NeedLine
              weight="bold"
              text="Precisa de um método que destrave sua pronúncia e sua confiança ao mesmo tempo."
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PainPoint — diagnostic card with left-rail motif
   Mirrors the left-border pattern from Bio's CredentialCard
───────────────────────────────────────────── */
interface PainPointProps {
  icon: React.ReactNode;
  text: string;
}

function PainPoint({ icon, text }: PainPointProps) {
  return (
    <li className="flex items-start gap-4 rounded-xl border border-border bg-white px-5 py-4 shadow-sm">
      {/* Left accent rule */}
      <div
        aria-hidden="true"
        className="mt-0.5 w-0.5 self-stretch shrink-0 rounded-full bg-hint-purple/30"
      />
      {/* Icon */}
      <div
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-hint-purple/10 text-hint-purple"
      >
        {icon}
      </div>
      {/* Text */}
      <p className="leading-relaxed text-foreground">{text}</p>
    </li>
  );
}

/* ─────────────────────────────────────────────
   NeedLine — one "Precisa de…" line with a growing
   left-border accent that builds visual momentum
───────────────────────────────────────────── */
type NeedLineWeight = "light" | "medium" | "bold";

interface NeedLineProps {
  weight: NeedLineWeight;
  text: string;
}

const needLineStyles: Record<
  NeedLineWeight,
  { border: string; text: string; font: string }
> = {
  light: {
    border: "border-l-2 border-hint-purple/25",
    text: "text-muted-foreground",
    font: "font-normal",
  },
  medium: {
    border: "border-l-[3px] border-hint-purple/50",
    text: "text-foreground",
    font: "font-medium",
  },
  bold: {
    border: "border-l-4 border-hint-purple",
    text: "text-foreground",
    font: "font-heading font-bold",
  },
};

function NeedLine({ weight, text }: NeedLineProps) {
  const styles = needLineStyles[weight];
  return (
    <p
      className={`py-3 pl-5 leading-relaxed ${styles.border} ${styles.text} ${styles.font}`}
    >
      {text}
    </p>
  );
}

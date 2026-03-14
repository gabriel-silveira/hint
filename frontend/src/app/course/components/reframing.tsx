import { MicrophoneSlash, ChatSlash, ShieldWarning } from "@phosphor-icons/react/dist/ssr";

/**
 * Reframing section — Server Component
 *
 * Narrative arc: validate frustration → redirect blame to method → open hope
 *
 * Design: dark purple stage with a diagonal-line micro-texture (distinct from
 * Hero's dot-grid and Proof's crosshatch). Frosted-glass pain-point cards
 * float over the dark field. The key phrase pivots to hint-green, linking
 * the emotional turning point to the CTA color. NeedLine trio uses
 * progressive white→green left-borders to build momentum toward the solution.
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
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background:
          "linear-gradient(160deg, #3a0275 0%, #5503af 45%, #4a02a0 100%)",
      }}
    >
      {/* Radial bloom — warmer violet toward bottom-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 90%, rgba(139,0,255,0.22) 0%, transparent 70%)",
        }}
      />

      {/* Diagonal-line micro-texture — distinct from Hero dot-grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 16px)",
        }}
      />

      <div className="container relative z-10">
        {/* ── Max-width prose column centered ── */}
        <div className="mx-auto max-w-3xl">

          {/* ── Eyebrow label ── */}
          <p className="mb-6 font-heading text-xs font-bold uppercase tracking-[0.22em] text-white/75">
            Antes de continuar
          </p>

          {/* ── H2: the reframe headline ── */}
          <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-[2.1rem]">
            O problema não é você. É o jeito que te ensinaram.
          </h2>

          {/* ── Intro line ── */}
          <p className="mt-8 text-lg leading-relaxed text-white/85">
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
            className="my-12 h-px w-16 rounded-full bg-white/20"
          />

          {/* ── Transition: Respire ── */}
          <p className="mb-8 font-heading text-2xl font-semibold italic text-white">
            Respire.
          </p>

          {/* ── Cause statement ── */}
          <p className="leading-relaxed text-white/85">
            O problema nunca foi falta de capacidade.
          </p>

          {/* ── Key phrase — the visual pivot ── */}
          <div className="mt-4 mb-2">
            <p
              className="font-heading text-2xl font-bold leading-tight text-amber-300 md:text-3xl"
            >
              Foi excesso de método errado.
            </p>
            {/* Fine rule beneath the key phrase */}
            <div
              aria-hidden="true"
              className="mt-3 h-px w-full rounded-full bg-amber-300/30"
            />
          </div>

          {/* ── Explanation paragraphs ── */}
          <div className="mt-8 flex flex-col gap-4">
            <p className="leading-relaxed text-white/75">
              A maioria dos cursos ensina inglês como se fosse uma matéria
              escolar — cheia de regras e exercícios mecânicos.
            </p>
            <p className="leading-relaxed text-white/85">
              Mas ninguém aprende a falar estudando regra.
            </p>
            <p className="font-heading text-lg font-semibold leading-relaxed text-white">
              Aprende usando.
            </p>
            <p className="leading-relaxed text-white/75">
              E quase ninguém foi ensinado a usar o inglês com segurança real.
            </p>
          </div>

          {/* ── Spacer ── */}
          <div aria-hidden="true" className="mt-10 mb-2" />

          {/* ── Pivot to solution ── */}
          <p className="font-heading text-lg font-semibold text-white">
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
   PainPoint — frosted-glass diagnostic card
   Dark-theme adaptation: translucent white panel over purple
───────────────────────────────────────────── */
interface PainPointProps {
  icon: React.ReactNode;
  text: string;
}

function PainPoint({ icon, text }: PainPointProps) {
  return (
    <li className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.07] px-5 py-4 backdrop-blur-sm">
      {/* Left accent rule */}
      <div
        aria-hidden="true"
        className="w-0.5 self-stretch shrink-0 rounded-full bg-white/25"
      />
      {/* Icon */}
      <div
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/80"
      >
        {icon}
      </div>
      {/* Text */}
      <p className="leading-relaxed text-white/90">{text}</p>
    </li>
  );
}

/* ─────────────────────────────────────────────
   NeedLine — progressive left-border accent
   Dark-theme: white → green progression
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
    border: "border-l-2 border-white/20",
    text: "text-white/75",
    font: "font-normal",
  },
  medium: {
    border: "border-l-[3px] border-white/40",
    text: "text-white/85",
    font: "font-medium",
  },
  bold: {
    border: "border-l-4 border-amber-300",
    text: "text-amber-300",
    font: "font-heading text-lg font-bold md:text-xl",
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

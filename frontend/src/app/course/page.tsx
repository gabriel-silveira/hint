import type { Metadata } from "next";
import { ThemeSetter } from "./components/theme-setter";
import { Hero } from "./components/hero";
import { Bio } from "./components/bio";
import { Credentials } from "./components/credentials";
import { Reframing } from "./components/reframing";
import { Method } from "./components/method";
import { Proof } from "./components/proof";
import { Testimonials } from "./components/testimonials";
import { Offer } from "./components/offer";

export const metadata: Metadata = {
  title: "O Curso | HINT",
  description:
    "Destrave seu inglês de uma vez por todas com o Método Larissa Rovaron. Videoaulas, exercícios e mentoria no WhatsApp por apenas R$ 39,90.",
  openGraph: {
    title: "Destrave seu inglês de uma vez por todas | HINT",
    description:
      "Método estruturado com suporte real e acompanhamento humano.",
    images: [{ url: "/larissa-frontal.png" }],
  },
};

export default function CoursePage() {
  return (
    <main className="min-h-screen">
      <ThemeSetter />
      <Hero />
      <Bio />
      <Credentials />
      <Reframing />
      <Method />
      <Proof />
      <Testimonials />
      <Offer />
    </main>
  );
}

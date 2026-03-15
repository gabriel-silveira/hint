import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a HINT Language. Atendimento via WhatsApp, e-mail e telefone em São Paulo.",
  openGraph: {
    title: "Contato",
    description:
      "Entre em contato com a HINT Language. Atendimento via WhatsApp, e-mail e telefone em São Paulo.",
    images: [{ url: "/hint-logo-icon.png" }],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}

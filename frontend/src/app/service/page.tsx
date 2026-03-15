import type { Metadata } from "next";
import { ServiceContent } from "./service-content";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Tradução, legendagem, dublagem, voice over, interpretação, consultoria e treinamentos em inglês. Soluções sob medida para empresas e profissionais.",
  openGraph: {
    title: "Serviços",
    description:
      "Tradução, legendagem, dublagem, voice over, interpretação, consultoria e treinamentos em inglês. Soluções sob medida para empresas e profissionais.",
    images: [{ url: "/hint-logo-icon.png" }],
  },
};

export default function ServicePage() {
  return <ServiceContent />;
}

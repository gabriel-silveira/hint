import type { Metadata } from "next";
import { HomeContent } from "./home-content";

export const metadata: Metadata = {
  openGraph: {
    images: [{ url: "/hint-logo-icon.png" }],
  },
};

export default function AboutPage() {
  return <HomeContent />;
}

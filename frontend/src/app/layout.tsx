import type { Metadata } from "next";
import { Source_Sans_3, Roboto } from "next/font/google";
import "./globals.css";
import { HeaderThemeProvider } from "@/contexts/header-theme-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-heading",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hintlanguage.com"),
  title: {
    template: "%s | HINT Language",
    default: "HINT Language — Serviços Profissionais de Inglês",
  },
  description:
    "Tradução, legendagem, dublagem, treinamentos e coaching em inglês. Soluções linguísticas profissionais em São Paulo.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "HINT Language — Serviços Profissionais de Inglês",
    description:
      "Tradução, legendagem, dublagem, treinamentos e coaching em inglês. Soluções linguísticas profissionais em São Paulo.",
    images: [{ url: "/hint-logo-icon.png" }],
    locale: "pt_BR",
    type: "website",
    siteName: "HINT Language",
  },
  twitter: {
    card: "summary_large_image",
    title: "HINT Language — Serviços Profissionais de Inglês",
    description:
      "Tradução, legendagem, dublagem, treinamentos e coaching em inglês. Soluções linguísticas profissionais em São Paulo.",
    images: ["/hint-logo-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sourceSans3.variable} ${roboto.variable}`}>
      <body className="font-body antialiased">
        <HeaderThemeProvider>
          <Header />
          {children}
          <Footer />
        </HeaderThemeProvider>
      </body>
    </html>
  );
}

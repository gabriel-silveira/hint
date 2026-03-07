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
  title: "HINT",
  description: "HINT Language Services",
  icons: {
    icon: "/favicon.ico",
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

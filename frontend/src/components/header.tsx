"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useHeaderTheme } from "@/contexts/header-theme-context";
import { MobileNav } from "@/components/mobile-nav";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/about", label: "Quem Somos" },
  { href: "/course", label: "O Curso" },
  { href: "/service", label: "Serviço" },
  { href: "/contact", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();
  const { theme } = useHeaderTheme();

  const isLight = theme === "light";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link href="/about" className="flex items-center">
          <Image
            src="/hint-logo-icon.png"
            alt="HINT"
            width={40}
            height={40}
            className="rounded-md"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Menu principal">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:opacity-80",
                  isLight ? "text-white" : "text-foreground",
                  isActive && "text-primary font-bold"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Nav */}
        <MobileNav />
      </div>
    </header>
  );
}

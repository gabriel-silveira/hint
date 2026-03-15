"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
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

  const isLandingPage = pathname === "/course";
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!isLandingPage) {
      setVisible(true);
      setScrolled(false);
      return;
    }

    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrollingUp = currentY < lastScrollY.current;
      const isAtTop = currentY < 50;

      setVisible(isScrollingUp || isAtTop);
      setScrolled(!isAtTop);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLandingPage]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isLandingPage && !visible && "-translate-y-full",
        isLandingPage && scrolled && "bg-black/50 backdrop-blur-lg shadow-lg"
      )}
    >
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
                  "text-sm font-medium transition-colors rounded-md px-3 py-1.5",
                  isActive
                    ? "bg-primary text-white"
                    : isLight
                      ? "text-white/80 hover:bg-primary hover:text-white"
                      : "text-foreground/80 hover:bg-primary hover:text-white"
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

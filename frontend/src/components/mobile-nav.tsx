"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List } from "@phosphor-icons/react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useHeaderTheme } from "@/contexts/header-theme-context";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Quem Somos" },
  { href: "/course", label: "O Curso" },
  { href: "/service", label: "Serviço" },
  { href: "/contact", label: "Contato" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { theme } = useHeaderTheme();

  const isLight = theme === "light";

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            className={cn(
              "p-2 transition-colors",
              isLight ? "text-white" : "text-foreground"
            )}
            aria-label="Abrir menu de navegação"
          >
            <List size={24} />
          </button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle className="font-heading">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-8" aria-label="Menu de navegação mobile">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors py-2 px-3 rounded-md",
                    isActive
                      ? "bg-primary text-white"
                      : "text-foreground hover:bg-primary hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

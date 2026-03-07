"use client";

import { useEffect } from "react";
import { useHeaderTheme } from "@/contexts/header-theme-context";

export default function AboutPage() {
  const { setTheme } = useHeaderTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return <main className="min-h-screen" />;
}

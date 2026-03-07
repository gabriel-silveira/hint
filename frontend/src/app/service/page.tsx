"use client";

import { useEffect } from "react";
import { useHeaderTheme } from "@/contexts/header-theme-context";

export default function ServicePage() {
  const { setTheme } = useHeaderTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return <main className="min-h-screen" />;
}

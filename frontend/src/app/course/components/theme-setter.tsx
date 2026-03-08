"use client";

import { useEffect } from "react";
import { useHeaderTheme } from "@/contexts/header-theme-context";

export function ThemeSetter() {
  const { setTheme } = useHeaderTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return null;
}

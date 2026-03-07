"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type HeaderTheme = "light" | "dark";

interface HeaderThemeContextType {
  theme: HeaderTheme;
  setTheme: (theme: HeaderTheme) => void;
}

const HeaderThemeContext = createContext<HeaderThemeContextType | undefined>(undefined);

export function HeaderThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<HeaderTheme>("dark");

  const setTheme = useCallback((newTheme: HeaderTheme) => {
    setThemeState(newTheme);
  }, []);

  return (
    <HeaderThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </HeaderThemeContext.Provider>
  );
}

export function useHeaderTheme() {
  const context = useContext(HeaderThemeContext);
  if (context === undefined) {
    throw new Error("useHeaderTheme must be used within a HeaderThemeProvider");
  }
  return context;
}

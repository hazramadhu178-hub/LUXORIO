// Theme support: 'light' (default resort mint/cream), 'warm' (golden sand / terracotta luxury), 'dark' (deep charcoal & forest night)
import { useEffect, useState } from "react";

// A Theme is "light", "warm" or "dark".

const THEME_KEY = "luxorio-theme";

export function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "warm" || saved === "dark") return saved;
  return "light";
}

export function useTheme() {
  const [theme, setThemeState] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // localStorage may be disabled in some environments
    }
  }, [theme]);

  const setTheme = (next) => {
    setThemeState(next);
  };

  return { theme, setTheme };
}

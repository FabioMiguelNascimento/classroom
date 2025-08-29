import { Theme } from "@/types/theme.type";
import { useCallback, useEffect, useState } from "react";

function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

export function useTheme(): { theme: Theme; setTheme: (t: Theme) => void; toggleTheme: () => void } {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    try {
      const stored = window.localStorage.getItem("theme");
      if (isTheme(stored)) return stored;
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    } catch (e) {
    }
    return "light";
  });

  useEffect(() => {
    try {
      window.localStorage.setItem("theme", theme);
    } catch (e) {
    }

    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
      if (theme === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme" && isTheme(e.newValue)) {
        setTheme(e.newValue as Theme);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setThemeSafe = useCallback((t: Theme) => {
    if (!isTheme(t)) return;
    setTheme(t);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, setTheme: setThemeSafe, toggleTheme };
}

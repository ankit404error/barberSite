"use client";

import React, { useEffect } from "react";
import { useApp } from "@/contexts/AppContext";
import { applyTheme } from "@/utils/themeUtils";

/**
 * Maps custom theme to Shadcn UI CSS variables
 * @param {Object} theme - Custom theme object
 * @returns {Object} Object with Shadcn UI CSS variables
 */
function mapToShadcnTheme(theme) {
  if (!theme) return {};

  return {
    // Core colors
    "--background": theme.background || "#ffffff",
    "--foreground": theme.foreground || "#000000",
    "--card": theme.card || "#ffffff",
    "--card-foreground": theme.card_foreground || "#000000",
    "--popover": theme.card || "#ffffff",
    "--popover-foreground": theme.card_foreground || "#000000",
    "--primary": theme.primary || "#000000",
    "--primary-foreground": theme.background || "#ffffff",
    "--secondary": theme.secondary || "#f1f5f9",
    "--secondary-foreground": theme.foreground || "#000000",
    "--muted": theme.muted || "#f1f5f9",
    "--muted-foreground": theme.foreground || "#64748b",
    "--accent": theme.accent || "#f1f5f9",
    "--accent-foreground": theme.foreground || "#000000",
    "--destructive": theme.error || "#ff0000",
    "--destructive-foreground": theme.background || "#ffffff",
    "--border": theme.border || "#e2e8f0",
    "--input": theme.border || "#e2e8f0",
    "--ring": theme.primary || "#2563eb",

    // UI settings
    "--radius": "0.5rem",
  };
}

/**
 * Maps custom theme to Tailwind CSS variables
 * @param {Object} theme - Custom theme object
 * @returns {Object} Object with Tailwind CSS variables
 */
function mapToTailwindTheme(theme) {
  if (!theme) return {};

  return {
    // Direct mapping from schema structure
    "--tw-color-primary": theme.primary || "#3b82f6",
    "--tw-color-primary-hover": theme.primary_hover || "#2563eb",
    "--tw-color-secondary": theme.secondary || "#10b981",
    "--tw-color-secondary-hover": theme.secondary_hover || "#059669",
    "--tw-color-accent": theme.accent || "#f59e0b",
    "--tw-color-accent-hover": theme.accent_hover || "#d97706",
    "--tw-color-background": theme.background || "#ffffff",
    "--tw-color-foreground": theme.foreground || "#111827",
    "--tw-color-muted": theme.muted || "#f3f4f6",
    "--tw-color-border": theme.border || "#e5e7eb",
    "--tw-color-card": theme.card || "#ffffff",
    "--tw-color-card-foreground": theme.card_foreground || "#111827",
    "--tw-color-error": theme.error || "#ef4444",
    "--tw-color-success": theme.success || "#10b981",
    "--tw-color-footer": theme.footer || "#1F2937",
    "--tw-color-footer-text": theme.footer_text || "#F9FAFB",
    "--tw-color-overlay-dark": theme.overlay_dark || "rgba(0, 0, 0, 0.7)",
    "--tw-color-overlay-light": theme.overlay_light || "rgba(255, 255, 255, 0.7)",
    "--tw-color-overlay-medium": theme.overlay_medium || "rgba(0, 0, 0, 0.5)",
  };
}

/**
 * A component that applies the current theme from the AppContext
 * to the document element with support for multiple UI frameworks
 */
const ThemeProvider = ({ children }) => {
  const { theme, siteConfig } = useApp();
  // Get the current theme mode from the context
  const themeMode = siteConfig?.config?.theme?.current || "default";

  // Log theme information for debugging

  useEffect(() => {
    if (theme && typeof window !== "undefined") {
      let themeVars = {};

      themeVars = { ...themeVars, ...mapToShadcnTheme(theme) };
      themeVars = { ...themeVars, ...mapToTailwindTheme(theme) };

      // Combine all theme variables
      const combinedTheme = {
        ...theme,
        ...themeVars,
      };

      // Apply the theme to the document element
      applyTheme(document.documentElement, combinedTheme);

      // Update data-theme attribute for shadcn
      document.documentElement.setAttribute("data-theme", themeMode);

      // Update class for dark mode
      if (themeMode === "dark" || themeMode === "v1") {
        // v1 is our dark theme
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      // Store the current theme mode in localStorage for persistence
      localStorage.setItem('app-theme', themeMode);

      // For debugging
    }
  }, [theme, themeMode, siteConfig]);

  return <>{children}</>;
};

export default ThemeProvider;

"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({
  theme: null,
  siteConfig: null,
  setTheme: () => {},
});

export const AppProvider = ({ children, initialSite, initialThemes }) => {
  // State for the current site configuration and themes
  const [siteConfig, setSiteConfig] = useState(initialSite || null);
  const [themes, setThemes] = useState(initialThemes || []);

  // State for the current theme
  const [activeTheme, setActiveTheme] = useState(null);

  // Effect to initialize the theme when the component mounts
  useEffect(() => {
    if (!siteConfig) return;

    // Try to get the saved theme ID from localStorage
    const savedThemeId = localStorage.getItem("site-theme-id");

    // Find the theme in the available themes or use the first one as default
    let themeToUse = themes.find((t) => t.id === savedThemeId);

    // If no saved theme or theme not found, use the first available theme
    if (!themeToUse && themes.length > 0) {
      themeToUse = themes[0];
    }

    setActiveTheme(themeToUse);
  }, [siteConfig, themes]);

  // Function to set the active theme by ID
  const setTheme = (themeId) => {
    const themeToUse = themes.find((t) => t.id === themeId);

    if (themeToUse) {
      setActiveTheme(themeToUse);
      localStorage.setItem("site-theme-id", themeId);
    }
  };

  // The value to provide in the context
  const contextValue = {
    theme: activeTheme,
    siteConfig,
    themes,
    setTheme,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

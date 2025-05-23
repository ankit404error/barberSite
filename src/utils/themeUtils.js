"use client";

/**
 * Generate CSS variables from theme object
 * @param {Object} theme - Theme object with color values
 * @returns {Object} CSS variables object
 */
export function generateCssVars(theme) {
  if (!theme || typeof theme !== "object") {
    return {};
  }
  
  const cssVars = {};
  
  Object.entries(theme).forEach(([key, value]) => {
    if (value && typeof value === 'string') {
      // Convert snake_case to kebab-case for CSS variables
      const cssKey = key.replace(/_/g, '-');
      cssVars[`--${cssKey}`] = value;
    }
  });
  
  return cssVars;
}

/**
 * Apply theme to an element's style
 * @param {HTMLElement} element - Element to apply theme to
 * @param {Object} theme - Theme object with color values
 */
export function applyTheme(element, theme) {
  if (!element || !theme || typeof theme !== "object") {
    return;
  }
  
  const cssVars = generateCssVars(theme);
  
  Object.entries(cssVars).forEach(([key, value]) => {
    element.style.setProperty(key, value);
  });
}

/**
 * Get CSS color value with fallback
 * @param {Object} theme - Theme object
 * @param {String} key - Color key to get
 * @param {String} fallback - Fallback color
 * @returns {String} CSS color value
 */
export function getThemeColor(theme, key, fallback = "#000000") {
  if (!theme || !key) {
    return fallback;
  }
  
  return theme[key] || fallback;
}

/**
 * Get hover variant of a color
 * @param {Object} theme - Theme object
 * @param {String} baseKey - Base color key (e.g., 'primary')
 * @returns {String} Hover color or fallback
 */
export function getHoverColor(theme, baseKey) {
  if (!theme || !baseKey) {
    return null;
  }
  
  // Check for direct hover variant in schema (e.g., primary_hover)
  const hoverKey = `${baseKey}_hover`;
  if (theme[hoverKey]) {
    return theme[hoverKey];
  }
  
  // Fallback to base color
  return theme[baseKey] || null;
}

/**
 * Generate a CSS class with theme colors
 * @param {Object} theme - Theme object
 * @param {String} baseClass - Base CSS class
 * @param {Object} colorMap - Map of CSS properties to theme keys
 * @returns {String} CSS class with theme colors
 */
export function generateThemedClass(theme, baseClass, colorMap = {}) {
  if (!theme || !baseClass) {
    return baseClass;
  }
  
  const style = {};
  
  Object.entries(colorMap).forEach(([cssProperty, themeKey]) => {
    style[cssProperty] = getThemeColor(theme, themeKey);
  });
  
  // This would normally be handled by a CSS-in-JS library
  // For now, we'll return the base class and the style object
  return { className: baseClass, style };
}

/**
 * Get overlay color based on variant
 * @param {Object} theme - Theme object
 * @param {String} variant - Overlay variant (dark, light, medium)
 * @returns {String} Overlay color value
 */
export function getOverlayColor(theme, variant = 'medium') {
  if (!theme) {
    return 'rgba(0, 0, 0, 0.5)';
  }
  
  const key = `overlay_${variant}`;
  return theme[key] || 
    (variant === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 
     variant === 'light' ? 'rgba(255, 255, 255, 0.7)' : 
     'rgba(0, 0, 0, 0.5)');
}
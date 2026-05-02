/** localStorage key for site theme preference (used by inline script + ThemeProvider). */
export const THEME_STORAGE_KEY = "sga-theme";

export type Theme = "light" | "dark";

/** Default on first visit until the user changes it via the theme toggle (stored under {@link THEME_STORAGE_KEY}). */
export const DEFAULT_THEME: Theme = "light";

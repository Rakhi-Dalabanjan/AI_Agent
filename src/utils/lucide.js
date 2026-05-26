/** Render all [data-lucide] icons (uses CDN script from index.html, same as legacy site). */
export function refreshLucideIcons() {
  if (
    typeof window !== "undefined" &&
    window.lucide &&
    typeof window.lucide.createIcons === "function"
  ) {
    // The CDN script can sometimes get into a recursive loop with React's rendering.
    // We can break the loop by temporarily replacing the function while it runs.
    const originalCreateIcons = window.lucide.createIcons;
    window.lucide.createIcons = () => {}; // Prevent recursion
    try {
      originalCreateIcons();
    } finally {
      window.lucide.createIcons = originalCreateIcons; // Restore it
    }
  }
}


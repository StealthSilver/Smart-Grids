const NAVBAR_HEIGHT_CSS_VAR = "--navbar-height";

function getNavbarHeight() {
  if (typeof window === "undefined") return 0;

  const computed = getComputedStyle(document.documentElement)
    .getPropertyValue(NAVBAR_HEIGHT_CSS_VAR)
    .trim();
  const parsed = Number.parseFloat(computed);

  return Number.isFinite(parsed) ? parsed : 0;
}

export function scrollToSectionAligned(
  sectionId: string,
  options: { updateHash?: boolean } = {},
) {
  if (typeof window === "undefined") return;

  const target = document.getElementById(sectionId);
  if (!target) {
    window.location.href = `/#${sectionId}`;
    return;
  }

  const navbarHeight = getNavbarHeight();
  const absoluteTop = window.scrollY + target.getBoundingClientRect().top;
  const top = Math.max(0, absoluteTop - navbarHeight);

  window.scrollTo({ top, behavior: "smooth" });

  if (options.updateHash !== false && window.history.replaceState) {
    window.history.replaceState(null, "", `/#${sectionId}`);
  }
}

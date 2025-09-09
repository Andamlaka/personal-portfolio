// src/utils/theme.js
export function getInitialDark() {
  // 1. check saved preference
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') return true;
  if (saved === 'light') return false;
  // 2. fallback to system preference
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function applyTheme(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

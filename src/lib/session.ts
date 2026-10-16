export const sessionKeys = {
  opened: 'ahmed-alaa-2026-opened',
  musicWanted: 'ahmed-alaa-2026-music-wanted'
} as const;

export function readSessionBoolean(key: string, fallback = false) {
  try {
    const value = window.sessionStorage.getItem(key);
    return value === null ? fallback : value === 'true';
  } catch {
    return fallback;
  }
}

export function writeSessionBoolean(key: string, value: boolean) {
  try {
    window.sessionStorage.setItem(key, String(value));
  } catch {
    // The invitation still works if storage is unavailable.
  }
}

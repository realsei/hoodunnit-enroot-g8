import { useSyncExternalStore } from 'react'

const KEY = 'hoodunnit'

export type Found = Record<string, string>

function read() {
  return localStorage.getItem(KEY) || '{}'
}

function subscribe(cb: () => void) {
  window.addEventListener(KEY, cb)
  window.addEventListener('storage', cb)
  return () => {
    window.removeEventListener(KEY, cb)
    window.removeEventListener('storage', cb)
  }
}

export function useFound(): Found {
  const raw = useSyncExternalStore(subscribe, read, () => '{}')
  try {
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

export function markFound(slug: string, letter: string) {
  const found = JSON.parse(read())
  if (found[slug] === letter) return
  found[slug] = letter
  localStorage.setItem(KEY, JSON.stringify(found))
  window.dispatchEvent(new Event(KEY))
}

export function clearFound() {
  localStorage.removeItem(KEY)
  window.dispatchEvent(new Event(KEY))
}

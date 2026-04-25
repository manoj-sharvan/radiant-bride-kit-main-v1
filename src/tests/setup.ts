import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// Runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})

// Mock IntersectionObserver for framer-motion useInView
class IntersectionObserverMock {
  root: Element | Document | null = null;
  rootMargin: string = '';
  thresholds: ReadonlyArray<number> = [];
  disconnect = vi.fn()
  observe = vi.fn()
  takeRecords = vi.fn()
  unobserve = vi.fn()
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)
window.IntersectionObserver = IntersectionObserverMock as any

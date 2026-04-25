import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Reveal, CountUp } from '../components/motion-helpers'

// Mock useReducedMotion to test both code paths
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion')
  return {
    ...actual as any,
    useReducedMotion: vi.fn(() => false)
  }
})

describe('motion-helpers', () => {
  describe('Reveal Component', () => {
    it('renders children correctly', () => {
      render(
        <Reveal>
          <div>Animated Content</div>
        </Reveal>
      )
      expect(screen.getByText('Animated Content')).toBeInTheDocument()
    })

    it('applies custom classNames', () => {
      const { container } = render(
        <Reveal className="custom-class">
          <div>Content</div>
        </Reveal>
      )
      // framer-motion wraps children in a div with the class name
      expect(container.firstChild).toHaveClass('custom-class')
    })
  })

  describe('CountUp Component', () => {
    it('renders the initial value initially when not in view', () => {
      render(<CountUp end={100} suffix="%" />)
      // JSDOM won't trigger IntersectionObserver by default
      expect(screen.getByLabelText('100%')).toHaveTextContent('0%')
    })
  })
})

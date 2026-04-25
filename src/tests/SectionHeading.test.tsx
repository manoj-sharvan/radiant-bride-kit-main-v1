import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SectionHeading } from '../components/SectionHeading'

describe('SectionHeading Component', () => {
  it('renders the title correctly', () => {
    render(<SectionHeading title="Test Title" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders the eyebrow text when provided', () => {
    render(<SectionHeading title="Test Title" eyebrow="Eyebrow Text" />)
    expect(screen.getByText('Eyebrow Text')).toBeInTheDocument()
  })

  it('renders the subtitle when provided', () => {
    render(<SectionHeading title="Test Title" subtitle="Subtitle Text" />)
    expect(screen.getByText('Subtitle Text')).toBeInTheDocument()
  })

  it('uses the provided titleId for the heading element', () => {
    render(<SectionHeading title="Test Title" titleId="custom-id" />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveAttribute('id', 'custom-id')
  })

  it('renders as h1 when specified', () => {
    render(<SectionHeading title="Main Title" as="h1" />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Main Title')
  })
})

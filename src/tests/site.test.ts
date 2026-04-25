import { describe, it, expect } from 'vitest'
import { whatsappLink, telLink, absoluteUrl, SITE } from '../lib/site'

describe('Site Utilities', () => {
  describe('telLink', () => {
    it('should format a phone number correctly', () => {
      expect(telLink('1234567890')).toBe('tel:+911234567890')
    })

    it('should use the primary phone number by default', () => {
      expect(telLink()).toBe(`tel:+91${SITE.phonePrimary}`)
    })
  })

  describe('absoluteUrl', () => {
    it('should return the root url if no path is provided', () => {
      expect(absoluteUrl()).toBe(`${SITE.url}/`)
    })

    it('should append the path correctly with a leading slash', () => {
      expect(absoluteUrl('/about')).toBe(`${SITE.url}/about`)
    })

    it('should append the path correctly without a leading slash', () => {
      expect(absoluteUrl('about')).toBe(`${SITE.url}/about`)
    })
  })

  describe('whatsappLink', () => {
    it('should create a valid WhatsApp URL with default message', () => {
      const link = whatsappLink()
      expect(link).toContain(`https://wa.me/${SITE.whatsappNumber}?text=`)
      expect(link).toContain(encodeURIComponent("Hello Divya! I'd like to book your bridal makeup services."))
    })

    it('should correctly encode custom messages', () => {
      const msg = 'Hi, I want a trial!'
      const link = whatsappLink(msg)
      expect(link).toBe(`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`)
    })
    
    it('should trim and clamp long messages', () => {
      const longMsg = 'A'.repeat(600)
      const link = whatsappLink(longMsg)
      const decodedParam = decodeURIComponent(link.split('?text=')[1])
      expect(decodedParam.length).toBe(500) // MAX_WA_MSG
      expect(decodedParam).toBe('A'.repeat(500))
    })
  })
})

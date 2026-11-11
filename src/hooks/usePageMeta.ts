import { useEffect } from 'react'

interface PageMetaOptions {
  title: string
  description: string
  path?: string
  ogImage?: string
  ogType?: string
}

export function usePageMeta({
  title,
  description,
  path = '',
  ogImage = 'https://insicle.vercel.app/images/og-preview.png',
  ogType = 'website',
}: PageMetaOptions) {
  useEffect(() => {
    const fullTitle = `${title} | INSICLE`
    document.title = fullTitle

    const setMeta = (name: string, content: string, isProp = false) => {
      const selector = isProp ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        if (isProp) {
          el.setAttribute('property', name)
        } else {
          el.setAttribute('name', name)
        }
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', description)
    setMeta('og:title', fullTitle, true)
    setMeta('og:description', description, true)
    setMeta('og:url', `https://insicle.vercel.app${path}`, true)
    setMeta('og:type', ogType, true)
    setMeta('og:image', ogImage, true)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
    setMeta('twitter:image', ogImage)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `https://insicle.vercel.app${path}`)
  }, [title, description, path, ogImage, ogType])
}

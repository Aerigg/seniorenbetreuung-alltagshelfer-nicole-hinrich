import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.seniorenbetreuung-alltagshelfer.de'

  // Statische Routen
  const routes = [
    '',
    '/leistungen',
    '/ueber-mich',
    '/kontakt',
    '/impressum',
    '/datenschutz',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  return routes
}

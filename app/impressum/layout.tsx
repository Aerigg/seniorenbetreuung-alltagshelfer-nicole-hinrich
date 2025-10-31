import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Informationen von Seniorenbetreuung & Alltagshelfer Nicole Hinrich in Rostock.',
  openGraph: {
    title: 'Impressum | Seniorenbetreuung Nicole Hinrich',
    description: 'Impressum und rechtliche Informationen von Seniorenbetreuung & Alltagshelfer Nicole Hinrich.',
    url: 'https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/impressum',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

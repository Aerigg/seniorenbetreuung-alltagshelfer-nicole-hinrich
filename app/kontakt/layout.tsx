import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie Nicole Hinrich für professionelle Seniorenbetreuung und Alltagshilfe in Rostock. Telefonisch unter 0152 / 59229075 oder per E-Mail. Derzeit noch Kapazitäten frei.',
  openGraph: {
    title: 'Kontakt | Seniorenbetreuung Nicole Hinrich',
    description: 'Kontaktieren Sie Nicole Hinrich für professionelle Seniorenbetreuung und Alltagshilfe in Rostock.',
    url: 'https://www.seniorenbetreuung-alltagshelfer.de/kontakt',
  },
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

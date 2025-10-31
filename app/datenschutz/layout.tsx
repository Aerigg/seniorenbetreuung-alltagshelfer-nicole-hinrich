import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung von Seniorenbetreuung & Alltagshelfer Nicole Hinrich. Informationen zum Schutz Ihrer persönlichen Daten.',
  openGraph: {
    title: 'Datenschutz | Seniorenbetreuung Nicole Hinrich',
    description: 'Datenschutzerklärung von Seniorenbetreuung & Alltagshelfer Nicole Hinrich.',
    url: 'https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/datenschutz',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Unsere Leistungen',
  description: 'Entdecken Sie unser umfassendes Leistungsangebot: Seniorenbetreuung, Hauswirtschaftliche Hilfe, Kinderbetreuung und Gewerbliche Reinigung in Rostock. LAGuS-anerkannt für direkte Abrechnung mit Pflegekassen.',
  openGraph: {
    title: 'Unsere Leistungen | Seniorenbetreuung Nicole Hinrich',
    description: 'Entdecken Sie unser umfassendes Leistungsangebot: Seniorenbetreuung, Hauswirtschaftliche Hilfe, Kinderbetreuung und Gewerbliche Reinigung in Rostock.',
    url: 'https://www.seniorenbetreuung-alltagshelfer.de/leistungen',
  },
}

export default function LeistungenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

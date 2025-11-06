import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Über mich',
  description: 'Lernen Sie Nicole Hinrich kennen – Ihre LAGuS-anerkannte Alltagshelferin in Rostock. Mit Herz, Erfahrung und Engagement für Seniorenbetreuung, Hauswirtschaft und Kinderbetreuung.',
  alternates: {
    canonical: 'https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/ueber-mich',
  },
  openGraph: {
    title: 'Über mich | Seniorenbetreuung Nicole Hinrich',
    description: 'Lernen Sie Nicole Hinrich kennen – Ihre LAGuS-anerkannte Alltagshelferin in Rostock.',
    url: 'https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com/ueber-mich',
  },
}

export default function UeberMichLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

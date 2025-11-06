import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com'),
  title: {
    default: "Seniorenbetreuung & Alltagshelfer Nicole Hinrich | Rostock",
    template: "%s | Seniorenbetreuung Nicole Hinrich"
  },
  description: "Herzliche und professionelle Seniorenbetreuung, Alltagshilfe und Kinderbetreuung in Rostock und Umgebung. Mit Anerkennung vom LAGuS zur direkten Abrechnung mit Pflegekassen.",
  alternates: {
    canonical: 'https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com',
  },
  keywords: [
    "Seniorenbetreuung Rostock",
    "Alltagshelfer Rostock",
    "Pflegeunterstützung",
    "Kinderbetreuung Rostock",
    "Hauswirtschaftliche Hilfe",
    "LAGuS anerkannt",
    "Pflegekasse Abrechnung",
    "Entlastungsbetrag 131€",
    "Gewerbliche Reinigung Rostock",
    "Nicole Hinrich"
  ],
  authors: [{ name: "Nicole Hinrich" }],
  creator: "Nicole Hinrich",
  publisher: "Seniorenbetreuung Alltagshelfer Rostock",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.seniorenbetreuung-alltagshelfer-nicole-hinrich.com",
    siteName: "Seniorenbetreuung & Alltagshelfer Nicole Hinrich",
    title: "Seniorenbetreuung & Alltagshelfer Nicole Hinrich | Rostock",
    description: "Herzliche und professionelle Seniorenbetreuung, Alltagshilfe und Kinderbetreuung in Rostock und Umgebung. Mit Anerkennung vom LAGuS zur direkten Abrechnung mit Pflegekassen.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Seniorenbetreuung & Alltagshelfer Nicole Hinrich Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seniorenbetreuung & Alltagshelfer Nicole Hinrich | Rostock",
    description: "Herzliche und professionelle Seniorenbetreuung, Alltagshilfe und Kinderbetreuung in Rostock.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Hier können später Google Search Console und andere Verifikations-Codes hinzugefügt werden
    // google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo-small-notext.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/logo-small.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/logo-small-notext.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

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
  title: "Seniorenbetreuung & Alltagshelfer Nicole Hinrich | Rostock",
  description: "Herzliche und professionelle Seniorenbetreuung, Alltagshilfe und Kinderbetreuung in Rostock und Umgebung. Mit Anerkennung vom LAGuS zur direkten Abrechnung mit Pflegekassen.",
  keywords: ["Seniorenbetreuung Rostock", "Alltagshelfer", "Pflegeunterstützung", "Kinderbetreuung", "Hauswirtschaftliche Hilfe"],
  authors: [{ name: "Nicole Hinrich" }],
  openGraph: {
    title: "Seniorenbetreuung & Alltagshelfer Nicole Hinrich",
    description: "Herzliche und professionelle Betreuung in Rostock",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

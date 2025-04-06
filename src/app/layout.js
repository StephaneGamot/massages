import  Metadata  from "next";
import Viewport from 'next';
// import { SpeedInsights } from '@vercel/speed-insights/next';
//import { Analytics } from "@vercel/analytics/react"
//import GoogleAnalytics from "../../GoogleAnalytics";
import Head from 'next/head'

import { Cormorant_Garamond, Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import NavWithDropdown from "@/components/Header/NavBar";


const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-title",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: "Massage & soin therapeutique à Halle - Bruxelles",
  description: "À Halle – Bruxelles, La Voie du Bien-Être vous accueille en cabinet ou à domicile pour des massages relaxants & soins thérapeutiques, pour retrouver équilibre et sérénité",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
    <head>
        {/* Viewport & theme */}
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
        <meta name="theme-color" content="black" media="(prefers-color-scheme: dark)" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Open Graph */}
        <meta property="og:title" content="La voie du bien-être | Détente et Relaxation" />
        <meta property="og:description" content="Profitez d’un massage unique à Halle. Shiatsu, Reiki, et relaxation profonde vous attendent." />
        <meta property="og:url" content="https://lavoiedubienetre.be" />
        <meta property="og:site_name" content="La voie du bien-être" />
        <meta property="og:locale" content="fr_BE" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lavoiedubienetre.be/img/OpenGraph/OG-image-massage-Courcelles.jpg" />
        <meta property="og:image:alt" content="La voie du bien-être à Halle" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />

        {/* Twitter */}
        <meta name="twitter:title" content="La voie du bien-être | Shiatsu Reiki Massage à Halle" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://lavoiedubienetre.be/img/OpenGraph/OG-image-massage-Courcelles.jpg" />
        <meta name="twitter:image:alt" content="Image montrant un massage relaxant à Halle dans le centre La voie du bien-être" />
        <meta name="twitter:site" content="@voiedubienetre" />
        <meta name="twitter:description" content="Centre de massage à Halle | Shiatsu Reiki Reflexologie Plantaire | La voie du bien-être" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />

        {/* Google Verification */}
        <meta name="google-site-verification" content="google1b18195b39af5559" />

        {/* Canonical */}
        <link rel="canonical" href="https://lavoiedubienetre.be" />
      </head>

      <body className={`${cormorant.variable} ${openSans.variable}`}>
      <NavWithDropdown />
        {children}
        <Footer />
      </body>
     
    </html>
  );
}

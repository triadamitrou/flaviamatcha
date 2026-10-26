import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";
import SmoothScroll from "@/components/SmoothScroll";
import { RevealProvider } from "@/components/Reveal";
import { site } from "@/lib/site";
import "./globals.css";

const archivo = localFont({
  src: "./fonts/archivo-latin.woff2",
  variable: "--font-archivo",
  display: "swap",
  weight: "400 800",
});

const instrument = localFont({
  src: "./fonts/instrument-latin.woff2",
  variable: "--font-instrument",
  display: "swap",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: `${site.fullName} | Derby`,
  description: site.blurb,
  robots: { index: false, follow: false },
  openGraph: {
    title: `${site.fullName} | Derby`,
    description: site.blurb,
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${archivo.variable} ${instrument.variable}`}>
      <body>
        <Schema />
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Last in the tree on purpose: effects commit bottom-up, so by the
            time the observer starts the page it is about to mark has already
            hydrated. Mounted earlier it writes data-in into nodes React has
            not reconciled yet, and every reveal logs a hydration mismatch. */}
        <RevealProvider />
      </body>
    </html>
  );
}

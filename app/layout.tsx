import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const serif = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "XPICE — Market Intelligence for Ingredients",
  description:
    "XPICE sources, curates and moves spices, herbs and food ingredients across borders, pairing decades of trading legacy with live market intelligence.",
  icons: {
    icon: "/xpice-mark.svg",
  },
  openGraph: {
    title: "XPICE — Market Intelligence for Ingredients",
    description:
      "The broker between origin and the world's tables. Spices, herbs and ingredients, sourced with intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <body>
        <LanguageProvider>
          <SmoothScroll />
          <ScrollProgress />
          {children}
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}

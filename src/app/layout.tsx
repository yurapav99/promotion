import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["600", "700"],
});

// ⚠️ Replace with your actual deployed URL
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";

export const metadata: Metadata = {
  title: "Unlock Exclusive Crypto Casino Bonuses",
  description:
    "Claim exclusive crypto casino bonuses — play Plinko, slots, crash and more with instant crypto deposits.",

  // Open Graph — Facebook, Telegram, Discord, LinkedIn
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Unlock Exclusive Crypto Casino Bonuses",
    description:
      "Claim exclusive crypto casino bonuses — play Plinko, slots, crash and more with instant crypto deposits.",
    siteName: "Crypto Casino Promo",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Crypto Casino Promo — Exclusive Bonuses",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Unlock Exclusive Crypto Casino Bonuses",
    description:
      "Claim exclusive crypto casino bonuses — play Plinko, slots, crash and more.",
    images: [`${SITE_URL}/og-image.png`],
  },

  // Extras
  metadataBase: new URL(SITE_URL),
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} antialiased bg-dark text-light`}
      >
        <div className="app-root">
          <div className="container-fluid px-0">{children}</div>
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}

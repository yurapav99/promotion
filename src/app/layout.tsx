// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Telegram Mini App",
  description: "Styled like a native Telegram ad card",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Orbitron font for PLAY NOW button */}
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700&display=swap" rel="stylesheet" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark text-light`}
      >
         <div className="app-root">
          <div className="container-fluid px-0">{children}</div>
        </div>
      </body>
    </html>
  );
}

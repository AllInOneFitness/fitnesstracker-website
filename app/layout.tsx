import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: "StrengthLens - Science-Backed Strength Training Intelligence",
  description: "Track workouts, analyze progress, and get AI-powered insights that adapt to your unique training journey. Advanced analytics for serious athletes.",
  keywords: ["strength training", "workout tracker", "fitness app", "AI coaching", "progressive overload", "1RM calculator", "training analytics"],
  authors: [{ name: "StrengthLens" }],
  openGraph: {
    title: "StrengthLens - A New Lens on Strength Training",
    description: "Science-backed strength training intelligence with AI-powered insights and advanced analytics.",
    type: "website",
    locale: "en_US",
    siteName: "StrengthLens",
  },
  twitter: {
    card: "summary_large_image",
    title: "StrengthLens - Science-Backed Strength Training Intelligence",
    description: "Track workouts, analyze progress, and get AI-powered insights for your training journey.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

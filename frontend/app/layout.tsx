import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thomas McMahan Faulds - Tech Polymath",
  description: "Full Stack Developer, Angel Investor, and Digital Marketing Expert",
  openGraph: {
    title: "Thomas McMahan Faulds - Tech Polymath",
    description: "Full Stack Developer, Angel Investor, and Digital Marketing Expert",
    url: "https://your-website-url.com",
    siteName: "Thomas Faulds Portfolio",
    images: [
      {
        url: "https://your-website-url.com/og-image.jpg", // Replace with your actual image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nexvora Solutions | Enterprise Software Agency",
    template: "%s | Nexvora Solutions",
  },
  description:
    "Nexvora Solutions delivers enterprise-grade software engineering, premium UI/UX design, and mission-critical digital systems for global organizations.",
  keywords: [
    "enterprise software",
    "software agency",
    "UI/UX design",
    "digital transformation",
    "Nexvora Solutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}

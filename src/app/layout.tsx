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
    "Nexvora Solutions is a software engineering agency helping startups and businesses build reliable, scalable digital products. Based in Dhaka, Bangladesh.",
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
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}

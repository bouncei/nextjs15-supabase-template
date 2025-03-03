import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Bouncey's Next.js 15 Starter - Supabase, Zustand, Tailwind, ShadCN",
  description:
    "A modern Next.js 15 template with Supabase, Zustand, TailwindCSS, ShadCN, and Framer Motion for seamless full-stack development.",
  keywords: [
    "Next.js 15",
    "Supabase",
    "Zustand",
    "TailwindCSS",
    "ShadCN",
    "Framer Motion",
    "React",
    "Full-stack",
    "Template",
  ],
  authors: [
    { name: "Joshua Inyang (Bouncey)", url: "https://github.com/bouncei" },
  ],
  openGraph: {
    title: "Bouncey's Next.js 15 Starter - Supabase, Zustand, Tailwind, ShadCN",
    description:
      "A powerful Next.js 15 boilerplate to kickstart your full-stack projects. Built by Bouncey",
    url: "https://bouncei.vercel.app",
    siteName: "Bouncey's Next.js 15 Starter",
    images: [
      {
        url: "https://bouncei.vercel.app/assets/prof.png",
        width: 1200,
        height: 630,
        alt: "Bouncey's Next.js 15 Starter Template",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bouncey's Next.js 15 Starter - Supabase, Zustand, Tailwind, ShadCN",
    description:
      "A modern Next.js 15 template with all the essential integrations.",
    images: ["https://bouncei.vercel.app/assets/prof.png"],
    creator: "@InyangJoshua8",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
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
      </body>
    </html>
  );
}

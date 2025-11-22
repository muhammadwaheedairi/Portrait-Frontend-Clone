import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap",
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "Portrait - Your forever space",
  description: "A decentralized canvas to share your story, your work, and your life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen overflow-x-hidden selection:bg-purple-100 selection:text-purple-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
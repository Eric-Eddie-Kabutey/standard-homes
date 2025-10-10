// "use client"; // Mark this component as a Client Component

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

import 'react-phone-number-input/style.css'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Standerd Homes",
  description: "Standered Homes ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {/* Pass className to Navbar */}
        <main className=" -z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

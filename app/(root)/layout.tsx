import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" sticky top-0 z-50   m-auto  shadow-lg px-2 bg-white max-xl:w-[100%] max-[1138px]:w-full  rounded-sm  max-[326px]:py-4 p-3">
          <Navbar />
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}

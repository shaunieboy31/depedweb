import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import PageSeals from "@/components/PageSeals";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DepEd IMUS City - Schools Division Office",
  description:
    "Official website of the Department of Education, Schools Division Office of Imus City",
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
        <Navbar />
        <Header />
        <main className="min-h-screen max-w-7xl mx-auto px-10 py-2">
          {children}
        </main>
        <PageSeals />
        <Footer />
      </body>
    </html>
  );
}

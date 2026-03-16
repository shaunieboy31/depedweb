import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import PageSeals from "@/components/PageSeals";
import Footer from "@/components/Footer";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Header />
      <main className="min-h-screen max-w-7xl mx-auto px-10 py-2">
        <div className="border border-gray-200 rounded-lg p-6">{children}</div>
      </main>
      <PageSeals />
      <Footer />
    </>
  );
}

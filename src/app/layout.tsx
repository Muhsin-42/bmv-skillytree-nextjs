import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skilly Tree",
  description: "Skilly Tree - NextJs App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!snap-y  ">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

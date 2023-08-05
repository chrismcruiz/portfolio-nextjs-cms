import Link from "next/link";
import { Metadata } from "next";
import Header from "./components/Header";
import { Inter } from "next/font/google";
import BackToTop from "./components/BackToTop";
import { createClient } from "@/prismicio";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const header = await client.getSingle("header");
  return {
    title: header.data.site_title,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[rgb(36,36,36)] text-white`}>
        <Header />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

import Link from "next/link";
import { Metadata } from "next";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import BackToTop from "./components/BackToTop";
import { createClient } from "@/prismicio";

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
        {/* @ts-expect-error Async Server Component */}
        <Header />
        {children}
        {/* @ts-expect-error Async Server Component */}
        <BackToTop />
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Navbar} from "@/components";
import {Footer} from "@/components";
import { UserContextProvider } from "@/contexts/user-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bus Tickets",
  description: "Buy your ticket",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          <Navbar />
          {children}
          <Footer />
        </UserContextProvider>
      </body>
    </html>
  );
}

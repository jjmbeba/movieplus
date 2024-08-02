import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MoviePlus",
  description: "Your one-stop shop for all your movie needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
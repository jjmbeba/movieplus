import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Providers from "@/components/providers/providers";

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
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  );
}

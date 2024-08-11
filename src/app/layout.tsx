import type {Metadata} from "next";
import {Raleway} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Providers from "@/components/providers/providers";
import {Toaster} from '@/components/ui/sonner'
import {auth} from "@/auth";
import {SessionProvider} from 'next-auth/react'


const raleway = Raleway({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "MoviePlus",
    description: "Your one-stop shop for all your movie needs",
};

export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();

    return (
        <html lang="en">
        <body className={raleway.className}>
        <SessionProvider session={session}>
        <Providers>
            <Navbar/>
            {children}
            <Toaster richColors/>
        </Providers>
        </SessionProvider>
        </body>
        </html>
    );
}

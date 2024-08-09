"use client";

import React from 'react'
import Logo from "@/components/common/Logo";
import {Link} from "next-view-transitions";
import {cn} from "@/lib/utils";
import {Button, buttonVariants} from "@/components/ui/button";
import {excludedRoutes, navLinks} from "@/constants";
import {usePathname} from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    if(excludedRoutes.includes(pathname)) return;

    return (
        <nav
            className={'sticky top-0 z-10 py-2 px-[5%] flex items-center justify-between backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-700/20'}>
            <Logo/>
            <div className={'flex items-center gap-3'}>
                {navLinks.map(({text, link}) => (
                    <Link key={link} href={link} className={cn(`text-sm font-medium ${pathname === link && 'text-orange-600'}`, buttonVariants({
                        variant: 'linkHover2'
                    }))}>
                        {text}
                    </Link>
                ))}
            </div>
            <div className={'flex items-center gap-3'}>
                <Button variant={'shine'} asChild>
                    <Link href={'/register'}>
                        Get started
                    </Link>
                </Button>
                <Button variant={'secondary'} asChild>
                    <Link href={'/login'}>
                        Login
                    </Link>
                </Button>
            </div>
        </nav>
    )
}
export default Navbar
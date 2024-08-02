import React from 'react'
import Logo from "@/components/Logo";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Button, buttonVariants} from "@/components/ui/button";
import {navLinks} from "@/constants";

const Navbar = () => {
    return (
        <nav
            className={'sticky top-0 z-10 py-3 px-[5%] flex items-center justify-between backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-700/20'}>
            <Logo/>
            <div className={'flex items-center gap-3'}>
                {navLinks.map(({text, link}) => (
                    <Link key={link} href={link} className={cn('text-sm font-medium', buttonVariants({
                        variant: 'linkHover2'
                    }))}>
                        {text}
                    </Link>
                ))}
            </div>
            <div className={'flex items-center gap-3'}>
                <Button variant={'shine'} asChild>
                    <Link href={'/signup'}>
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
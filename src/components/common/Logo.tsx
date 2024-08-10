import React from 'react'
import Link from "next/link";
import {clsx} from "clsx";

type Props = {
    variant?:'lg' | 'sm' | 'md' | 'xl' | '2xl'
}

const Logo = ({variant = 'xl'}:Props) => {
    return (
        <Link href="/">
            <div className={clsx('font-bold', {
                'text-lg':variant === 'lg',
                'text-sm':variant === 'sm',
                'text-xl':variant === 'xl',
                'text-2xl':variant === '2xl',
            })}>
                Movie<span className={'text-orange-600'}>Plus</span>
            </div>
        </Link>
    )
}
export default Logo

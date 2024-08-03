import React from 'react'
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/public">
            <div className={'font-bold'}>
                Movie<span className={'text-orange-600'}>Plus</span>
            </div>
        </Link>
    )
}
export default Logo

"use client";

import React from 'react'
import Image from "next/image";

type Props = {
    backdrop_path: string
    blurData: string | undefined
    displayTitle: string
}

const MovieTvDetailBackdrop = ({blurData, displayTitle, backdrop_path}:Props) => {
    return (
        <Image
            fill
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            blurDataURL={blurData}
            alt={displayTitle}
            className={'object-cover -z-10 rounded-2xl opacity-80 data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'}
            data-loaded='false'
            onLoad={event => {
                event.currentTarget.setAttribute('data-loaded', 'true')
            }}
        />
    )
}
export default MovieTvDetailBackdrop

"use client";

import React from 'react'
import Image from "next/image";

type Props = {
    poster_path: string
    displayTitle: string
}

const MovieTvDetailPoster = ({poster_path, displayTitle}:Props) => {
    return (
        <Image
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            width={293}
            height={440}
            className={'rounded-lg absolute -bottom-72 left-40 data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'}
            alt={displayTitle}
            data-loaded='false'
            onLoad={event => {
                event.currentTarget.setAttribute('data-loaded', 'true')
            }}
        />
    )
}
export default MovieTvDetailPoster

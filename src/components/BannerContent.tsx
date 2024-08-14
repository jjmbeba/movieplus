import React from 'react'
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Video} from "lucide-react";
import {Genre} from "@/lib/types";
import getBase64 from "@/lib/get-base64";
import BookmarkButton from "@/components/common/BookmarkButton";
import {checkIfMovieTvBookmarked} from "@/lib/actions";

type Props = {
    title:string;
    backdrop_path:string;
    movieGenres:(Genre | undefined)[];
    movieTvId:number;
    type:'movie' | 'tv'
}

const BannerContent = async ({title, backdrop_path, movieGenres, movieTvId, type}:Props) => {
    const blurData = await getBase64(`https://image.tmdb.org/t/p/original${backdrop_path}`);
    const isBookmarked = await checkIfMovieTvBookmarked(movieTvId, type);

    return (
        <div className={'mt-8 relative w-full h-[50dvh]'}>
            <Image
                fill
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                blurDataURL={blurData}
                alt={title}
                className={'object-cover -z-10 rounded-2xl'}
            />
            <div className={'absolute left-10 bottom-10 flex items-center justify-between w-[90%]'}>
                <div>
                    <h2 className={'font-bold text-3xl invert'}>
                        {title}
                    </h2>
                    <div className={'text-xs opacity-70 font-semibold invert space-x-2'}>
                        {movieGenres?.map((genre) => (
                            <Badge key={genre?.id} variant={'outline'} className={'bg-black/50 text-white'}>
                                {genre?.name}
                            </Badge>
                        ))}
                    </div>
                </div>
                <div className={'flex items-center gap-3'}>
                    <Button variant={'gooeyLeft'}>
                        <Video className={'h-4 w-4 mr-2'}/>
                        Watch Now
                    </Button>
                    <BookmarkButton type={type} movieSeriesId={movieTvId} variant={'secondary'} size={'icon'} isMovieBookmarked={isBookmarked} />
                </div>
            </div>
        </div>
    )
}
export default BannerContent

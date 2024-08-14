import React from 'react'
import GoBackButton from "@/components/common/GoBackButton";
import {Button} from "@/components/ui/button";
import {Bookmark} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {getVoteAverageColor} from "@/lib/utils";
import {Separator} from "@/components/ui/separator";
import {MovieSearchResult, TvSearchResult} from "@/lib/types";
import {getMovieTvDetailsById} from "@/lib/actions";
import getBase64 from "@/lib/get-base64";
import Image from 'next/image'
import BookmarkButton from "@/components/common/BookmarkButton";

type Props = {
    params: { id:string, type:'movie' | 'tv' }
}

const MovieTvDetail = async ({params}:Props) => {
    const movieTvResult:MovieSearchResult | TvSearchResult = await getMovieTvDetailsById(params.id, params.type);

    const blurBackdropData = await getBase64(`https://image.tmdb.org/t/p/original${movieTvResult.backdrop_path}`);
    const blurPosterData = await getBase64(`https://image.tmdb.org/t/p/original${movieTvResult.poster_path}`);

    const displayTitle = 'original_title' in movieTvResult ? movieTvResult.title : (movieTvResult as TvSearchResult).name;
    return (
        <main className={'pb-20 container mt-10'}>
            <GoBackButton/>
            <div className={'w-full relative'}>
                <div className={'relative w-full h-[50dvh] mt-8'}>
                    <Image
                        fill
                        src={`https://image.tmdb.org/t/p/original${movieTvResult.backdrop_path}`}
                        placeholder={'blur'}
                        blurDataURL={blurBackdropData}
                        alt={displayTitle}
                        className={'object-cover -z-10 rounded-2xl opacity-80'}
                    />
                </div>
                <Image
                    src={`https://image.tmdb.org/t/p/original${movieTvResult.poster_path}`}
                    width={293}
                    height={440}
                    blurDataURL={blurPosterData}
                    placeholder={'blur'}
                    className={'rounded-lg absolute -bottom-72 left-40'}
                    alt={displayTitle}
                />
            </div>
            <div className={'flex justify-end'}>
                <div className={'mt-8 flex flex-col'}>
                    <div className={'flex items-center justify-between'}>
                        <h1 className={'font-bold text-3xl'}>
                            {displayTitle} {'release_date' in movieTvResult && `(${new Date(movieTvResult.release_date).getFullYear()})`}
                        </h1>
                        <BookmarkButton movieSeriesId={movieTvResult.id} variant={'ghost'} size={'icon'} />
                    </div>
                    <div className={'text-xs opacity-70 font-semibold space-x-2 mt-2'}>
                        {movieTvResult.genres.map((genre) => (
                            <Badge key={genre.id} className={'bg-black/60 text-white text-xs'}>
                                {genre.name}
                            </Badge>
                        ))}
                        <Badge className={getVoteAverageColor(movieTvResult.vote_average)}>
                            {movieTvResult.vote_average.toFixed(2)}
                        </Badge>
                        <Badge>
                            {'number_of_seasons' in movieTvResult ? `${movieTvResult.number_of_seasons} Seasons` : `${movieTvResult.runtime} mins`}
                        </Badge>
                    </div>
                    <p className={'mt-4 max-w-xl text-sm'}>
                        {movieTvResult.overview}
                    </p>
                </div>
            </div>
            <Separator className={'mt-40 w-full h-[1px] bg-slate-600'}/>
        </main>
    )
}
export default MovieTvDetail

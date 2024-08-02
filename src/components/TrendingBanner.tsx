import React from 'react'
import Image from "next/image";
import {getMovieGenres, getTrendingMovies} from "@/lib/actions";
import {Movie} from "@/lib/types";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Video} from "lucide-react";

const TrendingBanner = async () => {
    const trendingMovies: Movie[] = await getTrendingMovies();

    const movieGenres = await getMovieGenres(trendingMovies?.[0].genre_ids)

    return (
        <div className={'container mt-10'}>
            <h1 className={'font-bold text-xl'}>
                Trending This Week
            </h1>
            <div className={'mt-8 relative w-full h-[50dvh] rounded'}>
                <Image
                    fill
                    src={`https://image.tmdb.org/t/p/original${trendingMovies?.[0].backdrop_path}`}
                    alt={trendingMovies?.[0].poster_path}
                    className={'object-cover -z-10 rounded-2xl'}
                />
                <div className={'absolute left-10 bottom-10 flex items-center justify-between w-[90%]'}>
                    <div>
                        <h2 className={'font-bold text-3xl invert'}>
                            {trendingMovies?.[0].title}
                        </h2>
                        <p className={'text-xs opacity-70 font-semibold invert space-x-2'}>
                            {movieGenres.length > 0 && movieGenres.map((genre) => (
                               <Badge key={genre?.id} variant={'outline'}>
                                   {genre?.name}
                               </Badge>
                            ))}
                        </p>
                    </div>
                    <Button variant={'gooeyLeft'}>
                        <Video className={'h-4 w-4 mr-2'}/>
                        Watch Now
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default TrendingBanner

import React from 'react'
import {Movie} from "@/lib/types";
import {getMovieTvGenres, getTrendingMovies} from "@/lib/actions";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import BannerContent from "@/components/BannerContent";

const TrendingMovieCarousel = async () => {
    const trendingMovies: Movie[] = await getTrendingMovies();

    return (
        <div className={'container mt-10'}>
            <h1 className={'font-bold text-xl'}>
                Trending Movies This Week
            </h1>
            <Carousel>
                <CarouselContent className="-ml-1 w-full">
                    {trendingMovies?.slice(0,5).map(async ({id, title, backdrop_path, poster_path, genre_ids}) => {
                        const movieGenres = await getMovieTvGenres(genre_ids, 'movie');

                        return (
                            <CarouselItem key={id} className="pl-1">
                                <BannerContent movieTvId={id} title={title} backdrop_path={backdrop_path} movieGenres={movieGenres} type={'movie'} />
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>

        </div>
    )
}
export default TrendingMovieCarousel

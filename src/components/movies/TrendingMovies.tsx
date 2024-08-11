import React from 'react'
import CarouselList from "@/components/CarouselList";
import {getTrendingMovies} from "@/lib/actions";
import {Movie} from "@/lib/types";

const TrendingMovies = async () => {
    const trendingMovies:Movie[] = await getTrendingMovies();

    return (
        <div className={'container mt-16 w-full'}>
            <CarouselList title={'Trending Movies'} data={trendingMovies} type={'movie'} />
        </div>
    )
}
export default TrendingMovies

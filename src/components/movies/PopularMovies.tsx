import React from 'react'
import CarouselList from "@/components/CarouselList";
import {getPopularMovies} from "@/lib/actions";
import {Movie} from "@/lib/types";

const PopularMovies = async () => {
    const popularMovies:Movie[] = await getPopularMovies();

    return (
        <div className={'container mt-16 w-full'}>
            <CarouselList title={'Popular Movies'} data={popularMovies} />
        </div>
    )
}
export default PopularMovies

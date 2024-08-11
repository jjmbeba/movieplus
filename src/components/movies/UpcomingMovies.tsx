import React from 'react'
import CarouselList from "@/components/CarouselList";
import {getUpcomingMovies} from "@/lib/actions";
import {Movie} from "@/lib/types";

const UpcomingMovies = async () => {
    const upcomingMovies:Movie[] = await getUpcomingMovies();

    return (
        <div className={'container mt-16 w-full'}>
            <CarouselList title={'Upcoming Movies'} data={upcomingMovies} type={'movie'} />
        </div>
    )
}
export default UpcomingMovies

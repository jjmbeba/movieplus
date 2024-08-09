import React from 'react'
import {TvSeries} from "@/lib/types";
import {getPopularTvSeries} from "@/lib/actions";
import CarouselList from "@/components/CarouselList";

const PopularTvSeries = async () => {
    const popularTvSeries:TvSeries[] = await getPopularTvSeries();

    return (
        <div className={'container mt-16 w-full'}>
            <CarouselList title={'Popular Tv Series'} data={popularTvSeries} />
        </div>
    )
}
export default PopularTvSeries

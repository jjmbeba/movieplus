import React from 'react'
import CarouselList from "@/components/CarouselList";
import {getTrendingTvSeries} from "@/lib/actions";

const TrendingTvSeries = async () => {
    const trendingTvSeries = await getTrendingTvSeries();

    return (
        <div className={'container mt-16 w-full'}>
            <CarouselList title={'Trending Tv Series'} data={[]} />
        </div>
    )
}
export default TrendingTvSeries

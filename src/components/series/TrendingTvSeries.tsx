import React from 'react'
import CarouselList from "@/components/CarouselList";
import {getTrendingTvSeries} from "@/lib/actions";
import {TvSeries} from "@/lib/types";

const TrendingTvSeries = async () => {
    const trendingTvSeries:TvSeries[] = await getTrendingTvSeries();

    return (
        <div className={'container mt-16 w-full'}>
            <CarouselList title={'Trending Tv Series'} data={trendingTvSeries} />
        </div>
    )
}
export default TrendingTvSeries

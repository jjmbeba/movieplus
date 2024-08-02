import React from 'react'
import CarouselList from "@/components/CarouselList";

const TrendingTvSeries = () => {
    return (
        <div className={'container mt-16 w-full'}>
            <CarouselList title={'Trending Tv Series'} data={[]} />
        </div>
    )
}
export default TrendingTvSeries

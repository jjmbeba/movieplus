import React, {Suspense} from 'react'
import TrendingBannerSkeleton from "@/components/skeletons/TrendingBannerSkeleton";
import TrendingSeriesBanner from "@/components/series/TrendingSeriesBanner";
import TrendingTvSeries from "@/components/series/TrendingTvSeries";
import CarouselListSkeleton from "@/components/skeletons/CarouselListSkeleton";

const Page = () => {
    return (
        <main className={'pb-20'}>
            <Suspense fallback={<TrendingBannerSkeleton/>}>
                <TrendingSeriesBanner />
            </Suspense>
            <Suspense fallback={<CarouselListSkeleton title={'Trending Tv Series'} />}>
                <TrendingTvSeries/>
            </Suspense>
        </main>
    )
}
export default Page

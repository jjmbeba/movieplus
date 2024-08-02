import TrendingMovies from "@/components/TrendingMovies";
import CarouselListSkeleton from "@/components/CarouselListSkeleton";
import {Suspense} from "react";
import UpcomingMovies from "@/components/UpcomingMovies";
import PopularMovies from "@/components/PopularMovies";
import TrendingBanner from "@/components/TrendingBanner";

export default function Home() {
    return <main className={'pb-20'}>
        <TrendingBanner />
        <Suspense fallback={<CarouselListSkeleton title={'Trending Movies'} />}>
            <TrendingMovies  />
        </Suspense>
        <Suspense fallback={<CarouselListSkeleton title={'Upcoming Movies'} />}>
            <UpcomingMovies/>
        </Suspense>
        <Suspense fallback={<CarouselListSkeleton title={'Upcoming Movies'} />}>
            <PopularMovies/>
        </Suspense>
        {/*<Suspense fallback={<CarouselListSkeleton title={'Trending Tv Series'} />}>*/}
        {/*    <TrendingTvSeries/>*/}
        {/*</Suspense>*/}
        {/*<Suspense fallback={<CarouselListSkeleton title={'Trending Cast'} />}>*/}
        {/*    <TrendingCast/>*/}
        {/*</Suspense>*/}
    </main>;
}

import TrendingMovies from "@/components/movies/TrendingMovies";
import CarouselListSkeleton from "@/components/skeletons/CarouselListSkeleton";
import {Suspense} from "react";
import UpcomingMovies from "@/components/movies/UpcomingMovies";
import PopularMovies from "@/components/movies/PopularMovies";
import TrendingBanner from "@/components/TrendingBanner";
import TrendingBannerSkeleton from "@/components/skeletons/TrendingBannerSkeleton";

export default function Home() {
    return <main className={'pb-20'}>
        <Suspense fallback={<TrendingBannerSkeleton/>}>
            <TrendingBanner />
        </Suspense>
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

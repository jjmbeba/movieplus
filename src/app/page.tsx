import TrendingMovies from "@/components/TrendingMovies";
import CarouselListSkeleton from "@/components/CarouselListSkeleton";
import {Suspense} from "react";

export default function Home() {
    return <main>
        {/*<TrendingBanner/>*/}
        <Suspense fallback={<CarouselListSkeleton title={'Trending Movies'} />}>
            <TrendingMovies  />
        </Suspense>
        {/*<Suspense fallback={<CarouselListSkeleton title={'Trending Tv Series'} />}>*/}
        {/*    <TrendingTvSeries/>*/}
        {/*</Suspense>*/}
        {/*<Suspense fallback={<CarouselListSkeleton title={'Trending Cast'} />}>*/}
        {/*    <TrendingCast/>*/}
        {/*</Suspense>*/}
    </main>;
}

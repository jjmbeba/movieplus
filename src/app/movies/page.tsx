import React, {Suspense} from 'react'
import TrendingBannerSkeleton from "@/components/skeletons/TrendingBannerSkeleton";
import TrendingBanner from "@/components/TrendingBanner";
import TrendingMovieCarousel from "@/components/movies/TrendingMovieCarousel";
import CarouselListSkeleton from "@/components/skeletons/CarouselListSkeleton";
import TrendingMovies from "@/components/movies/TrendingMovies";
import UpcomingMovies from "@/components/movies/UpcomingMovies";
import PopularMovies from "@/components/movies/PopularMovies";

const Page = () => {
    return (
        <main className={'pb-20'}>
            <Suspense fallback={<TrendingBannerSkeleton/>}>
                <TrendingMovieCarousel />
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
        </main>
    )
}
export default Page

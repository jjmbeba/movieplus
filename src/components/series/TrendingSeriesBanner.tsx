import React, {Suspense} from 'react'
import {TvSeries} from "@/lib/types";
import {getMovieTvGenres, getTrendingTvSeries} from "@/lib/actions";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import BannerContent from "@/components/BannerContent";
import TrendingBannerSkeleton from "@/components/skeletons/TrendingBannerSkeleton";

const TrendingSeriesBanner = async () => {
    const trendingSeries: TvSeries[] = await getTrendingTvSeries();
    console.log(trendingSeries);

    return (
        <div className={'container mt-10'}>
            <h1 className={'font-bold text-xl'}>
                Trending Series This Week
            </h1>
            <Suspense fallback={<TrendingBannerSkeleton/>}>
                <Carousel>
                    <CarouselContent className="-ml-1 w-full">
                        {trendingSeries?.slice(0,5).map(async ({id, name, backdrop_path, poster_path, genre_ids}) => {
                            const seriesGenres = await getMovieTvGenres(genre_ids, 'tv');

                            return (
                                <CarouselItem key={id} className="pl-1">
                                    <BannerContent title={name} backdrop_path={backdrop_path} movieGenres={seriesGenres}/>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </Suspense>

        </div>
    )
}
export default TrendingSeriesBanner

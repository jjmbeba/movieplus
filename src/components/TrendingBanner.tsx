import React from 'react'
import {getMovieTvGenres, getTrendingMovies} from "@/lib/actions";
import {Movie} from "@/lib/types";
import BannerContent from "@/components/BannerContent";

const TrendingBanner = async () => {
    const trendingMovies: Movie[] = await getTrendingMovies();
    const {title, backdrop_path, genre_ids, id} = trendingMovies[0];

    const movieGenres = await getMovieTvGenres(genre_ids, 'movie')

    return (
        <div className={'container mt-10'}>
            <h1 className={'font-bold text-xl'}>
                Trending This Week
            </h1>
            <BannerContent title={title} movieGenres={movieGenres} backdrop_path={backdrop_path} movieTvId={id} type={'movie'} />
        </div>
    )
}
export default TrendingBanner

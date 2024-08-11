import React, {Suspense} from 'react'
import MovieTvSkeleton from "@/components/skeletons/MovieTvSkeleton";
import MovieTvDetail from "@/components/common/MovieTvDetail";

const Page = ({ params }: { params: { slug: string, id:string, type:'movie' | 'tv' } }) => {
    return (
        <Suspense fallback={<MovieTvSkeleton/>}>
            <MovieTvDetail params={params} />
        </Suspense>
    )
}
export default Page
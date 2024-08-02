import React from 'react'
import {Skeleton} from "@/components/ui/skeleton";

const TrendingBannerSkeleton = async () => {

    return (
        <div className={'container mt-10'}>
            <h1 className={'font-bold text-xl'}>
                Trending This Week
            </h1>
            <Skeleton className={'mt-8 w-full h-[50dvh] rounded-2xl'}/>
        </div>
    )
}
export default TrendingBannerSkeleton

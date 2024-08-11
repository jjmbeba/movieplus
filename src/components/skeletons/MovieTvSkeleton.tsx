import React from 'react'
import GoBackButton from "@/components/common/GoBackButton";
import {Separator} from "@/components/ui/separator";
import {Skeleton} from "@/components/ui/skeleton";

const MovieTvSkeleton = () => {
    return (
        <main className={'pb-20 container mt-10'}>
            <GoBackButton/>
            <div className={'w-full relative'}>
                <Skeleton className={'w-full h-[50dvh] mt-8'}/>
                <Skeleton className={'rounded-lg absolute -bottom-72 left-40 w-[293px] h-[440px]'}/>
            </div>
            <div className={'flex justify-end'}>
                <div className={'mt-8 flex flex-col'}>
                    <div className={'flex items-center justify-between w-[576px]'}>
                        <Skeleton className={'h-4 w-72'}/>
                        <Skeleton className={'w-[40px] h-[40px] rounded'}/>
                    </div>
                    <div className={'text-xs opacity-70 font-semibold mt-2 flex items-center space-x-2'}>
                        {Array.from({length: 5}).map((_, index) => (
                            <Skeleton key={index} className={'w-16 h-6'}/>
                        ))}
                    </div>
                    <div className={'mt-4 max-w-xl space-y-3'}>
                        <Skeleton className={'h-4 w-full'} />
                        <Skeleton className={'h-4 w-full'} />
                        <Skeleton className={'h-4 w-full'} />
                        <Skeleton className={'h-4 w-1/3'} />
                    </div>
                </div>
            </div>
            <Separator className={'mt-40 w-full h-[1px] bg-slate-600'}/>
        </main>
    )
}
export default MovieTvSkeleton

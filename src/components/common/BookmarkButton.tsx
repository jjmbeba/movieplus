"use client";

import React, {useState} from 'react'
import {Button} from "@/components/ui/button";
import {Bookmark, Loader} from "lucide-react";
import {ButtonSize, ButtonVariant} from "@/lib/types";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"
import {useSession} from "next-auth/react";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {bookmark} from "@/lib/actions";

type Props = {
    variant: ButtonVariant;
    size: ButtonSize;
    movieSeriesId: number;
    isMovieBookmarked:boolean;
    type:'movie' | 'tv'
}

const BookmarkButton = ({variant, size, movieSeriesId, isMovieBookmarked, type}: Props) => {
    const {data:session} = useSession();
    const router = useRouter();
    const queryClient = useQueryClient();

    const {mutate, isPending} = useMutation({
        mutationKey: ['bookmark'],
        mutationFn: async ({type, movieSeriesId}: { type: 'movie' | 'tv', movieSeriesId: number }) => {
            return await bookmark(type, movieSeriesId)
        },
        onSuccess: (response: { message: string; status: string }) => {
            toast.success(response.message);
            setIsBookmarked((prev) => !prev);
        },
        onSettled:() => {
            queryClient.invalidateQueries({
                queryKey:['isBookmarked']
            });
        }
    });

    const [isBookmarked, setIsBookmarked] = useState(isMovieBookmarked);

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button disabled={isPending} variant={variant} size={size} onClick={() => {
                        if (!session?.user) {
                            toast.info('You need to login to bookmark');
                            router.push('/login')
                            return;
                        }

                        mutate({type, movieSeriesId})

                    }}>
                        {isPending ? <Loader className={'h-4 w-4 animate-spin'}/> : <Bookmark className={`h-4 w-4 ${isBookmarked ? 'text-amber-300 fill-amber-300' : ''}`}/>}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    Bookmark
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
export default BookmarkButton
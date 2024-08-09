"use client";

import React from 'react'
import {Button} from "@/components/ui/button";
import {ChevronLeft} from "lucide-react";
import {useRouter} from "next/navigation";

const GoBackButton = () => {
    const router = useRouter();

    return (
        <Button onClick={() => router.back()} size={'icon'} className={'h-8 w-8'} variant={'ghost'}>
            <ChevronLeft/>
        </Button>
    )
}
export default GoBackButton

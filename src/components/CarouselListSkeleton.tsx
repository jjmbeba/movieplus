import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import {Skeleton} from "@/components/ui/skeleton";

type Props = {
    title:string;
};
const CarouselListSkeleton = ({title}: Props) => {
    return (
        <div className={'mt-16 container w-full'}>
            <h2 className={'font-bold text-xl'}>
                {title}
            </h2>
            <Carousel className="w-full mt-6">
                <CarouselContent className="-ml-1 w-full">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/5">
                            <div className="p-1">
                                <Skeleton className={'w-[200px] h-[300px]'} />
                                <Skeleton className={'h-3 w-[85px] mt-3'} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};
export default CarouselListSkeleton;

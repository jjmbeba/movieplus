import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import {Movie, TvSeries} from "@/lib/types";
import Image from "next/image";

type Props = {
    title: string;
    data: Movie[] | TvSeries[]
};
const CarouselList = ({title, data}: Props) => {
    return (
        <div className={'w-full'}>
            <h2 className={'font-bold text-xl'}>
                {title}
            </h2>
            <Carousel className="w-full mt-6">
                <CarouselContent className="-ml-1 w-full">
                    {data?.map((record) => {
                        const {id, backdrop_path, poster_path} = record;

                        return (
                            <CarouselItem key={id} className="pl-1 md:basis-1/2 lg:basis-1/5">
                                <div className={'group hover:cursor-pointer'}>
                                    <Image
                                        width={200}
                                        height={165}
                                        src={`https://image.tmdb.org/t/p/original${poster_path}`}
                                        alt={''}
                                        className={'object-cover rounded'}
                                    />
                                    <h3 className={'max-w-[280px] text-sm font-semibold mt-4 group-hover:text-orange-600 group-hover:underline'}>
                                        {title}
                                    </h3>
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    );
};
export default CarouselList;

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import {Movie, TvSeries} from "@/lib/types";
import Image from "next/image";
import getBase64 from "@/lib/get-base64";
import {Link} from "next-view-transitions";
import {getSlug} from "@/lib/utils";

type Props = {
    title: string;
    data: Movie[] | TvSeries[]
    type: 'movie' | 'tv'
};
const CarouselList = ({title, data, type}: Props) => {

    return (
        <div className={'w-full'}>
            <h2 className={'font-bold text-xl'}>
                {title}
            </h2>
            <Carousel className="w-full mt-6">
                <CarouselContent className="-ml-1 w-full">
                    {data?.map(async (record) => {
                        const {id, backdrop_path, poster_path} = record;
                        const displayTitle = 'title' in record ? record.title : (record as TvSeries).name;

                        const blurData = await getBase64(`https://image.tmdb.org/t/p/original${poster_path}`)

                        return (
                            <CarouselItem key={id} className="pl-1 md:basis-1/2 lg:basis-1/5">
                                <Link href={`/${type}/${id}/${getSlug(displayTitle)}`} className={'group hover:cursor-pointer'}>
                                    <Image
                                        width={200}
                                        height={165}
                                        src={`https://image.tmdb.org/t/p/original${poster_path}`}
                                        blurDataURL={blurData}
                                        alt={displayTitle}
                                        className={'object-cover rounded'}
                                    />
                                    <h3 className={'max-w-[250px] text-sm font-semibold mt-4 group-hover:text-orange-600 group-hover:underline'}>
                                        {displayTitle}
                                    </h3>
                                </Link>
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

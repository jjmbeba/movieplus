import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

type Props = {
    title:string;
};
const CarouselList = ({title}: Props) => {
    return (
        <div className={'w-full'}>
            <h2 className={'font-bold text-xl'}>
                {title}
            </h2>
            <Carousel className="w-full mt-6">
                <CarouselContent className="-ml-1 w-full">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/6">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-2xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
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
export default CarouselList;

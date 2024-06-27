import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const Events = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center pt-14 gap-y-6">
            <div className="flex w-full justify-start items-start px-3 mb-10 lg:px-12">
                <h1 className="font-bold text-4xl flex w-full px-5 border-l border-black/50 uppercase">Events</h1>
            </div>
            <Carousel className="hidden lg:flex h-[500px] items-center justify-center mx-20 my-8 mt-20">
                <CarouselContent>
                    <CarouselItem className="lg:basis-1/3">
                        <Image src={'/assets/distribution/download.jpg'} width={800} height={500} alt="distibution" />
                    </CarouselItem>
                    <CarouselItem className="lg:basis-1/3">
                        <Image src={'/assets/distribution/download.jpg'} width={800} height={500} alt="distibution" />
                    </CarouselItem>
                    <CarouselItem className="lg:basis-1/3">
                        <Image src={'/assets/distribution/download.jpg'} width={800} height={500} alt="distibution" />
                    </CarouselItem>
                    <CarouselItem className="lg:basis-1/3">
                        <Image src={'/assets/distribution/download.jpg'} width={800} height={500} alt="distibution" />
                    </CarouselItem>
                    <CarouselItem className="lg:basis-1/3">
                        <Image src={'/assets/distribution/download.jpg'} width={800} height={500} alt="distibution" />
                    </CarouselItem>
                    <CarouselItem className="lg:basis-1/3">
                        <Image src={'/assets/distribution/download.jpg'} width={800} height={500} alt="distibution" />
                    </CarouselItem>
                    <CarouselItem className="lg:basis-1/3">
                        <Image src={'/assets/distribution/download.jpg'} width={800} height={500} alt="distibution" />
                    </CarouselItem>
                    <CarouselItem className="lg:basis-1/3">
                        <Image src={'/assets/download.png'} width={800} height={500} alt="distibution" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <button type="button" className="border px-6 py-4 rounded-xl mt-20 hover:bg-slate-400/30">
                <Link href={'/events'}>View All</Link>
            </button>
        </div>
    );
}

export default Events;
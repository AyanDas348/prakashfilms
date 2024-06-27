import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import Link from "next/link";


const Distribution = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center pt-14 mb-20">
            <div className="flex w-full justify-start items-start px-3 mb-14 lg:px-12">
                <h1 className="font-bold text-4xl flex w-full px-5 border-l border-black/50 uppercase">Distribution</h1>
            </div>
            <Carousel className="hidden lg:flex h-40 items-center justify-center mx-20 my-8 mt-24">
                <CarouselContent>
                    <CarouselItem className="lg:basis-1/5">
                        <Image src={'/assets/distribution/download.jpg'} width={800} height={500} alt="distibution" />
                    </CarouselItem>
                    <CarouselItem className="lg:basis-1/5">
                        <Image src={'/assets/distribution/download.jpg'} width={800} height={500} alt="distibution" />
                    </CarouselItem>
                    <CarouselItem className="lg:basis-1/5">
                        <Image src={'/assets/distribution/download.jpg'} width={800} height={500} alt="distibution" />
                    </CarouselItem>
                    <CarouselItem className="lg:basis-1/5">
                        <Image src={'/assets/distribution/download.jpg'} width={800} height={500} alt="distibution" />
                    </CarouselItem>
                    <CarouselItem className="lg:basis-1/5">
                        <Image src={'/assets/distribution/download.jpg'} width={800} height={500} alt="distibution" />
                    </CarouselItem>
                    <CarouselItem className="lg:basis-1/5">
                        <Image src={'/assets/distribution/download.jpg'} width={800} height={500} alt="distibution" />
                    </CarouselItem>
                    <CarouselItem className="lg:basis-1/5">
                        <Image src={'/assets/distribution/download.jpg'} width={800} height={500} alt="distibution" />
                    </CarouselItem>
                    <CarouselItem className="lg:basis-1/5">
                        <Image src={'/assets/distribution/download.jpg'} width={800} height={500} alt="distibution" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <ul className="flex flex-col lg:hidden gap-y-6">
                <li>
                    <Image src={'/assets/distribution/download.jpg'} alt="image" width={250} height={100} />
                </li>
                <li>
                    <Image src={'/assets/distribution/download.jpg'} alt="image" width={250} height={100} />
                </li>
                <li>
                    <Image src={'/assets/distribution/download.jpg'} alt="image" width={250} height={100} />
                </li>
            </ul>
            <button type="button" className="lg:hidden border px-6 py-4 rounded-xl mt-12 hover:bg-slate-400/30">
                <Link href={'/distribution'}>View All</Link>
            </button>
        </div>
    );
}

export default Distribution;
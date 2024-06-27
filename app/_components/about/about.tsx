import Image from "next/image";

const About = () => {
    return (
        <div className="flex w-full flex-col">
            <div className="flex w-full justify-start items-start px-3 lg:px-12">
                <h1 className="font-bold text-4xl flex w-full px-5 border-l border-black/50 uppercase">About us</h1>
            </div>
            <div className="w-full flex flex-col justify-center items-center pt-14 lg:flex-row lg:justify-between lg:px-6">
                <p className="w-full mx-auto px-6 pt-12 text-justify">
                    A film distribution and production company based in Cuttack, Odisha was established in the year 2014 by Prashant Behera. Since its inception, Prakash Films has witnessed a steady growth in film distribution. As a leading film distribution and production enterprise headquartered in Odisha, Prakash Films also holds the distinction of being the first distribution house to have received the “Best Distribution Company” award by ETC Bollywood in the year 2016.
                </p>
                <span className="pt-12 justify-start w-full items-start flex flex-col gap-x-1 gap-y-3">
                    <Image src={'/assets/icons8-film-reel-100.png'} alt="film-reel" width={50} height={50} />
                    <Image src={'/assets/icons8-film-reel-100.png'} alt="film-reel" width={50} height={50} />
                    <Image src={'/assets/icons8-film-reel-100.png'} alt="film-reel" width={50} height={50} />
                </span>
            </div>
        </div>
    );
}

export default About;
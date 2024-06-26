import Image from "next/image";
import Link from "next/link";

const Production = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center pt-14">
            <div className="flex w-full justify-start items-start px-3 mb-10 lg:px-12">
                <h1 className="font-bold text-4xl flex w-full px-5 border-l border-black/50 uppercase">Productions</h1>
            </div>
            <ul className="flex flex-col items-center justify-center mx-auto px-5">
                <li>
                    <Image src={''} alt="poster-1" layout="responsive"/>
                </li>
                <li>
                    <Image src={''} alt="poster-2" layout="responsive"/>
                </li>
            </ul>
            <button type="button" className="lg:hidden border px-6 py-4 rounded-xl mt-12 hover:bg-slate-400/30">
                <Link href={'/production'}>View All</Link>
            </button>
        </div>
    );
}

export default Production;
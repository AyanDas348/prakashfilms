import Image from "next/image";
import { Phone, MapPin, Mail } from 'lucide-react'
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" bg-black/80 text-white">
            <div className="lg:mt-44 flex lg:flex-row w-full flex-col-reverse pt-6">
                <ul className="flex flex-col items-start justify-start px-4 gap-y-8 pt-14 sm:justify-between sm:items-start sm:gap-x-5 sm:px-60">
                    <li className="flex flex-col gap-y-1">
                        <h3 className="flex gap-x-4"><MapPin />Address:</h3>
                        Plot No – 75, Bishram Nagar, Behind OSL Tower, Link Road, Cuttack, Odisha -753012
                    </li>
                    <li className="flex flex-col gap-y-1">
                        <h3 className="flex gap-x-4"><Phone />Call us:</h3>
                        +91 8249774879
                    </li>
                    <li className="flex flex-col gap-y-1">
                        <h3 className="flex gap-x-4"><Mail />Email:</h3>
                        prashant@prakashfilms.co.in
                    </li>
                    <li className="flex flex-col gap-y-1 w-full">
                        <h3>Follow us:</h3>
                        <span className="flex flex-row w-full h-24 gap-x-4 mt-2">
                            <Link href={'https://www.facebook.com/theprakashfilms'} className="w-10 h-10">
                                <FaFacebook className="w-8 h-8" />
                            </Link>
                            <Link href={'https://x.com/theprakashfilms'} className="w-10 h-10">
                                <FaTwitter className="w-8 h-8" />
                            </Link>
                            <Link href={'https://www.instagram.com/theprakashfilms'} className="w-10 h-10">
                                <FaInstagram className="w-8 h-8" />
                            </Link>
                        </span>
                    </li>
                </ul>
                <div className="flex items-center sm:justify-center justify-start px-4 gap-x-3 flex-col">
                    <Image src={'/assets/logo.png'} alt="logo" width={200} height={100} />
                    <p className="font-bold text-xl">Prakash Films</p>
                </div>
            </div>
            <p
                className="text-center text-[14px] font-medium sm:pt-5 pb-14"
            >
                © Copyright 2024. All Rights Reserved | Powered By IAMPIX
            </p>
        </div>
    );
}

export default Footer;
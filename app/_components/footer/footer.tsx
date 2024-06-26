import Image from "next/image";
import { Phone, MapPin, Mail } from 'lucide-react'
const Footer = () => {
    return (
        <div className="pt-20 pb-10 lg:mt-44">
            <div className="flex items-center sm:justify-start justify-start px-4 gap-x-3">
                <Image src={''} alt="logo" />
                <p className="font-bold">Prakash Films</p>
            </div>
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
                </li>
                <li className="flex flex-col gap-y-1">
                    <h3>Follow us:</h3>
                </li>
            </ul>
            <p
                className="pt-14 text-center text-[14px] font-medium sm:pt-5"
            >
                © Copyright 2024. All Rights Reserved | Powered By IAMPIX
            </p>
        </div>
    );
}

export default Footer;
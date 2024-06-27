import Image from 'next/image';
import styles from './index.module.css'
import { Menu } from 'lucide-react';
import { navbarRoutes } from '../../../constants/navbarRoutes.js'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import Sidebar from './sidebar';
import Link from 'next/link';
import { Home, Tv, Presentation, Phone, Info, Calendar } from 'lucide-react';

const Navbar = () => {
    const icons = [Home, Info, Tv, Calendar, Presentation, Phone];

    return (
        <nav className="sticky top-0 bg-white/80 z-50 w-full shadow-md">
            <div className="flex w-full px-4 py-5 items-center justify-between lg:container lg:mx-auto lg:px-20">
                <div>
                    <Image src={'/assets/logo.png'} alt='logo' width={50} height={50} />
                </div>

                <Sheet>
                    <SheetTrigger className="">
                        <Menu className='lg:hidden' />
                    </SheetTrigger>
                    <SheetContent side="top" className="p-0 text-white">
                        <Sidebar />
                    </SheetContent>
                </Sheet>
                
                <div className='hidden lg:flex pl-16 gap-x-14'>
                    {navbarRoutes?.map((item, index) => {
                        const Icon = icons[index];
                        return (
                            <Link
                                href={item.href}
                                key={item.id}
                                className='text-[#36485c] font-medium cursor-pointer flex gap-2 items-center justify-center'
                            >
                                <Icon />
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

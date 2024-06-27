import { navbarRoutes } from "@/constants/navbarRoutes";
import Image from "next/image";
import SidebarItem from "./sidebar-item";

const Sidebar = () => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-[#0b0f19] text-[#f4f4f6] shadow-sm">
            <div className="p-6">
                <Image
                    alt="logo"
                    src={"/assets/logo.png"}
                    width={50}
                    height={50}
                />
            </div>
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-full">
                    {navbarRoutes.map((route) => (
                        <SidebarItem
                            key={route.href}
                            label={route.title}
                            href={route.href}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
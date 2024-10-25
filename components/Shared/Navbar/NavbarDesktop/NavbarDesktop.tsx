"use client";
import { cn } from "@/lib/utils"
import { BellRing, Search } from "lucide-react";
import { Logo } from "../../Logo";
import { itemsNavbar } from "@/data/itemsNavbar";
import Link from "next/link";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export function NavbarDesktop(){
    const scrollPosition = useScrollPosition();
    return (
    <div className={cn(
        "z-30 left-0 right-0 top-0 h-16 fixed w-full transition-all duration-300",
        scrollPosition > 20 ? "bg-black shadow-lg" : "bg-transparent shadow-none"
        )}
        >
        <div className="px-[4%] mx-auto h-full">
            <div className="flex gap-4 justify-between h-full items-center"> 
                <div className="flex gap-2 items-center">
                    <Logo />
                    <div className="ml-10 flex gap-4">
                        {itemsNavbar.map((item) => (
                            <Link key={item.name} href={item.link} className="hover:text-gray-300 transition-all duration-300">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="flex gap-2">
                        <Search className="cursor-pointer"/>
                        <BellRing className="cursor-pointer"/>
                    </div>
                    <div className="flex gap-2 items-center">
                        {/* Todo: Add user profile */}
                        <img src="https://i.ibb.co/0k0m5tL/notification.png" alt="notification" className="w-6 h-6" />
                        <img src="https://i.ibb.co/0k0m5tL/bell.png" alt="bell" className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </div> 
   </div>
   );
}
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";
const headerList = [
    { title: "HOME", icon: HomeIcon },
    { title: "TRENDING", icon: LightningBoltIcon },
    { title: "VERIFIED", icon: BadgeCheckIcon },
    { title: "COLLECTIONS", icon: CollectionIcon },
    { title: "SEARCH", icon: SearchIcon },
    { title: "ACCOUNT", icon: UserIcon },
];
function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between h-auto items-center">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                {headerList.map(item => (
                    <HeaderItem Title={item.title} Icon={item.icon} />
                ))}
            </div>
            <Image className="object-contain" src="https://links.papareact.com/ua6" width={200} height={100}></Image>
        </header>
    );
}

export default Header;

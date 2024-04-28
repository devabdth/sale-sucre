"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import DefaultButton from "./DefaultButton";
import { faBars, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Tabs } from "@/prefs/Consts";

export default () => {
    const pathName= usePathname();
    return <header className="default-container bg-primary flex-row h-[10vh] lg:justify-between justify-start items-center">
        <div className="lg:hidden flex">
            <DefaultButton 
                title="" onClick={ () => {} }
                iconHeight={32} iconWidth={32}
                iconSize="lg" icon={faBars}
                iconHoverColor="text-background" iconColor="text-background"
                variant="shadowIcon"
            />
        </div>
        <Link href="/">
            <Image
                width={64} height={64}
                src="/logo-bg.png" alt="Sale Surce Logo"
                className="object-center object-contain"
            ></Image>
        </Link>
        <nav className="items-center justify-center w-full lg:flex flex-row gap-4 hidden">
            {Tabs.map((tab, i) => <Link 
                href={tab.href} key={i}
                className={`font-secondary text-[14px] `+ (pathName === tab.href ? "font-bold text-background" : "font-normal text-background/50 hover:text-background transition-all duration-500")}
            >{tab.label}</Link>)}
        </nav>
        <div className="hidden lg:flex">
            <DefaultButton title="Get you Torte" variant="secondary" onClick={ () => { window.open("/", "_self"); }} icon={faChevronCircleRight} iconSize="lg" iconWidth={24} iconHeight={24} iconColor="text-primary" iconHoverColor="text-background"/>
        </div>
    </header>
}

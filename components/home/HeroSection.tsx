"use client"
import Image from "next/image";
import React from "react";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";
import { DefaultButton } from "../globals";

const TorteComponent= () => {
    const parallax= useParallax<HTMLImageElement>({ speed: -10, rotate: ["-45", "45", "easeIn"] });
    return <div className="w-[90%] mt-[15vh]">
        <Image
            src="/torte.png" alt="Sale Sucre Torte"
            ref={parallax.ref} width={940} height={940}
            className="object-center object-cover w-full border-2"
        ></Image>
    </div>
}

const HeroSection= () => {
    return <ParallaxProvider>
        <section className="w-full h-[100vh] pt-[10vh] bg-primary relative overflow-hidden">
            <Image 
                className="w-full h-full absolute top-0 object-cover object-center opacity-10"
                src="/hero-doodle.png" alt="Sale Sucre Doodle"
                width={1246} height={720}
            ></Image>
            <div className="absolute overflow-hidden flex flex-col items-center justify-start lg:px-28 md:px-4 px-2 lg:pt-3 md:pt-2 pt-1">
                <div className="items-center justify-start flex flex-col wt-full z-[50] gap-2">
                    <h1 className="text-center text-background-secondary font-secondary font-normal lg:text-[24px] md:text-[18px] text-[20px]">Discover Exquisite French-Inspired Desserts<br/><span className="lg:text-[72px] md:text-[56px] text-[48px] font-extrabold font-primary text-background">Indulge in Sweet Moments</span></h1>
                    <p className="lg:px-28 px-4 text-background/50 font-secondary font-normal text-center md:text-[16px] text-[12px]">Our story blends French elegance with Middle Eastern delight since 1999. With 40 stores across Egypt, UAE, and Kuwait, we bring you a slice of France in the heart of the Middle East. Explore our menu and order online for a taste of luxury.</p>
                    <div className="flex flex-row flex-wrap items-center justify-center gap-2">
                        <DefaultButton title="Explore Our Menu" onClick={ () => {} } variant="secondary" />
                        <DefaultButton title="Order Now" onClick={ () => {} } variant="shadow" />
                    </div>
                </div>
                <TorteComponent />
            </div>
        </section>
    </ParallaxProvider>
}

export default HeroSection;

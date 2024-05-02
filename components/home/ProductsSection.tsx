"use client"
import { Products } from "@/prefs/Consts";
import Image from "next/image";
import React from "react";
import { DefaultButton } from "../globals";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductsSection= () => {
    return <section className="default-container flex flex-col items-center justify-center gap-4 lg:py-14 py-4">
        <h3 className="lg:text-5xl font-primary text-primary text-center font-bold">Trending Delights</h3>
        <p className="lg:px-32 font-secondary text-text-primary text-sm font-normal text-center">A curated selection of our finest, from the velvety Golden Kunafa Cups to the nutty Baklava Bites and the sweet Date Ma’amoul. Experience the flavors that captivate our customers.</p>
        <div className="w-full h-full items-center grid lg:grid-cols-3 grid-cols-2 lg:gap-x-8 lg:gap-y-8 gap-x-4 gap-y-2 mt-[2.5vw]">
            {Products.map((prod, i) => {
                const radiusesTop= `rounded-tr-[128px] rounded-tl-[72px] rounded-bl-[175px] rounded-br-[215px]`
                const radiusesBottom= `rounded-br-[128px] rounded-bl-[72px] rounded-tl-[175px] rounded-tr-[215px]`
                return <div className="w-full md:h-[480px] h-[512px] relative" key={i}>
                     <Image
                        src={prod.image} alt={prod.title}
                        width={480} height={480}
                        className={`object-cover object-center w-[70%] md:min-w-[70%] min-w-[40vw] aspect-square ${prod.arrowMode === "top" ? "top-0" : "bottom-0"} left-[50%] -translate-x-[50%] absolute ${prod.arrowMode === "top" ? radiusesTop : radiusesBottom} shadow-[0_0_30px_1px_rgba(0,0,0,0.4)]`}
                    ></Image>        
                    <div className={`w-[70%] md:min-w-[70%] min-w-[40vw] aspect-square ${prod.arrowMode === "top" ? "top-2" : "bottom-2"} left-[50%] -translate-x-[52%] absolute ${prod.arrowMode === "top" ? radiusesTop : radiusesBottom} border-4 border-background-secondary`}></div>
                    <Image className={`top-[50%] absolute -translate-y-[50%] w-[48px] opacity-50 ${prod.arrowMode !== "top" ? "left-0": "right-0"}`} alt="Arrow" width={512} height={512} src={prod.arrowMode !== "top"?"/arrow-top.png":"/arrow-bottom.png"}></Image>
                    <div className={`w-full h-[40%] absolute ${prod.arrowMode!=="top"?"md:top-0 top-12 justify-end":"md:bottom-0 bottom-12 justify-top"} flex flex-col items-start justify-start px-8 py-4`}>
                        <h3 className="text-primary font-secondary font-bold text-xl lg:text-2xl">{prod.title}</h3>
                        <p className="text-text-secondary font-secondary font-normal text-xs lg:text-sm">{prod.desc}</p>
                        <p className="text-primary font-secondary font-extrabold text-xl">{prod.price}{" "}<span className="text-text-secondary font-secondary font-normal text-sm">EGP</span></p>
                        <div className="w-full items-center justify-end gap-2 flex">
                            <DefaultButton variant="shadowIcon" iconColor="text-primary" iconSize="lg" iconHeight={32} iconWidth={32} icon={faHeart} title="" onClick={ () => {} } />
                            <DefaultButton variant="primaryIcon" iconColor="text-background" iconSize="lg" iconHeight={32} iconWidth={32} icon={faCartPlus} title="" onClick={ () => {} } />
                        </div>
                    </div>
                </div>
                }
            )}
        </div>
    </section>
}

export default ProductsSection;

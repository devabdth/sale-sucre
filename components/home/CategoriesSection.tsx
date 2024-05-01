import { Services } from "@/prefs/Consts";
import Image from "next/image";
import React from "react";

const CategoriesSection= () => {
    return <section className="default-container w-full lg:max-h-[150vh] max-h-[500vh] flex-col items-center justify-start lg:py-14 md:py-2 py-1">
        <h2 className="lg:text-[72px] text-[48px] text-primary font-primary font-bold">Our Menu</h2>
        <p className="lg:text-[16px] text-[12px] font-secondary font-normal text-text-secondary">Taste the Magic: Our Culinary Symphony</p>
        <div className="w-full h-full bg-background-secondary rounded-lg flex-col lg:px-4 lg:py-2 md:py-4 px-2 py-1 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-3 lg:gap-x-[1vw] gap-x-[2vw] gap-y-[2vw] mt-[2vw]">
            {Services.map((service, i) => <div key={i}>
                <div className="w-full lg:h-[8vw] flex lg:flex-row md:flex-row flex-col items-center justify-start rounded-2xl bg-background lg:px-4 lg:py-2 px-2 py-1 " key={i}>
                    <div className="lg:w-[14vw] md:w-[35%] w-full lg:aspect-auto md:aspect-auto lg:h-full md:h-full aspect-square border-primary overflow-hidden rounded-2xl">
                        <Image
                            className="w-full h-full object-cover object-center"
                            src={service.image} alt={service.label}
                            width={356} height={356}
                        ></Image>
                    </div>
                    <div className="w-full lg:h-full md:h-full h-auto flex flex-col items-start lg:justify-center md:justify-center justify-start px-2 py-1">
                        <p className="px-1 py-1 bg-background-secondary text-primary rounded-lg font-normal text-xs font-secondary">{service.products} Products</p>
                        <h3 className="text-primary font-secondary font-bold">{service.label}</h3>
                        <p className="font-secondary text-text-secondary font-light text-[10px]">{service.description}</p>
                    </div>
                </div>
            </div>)}
        </div>
    </section>
}

export default CategoriesSection;

"use client"
import { Testmonials } from "@/prefs/Consts";
import React from "react";
import { DefaultButton } from "../globals";
import { faChevronLeft, faChevronRight, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const TestmonialsSection= () => {
    return <section className="flex flex-col items-center justify-center lg:gap-y-8 gap-y-4 lg:py-14 py-4">
        <div className="w-full lg:h-[30vw] md:h-[50vw] h-[80vw] flex flex-row items-center justify-center lg:gap-12 gap-4 overflow-hidden py-12">
            {Testmonials.map((testmonial, i) => <div className="lg:min-w-[720px] min-w-[80vw] h-full bg-background rounded-2xl shadow-[0_0_30px_1px_rgba(0,0,0,0.25)]
                flex flex-col items-center justify-center lg:px-8 lg:py-4 px-4 py-2">
                <div className="p-4 rounded-full bg-primary/25">
                    <FontAwesomeIcon icon={faQuoteRight} size="2xl" className="text-primary" />
                </div>
                <p className="text-text-primary font-bold font-secondary lg:text-lg text-center my-auto">{testmonial.message}</p>
                <div className="flex w-full items-center justify-center gap-3">
                    <Image
                        src={testmonial.image} alt="Testmonial"
                        width={128} height={128}
                        className="rounded-full border-2 border-primary w-[48px]"
                    ></Image>
                    <p className="text-primary font-secondary font-semibold text-lg">{testmonial.person}</p>
                </div>
                <p className="text-text-secondary font-secondary font-light text-xs">{testmonial.position}</p>

            </div>)}
        </div>
        <div className="w-full lg:h-[5vw] h-[10vw] flex flex-row items-center justify-center lg:gap-4 gap-2">
            <DefaultButton icon={faChevronLeft} iconColor="text-background" iconSize="lg" iconWidth={32} iconHeight={32} variant="primaryIcon" title="" onClick={ () => {} }/>
            <DefaultButton icon={faChevronRight} iconColor="text-background" iconSize="lg" iconWidth={32} iconHeight={32} variant="primaryIcon" title="" onClick={ () => {} }/>
        </div>
    </section>
}

export default TestmonialsSection;

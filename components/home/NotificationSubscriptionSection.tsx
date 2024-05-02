"use client"
import Image from "next/image";
import React from "react";
import { DefaultButton } from "../globals";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const NotificationSubscriptionSection= () => {
    return <section className="w-full lg:h-[35vw] md:h-[50vw] h-[70vw] lg:px-28 lg:py-14 px-4 py-2">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
                src="/notification-background.jpg" alt="Pastry Kitchen"
                width={1224} height={816}
                className="object-cover object-center w-full h-ull absolute top-0"
            ></Image>
            <div className="bg-text-primary/75 w-full h-full absolute top-0"></div>
            <div className="bg-primary/25 w-full h-full items-center justify-center flex flex-col absolute top-0 gap-2">
                <h3 className="text-secondary font-secondary lg:text-6xl text-5xl font-bold">Join Our Sweet Circle</h3>
                <p className="text-secondary/75 font-secondary lg:text-xs text-center lg:px-28 px-4">Become part of our exclusive community and be the first to savor new creations and irresistible deals. Subscribe now and let the sweetness come to you!</p>
                <div className="rounded-full w-[80%] bg-background xl:h-[4vw] lg:h-[4.5vw] md:h-[6.5vw] h-[8vw] items-center justify-between flex flex-row px-4">
                    <input placeholder="info@example.com" className="w-[50%] bg-transparent font-secondary text-primary font-bold h-full focus:outline-none active:outline-none" />
                    <DefaultButton title="Sign Up" variant="primary" onClick={ () => {} } />
                </div>
            </div>
        </div>
    </section>
}

export default NotificationSubscriptionSection;

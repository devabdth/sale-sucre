import React from "react";
import Image from "next/image";

const WhyChooseUsSection= () => {
    return <section className="w-full h-[45vw] flex flex-col items-center justify-between gap-8 bg-variant py-12">
      <h2 className="text-6xl text-primary font-extrabold px-72 text-center">
        Good Things Happen to
        <br />
        <span className="text-secondary text-[3.25rem]">
          Those Who Are Interseted!
        </span>
      </h2>
      <p className="px-[25%] font-normal text-text-primary text-md text-center font-secondary">
        From Humble Beginnings to Sweet Success: Celebrating Our Journey in Every Bite, Cherishing Memories in Every Flavor, Since 1999.
        </p>
      <div className="w-full min-h-[25vw] flex flex-row items-center justify-between gap-16">
        <div className="w-full rounded-r-lg h-full overflow-hidden">
          <Image
            src="/store.jpg"
            alt="Project One"
            width={1920}
            height={1080}
            className="flex w-full h-full object-cover object-center"
          ></Image>
        </div>
        <div className="w-full rounded-l-lg h-full overflow-hidden">
          <Image
            src="/kitchen.jpg"
            alt="Project Two"
            width={1920}
            height={1080}
            className="flex w-full h-full object-cover object-center"
          ></Image>
        </div>
      </div>
    </section>
}

export default WhyChooseUsSection;

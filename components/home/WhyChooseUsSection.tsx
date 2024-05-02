import React from "react";
import Image from "next/image";

const WhyChooseUsSection= () => {
    return <section className="w-full lg:h-[45vw] md:h-[70vw] h-[85vw] flex flex-col items-center justify-between gap-8 bg-variant py-12">
      <h2 className="lg:text-6xl md:text-3xl text-2xl text-primary font-extrabold lg:px-72 px-2 text-center">
        Good Things Happen to
        <br />
        <span className="text-secondary lg:text-[3.25rem] md:text-4xl text-3xl">
          Those Who Are Interseted!
        </span>
      </h2>
      <p className="lg:px-[25%] px-4 font-normal text-text-primary text-sm text-center font-secondary">
        From Humble Beginnings to Sweet Success: Celebrating Our Journey in Every Bite, Cherishing Memories in Every Flavor, Since 1999.
        </p>
      <div className="w-full lg:min-h-[25vw] min-h-[40vw] flex flex-row items-center justify-between lg:gap-16 gap-4">
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

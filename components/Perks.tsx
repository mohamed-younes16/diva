"use client";
import { motion as m } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { EmblaOptionsType } from "embla-carousel";

const Perks = () => {
  const featuredBy = [
    "figma.svg",
    "dribble.svg",
    "ui8.svg",
    "webflow.svg",
    "framer.svg",
  ];
  const cards = [
    {
      title: "Top Quality",
      desc: "A design wizard that delivers top-notch masterpieces whenever you crave it!",
      icon: "/top.svg",
    },
    {
      title: "Super Speedy",
      desc: "Transform your design into review-ready perfection in only a 3-5 business days, on average.",
      icon: "/fast.svg",
    },
    {
      title: "Fix Monthly Rate",
      desc: "No more hidden fees or surprise charges - you'll pay the exact same amount every single month.",
      icon: "/fix.svg",
    },
    {
      title: "Flexible",
      desc: "Upgrade, downgrade, cancel, or hit pause of subscription services, always ready to accommodate your ever-changing needs.",
      icon: "/flexible.svg",
    },
    {
      title: "Trello Collabs",
      desc: "Invite us to your Trello board, and we'll be your ultimate collaboration BFFs. Working alongside you like we're in the same boat.",
      icon: "/trello.svg",
    },
    {
      title: "Money-back guarantee",
      desc: "We're pretty sure this won't happen, but if it doesn't tickle your fancy within a week, we'll gladly give your money back!",
      icon: "/guard.svg",
    },
  ];
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    skipSnaps: true,
    duration: 20,
    dragFree: true,
  };
  return (
    <>
      <div className="h-[65dvh] flex  items-center
       flex-wrap bg-c  max-md:bg-[#12131e] 
       max-md:pt-16 pt-4 mt-24 flex-col gap-36
        bg-[length:105dvw] m bg-[url(/assets/pattern.svg)] bg-no-repeat max-md:bg-contain">
        <div className="w-full">
          <p className="text-center mb-4"> Our works has been featured by</p>
          <div className="flex gap-6 w-full  ">
            <Carousel opts={OPTIONS} className="w-full max-w-6xl mx-auto flexcenter  border-none">
              <CarouselContent className="  ">
                {featuredBy.map((e, i) => (
                  <CarouselItem
                    className="  max-w-[120px] mx-12 max-md:mx-4 !ring-0 
                !shadow-none border-none h-fit  w !outline-none  relative"
                    key={i}
                  >
                    <Image
                      alt=""
                      key={e}
                      height={50}
                      width={100}
                      src={`/assets/${e}`}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        <div className="flexcenter gap-6 flex-col max-lg:mt-0 mt-[15dvh]">
          <m.h1
            initial={{ opacity: 0, x: 100 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 250,
              damping: 15,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=" font-bold text-center text-5xl max-w-3xl"
          >
            Awesome Membership Perks
          </m.h1>
          <m.h1
            initial={{ opacity: 0, x: -100 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 250,
              damping: 15,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=" text-center text-accent max-w-md"
          >
            With a DIVADSGN subscription, you'll get stress-free design like
            magic, delivering consistent quality at a steady price.
          </m.h1>
        </div>
      </div>
      <div className="min-h-[150dvh]   bg-[linear-gradient(180deg_,_#12131e_80%,transparent)] bg-cover">
        <div className=" grid  max-w-[1400px] mx-auto gap-4  grid-cols-[repeat(auto-fill_,_minmax(410px_,1fr))]  justify-center  ">
          {cards.map((e) => (
            <div
              className="px-10 max-lg:h-[350px] max-lg:w-[370px] h-[416px] mx-auto w-[410px]
              flexcenter bg-cover  transition-all rounded-3xl  duration-300  hover:scale-[101%]
             bg-[url(/assets/card.png)]  flex-col"
            >
              <Image alt="" height={100} width={100} src={`/assets${e.icon}`} />
              <h3 className="mt-10 mb-7 text-center max-lg:mt-6 text-2xl font-semibold">
                {e.title}
              </h3>
              <p className="text-[#ECECEC] text-center  ">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Perks;

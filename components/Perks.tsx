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
import Heading from "./Heading";
import { Button } from "./ui/button";

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
  const howitworks = [
    {
      title: "Sign up and make request",
      desc: "After completing the sign-up process, you'll be granted access to your very own Trello board where you can freely submit endless design requests.",
    },
    {
      title: "Working on design",
      desc: "Our team is committed to gettin' it done, with an impressive turnaround time of just 3 working days per request.",
    },
    {
      title: "Sign up and make request",
      desc: "After completing the sign-up process, you'll be granted access to your very own Trello board where you can freely submit endless design requests.",
    },
  ];
  return (
    <div>
      <div
        className="h-[65dvh] flex  items-center
       flex-wrap  
       max-md:pt-16 pt-24 flex-col gap-36
        bg-[length:105dvw]  m bg-[url(/assets/pattern.svg),linear-gradient(0deg,#12131e_24%,transparent)] bg-no-repeat"
      >
        <div className="w-full">
          <p className="text-center mb-4"> Our works has been featured by</p>
          <div className="flex gap-6 w-full  ">
            <Carousel
              opts={OPTIONS}
              className="w-full max-w-6xl mx-auto flexcenter  border-none"
            >
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

        <div
          id="benifits"
          className="flexcenter px-4 gap-6 flex-col max-lg:mt-0 mt-[15dvh]"
        >
          <m.h1
            initial={{ opacity: 0, x: 100 }}
            transition={{
              duration: 1,
              type: "spring",
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=" font-bold text-center text-5xl max-md:text-3xl max-w-3xl"
          >
            Awesome Membership Perks
          </m.h1>
          <m.h1
            initial={{ opacity: 0, x: -100 }}
            transition={{
              duration: 1,
              type: "spring",
              delay: 0.5,
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
      <div className="pb-20  bg-[linear-gradient(180deg_,_#12131e_80%,transparent)] bg-cover">
        <div className=" grid  max-w-[1400px] mx-auto gap-4  grid-cols-[repeat(auto-fill_,_minmax(410px_,1fr))]  justify-center  ">
          {cards.map((e) => (
            <div
              key={e.title}
              className="px-10 max-lg:h-[350px] max-lg:w-[370px] h-[416px] mx-auto w-[410px]
              flexcenter bg-cover  transition-all rounded-3xl  duration-300  hover:scale-[101%]
             bg-[url(/assets/card.avif)]  flex-col"
            >
              <Image
                alt="image"
                height={100}
                width={100}
                src={`/assets${e.icon}`}
              />
              <p className="mt-10 mb-7 text-center max-lg:mt-6 text-2xl font-semibold">
                {e.title}
              </p>
              <p className="text-[#ECECEC] text-center  ">{e.desc}</p>
            </div>
          ))}
        </div>
        <div>
          <div id="work" className="flexcenter  mt-20 flex-col gap-4">
            <Heading
              title="How does DIVADSGN work?"
              desc="You can effortlessly throw in, organize, and keep tabs on all your requests using your very own Trello board."
            />
            <div className="flexcenter mt-9 flex-col  gap-7 px-6">
              {howitworks.map((e, i) => (
                <div
                  key={i}
                  className={`flex relative z-20 items-center  w-full gap-16 max-md:gap-6 ${
                    i % 2 === 0 && "flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <m.h1
                      initial={{ opacity: 0, x: 100 }}
                      transition={{
                        delay: i * 0.5,
                        duration: 1,
                        type: "spring",
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className=" font-bold mb-7  max-md:text-xl text-2xl max-w-3xl"
                    >
                      {e.title}
                    </m.h1>
                    <m.h1
                      initial={{ opacity: 0, x: -100 }}
                      transition={{
                        delay: i * 0.5,
                        duration: 1,
                        type: "spring",
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className=" max-md:text-sm   text-accent max-w-md"
                    >
                      {e.desc}
                    </m.h1>
                  </div>
                  <div className="flex-1">
                    <Image
                      src={`/assets/itworks${i + 1}.svg`}
                      alt="image"
                      height={400}
                      width={400}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-[40vh] border-zinc-400 border-[1px] px-4 relative mt-10 flexcenter flex-col gap-6 bg-cover bg-[#acacac28] w-[80dvw] max-w-5xl mx-auto  rounded-xl">
            <div className="absolute  w-full h-36  blur-xl -top-[30%] -z-10 bg-blue-400/30 rounded-full"></div>
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
              className=" font-bold text-center max-md:text-3xl text-5xl max-w-3xl"
            >
              We'll join your squad, putting the collab in collaboration.
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
              Manage your requests like a boss with our oh-so-fabulous feature.
            </m.h1>
            <Button className="rounded-full bg-[linear-gradient(50deg,#FF536B,#FF536B)] ">
              Book 15-min call{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perks;

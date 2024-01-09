"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { OPTIONS } from "./Landing";
import Image from "next/image";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const data = [
    {
      icon: "test1.png",
      desc_init: "Collaborating with DIVADSGN was an absolute delight!",
      desc_main:
        "Their team's boundless creativity and meticulousness went above and beyond our wildest expectations.",
      rating: 5,
      name: "Jason Dom",
      post: "Startup Founder",
    },
    {
      icon: "test2.png",
      desc_init: "Absolutely mind-blowing skills and absolute professionalism!",
      desc_main:
        "  They absolutely skyrocketed our project with their groundbreaking ideas and impeccable implementation.",
      rating: 5,
      name: "Michel Charter  ",
      post: "Startup Founder",
    },
    {
      icon: "test2.png",
      desc_init: " Kudos to the design agency for their outstanding work!",

      desc_main:
        "Their dedication to excellence and innovation was evident from the very first brainstorming session to the final masterpiece.",
      rating: 5,
      name: "Robert Jack",
      post: "Entrepreneurs",
    },
  ];
  const [api, setApi]: any = useState();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div id="testimonials" className="w-full relative flexcenter flex-col gap-14 mb-32">
            <div className="absolute    blur-2xl !duration-5000  top-0 w-[50vw] opacity-30 right-0 h-[40dvh] bg-cover bg-[url(/assets/blurBlue.svg)] "></div>
            <div className="absolute    blur-2xl !duration-5000  bottom-0 w-[50vw] opacity-30 left-0 h-[40dvh] bg-cover bg-[url(/assets/blurBlue.svg)] "></div>
      <h1 className="text-4xl font-bold text-center">What clients say about us</h1>
      <Carousel setApi={setApi} opts={OPTIONS} className="w-full max-w-7xl ">
        <CarouselContent>
          {data.map((e, index) => (
            <CarouselItem
              key={index}
              className={`basis-1/3 mx-6 transition-[opcaity]  pb-8 max-sm:basis-2/3
              ${current !== index + 1 && "opacity-30"}
               border-b-[#5D4343] border-b-[2px]`}
            >
              <div className="p-1 min-h-[40dvh]  flexcenter gap-4 flex-col ">
                <p className="text-secondary text-center max-w-sm">
                  {e.desc_init}
                </p>
                <p className="text-secondary  text-center max-w-sm mt-8 mb-6">
                  {e.desc_main}
                </p>
                <Image
                  src={`/assets/${e.icon}`}
                  alt="image"
                  height={50}
                  width={50}
                />
              </div>
              <p className="text-secondary text-center max-w-sm">{e.name}</p>
              <p className="text-secondary/80  text-center max-w-sm mt-2 mb-6">
                {e.post}
              </p>
              <div className="flexcenter gap-2">
                {Array.from({ length: e.rating }).map((e, i) => (
                  <Star
                    key={i}
                    className="text-yellow-500 fill-yellow-400 h-8 w-8 "
                  />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant={"ghost"} className="" />
        <CarouselNext variant={"ghost"} />
      </Carousel>
    </div>
  );
};

export default Testimonials;

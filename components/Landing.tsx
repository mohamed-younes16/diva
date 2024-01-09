"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion as m } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";
import { EmblaOptionsType } from "embla-carousel";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
export const OPTIONS: EmblaOptionsType = {
  loop: true,
  skipSnaps: true,
  duration: 20,
  dragFree: true,
};
const Landing = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="pt-36 flex items-center  bg-center flex-col gap-6 bg-cover min-h-screen max-md:bg-[url(/assets/landing.png)]">
      <Image height={50} width={200} src={"/assets/logo.svg"} alt="diva logo" />
      <Image
        fill
        className="-z-10 bg-cover max-md:hidden !h-fit "
        src={"/assets/landing-min.webp"}
        loading="eager"
        alt="diva logo"
      />
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
        One fixed fee a month gets you unlimited design goodness.
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
        Feel free to ask for changes a bazillion times —we've got you covered!
      </m.h1>
      <Button className="rounded-full bg-[linear-gradient(50deg,#FF536B,#FF536B)] ">
        Book 15-min call{" "}
      </Button>
      <div className="flexcenter gap-3">
        <Image
          src={`/assets/sand-clock.svg`}
          height={30}
          width={30}
          alt="sand clock"
        />
        <p>2 slots remaining</p>
      </div>
      <div
        className="py-6 relative  overflow-  max-md:mx-2    rounded-2xl  
       bg-zinc-400/10
      pb-24 flex items-center flex-col   "
      >
        <Image
          loading="eager"
          alt="image"
          fill
          className="-z-10 backdrop-blur-xl"
          src={"/assets/carousel-min.webp"}
        />

        <m.div
          initial={{ opacity: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "spring",
            stiffness: 250,
            damping: 15,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className=" max-w-[800px] max-md:max-w-[95dvw] flexcenter flex-col  gap-6 overflow-hidden"
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <Carousel
              opts={OPTIONS}
              plugins={[
                Autoplay({
                  delay: 2000 * (index + 1),
                  stopOnInteraction: true,
                  stopOnMouseEnter: true,
                }),
              ]}
              key={index}
              className="w-full flexcenter  border-none"
            >
              <CarouselContent className="  ">
                {Array.from({ length: 4 }).map((_, i) => (
                  <CarouselItem
                    className="  basis-1/3 !ring-0 
                !shadow-none h-[250px] max-md:h-[110px] max-md:w-[125px] w-[300px] border-none  min-w-[40%] !outline-none  relative"
                    key={i}
                  >
                    <Image
                      loading="eager"
                      alt="image"
                      className="border-none bg-contain "
                      src={`/assets/Card-${4 * index + i}.webp`}
                      height={250}
                      width={300}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          ))}
        </m.div>

        <Button variant={"ghost"} className="rounded-full bg-[#ffffff26] mt-10">
          {" "}
          view recent works{" "}
        </Button>
      </div>
    </div>
  );
};

export default Landing;

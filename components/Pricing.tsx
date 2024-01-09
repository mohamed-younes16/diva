import React from "react";
import Heading from "./Heading";
import { CheckCircleIcon, DollarSign } from "lucide-react";
import { Button } from "./ui/button";

const Pricing = () => {
  const data = [
    {
      tier: "Standard",
      desc: "Experience the excellence of our services with a handful of small projects.",
      price: 999,
      features: [
        "One request at a time",
        "Two weeks design sprint",
        "Unlimited requests & revisions",
        "Up to 1 meeting per week",
        "Dev ready Figma files",
        "Unlimited Stock Photos",
      ],
    },
    {
      tier: "Premium",
      desc: "Ideal for burgeoning startups seeking continuous design assistance.",
      price: 2999,
      features: [
        "One request at a time",
        "3 -5 business days delivery",
        "Unlimited requests & revisions",
        "Up to 1 meeting per wehek",
        "Dev ready Figma files",
        "Unlimited Stock Photos",
      ],
    },
    {
      tier: "Premium +",
      desc: "Ideal for burgeoning startups seeking continuous design assistance.",
      price: 3499,
      features: [
        "Two request at a time",
        "3 -5 business days delivery",
        "Unlimited requests & revisions",
        "Flexible weekly meetings",
        "Dev ready Figma files",
        "Unlimited Stock Photos",
      ],
    },
  ];
  return (
    <div id="pricing">
      <div className="flexcenter flex-col gap-8">
        <Heading
          title="Plans & Pricing"
          desc="No shady charges, no unexpected shocks! Stick to one flat fee, month after month.
No money surprises here!"
        />
      </div>
      <div className="py-16 max-md:px-4 max-xl:flex-col  max-xl:gap-6 relative flexcenter">
        <div className="absolute blur-2xl  duration-5000  bottom-0  translate-y-1/2 max-h-[100dvh] rounded-full w-2/3 skew-x-12 opacity-20 left-0 h-full bg-cover bg-pink-400/30"></div>
        <div className="absolute  lg:animate-pulse blur-2xl duration-5000  top-0 w-[60vw] opacity-40 right-0 h-[70dvh] bg-cover bg-[url(/assets/blurBlue.svg)] "></div>
        {data.map((e, i) => (
          <div
            className={`backdrop-blur-lg hover:z-30   hover:-translate-y-2 hover: transition-all 
         
          ${
            i === 1
              ? "z-20 border-red-500/40 bg-red-300/5 bg-[url(/assets/premium.png)  min-h-[80dvh] !shadow-red-600/30 transition-all shadow-lg hover:shadow-xl"
              : "min-h-[75dvh]  border-white/30  z-10  bg-zinc-400/10"
          } ${
              i >= 1 && "xl:-ml-6 "
            } border-[1px] rounded-2xl   bg-cover relative p-7  `}
          >
            <div className="text-3xl gap-3 flex items-center mb-14">
              {e.tier}
              {i === 1 && (
                <p className="bg-blue-600 p-1 rounded-lg text-lg">Popular</p>
              )}{" "}
            </div>
            <p className="text-secondary/80 max-h border-b-[1px] pb-6 border-b-zinc-400/50 max-w-sm">
              {e.desc}{" "}
            </p>
            <div className="flex items-center mt-6">
              <DollarSign className="w-5 h-5  self-start" />
              <p className="text-4xl font- font-bold">{e.price} </p>
              <div className="self-end text-secondary/80">/mo</div>
            </div>
            <p className="text-secondary/70 text-sm  mt-2  ">
              Pause or cancel anytime. 7 days money-back guarantee
            </p>
            <div className="my-10 flex flex-col gap-6">
              {e.features.map((e) => (
                <div key={e} className="flex gap-4 items-center">
                  <CheckCircleIcon className=" w-4 h-4 text-green-600" />
                  <p className="text-[1rem] text-secondary/90 ">{e} </p>
                </div>
              ))}
            </div>
            <Button className="rounded-full bg-[linear-gradient(50deg,#FF536B,#FF536B)] ">
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

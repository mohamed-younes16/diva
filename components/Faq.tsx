"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Heading from "./Heading";
import { useState } from "react";
import Image from "next/image";
import {
  Dribbble,
  FacebookIcon,
  InstagramIcon,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Faq = () => {
  const [current, setCurrent] = useState("");
  const data = [
    {
      question: "What sort of design services do you provide in here?",
      answer: "We offer a range of design services for your Figma startup.",
    },
    {
      question:
        "Is there a cap on the amount of design requests I can throw your way?",
      answer:
        "Absolutely not! There's no limit at all. Feel free to send in as many design requests as you'd like.",
    },
    {
      question: "When can I expect my designs to be completed?",
      answer:
        "The completion time depends on the complexity of the design, but we work efficiently to deliver promptly.",
    },
    {
      question: "What software do you use for design?",
      answer:
        "We use Figma for our design work, ensuring collaborative and efficient design processes.",
    },
    {
      question: "How do I get started with DIVADSGN?",
      answer:
        "Getting started is easy! Simply reach out to us, and we'll guide you through the onboarding process for your Figma startup.",
    },
    {
      question: "What if I don’t like my design?",
      answer:
        "If you're not satisfied, we're open to revisions and adjustments until we get it just right for you.",
    },
    {
      question: "What if I only need one design request?",
      answer:
        "No problem! Whether you have one or multiple design requests, we're here to assist you.",
    },
    {
      question: "Can I get a refund if I’m not satisfied with the service?",
      answer:
        "We aim for your satisfaction, but if there are issues, we can discuss potential solutions or refunds as needed.",
    },
  ];
  const socialLinks = [
    {
      name: "facebook",
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/profile.php?id=100070339100609",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/younesmohamed_77",
    },
    {
      name: "Dribble",
      icon: <Twitter />,
      link: "https://twitter.com/younesmed_77",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/mohamed-younes-bettioui-7a07b8271",
    },
  ];
  const dataCards = [
    {
      title: "Works",
      desc: "A design wizard that delivers top-notch masterpieces whenever you crave it!",
      icon: "works.svg",
    },
    {
      title: "Benifitsv",
      desc: "You'll get stress-free design like magic, delivering consistent quality at a steady price.",
      icon: "benefits.svg",
    },
    {
      title: "Process",
      desc: "You can effortlessly throw in, organize, and keep tabs on all your requests using your very own Trello board.",
      icon: "process.svg",
    },
    {
      title: "Pricing",
      desc: "No shady charges, no unexpected shocks! Stick to one flat fee, month after month.",
      icon: "pricing.svg",
    },
  ];

  return (
    <div>
      <div className="flexcenter flex-col gap-2 mb-16">
        <Heading
          title="Frequently Asked Questions"
          desc="These questions might not be on everyone's FAQ list, but we've got your 
back in case you were curious."
        />
      </div>
      <div className="max-w-5xl   relative px-6 mx-auto">
        <div className="absolute blur-xl  duration-5000  -bottom-1/2 rounded-[30%_70%_44%_56%_/_18%_63%_37%_82%] w-full opacity-20 left-0 h-full bg-cover bg-red-500/30"></div>{" "}
        <div className="absolute blur-3xl  duration-5000  -top-1/3 rounded-[30%_70%_44%_56%_/_18%_63%_37%_82%] w-1/2 opacity-20 -right-1/4 h-full bg-cover bg-blue-700/40"></div>{" "}
        <div className=" backdrop-blur-xl ">
          {data.map((e, i) => (
            <Accordion
              key={i}
              onValueChange={(e) => setCurrent(e)}
              type="single"
              value={current}
              collapsible
            >
              <AccordionItem
                className="border-b-zinc-200/25"
                value={`${e.question}`}
              >
                <AccordionTrigger
                  className={`text-2xl max-md:text-lg  font-thin flex items-center justify-between gap-6`}
                >
                  <p className={` ${current === e.question && "text-red-600"}`}>
                    0{i + 1}
                  </p>{" "}
                  {e.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-200/90 text-lg pl-6">
                  {e.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
      <div className=" flex mt-16  max-w-[1400px] mx-auto gap-4 flex-wrap  justify-center  ">
        {dataCards.map((e) => (
          <div
            key={e.title}
            className="px-10 relative z-20 max-lg:h-[350px] max-lg:w-[370px] h-[416px] mx-auto w-[410px]
              flexcenter bg-cover transition-all  rounded-3xl  duration-300  hover:scale-[101%]
             bg-[url(/assets/card-red.webp)]  flex-col"
          >
            <Image
              alt="image"
              height={100}
              width={100}
              src={`/assets/${e.icon}`}
            />
            <p className="mt-10 mb-7 text-center max-lg:mt-6 text-2xl font-semibold">
              {e.title}
            </p>
            <p className="text-[#ECECEC] text-center  ">{e.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 flex justify-between px-5 py-6 max-w-7xl mx-auto items-center">
        <p className="flexcenter gap-6">
          Copyright © 2023 DIVADSGN. All rights reserved
          <span className="text-zinc-400/80">Privacy Policy </span>
          <span className="text-zinc-400/80">Terms of Use</span>
        </p>
        <div className="flex-1 flexcenter gap-4 py-4">
          {socialLinks.map((e, i) => (
            <Link
            target={"_blank"}
              href={e.link}
              key={i}
              className="group relative p-2 rounded-full "
            >
              <div className="absolute  z-[2] inset-0 rounded-full bg-red-500 scale-0 transition-all group-hover:scale-100 "></div>
              <div className="relative z-10  transition-all group-hover:text-white">
                {e.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

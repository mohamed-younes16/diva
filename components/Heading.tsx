"use client";

import { motion } from "framer-motion";

const Heading = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <>
      {" "}
      <motion.h1
        initial={{ opacity: 0, x: 100 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 250,
          damping: 15,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className=" font-bold mb-7  text-center text-5xl max-w-3xl"
      >
        {title}
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 250,
          damping: 15,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className=" text-center  text-accent max-w-md"
      >
        {desc}
      </motion.h1>
    </>
  );
};

export default Heading;

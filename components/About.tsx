import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="relative flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]"
        src="https://i.pravatar.cc/301"
        alt="just me"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus sapiente possimus temporibus voluptas eligendi cumque
          ipsam minus fugiat? Consequatur aliquam officiis repellendus, facilis
          reprehenderit temporibus aut excepturi rem dignissimos sunt?
        </p>
      </div>
    </motion.div>
  );
}

export default About;

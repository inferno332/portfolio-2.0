import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className='relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left'
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
        Experience
      </h3>

      <div className='carousel w-screen mt-24'>
        <div
          id='item1'
          className='carousel-item mx-auto flex w-full justify-center'
        >
          <ExperienceCard />
        </div>
        <div
          id='item2'
          className='carousel-item mx-auto flex w-full justify-center'
        >
          <ExperienceCard />
        </div>
        <div
          id='item3'
          className='carousel-item mx-auto flex w-full justify-center'
        >
          <ExperienceCard />
        </div>
      </div>
      <div className='flex w-full justify-center gap-2'>
        <a href='#item1' className='btn-sm btn text-[#F7AB0A]'>
          1
        </a>
        <a href='#item2' className='btn-sm btn text-[#F7AB0A]'>
          2
        </a>
        <a href='#item3' className='btn-sm btn text-[#F7AB0A]'>
          3
        </a>
      </div>
    </motion.div>
  );
}

export default Experience;

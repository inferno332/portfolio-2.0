import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean; // Toggle for left-to-right animation. Defaults to true.
  src: string; // Image source.
  alt: string; // Image alt text. Defaults to "placeholder".
};

function Skill({ directionLeft, src = "", alt = "" }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{ x: directionLeft ? -150 : 150 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={src}
        alt={alt}
        className='h-24 w-24 rounded-full border border-gray-500 bg-white object-contain transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32'
      />
      <div className='absolute z-0 h-24 w-24 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32'>
        <div className='flex h-full items-center justify-center'>
          <p className='text-md font-bold text-black opacity-100'>{alt}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;

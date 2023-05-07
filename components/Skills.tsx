import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative flex h-screen min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10'
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
        Skills
      </h3>

      <h3 className='absolute top-36 text-sm uppercase tracking-[3px] text-gray-500'>
        Hover over a skill for a currency profieciency
      </h3>
      <div className='grid grid-cols-4 gap-5'>
        <Skill
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png'
          alt='Tailwind'
          directionLeft
        />
        <Skill
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
          alt='React'
          directionLeft
        />
        <Skill
          src='https://www.lupagedigital.com/wp-content/uploads/2020/03/JS.webp'
          alt='Javascript'
          directionLeft
        />
        <Skill
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1200px-CSS3_logo.svg.png'
          alt='Css'
          directionLeft
        />
        <Skill
          src='https://www.nurulfikri.com/wp-content/uploads/2020/02/MongoDB-mdb.png'
          alt='Mongodb'
        />
        <Skill
          src='https://www.svgrepo.com/show/354113/nextjs-icon.svg'
          alt='Next.Js'
        />
        <Skill
          src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png'
          alt='Redux'
        />
      </div>
    </motion.div>
  );
}

export default Skills;

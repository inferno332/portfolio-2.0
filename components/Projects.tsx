import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative z-0 flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row'
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
        Projects
      </h3>

      <div className='relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll'>
        {projects.map((project, i) => (
          <div
            key={project}
            className='flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44'
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className=''
              src='https://picsum.photos/700/300'
              alt=''
            />
            <div className='max-w-6xl space-y-10 px-0 md:px-10'>
              <h4 className='text-center text-4xl font-semibold'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  Case study {i + 1} of {projects.length}
                </span>
              </h4>

              <p className='text-center text-lg md:text-left'>
                Learn about data structures and algorithms using a free and
                open-source web application called
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10' />
    </motion.div>
  );
}

export default Projects;

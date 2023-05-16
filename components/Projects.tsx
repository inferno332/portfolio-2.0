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
      className='relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left'
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
        Projects
      </h3>

      <div className='carousel relative z-20 flex w-full overflow-hidden'>
        {projects.map((project, i) => (
          <div
            key={i}
            id={`project-item${i + 1}`}
            className='carousel-item flex h-screen w-full flex-col items-center justify-center space-y-5'
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='px-10 md:px-44'
              src='https://picsum.photos/700/300'
              alt=''
            />
            <div className='max-w-6xl space-y-10 px-0 md:px-10'>
              <h4 className='text-center text-4xl font-semibold'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  Case study {i + 1} of {projects.length}
                </span>
              </h4>

              <p className='text-center text-lg md:text-left px-10 md:px-44'>
                Learn about data structures and algorithms using a free and
                open-source web application calledLearn about data structures
                and algorithms using a free and open-source web application
                called
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex w-full justify-center gap-2 mb-16'>
        {projects.map((project, i) => (
          <a
            key={i}
            href={`#project-item${i + 1}`}
            className='btn-sm btn text-[#F7AB0A]'
          >
            {i + 1}
          </a>
        ))}
      </div>

      <div className='absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10' />
    </motion.div>
  );
}

export default Projects;

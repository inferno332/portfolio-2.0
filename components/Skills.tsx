import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div className='relative flex h-screen flex-col text-center md:text-left'>
      <h3 className='absolute top-0'>Skills</h3>
    </motion.div>
  );
}

export default Skills;

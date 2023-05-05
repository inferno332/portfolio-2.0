import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div className="relative flex h-screen min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Skills
      </h3>
    </motion.div>
  );
}

export default Skills;

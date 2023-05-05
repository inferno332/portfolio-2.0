import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircle({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 3, 2, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex items-center justify-center"
    >
      {/* Background Circle */}
      <div className="absolute mt-52 h-[200px] w-[200px] animate-ping rounded-full border border-[#333333]" />
      <div className="absolute mt-52 h-[300px] w-[300px] animate-ping rounded-full border border-[#333333]" />
      <div className="absolute mt-52 h-[500px] w-[500px] animate-ping rounded-full border border-[#333333]" />
      <div className="absolute mt-52 h-[650px] w-[650px] animate-pulse rounded-full border border-[#F7AB0A] opacity-20" />
      <div className="absolute mt-52 h-[800px] w-[800px] animate-ping rounded-full border border-[#333333]" />
    </motion.div>
  );
}

export default BackgroundCircle;

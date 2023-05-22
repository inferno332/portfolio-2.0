import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl justify-between p-5 xl:items-center ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/inferno332"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/inferno332"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/inferno332"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
          }}
          className="flex cursor-pointer flex-row items-center text-gray-300"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
            url="#contact"
          />
          <Link href='#contact'>
          <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
            Get In Touch
          </p>
     </Link>
        </motion.div>
    </header>
  );
}

export default Header;

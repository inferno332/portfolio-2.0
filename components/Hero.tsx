import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text] = useTypewriter({
    words: ["Hi, The Name's Khoa", "Guy-who-loves-Coffee.jsx", "<AndCoding />"],
    loop: 0,
    delaySpeed: 2000,
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircle />
      <img
        className="relative mx-auto h-32 w-32 rounded-full object-cover"
        src="https://i.pravatar.cc/300"
        alt="me"
      />
      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
          Software Engineer
        </h2>
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7ab0a" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;

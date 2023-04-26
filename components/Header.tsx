import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 z-20 p-5 flex justify-between max-w-7xl mx-auto xl:items-center ">
      <div className="flex flex-row items-center">
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
      </div>

      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </div>
    </header>
  );
}

export default Header;

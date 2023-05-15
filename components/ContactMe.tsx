import React from "react";

type Props = {};

function ContactMe({}: Props) {
  return (
    <div className='relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left'>
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className='underline decoration-[#F7AB0A]/50'>Lets Talk.</span>
        </h4>
      </div>
    </div>
  );
}

export default ContactMe;

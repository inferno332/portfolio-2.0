import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex w-[500px] cursor-pointer snap-center flex-col items-center 
    space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200
    hover:opacity-100 md:w-[600px] xl:w-[900px]"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full object-cover xl:h-[200px] xl:w-[200px]"
        src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/326347949_1843496862684881_8257070275487721078_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zjZQFPdrIJgAX9t6zTd&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAUPLvKUCB6KG56Hy_OOkGi6XMc6RKkDKAfct0wQmfYGA&oe=644E7DAC"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Student of Softech Aptech</h4>
        <p className="mt-1 text-2xl font-bold">Softech Aptech</p>
        <div className="my-2 flex space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.iconscout.com/icon/free/png-512/free-html5-40-1175193.png?f=avif&w=256"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.freepnglogos.com/uploads/javascript/javascript-online-logo-for-website-0.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.iconscout.com/icon/free/png-512/free-html5-40-1175193.png?f=avif&w=256"
            alt=""
          />
        </div>
        <p className="py-5 uppercase text-gray-300">
          Started work... - Ended...
        </p>

        <ul className="ml-5 list-disc space-y-4 text-lg">
          <li>Sumary</li>
          <li>Sumary</li>
          <li>Sumary</li>
          <li>Sumary</li>
          <li>Sumary</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;

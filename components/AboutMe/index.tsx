'use client'

import ArrowIcon from "../icons/ArrowIcon"

export const AboutMe = () => {
  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col  items-center py-20 bg-AAprimary">
      <div className="flex flex-row items-center ">
        <div className="flex flex-row  items-center mr-4">
          <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
          <span className="text-AAsecondary font-Header text-sm  sm:text-xl"> 01.</span>
          <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
            About Me
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
      </div>
    </div>
  )
}
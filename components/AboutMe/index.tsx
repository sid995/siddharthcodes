'use client'

import Image from "next/image";
import ArrowIcon from "../icons/ArrowIcon"
import PersonalImage from "../../public/personal_image.jpg"

const technologies = [
  ["Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Shadcn/ui", "Python", "Go"],
  ["Node.js", "TypeScript", "Django", "Fiber", "Docker", "PostgreSQL"],
];

export const AboutMe = () => {
  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col  items-center py-20 bg-AAprimary">
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
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
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Hello! My name is Siddharth, and I am a passionate software engineer and problem solver,
                dedicated to creating impactful code that thrives on the internet.
                My journey in computer science began in 2017 when I delved into the world of Frontend Engineering.
                Little did I know that programming skills would become essential in pursuing this interest, marking the start of my
                programming journey.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Since pursuing my engineering degree, my career has taken me through diverse industries,
                allowing me to refine my expertise in full-stack development, particularly in <span className="text-AAsecondary">JavaScript</span>,
                <span className="text-AAsecondary">TypeScript</span>, <span className="text-AAsecondary">ReactJS</span>,
                <span className="text-AAsecondary">NextJS</span>, and <span className="text-AAsecondary">Go</span>. I have a proven track record in leading teams to
                deliver high-quality software solutions, enhancing user experience and system performance.
                My professional experience includes working as a Senior Software Engineer at <span className="text-AAsecondary">Dotpe</span>,
                where I led the creation of <span className="text-AAsecondary">Digital Showroom</span> contributing to the ecosystem and developed <span className="text-AAsecondary">DotDesign</span>, our robust
                internal design system. I have also contributed to high-performance applications at
                <span className="text-AAsecondary"> Acko</span>, <span className="text-AAsecondary">Honeybridge</span> and <span className="text-AAsecondary">Vinculum Solutions</span>, focusing on frontend development and performance optimization.
              </span>
            </div>
            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Here are a few technologies I&apos;ve used in the past:
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              {technologies.map((tech, i) => {
                return (
                  <div className="flex flex-row space-x-2 items-center" key={i}>
                    <div className="flex flex-col space-y-4 sm:text-base text-sm">
                      {tech.map((t) => {
                        return (
                          <div key={t} className="flex flex-row items-center space-x-2">
                            <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                            <span className="text-gray-400 sm:text-sm text-xs">{t}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )
              })}
              {/* <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div> */}
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              {/* <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div> */}
              <Image
                src={PersonalImage}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className="relative w-full h-48 md:hidden flex justify-center items-center">
            <div className="absolute w-48 h-full rounded translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Image
                src={PersonalImage}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div >
  )
}
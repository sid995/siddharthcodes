"use client";

import Image from "next/image";
import ArrowIcon from "../icons/ArrowIcon";
import PersonalImage from "../../public/personal_image.jpg";

const technologies = [
  ["Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Shadcn/ui", "Python", "Go"],
  ["Node.js", "TypeScript", "FastAPI", "Gin", "Docker", "PostgreSQL"],
];

export const AboutMe = () => {
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col items-center py-20 bg-AAprimary"
    >
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px]"
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
              }
            />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl">
              {" "}
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-xl sm:text-2xl pl-4">
              About Me
            </span>
          </div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 text-base">
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Hello! I'm Siddharth, a passionate software engineer dedicated
                to creating impactful digital experiences. My journey began in
                2017 with frontend development, which sparked a deep love for
                crafting code that makes a difference.
                <br />
                Over my career, I've specialized in full-stack development with{" "}
                <span className="text-AAsecondary">
                  JavaScript, TypeScript, React, Next.js,
                </span>{" "}
                and <span className="text-AAsecondary">Go</span>, working across
                diverse industries to deliver high-quality solutions that
                enhance user experience and system performance. As a{" "}
                <span className="text-AAsecondary">
                  Senior Software Engineer at Dotpe
                </span>
                , I led the creation of{" "}
                <span className="text-AAsecondary">
                  Digital Showroom for the ecommerce market
                </span>{" "}
                and{" "}
                <span className="text-AAsecondary">developed DotDesign</span>,
                our comprehensive internal design system. I've also contributed
                to high-performance applications at Acko, Honeybridge, and
                Vinculum Solutions, consistently focusing on{" "}
                <span className="text-AAsecondary">
                  frontend excellence and performance optimization
                </span>
                .
                <br />I thrive on solving complex problems and leading teams to
                build software that not only works beautifully but drives real
                business impact.
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
                    <div className="flex flex-col space-y-4 text-base">
                      {tech.map((t) => {
                        return (
                          <div
                            key={t}
                            className="flex flex-row items-center space-x-2"
                          >
                            <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                            <span className="text-gray-400 text-base">{t}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div className="absolute w-5/6 h-5/6 rounded overflow-hidden flex justify-center items-center">
              <Image
                src={PersonalImage}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          <div className="pt-8 relative w-full h-48 md:hidden flex justify-center items-center">
            <div className="absolute w-72 h-full rounded overflow-hidden">
              <Image
                src={PersonalImage}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

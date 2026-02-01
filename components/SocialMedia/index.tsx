"use client";

import { motion } from "framer-motion";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedInIcon";

export const SocialMedia = ({
  finishedLoading = true,
}: {
  finishedLoading?: boolean;
}) => {
  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{
          y: {
            delay: finishedLoading ? 0 : 11,
            duration: finishedLoading ? 0 : 0.5,
          },
        }}
        className="z-10 fixed bottom-0 left-0 hidden lg:flex flex-row px-12 items-center justify-between  "
      >
        <div className="flex flex-col space-y-8 justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-5">
            {/* Github Icon */}
            <IconClickableWithAnimation
              Icon={GithubIcon}
              href={"https://github.com/sid995"}
            />
            {/* Linkedin icon */}
            <IconClickableWithAnimation
              Icon={LinkedinIcon}
              href={"https://www.linkedin.com/in/siddharthkundu"}
            />
          </div>
          <div className="h-28 w-0.5 rounded-full bg-gradient-to-b from-AAsecondary/50 via-gray-500 to-transparent"></div>
        </div>
      </motion.div>

      {/* // ? Email Address bar */}
      <motion.div
        initial={{ y: "170%" }}
        animate={{ y: "0%" }}
        // ! change delay from 0 to 11
        transition={{
          y: {
            delay: finishedLoading ? 0 : 11,
            duration: finishedLoading ? 0 : 0.5,
          },
        }}
        className="z-10 fixed bottom-0 -right-10 hidden lg:flex flex-row items-center justify-between"
      >
        <div className="flex flex-col space-y-32 justify-center items-center">
          {/* Open Email on click */}
          <motion.div
            initial={{ rotate: 90 }}
            whileHover={{
              y: -3,
              transition: { y: { duration: 0.1 }, rotate: { duration: 0 } },
            }}
            className=""
          >
            <a
              href="mailto:siddharth.kundu95@gmail.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <span className=" font-Header tracking-wider text-gray-400 hover:text-AAsecondary hover:cursor-pointer">
                siddharth.kundu95<span className="text-AAsecondary">@</span>
                gmail<span className="text-AAsecondary">.</span>com
              </span>
            </a>
          </motion.div>

          <div className="h-24 w-0.5 rounded-full bg-gradient-to-b from-AAsecondary/50 via-gray-500 to-transparent"></div>
        </div>
      </motion.div>
    </>
  );
};

const IconClickableWithAnimation = (props: { Icon: any; href: string }) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.1,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.9 }}
      className="relative group"
    >
      <a href={props.href} className="" target={"_blank"} rel="noreferrer">
        <motion.div
          className="absolute inset-0 bg-AAsecondary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"
        />
        <props.Icon
          className={
            "w-6 h-6 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer relative z-10 transition-colors duration-300"
          }
        />
      </a>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-AAsecondary/20 rounded-full blur-md scale-0 group-hover:scale-150 transition-all duration-500"
      />
    </motion.div>
  );
};

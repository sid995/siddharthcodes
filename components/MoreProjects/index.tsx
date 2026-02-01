"use client";

import React from "react";
import { motion } from "framer-motion";
import GithubIcon from "../icons/GithubIcon";

export const MoreProjects = () => {
  return (
    <motion.div
      id="moreProjectsSection"
      className="snap-start flex flex-col items-center pb-20 bg-AAprimary relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/3 w-40 h-40 bg-AAsecondary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px] relative z-10">
        {/* <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className="flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary" />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl">
              {" "}
              04.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-xl sm:text-2xl pl-4">
              More Projects
            </span>
          </div>
        </div> */}

        <div className="w-full flex flex-col items-center space-y-6">
          <div className="text-center space-y-4">
            <p className="text-gray-400 font-Header text-lg">
              Want to see more of my work?
            </p>
            <p className="text-gray-300 font-Header text-base max-w-md">
              Visit my GitHub profile to explore additional projects,
              contributions, and code repositories.
            </p>
          </div>

          <a
            href="https://github.com/sid995"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 bg-transparent border-2 border-AAsecondary 
                     text-AAsecondary px-6 py-3 rounded-lg transition-all duration-300 
                     hover:bg-AAsecondary hover:text-AAprimary shadow-glow-sm hover:shadow-glow"
          >
            <GithubIcon className="w-5 h-5 fill-current" />
            <span className="font-Header font-medium">
              Visit GitHub Profile
            </span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

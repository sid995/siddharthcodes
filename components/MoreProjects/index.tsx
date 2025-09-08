"use client";

import React from "react";
import ArrowIcon from "../icons/ArrowIcon";
import GithubIcon from "../icons/GithubIcon";

export const MoreProjects = () => {
  return (
    <div
      id="moreProjectsSection"
      data-aos="fade-up"
      className="snap-start flex flex-col items-center pb-20 bg-AAprimary"
    >
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
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
                     text-AAsecondary px-6 py-3 rounded-md transition-all duration-300 
                     hover:bg-AAsecondary hover:text-AAprimary hover:shadow-lg 
                     hover:shadow-AAsecondary/20"
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
    </div>
  );
};

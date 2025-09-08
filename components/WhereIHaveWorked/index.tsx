"use client";

import { useEffect, useRef, useState } from "react";
import ArrowIcon from "../icons/ArrowIcon";
import { motion } from "framer-motion";
import { Company } from "./Company";
import { CompanyButton } from "./CompanyButton";

const CompanyList = [
  {
    companyName: "Dotpe",
    position: "Senior Software Engineer",
    startTime: "March 2021",
    endTime: "February 2023",
    href: "https://www.dotpe.in/",
    tasks: [
      "Founding Engineer of Digital Showroom team",
      "Led Digital Showroom development with Next.js/TypeScript, handling 20K+ concurrent requests",
      "Built AdPro AI analytics dashboard, achieving 40% ROI increase for SMBs",
      "Created scalable UI platform with high-conversion onboarding and SEO optimization",
      "Established shared design system (Dot Design UI) across three cross-functional teams",
      "Delivered features across React Web and React Native mobile platforms",
      "Optimized Go backend systems, reducing server costs by 50% (~$300K annual savings)",
      "Built microservices with gRPC and Kafka for real-time order tracking",
      "Maintained 95% test coverage using Jest, React Testing Library, and Cypress",
    ],
    tech: [
      "Javascript",
      "Typescript",
      "ReactJS",
      "NextJS",
      "React Native",
      "Go",
      "Postgresql",
      "MaterialUI",
      "ChakraUI",
      "React Query",
      "Redux",
      "Storybook",
      "Jira",
    ],
  },
  {
    companyName: "Acko",
    position: "Software Engineer II",
    startTime: "August 2020",
    endTime: "February 2021",
    href: "https://www.acko.com/",
    tasks: [
      "Enhanced React/NextJS portals, reducing page-load times by 60%",
      "Achieved 99% regression-test pass rate through cross-browser testing",
      "Built inline addon bundling UI with 25% attach rate and 20% drop-off reduction",
    ],
    tech: [
      "Javascript",
      "Typescript",
      "ReactJS",
      "NextJS",
      "React Router",
      "Redux",
      "Storybook",
    ],
  },
  {
    companyName: "Honeybridge",
    position: "Software Engineer",
    startTime: "February 2020",
    endTime: "July 2020",
    href: "https://www.honeybridge.com/",
    tasks: [
      "Developed live video streaming platform using React, GatsbyJS, and WebRTC for 1000+ users",
      "Built Python/Flask backend utilities for metadata and video stream management",
    ],
    tech: [
      "Javascript",
      "ReactJS",
      "GatsbyJS",
      "Bootstrap",
      "Redux",
      "SCSS",
      "Tailwind",
    ],
  },
  {
    companyName: "Vinculum Solutions",
    position: "Software Engineer",
    startTime: "January 2018",
    endTime: "February 2020",
    href: "https://www.vinculumgroup.com/",
    tasks: [
      "Engineered React/TypeScript interfaces for eRetail modules (Order, Inventory, Catalog Management)",
      "Built Seller Panel dashboard with Java REST API integration for real-time data sync",
      "Achieved 20% boost in user satisfaction through performance optimizations",
    ],
    tech: ["Javascript", "Typescript", "React", "Java"],
  },
];

export interface CompanyButtonProps {
  company: {
    companyName: string;
    position: string;
    startTime: string;
    endTime: string;
    href: string;
    tasks: string[];
    tech: string[];
  };
  isActive: boolean;
  onClick: () => void;
}

export const WhereIHaveWorked = () => {
  const [activeCompany, setActiveCompany] = useState(CompanyList[0]);
  const [barPosition, setBarPosition] = useState(-12);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = CompanyList.findIndex(
      (company) => company.companyName === activeCompany.companyName
    );
    if (activeIndex !== -1 && buttonRefs.current[activeIndex]) {
      const buttonElement = buttonRefs.current[activeIndex];
      if (buttonElement && buttonElement.parentElement) {
        const parentRect = buttonElement.parentElement.getBoundingClientRect();
        const buttonRect = buttonElement.getBoundingClientRect();
        const relativePosition = buttonRect.top - parentRect.top;
        setBarPosition(relativePosition);
      }
    }
  }, [activeCompany]);

  return (
    <div
      id="WhereIHaveWorked"
      data-aos="fade-up"
      className="snap-start flex flex-col items-center py-20 bg-AAprimary"
    >
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className="flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary" />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl">
              {" "}
              02.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-xl sm:text-2xl pl-4">
              Where I Have Worked
            </span>
          </div>
        </div>

        <section className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center md:justify-center items-start max-w-screen-lg w-full">
          <div className="w-full md:w-1/4 flex flex-row">
            <div className="hidden md:block bg-gray-500 relative h-auto w-0.5 rounded mr-2">
              <motion.div
                animate={{ y: barPosition }}
                className="absolute w-0.5 h-12 rounded bg-AAsecondary"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              ></motion.div>
            </div>
            <div className="w-full flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-1 overflow-x-auto md:overflow-x-hidden pb-4 md:pb-0 snap-x">
              {CompanyList.map((company, index) => (
                <CompanyButton
                  key={company.companyName}
                  ref={(el) => {
                    buttonRefs.current[index] = el;
                  }}
                  company={company}
                  isActive={activeCompany.companyName === company.companyName}
                  onClick={() => setActiveCompany(company)}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <Company company={activeCompany} />
          </div>
        </section>
      </div>
    </div>
  );
};

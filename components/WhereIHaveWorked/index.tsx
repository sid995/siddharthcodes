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
      "Founding Engineer of Digital Showroom team.",
      "Directed a cross-functional team of 8 engineers to develop ecosystem of cross-platform apps, resulting in a 35% increase in customer acquisition and a 28% boost in ecommerce market presence within 6 months.",
      "Spearheaded the creation of DotDesign, an internal design system, which reduced development time by 25% and decreased UI-related bugs by 40% across projects.",
      "Developed 20 dynamic and reusable widgets using Storybook and ChakraUI, resulting in a 40% increase in pro-tier client satisfaction through personalized website creation options.",
      "Orchestrated sprint planning and execution, resulting in 95% successful delivery of features and timely resolution of 95% software issues, boosting development efficiency by 30% through agile methodologies.",
      "Successfully managed the migration from Redux to React Query for state management. This transition reduced boilerplate code by 30% and improved application performance by 20%.",
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
      "Spearheaded the development of a high-performance NextJS web application, scaling to support 100,000 monthly active users.",
      "Reduced integration-related defects by 40% through proactive communication and knowledge sharing.",
      "Collaborated with backend engineers to achieve a 30% reduction in API response times, leading to an 80% improvement in overall application performance.",
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
      "Implemented and deployed a modern tech stack including Javascript, NextJS, Redux, SCSS, and Tailwind, resulting in a 40% improvement in development efficiency and a 30% reduction in time-to-market for new features.",
      "Engineered a responsive and feature-rich user interface that increased user satisfaction ratings by 45% and reduced customer support tickets related to UI issues by 60%.",
      "Implemented automated testing strategies that increased test coverage from 70% to 95%, reducing regression issues by 80% and improving overall software reliability by 40%.",
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
      "Elevated software performance by adjusting parameters and integrating new features, resulting in a 20% increase in system capabilities.",
      "Designed and deployed a high-conversion web application, resulting in a 70% increase in customer conversion rates within 2 months.",
    ],
    tech: ["HTML", "CSS", "Javascript", "Bootstrap", "jQuery"],
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

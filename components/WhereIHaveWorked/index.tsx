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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const sidebarVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      id="WhereIHaveWorked"
      className="snap-start flex flex-col items-center py-20 bg-AAprimary relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-20 w-32 h-32 bg-AAsecondary/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-20 w-24 h-24 bg-AAsecondary/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="flex flex-col space-y-12 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px] relative z-10">
        <motion.div className="flex flex-row items-center" variants={itemVariants}>
          <div className="flex flex-row items-center mr-4">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowIcon className="flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary" />
            </motion.div>
            <span className="text-AAsecondary font-Header text-sm sm:text-xl ml-2">
              02.
            </span>
            <motion.span 
              className="flex-none text-gray-200 font-bold tracking-wider text-xl sm:text-2xl pl-4 relative"
              whileHover={{ scale: 1.05 }}
            >
              Where I Have Worked
              <motion.div
                className="absolute bottom-0 left-4 right-0 h-0.5 bg-AAsecondary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </motion.span>
          </div>
        </motion.div>

        <motion.section 
          className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center md:justify-center items-start max-w-screen-lg w-full"
          variants={itemVariants}
        >
          <motion.div 
            className="w-full md:w-1/4 flex flex-row"
            variants={sidebarVariants}
          >
            <motion.div 
              className="hidden md:block bg-gray-500 relative h-auto w-0.5 rounded mr-2"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ transformOrigin: "top" }}
            >
              <motion.div
                animate={{ y: barPosition }}
                className="absolute w-0.5 h-12 rounded bg-AAsecondary shadow-lg shadow-AAsecondary/30"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            </motion.div>
            <div className="w-full flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-x-hidden pb-4 md:pb-0 snap-x">
              {CompanyList.map((company, index) => (
                <motion.div
                  key={company.companyName}
                  variants={buttonVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CompanyButton
                    ref={(el) => {
                      buttonRefs.current[index] = el;
                    }}
                    company={company}
                    isActive={activeCompany.companyName === company.companyName}
                    onClick={() => setActiveCompany(company)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="w-full md:w-3/4"
            key={activeCompany.companyName}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Company company={activeCompany} />
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

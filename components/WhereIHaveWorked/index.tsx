'use client'

import { useState } from "react";
import ArrowIcon from "../icons/ArrowIcon"
// import { CompaniesBar } from "./CompanyBar"

const CompanyList = [
  {
    companyName: "Dotpe",
    position: "Senior Software Engineer",
    startTime: "March 2021",
    endTime: "Feb 2023",
    href: "https://digitalshowroom.in/",
    tasks: [
      "Founding software engineer for Digital Showroom team.",
      "Developed a feature allowing onboarded clients to create their website thorugh templates and customized designs.",
      "Developed efficient and scalable system for users to create Google Ads campaigns for clients through web and mobile apps.",
      "Developed in-house design system called DotDesign for scalable and robust UI/UX.",
      "Integrated features for clients to buy domains through a simple interface in web and mobile.",
      "Developed ecommerce system for users to sell their products on the platform."
    ],
    tech: ["React", "NextJS", "Go", "Gin", "styled-components", "React Native", "MaterialUI", "Postgresql"]
  },
  {
    companyName: "Acko Insurance",
    startTime: "March 2021",
    endTime: "Feb 2023",
    href: "https://digitalshowroom.in/",
    tasks: [
      "Founding software engineer for Digital Showroom team.",
      "Developed a feature allowing onboarded clients to create their website thorugh templates and customized designs.",
      "Developed efficient and scalable system for users to create Google Ads campaigns for clients through web and mobile apps.",
      "Developed in-house design system called DotDesign for scalable and robust UI/UX.",
      "Integrated features for clients to buy domains through a simple interface in web and mobile.",
      "Developed ecommerce system for users to sell their products on the platform."
    ],
    tech: ["React", "NextJS", "Go", "Gin", "styled-components", "React Native", "MaterialUI", "Postgresql"]
  },
  {
    companyName: "Dotpe",
    startTime: "March 2021",
    endTime: "Feb 2023",
    href: "https://digitalshowroom.in/",
    tasks: [
      "Founding software engineer for Digital Showroom team.",
      "Developed a feature allowing onboarded clients to create their website thorugh templates and customized designs.",
      "Developed efficient and scalable system for users to create Google Ads campaigns for clients through web and mobile apps.",
      "Developed in-house design system called DotDesign for scalable and robust UI/UX.",
      "Integrated features for clients to buy domains through a simple interface in web and mobile.",
      "Developed ecommerce system for users to sell their products on the platform."
    ],
    tech: ["React", "NextJS", "Go", "Gin", "styled-components", "React Native", "MaterialUI", "Postgresql"]
  },
  {
    companyName: "Dotpe",
    startTime: "March 2021",
    endTime: "Feb 2023",
    href: "https://digitalshowroom.in/",
    tasks: [
      "Founding software engineer for Digital Showroom team.",
      "Developed a feature allowing onboarded clients to create their website thorugh templates and customized designs.",
      "Developed efficient and scalable system for users to create Google Ads campaigns for clients through web and mobile apps.",
      "Developed in-house design system called DotDesign for scalable and robust UI/UX.",
      "Integrated features for clients to buy domains through a simple interface in web and mobile.",
      "Developed ecommerce system for users to sell their products on the platform."
    ],
    tech: ["React", "NextJS", "Go", "Gin", "styled-components", "React Native", "MaterialUI", "Postgresql"]
  }
]

export const WhereIHaveWorked = () => {
  const [DescriptionJob, setDescriptionJob] = useState("Dotpe");

  const GetDescription = () => {
    switch (DescriptionJob) {
      case "Dotpe":
        return null
      default:
        return null
    }
  }

  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary">
      {/* // ? Title "Where I've Worked" */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"} />
          <span className="text-AAsecondary font-sans text-sm sm:text-xl">02.</span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start "
      >
        {/* <CompaniesBar setDescriptionJob={setDescriptionJob} /> */}
        {/* // ? Description for The job */}
        {GetDescription()}
      </section>
    </div>
  )
}
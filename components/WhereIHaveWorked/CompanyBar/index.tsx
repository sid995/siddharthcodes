'use client'

import { motion } from "framer-motion";
import { SetStateAction, useState } from "react";

type CompanyButtons = {
  setDescriptionJob: any;
  setBarPosition: any;
  setBarAbovePosition: any;
  setCompanyNameBackgroundColorGreen: any
  defaultButtonBgColor: boolean[]
}

const companiesMap = [
  {
    companyName: "Dotpe",
    barPosition: -12,
    barAbovePosition: 1,
    descriptionJob: "Dotpe",
  },
  {
    companyName: "Acko Insurance",
    barPosition: 32,
    barAbovePosition: 129,
    descriptionJob: "Acko",
  },
  {
    companyName: "Honeybridge",
    barPosition: 76,
    barAbovePosition: 257,
    descriptionJob: "Honeybridge",
  },
  {
    companyName: "Vinsulum Solutions",
    barPosition: 120,
    barAbovePosition: 385,
    descriptionJob: "Vinculum",
  }
]

export function CompaniesBar(props: { setDescriptionJob: (arg0: any) => void }) {
  const [barPosition, setBarPosition] = useState<Number>(-8); // Green bar position by the default it's -20px
  const [barAbovePosition, setBarAbovePosition] = useState<Number>(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] = useState<boolean[]>([
    true,
    false,
    false,
    false,
  ]);

  return (
    <div
      id="WhereIhaveWorkedSection"
      className="flex flex-col md:flex-row  w-screen lg:w-auto 
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-center items-start sm:items-center"
    >
      <div
        className="hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-[297px] translate-y-1 md:w-0.5  
        rounded md:order-1 order-2  "
      >
        {/* // ? animated left bar */}
        <motion.div
          animate={{ y: String(barPosition) }}
          // ref={barRef}
          className={`absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary `}
        ></motion.div>
      </div>
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0 ">
        <div className="flex flex-row md:flex-col">
          {renderCompanyButtons({
            setDescriptionJob: props.setDescriptionJob,
            setBarPosition,
            setBarAbovePosition,
            setCompanyNameBackgroundColorGreen,
            defaultButtonBgColor: companyNameBackgroundColorGreen
          })}
        </div>
        <div className="block md:hidden h-0.5 rounded bg-gray-500">
          <motion.div animate={{ x: String(barAbovePosition) }} className="w-[128px] h-0.5 rounded bg-AAsecondary"></motion.div>
        </div>
      </div>
    </div>
  )
}

const renderCompanyButtons = ({
  setDescriptionJob,
  setBarPosition,
  setBarAbovePosition,
  setCompanyNameBackgroundColorGreen,
  defaultButtonBgColor
}: CompanyButtons) => {
  return (
    <CompanyButton
      ButtonOrderOfcompanyNameBackgroundColorGreen={0}
      CompanyName="ENS Vision"
      BarPosition={-12}
      setBarPosition={setBarPosition}
      BarAbovePosition={1}
      setBarAbovePosition={setBarAbovePosition}
      DescriptionJob="ENSVision"
      CompanyNameBackgroundColorGreen={[true, false, false, false]}
      setCompanyNameBackgroundColorGreen={setCompanyNameBackgroundColorGreen}
      setDescriptionJob={setDescriptionJob}
      defaultButtonBgColor={defaultButtonBgColor}
    />
  )
}

type CompanyButtonProps = {
  BarPosition: SetStateAction<Number>;
  BarAbovePosition: SetStateAction<Number>;
  setBarPosition: (arg0: any) => void;
  setBarAbovePosition: (arg0: any) => void;
  setCompanyNameBackgroundColorGreen: (arg0: any) => void;
  setDescriptionJob: (arg0: any) => void;
  DescriptionJob: any;
  CompanyNameBackgroundColorGreen: boolean[] | SetStateAction<boolean[]>;
  ButtonOrderOfcompanyNameBackgroundColorGreen: number;
  CompanyName: string;
  defaultButtonBgColor: boolean[];
}

const CompanyButton = (props: CompanyButtonProps) => {
  return (
    <button
      onClick={() => {
        props.setBarPosition(props.BarPosition);
        props.setBarAbovePosition(props.BarAbovePosition);
        props.setDescriptionJob(props.DescriptionJob);
        props.setCompanyNameBackgroundColorGreen(props.CompanyNameBackgroundColorGreen);
      }}
      className={`flex-none sm:text-sm text-xs text-center md:text-left  hover:text-AAsecondary
           hover:bg-ResumeButtonHover rounded  font-mono  
           py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
           ${props.defaultButtonBgColor[props.ButtonOrderOfcompanyNameBackgroundColorGreen]
          ? "bg-ResumeButtonHover text-AAsecondary"
          : "text-gray-500"
        }`}
    >
      {props.CompanyName}
    </button>
  );
};
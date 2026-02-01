"use client";

import { forwardRef } from "react";
import { CompanyButtonProps } from "..";

export const CompanyButton = forwardRef<HTMLButtonElement, CompanyButtonProps>(
  ({ company, isActive, onClick }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      className={`snap-start whitespace-nowrap flex-none text-sm text-center md:text-left hover:text-AAsecondary
        hover:bg-ResumeButtonHover rounded-lg py-2 px-4 md:py-3 md:px-4 md:w-44 w-auto duration-300
        ${isActive ? "bg-ResumeButtonHover text-AAsecondary border-l-2 border-l-AAsecondary shadow-glow-sm" : "text-gray-500 border-l-2 border-l-transparent"}`}
    >
      {company.companyName}
    </button>
  )
);

CompanyButton.displayName = "CompanyButton";

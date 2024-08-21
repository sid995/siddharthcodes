"use client";

import { forwardRef } from "react";
import { CompanyButtonProps } from "..";

export const CompanyButton = forwardRef<HTMLButtonElement, CompanyButtonProps>(
  ({ company, isActive, onClick }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      className={`whitespace-nowrap flex-none sm:text-sm text-xs text-center md:text-left hover:text-AAsecondary
      hover:bg-ResumeButtonHover rounded font-mono py-3 md:pl-6 md:px-4 md:w-48 w-32 duration-500
      ${isActive ? "bg-ResumeButtonHover text-AAsecondary" : "text-gray-500"}`}
    >
      {company.companyName}
    </button>
  )
);

CompanyButton.displayName = "CompanyButton";

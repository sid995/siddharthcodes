"use client";

import { CompanyButtonProps } from "..";

export const Company = ({
  company,
}: {
  company: CompanyButtonProps["company"];
}) => {
  return (
    <div className="text-gray-300 font-sans">
      <h3 className="text-xl font-semibold">
        {company.position} @{" "}
        <span className="text-AAsecondary">{company.companyName}</span>
      </h3>
      <p className="text-sm my-2">
        {company.startTime} - {company.endTime}
      </p>
      <ul className="list-disc list-inside space-y-2">
        {company.tasks.map((task: string, index: number) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <div className="mt-4">
        <h4 className="text-sm font-semibold mb-2">Technologies used:</h4>
        <div className="flex flex-wrap gap-2">
          {company.tech.map((tech: string, index: number) => (
            <span
              key={index}
              className="bg-AAprimary text-AAsecondary px-2 py-1 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

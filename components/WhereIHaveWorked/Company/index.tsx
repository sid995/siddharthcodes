"use client";

export const Company = ({ company }: any) => {
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
              className="bg-AAprimary text-AAsecondary text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

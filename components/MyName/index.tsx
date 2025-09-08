"use client";

export const MyName = () => {
  return (
    <div className="flex flex-col justify-center px-4 sm:px-0 py-32 sm:py-52 w-full sm:w-[500px] md:w-[700px] lg:w-[900px] mx-auto">
      <span className="text-AAsecondary font-mono">Hi, my name is</span>
      <h1 className="text-gray-300 font-bold text-5xl lg:text-7xl md:text-6xl sm:text-5xl mt-4">
        Siddharth Kundu.
      </h1>
      <h2 className="text-gray-500 font-bold text-3xl lg:text-5xl sm:text-5xl md:text-6xl mt-4">
        Building the future, one project at a time.
      </h2>
      <h2 className="text-AAsecondary text-xl mt-4">
        Experienced Software Engineer | ML Specialist | NJIT Computer Science
        Graduate
      </h2>
      <div className="mt-12">
        <a href="/resume.pdf" target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
            Check out my resume!
          </button>
        </a>
      </div>
    </div>
  );
};

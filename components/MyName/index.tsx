'use client'

export const MyName = () => {
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52"
    >
      <span className="text-AAsecondary font-mono">
        Hi, my name is
      </span>
      <h1 className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4">
        Siddharth Kundu.
      </h1>
      <h2 className="text-gray-500 font-bold text-3xl lg:text-5xl sm:text-5xl md:text-6xl mt-4">
        Building the future, one project at a time.
      </h2>
      <h3
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        I&apos;m a <span className="text-AAsecondary">software engineer</span> with 5 years of experience,
        currently pursuing a <span className="text-AAsecondary">master's degree in Computer Science at NJIT</span>.
        I possess strong problem-solving skills and specialize in crafting exceptional digital experiences.
        My expertise spans both <span className="text-AAsecondary">frontend</span> and <span className="text-AAsecondary">backend development</span>,
        with proficiency in <span className="text-AAsecondary">TypeScript, React, Next.js, TailwindCSS, Python, Go</span>, and <span className="text-AAsecondary">PostgreSQL</span>.
        I am also skilled in <span className="text-AAsecondary">Machine Learning, Deep Learning</span>, and <span className="text-AAsecondary">PyTorch</span>.
        My interests lie in the Machine Learning space, and I am <span className="text-AAsecondary">actively</span> looking for <span className="text-AAsecondary">internships</span> in <span className="text-AAsecondary">Machine Learning or Software Engineering</span>.
      </h3>
      <div className="mt-12">
        <a href="/resume.pdf" target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
            Check out my resume!
          </button>
        </a>
      </div>
    </div>
  )
}
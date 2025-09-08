import React from "react";
import Image from "next/image";
import ArrowIcon from "../icons/ArrowIcon";

interface ProjectProp {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

interface ProjectCardProps {
  project: ProjectProp;
  index: number;
}

const projects = [
  {
    title: "Music Generator",
    description:
      "Full stack AI based Music generator, generating music in real time on given genre and lyrics. Allows users to publish and download generated music",
    technologies: [
      "React",
      "Nextjs",
      "TailwindCSS",
      "BetterAuth",
      "Python",
      "LangChain",
      "FastAPI",
      "NeonDB",
      "Modal",
    ],
    image: "/screenshots/music-generator.png",
    link: "https://music-generator-brown.vercel.app/",
  },
  {
    title: "Audio Classifier",
    description:
      "Full stack system for classifying audio real time using Pytorch and Deep Learning",
    technologies: [
      "Next.js",
      "BetterAuth",
      "Python",
      "Pytorch",
      "Modal",
      "NeonDB",
      "Qwen",
    ],
    image: "/screenshots/audio-classifier.png",
    link: "https://github.com/sid995/AudioClassifier",
  },
  {
    title: "SmartShelf",
    description:
      "AI powered app to handle inventory management and recipe generation",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn/ui",
      "Firebase Firestore",
      "Firebase Storage",
      "Firebase Auth",
      "OpenAI",
    ],
    image: "/screenshots/smartshelf.png",
    link: "https://smartshelf-delta.vercel.app/",
  },
  {
    title: "ChatterMind",
    description: "AI powered chatbot for context reading and summarization",
    technologies: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Shadcn",
      "OpenAI",
      "PineconeDB",
      "MongoDB",
      "Next-Auth",
    ],
    image: "/screenshots/chattermind.png",
    link: "https://chattermind.vercel.app/",
  },
];

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col md:flex-row items-center mb-20 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className={`w-full md:w-1/2 ${isEven ? "md:pl-8" : "md:pr-8"}`}>
        <h3 className="text-lg sm:text-2xl font-bold text-AAsecondary mb-4 flex items-center">
          {project.title}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center"
            >
              <NewTabIcon className="w-5 h-5 text-AAsecondary" />
            </a>
          )}
        </h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-AAprimary text-AAsecondary px-2 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <div className="relative w-full h-64 md:h-80">
          <Image
            src={project.image}
            alt={project.title}
            fill={true}
            sizes="100%"
            className="rounded-lg"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <div
      id="projectsSection"
      data-aos="fade-up"
      className="snap-start flex flex-col items-center py-20 bg-AAprimary"
    >
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className="flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary" />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl">
              {" "}
              03.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-xl sm:text-2xl pl-4">
              My Projects
            </span>
          </div>
        </div>

        <div className="w-full space-y-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

const NewTabIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

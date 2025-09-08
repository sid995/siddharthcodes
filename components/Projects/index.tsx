"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: isEven ? 30 : -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: isEven ? -30 : 30, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center mb-20 group ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        className={`w-full md:w-1/2 ${isEven ? "md:pl-8" : "md:pr-8"}`}
        variants={contentVariants}
      >
        <motion.h3 
          className="text-lg sm:text-2xl font-bold text-AAsecondary mb-4 flex items-center"
          whileHover={{ scale: 1.02 }}
        >
          {project.title}
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <NewTabIcon className="w-5 h-5 text-AAsecondary hover:text-white transition-colors duration-200" />
            </motion.a>
          )}
        </motion.h3>
        <motion.p 
          className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
          variants={contentVariants}
        >
          {project.description}
        </motion.p>
        <motion.div 
          className="flex flex-wrap gap-2 mb-4"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.3
              }
            }
          }}
        >
          {project.technologies.map((tech, i) => (
            <motion.span
              key={i}
              className="bg-AAtertiary/40 text-AAsecondary px-3 py-1.5 rounded-full text-sm border border-AAsecondary/20 backdrop-blur-sm cursor-default"
              variants={techVariants}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(100, 255, 218, 0.1)",
                borderColor: "rgba(100, 255, 218, 0.4)",
                boxShadow: "0 4px 12px rgba(100, 255, 218, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      <motion.div 
        className="w-full md:w-1/2 mt-4 md:mt-0"
        variants={imageVariants}
      >
        <motion.div 
          className="relative w-full h-64 md:h-80 group/image overflow-hidden rounded-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-AAprimary/20 to-transparent z-10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"
          />
          <motion.div
            className="absolute inset-0 border-2 border-transparent group-hover/image:border-AAsecondary/30 rounded-xl transition-all duration-300"
          />
          <Image
            src={project.image}
            alt={project.title}
            fill={true}
            sizes="100%"
            className="rounded-xl object-contain group-hover/image:scale-105 transition-transform duration-500"
          />
          
          {/* Floating accent dots */}
          <motion.div
            className="absolute top-4 right-4 w-2 h-2 bg-AAsecondary rounded-full opacity-60"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-AAsecondary/80 rounded-full"
            animate={{ 
              scale: [1, 0.8, 1],
              opacity: [0.8, 0.4, 0.8]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  return (
    <motion.div
      id="projectsSection"
      className="snap-start flex flex-col items-center py-20 bg-AAprimary relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-16 w-48 h-48 bg-AAsecondary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-16 w-32 h-32 bg-AAsecondary/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="flex flex-col space-y-16 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px] relative z-10">
        <motion.div className="flex flex-row items-center" variants={itemVariants}>
          <div className="flex flex-row items-center mr-4">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowIcon className="flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary" />
            </motion.div>
            <span className="text-AAsecondary font-Header text-sm sm:text-xl ml-2">
              03.
            </span>
            <motion.span 
              className="flex-none text-gray-200 font-bold tracking-wider text-xl sm:text-2xl pl-4 relative"
              whileHover={{ scale: 1.05 }}
            >
              My Projects
              <motion.div
                className="absolute bottom-0 left-4 right-0 h-0.5 bg-AAsecondary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </motion.span>
          </div>
        </motion.div>

        <motion.div 
          className="w-full space-y-20"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.4,
                delayChildren: 0.2
              }
            }
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.div>
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

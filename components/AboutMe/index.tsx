"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import PersonalImage from "../../public/personal_image.jpg";
import ArrowIcon from "../icons/ArrowIcon";

const technologies = [
  {
    name: "TypeScript",
    category: "Language",
    proficiency: 95,
    projects: 16,
  },
  {
    name: "JavaScript",
    category: "Language",
    proficiency: 95,
    projects: 16,
  },
  {
    name: "Python",
    category: "Language",
    proficiency: 88,
    projects: 10,
  },
  {
    name: "Go",
    category: "Language",
    proficiency: 85,
    projects: 7,
  },
  {
    name: "React",
    category: "Frontend",
    proficiency: 95,
    projects: 14,
  },
  {
    name: "Next.js",
    category: "Frontend",
    proficiency: 92,
    projects: 12,
  },
  {
    name: "Node.js",
    category: "Backend & Systems",
    proficiency: 92,
    projects: 13,
  },
  {
    name: "FastAPI",
    category: "Backend & Systems",
    proficiency: 85,
    projects: 6,
  },
  {
    name: "Gin",
    category: "Backend & Systems",
    proficiency: 82,
    projects: 5,
  },
  {
    name: "gRPC",
    category: "Backend & Systems",
    proficiency: 80,
    projects: 4,
  },
  {
    name: "PostgreSQL",
    category: "Data & Infra",
    proficiency: 90,
    projects: 11,
  },
  {
    name: "Redis",
    category: "Data & Infra",
    proficiency: 85,
    projects: 8,
  },
  {
    name: "Prisma",
    category: "Data & Infra",
    proficiency: 88,
    projects: 7,
  },
  {
    name: "Kafka",
    category: "Data & Infra",
    proficiency: 80,
    projects: 5,
  },
  {
    name: "LangChain",
    category: "AI/LLM Production",
    proficiency: 85,
    projects: 6,
  },
  {
    name: "OpenAI",
    category: "AI/LLM Production",
    proficiency: 88,
    projects: 7,
  },
  {
    name: "Pinecone",
    category: "AI/LLM Production",
    proficiency: 82,
    projects: 4,
  },
  {
    name: "AWS",
    category: "Cloud",
    proficiency: 85,
    projects: 10,
  },
  {
    name: "Kubernetes",
    category: "Cloud",
    proficiency: 80,
    projects: 5,
  },
  {
    name: "Docker",
    category: "Cloud",
    proficiency: 88,
    projects: 11,
  },
];

const TechnologyBadge = ({
  tech,
  index,
}: {
  tech: (typeof technologies)[0];
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex flex-row items-center space-x-2 p-3 rounded-lg bg-AAtertiary/30 border border-transparent hover:border-AAsecondary/30 transition-all duration-300">
        <ArrowIcon className="h-3 w-3 text-AAsecondary flex-shrink-0" />
        <span className="text-gray-300 text-sm font-medium group-hover:text-AAsecondary transition-colors duration-300">
          {tech.name}
        </span>
      </div>

      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-AAtertiary rounded-lg shadow-lg pointer-events-none z-10"
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-xs text-center">
          <div className="text-AAsecondary font-semibold">{tech.category}</div>
          <div className="text-gray-300 mt-1">{tech.projects} projects</div>
          <div className="w-12 h-1 bg-gray-600 rounded-full mt-2 mx-auto">
            <div
              className="h-full bg-AAsecondary rounded-full transition-all duration-500"
              style={{ width: `${tech.proficiency}%` }}
            />
          </div>
        </div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-AAtertiary" />
      </motion.div>
    </motion.div>
  );
};

export const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      id="aboutSection"
      className="snap-start flex flex-col items-center py-20 bg-AAprimary relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 bg-AAsecondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-48 h-48 bg-AAsecondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="flex flex-col space-y-12 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px] relative z-10">
        <motion.div
          className="flex flex-row items-center"
          variants={itemVariants}
        >
          <div className="flex flex-row items-center mr-4">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowIcon className="flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary" />
            </motion.div>
            <span className="text-AAsecondary font-Header text-sm sm:text-xl ml-2">
              01.
            </span>
            <motion.span
              className="flex-none text-gray-200 font-bold tracking-wider text-xl sm:text-2xl pl-4 relative"
              whileHover={{ scale: 1.05 }}
            >
              About Me
              <motion.div
                className="absolute bottom-0 left-4 right-0 h-0.5 bg-AAsecondary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </motion.span>
          </div>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
          <motion.div
            className="w-full md:w-7/12 space-y-6 text-base"
            variants={itemVariants}
          >
            <motion.div
              className="font-Header leading-relaxed"
              variants={itemVariants}
            >
              <span className="text-gray-400 text-base leading-7">
                Hello! I&apos;m{" "}
                <span className="text-AAsecondary font-semibold">
                  Siddharth
                </span>
                , a passionate software engineer dedicated to creating impactful
                digital experiences. My journey began in 2017 with frontend
                development, which sparked a deep love for crafting code that
                makes a difference.
                <br />
                <br />
                Over my career, I&apos;ve specialized in full-stack development
                with{" "}
                <span className="text-AAsecondary font-medium">
                  JavaScript, TypeScript, React, Next.js,
                </span>{" "}
                and <span className="text-AAsecondary font-medium">Go</span>,
                working across diverse industries to deliver high-quality
                solutions that enhance user experience and system performance.
                As a{" "}
                <span className="text-AAsecondary font-medium">
                  Senior Software Engineer at Dotpe
                </span>
                , I led the creation of{" "}
                <span className="text-AAsecondary font-medium">
                  Digital Showroom for the ecommerce market
                </span>{" "}
                and{" "}
                <span className="text-AAsecondary font-medium">
                  developed DotDesign
                </span>
                , our comprehensive internal design system.
                <br />
                <br />I thrive on solving complex problems and leading teams to
                build software that not only works beautifully but drives real
                business impact.
              </span>
            </motion.div>

            <motion.div
              className="font-Header tracking-wide"
              variants={itemVariants}
            >
              <span className="text-gray-300 font-medium text-lg">
                Technologies I work with:
              </span>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
              variants={itemVariants}
            >
              {technologies.map((tech, index) => (
                <TechnologyBadge key={tech.name} tech={tech} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Desktop Image */}
          <motion.div
            className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden"
            variants={imageVariants}
          >
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-br from-AAsecondary/20 to-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-AAsecondary/20 group-hover:border-AAsecondary/40 transition-all duration-300">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <Image
                  src={PersonalImage}
                  className="object-cover w-full h-full filter group-hover:brightness-110 transition-all duration-300"
                  alt="Siddharth Kundu"
                />
              </motion.div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-AAprimary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Floating accent */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-AAsecondary rounded-full"
                animate={{
                  y: [0, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-AAsecondary/60 rounded-full"
                animate={{
                  y: [0, 5, 0],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>

          {/* Mobile Image */}
          <motion.div
            className="pt-8 relative w-full h-64 md:hidden flex justify-center items-center"
            variants={imageVariants}
          >
            <div className="relative w-72 h-full rounded-xl overflow-hidden border-2 border-AAsecondary/20">
              <Image
                src={PersonalImage}
                className="object-cover w-full h-full"
                alt="Siddharth Kundu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-AAprimary/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

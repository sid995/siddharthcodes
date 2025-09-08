"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TypewriterText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, delay + 50);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      {currentIndex < text.length && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="text-AAsecondary"
        >
          |
        </motion.span>
      )}
    </span>
  );
};

export const MyName = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(100, 255, 218, 0.3)",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      className="relative flex flex-col justify-center px-4 sm:px-0 py-32 sm:py-52 w-full sm:w-[500px] md:w-[700px] lg:w-[900px] mx-auto overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-AAsecondary rounded-full opacity-30"
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-AAsecondary rounded-full opacity-40"
          animate={{
            y: [0, 15, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-AAsecondary rounded-full opacity-25"
          animate={{
            y: [0, -20, 0],
            opacity: [0.25, 0.6, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.span
        className="text-AAsecondary font-mono text-lg"
        variants={itemVariants}
      >
        Hi, my name is
      </motion.span>

      <motion.h1
        className="text-gray-300 font-bold text-5xl lg:text-7xl md:text-6xl sm:text-5xl mt-4 leading-tight"
        variants={itemVariants}
      >
        <TypewriterText text="Siddharth Kundu" delay={200} />
      </motion.h1>

      <motion.h2
        className="font-bold text-3xl lg:text-5xl sm:text-5xl md:text-6xl mt-4 leading-tight"
        variants={itemVariants}
      >
        <span className="bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 bg-clip-text text-transparent">
          Building the future, one project at a time.
        </span>
      </motion.h2>

      <motion.h2
        className="text-AAsecondary text-xl mt-6 leading-relaxed"
        variants={itemVariants}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          Experienced Software Engineer | ML Specialist | NJIT Computer Science
          Graduate
        </motion.span>
      </motion.h2>

      <motion.div className="mt-12" variants={itemVariants}>
        <a href="/resume.pdf" target={"_blank"} rel="noreferrer">
          <motion.button
            className="relative bg-transparent text-AAsecondary border-2 rounded-sm px-6 sm:px-10 py-4 sm:py-5 border-AAsecondary font-mono text-sm sm:text-base overflow-hidden group"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div className="absolute inset-0 bg-AAsecondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 group-hover:text-AAprimary transition-colors duration-300">
              Check out my resume!
            </span>
          </motion.button>
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 h-16 bg-gradient-to-b from-AAsecondary to-transparent"
        />
      </motion.div>
    </motion.div>
  );
};

"use client";

import { motion } from "framer-motion";
import ArrowIcon from "../icons/ArrowIcon";

export const GetInTouch = () => {
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(100, 255, 218, 0.3)",
      borderColor: "rgba(100, 255, 218, 0.8)",
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
      id="GetInTouchSection"
      className="flex flex-col space-y-6 w-full min-h-96 items-center bg-AAprimary py-20 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-AAsecondary/5 rounded-full blur-3xl"
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
        {/* Floating particles */}
        <motion.div
          className="absolute top-20 left-1/4 w-2 h-2 bg-AAsecondary rounded-full opacity-40"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-AAsecondary rounded-full opacity-30"
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <motion.div
        className="flex flex-row items-center relative z-10"
        variants={itemVariants}
      >
        <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
          <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary mr-2" />
        </motion.div>
        <div className="flex flex-row space-x-2 items-center">
          <motion.span
            className="text-AAsecondary font-sans text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
          >
            04.
          </motion.span>
          <motion.span
            className="text-sm sm:text-base font-sans text-AAsecondary"
            whileHover={{ scale: 1.05 }}
          >
            What&apos;s Next?
          </motion.span>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="relative">
        <motion.span
          className="text-gray-200 text-xl md:text-3xl sm:text-4xl font-bold tracking-wider block text-center relative"
          whileHover={{ scale: 1.02 }}
        >
          Get In Touch
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[8.1rem] md:w-[12.2rem] h-0.5 bg-AAsecondary rounded-full shadow-[0_0_12px_rgba(100,255,218,0.5)]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />
        </motion.span>
      </motion.div>

      <motion.p
        className="flex font-Header tracking-wide text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px] leading-relaxed"
        variants={itemVariants}
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          I&apos;m currently looking for full-time opportunities. If you&apos;d
          like to chat, my inbox is always open. Whether you have a question or
          just want to say hi, I&apos;ll try my best to get back to you!
        </motion.span>
      </motion.p>

      <motion.div className="pt-6" variants={itemVariants}>
        <a
          href="mailto:siddharth.kundu95@gmail.com"
          target={"_blank"}
          rel="noreferrer"
        >
          <motion.button
            className="relative font-mono text-sm text-AAsecondary border-AAsecondary px-8 py-4 border-2 rounded-lg overflow-hidden group bg-transparent shadow-glow-sm hover:shadow-glow transition-shadow duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div className="absolute inset-0 bg-AAsecondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 group-hover:text-AAprimary transition-colors duration-300 font-semibold">
              Say Hello 👋
            </span>

            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full"
              animate={{
                translateX: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
          </motion.button>
        </a>
      </motion.div>

      {/* Additional decorative elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-16 h-16 border border-AAsecondary/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-12 h-12 border border-AAsecondary/15 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

"use client";

import { motion } from "framer-motion";
import { CompanyButtonProps } from "..";

export const Company = ({
  company,
}: {
  company: CompanyButtonProps["company"];
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="text-gray-300 font-sans"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <motion.h3
          className="text-xl font-semibold leading-tight"
          whileHover={{ scale: 1.02 }}
        >
          {company.position} @{" "}
          <motion.span
            className="text-AAsecondary relative"
            whileHover={{ scale: 1.05 }}
          >
            {company.companyName}
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-AAsecondary/30"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.span>
        </motion.h3>
      </motion.div>

      <motion.p className="text-sm my-3 text-gray-400" variants={itemVariants}>
        {company.startTime} - {company.endTime}
      </motion.p>

      <motion.ul className="space-y-3" variants={itemVariants}>
        {company.tasks.map((task: string, index: number) => (
          <motion.li
            key={index}
            className="flex items-start space-x-3 group"
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              className="text-AAsecondary flex-shrink-0"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              ▶
            </motion.span>
            <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-200">
              {task}
            </span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div className="mt-6" variants={itemVariants}>
        <motion.h4
          className="text-sm font-semibold mb-3 text-AAsecondary"
          whileHover={{ scale: 1.05 }}
        >
          Technologies used:
        </motion.h4>
        <motion.div
          className="flex flex-wrap gap-2"
          variants={containerVariants}
        >
          {company.tech.map((tech: string, index: number) => (
            <motion.span
              key={index}
              className="bg-AAtertiary/40 text-AAsecondary px-3 py-1.5 rounded-md text-sm border border-AAsecondary/20 backdrop-blur-sm"
              variants={techVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(100, 255, 218, 0.1)",
                borderColor: "rgba(100, 255, 218, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

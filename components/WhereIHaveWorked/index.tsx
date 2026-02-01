"use client";

import { useEffect, useRef, useState } from "react";
import ArrowIcon from "../icons/ArrowIcon";
import { motion } from "framer-motion";
import { Company } from "./Company";
import { CompanyButton } from "./CompanyButton";

const CompanyList = [
  {
    companyName: "SeekLab",
    position: "Senior Software Engineer",
    startTime: "September 2025",
    endTime: "Present",
    href: "https://seeklab.com/",
    tasks: [
      "Architected production RAG system from ground up with embeddings pipeline, vector search (Pinecone), and retrieval evaluation—improved candidate match quality 35% and reduced time to hire 40% across enterprise accounts.",
      "Drove end-to-end technical strategy for AI candidate matching engine; built consensus across Engineering, Product, and Data Science on semantic search vs. keyword-based approaches.",
      "Engineered high-scale PostgreSQL infrastructure handling 10K+ concurrent lookups with 99.9% uptime; resolved N+1 patterns, connection pooling, read replicas—sub 100ms P95 latency under load.",
      "Owned full-stack product development (NextJS and Node microservices) across 15+ features; established reusable component patterns, API contracts, and observability—accelerated throughput 30%, reduced production incidents 25%.",
      "Established LLM productionization standards: prompt versioning, structured output schemas, function-calling; reduced hallucination rates 40% and enabled reliable A/B testing across recruiter workflows.",
      "Designed fault-tolerant LLM workflows with retry logic, fallback strategies, and real-time monitoring; reduced AI feature failures 60% and established playbooks for debugging production LLM issues.",
    ],
    tech: [
      "NextJS",
      "Node.js",
      "PostgreSQL",
      "Pinecone",
      "OpenAI",
      "LangChain",
      "Redis",
      "AWS",
    ],
  },
  {
    companyName: "DotPe",
    position: "Senior Fullstack Engineer",
    startTime: "March 2021",
    endTime: "February 2023",
    href: "https://www.dotpe.in/",
    tasks: [
      "Led 0 to 1 architecture and delivery of AdPro, an AI-powered analytics platform serving 500K+ SMBs; drove 40% improvement in merchant ROI and $5M+ in measurable customer value.",
      "Defined technical vision for real-time analytics; built cross-team alignment on Go-based microservices architecture supporting 20K+ concurrent users.",
      "Engineered distributed Go microservices achieving sub-50ms P99 latency; optimized caching and horizontal scaling—reduced infrastructure costs $300K/year.",
      "Built production ML pipelines for predictive analytics and anomaly detection; processed 10M+ daily events, reducing manual analysis time 70%.",
      "Architected event-driven infrastructure with Kafka processing 50M+ events/day at 99.95% reliability; partitioning, dead-letter queues, monitoring, and replay mechanisms.",
      "Designed NextJS/TypeScript onboarding platform with AI-driven workflows; increased merchant adoption 70% and reduced setup time 50%.",
      "Built Dot Design UI component library with 60+ production-tested components and WCAG AA accessibility; enabled 3 new product launches in 6 months.",
      "Led cross-functional teams of 4 to 6 engineers; mentored 3 engineers to mid-level through distributed systems and production best practices.",
    ],
    tech: [
      "Go",
      "NextJS",
      "TypeScript",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "React",
      "Jest",
      "Cypress",
    ],
  },
  {
    companyName: "Acko Insurance",
    position: "Senior Frontend Engineer",
    startTime: "August 2020",
    endTime: "February 2021",
    href: "https://www.acko.com/",
    tasks: [
      "Optimized frontend performance to improve page load times 60%, increasing conversion 12% and contributing $1M in incremental revenue.",
      "Built high-conversion multi-step purchase flows with real-time validation, driving 25% add-on attach rate (3× industry average).",
      "Reduced funnel abandonment 20% by improving UX patterns across complex form journeys and error/validation states.",
      "Integrated tests into CI/CD quality gates, maintaining 99% pass rate to keep deployments reliable and fast.",
    ],
    tech: [
      "JavaScript",
      "TypeScript",
      "React",
      "NextJS",
      "Redux",
      "Storybook",
    ],
  },
  {
    companyName: "Honeybridge",
    position: "Frontend Engineer",
    startTime: "February 2020",
    endTime: "July 2020",
    href: "https://www.honeybridge.com/",
    tasks: [
      "Built a real-time video streaming web app (React) supporting 1K+ concurrent users with modern JavaScript and performant UI patterns.",
      "Improved streaming UX with resilient state handling, latency-aware rendering, and failure recovery for unstable networks.",
    ],
    tech: [
      "JavaScript",
      "React",
    ],
  },
  {
    companyName: "Vinculum Solutions",
    position: "Frontend Engineer",
    startTime: "January 2018",
    endTime: "February 2020",
    href: "https://www.vinculumgroup.com/",
    tasks: [
      "Developed React/TypeScript dashboards for enterprise e-commerce platforms, delivering complex data tables, workflow-heavy UIs, and real-time sync.",
      "Improved seller workflow efficiency 20% by simplifying key operational journeys and reducing time-to-complete core actions.",
    ],
    tech: ["JavaScript", "TypeScript", "React"],
  },
];

export interface CompanyButtonProps {
  company: {
    companyName: string;
    position: string;
    startTime: string;
    endTime: string;
    href: string;
    tasks: string[];
    tech: string[];
  };
  isActive: boolean;
  onClick: () => void;
}

export const WhereIHaveWorked = () => {
  const [activeCompany, setActiveCompany] = useState(CompanyList[0]);
  const [barPosition, setBarPosition] = useState(-12);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = CompanyList.findIndex(
      (company) => company.companyName === activeCompany.companyName
    );
    if (activeIndex !== -1 && buttonRefs.current[activeIndex]) {
      const buttonElement = buttonRefs.current[activeIndex];
      if (buttonElement && buttonElement.parentElement) {
        const parentRect = buttonElement.parentElement.getBoundingClientRect();
        const buttonRect = buttonElement.getBoundingClientRect();
        const relativePosition = buttonRect.top - parentRect.top;
        setBarPosition(relativePosition);
      }
    }
  }, [activeCompany]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const sidebarVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      id="WhereIHaveWorked"
      className="snap-start flex flex-col items-center py-20 bg-AAprimary relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-20 w-32 h-32 bg-AAsecondary/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-20 w-24 h-24 bg-AAsecondary/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="flex flex-col space-y-12 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px] relative z-10">
        <motion.div className="flex flex-row items-center" variants={itemVariants}>
          <div className="flex flex-row items-center mr-4">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowIcon className="flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary" />
            </motion.div>
            <span className="text-AAsecondary font-Header text-sm sm:text-xl ml-2">
              02.
            </span>
            <motion.span 
              className="flex-none text-gray-200 font-bold tracking-wider text-xl sm:text-2xl pl-4 relative"
              whileHover={{ scale: 1.05 }}
            >
              Where I Have Worked
              <motion.div
                className="absolute bottom-0 left-4 right-0 h-0.5 bg-AAsecondary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </motion.span>
          </div>
        </motion.div>

        <motion.section 
          className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center md:justify-center items-start max-w-screen-lg w-full"
          variants={itemVariants}
        >
          <motion.div 
            className="w-full md:w-1/4 flex flex-row"
            variants={sidebarVariants}
          >
            <motion.div 
              className="hidden md:block bg-gray-500 relative h-auto w-0.5 rounded mr-2"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ transformOrigin: "top" }}
            >
              <motion.div
                animate={{ y: barPosition }}
                className="absolute w-0.5 h-12 rounded bg-AAsecondary shadow-lg shadow-AAsecondary/30"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            </motion.div>
            <div className="w-full flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-x-hidden pb-4 md:pb-0 snap-x">
              {CompanyList.map((company, index) => (
                <motion.div
                  key={company.companyName}
                  variants={buttonVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CompanyButton
                    ref={(el) => {
                      buttonRefs.current[index] = el;
                    }}
                    company={company}
                    isActive={activeCompany.companyName === company.companyName}
                    onClick={() => setActiveCompany(company)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="w-full md:w-3/4"
            key={activeCompany.companyName}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Company company={activeCompany} />
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

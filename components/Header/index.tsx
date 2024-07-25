'use client'

import { motion } from "framer-motion";
import DesktopMenu from "./DesktopMenu"
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const prevScrollY = useRef(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > prevScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      prevScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* mobile header */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: showHeader ? 0 : -100 }}
        transition={{ y: { ease: "easeOut", duration: 0.1 } }}
        className={`w-full fixed bg-opacity-70 shadow-xl bg-AAprimary flex 
      justify-between px-6 sm:px-12 py-2 sm:py-4 transition duration-4000 translate-y-0 z-20`}
      >
        <div>
          <span className="text-gray-300 font-bold text-xl lg:text-3xl md:text-2xl">SK</span>
        </div>
        <DesktopMenu />
      </motion.header>
    </>
  )
}
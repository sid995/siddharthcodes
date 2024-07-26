'use client'

import { motion } from "framer-motion";

export const MobileHamburger = (props: { rotate: Boolean, setRotate: any }): any => {
  return (
    <div
      className="md:hidden text-white space-y-2 left-0 hover:cursor-pointer mt-2"
      onClick={() => {
        props.setRotate(!props.rotate);
      }}
    >
      <div className="flex justify-end">
        <motion.div
          animate={props.rotate ? { y: 10, rotate: 45 } : { rotate: 0, y: 0 }}
          transition={
            props.rotate ? { y: 0.15, rotate: { delay: 0.2 } } : { y: { delay: 0.2 }, rotate: { duration: 0.2 } }
          }
          className="w-8 h-0.5 rounded bg-AAsecondary"
        ></motion.div>
      </div>
      <motion.div
        animate={props.rotate ? { opacity: 0 } : { opacity: 1 }}
        transition={{ opacity: { duration: 0 } }}
        className="flex justify-end"
      >
        <div className="w-6 h-0.5 rounded bg-AAsecondary"></div>
      </motion.div>
      <div className="flex justify-end">
        <motion.div
          animate={props.rotate ? { y: -10, width: "150%", rotate: -45 } : { y: 0, rotate: 0, width: "50%" }}
          transition={
            props.rotate ? { y: 0.15, rotate: { delay: 0.2 } } : { y: { delay: 0.2 }, rotate: { duration: 0.2 } }
          }
          className="w-4 h-0.5 rounded bg-AAsecondary"
        ></motion.div>
      </div>
    </div>
  )
}
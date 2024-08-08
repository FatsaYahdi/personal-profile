"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function Education() {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.section
      id="home"
      className="container relative flex items-center justify-start mt-52"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="absolute z-[-1] size-[526px] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(109,_40,_217,_0.5625)_10%,_rgba(9,_9,_11,_0)_100%)] -right-1/4 top-10"
      />
      <div className="flex items-start justify-center px-4 flex-col">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="scroll-m-20 text-4xl font-semibold tracking-tight first:mt-0"
        >
          Education
        </motion.h2>
        <div
          className="relative col-span-9 space-y-6 p-4 mt-6"
        >
          <div className="relative col-span-8 space-y-8 px-4 before:absolute before:-left-3 before:bottom-0 before:top-2 before:w-1 before:bg-primary/35">
            <div className="relative flex flex-col before:absolute before:left-[-35px] before:top-2 before:z-[1] before:h-4 before:w-4 before:rounded-full before:bg-primary gap-2">
              <h3 className="text-lg font-semibold md:text-2xl">
                SMK Muhammadiyah 1 Sukoharjo
              </h3>
              <p className="text-sm italic text-gray-400 md:text-lg">
                Software Engineering
              </p>
              <time className="text-sm text-gray-400 md:text-lg">
                2021 - 2024
              </time>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Education;

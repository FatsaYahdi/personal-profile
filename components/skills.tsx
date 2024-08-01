"use client"
import { be, fe, frameworks, skills, tools } from "@/data/skills";
import { motion } from "framer-motion"
import Image from "next/image";

function Skills() {
  return (
    <section
      id="skills"
      className="container relative flex items-center justify-start"
    >
      <div className="flex items-start justify-center px-4 flex-col gap-4 w-full">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="scroll-m-20 text-4xl font-semibold tracking-tight first:mt-0"
        >
          Skills
        </motion.h2>
        <div className="flex gap-2 lg:gap-4 mt-8 px-8 w-full flex-wrap">
          <div className="flex flex-col gap-1 lg:gap-3 p-4 backdrop-blur-sm rounded-md shadow-md shadow-background-1 border border-background-4 border-opacity-25 flex-grow w-auto">
            <h3 className="font-bold text-center text-lg">
              Languages
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {skills.map((item) => (
                <div className="flex flex-col w-16 h-16 justify-center items-center gap-2" key={item.name}>
                  {item.icon}
                  <p className="text-sm">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 lg:gap-3 p-4 backdrop-blur-sm rounded-md shadow-md shadow-background-1 border border-background-4 border-opacity-25 flex-grow w-auto">
            <h3 className="font-bold text-center text-lg">
              Front-End
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {fe.map((item) => (
                <div className="flex flex-col w-16 h-16 justify-center items-center gap-2" key={item.name}>
                  {item.icon}
                  <p className="text-sm">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 lg:gap-3 p-4 backdrop-blur-sm rounded-md shadow-md shadow-background-1 border border-background-4 border-opacity-25 flex-grow w-auto">
            <h3 className="font-bold text-center text-lg">
              Back-End
            </h3>
            <div className="flex flex-wrap gap-4 lg:gap-6 justify-center">
              {be.map((item) => (
                <div className="flex flex-col w-16 h-16 justify-center items-center gap-2" key={item.name}>
                  {item.icon}
                  <p className="text-base">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 lg:gap-3 p-4 backdrop-blur-sm rounded-md shadow-md shadow-background-1 border border-background-4 border-opacity-25 flex-grow">
            <h3 className="font-bold text-center text-lg">
              Frameworks
            </h3>
            <div className="flex flex-wrap gap-2 lg:gap-4 justify-center">
              {frameworks.map((item) => (
                <div className="flex flex-col w-16 h-16 justify-center items-center gap-2" key={item.name}>
                  {item.icon}
                  <p className="text-base">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 lg:gap-3 p-4 backdrop-blur-sm rounded-md shadow-md shadow-background-1 border border-background-4 border-opacity-25 flex-grow">
            <h3 className="font-bold text-center text-lg">
              Tools
            </h3>
            <div className="flex flex-wrap gap-2 lg:gap-4 justify-center">
              {tools.map((item) => (
                <div className="flex flex-col w-16 h-16 justify-center items-center gap-2" key={item.name}>
                  {item.icon}
                  <p className="text-base">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

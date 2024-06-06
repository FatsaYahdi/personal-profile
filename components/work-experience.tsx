"use client";
import React from "react";
import { motion } from "framer-motion";

function WorkExperience() {
  return (
    <section
      id="work-experience"
      className="container relative flex items-center justify-start my-52"
    >
      <div className="flex items-start justify-center px-4 flex-col">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="scroll-m-20 text-4xl font-semibold tracking-tight first:mt-0"
        >
          Work Experience
        </motion.h2>
        <div className="relative col-span-9 space-y-6 p-4 mt-6">
          <div className="relative col-span-8 space-y-8 px-4 before:absolute before:-left-3 before:bottom-0 before:top-2 before:w-1 before:bg-primary/35">
            <div className="relative flex flex-col before:absolute before:left-[-35px] before:top-2 before:z-[1] before:h-4 before:w-4 before:rounded-full before:bg-primary gap-2">
              <h3 className="text-lg font-semibold md:text-2xl">
                PT Tebar Digital Kreasi
              </h3>
              <p className="text-sm italic text-gray-400 md:text-lg">
                Full Stack Web Developer Intern
              </p>
              <time className="text-sm text-gray-400 md:text-lg">
                Feb 2023 - May 2023
              </time>
              <ul className="ml-6 mt-3 list-disc space-y-1 text-sm text-foreground md:text-lg">
                <li>Implementation of features according to the concept</li>
                <li>Making APIs</li>
              </ul>
            </div>
            <div className="relative flex flex-col before:absolute before:left-[-35px] before:top-2 before:z-[1] before:h-4 before:w-4 before:rounded-full before:bg-primary gap-2">
              <h3 className="text-lg font-semibold md:text-2xl">
                CV ZAMAN NOW
              </h3>
              <p className="text-sm italic text-gray-400 md:text-lg">
                Front End Engineer
              </p>
              <time className="text-sm text-gray-400 md:text-lg">
                Aug 2023 - Dec 2023
              </time>
              <ul className="ml-6 mt-3 list-disc space-y-1 text-sm text-foreground md:text-lg">
                <li>Develop an CV Builder Website.</li>
                <li>
                  Build some prototype using HTML, ReactJS, Next.Js to validate
                  design & interaction ideas.
                </li>
                <li>Build some prototype using NextJS.</li>
              </ul>
            </div>
            <div className="relative flex flex-col before:absolute before:left-[-35px] before:top-2 before:z-[1] before:h-4 before:w-4 before:rounded-full before:bg-primary gap-2">
              <h3 className="text-lg font-semibold md:text-2xl">Digi Dreams</h3>
              <p className="text-sm italic text-gray-400 md:text-lg">
                Front End Engineer
              </p>
              <time className="text-sm text-gray-400 md:text-lg">
                Jan 2024 - Present
              </time>
              <ul className="ml-6 mt-3 list-disc space-y-1 text-sm text-foreground md:text-lg">
                <li>Develop an CV Builder Website.</li>
                <li>
                  Build some prototype using HTML, ReactJS, Next.Js to validate
                  design & interaction ideas.
                </li>
                <li>Build some prototype using NextJS.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;

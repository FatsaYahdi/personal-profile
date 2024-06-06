"use client";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about-me"
      className="container relative flex items-center justify-start mb-40"
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
        className="absolute z-[-1] size-[526px] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(109,_40,_217,_0.5625)_10%,_rgba(9,_9,_11,_0)_100%)] -left-1/4"
      />
      <div className="flex items-start justify-center px-4 flex-col">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="scroll-m-20 text-4xl font-semibold tracking-tight first:mt-0"
        >
          About Me
        </motion.h2>
        <motion.p className="leading-10 text-2xl mt-6 w-full font-normal tracking-normal">
          I have experience as a Web Developer. I have an interest in a career
          as a Front-end Engineer (TypeScript and React). <br />
          I&apos;m a fast learner and self-taught. I have learned a lot of new
          technologies in the past few years by myself on the Internet.
        </motion.p>
      </div>
    </section>
  );
}

export default About;
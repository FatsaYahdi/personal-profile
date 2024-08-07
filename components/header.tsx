"use client";
import { Me } from "@/assets";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import Link from "next/link";
import Scroll from "./common/scroll";
import { Highlight } from "./common/text-highlight";
import RandomGreeting from "./random";
import { useInView } from "react-intersection-observer";

function Header() {
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
      className="container relative flex items-center justify-start min-h-screen"
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
        className="absolute z-[-1] w-full h-[50vh] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(109,_40,_217,_0.5625)_10%,_rgba(9,_9,_11,_0)_100%)] top-[-300px] left-0"
      />
      <div className="flex justify-between w-full">
        <div className="px-4">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="mx-auto text-2xl font-semibold leading-relaxed text-start md:text-4xl lg:text-5xl lg:leading-snug text-foreground"
          >
            <div>
              <RandomGreeting />
            </div>
            My name is{"  "}
            <Highlight className="font-bold text-white">
              Fatsa
            </Highlight>
          </motion.h1>
          <motion.h3
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 1,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="mx-auto mt-5 text-lg leading-relaxed text-start md:text-xl lg:text-2xl lg:leading-relaxed text-foreground"
          >
            I&apos;m a{" "}
            <span className="underline underline-offset-4 font-semibold">
              Front-End Engineer.
            </span>{" "}
            With 2 years of experience.
          </motion.h3>
          <Link
            href="https://resume.showwcase.com/fatsa-yahdi.pdf?v=1716979431295"
            target="_blank"
          >
            <motion.button
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className="mt-24 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-border bg-[linear-gradient(110deg,hsl(var(--background)),45%,#7936ec,55%,hsl(var(--background)))] bg-[length:200%_100%] px-6 font-medium text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2"
            >
              <Eye className="size-6" /> View CV
            </motion.button>
          </Link>
        </div>
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          src={Me.src}
          alt="Fatsa Yahdi Husna Muhaimin"
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="object-contain rounded-full size-[250px] p-1 border-4"
        />
      </div>
      <Scroll />
    </motion.section>
  );
}

export default Header;

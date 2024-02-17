import { Boxes } from "@/components/bg-box";
import { Separator } from "@/components/common/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/common/tooltip";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { skills } from "./data";
export default function AboutPage() {
  return (
    <main className="w-full animate-in fade-in-25 duration-3000 min-h-screen px-20">
      <div className="flex justify-center items-center z-10 container h-screen w-full max-w-7xl relative">
        <div className="space-y-7 max-w-6xl font-lexend">
          <div className="flex flex-col items-start space-y-4 text-start">
            <h1 className="font-semibold tracking-tighter text-5xl">
              About Me
            </h1>
            <small className="text-base">A little about myself.</small>
          </div>
          <div className="mx-auto space-y-4 animate-in fade-in-25 duration-3000">
            <div className="text-gray-500 text-md dark:text-[#f8fafc]">
              <div className="space-y-2">
                <p className="leading-6">
                  Hello My name is <strong>Fatsa Yahdi Husna Muhaimin</strong>{" "}
                  an <strong>Front End Developer</strong>. <br />I am interested
                  in web-based application development and highly motivated to
                  learn new technologies. <br />
                  My focus is on web application and mobile development using
                  JavaScript and TypeScript. <br /> I aim to contribute
                  significantly to this industry with my passion for continuous
                  learning.
                </p>
              </div>
            </div>
          </div>
          <div className="font-fredoka">
            <h1 className="text-3xl font-semibold">Skills</h1>
            <Separator className="my-4 bg-[#a9a9a9] dark:bg-white" />
            <div className="mx-auto max-w-4xl space-y-4">
              <div className="grid gap-2 md:gap-4 md:grid-cols-10 grid-cols-5">
                <TooltipProvider delayDuration={100}>
                  {skills.map((skill, index) => (
                    <Tooltip key={index + 1}>
                      <TooltipTrigger className="flex items-center justify-center flex-col animate-in fade-in-5">
                        {skill.icon}
                        <p className="mt-2">{skill.name}</p>
                      </TooltipTrigger>
                      <TooltipContent className="mb-3">
                        {skill.level}
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            </div>
          </div>
          <section id="getInTouch" className="mt-10 font-outfit">
            <h1 className="text-xl font-bold sm:text-3xl">Get In Touch</h1>
            <Separator className="my-4 bg-[#a9a9a9] dark:bg-white" />
            <h4 className="text-base  sm:text-xl">
              You can reach me via email in{" "}
              <a
                className="underline hover:text-blue-600 "
                href="mailto:fatsayahdi@gmail.com"
              >
                fatsayahdi@gmail.com
              </a>{" "}
              or via socials below
            </h4>
            <ul className="mt-3 list-disc pl-6">
              <li className="text-sm sm:text-lg">
                <span className="capitalize">github</span> -{" "}
                <a
                  className="underline hover:text-blue-600"
                  href="https://github.com/FatsaYahdi"
                  target="_blank"
                >
                  https://github.com/FatsaYahdi
                </a>
              </li>
              <li className="text-sm sm:text-lg">
                <span className="capitalize">instagram</span> -{" "}
                <a
                  className="underline hover:text-blue-600"
                  href="https://instagram.com/_llegen_"
                  target="_blank"
                >
                  https://instagram.com/_llegen_
                </a>
              </li>
              <li className="text-sm sm:text-lg">
                <span className="capitalize">linkedin</span> -{" "}
                <a
                  className="underline hover:text-blue-600"
                  href="https://www.linkedin.com/in/fatsa-yahdi"
                  target="_blank"
                >
                  https://www.linkedin.com/in/fatsa-yahdi
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="absolute top-10 flex justify-between w-full">
          <Link href="/" className="flex items-center">
            <ArrowLeft className="w-8 h-8 mr-4" />
            Back
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </main>
  );
}

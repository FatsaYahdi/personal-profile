"use client";
import { wleo } from "@/assets";
import { BackgroundBeams } from "@/components/background-beams";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="hidden lg:block">
        <div className="h-screen w-full rounded-md relative flex flex-col items-center justify-center antialiased z-10">
          <div className="absolute right-0 top-0 p-10">
            <ThemeSwitcher />
          </div>
          <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 animate-in fade-in-25 duration-5000">
            <h1 className="text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-900 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 ">
              Welcome
            </h1>
            <p className="mt-4 font-normal text-lg text-[#71717a] dark:text-neutral-300 text-center mx-auto leading-10">
              This is my personal profile website. My name is{" "}
              <span className="font-bold text-[#09090b] dark:text-neutral-50">
                Fatsa Yahdi
              </span>
              <br />
              You can call me{" "}
              <span className="font-bold text-[#09090b] dark:text-neutral-50">
                Fatsa
              </span>
              <br />
              I&apos;m a{" "}
              <span className="font-bold text-[#09090b] dark:text-neutral-50">
                Front End Developer
              </span>
            </p>
          </div>
          <Link
            href={"about"}
            className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>Discover Me</span>
              <ArrowRight height={12} width={12} className="animate-pulse" />
            </div>
          </Link>
        </div>
        <BackgroundBeams className="opacity-85 dark:opacity-100" />
      </main>
      <main className="flex lg:hidden h-screen items-center justify-center flex-col">
        <h1 className="text-4xl  font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Dekstop only kak
        </h1>
        <p className="mt-4 font-normal text-xl text-neutral-300 max-w-lg text-center mx-auto leading-10">
          mff
        </p>
        <Image
          src={wleo}
          alt="wleowleowleo"
          className="w-[140px] h-[140px] mt-10"
        />
      </main>
    </>
  );
}

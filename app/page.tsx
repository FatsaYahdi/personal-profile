"use client";
import { wleo } from "@/assets";
import { BackgroundBeams } from "@/components/background-beams";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  let due_date = new Date("2024-03-23");
  let deadlines = 60;
  let current_date = new Date();
  let utc1 = Date.UTC(
    due_date.getFullYear(),
    due_date.getMonth(),
    due_date.getDate()
  );
  let utc2 = Date.UTC(
    current_date.getFullYear(),
    current_date.getMonth(),
    current_date.getDate()
  );
  let days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));

  if (days > 0) {
    let days_late = deadlines - days;
    let opacity = (days_late * 100) / deadlines / 100;
    opacity = opacity < 0 ? 0 : opacity;
    opacity = opacity > 1 ? 1 : opacity;

    if (typeof document !== "undefined") {
      if (opacity >= 0 && opacity <= 1) {
        const body = document.getElementsByTagName("body");

        if (body) {
          body[0].style.setProperty("--opacity", opacity.toString());
        }
      }
    }
  }
  return (
    <>
      <main className="block">
        <div className="h-screen w-full rounded-md relative flex flex-col items-center justify-center antialiased z-10">
          <h1 className="text-3xl font-semibold font-outfit">
            Coming Soon... 👋
          </h1>
          {/* <div className="absolute right-0 top-0 m-10">
            <ThemeSwitcher />
          </div>
          <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-0 animate-in fade-in-25 duration-3000">
            <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-900 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 ">
              Hi
            </h1>
            <h3 className="text-5xl text-center font-semibold font-outfit mt-6">
              Welcome to my Website
            </h3>
          </div>
          <Link
            href={"about"}
            className="mt-5 bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-md font-semibold leading-6 text-white inline-block animate-in fade-in-0 duration-5000"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10 ">
              <span>Discover Me</span>
              <ArrowRight height={12} width={12} className="animate-pulse" />
            </div>
          </Link> */}
        </div>
        {/* <BackgroundBeams className="opacity-100" /> */}
        {/* </main>
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
        /> */}
      </main>
    </>
  );
}

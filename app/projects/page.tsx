import { KasirImage } from "@/assets";
import { PinContainer } from "@/components/3d-pin";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./data";
export default function AboutPage() {
  return (
    <main className="w-full animate-in fade-in-25 duration-3000 min-h-screen px-20">
      <div className="flex flex-col  z-10 container h-screen w-full max-w-7xl relative">
        <div className="space-y-7 max-w-6xl font-lexend mt-40">
          <div className="text-center space-y-6">
            <h1 className="font-semibold tracking-wide text-5xl">
              Past Project Experience
            </h1>
            <p className="text-lg">
              I&apos;ve worked on a variety of projects, from small personal
              projects to large enterprise projects. Here are some of the
              projects I&apos;ve worked on.
            </p>
          </div>
        </div>
        <section className="grid grid-cols-2 my-20">
          {projects.map((project, index) => (
            <Link href={project.href} key={index + 1} target="_blank">
              <PinContainer title={project.title} href={project.href}>
                <div className="w-[30rem] h-[20rem] dark:text-[#f3f3f3] text-[#020817]">
                  <h1 className="text-2xl mb-3 font-semibold font-outfit">
                    {project.title}
                  </h1>
                  <p className="text-sm mb-3">
                    Website Pengelolaan Keuangan <br />
                    <span className="text-lg">SMKN 1 KASREMAN</span>
                  </p>
                  <Image src={KasirImage} className="w-full" alt="" />
                </div>
              </PinContainer>
            </Link>
          ))}
        </section>
        <div className="absolute top-10 flex justify-between w-full">
          <Link href="/about" className="flex items-center font-semibold">
            <ArrowLeft className="w-8 h-8 mr-4" />
            About
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </main>
  );
}

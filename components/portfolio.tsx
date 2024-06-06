import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./common/button";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "./common/aspect-ratio";
import Image from "next/image";
import { CVZNImage } from "@/assets";
import { PROJECTS } from "@/data/portolio";

function Portfolio() {
  return (
    <section id="projects" className="container">
      <h2 className="mb-8 text-2xl font-heading sm:text-4xl">Portfolio</h2>
      <div className="grid w-full grid-cols-1 gap-10 p-4 md:grid-cols-3 rounded-base bg-main sm:p-5 place-content-center">
        {PROJECTS.map((project, id) => {
          return (
            <div className="flex flex-col gap-5" key={id + 1}>
              <div className="h-full p-4 border-2 border-black rounded-base bg-main shadow-base sm:p-5">
                <Image
                  className="object-cover w-full h-[250px] rounded-base object-[start_start]"
                  src={`${project.previewImage}`}
                  alt={project.name}
                  width={400}
                  height={400}
                />

                <div className="mt-5 font-base">
                  <h2 className="text-xl font-heading sm:text-2xl">
                    {project.name}
                  </h2>

                  <p className="mt-2">{project.description}</p>

                  <div className="grid grid-cols-2 gap-5 mt-8">
                    <a
                      className="px-4 py-2 text-sm text-center transition-all bg-white border-2 border-black cursor-pointer rounded-base font-base shadow-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base"
                      href={project.liveLink}
                      target="_blank"
                    >
                      Visit
                    </a>
                    <a
                      className="px-4 py-2 text-sm text-center transition-all bg-white border-2 border-black cursor-pointer rounded-base font-base shadow-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none sm:text-base"
                      href={project.repoUrl}
                      target="_blank"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;

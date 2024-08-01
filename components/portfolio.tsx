"use client"
import { PROJECTS } from "@/data/projects";
import Image from "next/image";
import { Button } from "./common/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { CardFooter } from "./ui/card";
import { CardContent } from "./common/card";

function Portfolio() {
  return (
    <section id="projects" className="container my-10">
      <div className="flex items-start justify-center px-4 flex-col">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="scroll-m-20 text-4xl font-semibold tracking-tight first:mt-0"
        >Projects</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto p-4 w-full">
          {PROJECTS.map((item) => (
            <div className="bg-background rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl" key={item.description}>
              <div className="block">
                <Image
                  src={item.previewImage}
                  alt={item.description}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                </CardContent>
                <CardFooter className="w-full justify-end flex">
                  <Button variant="link" className="text-primary" asChild >
                    <Link href={item.liveLink} className="flex items-center gap-2">
                      <Github className="size-4" /> Repository
                    </Link>
                  </Button>
                  <Button variant="link" className="text-primary" asChild >
                    <Link href={item.liveLink} className="flex items-center gap-2">
                      <ArrowUpRight className="size-4" /> View Project
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          ))

          }
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

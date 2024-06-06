import { PROJECTS } from "@/data/portolio";
import Image from "next/image";
import { Button } from "./common/button";

function Portfolio() {
  return (
    <section id="projects" className="container">
      <h2 className="mb-8 text-2xl font-heading sm:text-4xl">Portfolio</h2>
      <div className="grid w-full grid-cols-1 gap-10 p-4 lg:grid-cols-3 md:grid-cols-2 rounded-base sm:p-5 place-content-center">
        {PROJECTS.map((project, id) => {
          return (
            <div className="flex flex-col gap-5" key={id + 1}>
              <div className="h-full p-4 border-2 border-black rounded-base shadow-base dark:shadow-none sm:p-5">
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

                  <div className="flex justify-end w-full gap-5 mt-8">
                    <Button variant={"neo"} className="w-full text-lg">
                      Visit
                    </Button>
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

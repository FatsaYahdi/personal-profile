"use client";
import { BackgroundBeams } from "@/components/background-beams";
import { useReportWebVitals } from "next/web-vitals";
export default function Home() {
  useReportWebVitals((metric) => {
    console.log(metric);
  });
  return (
    <>
      <main className="hidden lg:block">
        <div className="h-screen w-full rounded-md relative flex flex-col items-center justify-center antialiased z-10 ">
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Welcome
            </h1>
            <p className="mt-4 font-normal text-lg text-neutral-300 max-w-lg text-center mx-auto leading-10">
              This is my personal profile website. My name is{" "}
              <span className="font-bold text-neutral-50">Fatsa Yahdi</span>
              <br />
              You can call me{" "}
              <span className="font-bold text-neutral-50">Fatsa Yahdi</span>
              <br />
              I&apos;m a{" "}
              <span className="font-bold text-neutral-50">
                Front End Developer
              </span>
            </p>
          </div>
        </div>
        <BackgroundBeams />
      </main>
      <main className="flex lg:hidden h-screen items-center justify-center flex-col">
        <h1 className="text-4xl  font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Dekstop only kak
        </h1>
        <p className="mt-4 font-normal text-xl text-neutral-300 max-w-lg text-center mx-auto leading-10">
          mff
        </p>
      </main>
    </>
  );
}

import { Button } from "@/components/common/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex items-center h-screen justify-center py-12 px-4 flex-col text-center space-y-4 md:px-6">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-wide sm:text-5xl md:text-6xl text-[#09090b] dark:text-[#fafafa]">
          Not Found kak
        </h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Balik ke home aja pls.
        </p>
      </div>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <Button
          asChild
          variant={`outline`}
          className="inline-flex items-center justify-center rounded-md bg-white px-8 text-md font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
        >
          <Link href="/">
            <ArrowLeft className="h-5 w-5 mr-5" />
            Kembali
          </Link>
        </Button>
      </div>
    </div>
  );
}

"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/common/button";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";

export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    }
  };

  return (
    <Button variant="outline" size="icon" className={cn("z-50", className)} onClick={
      handleClick
    } type="button">
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

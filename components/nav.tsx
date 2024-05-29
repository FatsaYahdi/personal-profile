import { cn } from "@/lib/utils";
import { Menu, MenuItem } from "./ui/navbar";
import Link from "next/link";
import { ThemeSwitcher } from "./theme/theme-switcher";

type dataType = {
  name: string;
  href: string;
};

const data: dataType[] = [
  {
    name: "Home",
    href: "/#",
  },
  {
    name: "About Me",
    href: "#about-me",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
];

function Nav({ className }: Readonly<{ className?: string }>) {
  return (
    <div className="relative flex items-center justify-center w-full">
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu>
          {data.map((item) => (
            <MenuItem key={item.href}>
              <Link className="font-semibold" href={item.href}>
                {item.name}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
}

export default Nav;

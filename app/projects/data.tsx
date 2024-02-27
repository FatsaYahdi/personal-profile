import { KasirImage } from "@/assets";
import { StaticImageData } from "next/image";

interface ProjectProps {
  href: string;
  title: string;
  description: string;
  image: StaticImageData;
}
export const projects: ProjectProps[] = [
  {
    href: "https://kasir.smkn1kasreman.sch.id/",
    title: "Kasir SMKN 1 KASREMAN",
    description: "Sistem Pengelolaan Keuangan SMKN 1 KASREMAN",
    image: KasirImage,
  },
];

import {
  CVZNImage,
  DigiDramsImage,
  KasirImage,
  ManagementImage,
  PerpusImage,
} from "@/assets";
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
    description: "Website Kasir SMKN 1 KASREMAN",
    image: KasirImage,
  },
  {
    href: "https://cvzamannow.com",
    title: "CV ZAMAN NOW",
    description: "Website CV Builder",
    image: CVZNImage,
  },
  {
    href: "https://digidreams.my.id",
    title: "Digi Dreams",
    description: "Website Company Profile",
    image: DigiDramsImage,
  },
  {
    href: "#",
    title: "Perpustakaan SMKN 1 KASREMAN",
    description: "Website Perpustakaan SMKN 1 KASREMAN",
    image: PerpusImage,
  },
  {
    href: "#",
    title: "Management SMKN 1 KASREMAN",
    description: "Website Management SMKN 1 KASREMAN",
    image: ManagementImage,
  },
];

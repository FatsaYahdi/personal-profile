import {
  Apsi,
  CVZNImage,
  DigiDreamsImage,
  KasirImage,
  ManagementImage,
  PerpusImage,
} from "@/assets";
export const PROJECTS: {
  name: string;
  description: string;
  previewImage: string;
  repoUrl: string;
  liveLink: string;
}[] = [
  {
    name: "CV Builder",
    description: "",
    liveLink: "https://cvzamannow.com",
    previewImage: CVZNImage.src,
    repoUrl: "https://github.com",
  },
  {
    name: "Company Profile",
    description: "",
    liveLink: "https://digidreams.id",
    previewImage: DigiDreamsImage.src,
    repoUrl: "https://github.com",
  },
  {
    name: "Cashier",
    description: "",
    liveLink: "/",
    previewImage: KasirImage.src,
    repoUrl: "/",
  },
  {
    name: "Library",
    description: "",
    liveLink: "/",
    previewImage: PerpusImage.src,
    repoUrl: "/",
  },
  {
    name: "Student Management",
    description: "",
    liveLink: "/",
    previewImage: ManagementImage.src,
    repoUrl: "/",
  },
  {
    name: "Supervisor Forum",
    description: "",
    liveLink: "https://forum.apsijateng.id/",
    previewImage: Apsi.src,
    repoUrl: "/",
  },
];

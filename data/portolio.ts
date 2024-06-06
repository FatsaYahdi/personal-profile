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
    name: "Kasir",
    description: "",
    liveLink: "#",
    previewImage: KasirImage.src,
    repoUrl: "#",
  },
  {
    name: "Perpustakaan",
    description: "",
    liveLink: "#",
    previewImage: PerpusImage.src,
    repoUrl: "#",
  },
  {
    name: "Management",
    description: "",
    liveLink: "#",
    previewImage: ManagementImage.src,
    repoUrl: "#",
  },
  {
    name: "Forum Pengawas",
    description: "",
    liveLink: "#",
    previewImage: Apsi.src,
    repoUrl: "#",
  },
];

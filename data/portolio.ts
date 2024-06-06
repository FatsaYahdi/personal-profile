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
    liveLink: "https://",
    previewImage: KasirImage.src,
    repoUrl: "https://",
  },
  {
    name: "Perpustakaan",
    description: "",
    liveLink: "https://",
    previewImage: PerpusImage.src,
    repoUrl: "https://",
  },
  {
    name: "Management",
    description: "",
    liveLink: "https://",
    previewImage: ManagementImage.src,
    repoUrl: "https://",
  },
  {
    name: "Forum Pengawas",
    description: "",
    liveLink: "https://",
    previewImage: Apsi.src,
    repoUrl: "https://",
  },
];

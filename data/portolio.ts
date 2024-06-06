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
    description: "Lorem ipsum dolor sit amet",
    liveLink: "https://cvzamannow.com",
    previewImage: CVZNImage.src,
    repoUrl: "https://github.com",
  },
  {
    name: "Company Profile",
    description: "Lorem ipsum dolor sit amet",
    liveLink: "https://digidreams.id",
    previewImage: DigiDreamsImage.src,
    repoUrl: "https://github.com",
  },
  {
    name: "Kasir",
    description: "Lorem ipsum dolor sit amet",
    liveLink: "https://",
    previewImage: KasirImage.src,
    repoUrl: "https://",
  },
  {
    name: "Perpustakaan",
    description: "Lorem ipsum dolor sit amet",
    liveLink: "https://",
    previewImage: PerpusImage.src,
    repoUrl: "https://",
  },
  {
    name: "Management",
    description: "Lorem ipsum dolor sit amet",
    liveLink: "https://",
    previewImage: ManagementImage.src,
    repoUrl: "https://",
  },
  {
    name: "Forum Pengawas",
    description: "Lorem ipsum dolor sit amet",
    liveLink: "https://",
    previewImage: Apsi.src,
    repoUrl: "https://",
  },
];

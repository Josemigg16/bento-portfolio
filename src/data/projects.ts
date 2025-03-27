import AstroIcon from "@/components/Icons/tech/AstroIcon.astro"
import CSSIcon from "@/components/Icons/tech/CSSIcon.astro"
import DockerIcon from "@/components/Icons/tech/DockerIcon.astro"
import ExpressjsIcon from "@/components/Icons/tech/ExpressjsIcon.astro"
import JavaScriptIcon from "@/components/Icons/tech/JavaScriptIcon.astro"
import NextIcon from "@/components/Icons/tech/NextIcon.astro"
import NodeIcon from "@/components/Icons/tech/NodeIcon.astro"
import NuxtIcon from "@/components/Icons/tech/NuxtIcon.astro"
import PostgresIcon from "@/components/Icons/tech/PostgresIcon.astro"
import PrismaIcon from "@/components/Icons/tech/PrismaIcon.astro"
import ReactIcon from "@/components/Icons/tech/ReactIcon.astro"
import TailwindIcon from "@/components/Icons/tech/TailwindIcon.astro"
import TypeScriptIcon from "@/components/Icons/tech/TypeScriptIcon.astro"

export interface Project {
  title: string
  image: string
  description: string
  category?: string
  technologies: any[]
  url?: string
  repo?: string
  slug: string
}

export interface Projects {
  clients: Project[]
  personal: Project[]
  academic: Project[]
}

export const projects: Project[] = [
  {
    title: "Willarp",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eaque neque necessitatibus quia est ipsum quo repellat molestiae iste doloremque minus impedit similique, illo eius libero magnam vel debitis tenetur?",
    image: "/projects/willarp.png",
    technologies: [AstroIcon, CSSIcon, TailwindIcon, TypeScriptIcon],
    url: "https://willarp.com",
    slug: "willarp",
    category: "freelance",
  },

  {
    title: "Cortito",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eaque neque necessitatibus quia est ipsum quo repellat molestiae iste doloremque minus impedit similique, illo eius libero magnam vel debitis tenetur?",
    image: "/projects/cortito.png",
    technologies: [
      AstroIcon,
      CSSIcon,
      TailwindIcon,
      TypeScriptIcon,
      JavaScriptIcon,
      NodeIcon,
      ExpressjsIcon,
      PostgresIcon,
      PrismaIcon,
    ],
    url: "https://cortito.vercel.com",
    repo: "https://github.com/Josemigg16/Cortito",
    slug: "cortito",
    category: "personal",
  },
  {
    title: "Secrettito",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eaque neque necessitatibus quia est ipsum quo repellat molestiae iste doloremque minus impedit similique, illo eius libero magnam vel debitis tenetur?",
    image: "/projects/secrettito.png",
    technologies: [
      NextIcon,
      TailwindIcon,
      ReactIcon,
      TypeScriptIcon,
      PostgresIcon,
      PrismaIcon,
    ],
    url: "https://secrettito.vercel.app",
    repo: "https://github.com/Josemigg16/Secrettito",
    slug: "secrettito",
    category: "personal",
  },
  {
    title: "Toppify",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eaque neque necessitatibus quia est ipsum quo repellat molestiae iste doloremque minus impedit similique, illo eius libero magnam vel debitis tenetur?",
    image: "/projects/toppify.png",
    technologies: [NuxtIcon, TailwindIcon, TypeScriptIcon],
    repo: "https://github.com/Josemigg16/toppify",
    slug: "toppify",
    category: "personal",
  },

  {
    title: "UFT CHAT",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eaque neque necessitatibus quia est ipsum quo repellat molestiae iste doloremque minus impedit similique, illo eius libero magnam vel debitis tenetur?",
    image: "/projects/uft-chat.png",
    technologies: [NextIcon, TailwindIcon, TypeScriptIcon, DockerIcon],
    slug: "uft-chat",
    category: "academic",
  },
]

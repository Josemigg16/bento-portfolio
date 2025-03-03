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
  technologies: any[]
  url: string
  repo?: string
}

export interface Projects {
  clients: Project[]
  personal: Project[]
  academic: Project[]
}

export const projects: Projects = {
  clients: [
    {
      title: "Willarp",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eaque neque necessitatibus quia est ipsum quo repellat molestiae iste doloremque minus impedit similique, illo eius libero magnam vel debitis tenetur?",
      image: "/projects/willarp.png",
      technologies: [AstroIcon, CSSIcon, TailwindIcon, TypeScriptIcon],
      url: "https://willarp.com",
    },
  ],
  personal: [
    {
      title: "Cortito",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eaque neque necessitatibus quia est ipsum quo repellat molestiae iste doloremque minus impedit similique, illo eius libero magnam vel debitis tenetur?",
      image: "/cortito.png",
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
    },
    {
      title: "Secrettito",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eaque neque necessitatibus quia est ipsum quo repellat molestiae iste doloremque minus impedit similique, illo eius libero magnam vel debitis tenetur?",
      image: "/secrettito.png",
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
    },
    {
      title: "Toppify",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eaque neque necessitatibus quia est ipsum quo repellat molestiae iste doloremque minus impedit similique, illo eius libero magnam vel debitis tenetur?",
      image: "/",
      technologies: [NuxtIcon, TailwindIcon, TypeScriptIcon],
      url: "no disponible",
      repo: "https://github.com/Josemigg16/toppify",
    },
  ],
  academic: [
    {
      title: "UFT CHAT",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eaque neque necessitatibus quia est ipsum quo repellat molestiae iste doloremque minus impedit similique, illo eius libero magnam vel debitis tenetur?",
      image: "/",
      technologies: [NextIcon, TailwindIcon, TypeScriptIcon, DockerIcon],
      url: "no disponible",
    },
  ],
}

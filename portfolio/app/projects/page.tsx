import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  // Sample project data - in a real app, this would come from a database or CMS
  const projects = [
    {
      id: "minecraft-mod",
      title: "Custom Minecraft Mod",
      description: "A comprehensive mod that enhances gameplay with carefully balanced biomes, items, and mechanics.",
      image: "/projects/minecraft-mod.png",
      tags: ["Forge", "Java", "Minecraft"],
      featured: true,
    },
    {
      id: "discord-bot",
      title: "Multipurpose Discord Bot",
      description:
        "A feature-rich Discord bot designed to streamline moderation, enhance community engagement, and provide entertainment.",
      image: "/projects/discord-bot.png",
      tags: ["Discord.js", "Node.js", "API"],
      featured: true,
    },
    {
      id: "minecraft-server",
      title: "Custom Minecraft Server",
      description:
        "A performance-optimized Minecraft server with custom plugins and configurations for an enhanced multiplayer experience.",
      image: "/projects/minecraft-server.png",
      tags: ["Paper", "Java", "Server Management"],
      featured: false,
    },
    {
      id: "discord-dashboard",
      title: "Discord Bot Dashboard",
      description:
        "An intuitive web dashboard for managing Discord bot settings with real-time analytics and customization options.",
      image: "/projects/discord-dashboard.png",
      tags: ["React", "Next.js", "Discord API"],
      featured: false,
    },
    {
      id: "minecraft-plugin",
      title: "Minecraft Plugin Suite",
      description:
        "A collection of specialized plugins that enhance server functionality and create unique player experiences.",
      image: "/projects/minecraft-plugin.png",
      tags: ["Spigot", "Java", "API"],
      featured: false,
    },
    {
      id: "discord-integration",
      title: "Minecraft-Discord Integration",
      description:
        "A seamless bridge between Minecraft servers and Discord for real-time communication and community building.",
      image: "/projects/discord-integration.png",
      tags: ["Java", "Discord.js", "Integration"],
      featured: false,
    },
  ]

  return (
    <div className="container px-4 py-16 md:px-6 md:py-24 animate-fade-in">
      <div className="mb-12">
        <Link href="/" passHref>
          <Button variant="ghost" className="gap-1 pl-0 mb-4 group">
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h1>
        <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          A showcase of my Minecraft and Discord contributions, including mods, plugins, bots, and community management
          tools.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={project.id} className={`animate-fade-in-delayed-${index % 3}`}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              link={`/projects/${project.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

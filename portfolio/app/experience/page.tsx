import Link from "next/link"
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperiencePage() {
  // Sample experience data - in a real app, this would come from a database or CMS
  const experiences = [
    {
      id: 1,
      title: "Minecraft Mod Developer",
      company: "Open Source Community",
      period: "2022 - Present",
      description:
        "Developing innovative Minecraft mods that enhance gameplay and create unique experiences. Created several mods with positive community reception and active user bases.",
      skills: ["Java", "Forge API", "Fabric API", "Git", "Gradle"],
      link: "#",
    },
    {
      id: 2,
      title: "Discord Bot Developer",
      company: "Community Projects",
      period: "2021 - Present",
      description:
        "Building specialized Discord bots that improve server management and user engagement. Implemented advanced features including moderation tools, interactive commands, and integration systems.",
      skills: ["JavaScript", "TypeScript", "Discord.js", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 3,
      title: "Discord Community Staff",
      company: "Various Gaming Communities",
      period: "2020 - 2022",
      description:
        "Managed moderation and community engagement for several gaming Discord servers. Helped implement effective moderation systems and community-building initiatives.",
      skills: ["Community Management", "Conflict Resolution", "Event Planning", "User Support", "Content Moderation"],
      link: "#",
    },
  ]

  // Sample skills data
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "HTML/CSS"],
    },
    {
      name: "Frameworks & Libraries",
      skills: ["Forge API", "Fabric API", "Discord.js", "React", "Next.js"],
    },
    {
      name: "Tools & Technologies",
      skills: ["Git", "Gradle", "Maven", "MongoDB", "MySQL", "Docker"],
    },
    {
      name: "Platforms",
      skills: ["Minecraft", "Discord", "GitHub", "Spigot", "Paper"],
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mb-8">
        <Link href="/" passHref>
          <Button variant="ghost" className="gap-1 pl-0 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h1>
        <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          My background and technical skills in Minecraft development, Discord bot creation, and community management.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card key={exp.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {exp.link && (
                    <Link href={exp.link} passHref target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gap-1">
                        View Details
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="space-y-6">
            {skillCategories.map((category) => (
              <Card key={category.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Download Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">Want a copy of my full resume? Download it here.</p>
                <Button className="w-full gap-1">
                  Download PDF
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

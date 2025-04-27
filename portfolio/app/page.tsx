import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FeaturedProject } from "@/components/featured-project"
import { SocialLinks } from "@/components/social-links"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-16 md:py-28 lg:py-36 animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Hi, I&apos;m <span className="text-primary">Misclassify</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    I manage and build thriving Discord communities and Minecraft servers, focusing on creating engaging and welcoming experiences for everyone.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/projects" passHref>
                    <Button className="gap-1 group">
                      View My Work
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/contact" passHref>
                    <Button variant="outline" className="hover-lift">
                      Contact Me
                    </Button>
                  </Link>
                </div>
                <SocialLinks className="mt-4" />
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-full border-2 border-primary/20 shadow-lg animate-subtle-float">
                  <Image
                    src="/profile-image.png"
                    alt="Portrait of Misclassify, Minecraft and Discord developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <AboutSection />

        <section className="w-full py-16 md:py-28 lg:py-36 bg-muted/40 animate-fade-in-delayed">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Explore my latest Minecraft and Discord contributions
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <FeaturedProject
                title="Minecraft Mod"
                description="A custom Minecraft mod that adds new biomes, items, and mechanics to enhance gameplay."
                image="/projects/minecraft-mod.png"
                tags={["Forge", "Java", "Minecraft"]}
                link="/projects/minecraft-mod"
              />
              <FeaturedProject
                title="Discord Bot"
                description="A multipurpose Discord bot with moderation, music, and fun commands for server management."
                image="/projects/discord-bot.png"
                tags={["Discord.js", "Node.js", "API"]}
                link="/projects/discord-bot"
              />
            </div>
            <div className="flex justify-center">
              <Link href="/projects" passHref>
                <Button variant="outline" className="gap-1 group hover-lift">
                  View All Projects
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-28 lg:py-36 animate-fade-in-delayed-more">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Community Feedback</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  What my community says about my work
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "MinecraftUser123",
                  role: "Server Owner",
                  text: "The custom mod integration transformed our gameplay experience. Highly recommended!",
                },
                {
                  name: "DiscordMod",
                  role: "Community Manager",
                  text: "Misclassify's bot made our moderation tasks so much easier. Great work!",
                },
                {
                  name: "GameDeveloper",
                  role: "Collaboration Partner",
                  text: "Working together on our server project was seamless. Professional and knowledgeable.",
                },
              ].map((review, i) => (
                <Card key={i} className="overflow-hidden hover-lift card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      {Array(5)
                        .fill(0)
                        .map((_, j) => (
                          <Star key={j} className="h-5 w-5 fill-primary text-primary" aria-hidden="true" />
                        ))}
                      <span className="sr-only">5 out of 5 stars</span>
                    </div>
                    <p className="mb-4">"{review.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src="/avatars/avatar-placeholder.png"
                          alt={`${review.name}'s profile picture`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/client-reviews" passHref>
                <Button variant="outline" className="gap-1 group hover-lift">
                  View All Feedback
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

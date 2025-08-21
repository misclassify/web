import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 animate-fade-in-delayed">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate developer specializing in Minecraft mods and Discord bots with over 5 years of
                experience creating engaging digital experiences for gaming communities.
              </p>
              <p>
                My journey began with simple Minecraft server plugins, which evolved into comprehensive mods that
                transform gameplay. For Discord, I've built bots that help server owners manage communities of thousands
                of members while keeping engagement high.
              </p>
              <p>
                What sets my work apart is the focus on user experience and performance. I believe that great mods and
                bots should feel like natural extensions of the platforms they enhance, not awkward additions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new games, contributing to open source projects, or
                helping moderate several gaming communities.
              </p>
            </div>
            <div className="mt-6">
              <Link href="/experience" passHref>
                <Button variant="outline" className="gap-1 group hover-lift">
                  More About My Experience
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-4">
              <div className="rounded-lg bg-primary/10 p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">5+</h3>
                <p className="text-sm text-muted-foreground">Years of Experience</p>
              </div>
              <div className="rounded-lg bg-secondary/10 p-6 text-center">
                <h3 className="text-2xl font-bold text-secondary mb-2">20+</h3>
                <p className="text-sm text-muted-foreground">Discord Bots</p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg bg-secondary/10 p-6 text-center">
                <h3 className="text-2xl font-bold text-secondary mb-2">15+</h3>
                <p className="text-sm text-muted-foreground">Minecraft Mods</p>
              </div>
              <div className="rounded-lg bg-primary/10 p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">10K+</h3>
                <p className="text-sm text-muted-foreground">Community Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

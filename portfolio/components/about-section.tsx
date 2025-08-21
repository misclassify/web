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
                hiya, welcome to my corner of the web! :3
                i go by misclassify (or mis/misc).
              </p>
              <p>
                i'm someone who spends way too much time online,
                usually being chrinically online and lazy or just exploring new things
              </p>
              <p>
                this site is a place to show off my portfolio of projects that i’ve worked on, and
                whatever else i feel like sharing on here!
              </p>
              <p>
                feel free to take a look around,
                there's always something to check out (:
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

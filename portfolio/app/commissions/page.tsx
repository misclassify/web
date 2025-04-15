import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommissionsPage() {
  // Sample commission packages - in a real app, this would come from a database or CMS
  const packages = [
    {
      id: "minecraft-mod",
      title: "Minecraft Mod Collaboration",
      price: "Open to discussion",
      description: "Let's work together on creating a custom Minecraft mod.",
      features: [
        "Custom items and blocks",
        "New gameplay mechanics",
        "Compatible with latest Minecraft version",
        "Open source or private options",
        "Collaborative development process",
      ],
      popular: false,
    },
    {
      id: "discord-bot",
      title: "Discord Bot Project",
      price: "Open to discussion",
      description: "Collaborate on building a feature-rich Discord bot.",
      features: [
        "Moderation and utility features",
        "Custom commands and interactions",
        "Server management tools",
        "Integration with other platforms",
        "Ongoing support and updates",
      ],
      popular: true,
    },
    {
      id: "community",
      title: "Community Management",
      price: "Open to discussion",
      description: "Help with setting up or improving your community server.",
      features: [
        "Server structure optimization",
        "Moderation system setup",
        "Community engagement strategies",
        "Integration between platforms",
        "Staff training and guidelines",
      ],
      popular: false,
    },
    {
      id: "custom",
      title: "Custom Collaboration",
      price: "Let's discuss",
      description: "Have a unique project idea? Let's talk about it.",
      features: [
        "Tailored to your specific vision",
        "Collaborative planning process",
        "Regular progress updates",
        "Focus on quality and innovation",
        "Flexible approach to meet your needs",
      ],
      popular: false,
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
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Collaboration Opportunities</h1>
        <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          I'm open to collaborating on interesting Minecraft and Discord projects. Here's how we can work together.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <Card key={pkg.id} className={pkg.popular ? "border-primary" : ""}>
            {pkg.popular && (
              <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                Popular Choice
              </div>
            )}
            <CardHeader>
              <CardTitle>{pkg.title}</CardTitle>
              <CardDescription>{pkg.description}</CardDescription>
              <div className="mt-4 text-3xl font-bold">{pkg.price}</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" passHref>
                <Button className="w-full">Request Commission</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-muted/40 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Collaboration Process</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="font-bold text-primary">1</span>
            </div>
            <h3 className="font-semibold mb-2">Initial Discussion</h3>
            <p className="text-muted-foreground">
              We'll discuss your project vision, goals, and how we might work together to bring it to life.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="font-bold text-primary">2</span>
            </div>
            <h3 className="font-semibold mb-2">Collaborative Development</h3>
            <p className="text-muted-foreground">
              We'll work together on the project, with regular updates and opportunities for feedback.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="font-bold text-primary">3</span>
            </div>
            <h3 className="font-semibold mb-2">Launch & Refinement</h3>
            <p className="text-muted-foreground">
              We'll release the project and continue to refine it based on community feedback and new ideas.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Interested in collaborating?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Reach out to discuss your project ideas and how we might work together.
        </p>
        <Link href="/contact" passHref>
          <Button size="lg">Contact Me</Button>
        </Link>
      </div>
    </div>
  )
}

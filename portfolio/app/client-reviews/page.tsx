import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ClientReviewsPage() {
  // Sample reviews data - in a real app, this would come from a database or CMS
  const reviews = [
    {
      id: 1,
      name: "Alex",
      avatar: "/avatars/alex.png",
      project: "Minecraft Mod",
      rating: 5,
      date: "March 2023",
      content:
        "The custom Minecraft mod added exactly what our server needed. The new features are well-balanced and integrate perfectly with vanilla gameplay. Communication throughout the collaboration was excellent.",
    },
    {
      id: 2,
      name: "Sarah",
      avatar: "/avatars/sarah.png",
      project: "Discord Bot",
      rating: 5,
      date: "February 2023",
      content:
        "Our community Discord server has been transformed by this custom bot. The moderation features have made our volunteer staff's work much easier, and our members love the interactive elements.",
    },
    {
      id: 3,
      name: "Michael",
      avatar: "/avatars/michael.png",
      project: "Community Management",
      rating: 5,
      date: "January 2023",
      content:
        "Having Misclassify help with our server moderation made a huge difference. Their experience with both Discord and Minecraft communities brought valuable insights to our team.",
    },
    {
      id: 4,
      name: "Emily",
      avatar: "/avatars/emily.png",
      project: "Discord Dashboard",
      rating: 4,
      date: "December 2022",
      content:
        "The dashboard makes managing our community so much easier. The interface is intuitive and the analytics help us understand our community better. Highly recommended for any active Discord server.",
    },
    {
      id: 5,
      name: "David",
      avatar: "/avatars/david.png",
      project: "Minecraft Plugin",
      rating: 5,
      date: "November 2022",
      content:
        "This custom plugin completely transformed our server's gameplay. Our players love the new features and everything runs smoothly with no performance issues.",
    },
    {
      id: 6,
      name: "Lisa",
      avatar: "/avatars/lisa.png",
      project: "Discord-Minecraft Integration",
      rating: 5,
      date: "October 2022",
      content:
        "The integration between our Minecraft server and Discord has created a much more connected community. Players love being able to chat across platforms, and the implementation works flawlessly.",
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
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Community Feedback</h1>
        <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          What community members and collaborators say about my work and contributions.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < review.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
                    />
                  ))}
              </div>
              <p className="mb-6">{review.content}</p>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image src={review.avatar || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-medium">{review.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {review.project} • {review.date}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

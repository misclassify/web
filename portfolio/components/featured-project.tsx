import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface FeaturedProjectProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export function FeaturedProject({ title, description, image, tags, link }: FeaturedProjectProps) {
  return (
    <Link href={link} className="group block" aria-label={`View details of ${title} project`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border-primary/10 hover:border-primary/30 hover-lift h-full">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={`Screenshot of ${title} project showing the user interface and key features`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-xl group-hover:text-primary transition-colors duration-200">{title}</h3>
            <ArrowUpRight
              className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-200 transform group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </div>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

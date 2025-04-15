import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] px-4 text-center animate-fade-in">
      <div className="rounded-full bg-primary/10 p-6 mb-6">
        <Home className="h-12 w-12 text-primary" aria-hidden="true" />
      </div>
      <h1 className="text-5xl md:text-6xl font-bold mb-2">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" passHref>
          <Button className="gap-2 group">
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Button>
        </Link>
        <Link href="/contact" passHref>
          <Button variant="outline">Contact Me</Button>
        </Link>
      </div>
    </div>
  )
}

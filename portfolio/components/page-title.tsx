"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

interface PageTitleProps {
  title?: string
  template?: string
  defaultTitle?: string
}

export function PageTitle({
  title,
  template = "%s | Misclassify",
  defaultTitle = "Misclassify - Minecraft & Discord Developer",
}: PageTitleProps) {
  const pathname = usePathname()

  useEffect(() => {
    // Set the document title based on the provided title or generate from pathname
    const pageTitle = title || generateTitleFromPath(pathname)
    document.title = pageTitle ? template.replace("%s", pageTitle) : defaultTitle
  }, [title, pathname, template, defaultTitle])

  return null
}

function generateTitleFromPath(pathname: string): string {
  if (pathname === "/") return ""

  // Remove leading slash and split by remaining slashes
  const segments = pathname.substring(1).split("/")

  // Get the first segment and format it
  const mainSegment = segments[0]
  return mainSegment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

import Link from "next/link"
import { Github, Twitter, Mail, Globe, DiscIcon as Discord } from "lucide-react"

import { cn } from "@/lib/utils"

interface SocialLinksProps {
  className?: string
  showLabels?: boolean
}

export function SocialLinks({ className, showLabels = false }: SocialLinksProps) {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/misclassify",
      icon: <Github className="h-5 w-5" aria-hidden="true" />,
      label: "Visit Misclassify on GitHub",
    },
    {
      name: "Discord",
      url: "https://discordapp.com/users/787525664809943071/",
      icon: <Discord className="h-5 w-5" aria-hidden="true" />,
      label: "View Misclassify's Discord Profile",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/misclassifyy",
      icon: <Twitter className="h-5 w-5" aria-hidden="true" />,
      label: "Follow Misclassify on Twitter",
    },
    {
      name: "Email",
      url: "mailto:misclassifyy@gmail.com",
      icon: <Mail className="h-5 w-5" aria-hidden="true" />,
      label: "Contact Misclassify via email",
    },
    {
      name: "Website",
      url: "https://misclassify.vercel.app",
      icon: <Globe className="h-5 w-5" aria-hidden="true" />,
      label: "Visit Misclassify's main website",
    },
  ]

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110 duration-200",
            showLabels ? "text-sm" : "",
          )}
          aria-label={!showLabels ? link.label : undefined}
        >
          {link.icon}
          {showLabels && <span>{link.name}</span>}
        </Link>
      ))}
    </div>
  )
}

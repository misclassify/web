"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Check } from "lucide-react"

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only show the toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle theme change with smooth transition
  const handleThemeChange = (newTheme: string) => {
    // Add transition-none class to prevent flash during theme change
    document.documentElement.classList.add("transition-none")

    // Change the theme
    setTheme(newTheme)

    // Remove the class after a short delay to allow the theme to be applied
    setTimeout(() => {
      document.documentElement.classList.remove("transition-none")
    }, 100)
  }

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" aria-label="Loading theme toggle" disabled>
        <Sun className="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label={`Change theme, current theme is ${theme}`}>
          <Sun
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            aria-hidden="true"
          />
          <Moon
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleThemeChange("light")}>
          Light
          {resolvedTheme === "light" && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
          Dark
          {resolvedTheme === "dark" && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("system")}>
          System
          {resolvedTheme !== "light" && resolvedTheme !== "dark" && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

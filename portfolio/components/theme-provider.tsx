"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Add a class to prevent transitions on initial load
  React.useEffect(() => {
    // Add transition-none class to prevent flash during initial theme detection
    document.documentElement.classList.add("transition-none")

    // Remove the class after a short delay to allow the theme to be applied
    const timeout = setTimeout(() => {
      document.documentElement.classList.remove("transition-none")
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

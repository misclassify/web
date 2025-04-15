"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "onLoadingComplete"> {
  fallback?: string
  showLoadingIndicator?: boolean
}

export function OptimizedImage({
  src,
  alt,
  className,
  fallback = "/placeholder.svg",
  showLoadingIndicator = false,
  ...props
}: OptimizedImageProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [imageSrc, setImageSrc] = useState(src)

  useEffect(() => {
    setImageSrc(src)
    setLoading(true)
    setError(false)
  }, [src])

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {loading && showLoadingIndicator && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20 backdrop-blur-sm">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      )}
      <Image
        src={error ? fallback : imageSrc}
        alt={alt}
        className={cn("transition-opacity duration-300", loading ? "opacity-0" : "opacity-100")}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true)
          setLoading(false)
        }}
        {...props}
      />
    </div>
  )
}

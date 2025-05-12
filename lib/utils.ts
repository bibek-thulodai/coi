import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Image optimization helper
export function getOptimizedImageUrl(url: string, width = 800, quality = 80): string {
  if (!url || url.includes("placeholder.svg")) {
    return url || "/placeholder.svg?height=400&width=600"
  }

  // For real images, add optimization parameters
  const separator = url.includes("?") ? "&" : "?"
  return `${url}${separator}w=${width}&q=${quality}`
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

// Format date helper
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

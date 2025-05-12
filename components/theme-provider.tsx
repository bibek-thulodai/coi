"use client"

import type * as React from "react"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode
} & ThemeProviderProps) {
  return (
    <NextThemesProvider {...props} forcedTheme="light">
      {children}
    </NextThemesProvider>
  )
}

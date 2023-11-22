"use client";

import { ThemeProvider as NextThemesProvider} from "next-themes";

export default function ThemeContext({children}: { children: React.ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="system"
      >
      {children}
    </NextThemesProvider>
  )
}
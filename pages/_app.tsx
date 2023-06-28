import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"

import "@/styles/globals.css"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <main
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  )
}

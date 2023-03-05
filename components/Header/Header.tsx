import { useEffect, useState } from "react"
import Link from "next/link"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  useEffect(() => setMounted(true), [])

  const getThemeChanger = () => {
    if (!mounted) {
      return null
    }

    const currentTheme = theme === "system" ? systemTheme : theme

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="h-5 w-5 text-black dark:text-white"
          role="button"
          onClick={() => setTheme("light")}
        />
      )
    } else {
      return (
        <MoonIcon
          className="h-5 w-5 text-black dark:text-white"
          role="button"
          onClick={() => setTheme("dark")}
        />
      )
    }
  }

  return (
    <nav>
      <div className="container mx-auto max-w-2xl mb-6 px-2">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center text-xl">
              <Link href="/">Reactwind</Link>
            </div>
          </div>
          {getThemeChanger()}
        </div>
      </div>
    </nav>
  )
}

export { Header }

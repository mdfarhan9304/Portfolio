"use client"

import { MoonIcon, SunMediumIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"
import { flushSync } from "react-dom"

export function ThemeToggleEffect() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const themeTransition = useRef(false)
  const dark = resolvedTheme === "dark"

  useEffect(() => {
    setMounted(true)
  }, [])

  const switchTheme = () => {
    if (!mounted || themeTransition.current) {
      return
    }

    const nextTheme = dark ? "light" : "dark"
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (reduceMotion || !document.startViewTransition) {
      setTheme(nextTheme)
      return
    }

    themeTransition.current = true

    const finishTransition = () => {
      themeTransition.current = false
    }

    try {
      const transition = document.startViewTransition(() => {
        flushSync(() => setTheme(nextTheme))
      })

      void transition.ready
        .then(() =>
          document.documentElement
            .animate(
              {
                clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"],
              },
              {
                duration: 700,
                easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                pseudoElement: "::view-transition-new(root)",
              }
            )
            .finished
        )
        .then(finishTransition, finishTransition)
    } catch {
      finishTransition()
      setTheme(nextTheme)
    }
  }

  return (
    <button
      aria-label={mounted ? `Switch to ${dark ? "light" : "dark"} mode` : "Toggle theme"}
      className="group relative grid size-8 shrink-0 cursor-pointer place-items-center overflow-hidden rounded-full border border-[var(--line)] text-[var(--muted-foreground)] transition-[background-color,color,border-color] duration-200 hover:border-[var(--brand)] hover:bg-[var(--hover)] hover:text-foreground"
      onClick={switchTheme}
      type="button"
    >
      {!mounted ? (
        <span className="size-3.5" aria-hidden />
      ) : (
        <>
          <SunMediumIcon
            className={`absolute size-3.5 transition-[opacity,transform] duration-500 ease-in-out ${
              dark
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-50 opacity-0"
            }`}
          />
          <MoonIcon
            className={`absolute size-3.5 transition-[opacity,transform] duration-500 ease-in-out ${
              dark
                ? "rotate-90 scale-50 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            }`}
          />
        </>
      )}
    </button>
  )
}

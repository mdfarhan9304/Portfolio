"use client"

import { MenuIcon, XIcon } from "lucide-react"
import { useEffect, useState } from "react"

import { SiteLogo } from "@/components/site-logo"
import { ThemeToggleEffect } from "@/components/theme-toggle-effect"

const navLinks = [
  { label: "Home", description: "Profile cover", href: "#home" },
  { label: "About", description: "Who I am", href: "#about" },
  { label: "Experience", description: "Production work", href: "#experience" },
  { label: "Apps", description: "iOS and Android apps", href: "#mobile" },
  { label: "Web", description: "Web platforms", href: "#web" },
  { label: "Skills", description: "Technical toolkit", href: "#skills" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      return
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex min-h-14 max-w-5xl items-center justify-between px-4 py-2.5 sm:px-6">
        <SiteLogo compact />

        <nav className="font-mono hidden items-center gap-4 text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--muted-foreground)] sm:flex">
          {navLinks.map((link) => (
            <a
              className="group relative py-2 transition-colors duration-200 hover:text-foreground"
              href={link.href}
              key={link.href}
            >
              {link.label}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[var(--brand)] transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </a>
          ))}
          <ThemeToggleEffect />
        </nav>

        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggleEffect />
          <button
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-8 place-items-center rounded-full border border-[var(--line)] text-[var(--muted-foreground)] transition-[background-color,color,border-color] duration-200 hover:border-[var(--brand)] hover:bg-[var(--hover)] hover:text-foreground"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? (
              <XIcon className="size-4" />
            ) : (
              <MenuIcon className="size-4" />
            )}
          </button>
        </div>
      </div>

      <nav
        className={`absolute left-0 right-0 top-full mx-auto max-w-5xl px-4 pt-2 text-sm transition-[opacity,transform,visibility] duration-200 ease-out sm:hidden sm:px-6 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="overflow-hidden border border-[var(--line)] bg-background/95 shadow-[0_24px_60px_rgb(7_14_28_/_0.14)] backdrop-blur-xl">
          {navLinks.map((link, index) => (
            <a
              className="group flex items-center justify-between gap-4 border-b border-[var(--line)] px-4 py-3 transition-[background-color] duration-200 last:border-b-0 hover:bg-[var(--hover)]"
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
            >
              <span className="flex items-center gap-3">
                <span className="font-mono text-[10px] tabular-nums text-[var(--brand)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-semibold tracking-[-0.015em] text-foreground">
                    {link.label}
                  </span>
                  <span className="block text-xs text-[var(--muted-foreground)]">
                    {link.description}
                  </span>
                </span>
              </span>
              <span className="text-[var(--muted-foreground)] transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--brand)]">
                /
              </span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

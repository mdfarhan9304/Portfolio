import { ArrowDownToLine, Linkedin, Mail } from "lucide-react"
import { siGithub, siX } from "simple-icons"

import { siteConfig } from "@/lib/site-config"

const darkGlyph = "light-dark(#17171c, #fafafa)"

const profileLinks = [
  {
    label: "Download resume",
    href: siteConfig.resume,
    external: true,
    icon: <ArrowDownToLine aria-hidden="true" className="size-4" />,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    external: true,
    icon: <Linkedin aria-hidden="true" className="size-4" />,
  },
  {
    label: "GitHub",
    href: siteConfig.github,
    external: true,
    icon: (
      <svg aria-hidden="true" className="size-4" style={{ color: darkGlyph }} viewBox="0 0 24 24">
        <path d={siGithub.path} fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "X",
    href: siteConfig.twitter,
    external: true,
    icon: (
      <svg aria-hidden="true" className="size-4" style={{ color: darkGlyph }} viewBox="0 0 24 24">
        <path d={siX.path} fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    external: false,
    icon: <Mail aria-hidden="true" className="size-4" />,
  },
]

export function ProfileLinks() {
  return (
    <nav aria-label="Profile links" className="mt-4 flex flex-wrap items-center gap-2">
      {profileLinks.map((link) => (
        <a
          aria-label={link.label}
          className="grid size-9 place-items-center rounded-full border border-[var(--line)] text-[var(--muted-foreground)] transition-[background-color,color,border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--brand)] hover:bg-[var(--hover)] hover:text-foreground"
          href={link.href}
          key={link.label}
          rel={link.external ? "noreferrer" : undefined}
          target={link.external ? "_blank" : undefined}
          title={link.label}
        >
          {link.icon}
        </a>
      ))}
    </nav>
  )
}

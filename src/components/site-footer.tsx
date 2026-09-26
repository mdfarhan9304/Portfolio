import { SiteLogo } from "@/components/site-logo"
import { siteConfig } from "@/lib/site-config"

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <SiteLogo />

        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
          {new Date().getFullYear()} — {siteConfig.role}
        </p>
      </div>
    </footer>
  )
}

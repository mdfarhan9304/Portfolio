import { cn } from "@/lib/utils"

export function SiteLogo({
  className,
  compact = false,
}: {
  className?: string
  compact?: boolean
}) {
  return (
    <a
      aria-label="Farhan Muzaffar — Home"
      className={cn("group inline-flex items-center gap-2.5", className)}
      href="#home"
    >
      <span
        aria-hidden="true"
        className="relative grid size-8 shrink-0 place-items-center overflow-hidden border border-dashed border-[var(--line-strong)] bg-[var(--accent)] transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:-rotate-6"
      >
        <span className="font-instrument-serif translate-y-px text-[1.35rem] italic leading-none tracking-[-0.08em] text-foreground">
          f
        </span>
        <span className="absolute bottom-[5px] right-[5px] size-1 rounded-full bg-[var(--brand)]" />
      </span>

      <span className="flex min-w-0 flex-col leading-none">
        <span className="flex items-end">
          <span className="font-instrument-serif text-[1.4rem] italic leading-none tracking-[-0.04em] text-foreground">
            farhan
          </span>
          <span className="font-instrument-serif text-[1.4rem] italic leading-none text-[var(--brand)]">
            .
          </span>
        </span>
        {compact ? null : (
          <span className="mt-1 font-mono text-[9px] font-medium uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
            Muzaffar
          </span>
        )}
      </span>
    </a>
  )
}

"use client"

import { ChevronDownIcon } from "lucide-react"
import Image from "next/image"
import { useId, useState } from "react"

import { cn } from "@/lib/utils"

export type RoleItem = {
  company: string
  position: string
  period: string
  stack: string[]
  logo: string
  bullets: string[]
}

export function RoleAccordion({ items }: { items: RoleItem[] }) {
  const [openItems, setOpenItems] = useState<number[]>([0])
  const baseId = useId()

  const toggleItem = (index: number) => {
    setOpenItems((current) =>
      current.includes(index)
        ? current.filter((value) => value !== index)
        : [...current, index]
    )
  }

  return (
    <div className="border-t border-[var(--line)]">
      {items.map((role, index) => {
        const isOpen = openItems.includes(index)
        const triggerId = `${baseId}-trigger-${index}`
        const contentId = `${baseId}-content-${index}`

        return (
          <div
            className={cn(
              index < items.length - 1 && "border-b border-[var(--line)]"
            )}
            key={role.company}
          >
            <h3>
              <button
                aria-controls={contentId}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-4 text-left transition-[background-color] duration-200 ease-out hover:bg-[var(--hover)] focus-visible:bg-[var(--hover)] sm:p-5"
                id={triggerId}
                onClick={() => toggleItem(index)}
                type="button"
              >
                <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-dashed border-[var(--line-strong)] bg-[var(--secondary)] p-2">
                    <Image
                      alt=""
                      className="size-full object-contain"
                      height={32}
                      src={role.logo}
                      width={32}
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                      <span className="text-base font-semibold tracking-[-0.02em] text-foreground sm:text-lg">
                        {role.company}
                      </span>
                      <span className="border border-[var(--line)] px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--muted-foreground)]">
                        {role.period}
                      </span>
                    </span>
                    <span className="mt-1 block text-sm text-[var(--muted-foreground)]">
                      {role.position}
                    </span>
                  </span>
                </span>

                <ChevronDownIcon
                  className={cn(
                    "size-4 shrink-0 text-[var(--muted-foreground)] transition-transform duration-300 ease-out",
                    isOpen && "rotate-180 text-[var(--brand)]"
                  )}
                />
              </button>
            </h3>

            <div
              aria-labelledby={triggerId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
              id={contentId}
              role="region"
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-5 sm:px-5 sm:pb-6">
                  <ul className="list-disc space-y-2.5 pl-4 text-sm leading-6 text-[var(--muted-foreground)] marker:text-[var(--brand)]">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  <p className="mt-5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                    Tech stack
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {role.stack.map((tech) => (
                      <span
                        className="border border-[var(--line)] px-2 py-1 font-mono text-[10px] text-[var(--muted-foreground)]"
                        key={tech}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

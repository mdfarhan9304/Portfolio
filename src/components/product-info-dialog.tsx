"use client"

import { InfoIcon, XIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

export type ProductInfo = {
  shortName: string
  category: string
  summary: string
  systems: {
    label: string
    detail: string
  }[]
  engineering: string[]
}

export function ProductInfoDialog({
  project,
  title,
}: {
  project: ProductInfo
  title: string
}) {
  const [open, setOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <>
      <button
        aria-haspopup="dialog"
        className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--secondary)] px-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--muted-foreground)] transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-[var(--brand)] hover:bg-[var(--accent)] hover:text-[var(--brand)]"
        onClick={() => setOpen(true)}
        type="button"
      >
        <InfoIcon className="size-3.5" />
        Info
      </button>

      {open
        ? createPortal(
        <div
          aria-labelledby="product-info-title"
          aria-modal="true"
          className="fixed inset-0 z-[60] grid place-items-center bg-[rgb(7_14_28_/_0.62)] p-4 backdrop-blur-sm"
          onMouseDown={() => setOpen(false)}
          role="dialog"
        >
          <section
            className="max-h-[min(46rem,calc(100vh-2rem))] w-full max-w-2xl overflow-y-auto border border-[var(--line-strong)] bg-[var(--panel)] shadow-[0_26px_80px_rgb(7_14_28_/_0.35)]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <header className="flex items-start justify-between gap-4 border-b border-[var(--line)] p-4 sm:p-5">
              <div>
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--brand)]">
                  {project.shortName} · {project.category}
                </p>
                <h2
                  className="mt-2 font-instrument-serif text-3xl italic leading-none tracking-[-0.02em]"
                  id="product-info-title"
                >
                  {title}
                </h2>
              </div>
              <button
                aria-label="Close project details"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-[var(--line)] text-[var(--muted-foreground)] transition-[background-color,border-color,color] hover:border-[var(--brand)] hover:bg-[var(--accent)] hover:text-[var(--brand)]"
                onClick={() => setOpen(false)}
                ref={closeButtonRef}
                type="button"
              >
                <XIcon className="size-4" />
              </button>
            </header>

            <p className="border-b border-[var(--line)] p-4 text-sm leading-6 text-[var(--muted-foreground)] sm:p-5">
              {project.summary}
            </p>

            <div className="divide-y divide-[var(--line)]">
              {project.systems.map((system, index) => (
                <div
                  className="grid gap-2 p-4 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-4 sm:p-5"
                  key={system.label}
                >
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--brand)]">
                    {String(index + 1).padStart(2, "0")} / {system.label}
                  </span>
                  <p className="text-sm leading-6 text-[var(--muted-foreground)]">
                    {system.detail}
                  </p>
                </div>
              ))}
            </div>

            <footer className="border-t border-dashed border-[var(--line-strong)] bg-[var(--secondary)] p-4 sm:p-5">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                Engineering scope
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.engineering.map((skill) => (
                  <span
                    className="border border-[var(--line)] bg-[var(--panel)] px-2 py-1 font-mono text-[10px] text-[var(--muted-foreground)]"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </footer>
          </section>
        </div>
          ,
          document.body
        )
        : null}
    </>
  )
}

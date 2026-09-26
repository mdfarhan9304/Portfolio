export function GeometricFrame() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible text-[var(--line-strong)]"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1200 720"
    >
      <g stroke="currentColor" vectorEffect="non-scaling-stroke">
        <path d="M0 512H1200" />
        <path d="M742 0V720" />
        <path d="M0 208H742" />
        <path d="M214 208V512" />
        <path d="M742 344H1200" />
        <path d="M998 344V720" />
      </g>

      <g
        stroke="currentColor"
        strokeDasharray="5 4"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M-80 700L1260 -28" />
        <path d="M190 -120L1118 820" />
      </g>

      <g stroke="currentColor" vectorEffect="non-scaling-stroke">
        <rect height="96" width="96" x="742" y="248" />
        <rect height="64" width="64" x="838" y="280" />
        <rect height="64" width="128" x="742" y="344" />
        <path d="M838 344V408" />
      </g>

      <path
        className="text-[var(--accent)]"
        d="M837.8 343.8C873.2 343.8 902 315 902 279.6C902 208.8 844.4 151.2 773.6 151.2C667.4 151.2 581 237.6 581 343.8C581 520.8 724.7 664.5 901.7 664.5C1185 664.5 1415 -64 742 -64"
        stroke="currentColor"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

import Image from "next/image"
import {
  siAndroid,
  siAnthropic,
  siAngular,
  siBun,
  siClaudecode,
  siCloudflare,
  siCursor,
  siDigitalocean,
  siDocker,
  siDrizzle,
  siExpo,
  siExpress,
  siFastapi,
  siFigma,
  siFirebase,
  siGit,
  siGithub,
  siGithubactions,
  siGooglecloud,
  siHuggingface,
  siJavascript,
  siLangchain,
  siMongodb,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siOllama,
  siOpenapiinitiative,
  siPostgresql,
  siPostman,
  siPrisma,
  siPython,
  siRazorpay,
  siReact,
  siRedux,
  siRender,
  siSocketdotio,
  siSqlite,
  siStripe,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons"

type BrandMark = { title: string; hex: string; path?: string }

const openaiMark: BrandMark = {
  title: "OpenAI",
  hex: "#10A37F",
  path: "M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681z",
}

const brandIcons: Record<string, BrandMark> = {
  Android: siAndroid,
  Anthropic: siAnthropic,
  Angular: siAngular,
  Bun: siBun,
  "Claude Code": siClaudecode,
  Cloudflare: siCloudflare,
  Cursor: siCursor,
  DigitalOcean: siDigitalocean,
  Docker: siDocker,
  Drizzle: siDrizzle,
  Expo: siExpo,
  Express: siExpress,
  FastAPI: siFastapi,
  Figma: siFigma,
  Firebase: siFirebase,
  Git: siGit,
  GitHub: siGithub,
  "GitHub Actions": siGithubactions,
  "Google Cloud": siGooglecloud,
  "Hugging Face": siHuggingface,
  JavaScript: siJavascript,
  LangChain: siLangchain,
  MongoDB: siMongodb,
  "Next.js": siNextdotjs,
  Nginx: siNginx,
  "Node.js": siNodedotjs,
  Ollama: siOllama,
  OpenAI: openaiMark,
  OpenAPI: siOpenapiinitiative,
  PostgreSQL: siPostgresql,
  Postman: siPostman,
  Prisma: siPrisma,
  Python: siPython,
  React: siReact,
  Razorpay: siRazorpay,
  Redux: siRedux,
  Render: siRender,
  "Socket.IO": siSocketdotio,
  SQLite: siSqlite,
  Stripe: siStripe,
  Supabase: siSupabase,
  Tailwind: siTailwindcss,
  TypeScript: siTypescript,
  Vercel: siVercel,
}

function parseHex(hex: string) {
  const value = hex.replace("#", "")
  const full =
    value.length === 3
      ? value
          .split("")
          .map((char) => `${char}${char}`)
          .join("")
      : value

  return {
    red: Number.parseInt(full.slice(0, 2), 16),
    green: Number.parseInt(full.slice(2, 4), 16),
    blue: Number.parseInt(full.slice(4, 6), 16),
  }
}

function getLuminance(hex: string) {
  const { red, green, blue } = parseHex(hex)

  return (
    0.2126 * (red / 255) + 0.7152 * (green / 255) + 0.0722 * (blue / 255)
  )
}

function darken(hex: string, factor: number) {
  const { red, green, blue } = parseHex(hex)
  const toHex = (value: number) =>
    Math.max(0, Math.min(255, Math.round(value * factor)))
      .toString(16)
      .padStart(2, "0")

  return `#${toHex(red)}${toHex(green)}${toHex(blue)}`
}

function getGlyphColor(hex: string) {
  const luminance = getLuminance(hex)

  if (luminance > 0.9 || luminance < 0.12) {
    return "light-dark(#17171c, #fafafa)"
  }

  if (luminance > 0.78) {
    return `light-dark(${darken(hex, 0.58)}, ${hex})`
  }

  return hex
}

export function SkillIcon({
  className,
  name,
}: {
  className?: string
  name: string
}) {
  if (name === "React Native") {
    return (
      <Image
        alt=""
        className={className}
        height={16}
        src="/images/brands/react-native.png"
        width={16}
      />
    )
  }

  const brand = brandIcons[name]

  if (!brand?.path) {
    return null
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      style={{ color: getGlyphColor(brand.hex) }}
      viewBox="0 0 24 24"
    >
      <title>{brand.title}</title>
      <path d={brand.path} fill="currentColor" />
    </svg>
  )
}

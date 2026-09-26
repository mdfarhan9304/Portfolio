import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Layers3,
  MapPin,
  Plus as PlusIcon,
  Quote as QuoteIcon,
  Sparkle,
} from "lucide-react"
import Image from "next/image"

import { ProfileLinks } from "@/components/profile-links"
import { RoleAccordion, type RoleItem } from "@/components/role-accordion"
import { SiteFooter } from "@/components/site-footer"
import { SkillIcon } from "@/components/skill-icon"
import { SiteNav } from "@/components/site-nav"
import { cn } from "@/lib/utils"

type ShowcaseItem = {
  name: string
  description: string
  platform: string
  build: string
  scope: string
  href: string
  icon?: string
}

const mobileApps: ShowcaseItem[] = [
  {
    name: "Unicapp",
    description: "Groceries and daily essentials with fast delivery.",
    platform: "iOS · Customer app",
    build: "React Native · REST APIs · App Store release",
    scope: "Production",
    href: "https://apps.apple.com/in/app/unica%20biz%20(60-min-delivery)",
    icon: "/images/apps/unicapp.png",
  },
  {
    name: "Unicapp Biz",
    description: "Inventory, orders, pricing, and merchant fulfillment.",
    platform: "iOS · Merchant app",
    build: "Order and pricing workflows · Full product ownership",
    scope: "Production",
    href: "https://apps.apple.com/in/app/unicapp-biz-60-min-delivery/id6755399722",
    icon: "/images/apps/unicapp-biz.jpg",
  },
  {
    name: "Unicapptain",
    description: "Accept, track, and complete deliveries in real time.",
    platform: "iOS · Delivery app",
    build: "Real-time delivery tracking and status updates",
    scope: "Production",
    href: "https://apps.apple.com/in/app/unicapptain-delivery-partner/id6761067658",
    icon: "/images/apps/unicapp-capptain.jpg",
  },
  {
    name: "Skanaus",
    description: "A production mobile application developed as a freelance project.",
    platform: "iOS · Client app",
    build: "Shipped end to end as a freelance product",
    scope: "Freelance",
    href: "https://apps.apple.co/skanaus/id6753877628",
    icon: "/images/apps/skanaus.jpg",
  },
  {
    name: "MedKare",
    description: "A healthcare mobile application with a modern, focused user experience.",
    platform: "iOS · Health app",
    build: "React Native · TypeScript · REST APIs",
    scope: "Personal",
    href: "https://apps.apple.com/in/app/medkare/id6779274301",
    icon: "/images/apps/medkare.jpg",
  },
  {
    name: "ReceiptVault",
    description: "An offline-first receipt scanner for private expense organization.",
    platform: "iOS · Utility",
    build: "OCR · SQLite · RevenueCat · Biometrics",
    scope: "Personal",
    href: "https://apps.apple.com/in/app/receiptvault-scan-organize/id6779995494",
    icon: "/images/apps/receiptvault.jpg",
  },
  {
    name: "OnDevice PDF",
    description:
      "Private PDF toolkit for merge, split, rotate, compress, and password-protect files.",
    platform: "Android · Tools",
    build: "Fully on-device processing — no account, no ads, no uploads",
    scope: "Personal",
    href: "https://play.google.com/store/apps/details?id=com.sylvabit.ondevicepdf&hl=en_IN",
    icon: "/images/ondevice-pdf.png",
  },
]

const webPlatforms: ShowcaseItem[] = [
  {
    name: "Unicapp Website",
    description: "Customer-facing ordering and delivery platform for daily essentials.",
    platform: "Web · Customer platform",
    build: "Ordering, delivery tracking, and storefront flows",
    scope: "Production",
    href: "https://www.unicapp.in/",
  },
  {
    name: "Namak Mirchi",
    description: "Private store and restaurant ordering experience for a growing brand.",
    platform: "Web · Storefront",
    build: "Storefront and restaurant ordering experience",
    scope: "Production",
    href: "https://namakmirchi.unicapp.in/",
  },
  {
    name: "Beauty of Pets",
    description: "Booking platform with payments and admin tooling for pet businesses.",
    platform: "Web · Booking",
    build: "Booking flows, checkout, and reusable admin interfaces",
    scope: "Platform",
    href: "https://beautyofpets.com/",
  },
  {
    name: "Muftishamail",
    description: "Islamic educational platform combining learning and commerce workflows.",
    platform: "Web · Education",
    build: "React · Node.js · Express · MongoDB",
    scope: "Freelance",
    href: "https://muftishamail.com/",
  },
]

const experiences: RoleItem[] = [
  {
    company: "Eternal Tech Verse Pvt. Ltd.",
    position: "Full Stack Product Engineer",
    period: "Nov 2025 – Present",
    stack: [
      "React",
      "Angular",
      "Next.js",
      "React Native",
      "TypeScript",
      "FastAPI",
      "REST APIs",
      "Docker",
      "Nginx",
      "CI/CD",
    ],
    logo: "/images/companies/eternal-tech-verse.svg",
    bullets: [
      "Take end-to-end ownership of multiple web and mobile products — from product requirements and technical design through production deployment and release.",
      "Architect application structure, reusable component systems, and API integration strategies across React, Angular, Next.js, and React Native codebases, balancing scalability, maintainability, and performance.",
      "Move fluidly between frontend, backend, and infrastructure work — REST APIs, Docker, Nginx, and CI/CD pipelines — to ship and operate complete products.",
      "Partner with product and backend teams to shape technical direction, validate requirements, and resolve production issues, while using AI-assisted tooling to accelerate planning, debugging, review, and refactoring and validating all production code independently.",
    ],
  },
  {
    company: "Unicapp Logistics",
    position: "Founding Engineer",
    period: "Feb 2025 – Nov 2025",
    stack: ["Next.js", "React Native", "Node.js", "Express.js", "MongoDB", "Razorpay"],
    logo: "/images/apps/unicapp.png",
    bullets: [
      "Built a full-stack logistics platform from the ground up — a Next.js web application with a Node.js/Express.js backend and a cross-platform mobile app, through to App Store and Play Store launch.",
      "Built a multi-tenant seller portal with dynamic subdomain routing and custom branding using Expo web and MongoDB.",
      "Developed RESTful APIs and integrated the Razorpay SDK across web and mobile platforms, achieving 40% faster load times.",
      "Integrated the Google Maps API for route optimization across the web dashboard and mobile apps.",
    ],
  },
]

const skillGroups: {
  title: string
  skills: { name: string; href: string }[]
}[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", href: "https://www.typescriptlang.org/" },
      { name: "Python", href: "https://www.python.org/" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", href: "https://react.dev/" },
      { name: "Next.js", href: "https://nextjs.org/" },
      { name: "Angular", href: "https://angular.dev/" },
      { name: "React Native", href: "https://reactnative.dev/" },
      { name: "Android", href: "https://developer.android.com/" },
      { name: "Expo", href: "https://expo.dev/" },
      { name: "Tailwind", href: "https://tailwindcss.com/" },
      { name: "Redux", href: "https://redux.js.org/" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", href: "https://nodejs.org/" },
      { name: "Bun", href: "https://bun.sh/" },
      { name: "Express", href: "https://expressjs.com/" },
      { name: "FastAPI", href: "https://fastapi.tiangolo.com/" },
      { name: "OpenAPI", href: "https://spec.openapis.org/" },
      { name: "Socket.IO", href: "https://socket.io/" },
    ],
  },
  {
    title: "AI",
    skills: [
      { name: "OpenAI", href: "https://platform.openai.com/" },
      { name: "LangChain", href: "https://www.langchain.com/" },
      { name: "Anthropic", href: "https://www.anthropic.com/" },
      { name: "Hugging Face", href: "https://huggingface.co/" },
      { name: "Ollama", href: "https://ollama.com/" },
    ],
  },
  {
    title: "Data",
    skills: [
      { name: "MongoDB", href: "https://www.mongodb.com/" },
      { name: "PostgreSQL", href: "https://www.postgresql.org/" },
      { name: "Prisma", href: "https://www.prisma.io/" },
      { name: "Drizzle", href: "https://orm.drizzle.team/" },
      { name: "Supabase", href: "https://supabase.com/" },
      { name: "Firebase", href: "https://firebase.google.com/" },
      { name: "SQLite", href: "https://www.sqlite.org/" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", href: "https://www.docker.com/" },
      { name: "Nginx", href: "https://nginx.org/" },
      { name: "Git", href: "https://git-scm.com/" },
      { name: "GitHub", href: "https://github.com/" },
      { name: "GitHub Actions", href: "https://github.com/features/actions" },
      { name: "Razorpay", href: "https://razorpay.com/" },
      { name: "Stripe", href: "https://stripe.com/" },
      { name: "Vercel", href: "https://vercel.com/" },
      { name: "Google Cloud", href: "https://cloud.google.com/" },
      { name: "DigitalOcean", href: "https://www.digitalocean.com/" },
      { name: "Cloudflare", href: "https://www.cloudflare.com/" },
      { name: "Render", href: "https://render.com/" },
      { name: "Postman", href: "https://www.postman.com/" },
      { name: "Figma", href: "https://figma.com/" },
      { name: "Cursor", href: "https://cursor.com/" },
      { name: "Claude Code", href: "https://claude.com/product/claude-code" },
    ],
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="grain" />

      <SiteNav />

      <div className="px-4 py-6 sm:px-6 sm:py-8">
        <div className="mx-auto max-w-5xl">
          <header
            id="home"
            className="relative min-h-[22rem] overflow-hidden border border-[var(--line)] sm:min-h-[25rem]"
          >
            <div
              aria-hidden="true"
              className="diagonal-stripes absolute inset-0 sm:hidden"
            />
            <Image
              alt="Alpine lake at dawn with mist over the mountains"
              className="hero-image hidden object-cover sm:block"
              fill
              priority
              sizes="(min-width: 1280px) 1024px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
              src="/images/header-scenery.png"
            />
            <div className="absolute inset-0 hidden bg-[linear-gradient(110deg,rgb(8_15_30_/_0.12),transparent_45%),linear-gradient(to_bottom,transparent_20%,rgb(8_15_30_/_0.12)_56%,var(--background)_122%)] sm:block" />
            <div className="absolute inset-x-0 bottom-0 z-10 border-t border-[var(--line)] bg-background/82 px-4 pb-5 pt-6 shadow-[0_-24px_70px_rgb(7_14_28_/_0.14)] backdrop-blur-xl sm:px-5">
              <div className="hero-copy ml-24 flex items-center justify-between gap-3 sm:ml-28">
                <div className="min-w-0">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <h1 className="font-instrument-serif text-4xl italic leading-[0.98] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                      Farhan Muzaffar
                    </h1>
                    {/* <Sparkle className="size-4 shrink-0 text-[var(--brand)] sm:size-5" /> */}
                  </div>
                  <div className="font-mono mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                    Full stack product engineer · India
                  </div>
                  <ProfileLinks />
                </div>
              </div>
            </div>

            <div className="hero-mark absolute bottom-6 left-4 z-20 rounded-full border border-dashed border-[var(--line-strong)] bg-[var(--accent)] p-[3px] shadow-[0_18px_45px_rgb(7_14_28_/_0.18)]">
              <div className="relative size-20 overflow-hidden rounded-full bg-[var(--secondary)] ring-1 ring-[var(--line)] ring-inset sm:size-24">
                <Image
                  alt="Farhan Muzaffar"
                  className="scale-[1.20] object-cover object-top"
                  fill
                  priority
                  sizes="96px"
                  src="/images/profile.png"
                />
              </div>
            </div>
          </header>

          <Separator />

          <Panel className="screen-line-bottom-none">
            <div className="grid gap-x-4 gap-y-3 p-4 sm:grid-cols-2">
              <InfoItem icon={<MapPin size={16} />} text="India / Remote" />
              <InfoItem icon={<BriefcaseBusiness size={16} />} text="Full Stack Product Engineer at Eternal Tech Verse" />
              <InfoItem icon={<Code2 size={16} />} text="Mobile, backend, and AI systems" />
              <InfoItem icon={<Layers3 size={16} />} text="Production-ready from idea to launch" />
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-0 hidden w-px border-r border-dashed border-[var(--line)] sm:block" />
          </Panel>

          <Panel id="about">
            <div className="grid sm:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
              <div className="border-b border-[var(--line)] p-4 sm:border-b-0 sm:border-r">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--brand)]">
                  About
                </p>
                <h2 className="mt-3 max-w-[16ch] font-instrument-serif text-[clamp(1.75rem,3vw,2.5rem)] italic leading-[1.06] tracking-[-0.02em] text-balance">
                  One engineer. Any stack.
                </h2>
                <p className="mt-4 max-w-[28ch] text-sm leading-6 text-[var(--muted-foreground)]">
                  From the last pixel to the pager when prod misbehaves.
                </p>
              </div>
              <div className="space-y-4 p-4 text-[15px] leading-7 text-[var(--muted-foreground)] sm:text-base sm:leading-8">
                <p>
                  I&apos;m Farhan — the kind of engineer you hire when you need{" "}
                  <span className="text-foreground">one person</span> who can
                  move across mobile, web, APIs, and infra without treating any
                  layer like someone else&apos;s problem.
                </p>
                <p>
                  I care about the craft — spacing, motion, the details people
                  feel — and the unglamorous work after launch: deploys, logs,
                  and fixing things when they break at the worst possible time.
                </p>
              </div>
            </div>

            <div className="grid border-t border-[var(--line)] sm:grid-cols-3">
              <AboutStep
                description="Polish UI, wire APIs, chase the details until the product feels right."
                step="01"
                title="Fix the pixels"
              />
              <AboutStep
                description="Ship end to end — apps, platforms, backends, and the pipeline that gets them out."
                step="02"
                title="Build & release"
              />
              <AboutStep
                description="Stay on prod: debug, patch, and stabilize when alerts go off."
                step="03"
                title="When things break"
              />
            </div>

            <div className="grid border-t border-[var(--line)] sm:grid-cols-3">
              <Fact label="How I show up" value="One engineer, full ownership" />
              <Fact label="Stack" value="Flexible — use what the product needs" />
              <Fact label="After launch" value="Still on prod with you" />
            </div>
          </Panel>

          <Separator />

          <Panel id="experience">
            <PanelHeader>
              <div className="flex flex-wrap items-end justify-between gap-2">
                <PanelTitle>Experience</PanelTitle>
                <span className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                  2 roles
                </span>
              </div>
            </PanelHeader>

            <RoleAccordion items={experiences} />

            <div className="border-t border-[var(--line)] px-4 py-5">
              <a
                className="group inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--brand)]"
                href="#mobile"
              >
                See the shipped apps
                <ArrowUpRight className="size-3.5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Panel>

          <Separator />

          <Panel id="mobile">
            <PanelHeader>
              <PanelTitle>Mobile apps</PanelTitle>
              <p className="max-w-[64ch] border-t border-[var(--line)] py-5 text-sm leading-6 text-[var(--muted-foreground)]">
                Seven shipped apps across production, freelance, and personal
                work — each one with the build behind it.
              </p>
            </PanelHeader>

            <ShowcaseGrid items={mobileApps} />
          </Panel>

          <Separator />

          <Panel id="web">
            <PanelHeader>
              <PanelTitle>Web platforms</PanelTitle>
              <p className="max-w-[64ch] border-t border-[var(--line)] py-5 text-sm leading-6 text-[var(--muted-foreground)]">
                Ordering, storefront, education, and booking platforms built end
                to end.
              </p>
            </PanelHeader>

            <ShowcaseGrid items={webPlatforms} />
          </Panel>

          <Separator />

          <Panel id="skills">
            <PanelHeader>
              <PanelTitle>Technical skills</PanelTitle>
              <p className="max-w-[64ch] border-t border-[var(--line)] py-5 text-sm leading-6 text-[var(--muted-foreground)]">
                The tools I reach for across product engineering — languages,
                frameworks, AI, data, and shipping.
              </p>
            </PanelHeader>

            <div className="grid gap-px border-t border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div className="bg-[var(--panel)] p-4 sm:p-5" key={group.title}>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-sm font-semibold tracking-[-0.01em]">
                      {group.title}
                    </h3>
                    <span className="font-mono text-[10px] font-medium text-[var(--brand)]">
                      {String(group.skills.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <a
                        className="group/skill inline-flex h-8 items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--secondary)] px-2.5 text-xs font-medium text-foreground transition-[background-color,border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--brand)] hover:bg-[var(--accent)]"
                        href={skill.href}
                        key={skill.name}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <SkillIcon
                          className="size-4 shrink-0 transition-transform duration-200 ease-out group-hover/skill:scale-110"
                          name={skill.name}
                        />
                        {skill.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Separator />

          <Panel id="quote">
            <div className="relative overflow-hidden border-y border-dashed border-[var(--line-strong)] px-4 py-10 sm:px-6 sm:py-14">
              <PlusIcon className="absolute -left-3 -top-3 size-6 text-[var(--brand)]" strokeWidth={1} />
              <PlusIcon className="absolute -right-3 -top-3 size-6 text-[var(--brand)]" strokeWidth={1} />
              <PlusIcon className="absolute -bottom-3 -left-3 size-6 text-[var(--brand)]" strokeWidth={1} />
              <PlusIcon className="absolute -bottom-3 -right-3 size-6 text-[var(--brand)]" strokeWidth={1} />
              <div className="pointer-events-none absolute inset-y-6 left-0 w-px border-l border-dashed border-[var(--line)]" />
              <div className="pointer-events-none absolute inset-y-6 right-0 w-px border-r border-dashed border-[var(--line)]" />

              <figure className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
                <QuoteIcon
                  aria-hidden="true"
                  className="mb-4 size-8 text-[var(--line-strong)] sm:mb-6 sm:size-10"
                  strokeWidth={1.5}
                />
                <blockquote className="font-instrument-serif text-2xl italic leading-[1.25] tracking-[-0.01em] text-foreground sm:text-3xl">
                  &ldquo;Make it work, make it right, make it fast.&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 sm:mt-8">
                  <span className="h-px w-8 bg-[var(--line-strong)]" />
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--muted-foreground)] sm:text-[11px]">
                    Kent Beck
                  </span>
                  <span className="h-px w-8 bg-[var(--line-strong)]" />
                </figcaption>
              </figure>
            </div>
          </Panel>

          <Separator />

          <SiteFooter />
        </div>
      </div>
    </main>
  )
}

function Panel({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "motion-panel screen-line-top screen-line-bottom relative scroll-mt-20 border-x border-[var(--line)] bg-[var(--panel)]",
        className
      )}
      {...props}
    />
  )
}

function PanelHeader({ children }: { children: React.ReactNode }) {
  return <header className="px-4">{children}</header>
}

function PanelTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="max-w-[24ch] py-5 font-instrument-serif text-[clamp(1.75rem,3vw,2.5rem)] italic leading-[1.06] tracking-[-0.02em] text-balance">
      {children}
    </h2>
  )
}

function Separator() {
  return <div className="stripe-divider border-x border-[var(--line)]" />
}

function InfoItem({
  icon,
  text,
}: {
  icon: React.ReactNode
  text: string
}) {
  return (
    <div className="font-ui flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
      <span className="grid size-6 place-items-center text-[var(--foreground)]">
        {icon}
      </span>
      <span>{text}</span>
    </div>
  )
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-[var(--line)] p-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold tracking-[-0.01em]">{value}</p>
    </div>
  )
}

function AboutStep({
  step,
  title,
  description,
}: {
  step: string
  title: string
  description: string
}) {
  return (
    <div className="border-b border-[var(--line)] p-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--brand)]">
          {step}
        </p>
        <span className="h-px flex-1 max-w-12 border-t border-dashed border-[var(--line-strong)]" />
      </div>
      <p className="mt-3 text-sm font-semibold tracking-[-0.01em]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
        {description}
      </p>
    </div>
  )
}

function ShowcaseGrid({ items }: { items: ShowcaseItem[] }) {
  const lastItemSpansRow = items.length % 2 === 1

  return (
    <div className="grid border-t border-[var(--line)] sm:grid-cols-2">
      {items.map((item, index) => (
        <a
          className={cn(
            "group flex flex-col justify-between gap-6 p-4 transition-[background-color] duration-200 ease-out hover:bg-[var(--hover)]",
            index < items.length - 1 && "border-b border-[var(--line)]",
            index % 2 === 0 && "sm:border-r sm:border-[var(--line)]",
            lastItemSpansRow &&
              index === items.length - 1 &&
              "sm:col-span-2 sm:border-r-0"
          )}
          href={item.href}
          key={item.name}
          rel="noreferrer"
          target="_blank"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-start gap-3">
              {item.icon ? (
                <Image
                  alt=""
                  className="size-11 shrink-0 rounded-[10px] border border-[var(--line)]"
                  height={44}
                  src={item.icon}
                  width={44}
                />
              ) : null}
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h3 className="font-semibold tracking-[-0.015em]">
                    {item.name}
                  </h3>
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--brand)]">
                    {item.scope}
                  </span>
                </div>
                <p className="mt-2 max-w-[52ch] text-sm leading-6 text-[var(--muted-foreground)]">
                  {item.description}
                </p>
              </div>
            </div>
            <ArrowUpRight className="size-4 shrink-0 text-[var(--muted-foreground)] transition-[color,transform] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--brand)]" />
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-dashed border-[var(--line)] pt-3">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--muted-foreground)]">
              {item.platform}
            </span>
            <span className="text-xs text-[var(--muted-foreground)]">
              {item.build}
            </span>
          </div>
        </a>
      ))}
    </div>
  )
}



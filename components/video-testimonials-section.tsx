"use client"

import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent, type TouchEvent } from "react"
import { cn } from "@/lib/utils"

/* ─── DATA ────────────────────────────────────────────────────────── */

const CLOUDINARY = "https://res.cloudinary.com/dlrfp4tex/video/upload"

interface VideoTestimonial {
  id: string
  name: string
  role: string
  quote: string
  /** Cloudinary public id, including the version segment */
  publicId: string
  /** Seconds — shown on the card before any video data has loaded */
  duration: number
}

/* Ordered by priority — the first story is centred on load */
const TESTIMONIALS: VideoTestimonial[] = [
  {
    id: "juliana",
    name: "Juliana",
    role: "Marketing site & web app",
    quote: "He's not only doing the website — he's teaching you through the process.",
    publicId: "v1789478154/WhatsApp_Video_2026_09_09_at_7_35_53_PM_V6_1_wc2p57",
    duration: 88,
  },
  {
    id: "david",
    name: "David",
    role: "Founder, financial SaaS",
    quote: "Everybody can program something, but very few people understood the financial concepts I needed for this app.",
    publicId: "v1789478153/David_V2_1_mxnbqa",
    duration: 102,
  },
  {
    id: "nory",
    name: "Nory",
    role: "Software agency owner",
    quote: "Their communication skills are top tier. The service is top notch and the results are perfect.",
    publicId: "v1789478153/WhatsApp_Video_2026_09_09_at_7_35_53_PM_V3_1_pkfvan",
    duration: 66,
  },
  {
    id: "valentin",
    name: "Valentin",
    role: "Founder, PriceSmurf",
    quote: "He doesn't just do his tasks — he often comes with his own ideas, does research, and finds ways to make our product better.",
    publicId: "v1789478152/WhatsApp_Video_2026_09_09_at_7_35_53_PM_V2_1_eyfwmx",
    duration: 42,
  },
]

/* Cards are at most ~300px wide, so 720px keeps the burned-in captions sharp on retina with a smaller file */
const videoUrl = (t: VideoTestimonial) => `${CLOUDINARY}/q_auto,w_720/${t.publicId}.mp4`

const posterUrl = (t: VideoTestimonial) => `${CLOUDINARY}/so_2,q_auto,w_720/${t.publicId}.jpg`

const formatTime = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`

/* Signed distance from the active card, wrapped so the carousel loops */
function wrapOffset(index: number, active: number, count: number) {
  const half = Math.floor(count / 2)
  return ((index - active + count + half) % count) - half
}

/* Coverflow position for a card `offset` steps away from the centre */
function cardTransform(offset: number) {
  const step = Math.min(Math.abs(offset), 2)
  const dir = Math.sign(offset)
  const x = [0, 88, 160][step] * dir
  const scale = [1, 0.8, 0.64][step]
  const rotate = [0, 8, 12][step] * dir
  return `translateX(${x}%) scale(${scale}) rotateY(${rotate}deg)`
}

function Icon({ name, size = 20, filled }: { name: string; size?: number; filled?: boolean }) {
  return (
    <span
      aria-hidden
      className="material-symbols-outlined leading-none"
      style={{ fontSize: size, fontVariationSettings: filled ? "'FILL' 1" : undefined }}
    >
      {name}
    </span>
  )
}

/* ─── MAIN SECTION ────────────────────────────────────────────────── */

export function VideoTestimonialsSection() {
  const count = TESTIMONIALS.length
  const [{ active, prev }, setSlide] = useState({ active: 0, prev: 0 })
  const [soundOn, setSoundOn] = useState(false)
  const [paused, setPaused] = useState(true)
  const [progress, setProgress] = useState(0)
  const [inView, setInView] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const userPaused = useRef(false)
  const touchStartX = useRef<number | null>(null)

  const current = TESTIMONIALS[active]

  const goTo = (index: number) => {
    const next = (index + count) % count
    if (next === active) return
    userPaused.current = false
    setPaused(true)
    setProgress(0)
    setSlide({ active: next, prev: active })
  }

  /* Only play while the section is on screen */
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  /* Muted looping preview by default; full story with sound once the visitor opts in */
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = !soundOn

    if (!inView) {
      if (soundOn && !video.paused) userPaused.current = true
      video.pause()
      return
    }

    const previewAllowed = !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (userPaused.current || (!soundOn && !previewAllowed)) return

    video.play().catch((err: DOMException) => {
      // Browser refused playback with sound — fall back to the muted preview
      if (err.name === "NotAllowedError" && !video.muted) {
        video.muted = true
        setSoundOn(false)
      }
    })
  }, [active, inView, soundOn])

  const handleCardClick = () => {
    const video = videoRef.current
    if (!video) return
    if (!soundOn) {
      // Restart from the top so the story plays in full, with sound
      userPaused.current = false
      video.muted = false
      video.currentTime = 0
      video.play().catch(() => {})
      setSoundOn(true)
    } else if (video.paused) {
      userPaused.current = false
      video.play().catch(() => {})
    } else {
      userPaused.current = true
      video.pause()
    }
  }

  const handleMute = () => {
    if (videoRef.current) videoRef.current.muted = true
    setSoundOn(false)
  }

  const handleSeek = (e: MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current
    if (!video?.duration) return
    const { left, width } = e.currentTarget.getBoundingClientRect()
    video.currentTime = ((e.clientX - left) / width) * video.duration
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowRight") goTo(active + 1)
    if (e.key === "ArrowLeft") goTo(active - 1)
  }

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(dx) > 40) goTo(active + (dx < 0 ? 1 : -1))
  }

  return (
    <section
      ref={sectionRef}
      id="client-stories"
      aria-roledescription="carousel"
      aria-label="Video testimonials"
      onKeyDown={handleKeyDown}
      className="bg-white pb-16 md:pb-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Stacked on mobile/tablet; text left + carousel right on desktop so it fits one screen */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[#141212] pt-8 pb-6 md:rounded-[3rem] md:pt-12 md:pb-10 lg:grid lg:grid-cols-12 lg:gap-x-6 lg:px-12 lg:py-6 xl:px-16">
          {/* Ambient glow + dot grid */}
          <div className="pointer-events-none absolute left-1/2 top-[58%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF1E41]/20 blur-[140px] lg:left-[68%] lg:top-1/2" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />

          {/* Header */}
          <div className="relative z-10 mb-6 px-6 text-center md:mb-8 lg:col-span-5 lg:mb-0 lg:self-end lg:px-0 lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 md:mb-6">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF1E41]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/70">Client Stories</span>
            </div>
            <h2 className="font-headline text-[2rem] font-bold leading-[0.95] tracking-tighter text-balance text-white sm:text-5xl">
              Don&apos;t take our word.
              <br />
              Take <span className="italic text-[#FF1E41]">theirs.</span>
            </h2>
            <p className="mx-auto mt-4 hidden max-w-xl text-base font-light leading-relaxed text-white/55 sm:block lg:mx-0 lg:mt-5">
              Unscripted video reviews from the founders and agency owners we&apos;ve built with — in their own words.
            </p>
          </div>

          {/* Stage — card height follows the viewport so the whole section stays on screen */}
          <div className="relative z-10 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:py-10 lg:[mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)]">
            <div
              className="relative mx-auto aspect-[9/16] h-[min(50svh,112vw,540px)] touch-pan-y md:h-[min(48svh,540px)] lg:h-[min(62svh,540px)]"
              style={{ perspective: "1400px" }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {TESTIMONIALS.map((t, i) => {
                const offset = wrapOffset(i, active, count)
                const isActive = offset === 0
                const hidden = Math.abs(offset) > 1
                // A card wrapping round to the other side snaps across instead of sweeping past the centre
                const jumped = Math.abs(offset - wrapOffset(i, prev, count)) > Math.floor(count / 2)

                return (
                  <div
                    key={t.id}
                    aria-hidden={!isActive}
                    className={cn(
                      "absolute inset-0 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      hidden ? "pointer-events-none opacity-0" : "opacity-100",
                    )}
                    style={{
                      transform: cardTransform(offset),
                      zIndex: 10 - Math.abs(offset),
                      transition: jumped ? (hidden ? "none" : "opacity 500ms ease") : undefined,
                    }}
                  >
                    <div
                      className={cn(
                        "relative h-full w-full overflow-hidden rounded-[1.5rem] bg-[#1c1b1b] ring-1 ring-white/10 md:rounded-[1.75rem]",
                        isActive ? "shadow-[0_30px_80px_-30px_rgba(255,30,65,0.55)]" : "shadow-2xl shadow-black/50",
                      )}
                    >
                      {isActive ? (
                        <>
                          <video
                            ref={videoRef}
                            src={videoUrl(t)}
                            poster={posterUrl(t)}
                            loop={!soundOn}
                            playsInline
                            preload="metadata"
                            className="absolute inset-0 h-full w-full object-cover"
                            onPlay={() => setPaused(false)}
                            onPause={() => setPaused(true)}
                            onTimeUpdate={(e) => {
                              const v = e.currentTarget
                              if (v.duration) setProgress(v.currentTime / v.duration)
                            }}
                            onEnded={() => goTo(active + 1)}
                          />

                          {/* Tap target — first tap restarts with sound, after that it toggles pause */}
                          <button
                            type="button"
                            onClick={handleCardClick}
                            aria-label={
                              !soundOn ? `Watch ${t.name}'s story with sound` : paused ? "Play" : "Pause"
                            }
                            className="absolute inset-0 z-10 cursor-pointer"
                          />

                          {/* Top bar — labels live up here because the videos carry captions in the lower third */}
                          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-2 bg-gradient-to-b from-black/70 via-black/30 to-transparent p-3 pb-10 md:p-4 md:pb-12">
                            <div className="min-w-0 pt-0.5">
                              <p className="font-headline text-base font-bold leading-tight text-white md:text-lg">{t.name}</p>
                              <p className="truncate text-[11px] text-white/65 md:text-xs">{t.role}</p>
                            </div>
                            {soundOn ? (
                              <button
                                type="button"
                                onClick={handleMute}
                                aria-label="Mute"
                                className="pointer-events-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition-colors hover:border-[#FF1E41] hover:bg-[#FF1E41]"
                              >
                                <Icon name="volume_up" size={18} />
                              </button>
                            ) : (
                              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/20 bg-white/10 py-1.5 pl-1.5 pr-3 backdrop-blur-md">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#1c1b1b]">
                                  <Icon name="play_arrow" size={16} filled />
                                </span>
                                <span className="hidden font-headline text-xs font-bold text-white sm:inline">Watch</span>
                                <span className="text-[11px] tabular-nums text-white/70">{formatTime(t.duration)}</span>
                              </span>
                            )}
                          </div>

                          {soundOn && paused && (
                            <span className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-md">
                              <Icon name="play_arrow" size={34} filled />
                            </span>
                          )}

                          {/* Progress — kept to a thin strip so it stays clear of the burned-in captions */}
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/50 to-transparent px-4 pt-6 pb-2 md:px-5 md:pb-3">
                            <div onClick={handleSeek} className="pointer-events-auto cursor-pointer py-2">
                              <div className="h-1 overflow-hidden rounded-full bg-white/25">
                                <div
                                  className="h-full rounded-full bg-[#FF1E41] transition-[width] duration-300 ease-linear"
                                  style={{ width: `${progress * 100}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <button
                          type="button"
                          tabIndex={-1}
                          onClick={() => goTo(i)}
                          className="group absolute inset-0 h-full w-full cursor-pointer text-left"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={posterUrl(t)}
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          {/* Dimmed rather than transparent, so the red glow doesn't tint the faces */}
                          <span className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/45 transition-opacity duration-500 group-hover:opacity-60" />
                          <span className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-4">
                            <span className="min-w-0">
                              <span className="block font-headline text-lg font-bold leading-tight text-white">{t.name}</span>
                              <span className="block truncate text-xs text-white/60">{t.role}</span>
                            </span>
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-md">
                              <Icon name="play_arrow" size={20} filled />
                            </span>
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Quote + controls */}
          <div className="relative z-10 mt-5 px-6 text-center md:mt-8 lg:col-span-5 lg:row-start-2 lg:mt-8 lg:self-start lg:px-0 lg:text-left">
            {/* The videos are captioned, so on small screens the pull quote is dropped to save height */}
            <div aria-live="polite" className="hidden min-h-[5.5rem] md:block lg:min-h-[8rem]">
              <blockquote key={current.id} className="reveal-up">
                <p className="font-headline text-xl font-medium leading-snug tracking-tight text-white/85 xl:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <footer className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  {current.name} · {current.role}
                </footer>
              </blockquote>
            </div>

            <div className="flex items-center justify-center gap-5 md:mt-6 lg:justify-start">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                aria-label="Previous story"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-[#FF1E41] hover:bg-[#FF1E41] hover:text-white"
              >
                <Icon name="arrow_back" />
              </button>

              <div className="flex items-center gap-1">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`${t.name}'s story`}
                    aria-current={i === active}
                    className="group px-1 py-3"
                  >
                    <span
                      className={cn(
                        "relative block h-1.5 overflow-hidden rounded-full transition-all duration-500",
                        i === active ? "w-12 bg-white/20" : "w-4 bg-white/25 group-hover:bg-white/50",
                      )}
                    >
                      {i === active && (
                        <span className="absolute inset-y-0 left-0 bg-[#FF1E41]" style={{ width: `${progress * 100}%` }} />
                      )}
                    </span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => goTo(active + 1)}
                aria-label="Next story"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-[#FF1E41] hover:bg-[#FF1E41] hover:text-white"
              >
                <Icon name="arrow_forward" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

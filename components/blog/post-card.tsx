import Link from "next/link"
import type { Post } from "@/lib/blog"
import { formatPostDate, getCategory, getReadingMinutes } from "@/lib/blog"

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const category = getCategory(post.category)
  const minutes = getReadingMinutes(post)

  return (
    <article
      className={`group relative flex flex-col rounded-3xl border border-[#d8c2c1]/40 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF1E41]/30 hover:shadow-[0_12px_40px_-12px_rgba(255,30,65,0.18)] ${
        featured ? "md:p-9" : ""
      }`}
    >
      <div className="mb-5 flex flex-wrap items-center gap-3">
        {category && (
          <span className="font-headline inline-flex items-center gap-1.5 rounded-full bg-[#FF1E41]/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#bb0029]">
            <span className="material-symbols-outlined" style={{ fontSize: "13px" }}>
              {category.icon}
            </span>
            {category.name}
          </span>
        )}
        <span className="text-[11px] font-medium uppercase tracking-widest text-[#5e3f3e]/50">
          {minutes} min read
        </span>
      </div>

      <h3
        className={`font-headline mb-3 font-bold leading-[1.15] tracking-tight text-[#1c1b1b] transition-colors group-hover:text-[#bb0029] ${
          featured ? "text-2xl md:text-3xl" : "text-xl"
        }`}
      >
        <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0 before:content-['']">
          {post.title}
        </Link>
      </h3>

      <p className="mb-6 flex-1 text-[15px] leading-relaxed text-[#5e3f3e]/85">{post.excerpt}</p>

      <div className="flex items-center justify-between gap-4 border-t border-[#d8c2c1]/30 pt-5">
        <time dateTime={post.publishedAt} className="text-xs font-medium text-[#5e3f3e]/55">
          {formatPostDate(post.updatedAt ?? post.publishedAt)}
        </time>
        <span className="font-headline inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#FF1E41] transition-transform group-hover:translate-x-0.5">
          Read
          <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
            arrow_forward
          </span>
        </span>
      </div>
    </article>
  )
}

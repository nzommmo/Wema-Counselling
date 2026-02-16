import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AnimatedCard from "@/components/ui/animated-card";
import { posts } from "@/data/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

const categoryColors: Record<string, string> = {
  "Mental Health":
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  Relationships:
    "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  Parenting:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  "Self-Care":
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Convert markdown-like content to basic HTML
  const formattedContent = post.content
    .split("\n")
    .map((line) => {
      if (line.startsWith("### ")) {
        return `<h3 class="text-lg font-bold text-gray-900 dark:text-white mt-8 mb-3">${line.slice(4)}</h3>`;
      }
      if (line.startsWith("## ")) {
        return `<h2 class="text-xl font-bold text-gray-900 dark:text-white mt-10 mb-4">${line.slice(3)}</h2>`;
      }
      if (line.startsWith("- **")) {
        const match = line.match(/^- \*\*(.+?)\*\*(.*)$/);
        if (match) {
          return `<li class="flex items-start gap-2 mb-2"><span class="text-pink-500 mt-1.5 shrink-0">•</span><span><strong class="font-semibold text-gray-900 dark:text-white">${match[1]}</strong>${match[2]}</span></li>`;
        }
      }
      if (line.startsWith("- ")) {
        return `<li class="flex items-start gap-2 mb-2"><span class="text-pink-500 mt-1.5 shrink-0">•</span><span>${line.slice(2)}</span></li>`;
      }
      if (line.match(/^\d+\.\s\*\*/)) {
        const match = line.match(/^\d+\.\s\*\*(.+?)\*\*\s*[-—]?\s*(.*)$/);
        if (match) {
          return `<li class="flex items-start gap-2 mb-2"><span class="text-pink-500 mt-1.5 shrink-0">•</span><span><strong class="font-semibold text-gray-900 dark:text-white">${match[1]}</strong> — ${match[2]}</span></li>`;
        }
      }
      if (line.trim() === "") return "<br />";
      return `<p class="mb-4 leading-relaxed">${line}</p>`;
    })
    .join("\n");

  return (
    <>
      {/* Hero with image */}
      <section className="relative">
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/10" />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10">
            <AnimatedCard>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-4 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3" />
                Back to Blog
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    categoryColors[post.category] ||
                    "bg-gray-100 text-gray-700"
                  }`}
                >
                  {post.category}
                </span>
                <span className="text-white/70 text-sm">
                  {new Date(post.date).toLocaleDateString("en-KE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="text-white/50">•</span>
                <span className="text-white/70 text-sm">{post.readTime}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {post.title}
              </h1>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-surface-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard>
            <div
              className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed blog-content"
              dangerouslySetInnerHTML={{ __html: formattedContent }}
            />
          </AnimatedCard>

          {/* CTA */}
          <AnimatedCard delay={200}>
            <div className="mt-16 p-8 md:p-10 bg-linear-to-br from-pink-50 to-rose-50 dark:from-surface-900 dark:to-surface-850 rounded-2xl border border-pink-100 dark:border-surface-700 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Ready to take the first step?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
                Our experienced counsellors are here to help you navigate
                life&apos;s challenges with confidence and care.
              </p>
              <Link
                href="https://calendly.com/maureennjihia468/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-linear-to-r from-pink-600 to-rose-500 rounded-xl shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                Book Appointment
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </>
  );
}

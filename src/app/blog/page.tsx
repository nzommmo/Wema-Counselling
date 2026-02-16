import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "@/components/ui/section-header";
import AnimatedCard from "@/components/ui/animated-card";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog & Resources",
  description:
    "Explore helpful articles on mental health, parenting, relationships, and self-care from the Mindful Wema Solutions team.",
};

const categoryColors: Record<string, string> = {
  "Mental Health": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  Relationships: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  Parenting: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  "Self-Care": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-16 bg-linear-to-b from-pink-50/50 to-white dark:from-surface-900 dark:to-surface-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedCard>
            <p className="text-sm font-medium text-pink-600 tracking-wider uppercase mb-4">
              Our Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Resources for a{" "}
              <span className="bg-linear-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                Healthier Mind
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Practical tips, insights, and guidance on mental health,
              relationships, parenting, and personal growth — from our team of
              experienced counsellors.
            </p>
          </AnimatedCard>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 lg:py-28 dark:bg-surface-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="LATEST ARTICLES"
            title="Read, learn, and grow"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <AnimatedCard key={post.slug} delay={(i % 2) * 150}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white dark:bg-surface-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-500 border border-gray-100 dark:border-surface-700 hover:border-pink-100 dark:hover:border-pink-900/50 h-full"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          categoryColors[post.category] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500 mb-3">
                      <span>
                        {new Date(post.date).toLocaleDateString("en-KE", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-pink-600 transition-colors duration-300 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-600 group-hover:gap-2.5 transition-all duration-300">
                      Read More
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="w-3 h-3"
                      />
                    </span>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

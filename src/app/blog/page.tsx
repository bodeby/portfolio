import Link from "next/link";
import { formatDate, getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

const sorter = (a, b) =>
  new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1;

export default function Page() {
  const allBlogs = getBlogPosts();
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Post Index</h1>

      <div>
        {allBlogs
          .sort((a, b) => sorter(a, b))
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[125px] tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}

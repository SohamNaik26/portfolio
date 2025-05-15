import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts"; // Import full blog post data
import { generateBlogImageUrl } from "@/lib/generateImage"; // Import the image generation helper

// Sample blog post data - REMOVE THIS (now imported)
/*
const blogPosts = [
  {
    id: "nextjs-introduction",
    title: "Getting Started with Next.js: A Comprehensive Guide",
    summary:
      "Learn how to build modern web applications with Next.js, from setup to deployment, with tips and best practices.",
    date: "2023-10-15",
    readTime: "8 min",
    imageUrl:
      "https://via.placeholder.com/800x400/3b82f6/ffffff?text=Next.js+Guide",
    author: "Soham Naik",
    content: `DEPRECATED_CONTENT`, // Truncated
    tags: ["Next.js", "React", "Web Development", "JavaScript"],
  },
  {
    id: "tailwind-vs-css",
    title: "Tailwind CSS vs. Traditional CSS: Pros and Cons",
    summary:
      "A detailed comparison of Tailwind CSS and traditional CSS approaches, helping you choose the right styling method for your projects.",
    date: "2023-09-22",
    readTime: "6 min",
    imageUrl:
      "https://via.placeholder.com/800x400/06b6d4/ffffff?text=Tailwind+vs+CSS",
    author: "Soham Naik",
    content: `DEPRECATED_CONTENT`, // Truncated, this is where line 380 was!
    tags: ["CSS", "Tailwind CSS", "Web Development", "Frontend"],
  },
  {
    id: "react-performance",
    title: "Optimizing React Performance: Advanced Techniques",
    summary:
      "Explore advanced performance optimization techniques for React applications, including memoization, code splitting, and more.",
    date: "2023-08-10",
    readTime: "10 min",
    imageUrl:
      "https://via.placeholder.com/800x400/ef4444/ffffff?text=React+Performance",
    author: "Soham Naik",
    content: `DEPRECATED_CONTENT`, // Truncated
    tags: ["React", "Performance", "JavaScript", "Web Development"],
  },
];
*/

// SVG Generation functions - REMOVE THESE (now in @/lib/generateImage)
/*
function generateImageDataUrl(
  title: string,
  color: string,
  width = 800,
  height = 400
) {
  const firstLetter = title.charAt(0);
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='${color.replace(
    "#",
    "%23"
  )}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='100' fill='white'%3E${firstLetter}%3C/text%3E%3C/svg%3E`;
}

function generateBlogImageUrl(id: string, title: string) {
  const colors = [
    "#3b82f6",
    "#06b6d4",
    "#ef4444",
    "#0ea5e9",
    "#8b5cf6",
    "#ec4899",
  ];
  const colorIndex = id.charCodeAt(0) % colors.length;
  const color = colors[colorIndex];
  return generateImageDataUrl(title, color);
}
*/

type BlogPostPageProps = {
  params: {
    id: string;
  };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  const postImageUrl = post.imageUrl
    ? post.imageUrl
    : generateBlogImageUrl(post.id, post.title, 800, 400);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Function to render blog content with improved code block handling
  const renderContent = () => {
    const elements = [];
    const lines = post.content.split("\n");
    let inCodeBlock = false;
    let codeBlockContent = "";
    let codeBlockLang = "";

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith("```")) {
        if (inCodeBlock) {
          // End of code block
          elements.push(
            <pre
              key={`code-${elements.length}`}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto"
            >
              <code className={`language-${codeBlockLang}`}>
                {codeBlockContent.trimEnd()}
              </code>
            </pre>
          );
          inCodeBlock = false;
          codeBlockContent = "";
          codeBlockLang = "";
        } else {
          // Start of code block
          inCodeBlock = true;
          codeBlockLang = trimmedLine.substring(3).trim(); // Get language if specified (e.g., ```javascript)
        }
      } else if (inCodeBlock) {
        codeBlockContent += line + "\n";
      } else if (trimmedLine.startsWith("# ")) {
        elements.push(
          <h1 key={i} className="text-3xl font-bold mt-8 mb-4">
            {trimmedLine.replace("# ", "")}
          </h1>
        );
      } else if (trimmedLine.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="text-2xl font-bold mt-8 mb-4">
            {trimmedLine.replace("## ", "")}
          </h2>
        );
      } else if (trimmedLine.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="text-xl font-bold mt-6 mb-3">
            {trimmedLine.replace("### ", "")}
          </h3>
        );
      } else if (trimmedLine.startsWith("#### ")) {
        elements.push(
          <h4 key={i} className="text-lg font-bold mt-4 mb-2">
            {trimmedLine.replace("#### ", "")}
          </h4>
        );
      } else if (trimmedLine.length > 0) {
        elements.push(
          <p key={i} className="my-4 text-gray-700 dark:text-gray-300">
            {trimmedLine}
          </p>
        );
      } else {
        // Preserve empty lines between paragraphs if needed, or skip
        // elements.push(<br key={i} />); // Example: to add line breaks
      }
    }
    // Ensure any unfinished code block is closed (e.g., if file ends mid-block)
    if (inCodeBlock) {
      elements.push(
        <pre
          key={`code-${elements.length}`}
          className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto"
        >
          <code className={`language-${codeBlockLang}`}>
            {codeBlockContent.trimEnd()}
          </code>
        </pre>
      );
    }
    return elements;
  };

  return (
    <div className="animate-fadeIn">
      {/* Blog Post Header */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
        >
          ← Back to Blog
        </Link>
        <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
          <span>By {post.author}</span>
          <span className="mx-2">•</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="mx-2">•</span>
          <span>{post.readTime} read</span>
        </div>
      </div>

      {/* Blog Post Image */}
      <div className="relative h-72 md:h-96 w-full rounded-lg overflow-hidden mb-8">
        <img
          src={postImageUrl}
          alt={`Cover image for ${post.title}`}
          className={`w-full h-full ${
            post.id === "nextjs-introduction" ||
            post.id === "tailwind-vs-css" ||
            post.id === "react-performance"
              ? "object-contain bg-gray-900 p-2"
              : "object-cover"
          }`}
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Blog Post Content */}
      <div className="prose dark:prose-invert lg:prose-lg max-w-none mb-12">
        {renderContent()} {/* Use the new rendering function */}
      </div>

      {/* Author Bio */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <img
              src={postImageUrl}
              alt={post.author}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold">{post.author}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Web Developer at Binary Data Labs
            </p>
          </div>
        </div>
      </div>

      {/* Related Posts Section */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Related Articles</h2>
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts
            .filter((p) => p.id !== post.id)
            .slice(0, 2)
            .map((relatedPost) => (
              <div
                key={relatedPost.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <img
                    src={
                      relatedPost.imageUrl ||
                      generateBlogImageUrl(
                        relatedPost.id,
                        relatedPost.title,
                        400,
                        200
                      )
                    }
                    alt={relatedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    <Link
                      href={`/blog/${relatedPost.id}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {relatedPost.summary}
                  </p>
                  <Link
                    href={`/blog/${relatedPost.id}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

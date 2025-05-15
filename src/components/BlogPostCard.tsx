import Link from "next/link";

type BlogPostCardProps = {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  imageUrl: string;
  author: string;
};

export default function BlogPostCard({
  id,
  title,
  summary,
  date,
  readTime,
  imageUrl,
  author,
}: BlogPostCardProps) {
  // Generate a simple SVG data URL with the first letter of the title
  const firstLetter = title.charAt(0);
  const colors = [
    "#3b82f6", // blue
    "#06b6d4", // cyan
    "#ef4444", // red
    "#0ea5e9", // sky blue
    "#8b5cf6", // purple
    "#ec4899", // pink
  ];
  const colorIndex = id.charCodeAt(0) % colors.length;
  const color = colors[colorIndex];

  const svgDataUrl = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='${color.replace(
    "#",
    "%23"
  )}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='100' fill='white'%3E${firstLetter}%3C/text%3E%3C/svg%3E`;

  // Use the provided imageUrl if it exists, otherwise use the generated SVG
  const imageSrc = imageUrl || svgDataUrl;

  // Special styling for specific blog post images
  const isNextJsGuide = id === "nextjs-introduction";
  const isTailwindCss = id === "tailwind-vs-css";
  const isReactPerformance = id === "react-performance";

  const imageContainerClass =
    isNextJsGuide || isTailwindCss || isReactPerformance ? "bg-gray-900" : "";
  const imageClass =
    isNextJsGuide || isTailwindCss || isReactPerformance
      ? "w-full h-full object-contain"
      : "w-full h-full object-cover";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col">
      <Link href={`/blog/${id}`} passHref>
        <div
          className={`relative w-full aspect-square cursor-pointer ${imageContainerClass}`}
        >
          <img
            src={imageSrc}
            alt={`Cover image for ${title}`}
            className={imageClass}
          />
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3 text-sm text-gray-500 dark:text-gray-400">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>{readTime} read</span>
        </div>

        <h3 className="text-xl font-bold mb-2">
          <Link
            href={`/blog/${id}`}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
          {summary}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            By {author}
          </span>
          <Link
            href={`/blog/${id}`}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}

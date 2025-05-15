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

  const svgDataUrl = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='${color.replace(
    "#",
    "%23"
  )}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='120' fill='white'%3E${firstLetter}%3C/text%3E%3C/svg%3E`;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48 w-full">
        <img
          src={svgDataUrl}
          alt={`Cover image for ${title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
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

        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {summary}
        </p>

        <div className="flex items-center justify-between">
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

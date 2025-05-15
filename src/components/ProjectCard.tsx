import Link from "next/link";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
};

export default function ProjectCard({
  id,
  title,
  description,
  technologies,
  imageUrl,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  // Generate a simple SVG data URL with the first letter of the title
  const firstLetter = title.charAt(0);
  const colors = [
    "#3b82f6", // blue
    "#16a34a", // green
    "#ef4444", // red
    "#0ea5e9", // sky blue
    "#8b5cf6", // purple
    "#ec4899", // pink
  ];
  const colorIndex = id.charCodeAt(0) % colors.length;
  const color = colors[colorIndex];

  const svgDataUrl = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='${color.replace(
    "#",
    "%23"
  )}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='120' fill='white'%3E${firstLetter}%3C/text%3E%3C/svg%3E`;

  // Determine which image source to use and what object-fit to apply
  const imageSrc = imageUrl.startsWith("/") ? imageUrl : svgDataUrl;
  const objectFit = id === "portfolio" ? "object-contain" : "object-cover";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48 w-full">
        <img
          src={imageSrc}
          alt={`${title} project screenshot`}
          className={`w-full h-full ${objectFit}`}
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between mt-auto">
          <Link
            href={`/projects/${id}`}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View Details
          </Link>

          <div className="flex space-x-3">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 dark:text-green-400 hover:underline"
              >
                Live Demo
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:underline"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects"; // Import full project data
import { generateProjectImageUrl } from "@/lib/generateImage"; // Use the centralized helper

// Function to generate SVG data URL - REMOVE THIS
/*
function generateImageDataUrl(
  title: string,
  color: string,
  width = 800,
  height = 600
) {
  const firstLetter = title.charAt(0);
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='${color.replace(
    "#",
    "%23"
  )}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='120' fill='white'%3E${firstLetter}%3C/text%3E%3C/svg%3E`;
}
*/

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  // Access the id parameter safely in an async component
  const { id } = params;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // For next project, find the next project or default to the first one if not found
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  // Generate image URLs - use real image if available, otherwise use the helper
  const projectDisplayImageUrl = project.imageUrl
    ? project.imageUrl
    : generateProjectImageUrl(project.id, project.title, 800, 600);

  const nextProjectDisplayImageUrl = nextProject.imageUrl
    ? nextProject.imageUrl
    : generateProjectImageUrl(nextProject.id, nextProject.title, 800, 400); // Example different dimensions for next project preview

  return (
    <div className="animate-fadeIn">
      {/* Project Header */}
      <div className="mb-8">
        <Link
          href="/projects"
          className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
        >
          ← Back to Projects
        </Link>
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Image */}
      <div
        className={`relative h-96 w-full rounded-lg overflow-hidden mb-8 ${
          project.id === "gully-guru" ? "bg-gray-900" : ""
        }`}
      >
        <img
          src={projectDisplayImageUrl}
          alt={`${project.title} screenshot`}
          className={`w-full h-full ${
            project.id === "gully-guru"
              ? "object-contain py-4"
              : project.id === "portfolio" ||
                project.id === "weather-app" ||
                project.id === "apple" ||
                project.id === "paytm"
              ? "object-contain"
              : "object-cover"
          }`}
        />
      </div>

      {/* Project Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <div className="prose dark:prose-invert max-w-none">
            {(project.longDescription || "")
              .split("\n")
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-4 text-gray-700 dark:text-gray-300"
                >
                  {paragraph.trim()}
                </p>
              ))}
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Challenges & Solutions
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {(project.challenges || []).map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Project Details</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400">Year</h4>
              <p>{project.year || "N/A"}</p>
            </div>

            <div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400">Role</h4>
              <p>{project.role || "N/A"}</p>
            </div>

            <div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400">
                Key Features
              </h4>
              <ul className="list-disc list-inside text-sm">
                {(project.features || []).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white text-center rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Project */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">More Projects</h2>
          <Link
            href="/projects"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="flex flex-col mt-6 sm:flex-row justify-between bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div className="p-6">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Next Project
            </span>
            <h3 className="text-xl font-bold">
              <Link
                href={`/projects/${nextProject.id}`}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {nextProject.title}
              </Link>
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 line-clamp-2">
              {nextProject.description}
            </p>
            <Link
              href={`/projects/${nextProject.id}`}
              className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Project →
            </Link>
          </div>
          <div
            className={`relative w-full sm:w-1/3 h-48 sm:h-auto ${
              nextProject.id === "gully-guru" ? "bg-gray-900" : ""
            }`}
          >
            <img
              src={nextProjectDisplayImageUrl}
              alt={nextProject.title}
              className={`w-full h-full ${
                nextProject.id === "gully-guru"
                  ? "object-contain py-2"
                  : nextProject.id === "portfolio" ||
                    nextProject.id === "weather-app" ||
                    nextProject.id === "apple" ||
                    nextProject.id === "paytm"
                  ? "object-contain"
                  : "object-cover"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

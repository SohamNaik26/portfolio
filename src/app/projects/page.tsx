import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects"; // Import projects from the new data file

// const projects = [...]; // This is now imported

export default function ProjectsPage() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
          My Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Here are some of the projects I've worked on. Each project represents
          different skills and technologies I've utilized in my development
          journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>

      <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Looking for a Developer?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
}
 
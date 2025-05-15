import ProjectCard from "@/components/ProjectCard";

// Actual project data based on Soham's GitHub repositories
const projects = [
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built with Next.js and Tailwind CSS, featuring light and dark mode, responsive design, and modern UI components.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/portfolio.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/SohamNaik26/portfolio",
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "A weather application that provides current weather data and forecasts based on user location or search. Built with a client-server architecture.",
    technologies: ["JavaScript", "HTML", "CSS", "Node.js"],
    imageUrl:
      "https://via.placeholder.com/800x600/16a34a/ffffff?text=Weather+App",
    demoUrl: "https://weather-app-server-nine.vercel.app",
    githubUrl: "https://github.com/SohamNaik26/weather-app",
  },
  {
    id: "apple",
    title: "Apple Website Clone",
    description:
      "A React and Vite based project recreating the Apple website interface with modern JavaScript and responsive design principles.",
    technologies: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    imageUrl:
      "https://via.placeholder.com/800x600/ef4444/ffffff?text=Apple+Clone",
    githubUrl: "https://github.com/SohamNaik26/apple",
  },
  {
    id: "paytm",
    title: "Paytm Clone",
    description:
      "A Node.js based payment application clone of Paytm with user authentication, wallet functionality, and transaction processing.",
    technologies: ["Node.js", "JavaScript", "Express", "MongoDB"],
    imageUrl:
      "https://via.placeholder.com/800x600/0ea5e9/ffffff?text=Paytm+Clone",
    githubUrl: "https://github.com/SohamNaik26/Paytm",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description:
      "A fully functional e-commerce platform with product listings, cart functionality, user authentication, and payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    imageUrl:
      "https://via.placeholder.com/800x600/8b5cf6/ffffff?text=E-Commerce+Platform",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "dashboard",
    title: "Admin Dashboard",
    description:
      "A comprehensive admin dashboard with data visualization, user management, and real-time analytics tracking.",
    technologies: ["React", "Redux", "Chart.js", "Firebase", "Material UI"],
    imageUrl:
      "https://via.placeholder.com/800x600/ec4899/ffffff?text=Admin+Dashboard",
    demoUrl: "#",
    githubUrl: "#",
  },
];

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

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Function to generate SVG data URL
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

// Generate a project image with the correct color based on ID
function generateProjectImageUrl(id: string, title: string) {
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

  return generateImageDataUrl(title, color);
}

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
    longDescription: `
      My personal portfolio website showcases my skills, projects, and experiences as a web developer. It's designed to provide visitors with a comprehensive understanding of my capabilities and the work I've done.
      
      The website is built with Next.js and Tailwind CSS, which allows for fast performance, SEO optimization, and responsive design across all devices. The implementation includes:
      
      - Server-side rendering for improved performance and SEO
      - Dark/light mode toggle for user preference
      - Responsive design that works on all screen sizes
      - Animations and transitions for a modern feel
      - Contact form with validation
      - Project showcase with detailed information
      
      This project demonstrates my skills in modern frontend development, UI/UX design principles, and creating performant web applications.
    `,
    challenges: [
      "Implementing a seamless dark/light mode switch with persistent user preferences",
      "Creating a responsive layout that works well on all devices",
      "Optimizing images and assets for fast loading times",
      "Building a contact form with proper validation and error handling",
    ],
    features: [
      "Responsive design",
      "Dark/light mode toggle",
      "Project showcase",
      "About me section",
      "Skills visualization",
      "Contact form",
      "SEO optimization",
    ],
    year: "2023",
    role: "Full-stack Developer",
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
    longDescription: `
      This weather application provides users with real-time weather information and forecasts. It's built with a client-server architecture, with a frontend for user interaction and a backend for API communication.
      
      The application allows users to:
      
      - Search for weather information by city name
      - View current weather conditions including temperature, humidity, and wind speed
      - See forecasts for upcoming days
      - Toggle between metric and imperial units
      - Access weather information based on geolocation (with permission)
      
      The frontend uses vanilla JavaScript, HTML, and CSS for a clean, responsive interface, while the backend is built with Node.js to handle API requests and serve the application.
    `,
    challenges: [
      "Integrating with external weather APIs for accurate real-time data",
      "Building a responsive interface that works well on mobile and desktop",
      "Implementing geolocation features with proper permission handling",
      "Optimizing API calls to minimize usage and improve performance",
    ],
    features: [
      "City-based weather search",
      "Current conditions display",
      "Multi-day forecast",
      "Responsive design",
      "Geolocation support",
      "Unit conversion",
    ],
    year: "2022",
    role: "Full-stack Developer",
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
    longDescription: `
      This project is a frontend clone of the Apple website, built to showcase my skills in modern React development and UI implementation. 
      
      The application is built with React and Vite, featuring:
      
      - Pixel-perfect recreation of Apple's design language
      - Responsive layouts that adapt to different screen sizes
      - Modern JavaScript practices including ES6+ features
      - Optimized performance with Vite's fast build system
      - Component-based architecture for maintainability
      
      The project demonstrates my attention to detail in UI development and ability to implement complex, responsive interfaces.
    `,
    challenges: [
      "Recreating Apple's signature animations and transitions",
      "Implementing a responsive design that matches Apple's mobile experience",
      "Optimizing image loading and performance",
      "Building reusable components that maintain design consistency",
    ],
    features: [
      "Product showcase carousels",
      "Responsive navigation",
      "Interactive product galleries",
      "Smooth animations and transitions",
      "Component-based architecture",
    ],
    year: "2023",
    role: "Frontend Developer",
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
    longDescription: `
      This project is a functional clone of the Paytm payment application, built with Node.js. It's a full-stack application that includes both backend and frontend components.
      
      The application provides features such as:
      
      - User registration and authentication
      - Digital wallet functionality
      - Money transfer between users
      - Transaction history and reporting
      - Balance management
      - Secure payment processing
      
      The backend is built with Node.js and Express, with MongoDB for data storage. The frontend provides a clean, intuitive interface for users to manage their finances.
      
      Note: This project is currently in progress, with core functionality implemented and additional features being added.
    `,
    challenges: [
      "Implementing secure user authentication and authorization",
      "Building a reliable transaction system with proper error handling",
      "Ensuring data consistency in financial operations",
      "Creating an intuitive user interface for complex financial interactions",
    ],
    features: [
      "User authentication",
      "Wallet management",
      "Transaction processing",
      "Payment history",
      "Account management",
      "Secure API architecture",
    ],
    year: "2023",
    role: "Full-stack Developer",
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
    longDescription: `
      This e-commerce platform provides a complete online shopping experience with product browsing, cart management, secure checkout, and order tracking.
      
      The application is built with React on the frontend and Node.js/Express on the backend, with MongoDB for data storage. Key features include:
      
      - User authentication and profile management
      - Product catalog with filtering and search capabilities
      - Shopping cart with persistent storage
      - Secure payment processing with Stripe
      - Order history and tracking
      - Admin dashboard for inventory and order management
      
      This project demonstrates my ability to build complex, full-stack applications with modern technologies and integrate third-party services.
    `,
    challenges: [
      "Implementing secure user authentication and authorization",
      "Creating a responsive and intuitive shopping experience",
      "Integrating payment processing with proper error handling",
      "Building an efficient product search and filtering system",
    ],
    features: [
      "User authentication",
      "Product catalog",
      "Shopping cart",
      "Payment processing",
      "Order tracking",
      "Admin dashboard",
      "Responsive design",
    ],
    year: "2022",
    role: "Full-stack Developer",
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
    longDescription: `
      This admin dashboard application provides a comprehensive interface for managing application data, users, and analytics. It's designed to give administrators powerful tools to monitor and control their application.
      
      The dashboard includes features such as:
      
      - Real-time data visualization with interactive charts and graphs
      - User management with role-based access control
      - Analytics tracking for key metrics and KPIs
      - Customizable dashboard layouts
      - Report generation and export
      - System notifications and alerts
      
      Built with React and Redux for state management, with Material UI for a polished user interface and Chart.js for data visualization, this project showcases my skills in building complex, data-driven applications.
    `,
    challenges: [
      "Creating interactive and responsive data visualizations",
      "Implementing real-time data updates without performance issues",
      "Building a flexible, customizable dashboard system",
      "Designing an intuitive interface for complex administrative tasks",
    ],
    features: [
      "Interactive charts and graphs",
      "User management",
      "Real-time analytics",
      "Report generation",
      "Role-based access control",
      "System notifications",
      "Dark/light mode",
    ],
    year: "2022",
    role: "Frontend Developer",
  },
];

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  // For next project, find the next project or default to the first one if not found
  const currentIndex = projects.findIndex((p) => p.id === params.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  // Generate image URLs - use real image for portfolio project
  const projectImageUrl =
    project.id === "portfolio"
      ? project.imageUrl
      : generateProjectImageUrl(project.id, project.title);
  const nextProjectImageUrl =
    nextProject.id === "portfolio"
      ? nextProject.imageUrl
      : generateProjectImageUrl(nextProject.id, nextProject.title);

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
      <div className="relative h-96 w-full rounded-lg overflow-hidden mb-8">
        <img
          src={projectImageUrl}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <div className="prose dark:prose-invert max-w-none">
            {project.longDescription.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 dark:text-gray-300">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Challenges & Solutions
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Project Details</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400">Year</h4>
              <p>{project.year}</p>
            </div>

            <div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400">Role</h4>
              <p>{project.role}</p>
            </div>

            <div>
              <h4 className="text-sm text-gray-500 dark:text-gray-400">
                Key Features
              </h4>
              <ul className="list-disc list-inside text-sm">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                )}

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
          <div className="relative w-full sm:w-1/3 h-48 sm:h-auto">
            <img
              src={nextProjectImageUrl}
              alt={nextProject.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 mt-4 mb-16 p-8 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-sm">
        <div className="flex-shrink-0 w-64 h-64 relative rounded-full overflow-hidden border-4 border-blue-500 shadow-xl mx-auto md:mx-0">
          <img
            src="/soham.jpg"
            alt="Soham Naik profile photo"
            className="w-full h-full object-contain bg-blue-100 dark:bg-blue-900"
          />
        </div>

        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Soham Naik
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
            Web Developer at Binary Data Labs
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            Mumbai, Maharashtra, India
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
            <a
              href="https://linkedin.com/in/sohamnaik26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:naiksoham267@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              Email
            </a>
            <a
              href="https://instagram.com/sohamnaik_26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
              Instagram
            </a>
          </div>

          <div className="mt-4 inline-block">
            <ThemeToggle />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          About Me
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Experienced web developer skilled in HTML, CSS, JavaScript, SQL, and
            ReactJs, with a strong foundation in both frontend and backend
            development. Passionate about leveraging technology to drive
            innovative web solutions, streamline processes, and debug complex
            issues.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Committed to building responsive, efficient, and scalable
            applications that enhance user experience. Currently working at
            Binary Data Labs in Mumbai, focusing on creating modern web
            applications.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            { name: "TypeScript", level: 90 },
            { name: "Tailwind CSS", level: 95 },
            { name: "Next.js", level: 85 },
            { name: "React.js", level: 90 },
            { name: "Node.js", level: 80 },
            { name: "Bootstrap", level: 85 },
            { name: "HTML5", level: 95 },
            { name: "CSS", level: 90 },
            { name: "JavaScript", level: 90 },
            { name: "SQL", level: 75 },
          ].map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-center mb-2">{skill.name}</div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="relative h-96 w-full">
            <img
              src="/portfolio.jpg"
              alt="Featured project"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
              Personal Portfolio Website
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A responsive portfolio website built with Next.js and Tailwind
              CSS, featuring light and dark mode, responsive design, and modern
              UI components.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Next.js", "React", "TypeScript", "Tailwind CSS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <Link
              href="/projects/portfolio"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          <h2 className="text-2xl font-bold">Recent Articles</h2>
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View All →
          </Link>
        </div>

        <p className="text-gray-600 dark:text-gray-400 italic text-center p-8">
          Coming soon! Stay tuned for articles on web development, technology
          trends, and more.
        </p>
      </section>
    </div>
  );
}

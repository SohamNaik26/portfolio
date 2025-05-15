export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  // Add other fields like longDescription, challenges, features, year, role if needed for project detail pages
  longDescription?: string;
  challenges?: string[];
  features?: string[];
  year?: string;
  role?: string;
};

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built with Next.js and Tailwind CSS, featuring light and dark mode, responsive design, and modern UI components.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/portfolio.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/SohamNaik26/portfolio",
    longDescription:
      "This portfolio website is a showcase of my web development skills and projects. I designed and implemented this site from scratch using Next.js, React, TypeScript, and Tailwind CSS to create a modern, responsive, and visually appealing platform. The website features a clean, intuitive interface with smooth transitions, dynamic content loading, and seamless navigation. The modular architecture allows for easy updates and additions to both content and functionality as my portfolio grows and evolves. The site demonstrates my approach to web development: combining technical excellence with thoughtful user experience design.",
    challenges: [
      "Creating a responsive design that works flawlessly across all device sizes and orientations",
      "Implementing a theme system with dark and light modes that persists user preferences",
      "Building a modular component architecture that allows for easy content updates",
      "Optimizing performance through efficient rendering and image delivery strategies",
      "Developing a clean and intuitive navigation experience for showcasing various content types",
    ],
    features: [
      "Responsive design with mobile-first approach",
      "Dark mode and light mode with persistent user preferences",
      "Dynamic project and blog content management",
      "Component-based architecture for maintainability",
      "Optimized performance with Next.js static generation",
    ],
    year: "2024",
    role: "Full Stack Developer",
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "A weather application that provides current weather data and forecasts based on user location or search. Built with a client-server architecture.",
    technologies: ["JavaScript", "HTML", "CSS", "Node.js", "Telegram API"],
    imageUrl: "/weather.jpg",
    demoUrl: "https://weather-app-server-nine.vercel.app",
    githubUrl: "https://github.com/SohamNaik26/weather-app",
    longDescription:
      "The Weather App is an innovative solution designed to provide users with accurate and timely weather forecasts through Telegram. The application leverages Node.js backend to fetch real-time weather data from multiple sources and delivers personalized forecasts to users based on their city preferences. The system is built with scalability in mind, allowing for easy expansion of supported cities and weather parameters.",
    challenges: [
      "Integrating with multiple weather data APIs to ensure accuracy and reliability",
      "Building a robust notification system for timely weather updates via Telegram",
      "Implementing an efficient caching mechanism to reduce API calls and improve performance",
      "Designing a user-friendly command interface for Telegram interactions",
    ],
    features: [
      "Sends weather forecast on telegram as per cities with help of backend like nodejs",
      "Real-time weather updates and notifications",
      "City-based weather tracking",
      "Daily and weekly forecast options",
    ],
    year: "2024",
    role: "Backend",
  },
  {
    id: "apple",
    title: "Apple Website Clone",
    description:
      "A React and Vite based project recreating the Apple website interface with modern JavaScript and responsive design principles.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "GSAP",
      "Three.js",
    ],
    imageUrl: "/apple.jpg",
    githubUrl: "https://github.com/SohamNaik26/apple",
    longDescription:
      "This project is a meticulous recreation of Apple's iPhone 15 Pro website, focusing on capturing the signature smooth animations and interactive 3D elements that Apple is known for. Built with React and Vite for optimal performance, the clone demonstrates advanced frontend techniques including sophisticated scroll-based animations using GSAP and immersive 3D product showcases with Three.js. The project serves as both a technical showcase and a learning resource for developers interested in high-end web experiences.",
    challenges: [
      "Recreating Apple's complex animation sequences with precise timing and easing",
      "Implementing responsive 3D models that adjust seamlessly across different device sizes",
      "Optimizing performance to maintain smooth 60fps animations even on mobile devices",
      "Matching Apple's exacting design standards and microinteractions",
    ],
    features: [
      "Recreate the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects",
      "Custom scroll-based animations",
      "Interactive 3D product models",
      "Responsive design matching Apple's standards",
    ],
    year: "2025",
    role: "Frontend",
  },
  {
    id: "paytm",
    title: "Paytm Clone",
    description:
      "A Node.js based payment application clone of Paytm with user authentication, wallet functionality, and transaction processing.",
    technologies: ["Node.js", "JavaScript", "Express", "MongoDB", "React"],
    imageUrl: "/paytm.jpg",
    githubUrl: "https://github.com/SohamNaik26/Paytm",
    longDescription:
      "This project is currently in progress and aims to replicate core functionality of the popular Indian payment platform PayTM. I'm developing a comprehensive digital wallet solution that will allow users to manage accounts, transfer funds, and process payments securely. The application implements critical financial transaction concepts including atomic database operations to ensure payment integrity and security. This project serves as a learning platform for understanding financial technology architecture and secure transaction handling.",
    challenges: [
      "Implementing secure database transactions for financial operations",
      "Building a robust authentication system with proper security measures",
      "Designing an intuitive user interface similar to the original PayTM app",
      "Setting up proper error handling for financial transactions to prevent data inconsistencies",
    ],
    features: [
      "Build a PayTM wallet like app using mongodb, react and Express",
      "Learn about transactions in databases which are essential for an app",
      "User authentication and account management",
      "Secure fund transfers between accounts",
    ],
    year: "2025",
    role: "Full Stack",
  },
  {
    id: "gully-guru",
    title: "Gully Guru Fantasy Cricket",
    description:
      "A Telegram bot-powered fantasy cricket platform featuring a full web-based dashboard, auctions, transfers, and live scoring.",
    technologies: [
      "Python",
      "TypeScript",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Docker",
      "Google Cloud",
    ],
    imageUrl: "/Logo-Gully.jpg",
    githubUrl:
      "https://github.com/SohamNaik26/gully_guru/tree/feature/mobile-friendly-contests",
    longDescription:
      "Gully Guru is a comprehensive fantasy cricket platform that integrates Telegram bot functionality with a responsive web dashboard. The system allows users to create and join multiple 'gullies' (leagues), participate in player auctions, manage teams, and compete based on real cricket match performance. The platform features real-time scoring, player valuation algorithms, weekly transfer windows, and detailed statistics tracking. With its microservices architecture and cloud-based deployment, Gully Guru provides a scalable and engaging fantasy sports experience for cricket enthusiasts.",
    challenges: [
      "Building a dual-interface system that works seamlessly across Telegram bot and web dashboard",
      "Implementing a fair and engaging auction system with real-time bidding functionality",
      "Creating a reliable real-time scoring system that processes match data efficiently",
      "Designing a scalable architecture that handles multiple concurrent gullies and users",
      "Developing an automated player valuation algorithm based on performance metrics",
    ],
    features: [
      "Multi-group fantasy cricket management with Telegram bot integration",
      "Live player auction system with bidding mechanics",
      "Automated player valuation and performance tracking",
      "Weekly transfer windows with dynamic player pricing",
      "Cloud-based deployment with continuous integration",
    ],
    year: "2023",
    role: "Full Stack Developer",
  },
];

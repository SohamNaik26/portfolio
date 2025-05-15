import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Sample blog post data - In a real app, you would fetch this from a database or CMS
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
    content: `
      # Getting Started with Next.js: A Comprehensive Guide

      Next.js has emerged as one of the most popular frameworks for building React applications. It provides a powerful set of features that help developers create production-ready applications with ease. In this comprehensive guide, we'll explore what makes Next.js special and how to get started with it.

      ## What is Next.js?

      Next.js is a React framework that enables server-side rendering, static site generation, and other performance optimizations out of the box. It was created by Vercel (formerly Zeit) and has gained significant traction in the React community.

      Key features of Next.js include:

      - **Server-side rendering (SSR)**: Renders pages on the server for better performance and SEO
      - **Static site generation (SSG)**: Pre-renders pages at build time for maximum performance
      - **Incremental Static Regeneration (ISR)**: Updates static pages without rebuilding the entire site
      - **API Routes**: Create serverless API endpoints as part of your Next.js application
      - **File-based routing**: Define routes based on the file structure in your pages directory
      - **Built-in CSS and Sass support**: Import CSS files directly in your components
      - **Image optimization**: Automatically optimize images for better performance
      - **Zero configuration**: Works out of the box with sensible defaults

      ## Setting Up a Next.js Project

      Getting started with Next.js is surprisingly simple. Here's how to create a new Next.js project:

      ### Prerequisites

      - Node.js 12.22.0 or later
      - npm or yarn

      ### Creating a New Project

      The easiest way to start with Next.js is to use the create-next-app command:

      \`\`\`bash
      npx create-next-app@latest my-next-app
      # or
      yarn create next-app my-next-app
      \`\`\`

      This will create a new Next.js project with a default template. You can also use a custom template:

      \`\`\`bash
      npx create-next-app@latest my-next-app --use-npm --example blog-starter
      \`\`\`

      ### Project Structure

      A typical Next.js project structure looks like this:

      \`\`\`
      my-next-app/
      ├── pages/        # Page components and routes
      │   ├── api/      # API routes
      │   ├── _app.js   # Custom App component
      │   └── index.js  # Home page
      ├── public/       # Static assets
      ├── styles/       # CSS files
      ├── components/   # React components
      ├── .next/        # Built output (ignored by git)
      ├── next.config.js # Next.js configuration
      └── package.json  # Project dependencies
      \`\`\`

      ## Creating Pages

      In Next.js, pages are React components exported from files in the pages directory. Each page is associated with a route based on its filename.

      For example, to create a home page, you would create a file at pages/index.js:

      \`\`\`jsx
      export default function Home() {
        return (
          <div>
            <h1>Welcome to my Next.js site!</h1>
            <p>This is the home page.</p>
          </div>
        );
      }
      \`\`\`

      To create an about page at the /about route, create a file at pages/about.js:

      \`\`\`jsx
      export default function About() {
        return (
          <div>
            <h1>About Us</h1>
            <p>This is the about page.</p>
          </div>
        );
      }
      \`\`\`

      ### Dynamic Routes

      Next.js supports dynamic routes using bracket syntax. For example, to create a blog post page that can handle different post IDs, create a file at pages/posts/[id].js:

      \`\`\`jsx
      import { useRouter } from 'next/router';

      export default function Post() {
        const router = useRouter();
        const { id } = router.query;

        return (
          <div>
            <h1>Post #{id}</h1>
            <p>This is the content of post #{id}.</p>
          </div>
        );
      }
      \`\`\`

      ## Data Fetching

      Next.js provides several ways to fetch data for your pages:

      ### getStaticProps (Static Site Generation)

      Use getStaticProps to fetch data at build time:

      \`\`\`jsx
      export default function Blog({ posts }) {
        return (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        );
      }

      export async function getStaticProps() {
        // Fetch data from an API
        const res = await fetch('https://api.example.com/posts');
        const posts = await res.json();

        // Pass data to the page via props
        return {
          props: { posts },
        };
      }
      \`\`\`

      ### getServerSideProps (Server-side Rendering)

      Use getServerSideProps to fetch data on each request:

      \`\`\`jsx
      export default function Dashboard({ data }) {
        return <div>Dashboard: {data}</div>;
      }

      export async function getServerSideProps() {
        // Fetch data from an API
        const res = await fetch('https://api.example.com/dashboard');
        const data = await res.json();

        // Pass data to the page via props
        return {
          props: { data },
        };
      }
      \`\`\`

      ## Deploying Next.js Applications

      Next.js applications can be deployed to any hosting provider that supports Node.js. However, Vercel (the creators of Next.js) offers the easiest deployment experience:

      1. Push your Next.js project to a Git repository (GitHub, GitLab, or Bitbucket)
      2. Import the project to Vercel
      3. Vercel automatically detects that it's a Next.js project and configures the build settings
      4. Your site is deployed!

      Other deployment options include:

      - **Self-hosting**: Build your Next.js app and run it on your own server
      - **Static export**: Export your Next.js app as static HTML files
      - **Containerization**: Deploy your Next.js app using Docker

      ## Conclusion

      Next.js offers a powerful and flexible framework for building modern web applications with React. Its built-in features for server-side rendering, static site generation, and API routes make it an excellent choice for projects of all sizes.

      By following this guide, you should now have a good understanding of what Next.js is, how to create pages, fetch data, and deploy your application. The Next.js documentation is an excellent resource for diving deeper into specific features and advanced use cases.

      Happy coding!
    `,
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
    content: `
      # Tailwind CSS vs. Traditional CSS: Pros and Cons

      When it comes to styling web applications, developers have a multitude of approaches to choose from. Two popular methods are Tailwind CSS, a utility-first CSS framework, and traditional CSS methodologies like BEM, SMACSS, or plain CSS with custom classes. In this article, we'll compare these approaches to help you decide which is right for your next project.

      ## Understanding Tailwind CSS

      Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML. Instead of pre-designed components like Bootstrap, Tailwind gives you utility classes that you can combine to create your own designs.

      Example of a button styled with Tailwind CSS:

      \`\`\`html
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click me
      </button>
      \`\`\`

      ## Traditional CSS Approaches

      Traditional CSS approaches typically involve writing custom CSS selectors and rules, often organized using methodologies like BEM (Block Element Modifier), SMACSS (Scalable and Modular Architecture for CSS), or OOCSS (Object-Oriented CSS).

      Example of the same button styled with traditional CSS:

      \`\`\`html
      <button class="btn btn-primary">
        Click me
      </button>
      \`\`\`

      \`\`\`css
      .btn {
        font-weight: bold;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
      }

      .btn-primary {
        background-color: #3b82f6;
        color: white;
      }

      .btn-primary:hover {
        background-color: #1d4ed8;
      }
      \`\`\`

      ## Pros of Tailwind CSS

      ### 1. Rapid Development

      Tailwind allows for rapid UI development as you don't need to switch between HTML and CSS files or think of class names. Everything is right there in your HTML.

      ### 2. Consistent Design System

      Tailwind enforces a design system with predefined spacing, colors, typography, and more, ensuring consistency across your application.

      ### 3. Responsive Design Made Easy

      Tailwind's responsive utilities make it simple to create designs that work well on different screen sizes:

      \`\`\`html
      <div class="w-full md:w-1/2 lg:w-1/3">
        <!-- Content -->
      </div>
      \`\`\`

      ### 4. No More CSS Growth

      With traditional CSS, your stylesheet tends to grow as your project grows. With Tailwind, you reuse the same utility classes, and unused classes are purged in production.

      ## Cons of Tailwind CSS

      ### 1. Verbose HTML

      Tailwind can lead to long class lists in your HTML, which some developers find less readable:

      \`\`\`html
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Click me
      </button>
      \`\`\`

      ### 2. Learning Curve

      Despite being intuitive once you get used to it, there's a learning curve to memorize all the utility classes and their effects.

      ### 3. Separation of Concerns

      Tailwind blurs the line between content (HTML) and presentation (CSS), which goes against the traditional separation of concerns principle.

      ## Pros of Traditional CSS

      ### 1. Cleaner HTML

      Traditional CSS keeps your HTML clean and focused on structure:

      \`\`\`html
      <button class="btn-primary">Click me</button>
      \`\`\`

      ### 2. Better Separation of Concerns

      With traditional CSS, your HTML focuses on structure, and your CSS handles styling, maintaining a clearer separation of concerns.

      ### 3. Easier Team Collaboration

      For larger teams, especially with designers who may not be familiar with Tailwind's utility classes, traditional CSS can be easier to collaborate on.

      ### 4. More Control Over Complex Animations

      For complex animations and transitions, writing custom CSS often provides more flexibility and control.

      ## Cons of Traditional CSS

      ### 1. CSS Bloat

      As projects grow, CSS files can become bloated with unused styles, leading to larger file sizes and potential maintenance issues.

      ### 2. Naming Challenges

      Coming up with meaningful, non-conflicting class names can become challenging as projects scale.

      ### 3. Slower Development

      Switching between HTML and CSS files can slow down development compared to the all-in-one approach of Tailwind.

      ### 4. Inconsistent Design

      Without a strict design system like Tailwind enforces, it's easier to end up with inconsistent spacing, colors, and other design elements.

      ## When to Choose Tailwind CSS

      Consider Tailwind CSS when:

      - You're building a new project from scratch
      - You value development speed
      - You want a consistent design system
      - You're working solo or with a small team familiar with Tailwind
      - You don't want to spend time creating and maintaining a custom CSS architecture

      ## When to Choose Traditional CSS

      Consider traditional CSS when:

      - You're working on a project with existing CSS
      - You're working with a larger team that includes designers unfamiliar with Tailwind
      - You value cleaner HTML over faster development
      - You need complex custom animations or styles that don't fit well with Tailwind's utilities
      - Strict separation of concerns is important for your project

      ## Hybrid Approaches

      Many projects benefit from a hybrid approach:

      - Use Tailwind for layout and common styling patterns
      - Use custom CSS for complex components, animations, or brand-specific styles
      - Use Tailwind's @apply directive to create reusable component classes from utility classes

      \`\`\`css
      /* Using @apply to create a button component from Tailwind utilities */
      .btn-primary {
        @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
      }
      \`\`\`

      ## Conclusion

      There's no one-size-fits-all answer to whether Tailwind CSS or traditional CSS is better. The right choice depends on your project requirements, team composition, and personal preferences.

      Tailwind excels at rapid development and maintaining consistency, while traditional CSS offers cleaner HTML and better separation of concerns. Many successful projects use a combination of both approaches, leveraging the strengths of each.

      The most important thing is to make a deliberate choice based on your specific needs rather than simply following trends. Both approaches can produce excellent results when used thoughtfully.
    `,
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
    content: `
      # Optimizing React Performance: Advanced Techniques

      React has become one of the most popular libraries for building user interfaces, but with great power comes great responsibility. As React applications grow in complexity, performance can become a concern. In this article, we'll explore advanced techniques to optimize your React applications for maximum performance.

      ## Understanding React Rendering

      Before diving into optimization techniques, it's essential to understand how React renders components. React uses a virtual DOM to minimize expensive DOM operations. When state or props change, React:

      1. Creates a new virtual DOM tree
      2. Compares it with the previous virtual DOM tree (diffing)
      3. Updates only the parts of the actual DOM that changed

      While this process is efficient, it can still be optimized further for complex applications.

      ## Identifying Performance Issues

      The first step in optimizing performance is identifying where the bottlenecks are. React provides several tools for this:

      ### React DevTools Profiler

      The React DevTools extension includes a Profiler that allows you to record rendering performance and identify components that are rendering unnecessarily or taking too long to render.

      ### Performance Monitoring

      Use browser performance tools like Lighthouse or WebPageTest to identify overall performance issues in your application.

      ## Optimization Techniques

      ### 1. Memoization with React.memo, useMemo, and useCallback

      #### React.memo

      React.memo is a higher-order component that memoizes your component, preventing unnecessary re-renders when props haven't changed:

      \`\`\`jsx
      const MyComponent = React.memo(function MyComponent(props) {
        // Your component logic
        return <div>{props.data}</div>;
      });
      \`\`\`

      #### useMemo

      The useMemo hook memoizes expensive calculations, running them only when dependencies change:

      \`\`\`jsx
      const memoizedValue = useMemo(() => {
        return computeExpensiveValue(a, b);
      }, [a, b]);
      \`\`\`

      #### useCallback

      The useCallback hook returns a memoized callback function that only changes if one of the dependencies has changed:

      \`\`\`jsx
      const memoizedCallback = useCallback(() => {
        doSomething(a, b);
      }, [a, b]);
      \`\`\`

      ### 2. Code Splitting and Lazy Loading

      Code splitting allows you to split your code into smaller chunks which can be loaded on demand:

      \`\`\`jsx
      import React, { Suspense, lazy } from 'react';

      const LazyComponent = lazy(() => import('./LazyComponent'));

      function MyComponent() {
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        );
      }
      \`\`\`

      ### 3. Virtualization for Long Lists

      When rendering long lists, virtualization can significantly improve performance by only rendering items that are currently visible:

      \`\`\`jsx
      import { FixedSizeList } from 'react-window';

      function MyList({ items }) {
        const Row = ({ index, style }) => (
          <div style={style}>
            {items[index]}
          </div>
        );

        return (
          <FixedSizeList
            height={500}
            width={300}
            itemCount={items.length}
            itemSize={35}
          >
            {Row}
          </FixedSizeList>
        );
      }
      \`\`\`

      ### 4. Optimizing Context API Usage

      The Context API can be a performance bottleneck if not used correctly. Consider splitting your context into smaller, more focused contexts to prevent unnecessary re-renders:

      \`\`\`jsx
      // Instead of one large context
      const AppContext = React.createContext();

      // Split into smaller, focused contexts
      const UserContext = React.createContext();
      const ThemeContext = React.createContext();
      const SettingsContext = React.createContext();
      \`\`\`

      ### 5. Using Web Workers for CPU-Intensive Tasks

      Move CPU-intensive tasks off the main thread using Web Workers:

      \`\`\`jsx
      // worker.js
      self.addEventListener('message', (e) => {
        const result = expensiveCalculation(e.data);
        self.postMessage(result);
      });

      // In your component
      const [result, setResult] = useState(null);
      
      useEffect(() => {
        const worker = new Worker('./worker.js');
        worker.postMessage(data);
        worker.onmessage = (e) => {
          setResult(e.data);
          worker.terminate();
        };
        return () => worker.terminate();
      }, [data]);
      \`\`\`

      ### 6. Optimizing Images and Assets

      Optimize images and other assets to reduce load times:

      - Use modern image formats like WebP
      - Implement responsive images with srcset
      - Lazy load images that are not in the viewport
      - Use image CDNs or Next.js Image component

      \`\`\`jsx
      import Image from 'next/image';

      function MyComponent() {
        return (
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={500}
            height={300}
            placeholder="blur"
            priority={true}
          />
        );
      }
      \`\`\`

      ### 7. State Management Optimizations

      Optimize state management to prevent unnecessary re-renders:

      - Keep state as local as possible
      - Use useReducer for complex state logic
      - Consider using libraries like Recoil or Jotai for atomic state management

      \`\`\`jsx
      const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
          case 'increment':
            return { count: state.count + 1 };
          case 'decrement':
            return { count: state.count - 1 };
          default:
            return state;
        }
      }, { count: 0 });
      \`\`\`

      ## Common Performance Mistakes

      ### 1. Creating Functions Inside Render

      Creating functions inside render creates new function instances on each render:

      \`\`\`jsx
      // Bad
      function MyComponent({ data }) {
        return (
          <button onClick={() => processData(data)}>
            Process
          </button>
        );
      }

      // Good
      function MyComponent({ data }) {
        const handleClick = useCallback(() => {
          processData(data);
        }, [data]);

        return (
          <button onClick={handleClick}>
            Process
          </button>
        );
      }
      \`\`\`

      ### 2. Not Using Keys or Using Index as Keys

      Keys help React identify which items have changed, are added, or are removed:

      \`\`\`jsx
      // Bad
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}

      // Good
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
      \`\`\`

      ### 3. Excessive Re-Rendering

      Avoid passing new object references as props:

      \`\`\`jsx
      // Bad
      function ParentComponent() {
        return <ChildComponent style={{ margin: '10px' }} />;
      }

      // Good
      const styleObj = { margin: '10px' };
      function ParentComponent() {
        return <ChildComponent style={styleObj} />;
      }
      \`\`\`

      ## Advanced Optimization Strategies

      ### 1. Custom Reconciliation with shouldComponentUpdate or React.memo

      For class components, use shouldComponentUpdate:

      \`\`\`jsx
      shouldComponentUpdate(nextProps, nextState) {
        return nextProps.id !== this.props.id || 
               nextState.count !== this.state.count;
      }
      \`\`\`

      For function components, provide a custom comparison function to React.memo:

      \`\`\`jsx
      function arePropsEqual(prevProps, nextProps) {
        return prevProps.id === nextProps.id && 
               prevProps.name === nextProps.name;
      }

      const MemoizedComponent = React.memo(MyComponent, arePropsEqual);
      \`\`\`

      ### 2. Using Immutable Data Structures

      Immutable data structures can make equality checks faster and more predictable:

      \`\`\`jsx
      import { Map } from 'immutable';

      const userA = Map({ name: 'John', age: 30 });
      const userB = userA.set('age', 31);

      userA === userB; // false
      userA.equals(userB); // false
      \`\`\`

      ### 3. Micro-Optimizations

      For extremely performance-critical applications, consider these micro-optimizations:

      - Use constants outside component definitions
      - Avoid anonymous functions in render
      - Use useLayoutEffect for measurements to prevent layout thrashing
      - Optimize SVGs and animations
      - Use requestAnimationFrame for smoother animations

      ## Conclusion

      Optimizing React performance requires a thoughtful approach and an understanding of how React works under the hood. Start by identifying performance bottlenecks, then apply the appropriate optimization techniques.

      Remember that premature optimization can lead to more complex, harder-to-maintain code. Always measure the impact of your optimizations to ensure they're providing real benefits.

      By applying these advanced techniques, you can create React applications that are not only feature-rich but also blazing fast, providing a better experience for your users.
    `,
    tags: ["React", "Performance", "JavaScript", "Web Development"],
  },
];

// First, let's add functions to generate data URLs
function generateImageDataUrl(title, color, width = 800, height = 400) {
  const firstLetter = title.charAt(0);
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='${color.replace(
    "#",
    "%23"
  )}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='120' fill='white'%3E${firstLetter}%3C/text%3E%3C/svg%3E`;
}

// Generate a blog post image with the correct color based on ID
function generateBlogImageUrl(id, title) {
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

  return generateImageDataUrl(title, color);
}

type BlogPostPageProps = {
  params: {
    id: string;
  };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  // Generate image URLs
  const postImageUrl = generateBlogImageUrl(post.id, post.title);
  const authorImageUrl =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%233b82f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='60' fill='white'%3ESN%3C/text%3E%3C/svg%3E";

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 2)
    .map((p) => ({
      ...p,
      imageDataUrl: generateBlogImageUrl(p.id, p.title),
    }));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{post.readTime} read</span>
          <span>•</span>
          <span>By {post.author}</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
        <img
          src={postImageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
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
        {post.content.split("\n").map((paragraph, index) => {
          // Parse markdown headings
          if (paragraph.trim().startsWith("# ")) {
            return (
              <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                {paragraph.trim().replace("# ", "")}
              </h1>
            );
          } else if (paragraph.trim().startsWith("## ")) {
            return (
              <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                {paragraph.trim().replace("## ", "")}
              </h2>
            );
          } else if (paragraph.trim().startsWith("### ")) {
            return (
              <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                {paragraph.trim().replace("### ", "")}
              </h3>
            );
          } else if (paragraph.trim().startsWith("#### ")) {
            return (
              <h4 key={index} className="text-lg font-bold mt-4 mb-2">
                {paragraph.trim().replace("#### ", "")}
              </h4>
            );
          }
          // Parse code blocks
          else if (paragraph.trim().startsWith("```")) {
            // Skip the opening and closing code block markers
            return null;
          } else if (paragraph.trim().endsWith("```")) {
            return null;
          } else if (paragraph.trim() && paragraph.trim().length > 0) {
            return (
              <p key={index} className="my-4 text-gray-700 dark:text-gray-300">
                {paragraph.trim()}
              </p>
            );
          }

          return null;
        })}
      </div>

      {/* Author Bio */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <img
              src={authorImageUrl}
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
          {relatedPosts.map((relatedPost) => (
            <div
              key={relatedPost.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <img
                  src={relatedPost.imageDataUrl}
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

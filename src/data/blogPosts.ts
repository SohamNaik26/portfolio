export type BlogPost = {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  imageUrl: string;
  author: string;
  content: string;
  tags?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: "nextjs-introduction",
    title: "Getting Started with Next.js: A Comprehensive Guide",
    summary:
      "Learn how to build modern web applications with Next.js, from setup to deployment, with tips and best practices.",
    date: "2023-10-15",
    readTime: "8 min",
    imageUrl: "/next.jpg",
    author: "Soham Naik",
    content: `
# Getting Started with Next.js: A Comprehensive Guide

Next.js has revolutionized the way developers build React applications by providing an intuitive framework that combines the best of server-side rendering, static site generation, and client-side rendering. This guide will walk you through everything you need to know to get started with Next.js.

## What is Next.js?

Next.js is a React framework that enables functionality such as server-side rendering, static site generation, and API routes. Created by Vercel, it aims to provide the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.

Unlike traditional React applications that render entirely on the client-side, Next.js offers multiple rendering strategies that can significantly improve performance, SEO, and user experience.

## Setting Up Your First Next.js Project

Getting started with Next.js is remarkably straightforward. Make sure you have Node.js installed (version 14 or later recommended), and then run the following command:

\`\`\`bash
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev
\`\`\`

This will create a new Next.js project with a default template and start the development server. Next.js includes a powerful development environment with features like Fast Refresh, which provides instantaneous feedback on edits you make to your React components.

## Understanding Next.js Pages

In Next.js, a page is a React Component exported from a file in the \`pages\` directory. Each page is associated with a route based on its filename. For example, \`pages/about.js\` will be accessible at \`/about\`.

\`\`\`javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js website!</h1>
      <p>This is the home page of our application.</p>
    </div>
  )
}
\`\`\`

This simple convention makes routing in Next.js incredibly intuitive. No need for complex router configurations!

## Data Fetching Strategies

Next.js provides several methods for fetching data:

1. **getStaticProps**: Fetch data at build time
2. **getStaticPaths**: Specify dynamic routes to pre-render pages based on data
3. **getServerSideProps**: Fetch data on each request
4. **Client-side data fetching**: Fetch data directly in components using SWR or React Query

Here's an example of using \`getStaticProps\`:

\`\`\`javascript
export default function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts')
  const posts = await res.json()
  
  return {
    props: {
      posts,
    },
  }
}
\`\`\`

## Next.js API Routes

Next.js allows you to create API endpoints as serverless functions by adding files to the \`pages/api\` directory. These API routes can be used to handle form submissions, database interactions, or serve as a backend for your application.

\`\`\`javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
\`\`\`

## Styling in Next.js

Next.js supports various styling methods:

1. **CSS Modules**: For component-level styles
2. **Sass**: Built-in support for .scss and .sass files
3. **CSS-in-JS**: Libraries like styled-components or emotion
4. **Tailwind CSS**: Utility-first CSS framework

## Deploying Your Next.js Application

One of the advantages of Next.js is its seamless deployment process. When you're ready to go live:

1. Build your application: \`npm run build\`
2. Start the production server: \`npm start\`

For optimal results, deploy to Vercel (the creators of Next.js) for a zero-configuration deployment. Alternatively, you can deploy to any hosting provider that supports Node.js or as a static site if your application uses only static generation.

## Conclusion

Next.js provides a complete solution for building modern web applications with React. By combining the best of server-side rendering and static site generation, it offers an excellent developer experience without sacrificing performance or SEO.

As you continue your journey with Next.js, explore advanced topics like Internationalization, Image Optimization, Middleware, and more. The Next.js documentation is an excellent resource for deepening your understanding of these concepts.

Happy coding!
    `,
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    id: "tailwind-vs-css",
    title: "Tailwind CSS vs. Traditional CSS: Pros and Cons",
    summary:
      "A detailed comparison of Tailwind CSS and traditional CSS approaches, helping you choose the right styling method for your projects.",
    date: "2023-09-22",
    readTime: "6 min",
    imageUrl: "/css.jpg",
    author: "Soham Naik",
    content: `
# Tailwind CSS vs. Traditional CSS: Pros and Cons

The frontend development landscape has seen many CSS methodologies come and go, but few have sparked as much debate as Tailwind CSS. In this article, we'll compare Tailwind's utility-first approach with traditional CSS methodologies, exploring the strengths and weaknesses of each.

## Understanding Traditional CSS Approaches

Traditional CSS approaches typically involve writing custom stylesheets with semantic class names that describe the content rather than its appearance. These approaches include:

### 1. Plain CSS

The most straightforward approach is writing vanilla CSS with your own naming conventions:

\`\`\`css
.site-header {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
}

.site-navigation {
  display: flex;
  justify-content: space-between;
}
\`\`\`

### 2. BEM (Block Element Modifier)

BEM provides a structured naming convention that helps create more maintainable CSS:

\`\`\`css
.card {
  background: white;
  border-radius: 4px;
}

.card__title {
  font-size: 1.5rem;
  font-weight: bold;
}

.card--featured {
  border: 2px solid gold;
}
\`\`\`

### 3. SASS/SCSS

Preprocessors like SASS extend CSS with features like variables, nesting, and mixins:

\`\`\`scss
$primary-color: #3490dc;

.button {
  background-color: $primary-color;
  
  &:hover {
    background-color: darken($primary-color, 10%);
  }
  
  &.button--large {
    padding: 1rem 2rem;
  }
}
\`\`\`

## The Tailwind CSS Approach

Tailwind CSS takes a fundamentally different approach by providing low-level utility classes that you can combine to build custom designs:

\`\`\`html
<header class="bg-white shadow-md px-8 py-4">
  <nav class="flex justify-between items-center">
    <div class="text-xl font-bold text-blue-600">My Site</div>
    <div class="space-x-4">
      <a href="#" class="text-gray-700 hover:text-blue-600">Home</a>
      <a href="#" class="text-gray-700 hover:text-blue-600">About</a>
      <a href="#" class="text-gray-700 hover:text-blue-600">Contact</a>
    </div>
  </nav>
</header>
\`\`\`

Instead of creating custom CSS classes, you apply pre-existing utility classes directly in your HTML.

## Pros of Tailwind CSS

### 1. Development Speed

With Tailwind, you can build custom UIs without writing CSS. This eliminates the context-switching between HTML and CSS files, often resulting in faster development cycles. The ability to style elements directly in your markup means you can iterate quickly without bouncing between files.

### 2. Consistency

Tailwind enforces a design system with predefined spacing, color, typography, and other design values. This constraint creates more consistent UIs compared to arbitrary CSS values. For example, all spacing values follow a consistent scale (0, 0.25rem, 0.5rem, 0.75rem, 1rem, etc.), making it harder to create inconsistent layouts.

### 3. Responsive Design

Tailwind's responsive utilities make it trivial to build responsive interfaces:

\`\`\`html
<div class="text-sm md:text-base lg:text-lg">
  Responsive text that changes size at different breakpoints
</div>
\`\`\`

### 4. Lower CSS Bundle Size

Despite initially generating thousands of utility classes, Tailwind uses PurgeCSS to remove unused styles in production, often resulting in smaller CSS bundles than custom CSS approaches.

## Cons of Tailwind CSS

### 1. HTML Readability

The primary criticism of Tailwind is that it can lead to cluttered HTML with long strings of utility classes:

\`\`\`html
<button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
  Click me
</button>
\`\`\`

### 2. Learning Curve

While Tailwind is simple in concept, mastering all the utility classes and remembering their names requires time. Developers need to learn Tailwind's specific naming conventions instead of using standard CSS properties.

### 3. Design Customization

Though Tailwind is highly configurable, adapting it to unique design requirements sometimes requires extending the configuration or writing custom CSS anyway, potentially undermining its advantages.

### 4. Separation of Concerns

Tailwind blurs the line between content (HTML) and presentation (CSS), which some argue violates the principle of separation of concerns in web development.

## Pros of Traditional CSS

### 1. Semantic HTML

Traditional CSS keeps your HTML clean and semantic, focused on structure rather than presentation:

\`\`\`html
<button class="primary-button">Click me</button>
\`\`\`

### 2. Easier Maintenance for Large Changes

When you need to make sweeping design changes, modifying a few CSS rules can be easier than updating utility classes across many HTML files.

### 3. Familiar Standards

Traditional CSS follows established web standards that have been around for decades, making it more accessible to developers of all experience levels.

### 4. True Separation of Concerns

Keeping style separate from content makes both easier to reason about and maintain independently.

## Conclusion: Which Approach Should You Choose?

The choice between Tailwind CSS and traditional approaches depends on several factors:

- **Team Preferences**: Some teams prefer the clarity of separate CSS files, while others value the speed of utility classes
- **Project Size**: For larger projects, the maintainability benefits of traditional CSS might outweigh Tailwind's development speed
- **Designer-Developer Workflow**: Tailwind can bridge the gap between design and development with its systematic approach to design values
- **Performance Requirements**: Tailwind's purging capabilities can lead to smaller production bundles

Many successful projects take a hybrid approach—using Tailwind for rapid UI development while extracting common patterns into components or custom classes when needed. Tools like Tailwind's \`@apply\` directive facilitate this mixed methodology.

Ultimately, both approaches can produce excellent results when used thoughtfully. The best choice is the one that enables your team to build maintainable, consistent UIs that meet your project's unique requirements.
    `,
    tags: ["Tailwind CSS", "CSS", "Frontend"],
  },
  {
    id: "react-performance",
    title: "Optimizing React Performance: Advanced Techniques",
    summary:
      "Explore advanced performance optimization techniques for React applications, including memoization, code splitting, and more.",
    date: "2023-08-10",
    readTime: "10 min",
    imageUrl: "/react.jpg",
    author: "Soham Naik",
    content: `
# Optimizing React Performance: Advanced Techniques

While React is optimized for performance out of the box, as applications grow in complexity, performance issues can emerge. This article explores advanced techniques to optimize your React applications for speed and efficiency.

## Understanding React's Rendering Process

Before diving into optimization techniques, it's crucial to understand how React renders components. React uses a virtual DOM to minimize direct manipulation of the browser's DOM, which is computationally expensive.

When state or props change, React:
1. Creates a new virtual DOM tree
2. Compares it with the previous one (diffing)
3. Calculates the minimal set of changes needed
4. Updates only those parts of the real DOM

Despite this efficient approach, unnecessary re-renders can still impact performance. Let's explore how to address this.

## Measuring Performance

Before optimizing, measure your application's performance to identify bottlenecks:

### React DevTools Profiler

The React DevTools Profiler is the most straightforward way to visualize renders and their durations:

\`\`\`jsx
// Record a session and analyze which components are rendering too often
// or taking too long to render
\`\`\`

### Performance Monitoring Tools

Tools like Lighthouse, WebPageTest, or browser DevTools can provide metrics on:
- First Contentful Paint (FCP)
- Time to Interactive (TTI)
- Total Blocking Time (TBT)
- Cumulative Layout Shift (CLS)

## Component-Level Optimizations

### 1. Memoization with React.memo

\`React.memo\` is a higher-order component that memoizes a component, preventing re-renders if props haven't changed:

\`\`\`jsx
const ExpensiveComponent = React.memo(function ExpensiveComponent(props) {
  // This component will only re-render if props change
  return (
    <div>
      {/* Expensive rendering logic */}
      {props.data.map(item => <Item key={item.id} {...item} />)}
    </div>
  );
});
\`\`\`

### 2. Optimizing Hook Dependencies

Be careful with the dependency arrays in hooks like \`useEffect\`, \`useMemo\`, and \`useCallback\`:

\`\`\`jsx
// Suboptimal: Function recreated on every render
const Component = ({ id }) => {
  const fetchData = () => api.fetch(id);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]); // Dependency changes every render!
};

// Optimized: Function memoized
const Component = ({ id }) => {
  const fetchData = useCallback(() => api.fetch(id), [id]);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]); // Only changes when id changes
};
\`\`\`

### 3. Avoiding Anonymous Functions in Renders

Anonymous functions in JSX create new function instances on every render:

\`\`\`jsx
// Suboptimal: New function on every render
return <button onClick={() => handleClick(id)}>Click me</button>;

// Better: Memoized function that only changes when dependencies change
const memoizedHandleClick = useCallback(() => handleClick(id), [id, handleClick]);
return <button onClick={memoizedHandleClick}>Click me</button>;
\`\`\`

## State Management Optimizations

### 1. Using Immutable Data Patterns

React's comparison algorithm relies on reference equality checks. Using immutable data patterns ensures proper detection of changes:

\`\`\`jsx
// Suboptimal: Mutating state directly
const handleIncrement = () => {
  const newCart = cart;
  newCart.count += 1;
  setCart(newCart); // React may not detect this change!
};

// Better: Creating new objects for state updates
const handleIncrement = () => {
  setCart(prevCart => ({
    ...prevCart,
    count: prevCart.count + 1
  }));
};
\`\`\`

### 2. State Colocation

Keep state as close as possible to where it's used:

\`\`\`jsx
// Suboptimal: Global state for local concern
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Main />
      <Footer />
    </>
  );
}

// Better: Local state
function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </>
  );
}

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  // Only Sidebar re-renders when isOpen changes
}
\`\`\`

### 3. Context Optimization

Context triggers re-renders for all consuming components when its value changes. Split contexts by update frequency or use memoization:

\`\`\`jsx
// Split contexts by update frequency
const UserContext = createContext(null);      // Rarely changes
const ThemeContext = createContext('light');  // Occasionally changes
const NotificationContext = createContext([]); // Frequently changes

// Or use memoization to prevent unnecessary updates
const value = useMemo(() => ({ user, theme }), [user, theme]);
return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
\`\`\`

## Code Splitting and Lazy Loading

### 1. Route-Based Code Splitting

Load only the code needed for the current route:

\`\`\`jsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Instead of importing directly
// import Dashboard from './Dashboard';

// Use lazy loading
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}
\`\`\`

### 2. Component-Level Code Splitting

Split large components that aren't immediately visible:

\`\`\`jsx
const HeavyChart = lazy(() => import('./HeavyChart'));

function Dashboard() {
  const [showChart, setShowChart] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShowChart(true)}>Show Chart</button>
      
      {showChart && (
        <Suspense fallback={<Loading />}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  );
}
\`\`\`

## Network and Asset Optimizations

### 1. Implementing Data Fetching Strategies

Use SWR or React Query for efficient data fetching with caching:

\`\`\`jsx
import { useQuery } from 'react-query';

function UserProfile({ userId }) {
  const { data, isLoading, error } = useQuery(
    ['user', userId],
    () => fetchUserData(userId),
    {
      staleTime: 5 * 60 * 1000, // Data considered fresh for 5 minutes
      cacheTime: 30 * 60 * 1000, // Cache kept for 30 minutes
    }
  );
  
  if (isLoading) return <Loading />;
  if (error) return <Error message={error.message} />;
  
  return <Profile data={data} />;
}
\`\`\`

### 2. Image Optimization

Use modern image formats and lazy loading:

\`\`\`jsx
// With Next.js Image component
import Image from 'next/image';

function ProductCard({ product }) {
  return (
    <div>
      <Image
        src={product.image}
        width={300}
        height={200}
        loading="lazy"
        alt={product.name}
      />
    </div>
  );
}

// With plain React
function ProductCard({ product }) {
  return (
    <div>
      <img
        src={product.image}
        width={300}
        height={200}
        loading="lazy"
        alt={product.name}
      />
    </div>
  );
}
\`\`\`

## Virtualization for Long Lists

For long lists or tables, virtualization renders only visible items:

\`\`\`jsx
import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
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

## Production Optimizations

### 1. Enabling Production Mode

Always use production builds for deployed applications:

\`\`\`bash
# Create React App
npm run build

# Next.js
npm run build
npm start
\`\`\`

### 2. Using React Production Profiler

For performance monitoring in production:

\`\`\`jsx
// Configure onRender callback for tracing in production
<React.Profiler id="App" onRender={onRenderCallback}>
  <App />
</React.Profiler>
\`\`\`

## Conclusion

Performance optimization in React is an ongoing process. Start by measuring to identify actual bottlenecks rather than prematurely optimizing. Focus on these key areas:

1. Prevent unnecessary renders with memoization
2. Optimize state management and context usage
3. Implement code splitting and lazy loading
4. Use virtualization for long lists
5. Optimize network requests and assets

Remember that the simplest optimizations often yield the greatest benefits. Clean architecture and thoughtful component design can prevent many performance issues before they arise.

By applying these advanced techniques judiciously, you can create React applications that remain fast and responsive, even as they grow in complexity.
    `,
    tags: ["React", "Performance", "JavaScript"],
  },
];

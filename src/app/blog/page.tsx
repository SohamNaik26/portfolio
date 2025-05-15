import BlogPostCard from "@/components/BlogPostCard";

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
  },
];

export default function BlogPage() {
  return (
    <div className="animate-fadeIn">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Thoughts, insights, and tips on web development, technology trends,
          and programming best practices.
        </p>
      </div>

      {/* Blog posts grid */}
      <div className="grid gap-10">
        {blogPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            id={post.id}
            title={post.title}
            summary={post.summary}
            date={post.date}
            readTime={post.readTime}
            imageUrl={post.imageUrl}
            author={post.author}
          />
        ))}
      </div>

      {/* Coming soon section with newsletter signup */}
      <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">More Articles Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I'm currently working on more articles about web development, React,
            and modern JavaScript. Stay tuned!
          </p>

          {/* Newsletter signup form placeholder */}
          <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-medium mb-4">
              Subscribe to Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get notified when new articles are published. No spam, unsubscribe
              at any time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

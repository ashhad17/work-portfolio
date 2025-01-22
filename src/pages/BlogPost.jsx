import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaClock } from 'react-icons/fa';

function BlogPost() {
  const { id } = useParams();

  // This would typically fetch post data based on the ID
  const post = {
    id: 1,
    title: "Getting Started with React and Tailwind CSS",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    `,
    date: "March 15, 2024",
    readTime: "5 min read",
    author: {
      name: "John Doe",
      role: "Lead Developer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      bio: "Full-stack developer passionate about creating exceptional user experiences."
    },
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    tags: ["react", "tailwind", "frontend"],
    relatedPosts: [
      {
        id: 2,
        title: "Best Practices for Modern Web Development",
        excerpt: "Explore the latest best practices and techniques for modern web development...",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 3,
        title: "Introduction to State Management",
        excerpt: "Learn about different state management solutions in React...",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800"
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <article className="bg-white dark:bg-dark-light rounded-lg shadow-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-8">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <FaClock className="h-4 w-4" />
                {post.readTime}
              </span>
              <span>{post.date}</span>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-600 dark:text-gray-400">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mb-8">
            <div className="flex items-center gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold">{post.author.name}</h3>
                <p className="text-primary">{post.author.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button className="p-2 hover:text-primary transition-colors">
              <FaFacebook className="h-6 w-6" />
            </button>
            <button className="p-2 hover:text-primary transition-colors">
              <FaTwitter className="h-6 w-6" />
            </button>
            <button className="p-2 hover:text-primary transition-colors">
              <FaLinkedin className="h-6 w-6" />
            </button>
          </div>
        </div>
      </article>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {post.relatedPosts.map(relatedPost => (
            <motion.div
              key={relatedPost.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-dark-light rounded-lg shadow-lg overflow-hidden cursor-pointer"
            >
              <img
                src={relatedPost.image}
                alt={relatedPost.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{relatedPost.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {relatedPost.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default BlogPost;
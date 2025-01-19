import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaShareAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const posts = [
    {
      id: 1,
      title: "Getting Started with React and Tailwind CSS",
      excerpt: "Learn how to set up a new project with React and Tailwind CSS...",
      category: "development",
      tags: ["react", "tailwind", "frontend"],
      author: {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
        role: "Lead Developer"
      },
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Best Practices for Modern Web Development",
      excerpt: "Explore the latest best practices and techniques for modern web development...",
      category: "tips",
      tags: ["webdev", "bestpractices", "coding"],
      author: {
        name: "Jane Smith",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
        role: "Senior Developer"
      },
      date: "March 10, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'tips', name: 'Tips & Tricks' }
  ];

  const filteredPosts = posts
    .filter(post => 
      (activeCategory === 'all' || post.category === activeCategory) &&
      (searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Insights, tutorials, and updates from our team
        </p>
      </motion.div>

      {/* Search and Filters */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative w-full md:w-96">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-dark-light hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-dark-light rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-gray-500">{post.date} • {post.readTime}</p>
                </div>
              </div>
              <h2 className="text-xl font-bold mb-4">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:text-primary">
                    <FaFacebook />
                  </button>
                  <button className="p-2 hover:text-primary">
                    <FaTwitter />
                  </button>
                  <button className="p-2 hover:text-primary">
                    <FaLinkedin />
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default Blog;
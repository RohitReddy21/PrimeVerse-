import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Search, ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  const featuredPosts = blogPosts.filter(post => post.featured);

  // Filter posts based on search and category
  useEffect(() => {
    let filtered = blogPosts;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Insights & Ideas
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Stay updated with the latest in digital trends, marketing tips, tech news, and growth
strategies. Our blog is packed with valuable insights to help your business stay ahead.

            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Articles */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <TrendingUp className="text-blue-500 mr-2\" size={24} />
              <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User size={16} className="mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-blue-500 hover:text-blue-600 font-medium flex items-center"
                      >
                        Read More <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* All Articles */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-blue-500 hover:text-blue-600 font-medium flex items-center text-sm"
                      >
                        Read <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section className="bg-blue-600 text-white rounded-xl p-8 mt-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-100 mb-6">
              Get the latest insights, case studies, and industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
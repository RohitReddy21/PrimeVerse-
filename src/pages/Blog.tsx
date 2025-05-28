import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, Search, ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "E-commerce Platform Redesign: 300% Increase in Conversion Rate",
      excerpt: "How we transformed a traditional retail business into a modern e-commerce powerhouse through strategic UX design and performance optimization.",
      content: "Complete case study of our 6-month project...",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Case Study",
      tags: ["E-commerce", "UX Design", "Conversion Optimization"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Mobile App Development: From Concept to 1M+ Downloads",
      excerpt: "The complete journey of building a successful mobile app, including technical challenges, user acquisition strategies, and scaling solutions.",
      content: "Detailed breakdown of our mobile app development process...",
      author: "Michael Chen",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Case Study",
      tags: ["Mobile Development", "React Native", "User Acquisition"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      featured: true
    },
    {
      id: 3,
      title: "The Future of Web Development: AI-Powered Design Tools",
      excerpt: "Exploring how artificial intelligence is revolutionizing web development workflows and what it means for developers and designers.",
      content: "In-depth analysis of AI tools in web development...",
      author: "Emma Rodriguez",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "Technology",
      tags: ["AI", "Web Development", "Future Trends"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "SEO Strategy That Increased Organic Traffic by 450%",
      excerpt: "A comprehensive case study of our SEO approach that took a client from page 3 to position 1 for competitive keywords.",
      content: "Step-by-step SEO strategy implementation...",
      author: "David Kim",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Case Study",
      tags: ["SEO", "Digital Marketing", "Content Strategy"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Building Scalable React Applications: Best Practices",
      excerpt: "Essential patterns and practices for building maintainable React applications that can grow with your business needs.",
      content: "Technical guide to React scalability...",
      author: "Lisa Park",
      date: "2024-01-03",
      readTime: "7 min read",
      category: "Development",
      tags: ["React", "JavaScript", "Best Practices"],
      image: "https://images.unsplash.com/photo-1633356122544-f6826e4e3a8b?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "UI/UX Design Trends That Actually Convert",
      excerpt: "Beyond aesthetics: discover which design trends are proven to improve user engagement and conversion rates in 2024.",
      content: "Analysis of effective design trends...",
      author: "Alex Thompson",
      date: "2024-01-01",
      readTime: "5 min read",
      category: "Design",
      tags: ["UI/UX", "Design Trends", "Conversion"],
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop",
      featured: false
    }
  ];

  const categories = ['All', 'Case Study', 'Technology', 'Development', 'Design'];

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

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insights & Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              Real stories of digital transformation, technical insights, and industry trends
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-300"
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
              <TrendingUp className="text-primary-500 mr-2" size={24} />
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
                      <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
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
                        className="text-primary-500 hover:text-primary-600 font-medium flex items-center"
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
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
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
                      <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
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
                        className="text-primary-500 hover:text-primary-600 font-medium flex items-center text-sm"
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
        <section className="bg-primary-600 text-white rounded-xl p-8 mt-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-primary-100 mb-6">
              Get the latest insights, case studies, and industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
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
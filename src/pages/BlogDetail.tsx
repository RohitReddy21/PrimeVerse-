import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, ArrowLeft } from 'lucide-react';
import { BlogPost } from '../types/blog';
import { blogPosts } from '../data/blogPosts';
import RelatedPosts from '../components/RelatedPosts';
import SocialShare from '../components/SocialShare';
import CommentSection from '../components/CommentSection';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading from API
    setLoading(true);
    const postId = parseInt(id || '0', 10);
    const foundPost = blogPosts.find(p => p.id === postId);
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      setPost(foundPost || null);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 px-4">
        <div className="container mx-auto max-w-4xl py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/blog" 
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-96 md:h-[500px]"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative h-full flex flex-col justify-end pb-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-white bg-black/30 hover:bg-black/50 px-4 py-2 rounded-lg mb-8 w-fit transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>
          
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
            {post.category}
          </span>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl">
            {post.title}
          </h1>
        </div>
      </motion.div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Meta */}
          <div className="flex flex-wrap items-center justify-between py-6 border-b border-gray-200 mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              {post.authorImage ? (
                <img 
                  src={post.authorImage} 
                  alt={post.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <User size={24} className="text-blue-500" />
                </div>
              )}
              
              <div>
                <h3 className="font-bold text-gray-900">{post.author}</h3>
                {post.authorRole && (
                  <p className="text-sm text-gray-600">{post.authorRole}</p>
                )}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                {post.readTime}
              </div>
            </div>
          </div>
          
          {/* Article Excerpt */}
          <div className="mb-8">
            <p className="text-xl text-gray-700 font-medium italic">{post.excerpt}</p>
          </div>
          
          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-a:text-blue-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            <span className="flex items-center text-gray-700">
              <Tag size={16} className="mr-1" /> Tags:
            </span>
            {post.tags.map(tag => (
              <span 
                key={tag} 
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Social Share */}
          <SocialShare 
            title={post.title} 
            url={window.location.href} 
          />
          
          {/* Related Posts */}
          <RelatedPosts 
            currentPostId={post.id} 
            posts={blogPosts} 
          />
          
          {/* Comments Section */}
          <CommentSection />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
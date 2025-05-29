import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { BlogPost } from '../types/blog';

interface RelatedPostsProps {
  currentPostId: number;
  posts: BlogPost[];
  limit?: number;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentPostId, posts, limit = 3 }) => {
  // Filter out current post and get posts with the same category
  const currentPost = posts.find(post => post.id === currentPostId);
  
  if (!currentPost) return null;
  
  const relatedPosts = posts
    .filter(post => post.id !== currentPostId)
    .filter(post => 
      post.category === currentPost.category || 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, limit);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map(post => (
          <article 
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
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
            
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-primary-600 transition-colors">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h3>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {post.readTime}
                </div>
              </div>
              
              <Link
                to={`/blog/${post.id}`}
                className="text-primary-500 hover:text-primary-600 font-medium flex items-center text-sm"
              >
                Read Article <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
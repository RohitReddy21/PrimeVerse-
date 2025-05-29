import React, { useState } from 'react';
import { User } from 'lucide-react';

interface Comment {
  id: number;
  name: string;
  date: string;
  content: string;
  avatar?: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      name: 'Jane Cooper',
      date: '2 days ago',
      content: 'This article was incredibly helpful! I especially appreciated the detailed breakdown of the technical implementation.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop'
    },
    {
      id: 2,
      name: 'Alex Rodriguez',
      date: '5 days ago',
      content: 'Great insights, but I would have loved to see more information about the specific tools used during the research phase.',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=40&h=40&fit=crop'
    }
  ]);
  
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim() || !name.trim()) return;
    
    const comment: Comment = {
      id: comments.length + 1,
      name: name.trim(),
      date: 'Just now',
      content: newComment.trim()
    };
    
    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <section className="mt-16 bg-gray-50 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Comments ({comments.length})</h2>
      
      {/* Comments list */}
      <div className="space-y-6 mb-10">
        {comments.map(comment => (
          <div key={comment.id} className="flex gap-4">
            <div className="flex-shrink-0">
              {comment.avatar ? (
                <img 
                  src={comment.avatar} 
                  alt={comment.name} 
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <User size={18} className="text-gray-500" />
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-gray-900">{comment.name}</h4>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Comment form */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Leave a Comment</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
              Your Comment
            </label>
            <textarea
              id="comment"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Write your thoughts here..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email (will not be published)
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="bg-primary-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors"
          >
            Post Comment
          </button>
        </form>
      </div>
    </section>
  );
};

export default CommentSection;
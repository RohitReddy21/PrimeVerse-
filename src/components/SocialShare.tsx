import React from 'react';
import { Share2, Twitter, Facebook, Linkedin, Link2 } from 'lucide-react';

interface SocialShareProps {
  title: string;
  url: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ title, url }) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);
  
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
      .then(() => {
        alert('Link copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy link: ', err);
      });
  };

  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-center gap-3 mt-8 pt-8 border-t border-gray-200">
      <span className="flex items-center text-gray-700 font-medium">
        <Share2 size={18} className="mr-2" /> Share this article:
      </span>
      
      <div className="flex gap-2">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-400 hover:text-white transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter size={18} />
        </a>
        
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook size={18} />
        </a>
        
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-700 hover:text-white transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-700 hover:text-white transition-colors"
          aria-label="Copy link"
        >
          <Link2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default SocialShare;
export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    authorImage?: string;
    authorRole?: string;
    date: string;
    readTime: string;
    category: string;
    tags: string[];
    image: string;
    featured: boolean;
  }
'use client'

// import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Twitter, Facebook } from 'lucide-react';

type Author = {
  name: string;
  url?: string;
  profileImage?: string;
}

type Tag = {
  name: string;
  description?: string;
  slug: string;
}

type Post = {
    title: string;
    url: string;
    content: string;
    date: string;
    primaryAuthor: Author;
    primaryTag: Tag;
    tags: Tag[];
    featureImage?: string;
  }



export default function BlogPostList({ posts }: { posts: Post[] }) {
  // useEffect(() => {
  //   const handleSpotifyResize = () => {
  //     const iframes = document.querySelectorAll('iframe[src*="embed.spotify.com"]');
  //     iframes.forEach((iframe: HTMLIFrameElement) => {
  //       if (iframe.parentElement) {
  //         iframe.style.width = iframe.parentElement.style.width;
  //         iframe.src = iframe.src; // Reload iframe
  //       }
  //     });
  //   };

  //   window.addEventListener('resize', handleSpotifyResize);
  //   return () => window.removeEventListener('resize', handleSpotifyResize);
  // }, []);

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <Card key={post.url} className="overflow-hidden">
          <CardContent className="p-6">
            {/* Spotify Embed */}
            {post.primaryTag?.description && (
              <div className="mb-6">
                <iframe
                  src={post.primaryTag.description}
                  className="w-full h-[152px]"
                  frameBorder="0"
                  allow="encrypted-media"
                />
              </div>
            )}

            {/* Title */}
            <h2 className="text-2xl font-bold mb-4">
              <a href={post.url} className="hover:text-blue-600 transition-colors">
                {post.title}
              </a>
            </h2>

            {/* Content */}
            <div className="prose max-w-none mb-6">
              {post.content}
            </div>

            {/* Credits */}
            <div className="space-y-2 text-sm text-gray-600">
              {post.primaryAuthor && (
                <div>Author: <span className="font-medium">{post.primaryAuthor.name}</span></div>
              )}

              {post.tags?.filter(tag => tag.description === "artist").map(tag => (
                <div key={tag.slug}>
                  Artist: <span className="font-medium">{tag.name}</span>
                </div>
              ))}

              <div>
                Published: <span className="font-medium">{new Date(post.date).toLocaleDateString()}</span>
              </div>

              {post.tags?.filter(tag => tag.description === "edition").map(tag => (
                <div key={tag.slug}>
                  Edition: <span className="font-medium">{tag.name}</span>
                </div>
              ))}

              {/* Social Share */}
              <div className="flex gap-4 mt-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}%20https://shortscories.com${post.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <Twitter size={18} />
                  <span>Share on Twitter</span>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://shortscories.com${post.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Facebook size={18} />
                  <span>Share on Facebook</span>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
import BlogPostList from '@/components/BlogPostList';
import mockData from './mock-blog-data.json';

export default function Home() {
  // const posts = await fetchPosts();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <BlogPostList posts={mockData.posts} />
    </div>
  );
}

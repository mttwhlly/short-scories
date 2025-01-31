'use client'

import BlogPostList from '@/components/BlogPostList'
// import mockData from './mock-blog-data.json';
import { Posts } from '@/types/strapi'
import { Suspense } from 'react'
import { useQuery } from '@tanstack/react-query'

// const initialData = await fetchStrapi("articles");

export default function Home() {
    // Define your query
    const {
        data: posts,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const response = await fetch(
                'https://strapi-dwsg4ggk0k04kww44s04s80o.mttwhlly.cc/api/articles'
            )
            return response.json() as Promise<Posts>
        },
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: </div>

    return (
        <div className="grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <Suspense fallback={<div>Loading...</div>}>
                {/* <BlogPostList posts={mockData.posts} /> */}
                {posts && <BlogPostList data={posts} />}
            </Suspense>
        </div>
    )
}

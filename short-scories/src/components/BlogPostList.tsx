'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Twitter, Facebook } from 'lucide-react'
import { Posts } from '@/types/strapi'

export default function BlogPostList({ data }: { data: Posts }) {
    return (
        <>
            {data.data.map((post, index) => (
                <Card
                    key={index}
                    className="w-full rounded-none border-t-1 border-t-black border-b-0 border-x-0 shadow-none p-4"
                >
                    <CardContent className="p-4 lg:flex lg:gap-10">
                        {/* Spotify Embed */}
                        {post.songUrl && (
                            <div className="mb-6">
                                <iframe
                                    src={post.songUrl}
                                    className="w-full h-[80px] lg:w-[250px] lg:h-[330px]"
                                    frameBorder="0"
                                    allow="encrypted-media"
                                />
                            </div>
                        )}
                        <div>
                            {/* Title */}
                            <h2 className="text-3xl lg:text-6xl font-bold mb-4 flex flex-col">
                                <a
                                    href={post.url}
                                    className="font-lydian font-normal hover:cursor-pointer"
                                >
                                    {post.title}
                                </a>
                            </h2>

                            {/* Content */}
                            <p className="prose max-w-none mb-6 font-questa-sans leading-relaxed opacity-70 text-[17px]">
                                {post.content}
                            </p>

                            {/* <div>
                Published:{" "}
                <span className="font-medium">
                {new Date(post.date).toLocaleDateString()}
                </span>
                </div> */}
                        </div>
                        <div>
                            {/* Credits */}
                            <div className="space-y-2 text-sm text-gray-600">
                                {/* {post.primaryAuthor && ( */}
                                <div>
                                    Author:{' '}
                                    <span className="font-medium">
                                        Ben Stafford
                                    </span>
                                </div>
                                {/* )} */}
                            </div>
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
        </>
    )
}

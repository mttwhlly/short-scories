'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Posts } from '@/types/strapi'

export default function BlogPostList({ data }: { data: Posts }) {
    return (
        <>
            {data.data.map((post, index) => (
                <Card
                    key={index}
                    className="w-full rounded-none border-t-1 border-t-black border-b-0 border-x-0 shadow-none p-4"
                >
                    <CardContent className="p-8 lg:flex lg:gap-14">
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
                        <div className="flex flex-col">
                            {/* Title */}
                            <h2 className="text-3xl lg:text-6xl font-bold block w-full mb-6">
                                <a
                                    href={post.url}
                                    className="font-lydian font-normal hover:cursor-pointer"
                                >
                                    {post.title}
                                </a>
                            </h2>
                            <div className="flex flex-row justify-start gap-14">
                                <div>
                                    {/* Content */}
                                    <p className="prose max-w-none font-questa-sans leading-relaxed opacity-70 text-[17px]">
                                        {post.content}
                                    </p>
                                </div>

                                <div className="flex flex-col text-nowrap mt-1">
                                    {/* Credits */}
                                    <div className="text-sm text-gray-600 border-b border-black pb-2">
                                        {/* {post.primaryAuthor && ( */}
                                        <p className="mb-4">
                                            Author: Ben Stafford
                                        </p>
                                        {/* )} */}
                                    </div>
                                    <div className="text-sm text-gray-600 border-b border-black pb-2">
                                        <p className="mt-4 mb-2">
                                            Published: Today
                                        </p>
                                    </div>
                                    <br />
                                    {/* Social Share */}
                                    <div className="mt-4">
                                        <a
                                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}%20https://shortscories.com${post.url}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-gray-600 border border-black rounded-full p-3"
                                        >
                                            TW
                                        </a>

                                        {/* <a
                                            href={`https://www.facebook.com/sharer/sharer.php?u=https://shortscories.com${post.url}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-row text-sm text-gray-600"
                                        >
                                            FB
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </>
    )
}

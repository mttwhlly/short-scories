'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Posts } from '@/types/strapi'
import SpotifyIframe from './SpotifyIframe'

export default function BlogPostList({ data }: { data: Posts }) {
    return (
        <>
            {data.data.map((post, index) => (
                <Card
                    key={index}
                    className="w-full rounded-none border-t-1 border-t-black border-b-0 border-x-0 shadow-none py-4"
                >
                    <CardContent className="p-8 lg:flex lg:gap-14">
                        {/* Spotify Embed */}
                        {post.songUrl && <SpotifyIframe url={post.songUrl} />}
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
                            <div className="flex flex-col lg:flex-row justify-start gap-8 lg:gap-14">
                                <div className="block lg:flex basis-2/3">
                                    {/* Content */}
                                    <p className="prose max-w-none font-questa-sans leading-relaxed opacity-70 text-[17px]">
                                        {post.content}
                                    </p>
                                </div>

                                <div className="block lg:flex lg:flex-col text-nowrap mt-1 lg:basis-1/3">
                                    {/* Credits */}
                                    <div className="text-sm text-gray-600 border-b border-black">
                                        {/* {post.primaryAuthor && ( */}
                                        <p className="mb-4">
                                            Author: Ben Stafford
                                        </p>
                                        {/* )} */}
                                    </div>
                                    <div className="text-sm text-gray-600 border-b border-black pb-2">
                                        <p className="mt-4 mb-2">
                                            Published:{' '}
                                            {new Date(
                                                post.publishedDate
                                            ).toLocaleDateString('en-us', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                timeZone: 'UTC',
                                            })}
                                        </p>
                                    </div>
                                    <br />
                                    {/* Social Share */}
                                    <div>
                                        <a
                                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}%20https://shortscories.com${post.url}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs border border-black rounded-full p-3 mr-3 w-12 h-12 tracking-[-1px] hover:bg-black hover:text-white"
                                        >
                                            TW
                                        </a>

                                        <a
                                            href={`https://www.facebook.com/sharer/sharer.php?u=https://shortscories.com${post.url}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs border border-black rounded-full p-3 w-12 h-12 tracking-[1px] hover:bg-black hover:text-white"
                                        >
                                            FB
                                        </a>
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

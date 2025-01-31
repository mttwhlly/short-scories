'use client'

export default function SpotifyIframe({ url }: { url: string }) {
    return (
        <div className="mb-6">
            <iframe
                src={url}
                className="w-full h-[80px] lg:w-[250px] lg:h-[330px]"
                frameBorder="0"
                allow="encrypted-media"
            />
        </div>
    )
}

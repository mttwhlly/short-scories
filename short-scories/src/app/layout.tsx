import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import './globals.css'
import Providers from '@/lib/providers'

const lydian = localFont({
    src: './Lydian BT.woff2',
    display: 'swap',
})

const questa = localFont({
    src: './Questa_Sans_Regular.woff2',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Short Scories',
    description: 'Soundtrack-worthy Songs Paired with Original Microfiction',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/wcx8exc.css"
                ></link>
            </head>
            <body
                className={`${lydian.className} ${questa.className} antialiased max-w-5xl block mx-auto`}
            >
                <header className="h-[190px] mb-10 p-4 pt-5">
                    <Image
                        priority
                        src="/logo.svg"
                        alt=""
                        width={185}
                        height={100}
                        unoptimized
                    />
                </header>
                <Providers>{children}</Providers>
                <footer></footer>
            </body>
        </html>
    )
}

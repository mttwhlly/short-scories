import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import Link from 'next/link'
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
                <header className="h-[190px] mb-10 p-5 flex flex-row justify-between">
                    <Link href="/">
                        <Image
                            priority
                            src="/logo.svg"
                            alt=""
                            width={185}
                            height={100}
                            unoptimized
                            className="inline"
                        />
                    </Link>
                    <nav className="text-rightf flex mr-4">
                        <ul className="flex justify-end gap-4 mt-4 font-lydian">
                            <li>
                                <a href="/about" className="hover:underline">
                                    About
                                </a>
                            </li>
                            {/* <li>
                                <a href="/contact" className="hover:underline">
                                    Contact
                                </a>
                            </li> */}
                        </ul>
                    </nav>
                </header>
                <Providers>{children}</Providers>
                <footer className="text-center text-neutral-400 p-12">
                    © 2019-{new Date().getFullYear()} Ben Stafford, Short
                    Scories
                </footer>
            </body>
        </html>
    )
}

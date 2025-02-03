export default function About() {
    return (
        <div className="grid-rows-[20px_1fr_20px] min-h-screen max-w-3xl block mx-auto px-8">
            <h1 className="text-3xl font-lydian text-left mb-6">About</h1>
            <p className="text-[17px] font-questa-sans leading-relaxed mb-8">
                <span className="float-left text-7xl font-bold mr-3 -mt-1">
                    S
                </span>
                hort Scories is a collection of second-person micro-fiction
                written by{' '}
                <a href="Ben Stafford" className="underline">
                    Ben Stafford
                </a>
                . Each story is paired with a cinematic song by various artists.
            </p>
            <p className="text-[17px] font-questa-sans leading-relaxed mb-8">
                In order to read the stories as intended, press play on the song
                then begin reading.
            </p>
            <p className="text-[17px] font-questa-sans leading-relaxed mb-8">
                <span className="italic">A word from the author:</span>
                <br />I have always loved music and storytelling and this format
                allows me to do both simultaneously. Since I was a child,
                I&rsquo;ve always been obsessed with songs used in commercials,
                television and film. When I would hear a song played at just the
                right moment, it felt like a million pieces were connecting in
                my brain. My goal is to invite you to make those same
                connections.
            </p>
        </div>
    )
}

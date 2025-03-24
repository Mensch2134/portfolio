

export default function About() {
    return (
        <div className="flex flex-row items-center my-5 w-full rounded-sm">
            <div className="w-2/3 my-4">
                <h1 className="text-5xl text-right font-bold text-[#cd6688]">
                    This is me ➡
                </h1>
                <div className="text-xl">
                    <p>
                        I am a graduate digital media student at the University of Bremen, 
                        currently studying for a masters degree in computer science.
                    </p>
                    <p className="mt-5">
                        What i like:
                    </p>
                    <ul className="list-disc pl-10">
                        <li>RPGs, analog and digital</li>
                        <li>Programming</li>
                        <li>Computer Graphics</li>
                        <li>Quotes ;)</li>
                    </ul>
                </div>
            </div>
            <div className="w-1/3 drop-shadow-md m-4">
                <img className="rounded-full" src="/max_cut.jpg" />
            </div>
        </div>
    )
}
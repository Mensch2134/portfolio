'use client'
import { useState, useEffect } from "react"

export default function QuoteSlider() {
    const quotes = [
       { quote: "It's good to be back.", author: "Agent 47, 2021"},
       { quote: "Let Me Give You The Fast Version [Superfast Inaudible Explanation]. There, If You Have Any Questions, Just Remember What I Said In slow motion.", author: "GlaDOS"},
       { quote: "Scatter!", author: "Omen"},
       { quote: "Ribby Wibs!", author: "Some Sim, right now"},
       { quote: "I'll tell you a secret. Sometimes, when the store is empty, I'll practice my opera singing behind the counter. Don't tell anyone.", author: "Pierre, Pelican Town"},
       { quote: "You, Sir, Are A Fish", author: "Arthur Morgan, 1899"},
       { quote: "Wind's Howling", author: "Geralt of Rivia, 1272"},
       { quote: "TSSSSSSSS", author: "A creeper, in my minecraft base"},
    ]

    const [quoteIndex, setQuoteIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex(i => (i + 1) % quotes.length)
        }, 5000)

        return () => clearInterval(interval)
    })

    return (
        <div className={`bg-[#1a1a1a] rounded-sm my-15 p-8 px-25 [text-shadow:_1_2px_0px_rgba(205,102,136,1)]`}>
            <div className="flex flex-col justify-center border-l-3 pl-7 min-h-45">
                <div>
                    <p className="text-2xl font-bold">
                        {quotes[quoteIndex].quote}
                    </p>
                    <p>
                        - {quotes[quoteIndex].author}
                    </p>
                </div>
            </div>
        </div>
    )
}
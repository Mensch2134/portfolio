'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "styled-jsx/css";

export default function QuoteSlider() {
    const quotes = [
        { quote: "It's good to be back.", author: "Agent 47, 2021" },
        { quote: "Let Me Give You The Fast Version [Superfast Inaudible Explanation]. There, If You Have Any Questions, Just Remember What I Said In slow motion.", author: "GlaDOS" },
        { quote: "Scatter!", author: "Omen" },
        { quote: "Ribby Wibs!", author: "Some Sim, right now" },
        { quote: "I'll tell you a secret. Sometimes, when the store is empty, I'll practice my opera singing behind the counter. Don't tell anyone.", author: "Pierre, Pelican Town" },
        { quote: "You, Sir, Are A Fish", author: "Arthur Morgan, 1899" },
        { quote: "Wind's Howling", author: "Geralt of Rivia, 1272" },
        { quote: "TSSSSSSSS", author: "A creeper, in my Minecraft base" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
    };

    return (
        <div className={`bg-[#1a1a1a] rounded-sm my-15 p-8 px-25 [text-shadow:_1_2px_0px_rgba(205,102,136,1)]`}>
            <Slider {...settings}>
                {quotes.map((q, index) => (
                    <div key={index} className="flex flex-col content-center border-l-3 pl-7 min-h-35">
                        <p className="text-2xl font-bold">{q.quote}</p>
                        <p>- {q.author}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

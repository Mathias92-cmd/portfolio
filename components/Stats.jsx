"use client";

import CountUp from "react-countup";
import Image from "next/image";

const stats = [
    {
        num: 2,
        text: "ème année de BUT",
    },
    {
        num: 4,
        text: "Langages de programmation",
    },
    {
        num: 15,
        text: "GitHub repository",
    },
];

/**
 * Stats component displays a list of statistics with animated counters.
 *
 * @component
 * @example
 * return (
 *   <Stats />
 * )
 */
const Stats = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
                                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}`}>
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Stats;
"use client"

import { useEffect, useState } from "react"

export default function ComingSoon() {
    const [dotIndex, setDotIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setDotIndex((prev) => (prev + 1) % 3)
        }, 500)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className=" py-20">
            <div className="container">
                <div className="flex flex-col items-center justify-center space-y-8">
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-wider">
                        Coming Soon
                        <span className="inline-flex w-24 ml-4">
                            {[0, 1, 2].map((i) => (
                                <span
                                    key={i}
                                    className={`w-4 h-4 mx-1 rounded-full transition-all duration-300 ${i === dotIndex ? "bg-gray-300 scale-100" : "bg-gray-600 scale-75"
                                        }`}
                                />
                            ))}
                        </span>
                    </h2>
                </div>
            </div>
        </section>
    )
}


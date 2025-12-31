import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock, User } from 'lucide-react';
import { featuredArticles } from '../data/articles';

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length
        );
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    const current = featuredArticles[currentSlide];

    return (
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white shadow-xl">
            {/* SLIDE */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
                {/* CONTENT */}
                <div className="flex flex-col justify-center p-8 md:p-12 z-10">
                    <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-full w-fit">
                        {current.category}
                    </span>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
                        {current.title}
                    </h1>

                    <p className="text-gray-300 text-base mb-6 max-w-xl leading-relaxed">
                        {current.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
                        <div className="flex items-center gap-2">
                            <User size={16} />
                            <span>{current.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{current.date}</span>
                        </div>
                    </div>

                    <Link
                        to={`/article/${current.id}`}
                        className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl w-fit no-underline"
                    >
                        Read More
                    </Link>
                </div>

                {/* IMAGE */}
                <div className="relative h-full min-h-[300px] md:min-h-0">
                    <img
                        src={current.image}
                        alt={current.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-gray-900/30 to-gray-900/90 md:from-transparent md:via-transparent md:to-gray-900/50" />
                </div>
            </div>

            {/* CONTROLS */}
            <div className="absolute inset-x-0 bottom-6 flex items-center justify-between px-8">
                {/* Prev */}
                <button
                    onClick={prevSlide}
                    className="p-2.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                    {featuredArticles.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-orange-500 w-8'
                                : 'bg-white/40 hover:bg-white/60 w-2'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Next */}
                <button
                    onClick={nextSlide}
                    className="p-2.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
                    aria-label="Next slide"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </section>
    );
};

export default HeroSlider;
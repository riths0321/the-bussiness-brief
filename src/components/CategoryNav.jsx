import React from 'react';
import { categories } from '../data/articles';

const CategoryNav = ({ selectedCategory, onCategoryChange }) => {
    const handleCategoryClick = (e, categoryName) => {
        e.preventDefault();
        onCategoryChange(categoryName);
        // Smooth scroll to articles section
        window.scrollTo({
            top: 400,
            behavior: 'smooth'
        });
    };

    return (
        <nav className="border-b border-gray-200 bg-white sticky top-16 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ul className="flex items-center gap-8 overflow-x-auto py-4 text-sm font-medium no-scrollbar">
                    {categories.map((category) => {
                        const isActive = selectedCategory === category.name;

                        return (
                            <li key={category.id}>
                                <button
                                    onClick={(e) => handleCategoryClick(e, category.name)}
                                    className={`whitespace-nowrap transition-colors relative group pb-1 ${isActive
                                            ? 'text-orange-600 font-semibold'
                                            : 'text-gray-700 hover:text-orange-600'
                                        }`}
                                >
                                    {category.name}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-orange-600 transition-all duration-300 ${isActive
                                                ? 'w-full'
                                                : 'w-0 group-hover:w-full'
                                            }`}
                                    ></span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default CategoryNav;
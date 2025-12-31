import React, { useMemo } from 'react';
import ArticleCard from './ArticleCard';
import { articles } from '../data/articles';

const ArticleGrid = ({ selectedCategory }) => {
    // Filter articles based on selected category
    const filteredArticles = useMemo(() => {
        if (!selectedCategory || selectedCategory === 'All') {
            return articles;
        }
        return articles.filter(article => article.category === selectedCategory);
    }, [selectedCategory]);

    // Show message if no articles found
    if (filteredArticles.length === 0) {
        return (
            <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
                <div className="text-gray-400 mb-4">
                    <svg
                        className="mx-auto h-16 w-16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                    No articles found
                </h3>
                <p className="text-gray-600 mb-6">
                    We don't have any articles in this category yet. Check back soon!
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center px-6 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
                >
                    View All Articles
                </button>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
            {filteredArticles.map((article) => (
                <div key={article.id} className="h-full">
                    <ArticleCard article={article} />
                </div>
            ))}
        </div>
    );
};

export default ArticleGrid;
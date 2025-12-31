import React, { useState, useEffect } from 'react';
import { Search, X, TrendingUp, Clock } from 'lucide-react';
import { articles, categories } from '../data/articles';

const SearchBar = ({ isOpen, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleSubmit = () => {
        if (searchQuery.trim()) {
            performSearch(searchQuery);
        }
    };

    const performSearch = (query) => {
        const lowerQuery = query.toLowerCase();

        // Search in articles (title, excerpt, author, category)
        const results = articles.filter(article =>
            article.title.toLowerCase().includes(lowerQuery) ||
            article.excerpt.toLowerCase().includes(lowerQuery) ||
            article.author.toLowerCase().includes(lowerQuery) ||
            article.category.toLowerCase().includes(lowerQuery)
        );

        setSearchResults(results);
        setShowResults(true);

        // If exact category match, redirect to filtered articles
        const matchedCategory = categories.find(cat =>
            cat.name.toLowerCase() === lowerQuery
        );

        if (matchedCategory && matchedCategory.name !== 'all') {
            window.location.href = `/articles?category=${matchedCategory.name}`;
            onClose();
        }
        // If single article match, redirect to article
        else if (results.length === 1) {
            window.location.href = `/article/${results[0].id}`;
            onClose();
        }
        // If multiple results, redirect to articles with search query
        else if (results.length > 1) {
            window.location.href = `/articles?search=${encodeURIComponent(query)}`;
            onClose();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    // Search as user types (debounced)
    useEffect(() => {
        if (searchQuery.trim().length > 2) {
            const timer = setTimeout(() => {
                const lowerQuery = searchQuery.toLowerCase();
                const results = articles.filter(article =>
                    article.title.toLowerCase().includes(lowerQuery) ||
                    article.excerpt.toLowerCase().includes(lowerQuery) ||
                    article.author.toLowerCase().includes(lowerQuery) ||
                    article.category.toLowerCase().includes(lowerQuery)
                ).slice(0, 5); // Show max 5 results

                setSearchResults(results);
                setShowResults(true);
            }, 300);

            return () => clearTimeout(timer);
        } else {
            setShowResults(false);
            setSearchResults([]);
        }
    }, [searchQuery]);

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleRecentSearchClick = (term) => {
        setSearchQuery(term);
        performSearch(term);
    };

    const handleTopicClick = (topic) => {
        setSearchQuery(topic.title);
        performSearch(topic.title);
    };

    const handleArticleClick = (articleId) => {
        window.location.href = `/article/${articleId}`;
        onClose();
    };

    const handleCategoryClick = (categoryName) => {
        window.location.href = `/articles?category=${categoryName}`;
        onClose();
    };

    if (!isOpen) return null;

    const recentSearches = ['AI Technology', 'Market Trends', 'Startups', 'Finance'];
    const popularTopics = [
        { title: 'Artificial Intelligence in Business', category: 'Tech Business' },
        { title: 'Market Analysis 2025', category: 'Market Insights' },
        { title: 'Startup Funding Guide', category: 'Guides' }
    ];

    return (
        <div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Search Input Section */}
                <div className="p-5 border-b border-gray-100">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Search articles, topics, authors..."
                            className="w-full pl-10 pr-10 py-3 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                            autoFocus
                        />
                        <button
                            onClick={onClose}
                            type="button"
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg hover:bg-gray-200 transition-colors text-gray-500"
                            aria-label="Close search"
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-5 max-h-[50vh] overflow-y-auto">
                    {/* Search Results */}
                    {showResults && searchResults.length > 0 && (
                        <div className="mb-5">
                            <div className="flex items-center gap-1.5 mb-2.5">
                                <Search size={14} className="text-gray-400" />
                                <h4 className="text-xs font-semibold text-gray-900">
                                    Search Results ({searchResults.length})
                                </h4>
                            </div>
                            <ul className="space-y-1">
                                {searchResults.map((article) => (
                                    <li key={article.id}>
                                        <button
                                            onClick={() => handleArticleClick(article.id)}
                                            className="group flex items-start gap-3 w-full p-2.5 rounded-lg hover:bg-gray-50 transition-colors text-left"
                                        >
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-12 h-12 rounded object-cover flex-shrink-0"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-xs font-medium text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                                                    {article.title}
                                                </p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-[10px] text-orange-600 font-medium">
                                                        {article.category}
                                                    </span>
                                                    <span className="text-[10px] text-gray-500">
                                                        by {article.author}
                                                    </span>
                                                </div>
                                            </div>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            {searchResults.length > 5 && (
                                <button
                                    onClick={handleSubmit}
                                    className="w-full mt-2 py-2 text-xs font-medium text-orange-600 hover:text-orange-700 transition-colors"
                                >
                                    View all results →
                                </button>
                            )}
                        </div>
                    )}

                    {/* No Results */}
                    {showResults && searchResults.length === 0 && (
                        <div className="mb-5 text-center py-4">
                            <p className="text-xs text-gray-500">No results found for "{searchQuery}"</p>
                            <p className="text-[10px] text-gray-400 mt-1">Try different keywords or browse categories</p>
                        </div>
                    )}

                    {/* Categories Quick Access */}
                    {!showResults && (
                        <div className="mb-5">
                            <div className="flex items-center gap-1.5 mb-2.5">
                                <TrendingUp size={14} className="text-gray-400" />
                                <h4 className="text-xs font-semibold text-gray-900">
                                    Browse by Category
                                </h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {categories.filter(cat => cat.name !== 'all').map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => handleCategoryClick(category.name)}
                                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-orange-50 text-orange-600 hover:bg-orange-100 transition-all duration-200"
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Recent Searches */}
                    {!showResults && (
                        <div className="mb-5">
                            <div className="flex items-center gap-1.5 mb-2.5">
                                <Clock size={14} className="text-gray-400" />
                                <h4 className="text-xs font-semibold text-gray-900">
                                    Recent Searches
                                </h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {recentSearches.map((term) => (
                                    <button
                                        key={term}
                                        onClick={() => handleRecentSearchClick(term)}
                                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-all duration-200"
                                    >
                                        {term}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Popular Topics */}
                    {!showResults && (
                        <div>
                            <div className="flex items-center gap-1.5 mb-2.5">
                                <TrendingUp size={14} className="text-gray-400" />
                                <h4 className="text-xs font-semibold text-gray-900">
                                    Trending Topics
                                </h4>
                            </div>
                            <ul className="space-y-0.5">
                                {popularTopics.map((topic) => (
                                    <li key={topic.title}>
                                        <button
                                            onClick={() => handleTopicClick(topic)}
                                            className="group flex items-center justify-between w-full p-2.5 rounded-lg hover:bg-gray-50 transition-colors text-left"
                                        >
                                            <div className="flex-1">
                                                <p className="text-xs font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                                                    {topic.title}
                                                </p>
                                                <span className="text-[10px] text-gray-500 mt-0.5 inline-block">
                                                    {topic.category}
                                                </span>
                                            </div>
                                            <Search size={14} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Footer Tip */}
                <div className="px-5 py-2.5 bg-gray-50 border-t border-gray-100">
                    <p className="text-[10px] text-gray-500 text-center">
                        Press <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-gray-700 font-mono text-[10px]">ESC</kbd> to close
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';
import { articles, featuredArticles, categories } from '../data/articles';

const Articles = () => {
    const location = useLocation();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTag, setActiveTag] = useState('');

    // FIX: Listen to URL params for BOTH Search and Category
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const searchParam = params.get('search');
        const categoryParam = params.get('category'); // Header se category aayegi

        if (searchParam) {
            setSearchQuery(searchParam);
            setActiveTag(searchParam);
            setSelectedCategory('all');
        } else if (categoryParam) {
            // Agar Header se link click hua toh yahan update hoga
            setSelectedCategory(categoryParam);
            setSearchQuery('');
            setActiveTag('');
        } else {
            // Default reset
            setSelectedCategory('all');
            setSearchQuery('');
        }
        
        window.scrollTo(0, 0); // Click karne par page upar jaye
    }, [location.search]);

    const allArticles = [...featuredArticles, ...articles];

    const filteredArticles = allArticles.filter((article) => {
        // Case-insensitive comparison for safety
        const matchesCategory = selectedCategory === 'all' || 
            article.category.toLowerCase() === selectedCategory.toLowerCase();
        
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch = !searchQuery || 
            article.title.toLowerCase().includes(searchLower) ||
            article.excerpt.toLowerCase().includes(searchLower) ||
            article.category.toLowerCase().includes(searchLower) ||
            article.author.toLowerCase().includes(searchLower);
        
        return matchesCategory && matchesSearch;
    });

    const handleClearSearch = () => {
        setSearchQuery('');
        setActiveTag('');
        window.history.pushState({}, '', '/articles');
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setSearchQuery('');
        setActiveTag('');
        // URL update karein bina page reload kiye
        const newUrl = category === 'all' ? '/articles' : `/articles?category=${category}`;
        window.history.pushState({}, '', newUrl);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {selectedCategory === 'all' ? 'All Articles' : selectedCategory}
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Explore our collection of business insights, market analysis, and expert opinions.
                    </p>
                </div>
            </section>

            <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setActiveTag('');
                                }}
                                className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            {searchQuery && (
                                <button onClick={handleClearSearch} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                    <X size={18} />
                                </button>
                            )}
                        </div>

                        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
                            <Filter size={18} className="text-gray-600 hidden md:block flex-shrink-0" />
                            <button
                                onClick={() => handleCategorySelect('all')}
                                className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
                                    selectedCategory === 'all' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                All
                            </button>
                            {categories.filter(c => c.name !== 'All').map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => handleCategorySelect(category.name)}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
                                        selectedCategory.toLowerCase() === category.name.toLowerCase()
                                            ? 'bg-orange-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {(activeTag || searchQuery) && (
                        <div className="mt-4 flex items-center gap-2 flex-wrap">
                            <span className="text-sm text-gray-600">Active filters:</span>
                            {activeTag && (
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                                    Tag: {activeTag}
                                    <button onClick={handleClearSearch} className="hover:text-orange-900"><X size={14} /></button>
                                </span>
                            )}
                            {searchQuery && !activeTag && (
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                                    Search: "{searchQuery}"
                                    <button onClick={handleClearSearch} className="hover:text-orange-900"><X size={14} /></button>
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <section className="lg:col-span-2">
                        <div className="mb-6 flex items-center justify-between">
                            <p className="text-sm text-gray-600">
                                {filteredArticles.length > 0 ? (
                                    <>Showing <span className="font-semibold text-gray-900">{filteredArticles.length}</span> {filteredArticles.length === 1 ? 'article' : 'articles'}</>
                                ) : 'No articles found'}
                            </p>
                        </div>

                        {filteredArticles.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {filteredArticles.map((article) => (
                                    <ArticleCard key={article.id} article={article} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                                <Search size={48} className="mx-auto text-gray-400 mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
                                <button onClick={handleClearSearch} className="mt-4 px-6 py-2.5 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors">
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </section>

                    <aside className="lg:col-span-1">
                        <div className="sticky top-32">
                            <Sidebar />
                        </div>
                    </aside>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Articles;
import React, { useState, useMemo } from 'react';
import TrendingCard from './TrendingCard';
import { trendingArticles, articles } from '../data/articles';

const Sidebar = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (email) {
            alert('Thank you for subscribing!');
            setEmail('');
        }
    };

    // Generate tags from articles dynamically
    const popularTags = useMemo(() => {
        const tagMap = {};

        articles.forEach(article => {
            // Extract words from title and excerpt for tags
            const words = [
                ...article.title.split(' '),
                ...article.excerpt.split(' ')
            ];

            // Common business/tech keywords
            const keywords = ['AI', 'Market', 'Technology', 'Startup', 'Finance',
                'Business', 'Investment', 'Innovation', 'Strategy',
                'Growth', 'Leadership', 'Digital', 'Data', 'Cloud'];

            words.forEach(word => {
                const cleanWord = word.replace(/[^a-zA-Z]/g, '');
                if (keywords.some(kw => cleanWord.toLowerCase().includes(kw.toLowerCase()))) {
                    const tag = keywords.find(kw => cleanWord.toLowerCase().includes(kw.toLowerCase()));
                    tagMap[tag] = (tagMap[tag] || 0) + 1;
                }
            });

            // Also add category as tag
            if (article.category) {
                const categoryWords = article.category.split(' ');
                categoryWords.forEach(word => {
                    tagMap[word] = (tagMap[word] || 0) + 1;
                });
            }
        });

        // Sort by frequency and return top 8
        return Object.entries(tagMap)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 8)
            .map(([tag]) => tag);
    }, []);

    const handleTagClick = (tag) => {
        // Redirect to articles page with search query
        window.location.href = `/articles?search=${encodeURIComponent(tag)}`;
    };

    return (
        <aside className="space-y-6">
            {/* Trending Section */}
            <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="flex items-center gap-2 text-base font-bold text-gray-900 mb-5">
                    <span className="text-xl">🔥</span>
                    <span>Trending Now</span>
                </h3>

                <div className="space-y-4">
                    {trendingArticles.map((article) => (
                        <TrendingCard key={article.id} article={article} />
                    ))}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                    📬 Subscribe to Newsletter
                </h3>

                <p className="text-sm text-gray-700 mb-5 leading-relaxed">
                    Get the latest business insights delivered to your inbox weekly.
                </p>

                <div className="space-y-3">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    />

                    <button
                        onClick={handleSubscribe}
                        className="w-full px-4 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-sm hover:shadow-md text-sm"
                    >
                        Subscribe Now
                    </button>
                </div>
            </section>

            {/* Tags Section */}
            <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-gray-900 mb-4">
                    🏷️ Popular Tags
                </h3>

                <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => handleTagClick(tag)}
                            className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700 border border-gray-200 hover:border-orange-300 transition-all duration-300 cursor-pointer"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </section>
        </aside>
    );
};

export default Sidebar;
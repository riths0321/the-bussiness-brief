import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    Clock, User, Calendar, ArrowLeft, Share2, Bookmark,
    Heart, MessageCircle, Facebook, Twitter, Linkedin, Mail
} from 'lucide-react';
import { detailedArticles, articles, featuredArticles } from '../data/articles';

// 🔹 INLINE BOLD FORMAT SUPPORT (**text**)
const renderInlineFormatting = (text) => {
    return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return (
                <strong key={i} className="font-semibold text-gray-900">
                    {part.replace(/\*\*/g, '')}
                </strong>
            );
        }
        return part;
    });
};

const ArticlePage = () => {
    const { id } = useParams();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [claps, setClaps] = useState(0);

    // Find article in detailedArticles first, then fall back to basic articles
    const detailedArticle = detailedArticles.find(a => a.id === id);
    const allArticles = [...featuredArticles, ...articles];
    const basicArticle = allArticles.find(a => a.id === parseInt(id));

    const article = detailedArticle || basicArticle;

    // Get related articles (same category, different id)
    const relatedArticles = allArticles
        .filter(a => a.category === article?.category && a.id !== parseInt(id))
        .slice(0, 3);

    // Initialize claps from article data
    React.useEffect(() => {
        if (detailedArticle?.claps) {
            setClaps(detailedArticle.claps);
        }
    }, [detailedArticle]);

    const handleClap = () => {
        setClaps(prev => prev + 1);
    };

    if (!article) {
        return (
            <>
                <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    // Check if it's a detailed article with full content
    const isDetailedArticle = !!detailedArticle;
    const author = isDetailedArticle ? article.author : { name: article.author };
    const publishDate = isDetailedArticle ? article.publishedDate : article.date;

    return (
        <>
            <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

            <main className="min-h-screen bg-gray-50">
                {/* Hero Section with Article Image Background */}
                <div className="relative h-[500px] bg-gray-900 overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90"></div>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute inset-0 flex items-center z-10">
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className="max-w-4xl">
                                <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                                    {article.category}
                                </span>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                                    {article.title}
                                </h1>
                                {isDetailedArticle && article.subtitle && (
                                    <p className="text-xl text-gray-200 leading-relaxed">
                                        {article.subtitle}
                                    </p>
                                )}
                                {!isDetailedArticle && article.excerpt && (
                                    <p className="text-lg text-gray-200 leading-relaxed">
                                        {article.excerpt}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
                    {/* Article Card */}
                    <article className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                        {/* Meta Info Card */}
                        <div className="bg-gradient-to-r from-orange-50 via-white to-orange-50 px-8 py-6 border-b border-gray-200">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                {/* Author Info */}
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        {author.avatar ? (
                                            <img
                                                src={author.avatar}
                                                alt={author.name}
                                                className="w-14 h-14 rounded-full object-cover border-2 border-orange-200"
                                            />
                                        ) : (
                                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                                                {author.name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-lg">{author.name}</p>
                                        {author.bio && (
                                            <p className="text-xs text-gray-600 mt-0.5 max-w-md">{author.bio}</p>
                                        )}
                                        {author.followers && (
                                            <p className="text-xs text-gray-500 mt-1">
                                                {author.followers.toLocaleString()} followers
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Meta Stats */}
                                <div className="flex items-center gap-6 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-orange-600" />
                                        <span>{publishDate}</span>
                                    </div>
                                    {isDetailedArticle && (
                                        <>
                                            <div className="flex items-center gap-2">
                                                <Clock size={16} className="text-orange-600" />
                                                <span>{article.readTime} min read</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MessageCircle size={16} className="text-orange-600" />
                                                <span>{article.comments}</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={handleClap}
                                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all group"
                                    >
                                        <Heart size={18} className="text-gray-600 group-hover:text-orange-600 transition-colors" />
                                        <span className="text-sm font-semibold text-gray-700 group-hover:text-orange-600">
                                            {claps.toLocaleString()}
                                        </span>
                                    </button>

                                    <button
                                        onClick={() => setIsBookmarked(!isBookmarked)}
                                        className={`p-2.5 rounded-lg transition-all border ${isBookmarked
                                            ? 'bg-orange-50 border-orange-300 text-orange-600'
                                            : 'bg-white border-gray-300 text-gray-600 hover:border-orange-300 hover:bg-orange-50'
                                            }`}
                                        title="Bookmark"
                                    >
                                        <Bookmark size={18} fill={isBookmarked ? 'currentColor' : 'none'} />
                                    </button>

                                    <button
                                        className="p-2.5 bg-white border border-gray-300 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-all text-gray-600"
                                        title="Share"
                                    >
                                        <Share2 size={18} />
                                    </button>
                                </div>

                                {/* Tags */}
                                {isDetailedArticle && article.tags && (
                                    <div className="hidden md:flex items-center gap-2">
                                        {article.tags.slice(0, 3).map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-orange-100 hover:text-orange-700 cursor-pointer transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Article Content */}
                        <div className="px-8 md:px-12 py-12">
                            {isDetailedArticle ? (
                                // Render detailed content with markdown-style formatting
                                <div className="prose prose-lg max-w-none">
                                    {article.content.split('\n\n').map((block, index) => {

                                        const text = block.trim();

                                        // MAIN HEADING
                                        if (text.startsWith('# ')) {
                                            return (
                                                <h1 key={index} className="text-4xl font-extrabold text-gray-900 mt-14 mb-8">
                                                    {text.replace('# ', '')}
                                                </h1>
                                            );
                                        }

                                        // SECTION HEADING
                                        if (text.startsWith('## ')) {
                                            return (
                                                <h2 key={index} className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                                                    {text.replace('## ', '')}
                                                </h2>
                                            );
                                        }

                                        // SUB HEADING
                                        if (text.startsWith('### ')) {
                                            return (
                                                <h3 key={index} className="text-xl font-semibold text-gray-800 mt-8 mb-4">
                                                    {text.replace('### ', '')}
                                                </h3>
                                            );
                                        }

                                        // QUOTE
                                        if (text.startsWith('>')) {
                                            return (
                                                <blockquote
                                                    key={index}
                                                    className="border-l-4 border-orange-500 pl-6 py-4 my-8 bg-orange-50 rounded-r-xl italic text-lg text-gray-800"
                                                >
                                                    {renderInlineFormatting(text.replace(/^>\s?/, ''))}
                                                </blockquote>
                                            );
                                        }

                                        // BULLET POINTS
                                        if (text.startsWith('- ')) {
                                            return (
                                                <ul key={index} className="list-disc pl-6 mb-6 text-lg text-gray-700">
                                                    {text.split('\n').map((item, i) => (
                                                        <li key={i}>{renderInlineFormatting(item.replace('- ', ''))}</li>
                                                    ))}
                                                </ul>
                                            );
                                        }

                                        // NORMAL PARAGRAPH
                                        return (
                                            <p key={index} className="text-gray-700 text-lg mb-6 leading-relaxed">
                                                {renderInlineFormatting(text)}
                                            </p>
                                        );
                                    })}


                                </div>
                            ) : (
                                // Render basic article with placeholder content
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                        {article.excerpt}
                                    </p>

                                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                                        Key Insights
                                    </h2>

                                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <blockquote className="border-l-4 border-orange-500 pl-8 py-6 my-10 bg-gradient-to-r from-orange-50 to-transparent rounded-r-xl">
                                        <p className="text-xl italic text-gray-800 font-medium leading-relaxed">
                                            "Innovation distinguishes between a leader and a follower. The future belongs to those who prepare for it today."
                                        </p>
                                        <cite className="text-sm text-gray-600 mt-2 block not-italic">— Industry Expert</cite>
                                    </blockquote>

                                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                                        Looking Ahead
                                    </h2>

                                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            )}

                            {/* Share Section */}
                            <div className="mt-16 pt-8 border-t border-gray-200">
                                <p className="text-base font-bold text-gray-900 mb-4">Share this article</p>
                                <div className="flex flex-wrap items-center gap-3">
                                    <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                                        <Facebook size={16} />
                                        <span className="text-sm font-semibold">Facebook</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-5 py-2.5 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-all shadow-md hover:shadow-lg">
                                        <Twitter size={16} />
                                        <span className="text-sm font-semibold">Twitter</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all shadow-md hover:shadow-lg">
                                        <Linkedin size={16} />
                                        <span className="text-sm font-semibold">LinkedIn</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all shadow-md hover:shadow-lg">
                                        <Mail size={16} />
                                        <span className="text-sm font-semibold">Email</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Related Articles */}
                    {relatedArticles.length > 0 && (
                        <div className="mt-16 mb-20">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-3xl font-bold text-gray-900">Related Articles</h3>
                                <button
                                    onClick={() => window.location.href = '/articles'}
                                    className="text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors cursor-pointer"
                                >
                                    View All →
                                </button>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {relatedArticles.map((related) => (
                                    <div
                                        key={related.id}
                                        onClick={() => window.location.href = `/article/${related.id}`}
                                        className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                                    >
                                        <div className="relative aspect-video overflow-hidden bg-gray-100">
                                            <img
                                                src={related.image}
                                                alt={related.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <span className="inline-block bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                                                {related.category}
                                            </span>
                                            <h4 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2 leading-snug">
                                                {related.title}
                                            </h4>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <Clock size={12} />
                                                <span>{related.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
};

export default ArticlePage;
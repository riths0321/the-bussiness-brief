import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import CategoryNav from '../components/CategoryNav';
import ArticleGrid from '../components/ArticleGrid';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Home = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Header
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            {/* Main Content */}
            <main>
                {/* Hero / Featured */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <HeroSlider />
                    </div>
                </section>

                {/* Categories */}
                <CategoryNav
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                />

                {/* Content Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Articles */}
                        <section className="lg:col-span-2">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {selectedCategory === 'All'
                                        ? 'Latest Articles'
                                        : `${selectedCategory} Articles`}
                                </h2>
                                <a
                                    href="/articles"
                                    className="text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                                >
                                    View All →
                                </a>
                            </div>
                            <ArticleGrid selectedCategory={selectedCategory} />
                        </section>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-20">
                                <Sidebar />
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
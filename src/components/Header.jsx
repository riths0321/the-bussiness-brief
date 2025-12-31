import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import SearchBar from './SearchBar';
import SignInModal from '../components/SignInModal';
import SignUpModal from '../components/SignUpModal';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [signInOpen, setSignInOpen] = useState(false);
    const [signUpOpen, setSignUpOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Search Bar Modal */}
            <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

            {/* Auth Modals */}
            <SignInModal
                isOpen={signInOpen}
                onClose={() => setSignInOpen(false)}
                onSwitchToSignUp={() => {
                    setSignInOpen(false);
                    setSignUpOpen(true);
                }}
            />
            <SignUpModal
                isOpen={signUpOpen}
                onClose={() => setSignUpOpen(false)}
                onSwitchToSignIn={() => {
                    setSignUpOpen(false);
                    setSignInOpen(true);
                }}
            />

            {/* HEADER */}
            <header
                className={`fixed top-0 inset-x-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2.5 font-bold text-lg group">
                        <div className="w-8 h-8 flex items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-orange-600 text-white text-sm shadow-sm group-hover:shadow-md transition-shadow">
                            B
                        </div>
                        <span className="text-gray-900 tracking-tight">TheBusinessBrief</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a
                            href="/"
                            className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors relative group"
                        >
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a
                            href="/articles?category=Editorials"
                            className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors relative group"
                        >
                            Editorials
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a
                            href="/articles?category=Strategy"
                            className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors relative group"
                        >
                            Strategy
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a
                            href="/articles?category=Opinion"
                            className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors relative group"
                        >
                            Opinion
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a
                            href="/articles?category=Guides"
                            className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors relative group"
                        >
                            Guides
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={() => setSearchOpen(true)}
                            aria-label="Search"
                            className="p-2.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
                        >
                            <Search size={18} />
                        </button>

                        <button
                            onClick={() => setSignInOpen(true)}
                            className="px-5 py-2 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
                        >
                            Sign In
                        </button>

                        <button
                            onClick={() => setSignUpOpen(true)}
                            className="px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Actions + Menu Button */}
                    <div className="flex md:hidden items-center gap-2">
                        <button
                            onClick={() => setSearchOpen(true)}
                            aria-label="Search"
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
                        >
                            <Search size={18} />
                        </button>

                        <button
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* MOBILE MENU */}
            <div
                className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="pt-20 px-6">
                    <nav className="flex flex-col gap-6 text-base font-medium">
                        <a
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-700 hover:text-orange-600 transition-colors py-2 border-b border-gray-100"
                        >
                            Home
                        </a>
                        <a
                            href="/articles?category=Markets"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-700 hover:text-orange-600 transition-colors py-2 border-b border-gray-100"
                        >
                            Markets
                        </a>
                        <a
                            href="/articles?category=Strategy"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-700 hover:text-orange-600 transition-colors py-2 border-b border-gray-100"
                        >
                            Strategy
                        </a>
                        <a
                            href="/articles?category=Opinion"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-700 hover:text-orange-600 transition-colors py-2 border-b border-gray-100"
                        >
                            Opinion
                        </a>

                        <div className="flex flex-col gap-3 mt-4">
                            <button
                                onClick={() => setSignInOpen(true)}
                                className="px-6 py-3 text-gray-700 text-sm font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300 w-full"
                            >
                                Sign In
                            </button>

                            <button
                                onClick={() => setSignUpOpen(true)}
                                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-sm hover:shadow-md w-full"
                            >
                                Sign Up
                            </button>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Spacer to prevent content jump */}
            <div className="h-16" />
        </>
    );
};

export default Header;
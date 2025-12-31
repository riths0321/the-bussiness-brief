import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-16">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* About */}
                <div>
                    <a href="/" className="flex items-center gap-2.5 mb-4 font-bold text-lg group">
                        <div className="w-8 h-8 flex items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-orange-600 text-white text-sm shadow-sm">
                            B
                        </div>
                        <span className="text-gray-900 tracking-tight">TheBusinessBrief</span>
                    </a>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Your trusted source for business insights, market analysis,
                        and entrepreneurial guides.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
                    <ul className="space-y-2.5 text-sm">
                        <li>
                            <a href="/" className="text-gray-600 hover:text-orange-600 transition-colors">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="text-gray-600 hover:text-orange-600 transition-colors">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="text-gray-600 hover:text-orange-600 transition-colors">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="/advertise" className="text-gray-600 hover:text-orange-600 transition-colors">
                                Advertise
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-4">Categories</h4>
                    <ul className="space-y-2.5 text-sm">
                        <li>
                            <a href="/articles?category=Tech Business" className="text-gray-600 hover:text-orange-600 transition-colors">
                                Tech Business
                            </a>
                        </li>
                        <li>
                            <a href="/articles?category=Market Insights" className="text-gray-600 hover:text-orange-600 transition-colors">
                                Market Insights
                            </a>
                        </li>
                        <li>
                            <a href="/articles?category=Editorials" className="text-gray-600 hover:text-orange-600 transition-colors">
                                Editorials
                            </a>
                        </li>
                        <li>
                            <a href="/articles?category=Guides" className="text-gray-600 hover:text-orange-600 transition-colors">
                                Guides
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-4">Connect</h4>

                    <div className="flex items-center gap-2 mb-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-orange-600 transition-all"
                        >
                            <Facebook size={18} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-orange-600 transition-all"
                        >
                            <Twitter size={18} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-orange-600 transition-all"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-orange-600 transition-all"
                        >
                            <Instagram size={18} />
                        </a>
                    </div>

                    <a
                        href="mailto:contact@businessbrief.com"
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors"
                    >
                        <Mail size={16} />
                        <span>contact@thebusinessbrief.com</span>
                    </a>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
                    <span>© 2025 TheBusinessBrief. All rights reserved.</span>

                    <div className="flex items-center gap-6">
                        <a href="/privacy" className="hover:text-orange-600 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="/terms" className="hover:text-orange-600 transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React, { useState } from 'react';
import { Users, TrendingUp, Target, Award, Mail, Phone, MapPin, Check } from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Advertise = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        budget: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you! Our team will contact you soon.');
        setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            budget: '',
            message: ''
        });
    };

    const stats = [
        { icon: Users, value: '500K+', label: 'Monthly Readers' },
        { icon: TrendingUp, value: '2M+', label: 'Page Views' },
        { icon: Target, value: '85%', label: 'Engagement Rate' },
        { icon: Award, value: 'Top 10', label: 'Business Publications' }
    ];

    const packages = [
        {
            name: 'Starter',
            price: '$499',
            period: '/month',
            features: [
                'Banner Ads (728x90)',
                '50,000 Impressions',
                'Standard Placement',
                'Basic Analytics',
                'Email Support'
            ],
            popular: false
        },
        {
            name: 'Professional',
            price: '$1,299',
            period: '/month',
            features: [
                'Premium Banner Ads',
                '200,000 Impressions',
                'Priority Placement',
                'Advanced Analytics',
                'Sponsored Content (1/month)',
                'Dedicated Account Manager',
                'Priority Support'
            ],
            popular: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: '',
            features: [
                'Full Page Takeovers',
                'Unlimited Impressions',
                'Premium Placement',
                'Custom Analytics Dashboard',
                'Sponsored Content (4/month)',
                'Newsletter Feature',
                'Social Media Promotion',
                'Dedicated Account Team'
            ],
            popular: false
        }
    ];

    const adFormats = [
        {
            title: 'Display Ads',
            description: 'Eye-catching banner ads across our website',
            sizes: ['728x90', '300x250', '160x600']
        },
        {
            title: 'Sponsored Content',
            description: 'Native advertising that blends with our editorial content',
            sizes: ['Article Format', 'Video Content']
        },
        {
            title: 'Newsletter Ads',
            description: 'Direct access to our engaged email subscribers',
            sizes: ['Header', 'Mid-content', 'Footer']
        },
        {
            title: 'Social Media',
            description: 'Promoted posts across our social channels',
            sizes: ['LinkedIn', 'Twitter', 'Facebook']
        }
    ];

    return (

        <>
            <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Reach Business Leaders & Decision Makers
                        </h1>
                        <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
                            Connect with our engaged audience of entrepreneurs, investors, and business professionals through targeted advertising solutions.
                        </p>
                        <button
                            onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Get Started Today
                        </button>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                                        <stat.icon className="text-orange-600" size={28} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                                    <p className="text-sm text-gray-600">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Advertising Packages */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Advertising Packages
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Choose the perfect plan to meet your marketing goals
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {packages.map((pkg, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl ${pkg.popular ? 'ring-2 ring-orange-500 transform scale-105' : ''
                                        }`}
                                >
                                    {pkg.popular && (
                                        <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold">
                                            Most Popular
                                        </div>
                                    )}
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                        <div className="mb-6">
                                            <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                                            <span className="text-gray-600">{pkg.period}</span>
                                        </div>
                                        <ul className="space-y-3 mb-8">
                                            {pkg.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <Check className="text-orange-500 flex-shrink-0 mt-0.5" size={20} />
                                                    <span className="text-sm text-gray-600">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <button
                                            onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                                            className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${pkg.popular
                                                ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-lg'
                                                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                                }`}
                                        >
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ad Formats */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Advertising Formats
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Multiple ways to showcase your brand
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {adFormats.map((format, index) => (
                                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-all duration-300">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{format.title}</h3>
                                    <p className="text-gray-600 mb-4">{format.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {format.sizes.map((size, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700"
                                            >
                                                {size}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <section id="contact-form" className="py-16 bg-gray-50">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    Let's Start Your Campaign
                                </h2>
                                <p className="text-gray-600">
                                    Fill out the form below and our team will get back to you within 24 hours
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Company Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                            placeholder="Your Company"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Budget Range *
                                    </label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    >
                                        <option value="">Select budget range</option>
                                        <option value="under-500">Under $500</option>
                                        <option value="500-1000">$500 - $1,000</option>
                                        <option value="1000-5000">$1,000 - $5,000</option>
                                        <option value="5000-10000">$5,000 - $10,000</option>
                                        <option value="10000+">$10,000+</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Tell us about your campaign *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                                        placeholder="Describe your advertising goals, target audience, and any specific requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    Submit Inquiry
                                </button>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                    <Mail size={20} className="text-orange-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Email</p>
                                    <p className="text-sm">ads@businessbrief.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                    <Phone size={20} className="text-orange-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Phone</p>
                                    <p className="text-sm">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                    <MapPin size={20} className="text-orange-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Location</p>
                                    <p className="text-sm">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Advertise;
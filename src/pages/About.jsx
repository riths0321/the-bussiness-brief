import React, { useState, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Target, Award, TrendingUp } from 'lucide-react';
import { SubscribeContext } from '../App';

const About = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { openSubscribePopup } = useContext(SubscribeContext);

    const stats = [
        { icon: Users, value: '10M+', label: 'Monthly Readers' },
        { icon: TrendingUp, value: '500+', label: 'Articles Published' },
        { icon: Award, value: '15+', label: 'Industry Awards' },
        { icon: Target, value: '50+', label: 'Expert Writers' }
    ];

    const team = [
        {
            name: 'Sarah Johnson',
            role: 'Editor-in-Chief',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop'
        },
        {
            name: 'Michael Chen',
            role: 'Tech Business Lead',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
        },
        {
            name: 'Emily Roberts',
            role: 'Market Insights Director',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop'
        },
        {
            name: 'David Park',
            role: 'Editorial Manager',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop'
        }
    ];

    return (
        <>
            <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
                    <div className="container-page">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                About TheBusinessBrief
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                We're on a mission to deliver the most insightful business news, market analysis,
                                and entrepreneurial guidance to professionals worldwide.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container-page">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                        <stat.icon className="text-primary" size={32} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                                    <p className="text-gray-600">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-16">
                    <div className="container-page">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Founded in 2020, TheBusinessBrief started with a simple mission: to make business
                                        news accessible, insightful, and actionable for everyone—from young professionals
                                        to seasoned entrepreneurs.
                                    </p>
                                    <p>
                                        What began as a small newsletter has grown into a trusted source for millions of
                                        readers seeking clarity in an increasingly complex business landscape. Our team of
                                        expert writers and analysts works tirelessly to bring you the stories that matter.
                                    </p>
                                    <p>
                                        Today, we cover everything from tech innovations and market movements to startup
                                        strategies and leadership insights, always with the goal of empowering our readers
                                        to make better business decisions.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                                    alt="Team collaboration"
                                    className="rounded-lg shadow-lg w-full h-auto"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Values */}
                <section className="py-16 bg-gray-50">
                    <div className="container-page">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <h3 className="text-xl font-bold mb-4 text-primary">Accuracy First</h3>
                                <p className="text-gray-700">
                                    We verify every fact and source multiple perspectives to ensure our readers
                                    get the most accurate information possible.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <h3 className="text-xl font-bold mb-4 text-primary">Clarity & Insight</h3>
                                <p className="text-gray-700">
                                    We break down complex business topics into clear, actionable insights that
                                    anyone can understand and apply.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <h3 className="text-xl font-bold mb-4 text-primary">Independence</h3>
                                <p className="text-gray-700">
                                    Our editorial integrity is non-negotiable. We report without bias and maintain
                                    complete independence from advertisers.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16">
                    <div className="container-page">
                        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, index) => (
                                <div key={index} className="text-center">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                                        loading="lazy"
                                    />
                                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                                    <p className="text-gray-600 text-sm">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-primary text-white">
                    <div className="container-page text-center">
                        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
                        <p className="text-xl mb-8 text-white/90">
                            Stay updated with the latest business insights delivered to your inbox.
                        </p>
                        <button
                            onClick={openSubscribePopup}
                            className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                        >
                            Subscribe Now
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default About;
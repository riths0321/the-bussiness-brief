import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Us',
            details: 'contact@businessbrief.com',
            link: 'mailto:contact@businessbrief.com'
        },
        {
            icon: Phone,
            title: 'Call Us',
            details: '+1 (555) 123-4567',
            link: 'tel:+15551234567'
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            details: '123 Business Street, New York, NY 10001',
            link: '#'
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
                                Get In Touch
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Have a question, feedback, or story tip? We'd love to hear from you.
                                Reach out and our team will get back to you within 24 hours.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className="py-16 bg-gray-50">
                    <div className="container-page">
                        <div className="grid md:grid-cols-3 gap-8">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                        <info.icon className="text-primary" size={28} />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                                    <p className="text-gray-600">{info.details}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <section className="py-16">
                    <div className="container-page">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                                <p className="text-gray-600">
                                    Fill out the form below and we'll respond as soon as possible.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Send size={20} />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container-page">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <h3 className="font-bold text-lg mb-2">How can I contribute an article?</h3>
                                    <p className="text-gray-600">
                                        We welcome guest contributions! Please send your pitch or completed article to
                                        editorial@thebusinessbrief.com with your credentials and writing samples.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <h3 className="font-bold text-lg mb-2">How do I advertise with TheBusinessBrief?</h3>
                                    <p className="text-gray-600">
                                        For advertising inquiries, please contact our partnerships team at
                                        advertise@thebusinessbrief.com or call +1 (555) 123-4567.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <h3 className="font-bold text-lg mb-2">Can I republish your content?</h3>
                                    <p className="text-gray-600">
                                        Please reach out to rights@thebusinessbrief.com for content licensing and
                                        republishing permissions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Contact;
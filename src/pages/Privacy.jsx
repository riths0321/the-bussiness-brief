import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, Users } from 'lucide-react';

const Privacy = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const sections = [
        {
            id: 'information-collection',
            title: '1. Information We Collect',
            content: `We collect information that you provide directly to us, including:
      
• Personal information (name, email address, phone number)
• Account credentials and preferences
• Communication data when you contact us
• Payment information for subscriptions
• Usage data and analytics through cookies and similar technologies

We collect this information when you subscribe to our newsletter, create an account, make a purchase, or interact with our website.`
        },
        {
            id: 'use-of-information',
            title: '2. How We Use Your Information',
            content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Send you newsletters and marketing communications
• Respond to your comments and questions
• Analyze usage patterns and optimize user experience
• Detect, prevent, and address technical issues
• Comply with legal obligations

We will never sell your personal information to third parties.`
        },
        {
            id: 'data-sharing',
            title: '3. Information Sharing and Disclosure',
            content: `We may share your information in the following circumstances:

• With service providers who assist in our operations
• When required by law or to respond to legal process
• To protect our rights, privacy, safety, or property
• In connection with a merger, sale, or acquisition
• With your consent or at your direction

We ensure all third parties we work with maintain appropriate security measures.`
        },
        {
            id: 'cookies',
            title: '4. Cookies and Tracking Technologies',
            content: `We use cookies and similar tracking technologies to:

• Remember your preferences and settings
• Understand how you use our website
• Improve our content and functionality
• Deliver personalized content and advertisements

You can control cookies through your browser settings. However, disabling cookies may limit certain features of our website.`
        },
        {
            id: 'data-security',
            title: '5. Data Security',
            content: `We implement appropriate technical and organizational measures to protect your personal information, including:

• Encryption of data in transit and at rest
• Regular security assessments and updates
• Access controls and authentication
• Secure data storage and backup procedures

While we strive to protect your information, no method of transmission over the internet is 100% secure.`
        },
        {
            id: 'your-rights',
            title: '6. Your Rights and Choices',
            content: `You have the right to:

• Access and update your personal information
• Request deletion of your data
• Opt-out of marketing communications
• Restrict or object to data processing
• Data portability

To exercise these rights, contact us at privacy@businessbrief.com.`
        },
        {
            id: 'children',
            title: '7. Children\'s Privacy',
            content: `Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information.`
        },
        {
            id: 'international',
            title: '8. International Data Transfers',
            content: `Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.`
        },
        {
            id: 'changes',
            title: '9. Changes to This Policy',
            content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.`
        },
        {
            id: 'contact',
            title: '10. Contact Us',
            content: `If you have any questions about this Privacy Policy, please contact us:

Email: privacy@businessbrief.com
Phone: +1 (555) 123-4567
Address: 123 Business Street, New York, NY 10001`
        }
    ];

    const highlights = [
        {
            icon: Shield,
            title: 'Data Protection',
            description: 'We use industry-standard security measures to protect your information'
        },
        {
            icon: Lock,
            title: 'Secure Storage',
            description: 'Your data is encrypted and stored securely in protected servers'
        },
        {
            icon: Eye,
            title: 'Transparency',
            description: 'We are transparent about how we collect and use your information'
        },
        {
            icon: Users,
            title: 'Your Control',
            description: 'You have full control over your data and privacy preferences'
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
                                Privacy Policy
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed mb-4">
                                Your privacy is important to us. This policy explains how we collect, use,
                                and protect your personal information.
                            </p>
                            <p className="text-sm text-gray-400">
                                Last Updated: December 30, 2025
                            </p>
                        </div>
                    </div>
                </section>

                {/* Highlights Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container-page">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {highlights.map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                                        <item.icon className="text-primary" size={24} />
                                    </div>
                                    <h3 className="font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Privacy Policy Content */}
                <section className="py-16">
                    <div className="container-page">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
                                {sections.map((section, index) => (
                                    <div key={section.id} className={index > 0 ? 'mt-12' : ''}>
                                        <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                                        <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                                            {section.content}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Links */}
                            <div className="mt-12 bg-gray-50 rounded-lg p-8">
                                <h3 className="font-bold text-lg mb-4">Quick Navigation</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {sections.map((section) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="text-primary hover:underline text-sm"
                                        >
                                            {section.title}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-primary text-white">
                    <div className="container-page text-center">
                        <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
                        <p className="text-xl mb-8 text-white/90">
                            If you have any concerns about your privacy, we're here to help.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Privacy;